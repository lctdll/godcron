/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
import{b0 as e,b4 as a,aY as l,Y as t,R as n,aB as o,a8 as u,F as s,aa as i,cl as d,aS as r,T as c,aD as v,aj as b,a0 as m,a as h,aA as p,cm as f,aN as x,aO as k,aC as g,aT as C,cn as y,x as L,S as B,y as V,o as S,h as E,w as I,b as F,n as z,G as N,a2 as D,c as w,ai as O,a3 as U,co as _,B as G,O as j,g as A,t as R,e as $,I as K,K as M,H as T,C as Y,ab as q,z as H,cp as P,ag as J,L as Q,M as W}from"./087AC4D233B64EB0index.f7794d3b.js";import{i as X}from"./087AC4D233B64EB0isEqual.e4d5ab49.js";const Z={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:e,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...a(["ariaControls"])},ee={[l]:e=>t(e)||n(e)||o(e),change:e=>t(e)||n(e)||o(e)},ae=Symbol("checkboxGroupContextKey"),le=(e,{model:a,isLimitExceeded:l,hasOwnLabel:t,isDisabled:n,isLabeledByFormItem:o})=>{const i=u(ae,void 0),{formItem:d}=r(),{emit:h}=m();function p(a){var l,t,n,o;return[!0,e.trueValue,e.trueLabel].includes(a)?null==(t=null!=(l=e.trueValue)?l:e.trueLabel)||t:null!=(o=null!=(n=e.falseValue)?n:e.falseLabel)&&o}const f=s((()=>(null==i?void 0:i.validateEvent)||e.validateEvent));return c((()=>e.modelValue),(()=>{f.value&&(null==d||d.validate("change").catch((e=>v())))})),{handleChange:function(e){if(l.value)return;const a=e.target;h("change",p(a.checked),e)},onClickRoot:async function(u){if(!l.value&&!t.value&&!n.value&&o.value){u.composedPath().some((e=>"LABEL"===e.tagName))||(a.value=p([!1,e.falseValue,e.falseLabel].includes(a.value)),await b(),function(e,a){h("change",p(e),a)}(a.value,u))}}}},te=(e,a)=>{const{formItem:t}=r(),{model:n,isGroup:c,isLimitExceeded:v}=(e=>{const a=h(!1),{emit:t}=m(),n=u(ae,void 0),o=s((()=>!1===i(n))),d=h(!1),r=s({get(){var l,t;return o.value?null==(l=null==n?void 0:n.modelValue)?void 0:l.value:null!=(t=e.modelValue)?t:a.value},set(e){var u,s;o.value&&p(e)?(d.value=void 0!==(null==(u=null==n?void 0:n.max)?void 0:u.value)&&e.length>(null==n?void 0:n.max.value)&&e.length>r.value.length,!1===d.value&&(null==(s=null==n?void 0:n.changeEvent)||s.call(n,e))):(t(l,e),a.value=e)}});return{model:r,isGroup:o,isLimitExceeded:d}})(e),{isFocused:b,isChecked:L,checkboxButtonSize:B,checkboxSize:V,hasOwnLabel:S,actualValue:E}=((e,a,{model:l})=>{const t=u(ae,void 0),n=h(!1),i=s((()=>f(e.value)?e.label:e.value)),d=s((()=>{const a=l.value;return o(a)?a:p(a)?x(i.value)?a.map(k).some((e=>X(e,i.value))):a.map(k).includes(i.value):null!=a?a===e.trueValue||a===e.trueLabel:!!a}));return{checkboxButtonSize:g(s((()=>{var e;return null==(e=null==t?void 0:t.size)?void 0:e.value})),{prop:!0}),isChecked:d,isFocused:n,checkboxSize:g(s((()=>{var e;return null==(e=null==t?void 0:t.size)?void 0:e.value}))),hasOwnLabel:s((()=>!!a.default||!f(i.value))),actualValue:i}})(e,a,{model:n}),{isDisabled:I}=(({model:e,isChecked:a})=>{const l=u(ae,void 0),t=s((()=>{var t,n;const o=null==(t=null==l?void 0:l.max)?void 0:t.value,u=null==(n=null==l?void 0:l.min)?void 0:n.value;return!i(o)&&e.value.length>=o&&!a.value||!i(u)&&e.value.length<=u&&a.value}));return{isDisabled:d(s((()=>(null==l?void 0:l.disabled.value)||t.value))),isLimitDisabled:t}})({model:n,isChecked:L}),{inputId:F,isLabeledByFormItem:z}=C(e,{formItemContext:t,disableIdGeneration:S,disableIdManagement:c}),{handleChange:N,onClickRoot:D}=le(e,{model:n,isLimitExceeded:v,hasOwnLabel:S,isDisabled:I,isLabeledByFormItem:z});var w,O;return e.checked&&(p(n.value)&&!n.value.includes(E.value)?n.value.push(E.value):n.value=null==(O=null!=(w=e.trueValue)?w:e.trueLabel)||O),y({from:"controls",replacement:"aria-controls",version:"2.8.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},s((()=>!!e.controls))),y({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},s((()=>c.value&&f(e.value)))),y({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},s((()=>!!e.trueLabel))),y({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},s((()=>!!e.falseLabel))),{inputId:F,isLabeledByFormItem:z,isChecked:L,isDisabled:I,isFocused:b,checkboxButtonSize:B,checkboxSize:V,hasOwnLabel:S,model:n,actualValue:E,handleChange:N,onClickRoot:D}},ne=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],oe=["id","indeterminate","disabled","value","name","tabindex"],ue=L({name:"ElCheckbox"});var se=M(L({...ue,props:Z,emits:ee,setup(e){const a=e,l=B(),{inputId:t,isLabeledByFormItem:n,isChecked:o,isDisabled:u,isFocused:i,checkboxSize:d,hasOwnLabel:r,model:c,actualValue:v,handleChange:b,onClickRoot:m}=te(a,l),h=V("checkbox"),p=s((()=>[h.b(),h.m(d.value),h.is("disabled",u.value),h.is("bordered",a.border),h.is("checked",o.value)])),f=s((()=>[h.e("input"),h.is("disabled",u.value),h.is("checked",o.value),h.is("indeterminate",a.indeterminate),h.is("focus",i.value)]));return(e,a)=>(S(),E(K(!N(r)&&N(n)?"span":"label"),{class:z(N(p)),"aria-controls":e.indeterminate?e.controls||e.ariaControls:null,onClick:N(m)},{default:I((()=>{var l,n;return[F("span",{class:z(N(f))},[e.trueValue||e.falseValue||e.trueLabel||e.falseLabel?D((S(),w("input",{key:0,id:N(t),"onUpdate:modelValue":a[0]||(a[0]=e=>O(c)?c.value=e:null),class:z(N(h).e("original")),type:"checkbox",indeterminate:e.indeterminate,name:e.name,tabindex:e.tabindex,disabled:N(u),"true-value":null!=(l=e.trueValue)?l:e.trueLabel,"false-value":null!=(n=e.falseValue)?n:e.falseLabel,onChange:a[1]||(a[1]=(...e)=>N(b)&&N(b)(...e)),onFocus:a[2]||(a[2]=e=>i.value=!0),onBlur:a[3]||(a[3]=e=>i.value=!1),onClick:a[4]||(a[4]=U((()=>{}),["stop"]))},null,42,ne)),[[_,N(c)]]):D((S(),w("input",{key:1,id:N(t),"onUpdate:modelValue":a[5]||(a[5]=e=>O(c)?c.value=e:null),class:z(N(h).e("original")),type:"checkbox",indeterminate:e.indeterminate,disabled:N(u),value:N(v),name:e.name,tabindex:e.tabindex,onChange:a[6]||(a[6]=(...e)=>N(b)&&N(b)(...e)),onFocus:a[7]||(a[7]=e=>i.value=!0),onBlur:a[8]||(a[8]=e=>i.value=!1),onClick:a[9]||(a[9]=U((()=>{}),["stop"]))},null,42,oe)),[[_,N(c)]]),F("span",{class:z(N(h).e("inner"))},null,2)],2),N(r)?(S(),w("span",{key:0,class:z(N(h).e("label"))},[G(e.$slots,"default"),e.$slots.default?$("v-if",!0):(S(),w(j,{key:0},[A(R(e.label),1)],64))],2)):$("v-if",!0)]})),_:3},8,["class","aria-controls","onClick"]))}}),[["__file","checkbox.vue"]]);const ie=["name","tabindex","disabled","true-value","false-value"],de=["name","tabindex","disabled","value"],re=L({name:"ElCheckboxButton"});var ce=M(L({...re,props:Z,emits:ee,setup(e){const a=e,l=B(),{isFocused:t,isChecked:n,isDisabled:o,checkboxButtonSize:i,model:d,actualValue:r,handleChange:c}=te(a,l),v=u(ae,void 0),b=V("checkbox"),m=s((()=>{var e,a,l,t;const n=null!=(a=null==(e=null==v?void 0:v.fill)?void 0:e.value)?a:"";return{backgroundColor:n,borderColor:n,color:null!=(t=null==(l=null==v?void 0:v.textColor)?void 0:l.value)?t:"",boxShadow:n?"-1px 0 0 0 ".concat(n):void 0}})),h=s((()=>[b.b("button"),b.bm("button",i.value),b.is("disabled",o.value),b.is("checked",n.value),b.is("focus",t.value)]));return(e,a)=>{var l,u;return S(),w("label",{class:z(N(h))},[e.trueValue||e.falseValue||e.trueLabel||e.falseLabel?D((S(),w("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=e=>O(d)?d.value=e:null),class:z(N(b).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:N(o),"true-value":null!=(l=e.trueValue)?l:e.trueLabel,"false-value":null!=(u=e.falseValue)?u:e.falseLabel,onChange:a[1]||(a[1]=(...e)=>N(c)&&N(c)(...e)),onFocus:a[2]||(a[2]=e=>t.value=!0),onBlur:a[3]||(a[3]=e=>t.value=!1),onClick:a[4]||(a[4]=U((()=>{}),["stop"]))},null,42,ie)),[[_,N(d)]]):D((S(),w("input",{key:1,"onUpdate:modelValue":a[5]||(a[5]=e=>O(d)?d.value=e:null),class:z(N(b).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:N(o),value:N(r),onChange:a[6]||(a[6]=(...e)=>N(c)&&N(c)(...e)),onFocus:a[7]||(a[7]=e=>t.value=!0),onBlur:a[8]||(a[8]=e=>t.value=!1),onClick:a[9]||(a[9]=U((()=>{}),["stop"]))},null,42,de)),[[_,N(d)]]),e.$slots.default||e.label?(S(),w("span",{key:2,class:z(N(b).be("button","inner")),style:T(N(n)?N(m):void 0)},[G(e.$slots,"default",{},(()=>[A(R(e.label),1)]))],6)):$("v-if",!0)],2)}}}),[["__file","checkbox-button.vue"]]);const ve=Y({modelValue:{type:q(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:e,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...a(["ariaLabel"])}),be={[l]:e=>p(e),change:e=>p(e)},me=L({name:"ElCheckboxGroup"});var he=M(L({...me,props:ve,emits:be,setup(e,{emit:a}){const t=e,n=V("checkbox"),{formItem:o}=r(),{inputId:u,isLabeledByFormItem:i}=C(t,{formItemContext:o}),d=async e=>{a(l,e),await b(),a("change",e)},m=s({get:()=>t.modelValue,set(e){d(e)}});return H(ae,{...P(J(t),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:d}),y({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-checkbox-group",ref:"https://element-plus.org/en-US/component/checkbox.html"},s((()=>!!t.label))),c((()=>t.modelValue),(()=>{t.validateEvent&&(null==o||o.validate("change").catch((e=>v())))})),(e,a)=>{var l;return S(),E(K(e.tag),{id:N(u),class:z(N(n).b("group")),role:"group","aria-label":N(i)?void 0:e.label||e.ariaLabel||"checkbox-group","aria-labelledby":N(i)?null==(l=N(o))?void 0:l.labelId:void 0},{default:I((()=>[G(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}}),[["__file","checkbox-group.vue"]]);const pe=Q(se,{CheckboxButton:ce,CheckboxGroup:he});W(ce);const fe=W(he);export{pe as E,fe as a};
