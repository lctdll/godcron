/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
import{C as e,az as s,R as a,D as r,ab as t,x as c,y as i,a as l,F as n,Y as p,aK as u,T as o,o as v,c as d,H as m,G as y,h as f,w as g,I as S,J as h,B as I,n as k,K as B,L as _,_ as w,m as z,O as E,e as C}from"./087AC4D233B64EB0index.f7794d3b.js";import{E as b}from"./087AC4D233B64EB0image-viewer.37983d33.js";const A=e({size:{type:[Number,String],values:s,default:"",validator:e=>a(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:r},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:t(String),default:"cover"}}),T={error:e=>e instanceof Event},j=["src","alt","srcset"],x=c({name:"ElAvatar"});const D=_(B(c({...x,props:A,emits:T,setup(e,{emit:s}){const r=e,t=i("avatar"),c=l(!1),B=n((()=>{const{size:e,icon:s,shape:a}=r,c=[t.b()];return p(e)&&c.push(t.m(e)),s&&c.push(t.m("icon")),a&&c.push(t.m(a)),c})),_=n((()=>{const{size:e}=r;return a(e)?t.cssVarBlock({size:u(e)||""}):void 0})),w=n((()=>({objectFit:r.fit})));function z(e){c.value=!0,s("error",e)}return o((()=>r.src),(()=>c.value=!1)),(e,s)=>(v(),d("span",{class:k(y(B)),style:m(y(_))},[!e.src&&!e.srcSet||c.value?e.icon?(v(),f(y(h),{key:1},{default:g((()=>[(v(),f(S(e.icon)))])),_:1})):I(e.$slots,"default",{key:2}):(v(),d("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:m(y(w)),onError:z},null,44,j))],6))}}),[["__file","avatar.vue"]])),q={class:"headerAvatar"},F=["src"],K=["src"],O=w(Object.assign({name:"CustomPic"},{__name:"index",props:{picType:{type:String,required:!1,default:"avatar"},picSrc:{type:String,required:!1,default:""},preview:{type:Boolean,default:!1}},setup(e){const s=e,a=l("/api/"),r=l("/assets/087AC4D233B64EB0noBody.745c3d16.png"),t=z(),c=n((()=>""===s.picSrc?""!==t.userInfo.headerImg&&"http"===t.userInfo.headerImg.slice(0,4)?t.userInfo.headerImg:a.value+t.userInfo.headerImg:""!==s.picSrc&&"http"===s.picSrc.slice(0,4)?s.picSrc:a.value+s.picSrc)),i=n((()=>s.picSrc&&"http"!==s.picSrc.slice(0,4)?a.value+s.picSrc:s.picSrc)),p=n((()=>s.preview?[i.value]:[]));return(s,a)=>{const l=D,n=b;return v(),d("span",q,["avatar"===e.picType?(v(),d(E,{key:0},[y(t).userInfo.headerImg?(v(),f(l,{key:0,size:30,src:c.value},null,8,["src"])):(v(),f(l,{key:1,size:30,src:r.value},null,8,["src"]))],64)):C("",!0),"img"===e.picType?(v(),d(E,{key:1},[y(t).userInfo.headerImg?(v(),d("img",{key:0,src:c.value,class:"avatar"},null,8,F)):(v(),d("img",{key:1,src:r.value,class:"avatar"},null,8,K))],64)):C("",!0),"file"===e.picType?(v(),f(n,{key:2,src:i.value,class:"file","preview-src-list":p.value,"preview-teleported":!0},null,8,["src","preview-src-list"])):C("",!0)])}}}),[["__scopeId","data-v-1c606aa1"]]);export{O as C};
