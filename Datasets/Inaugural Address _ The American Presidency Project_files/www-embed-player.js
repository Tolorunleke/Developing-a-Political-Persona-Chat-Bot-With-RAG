(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function ia(a,b){a.raw=b;return a}
function v(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ja(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||la});
var ma=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},na=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),oa;
if(typeof Object.setPrototypeOf=="function")oa=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;
function x(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ba=b.prototype}
function va(){this.A=!1;this.u=null;this.i=void 0;this.h=1;this.D=this.o=0;this.J=this.j=null}
function wa(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
va.prototype.H=function(a){this.i=a};
function xa(a,b){a.j={exception:b,dd:!0};a.h=a.o||a.D}
va.prototype.return=function(a){this.j={return:a};this.h=this.D};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.F=function(a){this.h=a};
function ya(a,b,c){a.o=b;c!=void 0&&(a.D=c)}
function za(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Aa(a){var b=a.J.splice(0)[0];(b=a.j=a.j||b)?b.dd?a.h=a.o||a.D:b.F!=void 0&&a.D<b.F?(a.h=b.F,a.j=null):a.h=a.D:a.h=0}
function Ba(a){this.h=new va;this.i=a}
function Ca(a,b){wa(a.h);var c=a.h.u;if(c)return Da(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ea(a)}
function Da(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.u=null,xa(a.h,g),Ea(a)}a.h.u=null;d.call(a.h,f);return Ea(a)}
function Ea(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.dd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Fa(a){this.next=function(b){wa(a.h);a.h.u?b=Da(a,a.h.u.next,b,a.h.H):(a.h.H(b),b=Ea(a));return b};
this.throw=function(b){wa(a.h);a.h.u?b=Da(a,a.h.u["throw"],b,a.h.H):(xa(a.h,b),b=Ea(a));return b};
this.return=function(b){return Ca(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ga(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function z(a){return Ga(new Fa(new Ba(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return na});
u("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.D()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.D=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.D)}};
b.prototype.W=function(g){if(g===this)this.D(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ha(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.V(g):this.u(g)}};
b.prototype.V=function(g){var h=void 0;try{h=g.then}catch(k){this.D(k);return}typeof h=="function"?this.pa(h,g):this.u(g)};
b.prototype.D=function(g){this.H(2,g)};
b.prototype.u=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ea();this.J()};
b.prototype.ea=function(){var g=this;e(function(){if(g.T()){var h=da.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.T=function(){if(this.A)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.J=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ha=function(g){var h=this.o();g.Vb(h.resolve,h.reject)};
b.prototype.pa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(w){try{l(r(w))}catch(y){m(y)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.Vb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Vb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),m=l.next();!m.done;m=l.next())d(m.value).Vb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(y){r[w]=y;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Vb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||sa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ka(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ka(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ka(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ka(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ha(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ha(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||da});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
u("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ja=Ja||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Na(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Oa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Qa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(Math.random()*1E9>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Wa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ua:Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(){return Date.now()}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var db;function eb(){if(db===void 0){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){C.console&&C.console.error(c.message)}db=a}else db=a}return db}
;function fb(a,b){this.h=a===gb&&b||""}
fb.prototype.toString=function(){return this.h};
function hb(a){return new fb(gb,a)}
var gb={};hb("");function ib(a){this.h=a}
ib.prototype.toString=function(){return this.h+""};
function jb(a){if(a instanceof ib&&a.constructor===ib)return a.h;Oa(a);return"type_error:TrustedResourceUrl"}
var kb={};function mb(a){var b=eb();a=b?b.createScriptURL(a):a;return new ib(a,kb)}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
var nb=ha([""]),ob=ia(["\x00"],["\\0"]),pb=ia(["\n"],["\\n"]),qb=ia(["\x00"],["\\u0000"]);function rb(a){return a.toString().indexOf("`")===-1}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.je=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})],xb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function yb(a){if(a instanceof sb)if(a instanceof sb)a=a.h;else throw Error("");else a=xb.test(a)?a:void 0;return a}
;function zb(a,b){b=yb(b);b!==void 0&&(a.href=b)}
;function Ab(){this.h=Bb[0].toLowerCase()}
Ab.prototype.toString=function(){return this.h};var Cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Db=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Hb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Ib(a,b){b=Cb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Lb(a){var b=Mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Nb(a){for(var b in a)return!1;return!0}
function Ob(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pb(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Sb(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Sb(a[c]);return b}
var Tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Tb.length;f++)c=Tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Vb(a){this.h=a}
Vb.prototype.toString=function(){return this.h.toString()};function Wb(a){var b="true".toString(),c=[new Ab];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Ab)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Xb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Yb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Zb(a,b){if(b instanceof ib)a.href=jb(b).toString(),a.rel="stylesheet";else{if(Yb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=yb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function $b(a){var b,c;return(a=(c=(b=a.document).querySelector)==null?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function ac(a){this.h=a}
ac.prototype.toString=function(){return this.h.toString()};function bc(a){var b=$b(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function cc(a,b){if(b instanceof ac)b=b.h;else throw Error("");a.textContent=b;bc(a)}
function dc(a,b){a.src=jb(b);bc(a)}
;function ec(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function fc(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=hc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ic[c])c=ic[c];else{c=String(c);if(!ic[c]){var f=/function\s+([^\(]+)/m.exec(c);ic[c]=f?f[1]:"[Anonymous]"}c=ic[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function hc(a,b){b||(b={});b[jc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[jc(a)]&&(c+="\nCaused by: ",a.stack&&a.stack.indexOf(a.toString())==0||(c+=typeof a==="string"?a:a.message+"\n"),c+=hc(a,b));return c}
function jc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var ic={};function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function sc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function tc(a,b){b=sc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function uc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var vc=/#|$/,wc=/[?&]($|#)/;function xc(a,b){for(var c=a.search(vc),d=0,e,f=[];(e=uc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(wc,"$1")}
;function yc(a){var b=b===void 0?Number("26"):b;for(var c=[],d=0;d<zc(a,Ac,1).length;d++){var e=zc(a,Ac,1)[d];Bc(e,2)<=b&&c.push(Number(Bc(e,1)))}return c}
;function Cc(a){return{fieldType:2,fieldName:a}}
function F(a){return{fieldType:3,fieldName:a}}
;function Dc(a){this.h=a}
;function Ec(a,b,c){this.o=a;this.j=b;this.fields=c||[];this.h=new Map}
function Fc(a){return a.fields.map(function(b){return b.fieldType})}
function Gc(a){return a.fields.map(function(b){return b.fieldName})}
p=Ec.prototype;p.Gd=function(a){var b=B.apply(1,arguments),c=this.uc(b);c?c.push(new Dc(a)):this.rd(a,b)};
p.rd=function(a){var b=this.Nc(B.apply(1,arguments));this.h.set(b,[new Dc(a)])};
p.uc=function(){var a=this.Nc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.Wd=function(){var a=this.uc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.Nc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Hc(a,b){Ec.call(this,a,3,b)}
x(Hc,Ec);Hc.prototype.i=function(a){var b=B.apply(1,arguments),c=0,d=this.Wd(b);d&&(c=d.h);this.rd(c+a,b)};function Ic(a,b){Ec.call(this,a,2,b)}
x(Ic,Ec);Ic.prototype.record=function(a){this.Gd(a,B.apply(1,arguments))};function Jc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Kc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?Kc.apply(null,d):Jc(d)}}
;function H(){this.ia=this.ia;this.D=this.D}
H.prototype.ia=!1;H.prototype.dispose=function(){this.ia||(this.ia=!0,this.ba())};
H.prototype[Symbol.dispose]=function(){this.dispose()};
function Lc(a,b){a.addOnDisposeCallback(Xa(Jc,b))}
H.prototype.addOnDisposeCallback=function(a,b){this.ia?b!==void 0?a.call(b):a():(this.D||(this.D=[]),b&&(a=a.bind(b)),this.D.push(a))};
H.prototype.ba=function(){if(this.D)for(;this.D.length;)this.D.shift()()};function Mc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Mc.prototype.stopPropagation=function(){this.j=!0};
Mc.prototype.preventDefault=function(){this.defaultPrevented=!0};var Nc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();var Oc=Na(610401301,!1),Pc=Na(645172343,Na(1,!0));function Qc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Rc,Sc=C.navigator;Rc=Sc?Sc.userAgentData||null:null;function Tc(a){return Oc?Rc?Rc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function I(a){return Qc().indexOf(a)!=-1}
;function Uc(){return Oc?!!Rc&&Rc.brands.length>0:!1}
function Vc(){return Uc()?!1:I("Opera")}
function Wc(){return I("Firefox")||I("FxiOS")}
function Xc(){return Uc()?Tc("Chromium"):(I("Chrome")||I("CriOS"))&&!(Uc()?0:I("Edge"))||I("Silk")}
;function Yc(){return Oc?!!Rc&&!!Rc.platform:!1}
function Zc(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;var $c=Vc(),ad=Uc()?!1:I("Trident")||I("MSIE"),bd=I("Edge"),cd=I("Gecko")&&!(Qc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),dd=Qc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");dd&&I("Mobile");Yc()||I("Macintosh");Yc()||I("Windows");(Yc()?Rc.platform==="Linux":I("Linux"))||Yc()||I("CrOS");var ed=Yc()?Rc.platform==="Android":I("Android");Zc();I("iPad");I("iPod");Zc()||I("iPad")||I("iPod");Qc().toLowerCase().indexOf("kaios");function fd(a,b){Mc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(fd,Mc);
fd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&fd.Ba.preventDefault.call(this)};
fd.prototype.stopPropagation=function(){fd.Ba.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
fd.prototype.preventDefault=function(){fd.Ba.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gd="closure_listenable_"+(Math.random()*1E6|0);var hd=0;function id(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ac=e;this.key=++hd;this.Lb=this.Ub=!1}
function jd(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.ac=null}
;function kd(a){this.src=a;this.listeners={};this.h=0}
kd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ld(a,b,d,e);g>-1?(b=a[g],c||(b.Ub=!1)):(b=new id(b,this.src,f,!!d,e),b.Ub=c,a.push(b));return b};
kd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ld(e,b,c,d);return b>-1?(jd(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function md(a,b){var c=b.type;c in a.listeners&&Ib(a.listeners[c],b)&&(jd(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function ld(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.ac==d)return e}return-1}
;var nd="closure_lm_"+(Math.random()*1E6|0),od={},pd=0;function qd(a,b,c,d,e){if(d&&d.once)rd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)qd(a,b[f],c,d,e);else c=sd(c),a&&a[gd]?a.listen(b,c,Qa(d)?!!d.capture:!!d,e):td(a,b,c,!1,d,e)}
function td(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=ud(a);h||(a[nd]=h=new kd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=vd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Nc||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(wd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");pd++}}
function vd(){function a(c){return b.call(a.src,a.listener,c)}
var b=xd;return a}
function rd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)rd(a,b[f],c,d,e);else c=sd(c),a&&a[gd]?a.h.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):td(a,b,c,!0,d,e)}
function yd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)yd(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=sd(c),a&&a[gd])?a.h.remove(String(b),c,d,e):a&&(a=ud(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ld(b,c,d,e)),(c=a>-1?b[a]:null)&&zd(c))}
function zd(a){if(typeof a!=="number"&&a&&!a.Lb){var b=a.src;if(b&&b[gd])md(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(wd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);pd--;(c=ud(b))?(md(c,a),c.h==0&&(c.src=null,b[nd]=null)):jd(a)}}}
function wd(a){return a in od?od[a]:od[a]="on"+a}
function xd(a,b){if(a.Lb)a=!0;else{b=new fd(b,this);var c=a.listener,d=a.ac||a.src;a.Ub&&zd(a);a=c.call(d,b)}return a}
function ud(a){a=a[nd];return a instanceof kd?a:null}
var Ad="__closure_events_fn_"+(Math.random()*1E9>>>0);function sd(a){if(typeof a==="function")return a;a[Ad]||(a[Ad]=function(b){return a.handleEvent(b)});
return a[Ad]}
;function Bd(){H.call(this);this.h=new kd(this);this.Ka=this;this.ea=null}
Za(Bd,H);Bd.prototype[gd]=!0;p=Bd.prototype;p.addEventListener=function(a,b,c,d){qd(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){yd(this,a,b,c,d)};
function Cd(a,b){var c=a.ea;if(c){var d=[];for(var e=1;c;c=c.ea)d.push(c),++e}a=a.Ka;c=b.type||b;typeof b==="string"?b=new Mc(b,a):b instanceof Mc?b.target=b.target||a:(e=b,b=new Mc(c,a),Ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Dd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Dd(g,c,!0,b)&&e,b.j||(e=Dd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Dd(g,c,!1,b)&&e}
p.ba=function(){Bd.Ba.ba.call(this);this.removeAllListeners();this.ea=null};
p.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
p.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,jd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Dd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.ac||g.src;g.Ub&&md(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Ed(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
Ed.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Fd(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function Gd(){}
function Hd(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Id(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=Id.prototype;p.clone=function(){return new Id(this.x,this.y)};
p.equals=function(a){return a instanceof Id&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Jd(a,b){this.width=a;this.height=b}
p=Jd.prototype;p.clone=function(){return new Jd(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Kd(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Ld(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Md(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Nd;function Od(){var a=C.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Ld("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h=f.location.protocol=="file:"?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if((h=="*"||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.Rc;c.Rc=null;e()}};
return function(e){d.next={Rc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Pd(a){C.setTimeout(function(){throw a;},0)}
;function Qd(){this.i=this.h=null}
Qd.prototype.add=function(a,b){var c=Rd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Qd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Rd=new Ed(function(){return new Sd},function(a){return a.reset()});
function Sd(){this.next=this.scope=this.h=null}
Sd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Sd.prototype.reset=function(){this.next=this.scope=this.h=null};var Td,Ud=!1,Vd=new Qd;function Wd(a,b){Td||Xd();Ud||(Td(),Ud=!0);Vd.add(a,b)}
function Xd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Td=function(){a.then(Yd)}}else Td=function(){var b=Yd;
typeof C.setImmediate!=="function"||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(Nd||(Nd=Od()),Nd(b)):C.setImmediate(b)}}
function Yd(){for(var a;a=Vd.remove();){try{a.h.call(a.scope)}catch(b){Pd(b)}Fd(Rd,a)}Ud=!1}
;function Zd(a){this.h=0;this.A=void 0;this.o=this.i=this.j=null;this.D=this.u=!1;if(a!=Gd)try{var b=this;a.call(void 0,function(c){$d(b,2,c)},function(c){$d(b,3,c)})}catch(c){$d(this,3,c)}}
function ae(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
ae.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var be=new Ed(function(){return new ae},function(a){a.reset()});
function ce(a,b,c){var d=be.get();d.i=a;d.h=b;d.context=c;return d}
function de(a){return new Zd(function(b,c){c(a)})}
Zd.prototype.then=function(a,b,c){return ee(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
Zd.prototype.$goog_Thenable=!0;p=Zd.prototype;p.lc=function(a,b){return ee(this,null,a,b)};
p.catch=Zd.prototype.lc;p.cancel=function(a){if(this.h==0){var b=new fe(a);Wd(function(){ge(this,b)},this)}};
function ge(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?ge(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):he(c),ie(c,e,3,b)))}a.j=null}else $d(a,3,b)}
function je(a,b){a.i||a.h!=2&&a.h!=3||ke(a);a.o?a.o.next=b:a.i=b;a.o=b}
function ee(a,b,c,d){var e=ce(null,null,null);e.child=new Zd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof fe?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;je(a,e);return e.child}
p.Ze=function(a){this.h=0;$d(this,2,a)};
p.af=function(a){this.h=0;$d(this,3,a)};
function $d(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.Ze,f=a.af;if(d instanceof Zd){je(d,ce(e||Gd,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if(typeof k==="function"){le(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,ke(a),b!=3||c instanceof fe||me(a,c))}}
function le(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ke(a){a.u||(a.u=!0,Wd(a.Rd,a))}
function he(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b}
p.Rd=function(){for(var a;a=he(this);)ie(this,a,this.h,this.A);this.u=!1};
function ie(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.D;a=a.j)a.D=!1;if(b.child)b.child.j=null,ne(b,c,d);else try{b.j?b.i.call(b.context):ne(b,c,d)}catch(e){oe.call(null,e)}Fd(be,b)}
function ne(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function me(a,b){a.D=!0;Wd(function(){a.D&&oe.call(null,b)})}
var oe=Pd;function fe(a){ab.call(this,a)}
Za(fe,ab);fe.prototype.name="cancel";function pe(a,b){Bd.call(this);this.j=a||1;this.i=b||C;this.o=Wa(this.We,this);this.u=Ya()}
Za(pe,Bd);p=pe.prototype;p.enabled=!1;p.Fa=null;p.setInterval=function(a){this.j=a;this.Fa&&this.enabled?(this.stop(),this.start()):this.Fa&&this.stop()};
p.We=function(){if(this.enabled){var a=Ya()-this.u;a>0&&a<this.j*.8?this.Fa=this.i.setTimeout(this.o,this.j-a):(this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null),Cd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Fa||(this.Fa=this.i.setTimeout(this.o,this.j),this.u=Ya())};
p.stop=function(){this.enabled=!1;this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null)};
p.ba=function(){pe.Ba.ba.call(this);this.stop();delete this.i};
function qe(a,b,c){if(typeof a==="function")c&&(a=Wa(a,c));else if(a&&typeof a.handleEvent=="function")a=Wa(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(b)>2147483647?-1:C.setTimeout(a,b||0)}
;function re(a){H.call(this);this.H=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new pe(this.flushInterval);this.h.listen("tick",this.nc,!1,this);Lc(this,this.h)}
x(re,H);p=re.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function se(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.nc()}
p.nc=function(){var a=this.i.values();a=[].concat(ja(a)).filter(function(b){return b.h.size});
a.length&&this.H.flush(a,this.u);te(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Ra=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Hc(a,b))};
p.Ab=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ic(a,b))};
function ue(a,b){return a.A.has(b)?void 0:a.i.get(b)}
p.xb=function(a){this.Ed(a,1,B.apply(1,arguments))};
p.Ed=function(a,b){var c=B.apply(2,arguments),d=ue(this,a);d&&d instanceof Hc&&(d.i(b,c),se(this))};
p.record=function(a,b){var c=B.apply(2,arguments),d=ue(this,a);d&&d instanceof Ic&&(d.record(b,c),se(this))};
function te(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function ve(a){this.h=a;this.h.Ra("/client_streamz/bg/fic",F("ke"))}
function we(a){this.h=a;this.h.Ra("/client_streamz/bg/fiec",F("rk"),F("ke"),Cc("ec"))}
function xe(a){this.h=a;this.h.Ab("/client_streamz/bg/fil",F("rk"),F("ke"))}
xe.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function ye(a){this.h=a;this.h.Ra("/client_streamz/bg/fcc",Cc("ph"),F("ke"))}
function ze(a){this.h=a;this.h.Ab("/client_streamz/bg/fcd",Cc("ph"),F("ke"))}
ze.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function Ae(a){this.h=a;this.h.Ra("/client_streamz/bg/fsc",F("rk"),F("ke"))}
function Be(a){this.h=a;this.h.Ab("/client_streamz/bg/fsl",F("rk"),F("ke"))}
Be.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};
function Ce(a){this.h=a;this.h.Ab("/client_streamz/bg/wrl",F("mn"),Cc("ac"),Cc("sc"),F("rk"),F("mk"))}
Ce.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function De(a){this.h=a;this.h.Ab("/client_streamz/bg/el",F("en"),F("bk"),F("rk"),F("mk"))}
De.prototype.record=function(a,b,c,d,e){this.h.record("/client_streamz/bg/el",a,b,c,d,e)};
function Ee(a){this.h=a;this.h.Ra("/client_streamz/bg/cec",Cc("ec"),F("bk"),F("rk"),F("mk"))}
function Fe(a){this.h=a;this.h.Ra("/client_streamz/bg/po/csc",Cc("cs"),F("rk"),F("mk"))}
function Ge(a){this.h=a;this.h.Ra("/client_streamz/bg/po/ctav",F("av"),F("rk"),F("mk"))}
function He(a){this.h=a;this.h.Ra("/client_streamz/bg/po/cwsc",F("su"),F("rk"),F("mk"))}
;Wc();var Ie=Zc()||I("iPod"),Je=I("iPad");!I("Android")||Xc()||Wc()||Vc()||I("Silk");Xc();var Ke=I("Safari")&&!(Xc()||(Uc()?0:I("Coast"))||Vc()||(Uc()?0:I("Edge"))||(Uc()?Tc("Microsoft Edge"):I("Edg/"))||(Uc()?Tc("Opera"):I("OPR"))||Wc()||I("Silk")||I("Android"))&&!(Zc()||I("iPad")||I("iPod"));var Le={},Me=null;function Ne(a,b){Pa(a);b===void 0&&(b=0);Oe();b=Le[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Pe(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;Qe(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Qe(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Me[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Oe();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Oe(){if(!Me){Me={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));Le[c]=d;for(var e=0;e<d.length;e++){var f=d[e];Me[f]===void 0&&(Me[f]=e)}}}}
;var Re=typeof Uint8Array!=="undefined",Se=!ad&&typeof btoa==="function";function Te(a){if(!Se)return Ne(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Ue=/[-_.]/g,Ve={"-":"+",_:"/",".":"="};function We(a){return Ve[a]||""}
function Xe(a){return Re&&a!=null&&a instanceof Uint8Array}
var Ye={};var Ze;function $e(a){if(a!==Ye)throw Error("illegal external caller");}
function af(a,b){$e(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
af.prototype.sizeBytes=function(){$e(Ye);var a=this.h;if(a!=null&&!Xe(a))if(typeof a==="string")if(Se){Ue.test(a)&&(a=a.replace(Ue,We));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Pe(a);else Oa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};var bf;function cf(){var a=Error();ec(a,"incident");Pd(a)}
function df(a){a=Error(a);ec(a,"warning");return a}
;function ef(){return typeof BigInt==="function"}
;function ff(a){return Array.prototype.slice.call(a)}
;var gf=typeof Symbol==="function"&&typeof Symbol()==="symbol";function hf(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var jf=hf(),kf=hf("2ex"),lf=hf("1oa");Math.max.apply(Math,ja(Object.values({zg:1,xg:2,wg:4,Cg:8,Bg:16,Ag:32,rf:64,Eg:128,vg:256,ug:512,yg:1024,wf:2048,Dg:4096,xf:8192})));var mf=gf?function(a,b){a[jf]|=b}:function(a,b){a.h!==void 0?a.h|=b:Object.defineProperties(a,{h:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},nf=gf?function(a){return a[jf]|0}:function(a){return a.h|0},of=gf?function(a){return a[jf]}:function(a){return a.h},pf=gf?function(a,b){a[jf]=b}:function(a,b){a.h!==void 0?a.h=b:Object.defineProperties(a,{h:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function qf(a,b){pf(b,(a|0)&-14591)}
function rf(a,b){pf(b,(a|34)&-14557)}
;var sf={},tf={};function uf(a){return!(!a||typeof a!=="object"||a.h!==tf)}
function vf(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function wf(a){return!Array.isArray(a)||a.length?!1:nf(a)&1?!0:!1}
var xf,yf=[];pf(yf,55);xf=Object.freeze(yf);function zf(a){if(a&2)throw Error();}
var Af=Object.freeze({});Object.freeze({});var Bf=Object.freeze({});var Cf=0,Df=0;function Ef(a){var b=a>>>0;Cf=b;Df=(a-b)/4294967296>>>0}
function Ff(a){if(a<0){Ef(0-a);var b=v(Gf(Cf,Df));a=b.next().value;b=b.next().value;Cf=a>>>0;Df=b>>>0}else Ef(a)}
function Hf(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else ef()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+If(c)+If(a));return c}
function If(a){a=String(a);return"0000000".slice(a.length)+a}
function Jf(){var a=Cf,b=Df;b&2147483648?ef()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(Gf(a,b)),a=b.next().value,b=b.next().value,a="-"+Hf(a,b)):a=Hf(a,b);return a}
function Gf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Kf(a){a.Pg=!0;return a}
;var Lf=Kf(function(a){return typeof a==="number"}),Mf=Kf(function(a){return typeof a==="string"}),Nf=Kf(function(a){return typeof a==="boolean"});
function Of(){var a=Pf;return Kf(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
;var Qf=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function Rf(a){var b=a;if(Mf(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Lf(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Qf?BigInt(a):a=Nf(a)?a?"1":"0":Mf(a)?a.trim()||"0":String(a)}
var Xf=Kf(function(a){return Qf?a>=Sf&&a<=Tf:a[0]==="-"?Uf(a,Vf):Uf(a,Wf)}),Vf=Number.MIN_SAFE_INTEGER.toString(),Sf=Qf?BigInt(Number.MIN_SAFE_INTEGER):void 0,Wf=Number.MAX_SAFE_INTEGER.toString(),Tf=Qf?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function Uf(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;function Yf(a){return a.displayName||a.name||"unknown type name"}
function Zf(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Oa(a)+": "+a);return a}
var $f=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ag(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:$f.test(a)}
function bg(a){if(typeof a!=="number")throw df("int32");if(!Number.isFinite(a))throw df("int32");return a|0}
function cg(a){return a==null?a:bg(a)}
function dg(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function eg(a){var b=0;b=b===void 0?0:b;if(!ag(a))throw df("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return fg(a);case "bigint":return String(BigInt.asIntN(64,a));default:return gg(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=Rf(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=ef()?Rf(BigInt.asIntN(64,BigInt(a))):Rf(hg(a))),a;case "bigint":return Rf(BigInt.asIntN(64,a));default:return Rf(ig(a))}case 0:switch(c){case "string":return fg(a);
case "bigint":return Rf(BigInt.asIntN(64,a));default:return ig(a)}default:return Xb(b,"Unknown format requested type for int64")}}
function jg(a){return a==null?a:eg(a)}
function kg(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function hg(a){a.indexOf(".");if(kg(a))return a;if(a.length<16)Ff(Number(a));else if(ef())a=BigInt(a),Cf=Number(a&BigInt(4294967295))>>>0,Df=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Df=Cf=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Df*=1E6,Cf=Cf*1E6+d,Cf>=4294967296&&(Df+=Math.trunc(Cf/4294967296),Df>>>=0,Cf>>>=0);b&&(b=v(Gf(Cf,Df)),a=b.next().value,b=b.next().value,Cf=a,Df=b)}return Jf()}
function ig(a){ag(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){Ff(a);var b=Cf,c=Df;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function gg(a){ag(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);kg(b)?a=b:(Ff(a),a=Jf())}return a}
function fg(a){ag(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return hg(a)}
function lg(a){if(a==null)return a;if(typeof a==="bigint")return Xf(a)?a=Number(a):(a=BigInt.asIntN(64,a),a=Xf(a)?Number(a):String(a)),a;if(ag(a))return typeof a==="number"?ig(a):fg(a)}
function mg(a){if(typeof a!=="string")throw Error();return a}
function ng(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function og(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Yf(b)+" but got "+(a&&Yf(a.constructor)));}
function pg(a,b,c){if(a!=null&&typeof a==="object"&&a.Bc===sf)return a;if(Array.isArray(a)){var d=nf(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&pf(a,e);return new b(a)}}
;function qg(a){var b=rg(a);if(b)return b;if(Math.random()>.01)return a;if(sg===void 0)if(typeof Proxy!=="function")sg=null;else try{sg=Proxy.toString().indexOf("[native code]")!==-1?Proxy:null}catch(c){sg=null}b=sg;if(!b)return a;b=new b(a,{set:function(c,d,e){tg();c[d]=e;return!0}});
ug(a,b);return b}
function tg(){cf()}
var vg=void 0,wg=void 0;function rg(a){var b;return(b=vg)==null?void 0:b.get(a)}
function xg(a){var b;return((b=wg)==null?void 0:b.get(a))||a}
function ug(a,b){(vg||(vg=new WeakMap)).set(a,b);(wg||(wg=new WeakMap)).set(b,a)}
var sg=void 0;var yg;function zg(a,b){nf(b);yg=b;a=new a(b);yg=void 0;return a}
function J(a,b,c){a==null&&(a=yg);yg=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=nf(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(vf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}pf(a,d);return a}
;function Ag(a,b){return Bg(b)}
function Bg(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(wf(a))return}else{if(Xe(a))return Te(a);if(a instanceof af){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=Te(b)}}}return a}
;function Cg(a,b,c){a=ff(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Dg(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=wf(a)?void 0:e&&nf(a)&2?a:Eg(a,b,c,d!==void 0,e);else if(vf(a)){var f={},g;for(g in a)f[g]=Dg(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Eg(a,b,c,d,e){var f=d||c?nf(a):0;d=d?!!(f&32):void 0;a=ff(a);for(var g=0;g<a.length;g++)a[g]=Dg(a[g],b,c,d,e);c&&c(f,a);return a}
function Fg(a){return a.Bc===sf?a.toJSON():Bg(a)}
;function Gg(a,b,c){c=c===void 0?rf:c;if(a!=null){if(Re&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=nf(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(pf(a,(d|34)&-12293),a):Eg(a,Gg,d&4?rf:c,!0,!0)}a.Bc===sf&&(c=a.G,d=of(c),a=d&2?a:zg(a.constructor,Hg(c,d,!0)));return a}}
function Hg(a,b,c){var d=c||b&2?rf:qf,e=!!(b&32);a=Cg(a,b,function(f){return Gg(f,e,d)});
mf(a,32|(c?2:0));return a}
function Ig(a){var b=a.G,c=of(b);return c&2?zg(a.constructor,Hg(b,c,!1)):a}
;function Jg(a,b){a=a.G;return Kg(a,of(a),b)}
function Lg(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function Kg(a,b,c,d){if(c===-1)return null;var e=b>>14&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(Lg(a,b,e,c)&&kf!=null){var g;a=(g=bf)!=null?g:bf={};g=a[kf]||0;g>=4||(a[kf]=g+1,cf())}return d}return Lg(a,b,e,c)}}
function Mg(a,b,c){var d=a.G,e=of(d);zf(e);Ng(d,e,b,c);return a}
function Ng(a,b,c,d,e){vf(d);var f=b>>14&1023||536870912;if(c>=f||e&&!Pc){var g=b;if(b&256)e=a[a.length-1];else{if(d==null)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&pf(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Og(a){return Pg(a,Qg,11,!1)!==void 0}
function Rg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Sg(a,b,c){var d=a.G,e=of(d);zf(e);if(b==null)return Ng(d,e,3),a;b=xg(b);if(!Array.isArray(b))throw df();var f=nf(b),g=f,h=!!(2&f)||Object.isFrozen(b),k=!h&&(void 0===Bf||!1);if(!(4&f))for(f=21,h&&(b=ff(b),g=0,f=Tg(f,e),f=Wg(f,e,!0)),h=0;h<b.length;h++)b[h]=c(b[h]);k&&(b=ff(b),g=0,f=Tg(f,e),f=Wg(f,e,!0));f!==g&&pf(b,f);Ng(d,e,3,b);return a}
function Xg(a,b,c,d){a=a.G;var e=of(a);zf(e);if(d==null){var f=Yg(a);if(Zg(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=Yg(a);var g=Zg(f,a,e,c);g!==b&&(g&&(e=Ng(a,e,g)),f.set(c,b))}Ng(a,e,b,d)}
function Yg(a){if(gf){var b;return(b=a[lf])!=null?b:a[lf]=new Map}if(lf in a)return a[lf];b=new Map;Object.defineProperty(a,lf,{value:b});return b}
function Zg(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];Kg(b,c,g)!=null&&(e!==0&&(c=Ng(b,c,e)),e=g)}a.set(d,e);return e}
function Pg(a,b,c,d){a=a.G;var e=of(a),f=Kg(a,e,c,d);b=pg(f,b,e);b!==f&&b!=null&&Ng(a,e,c,b,d);return b}
function $g(a,b,c,d){d=d===void 0?!1:d;b=Pg(a,b,c,d);if(b==null)return b;a=a.G;var e=of(a);if(!(e&2)){var f=Ig(b);f!==b&&(b=f,Ng(a,e,c,b,d))}return b}
function zc(a,b,c){var d=void 0===Af?2:5;var e=a.G,f=of(e);a=f;var g=!(2&f),h=!!(2&a);f=h?1:d;g&&(g=!h);d=Kg(e,a,c);d=Array.isArray(d)?d:xf;var k=nf(d);h=!!(4&k);if(!h){var l=k;l===0&&(l=Tg(l,a));k=d;l|=1;var m=a,n=!!(2&l);n&&(m|=2);for(var r=!n,t=!0,w=0,y=0;w<k.length;w++){var A=pg(k[w],b,m);if(A instanceof b){if(!n){var G=!!(nf(A.G)&2);r&&(r=!G);t&&(t=G)}k[y++]=A}}y<w&&(k.length=y);l|=4;l=t?l|16:l&-17;l=r?l|8:l&-9;pf(k,l);n&&Object.freeze(k);k=l}if(g&&!(8&k||!d.length&&(f===1||f===4&&32&k))){Rg(k)&&
(d=ff(d),k=Tg(k,a),a=Ng(e,a,c,d));b=d;g=k;for(k=0;k<b.length;k++)l=b[k],m=Ig(l),l!==m&&(b[k]=m);g|=8;g=b.length?g&-17:g|16;pf(b,g);k=g}var M;f===1||f===4&&32&k?Rg(k)||(c=k,a=!!(32&k),k|=!d.length||16&k&&(!h||a)?2:2048,k!==c&&pf(d,k),Object.freeze(d)):(h=f!==5?!1:!!(32&k)||Rg(k)||!!rg(d),(f===2||h)&&Rg(k)&&(d=ff(d),k=Tg(k,a),k=Wg(k,a,!1),pf(d,k),a=Ng(e,a,c,d)),Rg(k)||(c=k,k=Wg(k,a,!1),k!==c&&pf(d,k)),h&&(M=qg(d)));return M||d}
function ah(a,b,c,d){d!=null?og(d,b):d=void 0;return Mg(a,c,d)}
function bh(a,b,c,d){var e=a.G,f=of(e);zf(f);if(d==null)return Ng(e,f,c),a;d=xg(d);if(!Array.isArray(d))throw df();for(var g=nf(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),m=!l&&(void 0===Bf||!1),n=!0,r=!0,t=0;t<d.length;t++){var w=d[t];og(w,b);k||(w=!!(nf(w.G)&2),n&&(n=!w),r&&(r=w))}k||(g|=5,g=n?g|8:g&-9,g=r?g|16:g&-17);if(m||l&&g!==h)d=ff(d),h=0,g=Tg(g,f),g=Wg(g,f,!0);g!==h&&pf(d,g);Ng(e,f,c,d);return a}
function Tg(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function Wg(a,b,c){32&b&&c||(a&=-33);return a}
function ch(a){a=Jg(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(BigInt.asIntN(64,a)):ag(a)?c==="string"?fg(a):b?gg(a):ig(a):void 0;return b}
function dh(a,b){return a!=null?a:b}
function eh(a){var b=b===void 0?!1:b;a=Jg(a,4);return dh(a==null||typeof a==="boolean"?a:typeof a==="number"?!!a:void 0,b)}
function Bc(a,b,c){c=c===void 0?0:c;return dh(dg(Jg(a,b)),c)}
function fh(a,b){var c=c===void 0?"":c;a=Jg(a,b);return dh(a==null||typeof a==="string"?a:void 0,c)}
function gh(a){var b=0;b=b===void 0?0:b;a=Jg(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return dh(a,b)}
function hh(a,b,c){return Mg(a,b,ng(c))}
function ih(a,b,c){if(c!=null){if(!Number.isFinite(c))throw df("enum");c|=0}return Mg(a,b,c)}
;function jh(a){return a}
function kh(a){return a}
function lh(a,b,c,d){return mh(a,b,c,d,nh,oh)}
function ph(a,b,c,d){return mh(a,b,c,d,qh,rh)}
function mh(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var r=c[n];d&&n===c.length-1&&r===d||(l++,r!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=sh(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;r=g;for(var w=m,y=c.length-1;y>=0;y--){var A=c[y];if(!(A==null||d&&y===c.length-1&&A===d)){A=y-b;var G=e(A,t)+f(n,r,w);G<l&&(a=1+A,l=G);n++;t--;w+=sh(A);r=Math.max(r,A)}}b=e(0,0)+f(n,r,w);b<l&&(a=0,l=b);if(d){n=h;r=g;w=m;t=k;for(var M in d)d=+M,isNaN(d)||d>=
1024||(n--,t++,w-=M.length,g=e(d,t)+f(n,r,w),g<l&&(a=1+d,l=g))}return a}
function rh(a,b,c){return c+a*3+(a>1?a-1:0)}
function qh(a,b){return(a>1?a-1:0)+(a-b)*4}
function oh(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function nh(a){return 40+4*a}
function sh(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var th,uh;function K(a,b,c){this.G=J(a,b,c)}
p=K.prototype;p.toJSON=function(){return vh(this)};
p.serialize=function(a){try{return uh=!0,a&&(th=a===kh||a!==jh&&a!==lh&&a!==ph?kh:a),JSON.stringify(vh(this),Ag)}finally{a&&(th=void 0),uh=!1}};
function wh(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");mf(b,32);return zg(a,b)}
p.clone=function(){var a=this.G,b=of(a);return zg(this.constructor,Hg(a,b,!1))};
p.Bc=sf;p.toString=function(){try{return uh=!0,vh(this).toString()}finally{uh=!1}};
function vh(a){var b;uh?b=a.G:b=Eg(a.G,Fg,void 0,void 0,!1);var c=!uh,d=of(c?a.G:b);if(a=b.length){var e=b[a-1],f=vf(e);f?a--:e=void 0;var g=+!!(d&512)-1,h=a-g;d=!!th&&Pc&&!(d&512);var k,l=(k=th)!=null?k:kh;k=d?l(h,g,b,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(b,0,a):b;if(f||h){b:{var m=d;var n=e;f={};l=!1;if(h)for(var r=Math.max(0,k+g);r<m.length;r++){var t=m[r],w=r-g;t==null||wf(t)||uf(t)&&t.size===0||(m[r]=void 0,f[w]=t,l=!0)}if(n)for(var y in n)if(r=+y,isNaN(r))f[y]=n[y];else if(t=n[y],Array.isArray(t)&&
(wf(t)||uf(t)&&t.size===0)&&(t=null),t==null&&(l=!0),h&&r<k){l=!0;t=r+g;for(w=m.length;w<=t;w++)m.push(void 0);m[t]=n[r]}else t!=null&&(f[y]=t);if(l){for(var A in f){n=f;break b}n=null}}m=n==null?e!=null:n!==e}h&&(a=d.length);for(;a>0;a--){y=d[a-1];if(!(y==null||wf(y)||uf(y)&&y.size===0))break;var G=!0}if(d!==b||m||G){if(!h&&!c)d=Array.prototype.slice.call(d,0,a);else if(G||m||n)d.length=a;n&&d.push(n)}G=d}else G=b;return G}
;function xh(a){this.G=J(a)}
x(xh,K);function yh(a,b){return Sg(a,b,bg)}
;function zh(a){this.G=J(a)}
x(zh,K);var Ah=[1,2,3];function Bh(a){this.G=J(a)}
x(Bh,K);var Ch=[1,2,3];function Dh(a){this.G=J(a)}
x(Dh,K);function Eh(a){this.G=J(a)}
x(Eh,K);function Fh(a){this.G=J(a)}
x(Fh,K);function Gh(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Hh(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],y=e[2],A=e[3],G=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var M=A^w&(y^A);var W=1518500249}else M=w^y^A,W=1859775393;else t<60?(M=w&y|A&(w|y),W=2400959708):(M=w^y^A,W=3395469782);M=((n<<5|n>>>27)&4294967295)+M+G+W+r[t]&4294967295;G=A;A=y;y=(w<<30|w>>>2)&4294967295;w=n;n=M}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+G&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],w=0,y=n.length;w<y;++w)t.push(n.charCodeAt(w));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var w=24;w>=0;w-=8)n[r++]=e[t]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Nd:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function Ih(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Jh(Gh(d),a,c||null)].join(" "):null}
function Jh(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Db(d,function(h){e.push(h)}),Kh(e.join(" "));
var f=[],g=[];Db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Db(d,function(h){e.push(h)});
a=Kh(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Kh(a){var b=Hh();b.update(a);return b.Nd().toLowerCase()}
;var Lh={};function Mh(a){this.h=a||{cookie:""}}
p=Mh.prototype;p.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Jb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.De;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Jb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=cb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Jb:0,path:b,domain:c});return d};
p.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=cb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Nh=new Mh(typeof document=="undefined"?null:document);function Oh(a){return!!Lh.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function Ph(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Oh(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new Mh(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");Oh(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Qh(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new Mh(document)).get(b));return a?Ih(a,c,d):null}
function Rh(a,b){b=b===void 0?!1:b;var c=Gh(String(C.location.href)),d=[];if(Ph(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new Mh(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Ih(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Oh(b)&&((b=Qh("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),
(a=Qh("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function Sh(a){this.G=J(a)}
x(Sh,K);function Th(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Ya()};
this.i=this.h()}
Th.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Th.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
Th.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Th.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Uh(a){this.G=J(a)}
x(Uh,K);function Vh(a){this.G=J(a)}
x(Vh,K);function Wh(a){this.h=this.i=this.j=a}
Wh.prototype.reset=function(){this.h=this.i=this.j};
Wh.prototype.getValue=function(){return this.i};function Xh(a){this.G=J(a)}
x(Xh,K);Xh.prototype.Zb=function(){return gh(this)};function Yh(a){this.G=J(a)}
x(Yh,K);function Zh(a){this.G=J(a)}
x(Zh,K);function $h(a,b){bh(a,Yh,1,b)}
;function Qg(a){this.G=J(a)}
x(Qg,K);var ai=["platform","platformVersion","architecture","model","uaFullVersion"],bi=new Zh,ci=null;function di(a,b){b=b===void 0?ai:b;if(!ci){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Yh;f=hh(f,1,e.brand);return hh(f,2,e.version)});
$h(Mg(bi,2,Zf(a.mobile)),c);ci=a.getHighEntropyValues(b)}var d=new Set(b);return ci.then(function(e){var f=bi.clone();d.has("platform")&&hh(f,3,e.platform);d.has("platformVersion")&&hh(f,4,e.platformVersion);d.has("architecture")&&hh(f,5,e.architecture);d.has("model")&&hh(f,6,e.model);d.has("uaFullVersion")&&hh(f,7,e.uaFullVersion);return f}).catch(function(){return bi.clone()})}
;function ei(a){this.G=J(a)}
x(ei,K);function fi(a){this.G=J(a,4)}
x(fi,K);function gi(a){this.G=J(a,35)}
x(gi,K);function hi(a){this.G=J(a,19)}
x(hi,K);hi.prototype.Mb=function(a){return ih(this,2,a)};function ii(a){this.G=J(a,8)}
x(ii,K);var ji=function(a){return function(b){return wh(a,b)}}(ii);function ki(a){this.G=J(a)}
x(ki,K);var li=new function(){this.ctor=ki;this.isRepeated=0;this.h=$g;this.defaultValue=void 0};function mi(a){H.call(this);var b=this;this.componentId="";this.j=[];this.W="";this.pageId=null;this.ea=this.T=-1;this.experimentIds=null;this.J=this.u=0;this.ha=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Fb=a.Fb||function(){};
this.i=new ni(a.logSource,a.ab);this.network=a.network;this.vb=a.vb||null;this.bufferSize=1E3;this.A=a.bf||null;this.sessionIndex=a.sessionIndex||null;this.Db=a.Db||!1;this.logger=null;this.withCredentials=!a.Uc;this.ab=a.ab||!1;this.H=typeof URLSearchParams!=="undefined"&&!!(new URL(oi())).searchParams&&!!(new URL(oi())).searchParams.set;var c=ih(new ei,1,1);pi(this.i,c);this.o=new Wh(1E4);a=qi(this,a.Oc);this.h=new Th(this.o.getValue(),a);this.V=new Th(6E5,a);this.Db||this.V.start();this.ab||(document.addEventListener("visibilitychange",
function(){document.visibilityState==="hidden"&&b.sc()}),document.addEventListener("pagehide",this.sc.bind(this)))}
x(mi,H);function qi(a,b){return a.H?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
p=mi.prototype;p.ba=function(){this.sc();this.h.stop();this.V.stop();H.prototype.ba.call(this)};
p.log=function(a){if(this.H){a=a.clone();var b=this.ha++;a=Mg(a,21,jg(b));this.componentId&&hh(a,26,this.componentId);if(ch(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";Mg(b,1,jg(c))}lg(Jg(a,15))==null&&Mg(a,15,jg((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),ah(b,Sh,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.u+=b);this.j.push(a);this.Db||this.h.enabled||this.h.start()}};
p.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.ea>d&&this.T<d)b&&b("throttled");else{this.network&&(typeof this.network.Zb==="function"?ri(this.i,this.network.Zb()):ri(this.i,0));var e=si(this.i,this.j,this.u,this.J,this.vb);d={};var f=this.Fb();f&&(d.Authorization=f);this.A||(this.A=oi());try{var g=(new URL(this.A)).toString()}catch(k){g=(new URL(this.A,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.W===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.u=0;var h=e.serialize();d={url:g.toString(),body:h,Hg:1,od:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.o.reset();c.h.setInterval(c.o.getValue());if(k){var l=null;try{var m=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=ji(m)}catch(n){}l&&(k=Number,m="-1",m=m===void 0?"0":m,m=dh(ch(l),m),k=k(m),k>0&&(c.T=Date.now(),c.ea=c.T+k),l=li.ctor?li.h(l,li.ctor,175237375,!0):li.h(l,175237375,null,!0),l=l===null?void 0:l)&&(l=Bc(l,1,-1),l!==-1&&(c.o=new Wh(l<1?1:l),c.h.setInterval(c.o.getValue())))}a&&a();c.J=0};
h=function(k,l){var m=zc(e,gi,3);var n=lg(Jg(e,14)),r=c.o;r.h=Math.min(3E5,r.h*2);r.i=Math.min(3E5,r.h+Math.round((Math.random()-.5)*.2*r.h));c.h.setInterval(c.o.getValue());k===401&&f&&(c.W=f);n&&(c.u+=n);l===void 0&&(l=c.isRetryable(k));l&&(c.j=m.concat(c.j),c.Db||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.J};
c.network&&c.network.send(d,g,h)}}}};
p.sc=function(){ti(this.i,!0);this.flush();ti(this.i,!1)};
p.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function oi(){return"https://play.google.com/log?format=json&hasfast=true"}
function ni(a,b){this.ab=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new hi;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));pi(this,new ei)}
ni.prototype.Mb=function(a){this.h.Mb(a);return this};
function pi(a,b){ah(a.h,ei,1,b);gh(b)||ih(b,1,1);a.ab||(b=ui(a),fh(b,5)||hh(b,5,a.locale));a.i&&(b=ui(a),$g(b,Zh,9)||ah(b,Zh,9,a.i))}
function ri(a,b){Og(vi(a))&&(a=wi(a),ih(a,1,b))}
function ti(a,b){Og(vi(a))&&(a=wi(a),Mg(a,2,Zf(b)))}
function vi(a){return $g(a.h,ei,1)}
function xi(a){var b=b===void 0?ai:b;var c=a.ab?void 0:window;c?di(c,b).then(function(d){a.i=d;d=ui(a);ah(d,Zh,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function ui(a){a=vi(a);var b=$g(a,Qg,11);b||(b=new Qg,ah(a,Qg,11,b));return b}
function wi(a){a=ui(a);var b=$g(a,Xh,10);b||(b=new Xh,Mg(b,2,Zf(!1)),ah(a,Xh,10,b));return b}
function si(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(Og(vi(a))){var h=wi(a);Mg(h,3,cg(d))}Og(vi(a))&&(d=wi(a),Mg(d,4,cg(f)));Og(vi(a))&&(f=wi(a),Mg(f,5,cg(g)));a=a.h.clone();g=Date.now().toString();a=Mg(a,4,jg(g));b=b.slice();b=bh(a,gi,3,b);e&&(a=new Uh,e=Mg(a,13,cg(e)),a=new Vh,e=ah(a,Uh,2,e),a=new fi,e=ah(a,Vh,1,e),e=ih(e,2,9),ah(b,fi,18,e));c&&Mg(b,14,jg(c));return b}
;function yi(){this.Fd=typeof AbortController!=="undefined"}
yi.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return z(function(w){switch(w.h){case 1:return f=(e=d.Fd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,ya(w,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.od)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),w.yield(fetch(a.url,g),5);case 5:h=w.i;if(h.status!==200){(k=c)==null||k(h.status);w.F(3);break}if((l=b)==null){w.F(7);break}return w.yield(h.text(),8);case 8:l(w.i);case 7:case 3:w.J=[w.j];w.o=0;w.D=0;clearTimeout(f);Aa(w);break;case 2:m=za(w);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}w.F(3)}})};
yi.prototype.Zb=function(){return 4};function zi(a,b){H.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.o=!1;this.network=null;this.componentId="";this.pageId=this.i=this.vb=null}
x(zi,H);zi.prototype.Uc=function(){this.u=!0;return this};
function Ai(a){a.network||(a.network=new yi);var b=new mi({logSource:a.logSource,Fb:a.Fb?a.Fb:Rh,sessionIndex:a.sessionIndex,bf:a.j,ab:a.o,Db:!1,Uc:a.u,Oc:a.Oc,network:a.network});Lc(a,b);if(a.h){var c=a.h,d=ui(b.i);hh(d,7,c)}a.componentId&&(b.componentId=a.componentId);a.vb&&(b.vb=a.vb);a.pageId&&(b.pageId=a.pageId);a.i&&((d=a.i)?(b.experimentIds||(b.experimentIds=new Sh),c=b.experimentIds,d=d.serialize(),hh(c,4,d)):b.experimentIds&&Mg(b.experimentIds,4));xi(b.i);a.network.Mb&&a.network.Mb(a.logSource);
a.network.Oe&&a.network.Oe(b);return b}
;function Bi(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;H.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new zi(a,"0"),a.componentId=b,Lc(this,a),c!==""&&(a.j=c),d&&(a.o=!0),e&&(a.h=e),g&&(a.network=g),b=Ai(a));this.h=b}
x(Bi,H);
Bi.prototype.flush=function(a){var b=a||[];if(b.length){a=new Fh;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Eh;f=hh(f,1,e.o);var g=Gc(e);f=Sg(f,g,mg);g=[];var h=[];for(var k=v(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.j;for(var n=e.uc(l)||[],r=[],t=0;t<n.length;t++){var w=n[t],y=w&&w.h;w=new Bh;switch(m){case 3:y=Number(y);Number.isFinite(y)&&Xg(w,1,Ch,jg(y));break;case 2:y=Number(y);if(y!=null&&typeof y!=="number")throw Error("Value of float/double field must be a number, found "+typeof y+
": "+y);Xg(w,2,Ch,y)}r.push(w)}m=r;for(n=0;n<m.length;n++){r=m[n];t=new Dh;r=ah(t,Bh,2,r);t=l;w=[];y=Fc(e);for(var A=0;A<y.length;A++){var G=y[A],M=t[A],W=new zh;switch(G){case 3:Xg(W,1,Ah,ng(String(M)));break;case 2:G=Number(M);Number.isFinite(G)&&Xg(W,2,Ah,cg(G));break;case 1:Xg(W,3,Ah,Zf(M==="true"))}w.push(W)}bh(r,zh,1,w);g.push(r)}}bh(f,Dh,4,g);c.push(f);e.clear()}bh(a,Eh,1,c);b=this.h;b.H&&(a instanceof gi?b.log(a):(c=new gi,a=a.serialize(),a=hh(c,8,a),b.log(a)));this.h.flush()}};function Ci(){}
Ci.prototype.serialize=function(a){var b=[];Di(this,a,b);return b.join("")};
function Di(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Di(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Ei(d,c),c.push(":"),Di(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ei(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Fi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Gi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ei(a,b){b.push('"',a.replace(Gi,function(c){var d=Fi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Fi[c]=d);return d}),'"')}
;function Hi(){}
Hi.prototype.h=null;Hi.prototype.getOptions=function(){var a;(a=this.h)||(a=this.h={});return a};var Ii;function Ji(){}
Za(Ji,Hi);Ii=new Ji;function Ki(a){Bd.call(this);this.headers=new Map;this.ya=a||null;this.i=!1;this.J=this.U=null;this.o=this.W="";this.j=this.V=this.u=this.T=!1;this.H=0;this.A=null;this.pa="";this.ha=!1}
Za(Ki,Bd);var Li=/^https?$/i,Mi=["POST","PUT"],Ni=[];function Oi(a,b,c,d,e,f,g){var h=new Ki;Ni.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Ld,!0,void 0,void 0);f&&(h.H=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
p=Ki.prototype;p.Ld=function(){this.dispose();Ib(Ni,this)};
p.send=function(a,b,c,d){if(this.U)throw Error("[goog.net.XhrIo] Object is active with another request="+this.W+"; newUri="+a);b=b?b.toUpperCase():"GET";this.W=a;this.o="";this.T=!1;this.i=!0;this.U=new XMLHttpRequest;this.J=this.ya?this.ya.getOptions():Ii.getOptions();this.U.onreadystatechange=Wa(this.jd,this);try{this.getStatus(),this.V=!0,this.U.open(b,String(a),!0),this.V=!1}catch(g){this.getStatus();Pi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if(typeof d.keys==="function"&&typeof d.get==="function"){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Cb(Mi,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.U.setRequestHeader(d,c);this.pa&&(this.U.responseType=this.pa);"withCredentials"in this.U&&this.U.withCredentials!==this.ha&&(this.U.withCredentials=this.ha);try{Qi(this),this.H>0&&(this.getStatus(),this.A=qe(this.Ye,this.H,this)),this.getStatus(),this.u=!0,this.U.send(a),this.u=
!1}catch(g){this.getStatus(),Pi(this,g)}};
p.Ye=function(){typeof Ja!="undefined"&&this.U&&(this.o="Timed out after "+this.H+"ms, aborting",this.getStatus(),Cd(this,"timeout"),this.abort(8))};
function Pi(a,b){a.i=!1;a.U&&(a.j=!0,a.U.abort(),a.j=!1);a.o=b;Ri(a);Si(a)}
function Ri(a){a.T||(a.T=!0,Cd(a,"complete"),Cd(a,"error"))}
p.abort=function(){this.U&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.U.abort(),this.j=!1,Cd(this,"complete"),Cd(this,"abort"),Si(this))};
p.ba=function(){this.U&&(this.i&&(this.i=!1,this.j=!0,this.U.abort(),this.j=!1),Si(this,!0));Ki.Ba.ba.call(this)};
p.jd=function(){this.ia||(this.V||this.u||this.j?Ti(this):this.re())};
p.re=function(){Ti(this)};
function Ti(a){if(a.i&&typeof Ja!="undefined")if(a.J[1]&&Ui(a)==4&&a.getStatus()==2)a.getStatus();else if(a.u&&Ui(a)==4)qe(a.jd,0,a);else if(Cd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Vi(a))Cd(a,"complete"),Cd(a,"success");else{try{var b=Ui(a)>2?a.U.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Ri(a)}}finally{Si(a)}}}
function Si(a,b){if(a.U){Qi(a);var c=a.U,d=a.J[0]?function(){}:null;
a.U=null;a.J=null;b||Cd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Qi(a){a.A&&(C.clearTimeout(a.A),a.A=null)}
p.isActive=function(){return!!this.U};
p.isComplete=function(){return Ui(this)==4};
function Vi(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=nc(1,String(a.W)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Li.test(a?a.toLowerCase():"");c=b}return c}
function Ui(a){return a.U?a.U.readyState:0}
p.getStatus=function(){try{return Ui(this)>2?this.U.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function Wi(){}
Wi.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Oi(a.url,function(d){d=d.target;if(Vi(d)){try{var e=d.U?d.U.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.od,a.timeoutMillis,a.withCredentials)};
Wi.prototype.Zb=function(){return 1};function Xi(a,b,c){this.logger=a;this.event=b;if(c===void 0||c)this.h=Yi()}
Xi.prototype.start=function(){this.h=Yi()};
Xi.prototype.done=function(){this.h!=null&&this.logger.Ib(this.event,Yi()-this.h)};
function Zi(){H.apply(this,arguments)}
x(Zi,H);function $i(a,b){var c=Yi();b=b();a.Ib("n",Yi()-c);return b}
function aj(){Zi.apply(this,arguments)}
x(aj,Zi);p=aj.prototype;p.ed=function(){};
p.yc=function(){};
p.Ib=function(){};
p.Ga=function(){};
p.Ja=function(){};
p.wd=function(){};
function bj(a,b,c,d,e){c=c===void 0?"":c;d=d===void 0?[]:d;e=e===void 0?[]:e;Zi.call(this);this.Ea=a;this.H=b;this.J=c;this.A=d;this.i=e;this.u=new Map;this.j=new Map;a=new xh;var f;((f=this.H)==null?0:eh(f))?(this.A=d.sort(function(g,h){return g-h}),this.i=e.sort(function(g,h){return g-h}),yh(a,this.A.concat(this.i))):yh(a,d);
cj(this,a);this.u.set("h",1);this.u.set("u",2);this.u.set("k",3);this.j.set(25,1);this.j.set(26,2);this.j.set(27,3);this.j.set(28,4)}
x(bj,Zi);p=bj.prototype;p.wd=function(a){var b;(b=this.H)!=null&&eh(b)&&(a=a.sort(function(c,d){return c-d}),this.i!==a&&(this.i=a,a=yh(new xh,this.A.concat(this.i)),cj(this,a)))};
function cj(a,b){var c=new zi(1828,"0");c.h="26";c.network=new Wi;c.i=b;a.h&&(a.Ja(),a.h.dispose());a.o&&a.o.dispose();a.o=new Bi(1828,"","",!1,"",Ai(c));a.h=new re(a.o);a.h.o=1E5;b=a.h;b.flushInterval=3E4;b.h.setInterval(3E4);a.pa=new xe(a.h);a.ya=new Ae(a.h);a.Ka=new Be(a.h);a.ha=new we(a.h);a.T=new ye(a.h);a.V=new ze(a.h);a.errorCount=new Ee(a.h);a.W=new De(a.h);new Ce(a.h);new Fe(a.h);new Ge(a.h);new He(a.h);a.ea=new ve(a.h);Lc(a,a.o);Lc(a,a.h)}
p.ed=function(){var a;(a=this.ea)!=null&&a.h.xb("/client_streamz/bg/fic",this.Ea)};
p.yc=function(){var a;(a=this.ya)!=null&&a.h.xb("/client_streamz/bg/fsc","",this.Ea)};
p.Ib=function(a,b){if(a==="t"){var c;(c=this.pa)==null||c.record(b,"",this.Ea)}else if(a==="n"){var d;(d=this.Ka)==null||d.record(b,"",this.Ea)}else if(a==="h"||a==="u"||a==="k"){if(a=this.u.get(a)){var e;(e=this.T)!=null&&e.h.xb("/client_streamz/bg/fcc",a,this.Ea);var f;(f=this.V)==null||f.record(b,a,this.Ea)}}else{var g;(g=this.W)==null||g.record(b,a,"",this.J,this.Ea)}};
p.Ga=function(a){var b=this.j.get(a);if(b){var c;(c=this.ha)!=null&&c.h.xb("/client_streamz/bg/fiec","",this.Ea,b)}else{var d;(d=this.errorCount)!=null&&d.h.xb("/client_streamz/bg/cec",a,"",this.J,this.Ea)}};
p.Ja=function(){var a;(a=this.h)==null||a.nc()};
function Yi(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function Ac(a){this.G=J(a)}
x(Ac,K);function dj(a){this.G=J(a)}
x(dj,K);function ej(a){this.G=J(a,0,"bfkj")}
x(ej,K);var fj=function(a){return Kf(function(b){return b instanceof a&&!(nf(b.G)&2)})}(ej);function gj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function hj(a){function b(r,t,w,y){Promise.resolve().then(function(){n.done();d.X.Ja();m.resolve({Id:r,Re:t,Wg:w,Kg:y})})}
function c(r,t,w,y){var A="k";t?A="h":w&&(A="u");A!=="k"?y!==0&&d.X.Ib(A,r):d.j<=0?(d.X.Ib(A,r),d.j=Math.floor(Math.random()*200)):d.j--}
H.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.i=[];if("challenge"in a&&fj(a.challenge)){var e=fh(a.challenge,4);var f=fh(a.challenge,5);this.h=$g(a.challenge,dj,6)}else e=a.program,f=a.Yd;var g=new H;this.addOnDisposeCallback(function(){var r,t,w;return z(function(y){if(y.h==1)return y.yield(d.o,2);if(y.h!=3)return r=y.i,t=r.Re,y.yield(Promise.all(d.i),3);d.i=[];d.X.Ja();(w=t)==null||w();g.dispose();y.h=0})});
if(a.xe!==!1)if(a.X){this.X=a.X;var h;((h=this.h)==null?0:eh(h))&&this.X.wd(yc(this.h))}else{h=[];var k;if((k=this.h)==null?0:eh(k))h=yc(this.h);var l;Lc(g,this.X=new bj((l=a.Ea)!=null?l:"_",this.h,"",[],h))}else Lc(g,this.X=new aj);var m=new gj;this.o=m.promise;var n=new Xi(this.X,"t",!0);this.X.ed();if(!C[f])throw this.X.Ga(25),this.X.Ja(),Error("EGOU");if(!C[f].a)throw this.X.Ga(26),this.X.Ja(),Error("ELIU");try{this.u=v((0,C[f].a)(e,b,!0,a.hh,c)).next().value,this.Qe=m.promise.then(function(){})}catch(r){throw this.X.Ga(28),
this.X.Ja(),r;
}}
x(hj,H);hj.prototype.snapshot=function(a){var b=this;if(this.ia)throw Error("Already disposed");var c=new gj;this.i.push(c.promise);this.X.yc();return this.o.then(function(d){var e=d.Id;return new Promise(function(f){var g=new Xi(b.X,"n");e(function(h){g.done();b.X.Ja();f(h)},[a.Tc,
a.Se,a.df,a.Te])})}).finally(function(){return void c.resolve()})};
hj.prototype.td=function(a){var b=this;if(this.ia)throw Error("Already disposed");this.X.yc();var c=$i(this.X,function(){return b.u([a.Tc,a.Se,a.df,a.Te])});
this.X.Ja();return c};
hj.prototype.getLogger=function(){return this.X};var ij=window;hb("csi.gstatic.com");hb("googleads.g.doubleclick.net");hb("partner.googleadservices.com");hb("pubads.g.doubleclick.net");hb("securepubads.g.doubleclick.net");hb("tpc.googlesyndication.com");function jj(a){var b=kj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function lj(){var a=[];jj(function(b){a.push(b)});
return a}
var kj={ef:"allow-forms",ff:"allow-modals",gf:"allow-orientation-lock",hf:"allow-pointer-lock",jf:"allow-popups",kf:"allow-popups-to-escape-sandbox",lf:"allow-presentation",mf:"allow-same-origin",nf:"allow-scripts",pf:"allow-top-navigation",qf:"allow-top-navigation-by-user-activation"},mj=Hd(function(){return lj()});
function nj(){var a=oj(),b={};Db(mj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function oj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function pj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var qj=(new Date).getTime();function rj(a){Bd.call(this);var b=this;this.A=this.j=0;this.Da=a!=null?a:{qa:function(e,f){return setTimeout(e,f)},
ra:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return z(function(e){return e.yield(sj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||tj(this)}
x(rj,Bd);function uj(){var a=vj;rj.h||(rj.h=new rj(a));return rj.h}
rj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Da.ra(this.A);delete rj.h};
rj.prototype.wa=function(){return this.i};
function tj(a){a.A=a.Da.qa(function(){var b;return z(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.F(3):c.yield(sj(a),3):c.yield(sj(a),3);tj(a);c.h=0})},3E4)}
function sj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return z(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.j=a.Da.qa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.J=[h.j];h.o=0;h.D=0;a.u=void 0;a.j&&(a.Da.ra(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Cd(a,"networkstatus-online"):Cd(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:za(h),g=!1,h.F(3)}})})}
;function wj(){this.data=[];this.h=-1}
wj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
wj.prototype.get=function(a){return!!this.data[a]};
function xj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function yj(){this.blockSize=-1}
;function zj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.D=[];this.u=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
Za(zj,yj);zj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Aj(a,b,c){c||(c=0);var d=a.u;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else e<60?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
zj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.D,f=this.i;d<b;){if(f==0)for(;d<=c;)Aj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Aj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Aj(this,e);f=0;break}}this.i=f;this.o+=b}};
zj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.D[c]=b&255,b/=256;Aj(this,this.D);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Bj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Cj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Dj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Bj(a).match(/\S+/g)||[],b=Cb(a,b)>=0);return b}
function Ej(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Dj(a,"inverted-hdpi")&&Cj(a,Array.prototype.filter.call(a.classList?a.classList:Bj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Fj(){}
Fj.prototype.next=function(){return Gj};
var Gj={done:!0,value:void 0};Fj.prototype.jb=function(){return this};function Hj(a){if(a instanceof Ij||a instanceof Jj||a instanceof Kj)return a;if(typeof a.next=="function")return new Ij(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Ij(function(){return a[Symbol.iterator]()});
if(typeof a.jb=="function")return new Ij(function(){return a.jb()});
throw Error("Not an iterator or iterable.");}
function Ij(a){this.h=a}
Ij.prototype.jb=function(){return new Jj(this.h())};
Ij.prototype[Symbol.iterator]=function(){return new Kj(this.h())};
Ij.prototype.i=function(){return new Kj(this.h())};
function Jj(a){this.h=a}
x(Jj,Fj);Jj.prototype.next=function(){return this.h.next()};
Jj.prototype[Symbol.iterator]=function(){return new Kj(this.h)};
Jj.prototype.i=function(){return new Kj(this.h)};
function Kj(a){Ij.call(this,function(){return a});
this.j=a}
x(Kj,Ij);Kj.prototype.next=function(){return this.j.next()};function L(a){H.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.A=!!a}
Za(L,H);p=L.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Pb(a)}return!1};
p.Pb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.ib=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Lj(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.ia;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Pb(c)}}return e!=0}return!1};
function Lj(a,b,c){Wd(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Pb,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.ba=function(){L.Ba.ba.call(this);this.clear();this.j.length=0};function Mj(a){this.h=a}
Mj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Ci).serialize(b))};
Mj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Mj.prototype.remove=function(a){this.h.remove(a)};function Nj(a){this.h=a}
Za(Nj,Mj);function Oj(a){this.data=a}
function Pj(a){return a===void 0||a instanceof Oj?a:new Oj(a)}
Nj.prototype.set=function(a,b){Nj.Ba.set.call(this,a,Pj(b))};
Nj.prototype.i=function(a){a=Nj.Ba.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Nj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Qj(a){this.h=a}
Za(Qj,Nj);Qj.prototype.set=function(a,b,c){if(b=Pj(b)){if(c){if(c<Ya()){Qj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ya()}Qj.Ba.set.call(this,a,b)};
Qj.prototype.i=function(a){var b=Qj.Ba.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ya()||c&&c>Ya())Qj.prototype.remove.call(this,a);else return b}};function Rj(){}
;function Sj(){}
Za(Sj,Rj);Sj.prototype[Symbol.iterator]=function(){return Hj(this.jb(!0)).i()};
Sj.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Tj(a){this.h=a;this.i=null}
Za(Tj,Sj);p=Tj.prototype;p.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
p.set=function(a,b){Uj(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){Uj(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){Uj(this);this.h.removeItem(a)};
p.jb=function(a){Uj(this);var b=0,c=this.h,d=new Fj;d.next=function(){if(b>=c.length)return Gj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){Uj(this);this.h.clear()};
p.key=function(a){Uj(this);return this.h.key(a)};
function Uj(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Pd(Error("Storage mechanism: Storage unavailable"))}
;function Vj(){var a=null;try{a=C.localStorage||null}catch(b){}Tj.call(this,a)}
Za(Vj,Tj);function Wj(a,b){this.i=a;this.h=b+"::"}
Za(Wj,Sj);Wj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Wj.prototype.get=function(a){return this.i.get(this.h+a)};
Wj.prototype.remove=function(a){this.i.remove(this.h+a)};
Wj.prototype.jb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Fj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},Xj=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Jc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Yj={kb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Wc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Zj={kb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Wc:function(a){return[].concat.apply([],a)}};
N.Pe=function(){Xj?(N.hb=Uint8Array,N.Ia=Uint16Array,N.Dd=Int32Array,N.assign(N,Yj)):(N.hb=Array,N.Ia=Array,N.Dd=Array,N.assign(N,Zj))};
N.Pe();var ak=!0;try{new Uint8Array(1)}catch(a){ak=!1}
function bk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.hb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var ck={};ck=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var dk={},ek,fk=[],gk=0;gk<256;gk++){ek=gk;for(var hk=0;hk<8;hk++)ek=ek&1?3988292384^ek>>>1:ek>>>1;fk[gk]=ek}dk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^fk[(a^b[d])&255];return a^-1};var ik={};ik={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function jk(a){for(var b=a.length;--b>=0;)a[b]=0}
var kk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],lk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],mk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],nk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ok=Array(576);jk(ok);var pk=Array(60);jk(pk);var qk=Array(512);jk(qk);var rk=Array(256);jk(rk);var sk=Array(29);jk(sk);var tk=Array(30);jk(tk);function uk(a,b,c,d,e){this.ud=a;this.Ud=b;this.Td=c;this.Od=d;this.pe=e;this.Zc=a&&a.length}
var vk,wk,xk;function yk(a,b){this.Vc=a;this.sb=0;this.Va=b}
function zk(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function Ak(a,b,c){a.ja>16-c?(a.oa|=b<<a.ja&65535,zk(a,a.oa),a.oa=b>>16-a.ja,a.ja+=c-16):(a.oa|=b<<a.ja&65535,a.ja+=c)}
function Bk(a,b,c){Ak(a,c[b*2],c[b*2+1])}
function Ck(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Dk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Ck(d[e]++,e))}
function Ek(a){var b;for(b=0;b<286;b++)a.sa[b*2]=0;for(b=0;b<30;b++)a.Ya[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.sa[512]=1;a.Qa=a.wb=0;a.za=a.matches=0}
function Fk(a){a.ja>8?zk(a,a.oa):a.ja>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ja=0}
function Gk(a,b,c){Fk(a);zk(a,c);zk(a,~c);N.kb(a.aa,a.window,b,c,a.pending);a.pending+=c}
function Hk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Ik(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Oa;){e<a.Oa&&Hk(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Hk(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Jk(a,b,c){var d=0;if(a.za!==0){do{var e=a.aa[a.Cb+d*2]<<8|a.aa[a.Cb+d*2+1];var f=a.aa[a.xc+d];d++;if(e===0)Bk(a,f,b);else{var g=rk[f];Bk(a,g+256+1,b);var h=kk[g];h!==0&&(f-=sk[g],Ak(a,f,h));e--;g=e<256?qk[e]:qk[256+(e>>>7)];Bk(a,g,c);h=lk[g];h!==0&&(e-=tk[g],Ak(a,e,h))}}while(d<a.za)}Bk(a,256,b)}
function Kk(a,b){var c=b.Vc,d=b.Va.ud,e=b.Va.Zc,f=b.Va.Od,g,h=-1;a.Oa=0;a.nb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Oa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Oa<2;){var k=a.da[++a.Oa]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Qa--;e&&(a.wb-=d[k*2+1])}b.sb=h;for(g=a.Oa>>1;g>=1;g--)Ik(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Oa--],Ik(a,c,1),d=a.da[1],a.da[--a.nb]=g,a.da[--a.nb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Ik(a,c,1);while(a.Oa>=
2);a.da[--a.nb]=a.da[1];g=b.Vc;k=b.sb;d=b.Va.ud;e=b.Va.Zc;f=b.Va.Ud;var l=b.Va.Td,m=b.Va.pe,n,r=0;for(n=0;n<=15;n++)a.La[n]=0;g[a.da[a.nb]*2+1]=0;for(b=a.nb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.La[n]++;var w=0;t>=l&&(w=f[t-l]);var y=g[t*2];a.Qa+=y*(n+w);e&&(a.wb+=y*(d[t*2+1]+w))}}if(r!==0){do{for(n=m-1;a.La[n]===0;)n--;a.La[n]--;a.La[n+1]+=2;a.La[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.La[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Qa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Dk(c,h,a.La)}
function Lk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ka[l*2]+=g:l!==0?(l!==e&&a.ka[l*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Mk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Bk(a,l,a.ka);while(--g!==0)}else l!==0?(l!==e&&(Bk(a,l,a.ka),g--),Bk(a,16,a.ka),Ak(a,g-3,2)):g<=10?(Bk(a,17,a.ka),Ak(a,g-3,3)):(Bk(a,18,a.ka),Ak(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Nk(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.sa[c*2]!==0)return 0;if(a.sa[18]!==0||a.sa[20]!==0||a.sa[26]!==0)return 1;for(c=32;c<256;c++)if(a.sa[c*2]!==0)return 1;return 0}
var Ok=!1;function Pk(a,b,c){a.aa[a.Cb+a.za*2]=b>>>8&255;a.aa[a.Cb+a.za*2+1]=b&255;a.aa[a.xc+a.za]=c&255;a.za++;b===0?a.sa[c*2]++:(a.matches++,b--,a.sa[(rk[c]+256+1)*2]++,a.Ya[(b<256?qk[b]:qk[256+(b>>>7)])*2]++);return a.za===a.Hb-1}
;function Qk(a,b){a.msg=ik[b];return b}
function Rk(a){for(var b=a.length;--b>=0;)a[b]=0}
function Sk(a){var b=a.state,c=b.pending;c>a.R&&(c=a.R);c!==0&&(N.kb(a.output,b.aa,b.Kb,c,a.tb),a.tb+=c,b.Kb+=c,a.Kc+=c,a.R-=c,b.pending-=c,b.pending===0&&(b.Kb=0))}
function Tk(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.M.qc===2&&(a.M.qc=Nk(a));Kk(a,a.dc);Kk(a,a.Xb);Lk(a,a.sa,a.dc.sb);Lk(a,a.Ya,a.Xb.sb);Kk(a,a.Pc);for(e=18;e>=3&&a.ka[nk[e]*2+1]===0;e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.wb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Ak(a,b?1:0,3),Gk(a,c,d);else if(a.strategy===4||g===f)Ak(a,2+(b?1:0),3),Jk(a,ok,pk);else{Ak(a,4+(b?1:0),3);c=a.dc.sb+1;d=a.Xb.sb+1;e+=1;Ak(a,c-257,5);Ak(a,d-1,5);Ak(a,e-4,4);for(f=0;f<e;f++)Ak(a,a.ka[nk[f]*
2+1],3);Mk(a,a.sa,c-1);Mk(a,a.Ya,d-1);Jk(a,a.sa,a.Ya)}Ek(a);b&&Fk(a);a.va=a.v;Sk(a.M)}
function O(a,b){a.aa[a.pending++]=b}
function Uk(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function Vk(a,b){var c=a.gd,d=a.v,e=a.xa,f=a.hd,g=a.v>a.ma-262?a.v-(a.ma-262):0,h=a.window,k=a.Wa,l=a.Ha,m=a.v+258,n=h[d+e-1],r=h[d+e];a.xa>=a.Yc&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.rb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function Wk(a){var b=a.ma,c;do{var d=a.Bd-a.B-a.v;if(a.v>=b+(b-262)){N.kb(a.window,a.window,b,b,0);a.rb-=b;a.v-=b;a.va-=b;var e=c=a.cc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.na===0)break;e=a.M;c=a.window;f=a.v+a.B;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,N.kb(c,e.input,e.eb,g,f),e.state.wrap===1?e.K=ck(e.K,c,g,f):e.state.wrap===2&&(e.K=dk(e.K,c,g,f)),e.eb+=g,e.gb+=g,c=g);a.B+=c;if(a.B+a.ta>=3)for(d=a.v-a.ta,a.P=a.window[d],
a.P=(a.P<<a.Na^a.window[d+1])&a.Ma;a.ta&&!(a.P=(a.P<<a.Na^a.window[d+3-1])&a.Ma,a.Ha[d&a.Wa]=a.head[a.P],a.head[a.P]=d,d++,a.ta--,a.B+a.ta<3););}while(a.B<262&&a.M.na!==0)}
function Xk(a,b){for(var c;;){if(a.B<262){Wk(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.P=(a.P<<a.Na^a.window[a.v+3-1])&a.Ma,c=a.Ha[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v);c!==0&&a.v-c<=a.ma-262&&(a.S=Vk(a,c));if(a.S>=3)if(c=Pk(a,a.v-a.rb,a.S-3),a.B-=a.S,a.S<=a.zc&&a.B>=3){a.S--;do a.v++,a.P=(a.P<<a.Na^a.window[a.v+3-1])&a.Ma,a.Ha[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v;while(--a.S!==0);a.v++}else a.v+=a.S,a.S=0,a.P=a.window[a.v],a.P=(a.P<<a.Na^a.window[a.v+1])&a.Ma;else c=Pk(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(Tk(a,!1),a.M.R===0))return 1}a.ta=a.v<2?a.v:2;return b===4?(Tk(a,!0),a.M.R===0?3:4):a.za&&(Tk(a,!1),a.M.R===0)?1:2}
function Yk(a,b){for(var c,d;;){if(a.B<262){Wk(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.P=(a.P<<a.Na^a.window[a.v+3-1])&a.Ma,c=a.Ha[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v);a.xa=a.S;a.ld=a.rb;a.S=2;c!==0&&a.xa<a.zc&&a.v-c<=a.ma-262&&(a.S=Vk(a,c),a.S<=5&&(a.strategy===1||a.S===3&&a.v-a.rb>4096)&&(a.S=2));if(a.xa>=3&&a.S<=a.xa){d=a.v+a.B-3;c=Pk(a,a.v-1-a.ld,a.xa-3);a.B-=a.xa-1;a.xa-=2;do++a.v<=d&&(a.P=(a.P<<a.Na^a.window[a.v+3-1])&a.Ma,a.Ha[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v);
while(--a.xa!==0);a.bb=0;a.S=2;a.v++;if(c&&(Tk(a,!1),a.M.R===0))return 1}else if(a.bb){if((c=Pk(a,0,a.window[a.v-1]))&&Tk(a,!1),a.v++,a.B--,a.M.R===0)return 1}else a.bb=1,a.v++,a.B--}a.bb&&(Pk(a,0,a.window[a.v-1]),a.bb=0);a.ta=a.v<2?a.v:2;return b===4?(Tk(a,!0),a.M.R===0?3:4):a.za&&(Tk(a,!1),a.M.R===0)?1:2}
function Zk(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){Wk(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.S=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.S=258-(e-d);a.S>a.B&&(a.S=a.B)}a.S>=3?(c=Pk(a,1,a.S-3),a.B-=a.S,a.v+=a.S,a.S=0):(c=Pk(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(Tk(a,!1),a.M.R===0))return 1}a.ta=0;return b===4?(Tk(a,!0),a.M.R===0?3:4):
a.za&&(Tk(a,!1),a.M.R===0)?1:2}
function $k(a,b){for(var c;;){if(a.B===0&&(Wk(a),a.B===0)){if(b===0)return 1;break}a.S=0;c=Pk(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(Tk(a,!1),a.M.R===0))return 1}a.ta=0;return b===4?(Tk(a,!0),a.M.R===0?3:4):a.za&&(Tk(a,!1),a.M.R===0)?1:2}
function al(a,b,c,d,e){this.Zd=a;this.oe=b;this.qe=c;this.ne=d;this.Vd=e}
var bl;bl=[new al(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(a.B<=1){Wk(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,Tk(a,!1),a.M.R===0)return 1;if(a.v-a.va>=a.ma-262&&(Tk(a,!1),a.M.R===0))return 1}a.ta=0;if(b===4)return Tk(a,!0),a.M.R===0?3:4;a.v>a.va&&Tk(a,!1);return 1}),
new al(4,4,8,4,Xk),new al(4,5,16,8,Xk),new al(4,6,32,32,Xk),new al(4,4,16,16,Yk),new al(8,16,32,32,Yk),new al(8,16,128,128,Yk),new al(8,32,128,256,Yk),new al(32,128,258,1024,Yk),new al(32,258,258,4096,Yk)];
function cl(){this.M=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Kb=this.Aa=0;this.I=null;this.Ca=0;this.method=8;this.pb=-1;this.Wa=this.Mc=this.ma=0;this.window=null;this.Bd=0;this.head=this.Ha=null;this.hd=this.Yc=this.strategy=this.level=this.zc=this.gd=this.xa=this.B=this.rb=this.v=this.bb=this.ld=this.S=this.va=this.Na=this.Ma=this.vc=this.cc=this.P=0;this.sa=new N.Ia(1146);this.Ya=new N.Ia(122);this.ka=new N.Ia(78);Rk(this.sa);Rk(this.Ya);Rk(this.ka);this.Pc=this.Xb=this.dc=
null;this.La=new N.Ia(16);this.da=new N.Ia(573);Rk(this.da);this.nb=this.Oa=0;this.depth=new N.Ia(573);Rk(this.depth);this.ja=this.oa=this.ta=this.matches=this.wb=this.Qa=this.Cb=this.za=this.Hb=this.xc=0}
function dl(a,b){if(!a||!a.state||b>5||b<0)return a?Qk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return Qk(a,a.R===0?-5:-2);c.M=a;var d=c.pb;c.pb=b;if(c.status===42)if(c.wrap===2)a.K=0,O(c,31),O(c,139),O(c,8),c.I?(O(c,(c.I.text?1:0)+(c.I.Ta?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),O(c,c.I.time&255),O(c,c.I.time>>8&255),O(c,c.I.time>>16&255),O(c,c.I.time>>24&255),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(O(c,c.I.extra.length&255),O(c,c.I.extra.length>>8&255)),c.I.Ta&&(a.K=dk(a.K,c.aa,c.pending,0)),c.Ca=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,3),c.status=113);else{var e=8+(c.Mc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;Uk(c,e+(31-e%31));c.v!==0&&(Uk(c,a.K>>>16),Uk(c,a.K&65535));a.K=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Ca<(c.I.extra.length&65535)&&(c.pending!==c.Aa||
(c.I.Ta&&c.pending>e&&(a.K=dk(a.K,c.aa,c.pending-e,e)),Sk(a),e=c.pending,c.pending!==c.Aa));)O(c,c.I.extra[c.Ca]&255),c.Ca++;c.I.Ta&&c.pending>e&&(a.K=dk(a.K,c.aa,c.pending-e,e));c.Ca===c.I.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.Aa&&(c.I.Ta&&c.pending>e&&(a.K=dk(a.K,c.aa,c.pending-e,e)),Sk(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.I.name.length?c.I.name.charCodeAt(c.Ca++)&255:0;O(c,f)}while(f!==0);c.I.Ta&&c.pending>
e&&(a.K=dk(a.K,c.aa,c.pending-e,e));f===0&&(c.Ca=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.I.Ta&&c.pending>e&&(a.K=dk(a.K,c.aa,c.pending-e,e)),Sk(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.I.comment.length?c.I.comment.charCodeAt(c.Ca++)&255:0;O(c,f)}while(f!==0);c.I.Ta&&c.pending>e&&(a.K=dk(a.K,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Ta?(c.pending+2>c.Aa&&Sk(a),c.pending+2<=c.Aa&&(O(c,
a.K&255),O(c,a.K>>8&255),a.K=0,c.status=113)):c.status=113);if(c.pending!==0){if(Sk(a),a.R===0)return c.pb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Qk(a,-5);if(c.status===666&&a.na!==0)return Qk(a,-5);if(a.na!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?$k(c,b):c.strategy===3?Zk(c,b):bl[c.level].Vd(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.R===0&&(c.pb=-1),0;if(d===2&&(b===1?(Ak(c,2,3),Bk(c,256,ok),c.ja===16?(zk(c,c.oa),c.oa=0,c.ja=0):c.ja>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ja-=8)):b!==5&&(Ak(c,0,3),Gk(c,0,0),b===3&&(Rk(c.head),c.B===0&&(c.v=0,c.va=0,c.ta=0))),Sk(a),a.R===0))return c.pb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(O(c,a.K&255),O(c,a.K>>8&255),O(c,a.K>>16&255),O(c,a.K>>24&255),O(c,a.gb&255),O(c,a.gb>>8&255),O(c,a.gb>>16&255),O(c,a.gb>>24&255)):(Uk(c,a.K>>>16),Uk(c,a.K&65535));Sk(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var el={};el=function(){this.input=null;this.gb=this.na=this.eb=0;this.output=null;this.Kc=this.R=this.tb=0;this.msg="";this.state=null;this.qc=2;this.K=0};var fl=Object.prototype.toString;
function gl(a){if(!(this instanceof gl))return new gl(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new el;this.M.R=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Qk(b,-2);else{e===8&&(e=9);var k=new cl;b.state=k;k.M=b;k.wrap=h;k.I=null;k.Mc=e;k.ma=1<<k.Mc;k.Wa=k.ma-1;k.vc=f+7;k.cc=1<<k.vc;k.Ma=k.cc-1;k.Na=~~((k.vc+3-1)/3);k.window=new N.hb(k.ma*2);k.head=new N.Ia(k.cc);k.Ha=new N.Ia(k.ma);k.Hb=1<<f+6;k.Aa=k.Hb*4;k.aa=new N.hb(k.Aa);k.Cb=1*k.Hb;k.xc=3*k.Hb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.gb=b.Kc=0;b.qc=2;c=b.state;c.pending=0;c.Kb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.K=c.wrap===2?
0:1;c.pb=0;if(!Ok){d=Array(16);for(f=g=0;f<28;f++)for(sk[f]=g,e=0;e<1<<kk[f];e++)rk[g++]=f;rk[g-1]=f;for(f=g=0;f<16;f++)for(tk[f]=g,e=0;e<1<<lk[f];e++)qk[g++]=f;for(g>>=7;f<30;f++)for(tk[f]=g<<7,e=0;e<1<<lk[f]-7;e++)qk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)ok[e*2+1]=8,e++,d[8]++;for(;e<=255;)ok[e*2+1]=9,e++,d[9]++;for(;e<=279;)ok[e*2+1]=7,e++,d[7]++;for(;e<=287;)ok[e*2+1]=8,e++,d[8]++;Dk(ok,287,d);for(e=0;e<30;e++)pk[e*2+1]=5,pk[e*2]=Ck(e,5);vk=new uk(ok,kk,257,286,15);wk=new uk(pk,
lk,0,30,15);xk=new uk([],mk,0,19,7);Ok=!0}c.dc=new yk(c.sa,vk);c.Xb=new yk(c.Ya,wk);c.Pc=new yk(c.ka,xk);c.oa=0;c.ja=0;Ek(c);c=0}else c=Qk(b,-2);c===0&&(b=b.state,b.Bd=2*b.ma,Rk(b.head),b.zc=bl[b.level].oe,b.Yc=bl[b.level].Zd,b.hd=bl[b.level].qe,b.gd=bl[b.level].ne,b.v=0,b.va=0,b.B=0,b.ta=0,b.S=b.xa=2,b.bb=0,b.P=0);b=c}}else b=-2;if(b!==0)throw Error(ik[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=bk(a.dictionary):
fl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.K=ck(a.K,f,g,0));l.wrap=0;g>=l.ma&&(b===0&&(Rk(l.head),l.v=0,l.va=0,l.ta=0),c=new N.hb(l.ma),N.kb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.na;d=a.eb;e=a.input;a.na=g;a.eb=0;a.input=f;for(Wk(l);l.B>=3;){f=l.v;g=l.B-2;do l.P=(l.P<<l.Na^l.window[f+3-1])&l.Ma,l.Ha[f&l.Wa]=l.head[l.P],l.head[l.P]=f,f++;while(--g);
l.v=f;l.B=2;Wk(l)}l.v+=l.B;l.va=l.v;l.ta=l.B;l.B=0;l.S=l.xa=2;l.bb=0;a.eb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(ik[b]);this.Fg=!0}}
gl.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=bk(a):fl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.eb=0;c.na=c.input.length;do{c.R===0&&(c.output=new N.hb(d),c.tb=0,c.R=d);a=dl(c,e);if(a!==1&&a!==0)return hl(this,a),this.ended=!0,!1;if(c.R===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.Jc(c.output,c.tb);b=f;f=f.length;if(f<65537&&(b.subarray&&ak||!b.subarray))b=
String.fromCharCode.apply(null,N.Jc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Jc(c.output,c.tb),this.chunks.push(b)}while((c.na>0||c.R===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Qk(c,-2):(c.state=null,a=d===113?Qk(c,-3):0)):a=-2,hl(this,a),this.ended=!0,a===0;e===2&&(hl(this,0),c.R=0);return!0};
function hl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.Wc(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function il(a,b){b=b||{};b.gzip=!0;b=new gl(b);b.push(a,!0);if(b.err)throw b.msg||ik[b.err];return b.result}
;function jl(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=mb(a):b=null;return b}
;function kl(a){return mb(a===null?"null":a===void 0?"undefined":a)}
;function ll(a){this.name=a}
;var ml=new ll("rawColdConfigGroup");var nl=new ll("rawHotConfigGroup");function ol(a){this.G=J(a)}
x(ol,K);var pl=new ll("continuationCommand");var ql=new ll("webCommandMetadata");var rl=new ll("signalServiceEndpoint");var sl={vf:"EMBEDDED_PLAYER_MODE_UNKNOWN",sf:"EMBEDDED_PLAYER_MODE_DEFAULT",uf:"EMBEDDED_PLAYER_MODE_PFP",tf:"EMBEDDED_PLAYER_MODE_PFL"};var tl=new ll("feedbackEndpoint");function ul(a){this.G=J(a)}
x(ul,K);ul.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new af(a,Ye):Ze||(Ze=new af(null,Ye));else if(a.constructor!==af)if(Xe(a))a=a.length?new af(new Uint8Array(a),Ye):Ze||(Ze=new af(null,Ye));else throw Error();return Mg(this,1,a)};var Pf={kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Jf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Gf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Af:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Bf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Hf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",If:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Kf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",Mf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Lf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Nf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Ff:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Df:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Ef:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Cf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED"};var vl=new ll("shareEndpoint"),wl=new ll("shareEntityEndpoint"),xl=new ll("shareEntityServiceEndpoint"),yl=new ll("webPlayerShareEntityServiceEndpoint");var zl=new ll("playlistEditEndpoint");var Al=new ll("modifyChannelNotificationPreferenceEndpoint");var Bl=new ll("unsubscribeEndpoint");var Cl=new ll("subscribeEndpoint");function Dl(){var a=El;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Fl(a){D("yt.ads.biscotti.lastId_",a)}
;function Gl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Hl=C.window,Il,Jl,Kl=(Hl==null?void 0:(Il=Hl.yt)==null?void 0:Il.config_)||(Hl==null?void 0:(Jl=Hl.ytcfg)==null?void 0:Jl.data_)||{};D("yt.config_",Kl);function Ll(){Gl(Kl,arguments)}
function P(a,b){return a in Kl?Kl[a]:b}
function Ml(a){var b=Kl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Nl=[];function Ol(a){Nl.forEach(function(b){return b(a)})}
function Pl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ql(b)}}:a}
function Ql(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Ll("ERRORS",b));Ol(a)}
function Rl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Ll("ERRORS",f))}
;var Sl=/^[\w.]*$/,Tl={q:!0,search_query:!0};function Ul(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=Vl(f[0]||""),h=Vl(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Jb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(Ul);l.args=[{key:m,value:f[1],query:a,method:Wl===n?"unchanged":n}];Tl.hasOwnProperty(m)||Rl(l)}}return c}
var Wl=String(Ul);function Xl(a){var b=[];Kb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Db(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Yl(a){a.charAt(0)==="?"&&(a=a.substring(1));return Ul(a,"&")}
function Zl(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),Yl(a.length>1?a[1]:a[0])):{}}
function $l(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Yl(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return tc(a,e)+d}
function am(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)===d&&(Number(nc(4,b))||null)===(Number(nc(4,a))||null):!0;return a}
function Vl(a){return a&&a.match(Sl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function bm(a){var b=cm;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=qj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ka){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?ij:g;try{var h=g.history.length}catch(Ka){h=0}e.u_his=h;var k;e.u_h=(k=ij.screen)==null?void 0:k.height;var l;e.u_w=(l=ij.screen)==null?void 0:l.width;var m;e.u_ah=(m=ij.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=ij.screen)==null?void 0:n.availWidth;var r;e.u_cd=(r=ij.screen)==null?void 0:r.colorDepth}catch(Ka){}h=b.h;try{var t=h.screenX;var w=h.screenY}catch(Ka){}try{var y=h.outerWidth;var A=h.outerHeight}catch(Ka){}try{var G=h.innerWidth;var M=h.innerHeight}catch(Ka){}try{var W=h.screenLeft;var Y=h.screenTop}catch(Ka){}try{G=h.innerWidth,M=h.innerHeight}catch(Ka){}try{var ta=h.screen.availWidth;var lb=h.screen.availTop}catch(Ka){}t=[W,Y,t,w,ta,lb,y,A,G,M];try{var R=(b.h.top||window).document,ua=R.compatMode==
"CSS1Compat"?R.documentElement:R.body;var La=(new Jd(ua.clientWidth,ua.clientHeight)).round()}catch(Ka){La=new Jd(-12245933,-12245933)}R=La;La={};var Ma=Ma===void 0?C:Ma;ua=new wj;"SVGElement"in Ma&&"createElementNS"in Ma.document&&ua.set(0);w=nj();w["allow-top-navigation-by-user-activation"]&&ua.set(1);w["allow-popups-to-escape-sandbox"]&&ua.set(2);Ma.crypto&&Ma.crypto.subtle&&ua.set(3);"TextDecoder"in Ma&&"TextEncoder"in Ma&&ua.set(4);Ma=xj(ua);La.bc=Ma;La.bih=R.height;La.biw=R.width;La.brdim=t.join();
b=b.i;b=(La.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,La.wgl=!!ij.WebGLRenderingContext,La);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var cm=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Xl(bm(a))});Ya();navigator.userAgent.indexOf(" (CrKey ");var dm="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function em(){if(!dm)return null;var a=dm();return"open"in a?a:null}
function fm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function gm(a,b){typeof a==="function"&&(a=Pl(a));return window.setTimeout(a,b)}
;var hm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ja(hm),["client_dev_set_cookie"]);function S(a){a=im(a);return typeof a==="string"&&a==="false"?!1:!!a}
function jm(a,b){a=im(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function im(a){return P("EXPERIMENT_FLAGS",{})[a]}
function km(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var lm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},mm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(hm)),nm=!1;
function om(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&Pl(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=em();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=pm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=qm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){Rl(n)}}l.send(d);return l}
function qm(a,b){b=b===void 0?{}:b;var c=am(a),d=P("INNERTUBE_CLIENT_NAME"),e=S("web_ajax_ignore_global_headers_if_set"),f;for(f in lm){var g=P(lm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=P("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(oc(a)?!1:!0))){k=a;var l;if(l=S("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=oc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=mc(nc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&oc(a)||(b["X-YouTube-Ad-Signals"]=Xl(bm()));return b}
function rm(a,b){b.method="POST";b.postParams||(b.postParams={});return sm(a,b)}
function sm(a,b){var c=b.format||"JSON";a=tm(a,b);var d=um(a,b),e=!1,f=wm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=fm(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=xm(a,c,k,b.convertToSafeHtml);l&&(l=ym(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=gm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function tm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=$l(a,b||{},!0);return a}
function um(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Yl(e),Ub(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):sc(e));f=e||f&&!Nb(f);!nm&&f&&b.method!=="POST"&&(nm=!0,Ql(Error("AJAX request with postData should use POST")));return e}
function xm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Rl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?zm(a):null)e={},Db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Am(g)})}d&&Bm(e);
return e}
function Bm(a){if(Qa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=eb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else Bm(a[b])}}
function ym(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function zm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Am(a){var b="";Db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function pm(a){var b=window.location.search,c=oc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&am(a)&&(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Yl(b),f={};Db(mm,function(g){e[g]&&(f[g]=e[g])});
return $l(a,f||{},!1)}
var wm=om;var Cm=[{Ac:function(a){return"Cannot read property '"+a.key+"'"},
ec:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ac:function(a){return"Cannot call '"+a.key+"'"},
ec:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ac:function(a){return a.key+" is not defined"},
ec:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Em={Ua:[],Sa:[{callback:Dm,weight:500}]};function Dm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Fm(){this.Sa=[];this.Ua=[]}
var Gm;function Hm(){if(!Gm){var a=Gm=new Fm;a.Ua.length=0;a.Sa.length=0;Em.Ua&&a.Ua.push.apply(a.Ua,Em.Ua);Em.Sa&&a.Sa.push.apply(a.Sa,Em.Sa)}return Gm}
;var Im=new L;function Jm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Km(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Km(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Km(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Km(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function Lm(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Mm(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Jm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Mm(f+".ve",g,h,k):0;d+=f;d+=Mm(e,a[e],b,c);if(d>500)break}}else c[b]=Nm(a),d+=c[b].length;else c[b]=Nm(a),d+=c[b].length;return d}
function Mm(a,b,c,d){c+="."+a;a=Nm(b);d[c]=a;return c.length+a.length}
function Nm(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Om(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Pm(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Qm(){this.Ue=!0}
function Rm(){Qm.h||(Qm.h=new Qm);return Qm.h}
function Sm(a,b){a={};var c=[],d=S("enable_first_party_auth_v2")||(b==null?void 0:b.bd)&&S("enable_first_party_auth_v2_on_get_account_menu");"USER_SESSION_ID"in Kl&&d&&c.push({key:"u",value:P("USER_SESSION_ID")});if(c=Rh(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Kl||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in
Kl&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID"));return a}
;var Tm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Um(a,b,c,d,e){Nh.set(""+a,b,{Jb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function Vm(a){return Nh.get(""+a,void 0)}
function Wm(a,b,c){Nh.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function Xm(){if(S("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!Nh.isEnabled())return!1;if(Nh.h.cookie)return!0;S("embeds_web_enable_cookie_detection_fix")?Nh.set("TESTCOOKIESENABLED","1",{Jb:60,De:"none",secure:!0}):Nh.set("TESTCOOKIESENABLED","1",{Jb:60});if(Nh.get("TESTCOOKIESENABLED")!=="1")return!1;Nh.remove("TESTCOOKIESENABLED");return!0}
;var Ym=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Ym);function Zm(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Vm(this.h);a&&this.parse(a)}
var $m;function an(){$m||($m=new Zm);return $m}
p=Zm.prototype;p.get=function(a,b){bn(a);cn(a);a=Ym[a]!==void 0?Ym[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){bn(a);cn(a);if(b==null)throw Error("ExpectedNotNull");Ym[a]=b.toString()};
function dn(a){return!!((en("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){bn(a);cn(a);delete Ym[a]};
p.clear=function(){for(var a in Ym)delete Ym[a]};
function cn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function bn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function en(a){a=Ym[a]!==void 0?Ym[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Ym[d]=c.toString())}};var fn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},gn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function hn(){var a=C.navigator;return a?a.connection:void 0}
function jn(){var a=hn();if(a){var b=fn[a.type||"unknown"]||"CONN_UNKNOWN";a=fn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function kn(){var a=hn();if(a!=null&&a.effectiveType)return gn.hasOwnProperty(a.effectiveType)?gn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function T(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
x(T,Error);function ln(){try{return mn(),!0}catch(a){return!1}}
function mn(a){if(P("DATASYNC_ID")!==void 0)return P("DATASYNC_ID");throw new T("Datasync ID not set",a===void 0?"unknown":a);}
;function nn(){}
function on(a,b){return vj.Xa(a,0,b)}
nn.prototype.qa=function(a,b){return this.Xa(a,1,b)};
nn.prototype.zb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var pn=jm("web_emulated_idle_callback_delay",300),qn=1E3/60-3,rn=[8,5,4,3,2,1,0];
function sn(a){a=a===void 0?{}:a;H.call(this);this.i=[];this.j={};this.W=this.h=0;this.V=this.u=!1;this.J=[];this.T=this.ea=!1;for(var b=v(rn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.pc=a.timeout||1;this.H=qn;this.A=0;this.pa=this.se.bind(this);this.oc=this.Xe.bind(this);this.Ka=this.Hd.bind(this);this.yb=this.ae.bind(this);this.Qb=this.we.bind(this);this.ya=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ha=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.pa)}
x(sn,H);p=sn.prototype;p.zb=function(a){var b=Ya();tn(this,a);a=Ya()-b;this.u||(this.H-=a)};
p.Xa=function(a,b,c){++this.W;if(b===10)return this.zb(a),this.W;var d=this.W;this.j[d]=a;this.u&&!c?this.J.push({id:d,priority:b}):(this.i[b].push(d),this.V||this.u||(this.h!==0&&un(this)!==this.A&&this.stop(),this.start()));return d};
p.ra=function(a){delete this.j[a]};
function vn(a){a.J.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function wn(a){return!a.isHidden()&&a.ha}
function un(a){if(a.i[8].length){if(a.T)return 4;if(wn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?wn(a)?3:2:1;return 0}
p.Ga=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function tn(a,b){try{b()}catch(c){a.Ga(c)}}
function xn(a){for(var b=v(rn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.ae=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;yn(this,b);this.ea=!1};
p.Xe=function(){yn(this)};
p.Hd=function(){zn(this)};
p.we=function(a){this.T=!0;var b=un(this);b===4&&b!==this.A&&(this.stop(),this.start());yn(this,void 0,a);this.T=!1};
p.se=function(){this.isHidden()||zn(this);this.h&&(this.stop(),this.start())};
function zn(a){a.stop();a.u=!0;for(var b=Ya(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&tn(a,e)}An(a);a.u=!1;xn(a)&&a.start();b=Ya()-b;a.H-=b}
function An(a){for(var b=0,c=a.J.length;b<c;b++){var d=a.J[b];a.i[d.priority].push(d.id)}a.J.length=0}
function yn(a,b,c){a.T&&a.A===4&&a.h||a.stop();a.u=!0;b=Ya()+(b||a.H);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ga(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&tn(a,f);d=a.ea?0:1;d=a.o>d?a.o:d;if(!(Ya()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&tn(a,c)}while(c&&Ya()<b)}a.u=!1;An(a);a.H=qn;xn(a)&&a.start()}
p.start=function(){this.V=!1;if(this.h===0)switch(this.A=un(this),this.A){case 1:var a=this.yb;this.h=this.ya?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,pn);break;case 2:this.h=window.setTimeout(this.oc,this.pc);break;case 3:this.h=window.requestAnimationFrame(this.Qb);break;case 4:this.h=window.setTimeout(this.Ka,0)}};
p.pause=function(){this.stop();this.V=!0};
p.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.ya?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.ba=function(){vn(this);this.stop();this.ha&&document.removeEventListener("visibilitychange",this.pa);H.prototype.ba.call(this)};var Bn=E("yt.scheduler.instance.timerIdMap_")||{},Cn=jm("kevlar_tuner_scheduler_soft_state_timer_ms",800),Dn=0,En=0;function Fn(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.ia)a=new sn(P("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Gn(){Hn();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Jc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Hn(){vn(Fn());for(var a in Bn)Bn.hasOwnProperty(a)&&delete Bn[Number(a)]}
function In(a,b,c){if(!c)return c=c===void 0,-Fn().Xa(a,b,c);var d=window.setTimeout(function(){var e=Fn().Xa(a,b);Bn[d]=e},c);
return d}
function Jn(a){Fn().zb(a)}
function Kn(a){var b=Fn();if(a<0)b.ra(-a);else{var c=Bn[a];c?(b.ra(c),delete Bn[a]):window.clearTimeout(a)}}
function Ln(){Mn()}
function Mn(){window.clearTimeout(Dn);Fn().start()}
function Nn(){Fn().pause();window.clearTimeout(Dn);Dn=window.setTimeout(Ln,Cn)}
function On(){window.clearTimeout(En);En=window.setTimeout(function(){Pn(0)},Cn)}
function Pn(a){On();var b=Fn();b.o=a;b.start()}
function Qn(a){On();var b=Fn();b.o>a&&(b.o=a,b.start())}
function Rn(){window.clearTimeout(En);var a=Fn();a.o=0;a.start()}
;function Sn(){nn.apply(this,arguments)}
x(Sn,nn);function Tn(){Sn.h||(Sn.h=new Sn);return Sn.h}
Sn.prototype.Xa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):gm(a,c||0)};
Sn.prototype.ra=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Sn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
Sn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var vj=Tn();
S("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Gn),D("yt.scheduler.instance.addJob",In),D("yt.scheduler.instance.addImmediateJob",Jn),D("yt.scheduler.instance.cancelJob",Kn),D("yt.scheduler.instance.cancelAllJobs",Hn),D("yt.scheduler.instance.start",Mn),D("yt.scheduler.instance.pause",Nn),D("yt.scheduler.instance.setPriorityThreshold",Pn),D("yt.scheduler.instance.enablePriorityThreshold",Qn),D("yt.scheduler.instance.clearPriorityThreshold",Rn),D("yt.scheduler.initialized",
!0));function Un(a){var b=new Vj;this.h=(a=b.isAvailable()?a?new Wj(b,a):b:null)?new Qj(a):null;this.i=document.domain||window.location.hostname}
Un.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Ci).serialize(b))}catch(f){return}else e=escape(b);Um(a,e,c,this.i)};
Un.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Vm(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Un.prototype.remove=function(a){this.h&&this.h.remove(a);Wm(a,"/",this.i)};var Vn=function(){var a;return function(){a||(a=new Un("ytidb"));return a}}();
function Wn(){var a;return(a=Vn())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Xn=[],Yn,Zn=!1;function $n(){var a={};for(Yn=new ao(a.handleError===void 0?bo:a.handleError,a.logEvent===void 0?co:a.logEvent);Xn.length>0;)switch(a=Xn.shift(),a.type){case "ERROR":Yn.Ga(a.payload);break;case "EVENT":Yn.logEvent(a.eventType,a.payload)}}
function eo(a){Zn||(Yn?Yn.Ga(a):(Xn.push({type:"ERROR",payload:a}),Xn.length>10&&Xn.shift()))}
function fo(a,b){Zn||(Yn?Yn.logEvent(a,b):(Xn.push({type:"EVENT",eventType:a,payload:b}),Xn.length>10&&Xn.shift()))}
;function go(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function ho(a){return a.substr(0,a.indexOf(":"))||a}
;var io=Ie||Je;function jo(a){var b=Qc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var ko={},lo=(ko.AUTH_INVALID="No user identifier specified.",ko.EXPLICIT_ABORT="Transaction was explicitly aborted.",ko.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ko.MISSING_INDEX="Index not created.",ko.MISSING_OBJECT_STORES="Object stores not created.",ko.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",ko.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",ko.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
ko.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ko.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ko.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",ko.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",ko),mo={},no=(mo.AUTH_INVALID="ERROR",mo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",mo.EXPLICIT_ABORT="IGNORED",mo.IDB_NOT_SUPPORTED="ERROR",mo.MISSING_INDEX=
"WARNING",mo.MISSING_OBJECT_STORES="ERROR",mo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",mo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",mo.QUOTA_EXCEEDED="WARNING",mo.QUOTA_MAYBE_EXCEEDED="WARNING",mo.UNKNOWN_ABORT="WARNING",mo.INCOMPATIBLE_DB_VERSION="WARNING",mo),oo={},po=(oo.AUTH_INVALID=!1,oo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,oo.EXPLICIT_ABORT=!1,oo.IDB_NOT_SUPPORTED=!1,oo.MISSING_INDEX=!1,oo.MISSING_OBJECT_STORES=!1,oo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,oo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,oo.QUOTA_EXCEEDED=!1,oo.QUOTA_MAYBE_EXCEEDED=!0,oo.UNKNOWN_ABORT=!0,oo.INCOMPATIBLE_DB_VERSION=!1,oo);function qo(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?lo[a]:c;d=d===void 0?no[a]:d;e=e===void 0?po[a]:e;T.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,qo.prototype)}
x(qo,T);function ro(a,b){qo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},lo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,ro.prototype)}
x(ro,qo);function so(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,so.prototype)}
x(so,Error);var to=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function uo(a,b,c,d){b=ho(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof qo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new qo("QUOTA_EXCEEDED",a);if(Ke&&e.name==="UnknownError")return new qo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof so)return new qo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&to.some(function(f){return e.message.includes(f)}))return new qo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new qo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",kd:e.name})];e.level="WARNING";return e}
function vo(a,b,c){var d=Wn();return new qo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function wo(a){if(!a)throw Error();throw a;}
function xo(a){return a}
function yo(a){this.h=a}
function zo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
zo.all=function(a){return new zo(new yo(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={ob:0};f.ob<a.length;f={ob:f.ob},++f.ob)zo.resolve(a[f.ob]).then(function(g){return function(h){d[g.ob]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
zo.resolve=function(a){return new zo(new yo(function(b,c){a instanceof zo?a.then(b,c):b(a)}))};
zo.reject=function(a){return new zo(new yo(function(b,c){c(a)}))};
zo.prototype.then=function(a,b){var c=this,d=a!=null?a:xo,e=b!=null?b:wo;return new zo(new yo(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Ao(c,c,d,f,g)}),c.i.push(function(){Bo(c,c,e,f,g)})):c.state.status==="FULFILLED"?Ao(c,c,d,f,g):c.state.status==="REJECTED"&&Bo(c,c,e,f,g)}))};
zo.prototype.catch=function(a){return this.then(void 0,a)};
function Ao(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof zo?Co(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Bo(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof zo?Co(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Co(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof zo?Co(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Do(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Eo(a){return new Promise(function(b,c){Do(a,b,c)})}
function Fo(a){return new zo(new yo(function(b,c){Do(a,b,c)}))}
;function Go(a,b){return new zo(new yo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Ho=window,U=Ho.ytcsi&&Ho.ytcsi.now?Ho.ytcsi.now:Ho.performance&&Ho.performance.timing&&Ho.performance.now&&Ho.performance.timing.navigationStart?function(){return Ho.performance.timing.navigationStart+Ho.performance.now()}:function(){return(new Date).getTime()};function Io(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
p=Io.prototype;p.add=function(a,b,c){return Jo(this,[a],{mode:"readwrite",la:!0},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return Jo(this,[a],{mode:"readwrite",la:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Jo(this,[a],{mode:"readonly",la:!0},function(c){return c.objectStore(a).count(b)})};
function Ko(a,b,c){a=a.h.createObjectStore(b,c);return new Lo(a)}
p.delete=function(a,b){return Jo(this,[a],{mode:"readwrite",la:!0},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return Jo(this,[a],{mode:"readonly",la:!0},function(c){return c.objectStore(a).get(b)})};
function Mo(a,b,c){return Jo(a,[b],{mode:"readwrite",la:!0},function(d){d=d.objectStore(b);return Fo(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Jo(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,w,y;return z(function(A){switch(A.h){case 1:var G={mode:"readonly",la:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.la?3:1;g=0;case 2:if(h){A.F(4);break}g++;k=Math.round(U());ya(A,5);l=a.h.transaction(b,e.mode);G=A.yield;var M=new No(l);M=Oo(M,d);return G.call(A,M,7);case 7:return m=A.i,n=Math.round(U()),Po(a,k,n,g,void 0,b.join(),e),A.return(m);case 5:r=za(A);t=Math.round(U());w=uo(r,
a.h.name,b.join(),a.h.version);if((y=w instanceof qo&&!w.h)||g>=f)Po(a,k,t,g,w,b.join(),e),h=w;A.F(2);break;case 4:return A.return(Promise.reject(h))}})}
function Po(a,b,c,d,e,f,g){b=c-b;e?(e instanceof qo&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&fo("QUOTA_EXCEEDED",{dbName:ho(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof qo&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=Math.pow(2,31)&&(c=0),fo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Qo(a,!1,d,f,b,g.tag),eo(e)):Qo(a,!0,d,f,b,g.tag)}
function Qo(a,b,c,d,e,f){fo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function Lo(a){this.h=a}
p=Lo.prototype;p.add=function(a,b){return Fo(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return Fo(this.h.clear()).then(function(){})};
function Ro(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return Fo(this.h.count(a))};
function So(a,b){return To(a,{query:b},function(c){return c.delete().then(function(){return Uo(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?So(this,a):Fo(this.h.delete(a))};
p.get=function(a){return Fo(this.h.get(a))};
p.index=function(a){try{return new Vo(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new so(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function To(a,b,c){a=a.h.openCursor(b.query,b.direction);return Wo(a).then(function(d){return Go(d,c)})}
function No(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=qo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Oo(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
No.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new qo("EXPLICIT_ABORT");};
No.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Lo(a),this.i.set(a,b));return b};
function Vo(a){this.h=a}
p=Vo.prototype;p.count=function(a){return Fo(this.h.count(a))};
p.delete=function(a){return Xo(this,{query:a},function(b){return b.delete().then(function(){return Uo(b)})})};
p.get=function(a){return Fo(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function Xo(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Wo(a).then(function(d){return Go(d,c)})}
function Yo(a,b){this.request=a;this.cursor=b}
function Wo(a){return Fo(a).then(function(b){return b?new Yo(a,b):null})}
function Uo(a){a.cursor.continue(void 0);return Wo(a.request)}
Yo.prototype.delete=function(){return Fo(this.cursor.delete()).then(function(){})};
Yo.prototype.getValue=function(){return this.cursor.value};
Yo.prototype.update=function(a){return Fo(this.cursor.update(a))};function Zo(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Io(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Jd,k=c.blocking,l=c.Ve,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&fo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:ho(a)});var w=f(),y=new No(g.transaction);
m&&m(w,function(A){return t.oldVersion<A&&t.newVersion>=A},y);
y.done.catch(function(A){e(A)})}catch(A){e(A)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){fo("IDB_UNEXPECTEDLY_CLOSED",{dbName:ho(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function $o(a,b,c){c=c===void 0?{}:c;return Zo(a,b,c)}
function ap(a,b){b=b===void 0?{}:b;var c,d,e,f;return z(function(g){if(g.h==1)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Jd)&&c.addEventListener("blocked",function(){e()}),g.yield(Eo(c),4);
if(g.h!=2)g.h=0,g.o=0;else throw f=za(g),uo(f,a,"",-1);})}
;function bp(a,b){this.name=a;this.options=b;this.j=!0;this.D=this.o=0}
bp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return $o(a,b,c)};
bp.prototype.delete=function(a){a=a===void 0?{}:a;return ap(this.name,a)};
function cp(a,b){return new qo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function dp(a,b){if(!b)throw vo("openWithToken",ho(a.name));return a.open()}
bp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,w;return z(function(y){switch(y.h){case 1:return g=(f=Error().stack)!=null?f:"",ya(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var A=h=y.i,G=c.options,M=[],W=v(Object.keys(G.ub)),Y=W.next();!Y.done;Y=W.next()){Y=Y.value;var ta=G.ub[Y],lb=ta.ye===void 0?Number.MAX_VALUE:ta.ye;!(A.h.version>=ta.Bb)||A.h.version>=lb||A.h.objectStoreNames.contains(Y)||M.push(Y)}k=M;if(k.length===0){y.F(5);break}l=Object.keys(c.options.ub);
m=h.objectStoreNames();if(c.D<jm("ytidb_reopen_db_retries",0))return c.D++,h.close(),eo(new qo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());if(!(c.o<jm("ytidb_remake_db_retries",1))){y.F(6);break}c.o++;return y.yield(c.delete(),7);case 7:return eo(new qo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());case 6:throw new ro(m,l);case 5:return y.return(h);case 2:n=za(y);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){y.F(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=y.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,cp(c,t);return y.return(r);case 8:throw b(),n instanceof
Error&&!S("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),uo(n,c.name,"",(w=c.options.version)!=null?w:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw cp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ve:b,upgrade:this.options.upgrade};return this.h=d=a()};var ep=new bp("YtIdbMeta",{ub:{databases:{Bb:1}},upgrade:function(a,b){b(1)&&Ko(a,"databases",{keyPath:"actualName"})}});
function fp(a,b){var c;return z(function(d){if(d.h==1)return d.yield(dp(ep,b),2);c=d.i;return d.return(Jo(c,["databases"],{la:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Fo(f.h.put(a,void 0)).then(function(){})})}))})}
function gp(a,b){var c;return z(function(d){if(d.h==1)return a?d.yield(dp(ep,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function hp(a,b){var c,d;return z(function(e){return e.h==1?(c=[],e.yield(dp(ep,b),2)):e.h!=3?(d=e.i,e.yield(Jo(d,["databases"],{la:!0,mode:"readonly"},function(f){c.length=0;return To(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return Uo(g)})}),3)):e.return(c)})}
function ip(a){return hp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function jp(a,b,c){return hp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function kp(a){var b,c;return z(function(d){if(d.h==1)return b=mn("YtIdbMeta hasAnyMeta other"),d.yield(hp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var lp,mp=new function(){}(new function(){});
function np(){var a,b,c,d;return z(function(e){switch(e.h){case 1:a=Wn();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=io)f=/WebKit\/([0-9]+)/.exec(Qc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Qc()),f=!(f&&parseInt(f[1],10)>=602));if(f||bd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(fp(d,mp),4);case 4:return e.yield(gp("yt-idb-test-do-not-use",mp),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function op(){if(lp!==void 0)return lp;Zn=!0;return lp=np().then(function(a){Zn=!1;var b;if((b=Vn())!=null&&b.h){var c;b={hasSucceededOnce:((c=Wn())==null?void 0:c.hasSucceededOnce)||a};var d;(d=Vn())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function pp(){return E("ytglobal.idbToken_")||void 0}
function qp(){var a=pp();return a?Promise.resolve(a):op().then(function(b){(b=b?mp:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var rp=0;function sp(a,b){rp||(rp=vj.qa(function(){var c,d,e,f,g;return z(function(h){switch(h.h){case 1:return h.yield(qp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return h.yield(jp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.F(6);break}f=e[0];return h.yield(ap(f.actualName),7);case 7:return h.yield(gp(f.actualName,c),6);case 6:h.h=4;h.o=0;break;case 3:g=za(h),eo(g),d=!1;case 4:vj.ra(rp),rp=0,d&&sp(a,b),h.h=0}})}))}
function tp(){var a;return z(function(b){return b.h==1?b.yield(qp(),2):(a=b.i)?b.return(kp(a)):b.return(!1)})}
new gj;function up(a){if(!ln())throw a=new qo("AUTH_INVALID",{dbName:a}),eo(a),a;var b=mn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function vp(a,b,c,d){var e,f,g,h,k,l;return z(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(qp(),2);case 2:g=m.i;if(!g)throw h=vo("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),eo(h),h;go(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:up(a);ya(m,3);return m.yield(fp(k,g),5);case 5:return m.yield($o(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=za(m),ya(m,7),m.yield(gp(k.actualName,
g),9);case 9:m.h=8;m.o=0;break;case 7:za(m);case 8:throw l;}})}
function wp(a,b,c){c=c===void 0?{}:c;return vp(a,b,!1,c)}
function xp(a,b,c){c=c===void 0?{}:c;return vp(a,b,!0,c)}
function yp(a,b){b=b===void 0?{}:b;var c,d;return z(function(e){if(e.h==1)return e.yield(qp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();go(a);d=up(a);return e.yield(ap(d.actualName,b),3)}return e.yield(gp(d.actualName,c),0)})}
function zp(a,b,c){a=a.map(function(d){return z(function(e){return e.h==1?e.yield(ap(d.actualName,b),2):e.yield(gp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Ap(){var a=a===void 0?{}:a;var b,c;return z(function(d){if(d.h==1)return d.yield(qp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();go("LogsDatabaseV2");return d.yield(ip(b),3)}c=d.i;return d.yield(zp(c,a,b),0)})}
function Bp(a,b){b=b===void 0?{}:b;var c;return z(function(d){if(d.h==1)return d.yield(qp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();go(a);return d.yield(ap(a,b),3)}return d.yield(gp(a,c),0)})}
;function Cp(a,b){bp.call(this,a,b);this.options=b;go(a)}
x(Cp,bp);function Dp(a,b){var c;return function(){c||(c=new Cp(a,b));return c}}
Cp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?xp:wp)(a,b,Object.assign({},c))};
Cp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Bp:yp)(this.name,a)};
function Ep(a,b){return Dp(a,b)}
;var Fp={},Gp=Ep("ytGcfConfig",{ub:(Fp.coldConfigStore={Bb:1},Fp.hotConfigStore={Bb:1},Fp),shared:!1,upgrade:function(a,b){b(1)&&(Ro(Ko(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Ro(Ko(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Hp(a){return dp(Gp(),a)}
function Ip(a,b,c){var d,e,f;return z(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(Hp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Mo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Jp(a,b,c,d){var e,f,g;return z(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(Hp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Mo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Kp(a){var b,c;return z(function(d){return d.h==1?d.yield(Hp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Jo(b,["coldConfigStore"],{mode:"readwrite",la:!0},function(e){return Xo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Lp(a){var b,c;return z(function(d){return d.h==1?d.yield(Hp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Jo(b,["hotConfigStore"],{mode:"readwrite",la:!0},function(e){return Xo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Mp(){H.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ja(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
x(Mp,H);Mp.prototype.ba=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;H.prototype.ba.call(this)};function Np(){this.h=0;this.i=new Mp}
function Op(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:P("RAW_HOT_CONFIG_GROUP")}
function Pp(a,b,c){var d,e,f;return z(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.F(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=pp();if(!d){g.F(3);break}if(c){g.F(4);break}return g.yield(Lp(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Ip(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Qp(a,b,c){var d,e,f,g;return z(function(h){if(h.h==1){if(!S("start_client_gcf"))return h.F(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=pp())?c?h.F(4):h.yield(Kp(d),5):h.F(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.F(0);g=c.configData;return h.yield(Jp(c,b,g,d),0)})}
function Rp(){if(!Np.h){var a=new Np;Np.h=a}a=Np.h;var b=U()-a.h;if(!(a.h!==0&&b<jm("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Np.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function Sp(){return"INNERTUBE_API_KEY"in Kl&&"INNERTUBE_API_VERSION"in Kl}
function Tp(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),be:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),cd:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Og:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),de:P("INNERTUBE_CONTEXT_HL"),ce:P("INNERTUBE_CONTEXT_GL"),ee:P("INNERTUBE_HOST_OVERRIDE")||"",he:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ge:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Up(a){var b={client:{hl:a.de,gl:a.ce,clientName:a.cd,clientVersion:a.innertubeContextClientVersion,configInfo:a.be}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=km();c.length>0&&(b.request={internalExperimentFlags:c});c=a.cd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=Pm()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=jn())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&
(a=kn())&&b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=Rp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));P("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(Yl(P("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?d.deviceMake=h:g==="cmodel"?d.deviceModel=h:g==="cbr"?d.browserName=h:g==="cbrver"?d.browserVersion=h:g==="cos"?d.osName=h:g==="cosver"?d.osVersion=h:g==="cplatform"&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function Vp(a,b,c){c=c===void 0?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Gg:(a=Sm(Rm()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var Wp=typeof TextEncoder!=="undefined"?new TextEncoder:null,Xp=Wp?function(a){return Wp.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Yp(a,b){this.version=a;this.args=b}
Yp.prototype.serialize=function(){return{version:this.version,args:this.args}};function Zp(a,b){this.topic=a;this.h=b}
Zp.prototype.toString=function(){return this.topic};var $p=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Pb;L.prototype.publish=L.prototype.ib;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",$p);var aq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",aq);var bq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",bq);var cq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",cq);
D("ytPubsub2Pubsub2SkipSubKey",null);function dq(a,b){var c=eq();c&&c.publish.call(c,a.toString(),a,b)}
function fq(a){var b=gq,c=eq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(aq[d])try{if(f&&b instanceof Zp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.zd){var l=new h;h.zd=l.version}var m=h.zd}catch(A){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var r=k.args,t=r.length;if(t>0){var w=Array(t);for(k=0;k<t;k++)w[k]=r[k];var y=w}else y=[];f=n.call(m,h,y)}catch(A){throw A.message="yt.pubsub2.Data.deserialize(): "+A.message,A;}}catch(A){throw A.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+A.message,A;}a.call(window,f)}catch(A){Ql(A)}},cq[b.toString()]?E("yt.scheduler.instance")?vj.qa(g):gm(g,0):g())});
aq[d]=!0;bq[b.toString()]||(bq[b.toString()]=[]);bq[b.toString()].push(d);return d}
function hq(){var a=iq,b=fq(function(c){a.apply(void 0,arguments);jq(b)});
return b}
function jq(a){var b=eq();b&&(typeof a==="number"&&(a=[a]),Db(a,function(c){b.unsubscribeByKey(c);delete aq[c]}))}
function eq(){return E("ytPubsub2Pubsub2Instance")}
;function kq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&dq("meta_logging_csi_event",{timerName:a,gh:b})}
;var lq=void 0,mq=void 0;function nq(){mq||(mq=jl(P("WORKER_SERIALIZATION_URL")));return mq||void 0}
function oq(){var a=nq();lq||a===void 0||(lq=new Worker(jb(a),void 0));return lq}
;var pq=jm("max_body_size_to_compress",5E5),qq=jm("min_body_size_to_compress",500),rq=!0,sq=0,tq=0,uq=jm("compression_performance_threshold_lr",250),vq=jm("slow_compressions_before_abandon_count",4),wq=!1,xq=new Map,yq=1,zq=!0;function Aq(){if(typeof Worker==="function"&&nq()&&!wq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=xq.get(c.key);d&&(Bq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),xq.delete(c.key))}},b=oq();
b&&(b.addEventListener("message",a),b.onerror=function(){xq.clear()},wq=!0)}}
function Cq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:U(),ticks:{},infos:{}};if(rq)try{var g=Dq(b);if(g!=null&&(g>pq||g<qq))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!zq||!S("initial_gzip_use_main_thread"))){wq||Aq();var h=oq();if(h&&!e){xq.set(yq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:yq});yq++;return}}var k=il(Xp(b));Bq(k,f,a,c,d)}}catch(l){Rl(l),d(a,c)}else d(a,c)}
function Bq(a,b,c,d,e){zq=!1;var f=U();b.ticks.gelc=f;tq++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=uq&&(sq++,S("abandon_compression_after_N_slow_zips")?tq===jm("compression_disable_point")&&sq>vq&&(rq=!1):rq=!1);Eq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Fq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(rq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Dq(g);if(h!=null&&(h>pq||h<qq))return a;c=b?{level:1}:void 0;f=il(Xp(g),c);var k=U();e.ticks.gelc=k;if(b){tq++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=uq)if(sq++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=sq/tq;var l=vq/jm("compression_disable_point");tq>0&&tq%jm("compression_disable_point")===0&&b>=l&&(rq=!1)}else rq=!1;Eq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return Rl(m),a}}else return a}
function Dq(a){try{return(new Blob(a.split(""))).size}catch(b){return Rl(b),null}}
function Eq(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||kq("gel_compression",a,{sampleRate:.1})}
;function Gq(a){a=Object.assign({},a);delete a.Authorization;var b=Rh();if(b){var c=new zj;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=Ne(c.digest(),3)}return a}
;var Hq;function Iq(){Hq||(Hq=new Un("yt.innertube"));return Hq}
function Jq(a,b,c,d){if(d)return null;d=Iq().get("nextId",!0)||1;var e=Iq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Gq(c),requestTime:Math.round(U())};Iq().set("nextId",d+1,86400,!0);Iq().set("requests",e,86400,!0);return d}
function Kq(a){var b=Iq().get("requests",!0)||{};delete b[a];Iq().set("requests",b,86400,!0)}
function Lq(a){var b=Iq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(U())-d.requestTime<6E4)){var e=d.authState,f=Gq(Vp(!1));Qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Mq(a,d.method,e,{}));delete b[c]}}Iq().set("requests",b,86400,!0)}}
;function Nq(a){this.Tb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.mb=function(){};
this.now=Date.now;this.Eb=!1;var b;this.vd=(b=a.vd)!=null?b:100;var c;this.qd=(c=a.qd)!=null?c:1;var d;this.nd=(d=a.nd)!=null?d:2592E6;var e;this.md=(e=a.md)!=null?e:12E4;var f;this.pd=(f=a.pd)!=null?f:5E3;var g;this.Y=(g=a.Y)!=null?g:void 0;this.Yb=!!a.Yb;var h;this.Wb=(h=a.Wb)!=null?h:.1;var k;this.hc=(k=a.hc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.mb&&(this.mb=a.mb);a.Eb&&(this.Eb=a.Eb);a.Tb&&(this.Tb=a.Tb);this.Z=a.Z;this.Da=a.Da;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Gc=a.Gc;this.Dc=a.Dc;Oq(this)&&(!this.Z||this.Z("networkless_logging"))&&Pq(this)}
function Pq(a){Oq(a)&&!a.Eb&&(a.h=!0,a.Yb&&Math.random()<=a.Wb&&a.ga.Kd(a.Y),Qq(a),a.fa.wa()&&a.Ob(),a.fa.listen(a.Gc,a.Ob.bind(a)),a.fa.listen(a.Dc,a.Qc.bind(a)))}
p=Nq.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(Oq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.Y).then(function(e){d.id=e;c.fa.wa()&&Rq(c,d)}).catch(function(e){Rq(c,d);
Sq(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(Oq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Z&&this.Z("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.wa()||this.Z&&this.Z("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return z(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.Y).catch(function(l){Sq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.Y).catch(function(g){d.sendFn(a,b,e.skipRetry);
Sq(d,g)})}else this.sendFn(a,b,this.Z&&this.Z("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(Oq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.lb(d.id,c.Y):e=!0;c.fa.cb&&c.Z&&c.Z("vss_network_hint")&&c.fa.cb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.Y).then(function(g){d.id=g;e&&c.ga.lb(d.id,c.Y)}).catch(function(g){Sq(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.Ob=function(){var a=this;if(!Oq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.qa(function(){var b;return z(function(c){if(c.h==1)return c.yield(a.ga.Xc("NEW",a.Y),2);if(c.h!=3)return b=c.i,b?c.yield(Rq(a,b),3):(a.Qc(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.vd))};
p.Qc=function(){this.Da.ra(this.i);this.i=0};
function Rq(a,b){var c;return z(function(d){switch(d.h){case 1:if(!Oq(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.F(2);break}return d.yield(a.ga.le(b.id,a.Y),3);case 3:(c=d.i)||a.mb(Error("The request cannot be found in the database."));case 2:if(Tq(a,b,a.nd)){d.F(4);break}a.mb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.F(5);break}return d.yield(a.ga.lb(b.id,a.Y),5);case 5:return d.return();case 4:b.skipRetry||(b=Uq(a,
b));if(!b){d.F(0);break}if(!b.skipRetry||b.id===void 0){d.F(8);break}return d.yield(a.ga.lb(b.id,a.Y),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Uq(a,b){if(!Oq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return z(function(m){switch(m.h){case 1:g=Vq(f);(h=Wq(f))&&a.Z&&a.Z("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.Z&&a.Z("nwl_consider_error_code")&&g||a.Z&&!a.Z("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.hc)){m.F(2);break}if(!a.fa.kc){m.F(3);break}return m.yield(a.fa.kc(),3);case 3:if(a.fa.wa()){m.F(2);break}c(e,f);if(!a.Z||!a.Z("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.F(6);
break}return m.yield(a.ga.Hc(b.id,a.Y,!1),6);case 6:return m.return();case 2:if(a.Z&&a.Z("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.hc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.F(8);break}return b.sendCount<a.qd?m.yield(a.ga.Hc(b.id,a.Y,!0,h?!1:void 0),12):m.yield(a.ga.lb(b.id,a.Y),8);case 12:a.Da.qa(function(){a.fa.wa()&&a.Ob()},a.pd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return z(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.F(2):h.yield(a.ga.lb(b.id,a.Y),2);a.fa.cb&&a.Z&&a.Z("vss_network_hint")&&a.fa.cb(!0);d(e,f);h.h=0})};
return b}
function Tq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Qq(a){if(!Oq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.Xc("QUEUED",a.Y).then(function(b){b&&!Tq(a,b,a.md)?a.Da.qa(function(){return z(function(c){if(c.h==1)return b.id===void 0?c.F(2):c.yield(a.ga.Hc(b.id,a.Y),2);Qq(a);c.h=0})}):a.fa.wa()&&a.Ob()})}
function Sq(a,b){a.Cd&&!a.fa.wa()?a.Cd(b):a.handleError(b)}
function Oq(a){return!!a.Y||a.Tb}
function Vq(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Wq(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Xq;
function Yq(){if(Xq)return Xq();var a={};Xq=Ep("LogsDatabaseV2",{ub:(a.LogsRequestsStore={Bb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Ko(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Ro(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Xq()}
;function Zq(a){return dp(Yq(),a)}
function $q(a,b){var c,d,e,f;return z(function(g){if(g.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Zq(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Mo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();ar(c);return g.return(f)})}
function br(a,b){var c,d,e,f,g,h,k,l;return z(function(m){if(m.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(Zq(b),2);if(m.h!=3)return d=m.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k="prev",S("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(Jo(d,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(n){return Xo(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=U();ar(c);return m.return(l)})}
function cr(a,b){var c;return z(function(d){if(d.h==1)return d.yield(Zq(b),2);c=d.i;return d.return(Jo(c,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Fo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function dr(a,b,c,d){c=c===void 0?!0:c;var e;return z(function(f){if(f.h==1)return f.yield(Zq(b),2);e=f.i;return f.return(Jo(e,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Fo(h.h.put(k,void 0)).then(function(){return k})):zo.resolve(void 0)})}))})}
function er(a,b){var c;return z(function(d){if(d.h==1)return d.yield(Zq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function fr(a){var b,c;return z(function(d){if(d.h==1)return d.yield(Zq(a),2);b=d.i;c=U()-2592E6;return d.yield(Jo(b,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(e){return To(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Uo(f)})})}),0)})}
function gr(){z(function(a){return a.yield(Ap(),0)})}
function ar(a){S("nwl_csi_killswitch")||kq("networkless_performance",a,{sampleRate:1})}
;var hr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503};var ir={},jr=Ep("ServiceWorkerLogsDatabase",{ub:(ir.SWHealthLog={Bb:1},ir),shared:!0,upgrade:function(a,b){b(1)&&Ro(Ko(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function kr(a){return dp(jr(),a)}
function lr(a){var b,c;z(function(d){if(d.h==1)return d.yield(kr(a),2);b=d.i;c=U()-2592E6;return d.yield(Jo(b,["SWHealthLog"],{mode:"readwrite",la:!0},function(e){return To(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Uo(f)})})}),0)})}
function mr(a){var b;return z(function(c){if(c.h==1)return c.yield(kr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var nr={},or=0;function pr(a){var b=new Image,c=""+or++;nr[c]=b;b.onload=b.onerror=function(){delete nr[c]};
b.src=a}
;var qr;function rr(){qr||(qr=new Un("yt.offline"));return qr}
function sr(a){if(S("offline_error_handling")){var b=rr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);rr().set("errors",b,2592E3,!0)}}
;function tr(){this.h=new Map;this.i=!1}
function ur(){if(!tr.h){var a=E("yt.networkRequestMonitor.instance")||new tr;D("yt.networkRequestMonitor.instance",a);tr.h=a}return tr.h}
tr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
tr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
tr.prototype.removeParams=function(a){return a.split("?")[0]};
tr.prototype.removeParams=tr.prototype.removeParams;tr.prototype.isEndpointCFR=tr.prototype.isEndpointCFR;tr.prototype.requestComplete=tr.prototype.requestComplete;tr.getInstance=ur;function vr(){Bd.call(this);var a=this;this.j=!1;this.i=uj();this.i.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=rr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new T(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Ql(d)}rr().set("errors",{},2592E3,!0)}}})}
x(vr,Bd);function wr(){if(!vr.h){var a=E("yt.networkStatusManager.instance")||new vr;D("yt.networkStatusManager.instance",a);vr.h=a}return vr.h}
p=vr.prototype;p.wa=function(){return this.i.wa()};
p.cb=function(a){this.i.i=a};
p.Xd=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.Pd=function(){this.j=!0};
p.listen=function(a,b){return this.i.listen(a,b)};
p.kc=function(a){a=sj(this.i,a);a.then(function(b){S("use_cfr_monitor")&&ur().requestComplete("generate_204",b)});
return a};
vr.prototype.sendNetworkCheckRequest=vr.prototype.kc;vr.prototype.listen=vr.prototype.listen;vr.prototype.enableErrorFlushing=vr.prototype.Pd;vr.prototype.getWindowStatus=vr.prototype.Xd;vr.prototype.networkStatusHint=vr.prototype.cb;vr.prototype.isNetworkAvailable=vr.prototype.wa;vr.getInstance=wr;function xr(a){a=a===void 0?{}:a;Bd.call(this);var b=this;this.i=this.u=0;this.j=wr();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){yr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){yr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Cd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Cd(b,"publicytnetworkstatus-offline")})))}
x(xr,Bd);xr.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
xr.prototype.cb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
xr.prototype.kc=function(a){var b=this,c;return z(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&ur().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.cb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function yr(a,b){a.rateLimit?a.i?(vj.ra(a.u),a.u=vj.qa(function(){a.o!==b&&(Cd(a,b),a.o=b,a.i=U())},a.rateLimit-(U()-a.i))):(Cd(a,b),a.o=b,a.i=U()):Cd(a,b)}
;var zr;function Ar(){var a=Nq.call;zr||(zr=new xr({Tg:!0,Mg:!0}));a.call(Nq,this,{ga:{Kd:fr,lb:er,Xc:br,le:cr,Hc:dr,set:$q},fa:zr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;Rl(new T(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else Ql(b)},
mb:Rl,sendFn:Br,now:U,Cd:sr,Da:Tn(),Gc:"publicytnetworkstatus-online",Dc:"publicytnetworkstatus-offline",Yb:!0,Wb:.1,hc:jm("potential_esf_error_limit",10),Z:S,Eb:!(ln()&&Cr())});this.j=new gj;S("networkless_immediately_drop_all_requests")&&gr();Bp("LogsDatabaseV2")}
x(Ar,Nq);function Dr(){var a=E("yt.networklessRequestController.instance");a||(a=new Ar,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&qp().then(function(b){a.Y=b;Pq(a);a.j.resolve();a.Yb&&Math.random()<=a.Wb&&a.Y&&lr(a.Y);S("networkless_immediately_drop_sw_health_store")&&Er(a)}));
return a}
Ar.prototype.writeThenSend=function(a,b){b||(b={});b=Fr(a,b);ln()||(this.h=!1);Nq.prototype.writeThenSend.call(this,a,b)};
Ar.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Fr(a,b);ln()||(this.h=!1);Nq.prototype.sendThenWrite.call(this,a,b,c)};
Ar.prototype.sendAndWrite=function(a,b){b||(b={});b=Fr(a,b);ln()||(this.h=!1);Nq.prototype.sendAndWrite.call(this,a,b)};
Ar.prototype.awaitInitialization=function(){return this.j.promise};
function Er(a){var b;z(function(c){if(!a.Y)throw b=vo("clearSWHealthLogsDb"),b;return c.return(mr(a.Y).catch(function(d){a.handleError(d)}))})}
function Br(a,b,c,d){d=d===void 0?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Gr(a,b);if(S("use_request_time_ms_header"))b.headers&&am(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)om(a,void 0,"POST",f,void 0);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)om(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new bb({url:a});if(k.j&&k.i||k.o){var l=mc(nc(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(vc),r=uc(a,0,"ri",n);if(r<0)var t=null;else{var w=a.indexOf("&",r);if(w<0||w>n)w=n;t=decodeURIComponent(a.slice(r+3,w!==-1?w:0).replace(/\+/g," "))}m=t!=="1"}var y=!m;break b}}catch(G){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var A=!0;break b}}catch(G){}A=!1}c=A?!0:!1}else c=
!1;c||pr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Cq(a,b.postBody,b,sm,d)):Cq(a,JSON.stringify(b.postParams),b,rm,d):sm(a,b)}
function Fr(a,b){S("use_event_time_ms_header")&&am(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(U())));return b}
function Gr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){ur().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){ur().requestComplete(a,!0);d(e,f)}}
function Cr(){return oc(document.location.toString())!=="www.youtube-nocookie.com"}
;var Kr=!1,Lr=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Kr};D("ytNetworklessLoggingInitializationOptions",Lr);function Mr(){var a;z(function(b){if(b.h==1)return b.yield(qp(),2);a=b.i;if(!a||!ln()&&!S("nwl_init_require_datasync_id_killswitch")||!Cr())return b.F(0);Kr=!0;Lr.isNwlInitialized=Kr;return b.yield(Dr().awaitInitialization(),0)})}
;function Nr(a){var b=this;this.config_=null;a?this.config_=a:Sp()&&(this.config_=Tp());on(function(){Lq(b)},5E3)}
Nr.prototype.isReady=function(){!this.config_&&Sp()&&(this.config_=Tp());return!!this.config_};
function Mq(a,b,c,d){function e(w){w=w===void 0?!1:w;var y;if(d.retry&&h!="www.youtube-nocookie.com"&&(w||S("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(y=Jq(b,c,l,k)),y)){var A=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(Y,ta){Kq(y);A(Y,ta)};
c.onFetchSuccess=function(Y,ta){Kq(y);G(Y,ta)}}try{if(w&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Dr().writeThenSend(t,g):Dr().sendAndWrite(t,g);
else if(d.compress){var M=!d.networklessOptions.writeThenSend;if(g.postBody){var W=g.postBody;typeof W!=="string"&&(W=JSON.stringify(g.postBody));Cq(t,W,g,sm,M)}else Cq(t,JSON.stringify(g.postParams),g,rm,M)}else S("web_all_payloads_via_jspb")?sm(t,g):rm(t,g)}catch(Y){if(Y.name==="InvalidAccessError")y&&(Kq(y),y=0),Rl(Error("An extension is blocking network request."));else throw Y;}y&&on(function(){Lq(a)},5E3)}
!P("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Rl(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new T("innertube xhrclient not ready",b,c,d);Ql(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(w,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,y){if(d.onError)d.onError(y)},
onFetchError:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ee)&&(h=f);var k=a.config_.he||!1,l=Vp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,n={alt:"json"},r=a.config_.ge&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.innertubeApiKey);var t=$l(""+h+m,n||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Lr.isNwlInitialized:Kr)?op().then(function(w){e(w)}):e(!1)}
;var Or=0,Pr=dd?"webkit":cd?"moz":ad?"ms":$c?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Or});var Qr={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Rr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Qr||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Sr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Rr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Rr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Rr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Mb);var Tr=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Tr);
function Ur(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Lb(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&Qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Vr(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ur(a,b,c,d);if(e)return e;e=++Tr.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Rr(h);if(!Md(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Rr(h);
h.currentTarget=a;return c.call(a,h)};
g=Pl(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Wr()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Mb[e]=[a,b,c,g,d];return e}
function Xr(a){a&&(typeof a=="string"&&(a=[a]),Db(a,function(b){if(b in Mb){var c=Mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Wr()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Mb[b]}}))}
var Wr=Hd(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Yr(a){this.H=a;this.h=null;this.o=0;this.A=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.T=Vr(window,"mousemove",Wa(this.V,this));a=Wa(this.J,this);typeof a==="function"&&(a=Pl(a));this.W=window.setInterval(a,25)}
Za(Yr,H);Yr.prototype.V=function(a){a.h===void 0&&Sr(a);var b=a.h;a.i===void 0&&Sr(a);this.h=new Id(b,a.i)};
Yr.prototype.J=function(){if(this.h){var a=U();if(this.o!=0){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.H();this.u=d}this.o=a;this.A=this.h;this.j=(this.j+1)%4}};
Yr.prototype.ba=function(){window.clearInterval(this.W);Xr(this.T)};var Zr={};
function $r(a){var b=a===void 0?{}:a;a=b.ue===void 0?!1:b.ue;b=b.Qd===void 0?!0:b.Qd;if(E("_lact",window)==null){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&as();Vr(document,"keydown",as);Vr(document,"keyup",as);Vr(document,"mousedown",as);Vr(document,"mouseup",as);a?Vr(window,"touchmove",function(){bs("touchmove",200)},{passive:!0}):(Vr(window,"resize",function(){bs("resize",200)}),b&&Vr(window,"scroll",function(){bs("scroll",200)}));
new Yr(function(){bs("mouse",100)});
Vr(document,"touchstart",as,{passive:!0});Vr(document,"touchend",as,{passive:!0})}}
function bs(a,b){Zr[a]||(Zr[a]=!0,vj.qa(function(){as();Zr[a]=!1},b))}
function as(){E("_lact",window)==null&&$r();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function cs(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var ds=C.ytPubsubPubsubInstance||new L,es=C.ytPubsubPubsubSubscribedKeys||{},gs=C.ytPubsubPubsubTopicToKeys||{},hs=C.ytPubsubPubsubIsSynchronous||{};function is(a,b){var c=js();if(c&&b){var d=c.subscribe(a,function(){function e(){es[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{hs[a]?e():gm(e,0)}catch(g){Ql(g)}},void 0);
es[d]=!0;gs[a]||(gs[a]=[]);gs[a].push(d);return d}return 0}
function ks(a){var b=js();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Db(a,function(c){b.unsubscribeByKey(c);delete es[c]}))}
function ls(a,b){var c=js();c&&c.publish.apply(c,arguments)}
function ms(a){var b=js();if(b)if(b.clear(a),a)ns(a);else for(var c in gs)ns(c)}
function js(){return C.ytPubsubPubsubInstance}
function ns(a){gs[a]&&(a=gs[a],Db(a,function(b){es[b]&&delete es[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Pb;L.prototype.publish=L.prototype.ib;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",ds);D("ytPubsubPubsubTopicToKeys",gs);D("ytPubsubPubsubIsSynchronous",hs);D("ytPubsubPubsubSubscribedKeys",es);var ps=Symbol("injectionDeps");function qs(a){this.name=a}
qs.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function rs(a){this.key=a}
function ss(){this.i=new Map;this.j=new Map;this.h=new Map}
function ts(a,b){a.i.set(b.jc,b);var c=a.j.get(b.jc);if(c)try{c.bh(a.resolve(b.jc))}catch(d){c.Zg(d)}}
ss.prototype.resolve=function(a){return a instanceof rs?us(this,a.key,[],!0):us(this,a,[])};
function us(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.yd!==void 0)var e=d.yd;else if(d.cf)e=d[ps]?vs(a,d[ps],c):[],e=d.cf.apply(d,ja(e));else if(d.xd){e=d.xd;var f=e[ps]?vs(a,e[ps],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.fh||a.h.set(b,e);return e}
function vs(a,b,c){return b?b.map(function(d){return d instanceof rs?us(a,d.key,c,!0):us(a,d,c)}):[]}
;var ws;function xs(){ws||(ws=new ss);return ws}
;var ys=window;function zs(){var a,b;return"h5vcc"in ys&&((a=ys.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=ys.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in ys&&ys.performance.mark&&ys.performance.measure?2:0}
function As(a){var b=zs();switch(b){case 1:ys.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:ys.performance.mark(a+"-start");break;case 0:break;default:Xb(b,"unknown trace type")}}
function Bs(a){var b=zs();switch(b){case 1:ys.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";ys.performance.mark(c);ys.performance.measure(a,b,c);break;case 0:break;default:Xb(b,"unknown trace type")}}
;var Cs=S("web_enable_lifecycle_monitoring")&&zs()!==0,Ds=S("web_enable_lifecycle_monitoring");function Es(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?Tn():d;this.j=c;this.scheduler=d;this.i=new gj;this.h=a;for(a={Za:0};a.Za<this.h.length;a={fc:void 0,Za:a.Za},a.Za++)a.fc=this.h[a.Za],c=function(e){return function(){e.fc.wc();b.h[e.Za].ic=!0;b.h.every(function(f){return f.ic===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.fc),d=this.scheduler.Xa(c,d),this.h[a.Za]=Object.assign({},a.fc,{wc:c,
jobId:d})}
function Fs(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.ic||(a.scheduler.ra(c.jobId),a.scheduler.Xa(c.wc,10))}
Es.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.ic||this.scheduler.ra(b.jobId),b.ic=!0;this.i.resolve()};
Es.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Gs(a){this.state=a;this.plugins=[];this.o=void 0;this.A={};Cs&&As(this.state)}
p=Gs.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;Cs&&Bs(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Fs(this.j),this.j=void 0);Hs(this,a,b);this.state=a;Cs&&As(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Is(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Is(a,b){var c=b.filter(function(e){return Js(a,e)===10}),d=b.filter(function(e){return Js(a,e)!==10});
return a.A.eh?function(){var e=B.apply(0,arguments);return z(function(f){if(f.h==1)return f.yield(a.Be.apply(a,[c].concat(ja(e))),2);a.sd.apply(a,[d].concat(ja(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Ce.apply(a,[c].concat(ja(e)));a.sd.apply(a,[d].concat(ja(e)))}}
p.Ce=function(a){for(var b=B.apply(1,arguments),c=Tn(),d=v(a),e=d.next(),f={};!e.done;f={Gb:void 0},e=d.next())f.Gb=e.value,c.zb(function(g){return function(){Ks(g.Gb.name);g.Gb.callback.apply(g.Gb,ja(b));Ls(g.Gb.name)}}(f))};
p.Be=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return z(function(h){h.h==1&&(c=Tn(),d=v(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.F(0);f.qb=e.value;f.Rb=void 0;g=function(k){return function(){Ks(k.qb.name);var l=k.qb.callback.apply(k.qb,ja(b));typeof(l==null?void 0:l.then)==="function"?k.Rb=l.then(function(){Ls(k.qb.name)}):Ls(k.qb.name)}}(f);
c.zb(g);return f.Rb?h.yield(f.Rb,3):h.F(3)}f={qb:void 0,Rb:void 0};e=d.next();return h.F(2)})};
p.sd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{wc:function(){Ks(e.name);e.callback.apply(e,ja(b));Ls(e.name)},
priority:Js(c,e)}});
d.length&&(this.j=new Es(d))};
function Js(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Ks(a){Cs&&a&&As(a)}
function Ls(a){Cs&&a&&Bs(a)}
function Hs(a,b,c){Ds&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Gs.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Ms(a){Gs.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.D},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Ns;x(Ms,Gs);Ms.prototype.i=function(a,b){var c=this;this.h=on(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
Ms.prototype.D=function(a,b){this.h&&(vj.ra(this.h),this.h=null);a(b==null?void 0:b.event)};
function Os(){Ns||(Ns=new Ms);return Ns}
;var Ps=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return Ps});function Qs(){this.store={};this.h={}}
Qs.prototype.storePayload=function(a,b){a=Rs(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Qs.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Ss(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ja(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ja(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ja(this.smartExtractMatchingEntries(a))));return c};
Qs.prototype.extractMatchingEntries=function(a){a=Ss(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
Qs.prototype.getSequenceCount=function(a){a=Ss(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Ss(a,b){var c=Rs(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&Rs(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Ts(b.auth,g[0])){var h=b.isJspb;Ts(h===void 0?"undefined":h?"true":"false",g[1])&&Ts(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Ts(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Ts(a,b){return a===void 0||a==="undefined"?!0:a===b}
Qs.prototype.getSequenceCount=Qs.prototype.getSequenceCount;Qs.prototype.extractMatchingEntries=Qs.prototype.extractMatchingEntries;Qs.prototype.smartExtractMatchingEntries=Qs.prototype.smartExtractMatchingEntries;Qs.prototype.storePayload=Qs.prototype.storePayload;function Rs(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function Us(a,b){if(a)return a[b.name]}
;var Vs=jm("initial_gel_batch_timeout",2E3),Ws=jm("gel_queue_timeout_max_ms",6E4),Xs=Math.pow(2,16)-1,Ys=jm("gel_min_batch_size",5),Zs=void 0;function $s(){this.o=this.h=this.i=0;this.j=!1}
var at=new $s,bt=new $s,ct=new $s,dt=new $s,et,ft=!0,gt=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",gt);var ht={};function jt(){var a=E("yt.logging.ims");a||(a=new Qs,D("yt.logging.ims",a));return a}
function kt(a,b){if(a.endpoint==="log_event"){lt();var c=mt(a),d=nt(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=hr[d||""];var f,g,h,k=xs().resolve(new rs(Np))==null?void 0:(f=Op())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;k=ot(e.tier);if(k===400){pt(a,b);return}}ht[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};jt().storePayload(e,a.payload);qt(b,c,e,d==="gelDebuggingEvent")}}
function qt(a,b,c,d){function e(){rt({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(Zs=new a);a=jm("tvhtml5_logging_max_batch_ads_fork")||jm("tvhtml5_logging_max_batch")||jm("web_logging_max_batch")||100;var g=U(),h=st(f,c.tier),k=h.o;d&&(h.j=!0);d=0;c&&(d=jt().getSequenceCount(c));d>=1E3?e():d>=a?et||(et=tt(function(){e();et=void 0},0)):g-k>=10&&(ut(f,c.tier),h.o=g)}
function pt(a,b){if(a.endpoint==="log_event"){lt();var c=mt(a),d=new Map;d.set(c,[a.payload]);var e=nt(a.payload)||"";b&&(Zs=new b);return new Zd(function(f,g){Zs&&Zs.isReady()?vt(d,Zs,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function mt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);gt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function rt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new Zd(function(e,f){var g=st(c,d),h=g.j;g.j=!1;wt(g.i);wt(g.h);g.h=0;Zs&&Zs.isReady()?d===void 0&&S("enable_web_tiered_gel")?xt(e,f,a,b,c,300,h):xt(e,f,a,b,c,d,h):(ut(c,d),e())})}
function xt(a,b,c,d,e,f,g){var h=Zs;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=S("enable_web_tiered_gel")?jt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):jt().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(ht)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?jt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):jt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete ht[l];vt(k,h,a,b,c,!1,g)}
function ut(a,b){function c(){rt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=st(a,b),e=d===dt||d===ct?5E3:Ws;S("web_gel_timeout_cap")&&!d.h&&(e=tt(function(){c()},e),d.h=e);
wt(d.i);e=P("LOGGING_BATCH_TIMEOUT",jm("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&ft&&(e=Vs);e=tt(function(){jm("gel_min_batch_size")>0?jt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Ys&&c():c()},e);
d.i=e}
function vt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(U()),k=a.size,l=(g===void 0?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var m=a.next();for(g={};!m.done;g={Cc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Fc:void 0,Ec:void 0},m=a.next()){var n=v(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Sb({context:Up(b.config_||Tp())});if(!Pa(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=gt[m])&&
zt(g.batchRequest,m,n);delete gt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";At(g.batchRequest,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.Fc=function(r){S("start_client_gcf")&&vj.qa(function(){return z(function(t){return t.yield(Bt(r),0)})});
k--;k||c()};
g.Cc=0;g.Ec=function(r){return function(){r.Cc++;if(e.bypassNetworkless&&r.Cc===1)try{Mq(b,l,r.batchRequest,Ct({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Fc,r.Ec,f)),ft=!1}catch(t){Ql(t),d()}k--;k||c()}}(g);
try{Mq(b,l,g.batchRequest,Ct(e,g.dangerousLogToVisitorSession,g.Fc,g.Ec,f)),ft=!1}catch(r){Ql(r),d()}}}
function Ct(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Ig:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};Dt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function At(a,b,c){Dt()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Xs/2)),c++,c>Xs&&(c=1),Ll("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function zt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function lt(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=im("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(Ps=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",Ps),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Dt(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function tt(a,b){return S("transport_use_scheduler")===!1?gm(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?on(function(){if(Os().currentState==="none")a();else{var c={};Os().install((c.none={callback:a},c))}},b):on(a,b)}
function wt(a){S("transport_use_scheduler")?vj.ra(a):window.clearTimeout(a)}
function Bt(a){var b,c,d,e,f,g,h,k,l,m;return z(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=Us(d,nl),g=(f=d)==null?void 0:f.hotHashData,h=Us(d,ml),l=(k=d)==null?void 0:k.coldHashData,(m=xs().resolve(new rs(Np)))?g?e?n.yield(Pp(m,g,e),2):n.yield(Pp(m,g),2):n.F(2):n.return()):l?h?n.yield(Qp(m,l,h),0):n.yield(Qp(m,l),0):n.F(0)})}
function st(a,b){b=b===void 0?200:b;return a?b===300?dt:bt:b===300?ct:at}
function nt(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,hr[b])return b}
function ot(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Et=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Et);
function Ft(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=cs();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Et[b]=b in Et?Et[b]+1:0,a.sequence={index:Et[b],groupKey:b},d.endOfSequence&&delete Et[d.sequenceGroup]);(d.sendIsolatedPayload?pt:kt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function co(a,b,c){c=c===void 0?{}:c;var d=Nr;P("ytLoggingEventsDefaultDisabled",!1)&&Nr===Nr&&(d=null);Ft(a,b,d,c)}
;var Gt=new Set,Ht=0,It=0,Jt=0,Kt=[],Lt=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function bo(a){Mt(a)}
function Nt(a){Mt(a,"WARNING")}
function Ot(a){a instanceof Error?Mt(a):(a=Qa(a)?JSON.stringify(a):String(a),a=new T(a),a.name="RejectedPromiseError",Nt(a))}
function Mt(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(Ht>=5))){d=Kt;var k=fc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=Lm(a.args[r],"params."+r,c,n),
n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var w="params."+r,y=Nm(t[r]);c[w]=y;n+=w.length+y.length;if(n>500)break}}else c.params=Nm(t)}if(d.length)for(r=0;r<d.length&&!(n=Lm(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Hm();c=v(a.Ua);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.Ug)){a=d.weight;break a}a=v(a.Sa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=v(Cm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ec[r.name])for(e=v(c.ec[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.Ac(f);break}r.params||(r.params={});a=Hm();r.params["params.errorServiceSignature"]="msg="+a.Ua.length+"&cb="+a.Sa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));hb("sample").constructor!==fb&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(r);
if(r.sampleWeight!==0&&!Gt.has(r.message)){if(g&&S("web_enable_error_204"))Pt(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Im.ib("handleError",r),S("record_app_crashed_web")&&Jt===0&&r.sampleWeight===1&&(Jt++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),co("appCrashed",g)),It++):b==="WARNING"&&Im.ib("handleWarning",r);if(S("kevlar_gel_error_routing")){g=b;h=h===
void 0?{}:h;b:{a=v(Lt);for(c=a.next();!c.done;c=a.next())if(jo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,
sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Ml("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=v(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(co("clientError",h),(g==="ERROR"||S("errors_flush_gel_always_killswitch"))&&rt(void 0,void 0,!1))}S("suppress_error_204_logging")||Pt(b,r)}try{Gt.add(r.message)}catch(A){}Ht++}}}
function Pt(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}sm(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Qt(){this.register=new Map}
function Rt(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Yg("ABORTED")}
Qt.prototype.clear=function(){Rt(this);this.register.clear()};
var St=new Qt;var Tt=Date.now().toString();
function Ut(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(Tt)for(a=1,b=0;b<Tt.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Tt.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Vt,Wt=C.ytLoggingDocDocumentNonce_;Wt||(Wt=Ut(),D("ytLoggingDocDocumentNonce_",Wt));Vt=Wt;function Xt(a){this.h=a}
p=Xt.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new ul;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&Mg(a,2,cg(this.h.veType)),this.h.veCounter!==void 0&&Mg(a,6,cg(this.h.veCounter)),this.h.elementIndex!==void 0&&Mg(a,3,cg(this.h.elementIndex)),this.h.isCounterfactual&&Mg(a,5,Zf(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();ah(a,ul,7,b)}this.h.youtubeData!==void 0&&ah(a,ol,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function Yt(a){return P("client-screen-nonce-store",{})[a===void 0?0:a]}
function Zt(a,b){b=b===void 0?0:b;var c=P("client-screen-nonce-store");c||(c={},Ll("client-screen-nonce-store",c));c[b]=a}
function $t(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function au(a){return P($t(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",au);function bu(){var a=P("csn-to-ctt-auth-info");a||(a={},Ll("csn-to-ctt-auth-info",a));return a}
function cu(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function du(a){a=Yt(a===void 0?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",du);function eu(a,b,c){var d=bu();(c=du(c))&&delete d[c];b&&(d[a]=b)}
function fu(a){return bu()[a]}
D("yt_logging_screen.getCttAuthInfo",fu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Yt(c)||b!==P($t(c)))if(eu(a,d,c),Zt(a,c),Ll($t(c),b),b=function(){setTimeout(function(){a&&co("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Vt,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function gu(){var a=Rb(hu),b;return(new Zd(function(c,d){a.onSuccess=function(e){fm(e)?c(new iu(e)):d(new ju("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new ju("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new ju("Request timed out","net.timeout",e))};
b=sm("//googleads.g.doubleclick.net/pagead/id",a)})).lc(function(c){if(c instanceof fe){var d;
(d=b)==null||d.abort()}return de(c)})}
function ju(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
x(ju,ab);function iu(a){this.xhr=a}
;function ku(){this.h=0;this.i=null}
ku.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:lu(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:mu(a):this};
ku.prototype.getValue=function(){return this.i};
ku.prototype.isRejected=function(){return this.h==2};
ku.prototype.$goog_Thenable=!0;function mu(a){var b=new ku;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function lu(a){var b=new ku;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function nu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:am(a)?"same-origin":"cors",credentials:am(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function ou(){return Ph()||(Ie||Je)&&jo("applewebkit")&&!jo("version")&&(!jo("safari")||jo("gsa/"))||ed&&jo("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function pu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in sl)if(sl[d]==c.embeddedPlayerMode){b=sl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function qu(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ru;this.isTimeout=a instanceof ju&&a.errorCode=="net.timeout";this.isCanceled=a instanceof fe}
x(qu,ab);qu.prototype.name="BiscottiError";function ru(){ab.call(this,"Biscotti ID is missing from server")}
x(ru,ab);ru.prototype.name="BiscottiMissingError";var hu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},su=null;function tu(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!ou())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if(Pb(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(pu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function El(){var a=tu();if(a!==void 0)return de(a);su||(su=gu().then(uu).lc(function(b){return vu(2,b)}));
return su}
function uu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new ru;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new ru;a=a.id;Fl(a);su=lu(a);wu(18E5,2);return a}
function vu(a,b){b=new qu(b);Fl("");su=mu(b);a>0&&wu(12E4,a-1);throw b;}
function wu(a,b){gm(function(){gu().then(uu,function(c){return vu(b,c)}).lc(Gd)},a)}
function xu(){try{var a=E("yt.ads.biscotti.getId_");return a?a():El()}catch(b){return de(b)}}
;var Bb=ha(["data-"]);function yu(a){a&&(a.dataset?a.dataset[zu()]="true":Wb(a))}
function Au(a){return a?a.dataset?a.dataset[zu()]:a.getAttribute("data-loaded"):null}
var Bu={};function zu(){return Bu.loaded||(Bu.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Cu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Rb(b);this.assets=a.assets||{};this.attrs=a.attrs||Rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Cu.prototype.clone=function(){var a=new Cu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Oa(c)=="object"?a[b]=Rb(c):a[b]=c}return a};var Du=["share/get_share_panel"],Eu=["share/get_web_player_share_panel"],Fu=["feedback"],Gu=["notification/modify_channel_preference"],Hu=["browse/edit_playlist"],Iu=["subscription/subscribe"],Ju=["subscription/unsubscribe"];var Ku=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Ku);function Lu(a){Gl(Ku,arguments)}
;function Mu(a,b,c){Nu(a,b,c===void 0?null:c)}
function Ou(a){a=Pu(a);var b=document.getElementById(a);b&&(ms(a),b.parentNode.removeChild(b))}
function Qu(a,b){a&&b&&(a=""+Ra(b),(a=Ru[a])&&ks(a))}
function Nu(a,b,c){c=c===void 0?null:c;var d=Pu(a),e=document.getElementById(d),f=e&&Au(e),g=e&&!f;f?b&&b():(b&&(f=is(d,b),b=""+Ra(b),Ru[b]=f),g||(e=Su(a,d,function(){Au(e)||(yu(e),ls(d),gm(function(){ms(d)},0))},c)))}
function Su(a,b,c,d){d=d===void 0?null:d;var e=Ld("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);dc(e,kl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Pu(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var Ru={};function Tu(a){var b=Uu(a),c=document.getElementById(b),d=c&&Au(c);d||c&&!d||(c=Vu(a,b,function(){if(!Au(c)){yu(c);ls(b);var e=Xa(ms,b);gm(e,0)}}))}
function Vu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=kl(a);Zb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Uu(a){var b=Ld("A");zb(b,new sb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function Wu(a){var b=B.apply(1,arguments);if(!Xu(a)||b.some(function(d){return!Xu(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Yu(a,c.value)}
function Yu(a,b){for(var c in b)if(Xu(b[c])){if(c in a&&!Xu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Yu(a[c],b[c])}else if(Zu(b[c])){if(c in a&&!Zu(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);$u(a[c],b[c])}else a[c]=b[c];return a}
function $u(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Xu(c)?a.push(Yu({},c)):Zu(c)?a.push($u([],c)):a.push(c);return a}
function Xu(a){return typeof a==="object"&&!Array.isArray(a)}
function Zu(a){return typeof a==="object"&&Array.isArray(a)}
;var av="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function bv(a,b){var c=c===void 0?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=oc(window.location.href);e&&d.push(e);e=oc(a);if(Cb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),zb(d,a),a=d.href)if(a=pc(a),a=qc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:du()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&cv(a,b,f)}else cv(a,b)}
function cv(a,b,c){a=dv(a);b=b?sc(b):"";c=c||5;ou()&&Um(a,b,c)}
function dv(a){for(var b=v(av),c=b.next();!c.done;c=b.next())a=xc(a,c.value);return"ST-"+kc(a).toString(36)}
;function ev(a){Yp.call(this,1,arguments);this.csn=a}
x(ev,Yp);var gq=new Zp("screen-created",ev),fv=[],gv=0,hv=new Map,iv=new Map,jv=new Map;
function kv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=lv({cttAuthInfo:fu(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Nb(k)||!k.trackingParams&&!k.veType)&&Nt(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=mv(h,b);if(k.veType&&!iv.has(l)&&!jv.has(l)&&!e){if(!S("il_attach_cache_limit")||hv.size<1E3){hv.set(l,[a,b,c,h]);return}S("il_attach_cache_limit")&&hv.size>1E3&&Nt(new T("IL Attach cache exceeded limit"))}h=mv(c,b);hv.has(h)?
nv(c,b):jv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Fb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?ov("visualElementAttached",f,c):a?Ft("visualElementAttached",c,a,f):co("visualElementAttached",c,f)}
function ov(a,b,c){fv.push({te:a,payload:c,Qg:void 0,options:b});gv||(gv=hq())}
function iq(a){if(fv){for(var b=v(fv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,co(c.te,c.payload,c.options));fv.length=0}gv=0}
function mv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function nv(a,b){a=mv(a,b);hv.has(a)&&(b=hv.get(a)||[],kv(b[0],b[1],b[2],[b[3]],!0),hv.delete(a))}
function lv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function pv(){try{return!!self.localStorage}catch(a){return!1}}
;function qv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function rv(a){if(pv()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=qv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function sv(){if(!pv())return!1;var a=mn(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=qv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function tv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(P("INNERTUBE_CLIENT_NAME")==="WEB"||P("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function uv(a){if(P("LOGGED_IN",!0)&&tv()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=oc(window.location.href);c&&b.push(c);c=oc(a);Cb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=pc(a),(b=qc(b))?(b=dv(b),b=(b=Vm(b)||null)?Yl(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;tv()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&bv(a,b)}}
;function vv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&bv(a,b);if(c)return!1;uv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=tc(a,e);uv(a);f=a+f;var h=h===void 0?wb:h;a:if(h=h===void 0?wb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ub&&b.je(f)){h=new sb(f);break a}h=void 0}g=g.location;h=yb(h||tb);h!==void 0&&(g.href=h);return!0}
;function wv(a){if(Pb(P("PLAYER_VARS",{}))!="1"){a&&Dl();try{xu().then(function(){},function(){}),gm(wv,18E5)}catch(b){Ql(b)}}}
;var xv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function yv(){var a=a===void 0?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=Zl(a).theme;return xv.get(b)||null}catch(c){}return null}
;function zv(){this.h={};if(this.i=Xm()){var a=Vm("CONSISTENCY");a&&Av(this,{encryptedTokenJarContents:a})}}
zv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Pa.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Av(this,a)}};
function Av(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&Um("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Bv=window.location.hostname.split(".").slice(-2).join(".");function Cv(){this.j=-1;var a=P("LOCATION_PLAYABILITY_TOKEN");P("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=Dv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Ev;function Fv(){Ev=E("yt.clientLocationService.instance");Ev||(Ev=new Cv,D("yt.clientLocationService.instance",Ev));return Ev}
p=Cv.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,P("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=Dv(this))&&this.h.set("yt-location-playability-token",a,15552E3):Um("YT_CL",JSON.stringify({loctok:a}),15552E3,Bv,!0))};
function Dv(a){return a.h===void 0?new Un("yt-client-location"):a.h}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=Dv(this))&&this.h.remove("yt-location-playability-token"):Wm("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;P("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function Gv(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function Hv(){this.h={}}
Hv.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
Hv.prototype.get=function(a){if(this.contains(a))return this.h[a]};
Hv.prototype.set=function(a,b){this.h[a]=b};
Hv.prototype.remove=function(a){delete this.h[a]};function Iv(){this.mappings=new Hv}
Iv.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
Iv.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Xb(b)}}return a};
new Iv;function Jv(a){return function(){return new a}}
;var Kv={},Lv=(Kv.WEB_UNPLUGGED="^unplugged/",Kv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Kv.WEB_UNPLUGGED_OPS="^unplugged/",Kv.WEB_UNPLUGGED_PUBLIC="^unplugged/",Kv.WEB_CREATOR="^creator/",Kv.WEB_KIDS="^kids/",Kv.WEB_EXPERIMENTS="^experiments/",Kv.WEB_MUSIC="^music/",Kv.WEB_REMIX="^music/",Kv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Kv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Kv);
function Mv(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=Lv[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(Lv).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function Nv(){}
Nv.prototype.D=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?Tm:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=Sb(g);S("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;an();var l="USER_INTERFACE_THEME_LIGHT";dn(165)?l="USER_INTERFACE_THEME_DARK":dn(174)?l="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:yv()||l;h.userInterfaceTheme=k;if(!f){if(k=jn())h.connectionType=k;S("web_log_effective_connection_type")&&(k=kn())&&(g.client.effectiveConnectionType=k)}var m;if(S("web_log_memory_total_kbytes")&&((m=C.navigator)==null?0:m.deviceMemory)){var n;m=(n=C.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}S("web_gcf_hashes_innertube")&&(k=Rp())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=Zl(C.location.href);!S("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&Om.h&&(n=Om.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Pm(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!S("web_lr_app_quality_killswitch")&&(n=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!S("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ua){}r=
void 0}r&&(h.timeZone=r)}(r=P("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=km();zv.h||(zv.h=new zv);h=zv.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:n});!S("web_prequest_context_killswitch")&&(t=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=an();t=dn(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=
!0);S("warm_op_csn_cleanup")?e&&(f=du())&&(g.clientScreenNonce=f):!f&&(f=du())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Fv().setLocationOnInnerTubeContext(g);try{var w=bm(),y=w.bid;delete w.bid;g.adSignalsInfo={params:[],bid:y};var A=v(Object.entries(w));for(var G=A.next();!G.done;G=A.next()){var M=v(G.value),W=M.next().value,Y=M.next().value;w=W;y=Y;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:w,value:""+
y})}var ta;if(((ta=g.client)==null?void 0:ta.clientName)==="TVHTML5"){var lb=P("INNERTUBE_CONTEXT");lb.adSignalsInfo&&(g.adSignalsInfo.advertisingId=lb.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=lb.adSignalsInfo.limitAdTracking)}}catch(ua){Mt(ua)}A=g}else Mt(Error("Error: No InnerTubeContext shell provided in ytconfig.")),A={};A={context:A};if(G=this.i(a)){this.h(A,G,b);var R;b="/youtubei/v1/"+Mv(this.j());
(G=(R=Us(a.commandMetadata,ql))==null?void 0:R.apiUrl)&&(b=G);R=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&(R=String(b)+String(pc(R)));b={};S("web_api_key_killswitch")&&(b.key=P("INNERTUBE_API_KEY"));S("json_condensed_response")&&(b.prettyPrint="false");R=$l(R,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:R,fb:nu(R),Pa:A,config:a};a.config.Sb?a.config.Sb.identity=c:a.config.Sb={identity:c};return a}Mt(new T("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Nv.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function Ov(){}
x(Ov,Nv);function Pv(){}
x(Pv,Ov);Pv.prototype.D=function(){return{input:"/getDatasyncIdsEndpoint",fb:nu("/getDatasyncIdsEndpoint","GET"),Pa:{}}};
Pv.prototype.j=function(){return[]};
Pv.prototype.i=function(){};
Pv.prototype.h=function(){};var Qv={},Rv=(Qv.GET_DATASYNC_IDS=Jv(Pv),Qv);function Sv(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Tv(){var a=Sv();a.info||(a.info={});return a.info}
function Uv(a){a=Sv(a);a.metadata||(a.metadata={});return a.metadata}
function Vv(a){a=Sv(a);a.tick||(a.tick={});return a.tick}
function Wv(a){a=Sv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Xv(a){a=Wv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Yv(a){var b=Sv(a).nonce;b||(b=Ut(),Sv(a).nonce=b);return b}
;function Zv(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function $v(a){a=a||"";var b=E("ytcsi.reference");b||(Zv(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Zv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var V={},aw=(V.auto_search="LATENCY_ACTION_AUTO_SEARCH",V.ad_to_ad="LATENCY_ACTION_AD_TO_AD",V.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",V["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",V.app_startup="LATENCY_ACTION_APP_STARTUP",V["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",V["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",V["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",V["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
V["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",V["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",V["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",V["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",V["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",V["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",V["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",V["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",V["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",V["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",V["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",V["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",V["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",V["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",V["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
V["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",V["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",V["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",V.browse="LATENCY_ACTION_BROWSE",V.cast_splash="LATENCY_ACTION_CAST_SPLASH",V.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",V.channels="LATENCY_ACTION_CHANNELS",V.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",V["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
V["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",V["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",V["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",V["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",V["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",V["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",V["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",V["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",
V["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",V["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",V["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",V["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",V.chips="LATENCY_ACTION_CHIPS",V.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",V["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",V["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",
V["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",V.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",V.embed="LATENCY_ACTION_EMBED",V.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",V.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",V.explore="LATENCY_ACTION_EXPLORE",V.favorites="LATENCY_ACTION_FAVORITES",V.home="LATENCY_ACTION_HOME",V.inboarding="LATENCY_ACTION_INBOARDING",V.library="LATENCY_ACTION_LIBRARY",V.live="LATENCY_ACTION_LIVE",
V.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",V.mini_app="LATENCY_ACTION_MINI_APP_PLAY",V.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",V.onboarding="LATENCY_ACTION_ONBOARDING",V.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",V["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",V["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",V["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",V["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",V["owner.asset_groups"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",V["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",V["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",V["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",V["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",V["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",V["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",V["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",V["owner.delivery"]=
"LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",V["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",V["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",V["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",V["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",V["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",V["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",V["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",V["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",
V.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",V.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",V.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",V.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",V["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",V["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",V["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",V.prebuffer="LATENCY_ACTION_PREBUFFER",V.prefetch="LATENCY_ACTION_PREFETCH",
V.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",V.profile_switcher="LATENCY_ACTION_LOGIN",V.reel_watch="LATENCY_ACTION_REEL_WATCH",V.results="LATENCY_ACTION_RESULTS",V["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",V.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",V.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",V.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",V.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",V.search_ui="LATENCY_ACTION_SEARCH_UI",V.search_suggest=
"LATENCY_ACTION_SUGGEST",V.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",V.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",V.seek="LATENCY_ACTION_PLAYER_SEEK",V.settings="LATENCY_ACTION_SETTINGS",V.store="LATENCY_ACTION_STORE",V.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",V.tenx="LATENCY_ACTION_TENX",V.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",V.watch="LATENCY_ACTION_WATCH",V.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",V["watch,watch7"]="LATENCY_ACTION_WATCH",V["watch,watch7_html5"]=
"LATENCY_ACTION_WATCH",V["watch,watch7ad"]="LATENCY_ACTION_WATCH",V["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",V.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",V.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",V["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",V["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",V["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",V["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",V["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",V["video.editor"]=
"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",V["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",V["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",V["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",V["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",V["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",V["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",V["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",
V.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",V.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",V.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",V.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",V.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",V);function bw(a,b){Yp.call(this,1,arguments);this.timer=b}
x(bw,Yp);var cw=new Zp("aft-recorded",bw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var dw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",dw);function ew(){this.h=0}
function fw(){ew.h||(ew.h=new ew);return ew.h}
ew.prototype.tick=function(a,b,c,d){gw(this,"tick_"+a+"_"+b)||co("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
ew.prototype.info=function(a,b,c){var d=Object.keys(a).join("");gw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,co("latencyActionInfo",a,{cttAuthInfo:c}))};
ew.prototype.jspbInfo=function(){};
ew.prototype.span=function(a,b,c){var d=Object.keys(a).join("");gw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,co("latencyActionSpan",a,{cttAuthInfo:c}))};
function gw(a,b){dw[b]=dw[b]||{count:0};var c=dw[b];c.count++;c.time=U();a.h||(a.h=on(function(){var d=U(),e;for(e in dw)dw[e]&&d-dw[e].time>6E4&&delete dw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new T("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||Nt(c)),!0):!1}
;var hw=window;function iw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function jw(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=X==null?void 0:(a=X.getEntriesByType)==null?void 0:(b=a.call(X,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=kw(e.requestStart),e.responseEnd=kw(e.responseEnd),e.redirectStart=kw(e.redirectStart),e.redirectEnd=kw(e.redirectEnd),e.domainLookupEnd=kw(e.domainLookupEnd),e.connectStart=kw(e.connectStart),e.connectEnd=
kw(e.connectEnd),e.responseStart=kw(e.responseStart),e.secureConnectionStart=kw(e.secureConnectionStart),e.domainLookupStart=kw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=X.timing}else a=S("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(X.timing)):X.timing;return a}
function kw(a){return Math.round(lw()+a)}
function lw(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&X.timeOrigin?Math.floor(X.timeOrigin):X.timing.navigationStart}
var X=hw.performance||hw.mozPerformance||hw.msPerformance||hw.webkitPerformance||new iw;var mw=!1,nw=!1,ow={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Wa(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||Gd,X);function pw(a,b){if(!S("web_csi_action_sampling_enabled")||!Sv(b).actionDisabled){var c=$v(b||"");Wu(c.info,a);a.loadType&&(c=a.loadType,Uv(b).loadType=c);Wu(Xv(b),a);c=Yv(b);b=Sv(b).cttAuthInfo;fw().info(a,c,b)}}
function qw(){var a,b,c,d;return((d=xs().resolve(new rs(Np))==null?void 0:(a=Op())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!S("web_csi_action_sampling_enabled")||!Sv(c).actionDisabled){var d=Yv(c),e;if(e=S("web_csi_debug_sample_enabled")&&d){(xs().resolve(new rs(Np))==null?0:Op())&&!nw&&(nw=!0,Z("gcfl",U(),c));var f,g,h;e=(xs().resolve(new rs(Np))==null?void 0:(f=Op())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=qw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=f%1E5%e!==0;Sv(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,pw(f,c));Sv(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,X.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||S("web_csi_disable_alt_time_performance_mark"))X.mark(e);else{f=S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?f-X.timeOrigin:f-(X.timeOrigin||X.timing.navigationStart);try{X.mark(e,
{startTime:f})}catch(k){}}e=$v(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Wv(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Vv(c);e=b||U();S("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=Sv(c).cttAuthInfo;a==="_start"?(a=fw(),gw(a,"baseline_"+d)||co("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):fw().tick(a,d,b,f);rw(c);return e}}}
function sw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Pr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function tw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(P("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function uw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);$b(window)&&a.setAttribute("nonce",$b(window));return c?(a=X.getEntriesByName(c))&&a[0]&&(a=a[0],c=lw(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function vw(){var a=window.location.protocol,b=X.getEntriesByType("resource");b=Eb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",kw(b.startTime)),Z("wffe",kw(b.responseEnd)))}
function ww(a){var b=xw("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=xw(b[d],a);if(e)return e}return NaN}
function xw(a,b){if(a=Vv(b)[a])return typeof a==="number"?a:a[a.length-1]}
function rw(a){var b=xw("_start",a),c=ww(a),d=S("enable_cow_info_csi")||!mw;b&&c&&d&&(dq(cw,new bw(Math.round(c-b),a)),mw=!0)}
function yw(){if(X.getEntriesByType){var a=X.getEntriesByType("paint");if(a=Hb(a,function(c){return c.name==="first-paint"}))return kw(a.startTime)}var b;
S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?b=X.getEntriesByType("first-paint")[0].startTime:b=X.timing.Vg;return b?Math.max(0,b):0}
;function zw(a,b){Pl(function(){$v("").info.actionType=a;b&&Ll("TIMING_AFT_KEYS",b);Ll("TIMING_ACTION",a);var c=tw();Object.keys(c).length>0&&pw(c);c={isNavigation:!0,actionType:aw[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=P("PREVIOUS_ACTION");d&&(c.previousAction=aw[d]||"LATENCY_ACTION_UNKNOWN");if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=du())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=sw();if(d===1||d===-1)c.isVisible=!0;Uv();Tv();
c.loadType="cold";d=Tv();var e=jw(),f=lw(),g=P("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=yw();d>0&&Z("fpt",d);d=jw();d.isPerformanceNavigationTiming&&pw({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=lw()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));X&&"getEntriesByType"in X&&vw();d=[];if(document.querySelector&&X&&X.getEntriesByName)for(var h in ow)ow.hasOwnProperty(h)&&(e=ow[h],
uw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});pw(c);c=Wv();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Xv();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(Uv().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=Vv();e=Wv();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,xw(k));else if(S("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,Wu(c,d),Wu(k,d),d=!0;d&&pw(k)}D("ytglobal.timingready_",!0);k=P("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Aw()&&ww()&&rw()})()}
function Aw(){return Pl(function(){return Bw()})()}
function Cw(a,b,c){Pl(pw)(a,b,c===void 0?!1:c)}
function Dw(a,b,c){return Pl(Z)(a,b,c)}
function Bw(){return Pl(function(){return"_start"in Vv()})()}
function Ew(){Pl(function(){var a=Yv();requestAnimationFrame(function(){setTimeout(function(){a===Yv()&&Dw("ol",void 0,void 0)},0)})})()}
var Fw=window;Fw.ytcsi&&(Fw.ytcsi.infoGel=Cw,Fw.ytcsi.tick=Dw);var Gw="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),Hw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Iw(a,b,c,d){this.D=a;this.fa=b;this.o=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},Rv,a.Nb)}
function Jw(a,b,c,d){if(Iw.h!==void 0){if(d=Iw.h,a=[a!==d.D,b!==d.fa,c!==d.o,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new T("InnerTubeTransportService is already initialized",a);
}else Iw.h=new Iw(a,b,c,d)}
function Kw(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?Tm:c;var d=Lw(a,b);return d?new Zd(function(e,f){var g,h,k,l,m;return z(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.D(b,void 0,c);if(!h){f(new T("Error: Failed to build request for command.",b));n.F(0);break}uv(h.input);l=((k=h.fb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.o.Ue){var r=h.config,t,w=r==null?void 0:(t=r.Sb)==null?void 0:t.sessionIndex,y;r=((y=Us(r==null?void 0:r.command,
rl))==null?void 0:y.signal)==="GET_ACCOUNT_MENU"?!0:!1;w=Sm(0,{sessionIndex:w,bd:r});m=Object.assign({},Gv(l),w);n.F(4);break}return n.yield(Mw(h.config,l),5);case 5:m=n.i;case 4:e(Nw(a,h,m)),n.h=0}})}):de(new T("Error: No request builder found for command.",b))}
function Ow(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=v(Gw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Nw(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,w,y,A,G,M,W,Y,ta,lb,R,ua,La,Ma,Ka,Ug,Vg,Hr,Ir,Jr;return z(function(fa){switch(fa.h){case 1:fa.F(2);break;case 3:if((e=fa.i)&&!e.isExpired())return fa.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Pa)==null?0:g.context)){fa.F(4);break}h=b.Pa.context;fa.F(5);break;case 5:k=v([]),l=k.next();case 8:if(l.done){fa.F(4);break}m=l.value;return fa.yield(m.Xg(h),9);case 9:l=k.next();fa.F(8);break;case 4:if((n=a.i)==null||!n.dh(b.input,b.Pa)){fa.F(12);break}return fa.yield(a.i.Sg(b.input,
b.Pa),13);case 13:return r=fa.i,S("kevlar_process_local_innertube_responses_killswitch")||Ow(a,r,b),fa.return(r);case 12:return(y=(w=b.config)==null?void 0:w.ah)&&a.h.has(y)?t=a.h.get(y):(A=JSON.stringify(b.Pa),W=(M=(G=b.fb)==null?void 0:G.headers)!=null?M:{},b.fb=Object.assign({},b.fb,{headers:Object.assign({},W,c)}),Y=Object.assign({},b.fb),b.fb.method==="POST"&&(Y=Object.assign({},Y,{body:A})),((ta=b.config)==null?0:ta.ze)&&Dw(b.config.ze),lb=function(){return a.fa.fetch(b.input,Y,b.config)},t=
lb(),y&&a.h.set(y,t)),fa.yield(t,14);
case 14:if((R=fa.i)&&"error"in R&&((ua=R)==null?0:(La=ua.error)==null?0:La.details))for(Ma=R.error.details,Ka=v(Ma),Ug=Ka.next();!Ug.done;Ug=Ka.next())Vg=Ug.value,(Hr=Vg["@type"])&&Hw.indexOf(Hr)>-1&&(delete Vg["@type"],R=Vg);y&&a.h.has(y)&&a.h.delete(y);((Ir=b.config)==null?0:Ir.Ae)&&Dw(b.config.Ae);if(R||(Jr=a.i)==null||!Jr.Jg(b.input,b.Pa)){fa.F(15);break}return fa.yield(a.i.Rg(b.input,b.Pa),16);case 16:R=fa.i;case 15:return Ow(a,R,b),d(),fa.return(R||void 0)}})}
function Lw(a,b){a:{a=a.D;var c,d=(c=Us(b,rl))==null?void 0:c.signal;if(d&&a.Nb&&(c=a.Nb[d])){var e=c();break a}var f;if((c=(f=Us(b,pl))==null?void 0:f.request)&&a.Md&&(f=a.Md[c])){e=f();break a}for(e in b)if(a.Sc[e]&&(b=a.Sc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function Mw(a,b){var c,d,e,f,g,h,k;return z(function(l){if(l.h==1){e=(c=a)==null?void 0:(d=c.Sb)==null?void 0:d.sessionIndex;h=((g=Us((f=a)==null?void 0:f.command,rl))==null?void 0:g.signal)==="GET_ACCOUNT_MENU"?!0:!1;var m=l.yield;var n=Sm(0,{sessionIndex:e,bd:h});if(!(n instanceof Zd)){var r=new Zd(Gd);$d(r,2,n);n=r}return m.call(l,n,2)}k=l.i;return l.return(Promise.resolve(Object.assign({},Gv(b),k)))})}
;var Pw=new qs("INNERTUBE_TRANSPORT_TOKEN");function Qw(){}
x(Qw,Ov);Qw.prototype.j=function(){return Iu};
Qw.prototype.i=function(a){return Us(a,Cl)||void 0};
Qw.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(Qw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Rw(){}
x(Rw,Ov);Rw.prototype.j=function(){return Ju};
Rw.prototype.i=function(a){return Us(a,Bl)||void 0};
Rw.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(Rw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Sw=new qs("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Tw(a){this.u=a}
x(Tw,Ov);Tw.prototype.j=function(){return Du};
Tw.prototype.i=function(a){return Us(a,wl)||Us(a,xl)||Us(a,vl)};
Tw.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.u)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.u.i(b.clientParamIdentifier)}};
Tw[ps]=[Sw];function Uw(){}
x(Uw,Ov);Uw.prototype.j=function(){return Fu};
Uw.prototype.i=function(a){return Us(a,tl)||void 0};
Uw.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(Uw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Vw(){}
x(Vw,Ov);Vw.prototype.j=function(){return Gu};
Vw.prototype.i=function(a){return Us(a,Al)||void 0};
Vw.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Ww(){}
x(Ww,Ov);Ww.prototype.j=function(){return Hu};
Ww.prototype.i=function(a){return Us(a,zl)||void 0};
Ww.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Xw(){}
x(Xw,Ov);Xw.prototype.j=function(){return Eu};
Xw.prototype.i=function(a){return Us(a,yl)};
Xw.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function Yw(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;T.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
x(Yw,T);var Zw=new qs("NETWORK_SLI_TOKEN");function $w(a){this.h=a}
$w.prototype.fetch=function(a,b,c){var d=this,e;return z(function(f){e=ax(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){Nt(g);
if((c==null?0:c.Sd)&&g instanceof Yw&&g.errorType===1)return Promise.reject(g)}))})};
function ax(a,b,c){if(a.h){var d=mc(nc(5,xc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;S("wug_networking_gzip_request")&&(a=Fq(c));return new window.Request(b,a)}
$w.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((b==null?0:b.ke)&&a.ok)return wh(b.ke,d);d=d.replace(")]}'","");if((b==null?0:b.Sd)&&d)try{var e=JSON.parse(d)}catch(g){throw new Yw(1,"JSON parsing failed after fetch");}var f;return(f=e)!=null?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Ng(),c=c.then(function(d){Nt(new T("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
$w[ps]=[new rs(Zw)];var bx=new qs("NETWORK_MANAGER_TOKEN");var cx;function dx(){var a,b,c;return z(function(d){if(d.h==1)return a=xs().resolve(Pw),a?d.yield(Kw(a),2):(Nt(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Nt(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Lg;return d.return(c)}Nt(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function ex(){var a;return(a=P("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var fx=C.caches,gx;function hx(a){var b=a.indexOf(":");return b===-1?{kd:a}:{kd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function ix(){return z(function(a){if(gx!==void 0)return a.return(gx);gx=new Promise(function(b){var c;return z(function(d){switch(d.h){case 1:return ya(d,2),d.yield(fx.open("test-only"),4);case 4:return d.yield(fx.delete("test-only"),5);case 5:d.h=3;d.o=0;break;case 2:if(c=za(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(gx)})}
function jx(a){var b,c,d,e,f,g,h;z(function(k){if(k.h==1)return k.yield(ix(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(fx.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=hx(f),h=g.datasyncId,!h||a.includes(h)||b.push(fx.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function kx(){var a,b,c,d,e,f,g;return z(function(h){if(h.h==1)return h.yield(ix(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=mn("cache contains other");return h.yield(fx.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=hx(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function lx(){try{return!!self.sessionStorage}catch(a){return!1}}
;function mx(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function nx(a){if(lx()){var b=Object.keys(window.sessionStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=mx(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function ox(){if(!lx())return!1;var a=mn(),b=Object.keys(window.sessionStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=mx(c.value),c!==void 0&&c!==a)return!0;return!1}
;function px(){dx().then(function(a){a&&(sp(a),jx(a),rv(a),nx(a))})}
function qx(){var a=new xr;vj.qa(function(){var b,c,d,e,f;return z(function(g){switch(g.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){g.F(2);break}b=mn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];sp(h);jx(h);rv(h);nx(h);return g.return()}c=sv();d=ox();return g.yield(kx(),3);case 3:return e=g.i,g.yield(tp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.wa()?px():a.h.add("publicytnetworkstatus-online",px,!0,void 0,void 0),g.h=0}})})}
;function rx(){this.state=1;this.h=null}
p=rx.prototype;p.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=eb(),f=new ac(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=jl(a.interpreterSafeUrl).toString());sx(this,d,e,a.program,b,c)}else Nt(Error("Cannot initialize botguard without program"))};
function sx(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,Mu(c,function(){window[g]?tx(a,d,g,e):(a.state=3,Ou(c),Nt(new T("Unable to load Botguard","from "+c)))},f)):b?(f=Ld("SCRIPT"),b instanceof ac?cc(f,b):f.textContent=b,f.nonce=$b(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?tx(a,d,g,e):(a.state=4,Nt(new T("Unable to load Botguard from JS")))):Nt(new T("Unable to load VM; no url or JS provided"))}
p.isLoading=function(){return this.state===2};
function tx(a,b,c,d){a.state=5;try{var e=new hj({program:b,Yd:c,xe:S("att_web_record_metrics"),Ea:"aGIf"});e.Qe.then(function(){a.state=6;d&&d(b)});
a.Ic(e)}catch(f){a.state=7,f instanceof Error&&Nt(f)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.Lc()?this.Ad({Tc:a}):null};
p.dispose=function(){this.Ic(null);this.state=8};
p.Lc=function(){return!!this.h};
p.Ad=function(a){return this.h.td(a)};
p.Ic=function(a){Jc(this.h);this.h=a};var ux=[],vx=!1;function wx(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&ou()){var a=P("PLAYER_VARS",{});if(Pb(a)!="1"&&!pu(a)){var b=function(){vx=!0;"google_ad_status"in window?Ll("DCLKSTAT",1):Ll("DCLKSTAT",2)};
try{Mu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ux.push(vj.qa(function(){if(!(vx||"google_ad_status"in window)){try{Qu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}vx=!0;Ll("DCLKSTAT",3)}},5E3))}}}
function xx(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function yx(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function zx(){rx.apply(this,arguments)}
x(zx,rx);zx.prototype.Ic=function(a){var b;(b=yx())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.td.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
zx.prototype.Lc=function(){return!!yx()};
zx.prototype.Ad=function(a){return yx().bgvmc(a)};function Ax(a){Gs.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.H},{from:"document_active",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"flush_logs",action:this.u},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.u},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
x(Ax,Gs);Ax.prototype.H=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Ax.prototype.D=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Ax.prototype.u=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Ax.prototype.i=function(){this.h=new Map};function Bx(a){Gs.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.u},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.D},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.u},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.u},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.D},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.D},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
x(Bx,Gs);Bx.prototype.i=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Bx.prototype.h=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Bx.prototype.D=function(a,b){a(b==null?void 0:b.event)};
Bx.prototype.u=function(a,b){a(b==null?void 0:b.event)};function Cx(){this.o=new Ax;this.D=new Bx}
Cx.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.D.install(c)})};function Dx(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Dx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=du(c===void 0?0:c)){a=this.client;d=new Xt({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=mv(d,c);iv.set(f,!0);nv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=lv({cttAuthInfo:fu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?ov("visualElementGestured",f,d):a?Ft("visualElementGestured",d,a,f):co("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Dx.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Xt({trackingParams:a}),b,c===void 0?0:c)};
Dx.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=du(d);a||(a=(a=au(d===void 0?0:d))?new Xt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=lv({cttAuthInfo:fu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?ov("visualElementStateChanged",d,b):a?Ft("visualElementStateChanged",b,a,d):co("visualElementStateChanged",b,d))}};
function Ex(a,b){if(b===void 0)for(var c=cu(),d=0;d<c.length;d++)c[d]!==void 0&&Ex(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&kv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Fx(){Cx.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));S("web_log_cfg_cee_ks")||on(Gx)}
x(Fx,Cx);Fx.prototype.j=function(){co("finalPayload",{csn:du()})};
Fx.prototype.h=function(){Rt(St)};
Fx.prototype.i=function(){var a=Ex;Dx.h||(Dx.h=new Dx);a(Dx.h)};
function Gx(){var a=P("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Of();a=v(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&co("genericClientExperimentEvent",{eventType:c});delete Kl.CLIENT_EXPERIMENT_EVENTS}}
;function Hx(){}
function Ix(){var a=E("ytglobal.storage_");a||(a=new Hx,D("ytglobal.storage_",a));return a}
Hx.prototype.estimate=function(){var a,b,c;return z(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(Jx()):d.return()})};
function Jx(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Hx);function ao(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
ao.prototype.Ga=function(a){this.handleError(a)};
ao.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Kx(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Kx(a,b){Ix().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Lx(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Lx(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Lx(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Mx={},Nx=(Mx["api.invalidparam"]=2,Mx.auth=150,Mx["drm.auth"]=150,Mx["heartbeat.net"]=150,Mx["heartbeat.servererror"]=150,Mx["heartbeat.stop"]=150,Mx["html5.unsupportedads"]=5,Mx["fmt.noneavailable"]=5,Mx["fmt.decode"]=5,Mx["fmt.unplayable"]=5,Mx["html5.missingapi"]=5,Mx["html5.unsupportedlive"]=5,Mx["drm.unavailable"]=5,Mx["mrm.blocked"]=151,Mx["embedder.identity.denied"]=152,Mx);var Ox=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Px(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Qx(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Ox);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Rx(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Sx(a){H.call(this);var b=this;this.api=a;this.V=this.u=!1;this.A=[];this.J={};this.j=[];this.i=[];this.W=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.T=S("web_player_split_event_bus_iframe");this.ea=S("embeds_error_code_as_integer");this.o=P("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.H=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=
c.source;c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.V=!0;b.u=!1;b.sendMessage("initialDelivery",Tx(b));b.sendMessage("onReady");e=v(b.A);for(d=e.next();!d.done;d=e.next())Ux(b,d.value);b.A=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.W&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.J[e]||
e==="onReady"||(c=Vx(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.T?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.J[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&Px(e)){var f=d;if(Qa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=Qx(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=Qx(g);break;case "loadPlaylist":case "cuePlaylist":g=Rx(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);Px(e)&&Wx(b,Tx(b))}}}};
Xx.addEventListener("message",this.H);if(a=P("WIDGET_ID"))this.sessionId=a;Yx(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.W=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Nx[c]||d:d;b.ea?b.sendMessage("onError",Number(b.errorCode)):b.sendMessage("onError",b.errorCode.toString())}});
Yx(this,"onVideoProgress",this.Le.bind(this));Yx(this,"onVolumeChange",this.Me.bind(this));Yx(this,"onApiChange",this.Ee.bind(this));Yx(this,"onPlaybackQualityChange",this.Ie.bind(this));Yx(this,"onPlaybackRateChange",this.Je.bind(this));Yx(this,"onStateChange",this.Ke.bind(this));Yx(this,"onWebglSettingsChanged",this.Ne.bind(this));Yx(this,"onCaptionsTrackListChanged",this.Fe.bind(this));Yx(this,"captionssettingschanged",this.Ge.bind(this))}
x(Sx,H);function Wx(a,b){a.sendMessage("infoDelivery",b)}
p=Sx.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.V?Ux(this,a):this.A.push(a)};
function Vx(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function Yx(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Tx(a){if(!a.api)return null;var b=a.api.getApiInterface();Ib(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.Ke=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Wx(this,a)};
p.Ie=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());Wx(this,a)};
p.Je=function(a){Wx(this,{playbackRate:a})};
p.Ee=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.Me=function(){Wx(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.Le=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Wx(this,a)};
p.Ne=function(){Wx(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.Fe=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};Wx(this,a)}};
p.Ge=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};Wx(this,a)}};
function Ux(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){Nt(d)}}}
p.ba=function(){H.prototype.ba.call(this);Xx.removeEventListener("message",this.H);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.T?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var Xx=window;function Zx(a,b,c){H.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=S("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ia){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=$x(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=ay(g,f))&&by(d,g,f))}}}}}};
cy.addEventListener("message",this.i);by(this,"RECEIVING")}
x(Zx,H);p=Zx.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.He.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.He=function(a,b){this.ia||by(this,a,dy(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function $x(a,b){switch(a){case "loadVideoById":return[Qx(b)];case "cueVideoById":return[Qx(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Rx(b)];case "cuePlaylist":return[Rx(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function ay(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function dy(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function by(a,b,c){a.ia||(b={id:a.id,command:b},c&&(b.data=c),ey.postMessage(JSON.stringify(b),a.origin))}
p.ba=function(){cy.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.ba.call(this)};
var cy=window,ey=window.parent;var fy=new zx;function gy(){return fy.Lc()}
function hy(a){a=a===void 0?{}:a;return fy.invoke(a)}
;function iy(a,b,c,d,e){H.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.oc=e;this.Ka=!1;this.api={};this.ha=this.u=null;this.T=new L;this.h={};this.W=this.pa=this.elementId=this.yb=this.config=null;this.V=!1;this.j=this.H=null;this.ya={};this.pc=["onReady"];this.lastError=null;this.Qb=NaN;this.J={};this.ea=0;this.i=this.o=a;Lc(this,this.T);jy(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(ky(this),ly(this))}
x(iy,H);p=iy.prototype;p.getId=function(){return this.A};
p.loadNewVideoConfig=function(a){if(!this.ia){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof Cu||(b=new Cu(b));this.config=b;this.setConfig(a);ly(this);this.isReady()&&my(this)}};
function ky(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.yb=a;this.config=ny(a);ky(this);if(!this.pa){var b;this.pa=oy(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=pj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=pj(Number(a)||a))};
function my(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function py(a){var b=!0,c=qy(a);c&&a.config&&(b=c.dataset.version===ry(a));return b&&!!E("yt.player.Application.create")}
function ly(a){if(!a.ia&&!a.V){var b=py(a);if(b&&(qy(a)?"html5":null)==="html5")a.W="html5",a.isReady()||sy(a);else if(ty(a),a.W="html5",b&&a.j&&a.o)a.o.appendChild(a.j),sy(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.H=function(){c=!0;var d=uy(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?ny(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.oc);sy(a)};
a.V=!0;b?a.H():(Mu(ry(a),a.H),(b=vy(a))&&Tu(b||""),wy(a)&&!c&&D("yt.player.Application.create",null))}}}
function qy(a){var b=Kd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function sy(a){if(!a.ia){var b=qy(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.V=!1;if(!uy(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}xy(a)}else a.Qb=setTimeout(function(){sy(a)},50)}}
function xy(a){jy(a);a.Ka=!0;var b=qy(a);if(b){a.u=yy(a,b,"addEventListener");a.ha=yy(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=yy(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);my(a);a.pa&&a.pa(a.api);a.T.ib("onReady",a.api)}
function yy(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new T("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function jy(a){a.Ka=!1;if(a.ha)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ha(b,a.h[b]);for(var c in a.J)a.J.hasOwnProperty(c)&&clearTimeout(Number(c));a.J={};a.u=null;a.ha=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.yb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.Ka};
p.addEventListener=function(a,b){var c=this,d=oy(this,b);d&&(Cb(this.pc,a)>=0||this.h[a]||(b=zy(this,a),this.u&&this.u(a,b)),this.T.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.ia||(b=oy(this,b))&&this.T.unsubscribe(a,b)};
function oy(a,b){var c=b;if(typeof b==="string"){if(a.ya[b])return a.ya[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new T("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.ya[b]=c}return c?c:null}
function zy(a,b){function c(d){var e=setTimeout(function(){if(!a.ia){try{a.T.ib(b,d!=null?d:void 0)}catch(h){var f=new T("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.J;var g=String(e);g in f&&delete f[g]}},0);
Ob(a.J,String(e))}
return a.h[b]=c}
p.getPlayerType=function(){return this.W||(qy(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function ty(a){a.cancel();jy(a);a.W=null;a.config&&(a.config.loaded=!1);var b=qy(a);b&&(py(a)||!wy(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.H&&Qu(ry(this),this.H);clearTimeout(this.Qb);this.V=!1};
p.ba=function(){ty(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new T("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.ya=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.yb=this.config=this.api=null;delete this.o;delete this.i;H.prototype.ba.call(this)};
function wy(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function ry(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function vy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function uy(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function ny(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Rb(e):e}return b}
;var Ay={},By="player_uid_"+(Math.random()*1E9>>>0);function Cy(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Kd(c):c;var e=By+"_"+Ra(c),f=Ay[e];if(f&&d)return Dy(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new iy(c,e,a,b,void 0);Ay[e]=f;f.addOnDisposeCallback(function(){delete Ay[f.getId()]});
return f.api}
function Dy(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Ey=null,Fy=null;
function Gy(){Ew();var a=an(),b=dn(119),c=window.devicePixelRatio>1;if(document.body&&Dj(document.body,"exp-invert-logo"))if(c&&!Dj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Dj(d,"inverted-hdpi")){var e=Bj(d);Cj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Dj(document.body,"inverted-hdpi")&&Ej();if(b!=c){b="f"+(Math.floor(119/31)+1);d=en(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Ym[b]:(c=d.toString(16),Ym[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Ym)Ym.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Ym[f])));var f=d.join("&");Um(b,f,63072E3,a.i,c)}}
function Hy(){Iy()}
function Jy(){Dw("ep_init_pr");Iy()}
function Iy(){var a=Ey.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Ky(){Ey&&Ey.sendAbandonmentPing&&Ey.sendAbandonmentPing();P("PL_ATT")&&fy.dispose();for(var a=vj,b=0,c=ux.length;b<c;b++)a.ra(ux[b]);ux.length=0;Ou("//static.doubleclick.net/instream/ad_status.js");vx=!1;Ll("DCLKSTAT",0);Kc(Fy);Ey&&(Ey.removeEventListener("onVideoDataChange",Hy),Ey.destroy())}
;D("yt.setConfig",Ll);D("yt.config.set",Ll);D("yt.setMsg",Lu);D("yt.msgs.set",Lu);D("yt.logging.errors.log",Mt);
D("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}wv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);zw("embed",["ol"]);c=ex();if(!c.serializedForcedExperimentIds){var d=Zl(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&zw("watch",["pbs","pbu","pbp"]);Ey=Cy(a,c);Ey.addEventListener("onVideoDataChange",Hy);Ey.addEventListener("onReady",Jy);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Fy=new Sx(Ey):P("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Fy=new Zx(Ey,a,b));wx();S("ytidb_create_logger_embed_killswitch")||$n();a={};Fx.h||(Fx.h=new Fx);Fx.h.install((a.flush_logs={callback:function(){rt()}},a));
Mr();S("ytidb_clear_embedded_player")&&vj.qa(function(){var f,g;if(!cx){var h=xs();ts(h,{jc:bx,xd:$w});var k={Sc:{feedbackEndpoint:Jv(Uw),modifyChannelNotificationPreferenceEndpoint:Jv(Vw),playlistEditEndpoint:Jv(Ww),shareEntityEndpoint:Jv(Tw),subscribeEndpoint:Jv(Qw),unsubscribeEndpoint:Jv(Rw),webPlayerShareEntityServiceEndpoint:Jv(Xw)}},l=Fv(),m={};l&&(m.client_location=l);f===void 0&&(f=Rm());g===void 0&&(g=h.resolve(bx));Jw(k,g,f,m);ts(h,{jc:Pw,yd:Iw.h});cx=h.resolve(Pw)}qx()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||gy);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||hy);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||xx);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||vv);D("yt.util.activity.init",E("yt.util.activity.init")||$r);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||cs);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||as);window.addEventListener("load",Pl(function(){Gy()}));
window.addEventListener("pageshow",Pl(function(a){a.persisted||Gy()}));
window.addEventListener("pagehide",Pl(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Ky():a.persisted||Ky()}));
window.onerror=function(a,b,c,d,e){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var f=!1,g=Ml("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(g[h].src.indexOf("/debug-")>0){f=!0;break}}f&&(f=!1,e?f=!0:(typeof a==="string"?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new T(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Mt(e):Nt(e))};
oe=Ot;window.addEventListener("unhandledrejection",function(a){Ot(a.reason)});
Db(P("ERRORS")||[],function(a){Mt.apply(null,a)});
Ll("ERRORS",[]);}).call(this);
