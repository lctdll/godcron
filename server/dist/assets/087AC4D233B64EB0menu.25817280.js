/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
import{_ as e,r as l,a,o as t,c as o,b as u,d as i,w as d,g as n,G as p,ay as r,t as s,h as m,I as c,e as v,dB as f,dC as h,au as b,dD as w,j as y,dE as B,dF as _,dG as g,E as V,J as D,l as C,p as k,i as E}from"./087AC4D233B64EB0index.f7794d3b.js";import{E as A}from"./087AC4D233B64EB0drawer.178042b4.js";import"./087AC4D233B64EB0overlay.ee491930.js";import{a as j,E as x}from"./087AC4D233B64EB0form-item.2294f669.js";/* empty css                                *//* empty css                               */import{E as I}from"./087AC4D233B64EB0radio.33d77285.js";/* empty css                              *//* empty css                            */import{E as U}from"./087AC4D233B64EB0checkbox.689d67cf.js";import"./087AC4D233B64EB0scrollbar.5ea68434.js";import{E as T,a as N}from"./087AC4D233B64EB0select.ac4ece9f.js";import{E as q,a as M}from"./087AC4D233B64EB0table-column.ebf38335.js";/* empty css                               */import z from"./087AC4D233B64EB0icon.260ebaca.js";import{_ as F}from"./087AC4D233B64EB0warningBar.4245c872.js";import{c as G}from"./087AC4D233B64EB0authorityBtn.1d772888.js";import{t as P}from"./087AC4D233B64EB0doc.46160848.js";import{E as S}from"./087AC4D233B64EB0index.180a68c4.js";import"./087AC4D233B64EB0castArray.b2df96d4.js";import"./087AC4D233B64EB0_baseClone.3d27a61c.js";import"./087AC4D233B64EB0_Uint8Array.a14e9c36.js";import"./087AC4D233B64EB0_initCloneObject.6c0ecbc8.js";import"./087AC4D233B64EB0strings.13f65845.js";import"./087AC4D233B64EB0isEqual.e4d5ab49.js";import"./087AC4D233B64EB0arrays.2c626d3b.js";import"./087AC4D233B64EB0cloneDeep.7b114e0a.js";import"./087AC4D233B64EB0index.18ebb74e.js";import"./087AC4D233B64EB0index.21f2f826.js";import"./087AC4D233B64EB0debounce.9b1e718d.js";import"./087AC4D233B64EB0token.9ae252be.js";import"./087AC4D233B64EB0_baseIteratee.ecc9a1d9.js";/* empty css                                                             */const K=e=>(k("data-v-097a54ac"),e=e(),E(),e),O={class:"gva-table-box"},$={class:"gva-btn-list"},H={key:0,class:"icon-column"},J={class:"flex justify-between items-center"},L={class:"text-lg"},Q={style:{display:"inline-flex","align-items":"center"}},R=K((()=>u("span",null,"路由Path",-1))),W=K((()=>u("span",{style:{"font-size":"12px","margin-right":"12px"}},"如果菜单包含子菜单，请创建router-view二级路由页面或者",-1))),X=K((()=>u("span",null," 高亮菜单 ",-1))),Y=K((()=>u("span",null," 是否为基础页面 ",-1))),Z={class:"flex items-center gap-2"},ee={class:"flex items-center gap-2 mt-3"},le=e(Object.assign({name:"Menus"},{__name:"menu",setup(e){const k=l({path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],component:[{required:!0,message:"请输入文件路径",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]}),E=a(1),K=a(0),le=a(999),ae=a([]),te=a({}),oe=async()=>{const e=await h({page:E.value,pageSize:le.value,...te.value});0===e.code&&(ae.value=e.data.list,K.value=e.data.total,E.value=e.data.page,le.value=e.data.pageSize)};oe();const ue=()=>{ie.value.component=ie.value.component.replace(/\\/g,"/")},ie=a({ID:0,path:"",name:"",hidden:!1,parentId:0,component:"",meta:{activeName:"",title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1},parameters:[],menuBtn:[]}),de=()=>{ie.value.path=ie.value.name},ne=e=>{se(),e()},pe=a(null),re=a(!1),se=()=>{re.value=!1,pe.value.resetFields(),ie.value={ID:0,path:"",name:"",hidden:!1,parentId:0,component:"",meta:{title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1}}},me=a(!1),ce=()=>{se(),me.value=!1},ve=async()=>{pe.value.validate((async e=>{if(e){let e;e=we.value?await B(ie.value):await _(ie.value),0===e.code&&(y({type:"success",message:we.value?"编辑成功":"添加成功!"}),oe()),se(),me.value=!1}}))},fe=a([{ID:"0",title:"根菜单"}]),he=()=>{fe.value=[{ID:0,title:"根目录"}],be(ae.value,fe.value,!1)},be=(e,l,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const t={title:e.meta.title,ID:e.ID,disabled:a||e.ID===ie.value.ID,children:[]};be(e.children,t.children,a||e.ID===ie.value.ID),l.push(t)}else{const t={title:e.meta.title,ID:e.ID,disabled:a||e.ID===ie.value.ID};l.push(t)}}))},we=a(!1),ye=a("新增菜单"),Be=e=>{ye.value="新增菜单",ie.value.parentId=e,we.value=!1,he(),me.value=!0};return(e,l)=>{const a=V,h=D,B=q,_=M,K=C,le=j,te=U,se=T,be=N,_e=I,ge=S,Ve=x,De=A;return t(),o("div",null,[u("div",O,[u("div",$,[i(a,{type:"primary",icon:"plus",onClick:l[0]||(l[0]=e=>Be(0))},{default:d((()=>[n("新增根菜单")])),_:1}),i(h,{class:"cursor-pointer",onClick:l[1]||(l[1]=e=>p(P)("https://www.bilibili.com/video/BV1kv4y1g7nT/?p=4&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:d((()=>[i(p(r))])),_:1})]),i(_,{data:ae.value,"row-key":"ID"},{default:d((()=>[i(B,{align:"left",label:"ID","min-width":"100",prop:"ID"}),i(B,{align:"left",label:"展示名称","min-width":"120",prop:"authorityName"},{default:d((e=>[u("span",null,s(e.row.meta.title),1)])),_:1}),i(B,{align:"left",label:"图标","min-width":"140",prop:"authorityName"},{default:d((e=>[e.row.meta.icon?(t(),o("div",H,[i(h,null,{default:d((()=>[(t(),m(c(e.row.meta.icon)))])),_:2},1024),u("span",null,s(e.row.meta.icon),1)])):v("",!0)])),_:1}),i(B,{align:"left",label:"路由Name","show-overflow-tooltip":"","min-width":"160",prop:"name"}),i(B,{align:"left",label:"路由Path","show-overflow-tooltip":"","min-width":"160",prop:"path"}),i(B,{align:"left",label:"是否隐藏","min-width":"100",prop:"hidden"},{default:d((e=>[u("span",null,s(e.row.hidden?"隐藏":"显示"),1)])),_:1}),i(B,{align:"left",label:"父节点","min-width":"90",prop:"parentId"}),i(B,{align:"left",label:"排序","min-width":"70",prop:"sort"}),i(B,{align:"left",label:"文件路径","min-width":"360",prop:"component"}),i(B,{align:"left",fixed:"right",label:"操作",width:"300"},{default:d((e=>[i(a,{type:"primary",link:"",icon:"plus",onClick:l=>Be(e.row.ID)},{default:d((()=>[n("添加子菜单")])),_:2},1032,["onClick"]),i(a,{type:"primary",link:"",icon:"edit",onClick:l=>(async e=>{ye.value="编辑菜单";const l=await g({id:e});ie.value=l.data.menu,we.value=!0,he(),me.value=!0})(e.row.ID)},{default:d((()=>[n("编辑")])),_:2},1032,["onClick"]),i(a,{type:"primary",link:"",icon:"delete",onClick:l=>{return a=e.row.ID,void b.confirm("此操作将永久删除所有角色下该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await w({ID:a})).code&&(y({type:"success",message:"删除成功!"}),1===ae.value.length&&E.value>1&&E.value--,oe())})).catch((()=>{y({type:"info",message:"已取消删除"})}));var a}},{default:d((()=>[n("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),i(De,{modelValue:me.value,"onUpdate:modelValue":l[20]||(l[20]=e=>me.value=e),size:"60%","before-close":ne,"show-close":!1},{header:d((()=>[u("div",J,[u("span",L,s(ye.value),1),u("div",null,[i(a,{onClick:ce},{default:d((()=>[n("取 消")])),_:1}),i(a,{type:"primary",onClick:ve},{default:d((()=>[n("确 定")])),_:1})])])])),default:d((()=>[i(F,{title:"新增菜单，需要在角色管理内配置权限才可使用"}),me.value?(t(),m(Ve,{key:0,ref_key:"menuForm",ref:pe,inline:!0,model:ie.value,rules:k,"label-position":"top","label-width":"85px"},{default:d((()=>[i(le,{label:"路由Name",prop:"path",style:{width:"30%"}},{default:d((()=>[i(K,{modelValue:ie.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>ie.value.name=e),autocomplete:"off",placeholder:"唯一英文字符串",onChange:de},null,8,["modelValue"])])),_:1}),i(le,{prop:"path",style:{width:"30%"}},{label:d((()=>[u("span",Q,[R,i(te,{modelValue:re.value,"onUpdate:modelValue":l[3]||(l[3]=e=>re.value=e),style:{"margin-left":"12px",height:"auto"}},{default:d((()=>[n("添加参数")])),_:1},8,["modelValue"])])])),default:d((()=>[i(K,{modelValue:ie.value.path,"onUpdate:modelValue":l[4]||(l[4]=e=>ie.value.path=e),disabled:!re.value,autocomplete:"off",placeholder:"建议只在后方拼接参数"},null,8,["modelValue","disabled"])])),_:1}),i(le,{label:"是否隐藏",style:{width:"30%"}},{default:d((()=>[i(be,{modelValue:ie.value.hidden,"onUpdate:modelValue":l[5]||(l[5]=e=>ie.value.hidden=e),placeholder:"是否在列表隐藏"},{default:d((()=>[i(se,{value:!1,label:"否"}),i(se,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),i(le,{label:"父节点ID",style:{width:"30%"}},{default:d((()=>[i(_e,{modelValue:ie.value.parentId,"onUpdate:modelValue":l[6]||(l[6]=e=>ie.value.parentId=e),style:{width:"100%"},disabled:!we.value,options:fe.value,props:{checkStrictly:!0,label:"title",value:"ID",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])])),_:1}),i(le,{label:"文件路径",prop:"component",style:{width:"60%"}},{default:d((()=>[i(K,{modelValue:ie.value.component,"onUpdate:modelValue":l[7]||(l[7]=e=>ie.value.component=e),autocomplete:"off",placeholder:"页面:view/xxx/xx.vue 插件:plugin/xx/xx.vue",onBlur:ue},null,8,["modelValue"]),W,i(a,{style:{"margin-top":"4px"},onClick:l[8]||(l[8]=e=>ie.value.component="view/routerHolder.vue")},{default:d((()=>[n("点我设置")])),_:1})])),_:1}),i(le,{label:"展示名称",prop:"meta.title",style:{width:"30%"}},{default:d((()=>[i(K,{modelValue:ie.value.meta.title,"onUpdate:modelValue":l[9]||(l[9]=e=>ie.value.meta.title=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),i(le,{label:"图标",prop:"meta.icon",style:{width:"30%"}},{default:d((()=>[i(z,{meta:ie.value.meta,style:{width:"100%"}},null,8,["meta"])])),_:1}),i(le,{label:"排序标记",prop:"sort",style:{width:"30%"}},{default:d((()=>[i(K,{modelValue:ie.value.sort,"onUpdate:modelValue":l[10]||(l[10]=e=>ie.value.sort=e),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])])),_:1}),i(le,{prop:"meta.activeName",style:{width:"30%"}},{label:d((()=>[u("div",null,[X,i(ge,{content:"注：当到达此路由时候，指定左侧菜单指定name会处于活跃状态（亮起），可为空，为空则为本路由Name。",placement:"top",effect:"light"},{default:d((()=>[i(h,null,{default:d((()=>[i(p(f))])),_:1})])),_:1})])])),default:d((()=>[i(K,{modelValue:ie.value.meta.activeName,"onUpdate:modelValue":l[11]||(l[11]=e=>ie.value.meta.activeName=e),placeholder:ie.value.name,autocomplete:"off"},null,8,["modelValue","placeholder"])])),_:1}),i(le,{label:"KeepAlive",prop:"meta.keepAlive",style:{width:"30%"}},{default:d((()=>[i(be,{modelValue:ie.value.meta.keepAlive,"onUpdate:modelValue":l[12]||(l[12]=e=>ie.value.meta.keepAlive=e),style:{width:"100%"},placeholder:"是否keepAlive缓存页面"},{default:d((()=>[i(se,{value:!1,label:"否"}),i(se,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),i(le,{label:"CloseTab",prop:"meta.closeTab",style:{width:"30%"}},{default:d((()=>[i(be,{modelValue:ie.value.meta.closeTab,"onUpdate:modelValue":l[13]||(l[13]=e=>ie.value.meta.closeTab=e),style:{width:"100%"},placeholder:"是否自动关闭tab"},{default:d((()=>[i(se,{value:!1,label:"否"}),i(se,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),i(le,{style:{width:"30%"}},{label:d((()=>[u("div",null,[Y,i(ge,{content:"此项选择为是，则不会展示左侧菜单以及顶部信息。",placement:"top",effect:"light"},{default:d((()=>[i(h,null,{default:d((()=>[i(p(f))])),_:1})])),_:1})])])),default:d((()=>[i(be,{modelValue:ie.value.meta.defaultMenu,"onUpdate:modelValue":l[14]||(l[14]=e=>ie.value.meta.defaultMenu=e),style:{width:"100%"},placeholder:"是否为基础页面"},{default:d((()=>[i(se,{value:!1,label:"否"}),i(se,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])):v("",!0),u("div",null,[u("div",Z,[i(a,{type:"primary",icon:"edit",onClick:l[15]||(l[15]=e=>{return(l=ie.value).parameters||(l.parameters=[]),void l.parameters.push({type:"query",key:"",value:""});var l})},{default:d((()=>[n("新增菜单参数")])),_:1}),i(h,{class:"cursor-pointer",onClick:l[16]||(l[16]=e=>p(P)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=9&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:d((()=>[i(p(r))])),_:1})]),i(_,{data:ie.value.parameters,style:{width:"100%","margin-top":"12px"}},{default:d((()=>[i(B,{align:"left",prop:"type",label:"参数类型",width:"180"},{default:d((e=>[i(be,{modelValue:e.row.type,"onUpdate:modelValue":l=>e.row.type=l,placeholder:"请选择"},{default:d((()=>[i(se,{key:"query",value:"query",label:"query"}),i(se,{key:"params",value:"params",label:"params"})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),i(B,{align:"left",prop:"key",label:"参数key",width:"180"},{default:d((e=>[u("div",null,[i(K,{modelValue:e.row.key,"onUpdate:modelValue":l=>e.row.key=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),i(B,{align:"left",prop:"value",label:"参数值"},{default:d((e=>[u("div",null,[i(K,{modelValue:e.row.value,"onUpdate:modelValue":l=>e.row.value=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),i(B,{align:"left"},{default:d((e=>[u("div",null,[i(a,{type:"danger",icon:"delete",onClick:l=>{return a=ie.value.parameters,t=e.$index,void a.splice(t,1);var a,t}},{default:d((()=>[n("删除")])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),u("div",ee,[i(a,{type:"primary",icon:"edit",onClick:l[17]||(l[17]=e=>{return(l=ie.value).menuBtn||(l.menuBtn=[]),void l.menuBtn.push({name:"",desc:""});var l})},{default:d((()=>[n("新增可控按钮 ")])),_:1}),i(h,{class:"cursor-pointer",onClick:l[18]||(l[18]=e=>p(P)("https://www.gin-vue-admin.com/guide/web/button-auth.html"))},{default:d((()=>[i(p(f))])),_:1}),i(h,{class:"cursor-pointer",onClick:l[19]||(l[19]=e=>p(P)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=11&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:d((()=>[i(p(r))])),_:1})]),i(_,{data:ie.value.menuBtn,style:{width:"100%","margin-top":"12px"}},{default:d((()=>[i(B,{align:"left",prop:"name",label:"按钮名称",width:"180"},{default:d((e=>[u("div",null,[i(K,{modelValue:e.row.name,"onUpdate:modelValue":l=>e.row.name=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),i(B,{align:"left",prop:"name",label:"备注",width:"180"},{default:d((e=>[u("div",null,[i(K,{modelValue:e.row.desc,"onUpdate:modelValue":l=>e.row.desc=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),i(B,{align:"left"},{default:d((e=>[u("div",null,[i(a,{type:"danger",icon:"delete",onClick:l=>(async(e,l)=>{const a=e[l];if(0===a.ID)return void e.splice(l,1);0===(await G({id:a.ID})).code&&e.splice(l,1)})(ie.value.menuBtn,e.$index)},{default:d((()=>[n("删除")])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-097a54ac"]]);export{le as default};
