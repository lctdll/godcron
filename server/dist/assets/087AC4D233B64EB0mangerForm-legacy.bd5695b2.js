/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var e,r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(e){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),u=new D(n||[]);return a(i,"_invoke",{value:B(t,r,u)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",v="suspendedYield",y="executing",d="completed",g={};function m(){}function w(){}function b(){}var x={};s(x,u,(function(){return this}));var E=Object.getPrototypeOf,_=E&&E(E(P([])));_&&_!==n&&o.call(_,u)&&(x=_);var L=b.prototype=m.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(n,a,i,u){var c=h(t[n],t,a);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&o.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}var n;a(this,"_invoke",{value:function(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}})}function B(t,r,n){var o=p;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=O(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=h(t,r,n);if("normal"===l.type){if(o=n.done?d:v,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=h(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return w.prototype=b,a(L,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=s(b,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},j(k.prototype),s(k.prototype,c,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new k(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(L),s(L,l,"Generator"),s(L,u,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=P,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},r}function e(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function u(t){e(i,o,a,u,c,"next",t)}function c(t){e(i,o,a,u,c,"throw",t)}u(void 0)}))}}System.register(["./087AC4D233B64EB0index-legacy.42a333da.js","./087AC4D233B64EB0form-item-legacy.69b7dd56.js","./087AC4D233B64EB0button-legacy.6621f510.js","./087AC4D233B64EB0input-legacy.12c190df.js","./087AC4D233B64EB0manger-legacy.7379929c.js","./087AC4D233B64EB0castArray-legacy.e83740bc.js","./087AC4D233B64EB0_baseClone-legacy.c051fd96.js","./087AC4D233B64EB0_Uint8Array-legacy.c1bedb77.js","./087AC4D233B64EB0_initCloneObject-legacy.79f847f8.js"],(function(e,n){"use strict";var o,a,i,u,c,l,s,f,h,p,v,y,d,g,m,w,b,x;return{setters:[function(t){o=t.cP,a=t.u,i=t.a,u=t.r,c=t.o,l=t.c,s=t.b,f=t.d,h=t.w,p=t.g,v=t.j,y=t.l,d=t.E},function(t){g=t.a,m=t.E},null,null,function(t){w=t.f,b=t.c,x=t.u},null,null,null,null],execute:function(){var n={class:"gva-form-box"};e("default",Object.assign({name:"AgentTableForm"},{__name:"mangerForm",setup:function(e){var E=o(),_=a(),L=i(""),j=i({agent_addr:""}),k=u({agent_addr:[{required:!0,message:"",trigger:["input","blur"]}]}),B=i(),O=function(){var e=r(t().mark((function e(){var r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!E.query.id){t.next=7;break}return t.next=3,w({ID:E.query.id});case 3:0===(r=t.sent).code&&(j.value=r.data.reagent,L.value="update"),t.next=8;break;case 7:L.value="create";case 8:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();O();var A=function(){var e=r(t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=B.value)||void 0===n||n.validate(function(){var e=r(t().mark((function e(r){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:t.t0=L.value,t.next="create"===t.t0?5:"update"===t.t0?9:13;break;case 5:return t.next=7,b(j.value);case 7:return n=t.sent,t.abrupt("break",17);case 9:return t.next=11,x(j.value);case 11:return n=t.sent,t.abrupt("break",17);case 13:return t.next=15,b(j.value);case 15:return n=t.sent,t.abrupt("break",17);case 17:0===n.code&&v({type:"success",message:"创建/更改成功"});case 18:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){_.go(-1)};return function(t,e){var r=y,o=g,a=d,i=m;return c(),l("div",null,[s("div",n,[f(i,{model:j.value,ref_key:"elFormRef",ref:B,"label-position":"right",rules:k,"label-width":"80px"},{default:h((function(){return[f(o,{label:"地址:",prop:"agent_addr"},{default:h((function(){return[f(r,{modelValue:j.value.agent_addr,"onUpdate:modelValue":e[0]||(e[0]=function(t){return j.value.agent_addr=t}),clearable:!0,placeholder:"请输入地址"},null,8,["modelValue"])]})),_:1}),f(o,null,{default:h((function(){return[f(a,{type:"primary",onClick:A},{default:h((function(){return[p("保存")]})),_:1}),f(a,{type:"primary",onClick:C},{default:h((function(){return[p("返回")]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])])])}}}))}}}))}();
