/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
System.register(["./087AC4D233B64EB0index-legacy.42a333da.js"],(function(n,t){"use strict";var e,o,r,i,u,c;return{setters:[function(n){e=n.V,o=n.aj,r=n.c8,i=n.c9,u=n.G,c=n.a0}],execute:function(){function t(n){return"function"==typeof n?n():u(n)}n({a:function(n){return!!r()&&(i(n),!0)},c:function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2?arguments[2]:void 0;!function(n){return n||c()}()?t?n():o(n):e(n,r)},t:t,u:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(n,t){function e(){for(var e=this,o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return new Promise((function(o,i){Promise.resolve(n((function(){return t.apply(e,r)}),{fn:t,thisArg:e,args:r})).then(o).catch(i)}))}return e}(function(n){var e,o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=l,u=function(n){clearTimeout(n),i(),i=l},c=function(c){var f=t(n),l=t(r.maxWait);return e&&u(e),f<=0||void 0!==l&&l<=0?(o&&(u(o),o=null),Promise.resolve(c())):new Promise((function(n,t){i=r.rejectOnCancel?t:n,l&&!o&&(o=setTimeout((function(){e&&u(e),o=null,n(c())}),l)),e=setTimeout((function(){o&&u(o),o=null,n(c())}),f)}))};return c}(e,o),n)}}),n("b","undefined"!=typeof window&&"undefined"!=typeof document),"undefined"!=typeof WorkerGlobalScope&&(globalThis,WorkerGlobalScope);var f=Object.prototype.toString,l=(n("i",(function(n){return"[object Object]"===f.call(n)})),n("n",(function(){})))}}}));
