/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
import{aG as e,aA as t,bn as a,C as s,ab as l,bW as o,bh as n,x as i,a1 as r,y as u,cl as c,a as d,F as p,o as f,h as v,w as y,c as m,O as g,P as h,n as b,G as k,q as w,B as E,e as F,b as R,a3 as C,d as S,J as T,ar as x,t as L,H as _,cr as U,cs as $,bv as B,c0 as P,cG as D,aM as O,K as j,a8 as A,U as q,cH as H,cI as K,ac as M,cJ as X,T as z,aD as G,X as J,z as N,b9 as W,cx as I,bo as Q,L as V}from"./087AC4D233B64EB0index.f7794d3b.js";import{E as Y}from"./087AC4D233B64EB0progress.1fbcd622.js";import{c as Z}from"./087AC4D233B64EB0cloneDeep.7b114e0a.js";import{i as ee}from"./087AC4D233B64EB0isEqual.e4d5ab49.js";const te=Symbol("uploadContextKey");class ae extends Error{constructor(e,t,a,s){super(e),this.name="UploadAjaxError",this.status=t,this.method=a,this.url=s}}function se(e,t,a){let s;return s=a.response?"".concat(a.response.error||a.response):a.responseText?"".concat(a.responseText):"fail to ".concat(t.method," ").concat(e," ").concat(a.status),new ae(s,a.status,t.method,e)}const le=["text","picture","picture-card"];let oe=1;const ne=()=>Date.now()+oe++,ie=s({action:{type:String,default:"#"},headers:{type:l(Object)},method:{type:String,default:"post"},data:{type:l([Object,Function,Promise]),default:()=>o({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:l(Array),default:()=>o([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:le,default:"text"},httpRequest:{type:l(Function),default:s=>{"undefined"==typeof XMLHttpRequest&&e("ElUpload","XMLHttpRequest is undefined");const l=new XMLHttpRequest,o=s.action;l.upload&&l.upload.addEventListener("progress",(e=>{const t=e;t.percent=e.total>0?e.loaded/e.total*100:0,s.onProgress(t)}));const n=new FormData;if(s.data)for(const[e,a]of Object.entries(s.data))t(a)&&a.length?n.append(e,...a):n.append(e,a);n.append(s.filename,s.file,s.file.name),l.addEventListener("error",(()=>{s.onError(se(o,s,l))})),l.addEventListener("load",(()=>{if(l.status<200||l.status>=300)return s.onError(se(o,s,l));s.onSuccess(function(e){const t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(a){return t}}(l))})),l.open(s.method,o,!0),s.withCredentials&&"withCredentials"in l&&(l.withCredentials=!0);const i=s.headers||{};if(i instanceof Headers)i.forEach(((e,t)=>l.setRequestHeader(t,e)));else for(const[e,t]of Object.entries(i))a(t)||l.setRequestHeader(e,String(t));return l.send(n),l}},disabled:Boolean,limit:Number}),re=s({...ie,beforeUpload:{type:l(Function),default:n},beforeRemove:{type:l(Function)},onRemove:{type:l(Function),default:n},onChange:{type:l(Function),default:n},onPreview:{type:l(Function),default:n},onSuccess:{type:l(Function),default:n},onProgress:{type:l(Function),default:n},onError:{type:l(Function),default:n},onExceed:{type:l(Function),default:n},crossorigin:{type:l(String)}}),ue=s({files:{type:l(Array),default:()=>o([])},disabled:{type:Boolean,default:!1},handlePreview:{type:l(Function),default:n},listType:{type:String,values:le,default:"text"},crossorigin:{type:l(String)}}),ce=["onKeydown"],de=["src","crossorigin"],pe=["onClick"],fe=["title"],ve=["onClick"],ye=["onClick"],me=i({name:"ElUploadList"});var ge=j(i({...me,props:ue,emits:{remove:e=>!!e},setup(e,{emit:t}){const a=e,{t:s}=r(),l=u("upload"),o=u("icon"),n=u("list"),i=c(),j=d(!1),A=p((()=>[l.b("list"),l.bm("list",a.listType),l.is("disabled",a.disabled)])),q=e=>{t("remove",e)};return(e,t)=>(f(),v(O,{tag:"ul",class:b(k(A)),name:k(n).b()},{default:y((()=>[(f(!0),m(g,null,h(e.files,(a=>(f(),m("li",{key:a.uid||a.name,class:b([k(l).be("list","item"),k(l).is(a.status),{focusing:j.value}]),tabindex:"0",onKeydown:w((e=>!k(i)&&q(a)),["delete"]),onFocus:t[0]||(t[0]=e=>j.value=!0),onBlur:t[1]||(t[1]=e=>j.value=!1),onClick:t[2]||(t[2]=e=>j.value=!1)},[E(e.$slots,"default",{file:a},(()=>["picture"===e.listType||"uploading"!==a.status&&"picture-card"===e.listType?(f(),m("img",{key:0,class:b(k(l).be("list","item-thumbnail")),src:a.url,crossorigin:e.crossorigin,alt:""},null,10,de)):F("v-if",!0),"uploading"===a.status||"picture-card"!==e.listType?(f(),m("div",{key:1,class:b(k(l).be("list","item-info"))},[R("a",{class:b(k(l).be("list","item-name")),onClick:C((t=>e.handlePreview(a)),["prevent"])},[S(k(T),{class:b(k(o).m("document"))},{default:y((()=>[S(k(x))])),_:1},8,["class"]),R("span",{class:b(k(l).be("list","item-file-name")),title:a.name},L(a.name),11,fe)],10,pe),"uploading"===a.status?(f(),v(k(Y),{key:0,type:"picture-card"===e.listType?"circle":"line","stroke-width":"picture-card"===e.listType?6:2,percentage:Number(a.percentage),style:_("picture-card"===e.listType?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):F("v-if",!0)],2)):F("v-if",!0),R("label",{class:b(k(l).be("list","item-status-label"))},["text"===e.listType?(f(),v(k(T),{key:0,class:b([k(o).m("upload-success"),k(o).m("circle-check")])},{default:y((()=>[S(k(U))])),_:1},8,["class"])):["picture-card","picture"].includes(e.listType)?(f(),v(k(T),{key:1,class:b([k(o).m("upload-success"),k(o).m("check")])},{default:y((()=>[S(k($))])),_:1},8,["class"])):F("v-if",!0)],2),k(i)?F("v-if",!0):(f(),v(k(T),{key:2,class:b(k(o).m("close")),onClick:e=>q(a)},{default:y((()=>[S(k(B))])),_:2},1032,["class","onClick"])),F(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),F(" This is a bug which needs to be fixed "),F(" TODO: Fix the incorrect navigation interaction "),k(i)?F("v-if",!0):(f(),m("i",{key:3,class:b(k(o).m("close-tip"))},L(k(s)("el.upload.deleteTip")),3)),"picture-card"===e.listType?(f(),m("span",{key:4,class:b(k(l).be("list","item-actions"))},[R("span",{class:b(k(l).be("list","item-preview")),onClick:t=>e.handlePreview(a)},[S(k(T),{class:b(k(o).m("zoom-in"))},{default:y((()=>[S(k(P))])),_:1},8,["class"])],10,ve),k(i)?F("v-if",!0):(f(),m("span",{key:0,class:b(k(l).be("list","item-delete")),onClick:e=>q(a)},[S(k(T),{class:b(k(o).m("delete"))},{default:y((()=>[S(k(D))])),_:1},8,["class"])],10,ye))],2)):F("v-if",!0)]))],42,ce)))),128)),E(e.$slots,"append")])),_:3},8,["class","name"]))}}),[["__file","upload-list.vue"]]);const he=s({disabled:{type:Boolean,default:!1}}),be={file:e=>t(e)},ke=["onDrop","onDragover"],we="ElUploadDrag",Ee=i({name:we});var Fe=j(i({...Ee,props:he,emits:be,setup(t,{emit:a}){A(te)||e(we,"usage: <el-upload><el-upload-dragger /></el-upload>");const s=u("upload"),l=d(!1),o=c(),n=e=>{if(o.value)return;l.value=!1,e.stopPropagation();const t=Array.from(e.dataTransfer.files);a("file",t)},i=()=>{o.value||(l.value=!0)};return(e,t)=>(f(),m("div",{class:b([k(s).b("dragger"),k(s).is("dragover",l.value)]),onDrop:C(n,["prevent"]),onDragover:C(i,["prevent"]),onDragleave:t[0]||(t[0]=C((e=>l.value=!1),["prevent"]))},[E(e.$slots,"default")],42,ke))}}),[["__file","upload-dragger.vue"]]);const Re=s({...ie,beforeUpload:{type:l(Function),default:n},onRemove:{type:l(Function),default:n},onStart:{type:l(Function),default:n},onSuccess:{type:l(Function),default:n},onProgress:{type:l(Function),default:n},onError:{type:l(Function),default:n},onExceed:{type:l(Function),default:n}}),Ce=["onKeydown"],Se=["name","multiple","accept"],Te=i({name:"ElUploadContent",inheritAttrs:!1});var xe=j(i({...Te,props:Re,setup(e,{expose:t}){const a=e,s=u("upload"),l=c(),o=q({}),n=q(),i=e=>{if(0===e.length)return;const{autoUpload:t,limit:s,fileList:l,multiple:o,onStart:n,onExceed:i}=a;if(s&&l.length+e.length>s)i(e,l);else{o||(e=e.slice(0,1));for(const a of e){const e=a;e.uid=ne(),n(e),t&&r(e)}}},r=async e=>{if(n.value.value="",!a.beforeUpload)return d(e);let t,s={};try{const l=a.data,o=a.beforeUpload(e);s=H(a.data)?Z(a.data):a.data,t=await o,H(a.data)&&ee(l,s)&&(s=Z(a.data))}catch(o){t=!1}if(!1===t)return void a.onRemove(e);let l=e;t instanceof Blob&&(l=t instanceof File?t:new File([t],e.name,{type:e.type})),d(Object.assign(l,{uid:e.uid}),s)},d=async(e,t)=>{const{headers:s,data:l,method:n,withCredentials:i,name:r,action:u,onProgress:c,onSuccess:d,onError:p,httpRequest:f}=a;try{t=await(async(e,t)=>M(e)?e(t):e)(null!=t?t:l,e)}catch(g){return void a.onRemove(e)}const{uid:v}=e,y={headers:s||{},withCredentials:i,file:e,data:t,method:n,filename:r,action:u,onProgress:t=>{c(t,e)},onSuccess:t=>{d(t,e),delete o.value[v]},onError:t=>{p(t,e),delete o.value[v]}},m=f(y);o.value[v]=m,m instanceof Promise&&m.then(y.onSuccess,y.onError)},p=e=>{const t=e.target.files;t&&i(Array.from(t))},g=()=>{l.value||(n.value.value="",n.value.click())},h=()=>{g()};return t({abort:e=>{K(o.value).filter(e?([t])=>String(e.uid)===t:()=>!0).forEach((([e,t])=>{t instanceof XMLHttpRequest&&t.abort(),delete o.value[e]}))},upload:r}),(e,t)=>(f(),m("div",{class:b([k(s).b(),k(s).m(e.listType),k(s).is("drag",e.drag)]),tabindex:"0",onClick:g,onKeydown:w(C(h,["self"]),["enter","space"])},[e.drag?(f(),v(Fe,{key:0,disabled:k(l),onFile:i},{default:y((()=>[E(e.$slots,"default")])),_:3},8,["disabled"])):E(e.$slots,"default",{key:1}),R("input",{ref_key:"inputRef",ref:n,class:b(k(s).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:p,onClick:t[0]||(t[0]=C((()=>{}),["stop"]))},null,42,Se)],42,Ce))}}),[["__file","upload-content.vue"]]);const Le="ElUpload",_e=e=>{var t;(null==(t=e.url)?void 0:t.startsWith("blob:"))&&URL.revokeObjectURL(e.url)},Ue=i({name:"ElUpload"});const $e=V(j(i({...Ue,props:re,setup(t,{expose:s}){const l=t,o=c(),n=q(),{abort:i,submit:r,clearFiles:u,uploadFiles:d,handleStart:g,handleError:h,handleRemove:b,handleSuccess:w,handleProgress:R,revokeFileObjectURL:C}=((t,s)=>{const l=X(t,"fileList",void 0,{passive:!0}),o=e=>l.value.find((t=>t.uid===e.uid));function n(e){var t;null==(t=s.value)||t.abort(e)}return z((()=>t.listType),(e=>{"picture-card"!==e&&"picture"!==e||(l.value=l.value.map((e=>{const{raw:a,url:s}=e;if(!s&&a)try{e.url=URL.createObjectURL(a)}catch(o){t.onError(o,e,l.value)}return e})))})),z(l,(e=>{for(const t of e)t.uid||(t.uid=ne()),t.status||(t.status="success")}),{immediate:!0,deep:!0}),{uploadFiles:l,abort:n,clearFiles:function(e=["ready","uploading","success","fail"]){l.value=l.value.filter((t=>!e.includes(t.status)))},handleError:(e,a)=>{const s=o(a);s&&(console.error(e),s.status="fail",l.value.splice(l.value.indexOf(s),1),t.onError(e,s,l.value),t.onChange(s,l.value))},handleProgress:(e,a)=>{const s=o(a);s&&(t.onProgress(e,s,l.value),s.status="uploading",s.percentage=Math.round(e.percent))},handleStart:e=>{a(e.uid)&&(e.uid=ne());const s={name:e.name,percentage:0,status:"ready",size:e.size,raw:e,uid:e.uid};if("picture-card"===t.listType||"picture"===t.listType)try{s.url=URL.createObjectURL(e)}catch(o){G(Le,o.message),t.onError(o,s,l.value)}l.value=[...l.value,s],t.onChange(s,l.value)},handleSuccess:(e,a)=>{const s=o(a);s&&(s.status="success",s.response=e,t.onSuccess(e,s,l.value),t.onChange(s,l.value))},handleRemove:async a=>{const s=a instanceof File?o(a):a;s||e(Le,"file to be removed not found");const i=e=>{n(e);const a=l.value;a.splice(a.indexOf(e),1),t.onRemove(e,a),_e(e)};t.beforeRemove?!1!==await t.beforeRemove(s,l.value)&&i(s):i(s)},submit:function(){l.value.filter((({status:e})=>"ready"===e)).forEach((({raw:e})=>{var t;return e&&(null==(t=s.value)?void 0:t.upload(e))}))},revokeFileObjectURL:_e}})(l,n),T=p((()=>"picture-card"===l.listType)),x=p((()=>({...l,fileList:d.value,onStart:g,onProgress:R,onSuccess:w,onError:h,onRemove:b})));return J((()=>{d.value.forEach(C)})),N(te,{accept:W(l,"accept")}),s({abort:i,submit:r,clearFiles:u,handleStart:g,handleRemove:b}),(e,t)=>(f(),m("div",null,[k(T)&&e.showFileList?(f(),v(ge,{key:0,disabled:k(o),"list-type":e.listType,files:k(d),crossorigin:e.crossorigin,"handle-preview":e.onPreview,onRemove:k(b)},I({append:y((()=>[S(xe,Q({ref_key:"uploadRef",ref:n},k(x)),{default:y((()=>[e.$slots.trigger?E(e.$slots,"trigger",{key:0}):F("v-if",!0),!e.$slots.trigger&&e.$slots.default?E(e.$slots,"default",{key:1}):F("v-if",!0)])),_:3},16)])),_:2},[e.$slots.file?{name:"default",fn:y((({file:t})=>[E(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):F("v-if",!0),!k(T)||k(T)&&!e.showFileList?(f(),v(xe,Q({key:1,ref_key:"uploadRef",ref:n},k(x)),{default:y((()=>[e.$slots.trigger?E(e.$slots,"trigger",{key:0}):F("v-if",!0),!e.$slots.trigger&&e.$slots.default?E(e.$slots,"default",{key:1}):F("v-if",!0)])),_:3},16)):F("v-if",!0),e.$slots.trigger?E(e.$slots,"default",{key:2}):F("v-if",!0),E(e.$slots,"tip"),!k(T)&&e.showFileList?(f(),v(ge,{key:3,disabled:k(o),"list-type":e.listType,files:k(d),crossorigin:e.crossorigin,"handle-preview":e.onPreview,onRemove:k(b)},I({_:2},[e.$slots.file?{name:"default",fn:y((({file:t})=>[E(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):F("v-if",!0)]))}}),[["__file","upload.vue"]]));export{$e as E};
