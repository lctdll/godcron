/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
import{o as e,h as t,w as o,g as r,j as n,E as a,d as s}from"./087AC4D233B64EB0index.f7794d3b.js";/* empty css                               */import{E as p}from"./087AC4D233B64EB0upload.557864ed.js";import"./087AC4D233B64EB0progress.1fbcd622.js";const c={__name:"exportExcel",props:{templateId:{type:String,required:!0},condition:{type:Object,default:()=>({})},limit:{type:Number,default:0},offset:{type:Number,default:0},order:{type:String,default:""}},setup(s){const p=s,c=async()=>{if(""===p.templateId)return void n.error("组件未设置模板ID");const e=JSON.parse(JSON.stringify(p.condition));p.limit&&(e.limit=p.limit),p.offset&&(e.offset=p.offset),p.order&&(e.order=p.order);const t=Object.entries(e).map((([e,t])=>"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t)))).join("&"),o="".concat("/api","/sysExportTemplate/exportExcel?templateID=").concat(p.templateId).concat(t?"&"+t:"");window.open(o,"_blank")};return(n,s)=>{const p=a;return e(),t(p,{type:"primary",icon:"download",onClick:c},{default:o((()=>[r("导出")])),_:1})}}},i={__name:"exportTemplate",props:{templateId:{type:String,required:!0}},setup(s){const p=s,c=async()=>{if(""===p.templateId)return void n.error("组件未设置模板ID");const e="".concat("/api","/sysExportTemplate/exportTemplate?templateID=").concat(p.templateId);window.open(e,"_blank")};return(n,s)=>{const p=a;return e(),t(p,{type:"primary",icon:"download",onClick:c},{default:o((()=>[r("下载模板")])),_:1})}}},l={__name:"importExcel",props:{templateId:{type:String,required:!0}},emits:["on-success"],setup(c,{emit:i}){const l=c,m=i,d="".concat("/api","/sysExportTemplate/importExcel?templateID=").concat(l.templateId),u=e=>{0===e.code?(n.success("导入成功"),m("on-success")):n.error(e.msg)};return(n,c)=>{const i=a,l=p;return e(),t(l,{action:d,"show-file-list":!1,"on-success":u,multiple:!1},{default:o((()=>[s(i,{type:"primary",icon:"upload",class:"ml-3"},{default:o((()=>[r(" 导入 ")])),_:1})])),_:1})}}};export{i as _,c as a,l as b};
