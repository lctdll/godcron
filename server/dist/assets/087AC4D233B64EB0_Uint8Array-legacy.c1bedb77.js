/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
System.register(["./087AC4D233B64EB0index-legacy.42a333da.js"],(function(t,e){"use strict";var r,n,o,c,a,i,u,b,s,f,p,y,j,h,l;return{setters:[function(t){r=t.bG,n=t.bE,o=t.bH,c=t.bI,a=t.by,i=t.bJ,u=t.bK,b=t.ba,s=t.bL,f=t.bM,p=t.bN,y=t.bO,j=t.bB,h=t.bw,l=t.bP}],execute:function(){t({S:L,b:K,c:S,d:function(t){return K(t,C,J)},f:g,h:v,j:F,k:C,o:V,s:N});var _=r(n,"WeakMap");function v(t){return null!=t&&o(t.length)&&!c(t)}var d=Object.prototype;function g(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||d)}var A="object"==typeof t&&t&&!t.nodeType&&t,w=A&&"object"==typeof e&&e&&!e.nodeType&&e,O=w&&w.exports===A?n.Buffer:void 0,z=O?O.isBuffer:void 0,m=t("i",z||function(){return!1}),B={};function S(t){return function(e){return t(e)}}B["[object Float32Array]"]=B["[object Float64Array]"]=B["[object Int8Array]"]=B["[object Int16Array]"]=B["[object Int32Array]"]=B["[object Uint8Array]"]=B["[object Uint8ClampedArray]"]=B["[object Uint16Array]"]=B["[object Uint32Array]"]=!0,B["[object Arguments]"]=B["[object Array]"]=B["[object ArrayBuffer]"]=B["[object Boolean]"]=B["[object DataView]"]=B["[object Date]"]=B["[object Error]"]=B["[object Function]"]=B["[object Map]"]=B["[object Number]"]=B["[object Object]"]=B["[object RegExp]"]=B["[object Set]"]=B["[object String]"]=B["[object WeakMap]"]=!1;var M="object"==typeof t&&t&&!t.nodeType&&t,P=M&&"object"==typeof e&&e&&!e.nodeType&&e,U=P&&P.exports===M&&u.process,k=function(){try{var t=P&&P.require&&P.require("util").types;return t||U&&U.binding&&U.binding("util")}catch(e){}}(),x=t("n",k),D=x&&x.isTypedArray,E=D?S(D):function(t){return a(t)&&o(t.length)&&!!B[i(t)]},I=t("e",E),T=Object.prototype.hasOwnProperty;function F(t,e){var r=b(t),n=!r&&s(t),o=!r&&!n&&m(t),c=!r&&!n&&!o&&I(t),a=r||n||o||c,i=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],u=i.length;for(var p in t)!e&&!T.call(t,p)||a&&("length"==p||o&&("offset"==p||"parent"==p)||c&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||f(p,u))||i.push(p);return i}function V(t,e){return function(r){return t(e(r))}}var W=V(Object.keys,Object),q=Object.prototype.hasOwnProperty;function C(t){return v(t)?F(t):function(t){if(!g(t))return W(t);var e=[];for(var r in Object(t))q.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}function L(t){var e=this.__data__=new p(t);this.size=e.size}function N(){return[]}L.prototype.clear=function(){this.__data__=new p,this.size=0},L.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},L.prototype.get=function(t){return this.__data__.get(t)},L.prototype.has=function(t){return this.__data__.has(t)},L.prototype.set=function(t,e){var r=this.__data__;if(r instanceof p){var n=r.__data__;if(!y||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new j(n)}return r.set(t,e),this.size=r.size,this};var G=Object.prototype.propertyIsEnumerable,H=Object.getOwnPropertySymbols,J=t("g",H?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,c=[];++r<n;){var a=t[r];e(a,r,t)&&(c[o++]=a)}return c}(H(t),(function(e){return G.call(t,e)})))}:N);function K(t,e,r){var n=e(t);return b(t)?n:h(n,r(t))}var R=r(n,"DataView"),Q=r(n,"Promise"),X=r(n,"Set"),Y="[object Map]",Z="[object Promise]",$="[object Set]",tt="[object WeakMap]",et="[object DataView]",rt=l(R),nt=l(y),ot=l(Q),ct=l(X),at=l(_),it=i;(R&&it(new R(new ArrayBuffer(1)))!=et||y&&it(new y)!=Y||Q&&it(Q.resolve())!=Z||X&&it(new X)!=$||_&&it(new _)!=tt)&&(it=function(t){var e=i(t),r="[object Object]"==e?t.constructor:void 0,n=r?l(r):"";if(n)switch(n){case rt:return et;case nt:return Y;case ot:return Z;case ct:return $;case at:return tt}return e}),t("a",it);var ut=n.Uint8Array;t("U",ut)}}}));
