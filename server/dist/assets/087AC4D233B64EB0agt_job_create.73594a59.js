/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
import{_ as e,a,r as t,o as l,h as s,w as r,d as o,c as i,O as d,P as n,b as m,g as u,a3 as p,j as c,l as B,E as g,p as b,i as E}from"./087AC4D233B64EB0index.f7794d3b.js";import{a as j,E as C}from"./087AC4D233B64EB0form-item.2294f669.js";/* empty css                               */import{E as f,a as A}from"./087AC4D233B64EB0col.c3385008.js";/* empty css                              */import{E as _}from"./087AC4D233B64EB0divider.1f5cee2b.js";/* empty css                            */import{E as D,a as v}from"./087AC4D233B64EB0select.ac4ece9f.js";import"./087AC4D233B64EB0scrollbar.5ea68434.js";/* empty css                               */import{g as x}from"./087AC4D233B64EB0manger.bc2b6569.js";import{a as h}from"./087AC4D233B64EB0mangjob.af0baf26.js";import"./087AC4D233B64EB0castArray.b2df96d4.js";import"./087AC4D233B64EB0_baseClone.3d27a61c.js";import"./087AC4D233B64EB0_Uint8Array.a14e9c36.js";import"./087AC4D233B64EB0_initCloneObject.6c0ecbc8.js";import"./087AC4D233B64EB0index.180a68c4.js";import"./087AC4D233B64EB0index.18ebb74e.js";import"./087AC4D233B64EB0token.9ae252be.js";import"./087AC4D233B64EB0strings.13f65845.js";import"./087AC4D233B64EB0isEqual.e4d5ab49.js";import"./087AC4D233B64EB0debounce.9b1e718d.js";import"./087AC4D233B64EB0_baseIteratee.ecc9a1d9.js";import"./087AC4D233B64EB0index.21f2f826.js";const V=(e=>(b("data-v-c23e481d"),e=e(),E(),e))((()=>m("div",{class:"static-content-item"},[m("div",null,"多列表单")],-1))),q={class:"static-content-item"},y={class:"static-content-item"},w=e({__name:"agt_job_create",setup(e){const b=a(1);a(0);const E=a(10),w=a({}),k=a(null),U=t({hosts:"",exec:"bash",action:"add",name:"",spec:"",text:""}),z=a([]),O=t({path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],name:[{required:!0,message:"字段值不可为空"}],spec:[{required:!0,message:"字段值不可为空"}],text:[{required:!0,message:"字段值不可为空"}],component:[{required:!0,message:"请输入文件路径",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]}),I=()=>{(async()=>{const e=await x({page:b.value,pageSize:E.value,...w.value});0===e.code&&(z.value=e.data.list)})()};I();const S=()=>{k.value&&k.value.validate((async e=>{if(!e)return;U.action="add";0===(await h(U)).code&&c({type:"success",message:"添加成功!"}),I()}))};return(e,a)=>{const t=D,c=v,b=j,E=_,x=B,h=f,w=A,I=g,F=C;return l(),s(F,{model:U,ref_key:"vForm",ref:k,rules:O,"label-position":"left","label-width":"150px",size:"large",onSubmit:a[4]||(a[4]=p((()=>{}),["prevent"]))},{default:r((()=>[V,o(b,{label:"agent",prop:"hosts",class:"label-right-align"},{default:r((()=>[o(c,{modelValue:U.hosts,"onUpdate:modelValue":a[0]||(a[0]=e=>U.hosts=e),class:"full-width-input",clearable:""},{default:r((()=>[(l(!0),i(d,null,n(z.value,((e,a)=>(l(),s(t,{key:a,label:e.agent_addr,value:e.agent_addr,disabled:e.disabled},null,8,["label","value","disabled"])))),128))])),_:1},8,["modelValue"])])),_:1}),m("div",q,[o(E,{direction:"horizontal"})]),o(w,null,{default:r((()=>[o(h,{span:12,class:"grid-cell"},{default:r((()=>[o(b,{label:"name",prop:"name",class:"required label-right-align"},{default:r((()=>[o(x,{modelValue:U.name,"onUpdate:modelValue":a[1]||(a[1]=e=>U.name=e),type:"text",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),o(h,{span:12,class:"grid-cell"},{default:r((()=>[o(b,{label:"cron",prop:"spec",class:"required label-right-align"},{default:r((()=>[o(x,{modelValue:U.spec,"onUpdate:modelValue":a[2]||(a[2]=e=>U.spec=e),type:"text",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),o(h,{span:24,class:"grid-cell"},{default:r((()=>[o(b,{label:"text",prop:"text",class:"required label-right-align"},{default:r((()=>[o(x,{type:"textarea",modelValue:U.text,"onUpdate:modelValue":a[3]||(a[3]=e=>U.text=e),rows:"3"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m("div",y,[o(I,{round:"",onClick:S},{default:r((()=>[u("提交")])),_:1})])])),_:1},8,["model","rules"])}}},[["__scopeId","data-v-c23e481d"]]);export{w as default};
