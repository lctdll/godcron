/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var t,n={},r=Object.prototype,a=r.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),u=new L(r||[]);return o(i,"_invoke",{value:k(e,n,u)}),i}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var d="suspendedStart",h="suspendedYield",g="executing",v="completed",y={};function m(){}function b(){}function w(){}var j={};s(j,u,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(P([])));E&&E!==r&&a.call(E,u)&&(j=E);var x=w.prototype=m.prototype=Object.create(j);function B(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(r,o,i,u){var l=p(e[r],e,o);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,u)}),(function(e){n("throw",e,i,u)})):t.resolve(s).then((function(e){c.value=e,i(c)}),(function(e){return n("throw",e,i,u)}))}u(l.arg)}var r;o(this,"_invoke",{value:function(e,a){function o(){return new t((function(t,r){n(e,a,t,r)}))}return r=r?r.then(o,o):o()}})}function k(e,n,r){var a=d;return function(o,i){if(a===g)throw Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var l=D(u,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=g;var c=p(e,n,r);if("normal"===c.type){if(a=r.done?v:h,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=v,r.method="throw",r.arg=c.arg)}}}function D(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,D(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=p(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function n(){for(;++r<e.length;)if(a.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=w,o(x,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=s(w,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},n.awrap=function(e){return{__await:e}},B(C.prototype),s(C.prototype,l,(function(){return this})),n.AsyncIterator=C,n.async=function(e,t,r,a,o){void 0===o&&(o=Promise);var i=new C(f(e,t,r,a),o);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},B(x),s(x,c,"Generator"),s(x,u,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=P,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return u.type="throw",u.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n,r,a,o,i){try{var u=e[o](i),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){a(i,r,o,u,l,"next",e)}function l(e){a(i,r,o,u,l,"throw",e)}u(void 0)}))}}System.register(["./087AC4D233B64EB0index-legacy.42a333da.js","./087AC4D233B64EB0drawer-legacy.15223bac.js","./087AC4D233B64EB0overlay-legacy.e93a9fe5.js","./087AC4D233B64EB0input-legacy.12c190df.js","./087AC4D233B64EB0pagination-legacy.5d7cdcb8.js","./087AC4D233B64EB0tag-legacy.4ef5d524.js","./087AC4D233B64EB0select-legacy.cb3601f1.js","./087AC4D233B64EB0scrollbar-legacy.e49fae70.js","./087AC4D233B64EB0popper-legacy.78a44115.js","./087AC4D233B64EB0table-column-legacy.3bf6c1d7.js","./087AC4D233B64EB0checkbox-legacy.fd100de7.js","./087AC4D233B64EB0tooltip-legacy.b3c86740.js","./087AC4D233B64EB0form-item-legacy.69b7dd56.js","./087AC4D233B64EB0button-legacy.6621f510.js","./087AC4D233B64EB0mangjob-legacy.ae5b4c53.js","./087AC4D233B64EB0manger-legacy.7379929c.js","./087AC4D233B64EB0icon.vue_vue_type_style_index_0_lang-legacy.58805453.js","./087AC4D233B64EB0warningBar-legacy.72a2da13.js","./087AC4D233B64EB0index-legacy.53a4542e.js","./087AC4D233B64EB0isEqual-legacy.b7a2b208.js","./087AC4D233B64EB0_Uint8Array-legacy.c1bedb77.js","./087AC4D233B64EB0index-legacy.c673660d.js","./087AC4D233B64EB0token-legacy.91fd35f2.js","./087AC4D233B64EB0strings-legacy.940fe416.js","./087AC4D233B64EB0debounce-legacy.9dc71a8b.js","./087AC4D233B64EB0_baseIteratee-legacy.43e79d0a.js","./087AC4D233B64EB0index-legacy.0ec4d971.js","./087AC4D233B64EB0castArray-legacy.e83740bc.js","./087AC4D233B64EB0_initCloneObject-legacy.79f847f8.js","./087AC4D233B64EB0_baseClone-legacy.c051fd96.js"],(function(t,r){"use strict";var a,i,u,l,c,s,f,p,d,h,g,v,y,m,b,w,j,_,E,x,B,C,k,D,A,O,L,P,S,z,T;return{setters:[function(e){a=e._,i=e.r,u=e.a,l=e.o,c=e.c,s=e.b,f=e.d,p=e.w,d=e.O,h=e.P,g=e.h,v=e.g,y=e.t,m=e.e,b=e.j,w=e.au,j=e.E,_=e.l},function(e){E=e.E},null,null,function(e){x=e.E},null,function(e){B=e.E,C=e.a},null,null,function(e){k=e.E,D=e.a},null,null,function(e){A=e.a,O=e.E},null,function(e){L=e.g,P=e.b,S=e.d},function(e){z=e.g},null,function(e){T=e._},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".warning[data-v-ec40f250]{color:#dc143c}.icon-column[data-v-ec40f250]{display:flex;align-items:center}.icon-column .el-icon[data-v-ec40f250]{margin-right:8px}\n",document.head.appendChild(r);var N={class:"gva-search-box"},F={class:"gva-table-box"},G={class:"gva-pagination"},V={class:"flex justify-between items-center"},I={class:"text-lg"},q=Object.assign({name:"Menus"},{__name:"agt_job_list",setup:function(t){var r=i({path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],component:[{required:!0,message:"请输入文件路径",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]}),a=u(1),q=u(0),U=u(10),R=u([]),M=u({}),Y=u([]),$=function(){var t=o(e().mark((function t(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(n({page:a.value,pageSize:U.value},M.value));case 2:0===(r=e.sent).code&&(R.value=r.data.list);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();$();var H=function(){a.value=1,U.value=10,J()},J=function(){var t=o(e().mark((function t(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(n({page:a.value,pageSize:U.value},M.value));case 2:0===(r=e.sent).code&&(console.log(r.data.list),Y.value=r.data.list,q.value=r.data.total,a.value=r.data.page,U.value=r.data.pageSize);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),K=function(){var t=o(e().mark((function t(n,r,a){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({agent_addr:n,job_name:r,action:"stop"});case 2:0===e.sent.code&&(b({type:"success",message:"暂停成功!"}),J());case 4:case"end":return e.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),Q=function(){var t=o(e().mark((function t(n,r,a){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({agent_addr:n,job_name:r,action:"start"});case 2:0===e.sent.code&&(b({type:"success",message:"启动成功!"}),J());case 4:case"end":return e.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),W=function(){var t=o(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ee.value.validate(function(){var t=o(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=11;break}if(!oe.value){e.next=5;break}e.next=8;break;case 5:return e.next=7,createAgentTable(form.value);case 7:r=e.sent;case 8:0===r.code&&(b({type:"success",message:oe.value?"编辑成功":"添加成功!"}),getTableData()),ne(),re.value=!1;case 11:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=function(){form.value.path=form.value.name},Z=function(e){ne(),e()},ee=u(null),te=u(!1),ne=function(){te.value=!1,ee.value.resetFields(),form.value={ID:0,agent_addr:""}},re=u(!1),ae=function(){ne(),re.value=!1};u([{ID:"0"}]);var oe=u(!1),ie=u("新增菜单");return function(t,n){var i=B,u=C,L=A,P=j,z=O,$=k,te=D,ne=x,oe=_,ue=E;return l(),c("div",null,[s("div",N,[f(z,{ref:"searchForm",inline:!0,model:M.value},{default:p((function(){return[f(L,{label:"Agent"},{default:p((function(){return[f(u,{modelValue:M.value.agent_addr,"onUpdate:modelValue":n[0]||(n[0]=function(e){return M.value.agent_addr=e}),clearable:"",placeholder:"请选择"},{default:p((function(){return[(l(!0),c(d,null,h(R.value,(function(e,t){return l(),g(i,{key:t,label:e.agent_addr,value:e.agent_addr},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),f(L,null,{default:p((function(){return[f(P,{type:"primary",icon:"search",onClick:H},{default:p((function(){return[v("查询")]})),_:1})]})),_:1})]})),_:1},8,["model"])]),s("div",F,[f(te,{data:Y.value,"row-key":"id"},{default:p((function(){return[f($,{align:"left",label:"ID","min-width":"100",prop:"id"}),f($,{align:"left",label:"Name","min-width":"100",prop:"name"}),f($,{align:"left",label:"Cron","min-width":"100",prop:"spec"}),f($,{align:"left",label:"Running","min-width":"100",prop:"isRunning"}),f($,{align:"left",label:"Text","min-width":"100",prop:"text"}),f($,{align:"left",fixed:"right",label:"操作",width:"300"},{default:p((function(t){return[t.row.isRunning?(l(),g(P,{key:0,type:"primary",link:"",onClick:function(e){return K(M.value.agent_addr,t.row.name,t.$index)}},{default:p((function(){return[v("暂停")]})),_:2},1032,["onClick"])):(l(),g(P,{key:1,type:"primary",link:"",onClick:function(e){return Q(M.value.agent_addr,t.row.name,t.$index)}},{default:p((function(){return[v("启动")]})),_:2},1032,["onClick"])),f(P,{type:"primary",link:"",icon:"delete",onClick:function(n){return r=M.value.agent_addr,i=t.row.name,void w.confirm("此操作将永久删除所有角色下该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(o(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S({agent_addr:r,job_name:i});case 2:0===e.sent.code&&(b({type:"success",message:"删除成功!"}),1===Y.value.length&&a.value>1&&a.value--,J());case 4:case"end":return e.stop()}}),t)})))).catch((function(e){console.log("用户取消了操作",e),b({type:"info",message:"已取消删除"})}));var r,i}},{default:p((function(){return[v("删除")]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"]),s("div",G,[f(ne,{"current-page":a.value,"page-size":U.value,"page-sizes":[10,30,50,100],total:q.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:t.handleCurrentChange,onSizeChange:t.handleSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])]),f(ue,{modelValue:re.value,"onUpdate:modelValue":n[2]||(n[2]=function(e){return re.value=e}),size:"60%","before-close":Z,"show-close":!1},{header:p((function(){return[s("div",V,[s("span",I,y(ie.value),1),s("div",null,[f(P,{onClick:ae},{default:p((function(){return[v("取 消")]})),_:1}),f(P,{type:"primary",onClick:W},{default:p((function(){return[v("确 定")]})),_:1})])])]})),default:p((function(){return[f(T,{title:"新增菜单，需要在角色管理内配置权限才可使用"}),re.value?(l(),g(z,{key:0,ref_key:"menuForm",ref:ee,model:t.form,rules:r,"label-width":"85px"},{default:p((function(){return[f(L,{label:"agent_addr",prop:"agent_addr"},{default:p((function(){return[f(oe,{modelValue:t.form.agent_addr,"onUpdate:modelValue":n[1]||(n[1]=function(e){return t.form.agent_addr=e}),autocomplete:"off",placeholder:"唯一英文字符串",onChange:X},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])):m("",!0)]})),_:1},8,["modelValue"])])}}});t("default",a(q,[["__scopeId","data-v-ec40f250"]]))}}}))}();
