/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
import{C as e,c3 as a,cV as t,x as l,S as o,y as n,a as s,F as r,o as i,h as c,w as u,a2 as d,b as h,n as v,G as f,J as p,I as m,e as b,c as g,B as y,g as k,t as _,O as C,d as w,a5 as x,a6 as B,K as V,cW as E,L as M,ab as S,aW as A,U as j,V as F,T as D,aK as N,a0 as L,H as I,b0 as W,b4 as U,aY as H,Y as K,bn as T,a$ as O,ce as R,a8 as z,ah as X,P as $,a1 as q,aS as P,aC as Y,cl as G,aT as J,aR as Z,r as Q,cn as ee,aj as ae,z as te,q as le,l as oe,E as ne,bo as se,b2 as re,bv as ie,aD as ce,aZ as ue,R as de,aI as he,cX as ve,W as fe,aN as pe,_ as me,ae as be,af as ge,cY as ye,ad as ke,j as _e,p as Ce,i as we}from"./087AC4D233B64EB0index.f7794d3b.js";import{E as xe}from"./087AC4D233B64EB0drawer.178042b4.js";import"./087AC4D233B64EB0overlay.ee491930.js";/* empty css                               *//* empty css                            *//* empty css                              */import{E as Be}from"./087AC4D233B64EB0input-number.d6620c63.js";import{E as Ve}from"./087AC4D233B64EB0switch.060d4277.js";import{u as Ee,E as Me}from"./087AC4D233B64EB0index.180a68c4.js";import{g as Se}from"./087AC4D233B64EB0position.541e0bb6.js";import{C as Ae}from"./087AC4D233B64EB0index.21f2f826.js";import{d as je}from"./087AC4D233B64EB0debounce.9b1e718d.js";import{E as Fe}from"./087AC4D233B64EB0index.18ebb74e.js";import"./087AC4D233B64EB0index.50b81e49.js";const De=e({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:a(t),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:["light","dark"],default:"light"}}),Ne={close:e=>e instanceof MouseEvent},Le=l({name:"ElAlert"});const Ie=M(V(l({...Le,props:De,emits:Ne,setup(e,{emit:a}){const l=e,{Close:V}=E,M=o(),S=n("alert"),A=s(!0),j=r((()=>t[l.type])),F=r((()=>[S.e("icon"),{[S.is("big")]:!!l.description||!!M.default}])),D=r((()=>({"with-description":l.description||M.default}))),N=e=>{A.value=!1,a("close",e)};return(e,a)=>(i(),c(B,{name:f(S).b("fade"),persisted:""},{default:u((()=>[d(h("div",{class:v([f(S).b(),f(S).m(e.type),f(S).is("center",e.center),f(S).is(e.effect)]),role:"alert"},[e.showIcon&&f(j)?(i(),c(f(p),{key:0,class:v(f(F))},{default:u((()=>[(i(),c(m(f(j))))])),_:1},8,["class"])):b("v-if",!0),h("div",{class:v(f(S).e("content"))},[e.title||e.$slots.title?(i(),g("span",{key:0,class:v([f(S).e("title"),f(D)])},[y(e.$slots,"title",{},(()=>[k(_(e.title),1)]))],2)):b("v-if",!0),e.$slots.default||e.description?(i(),g("p",{key:1,class:v(f(S).e("description"))},[y(e.$slots,"default",{},(()=>[k(_(e.description),1)]))],2)):b("v-if",!0),e.closable?(i(),g(C,{key:2},[e.closeText?(i(),g("div",{key:0,class:v([f(S).e("close-btn"),f(S).is("customed")]),onClick:N},_(e.closeText),3)):(i(),c(f(p),{key:1,class:v(f(S).e("close-btn")),onClick:N},{default:u((()=>[w(f(V))])),_:1},8,["class"]))],64)):b("v-if",!0)],2)],2),[[x,A.value]])])),_:3},8,["name"]))}}),[["__file","alert.vue"]])),We=e({color:{type:S(Object),required:!0},vertical:{type:Boolean,default:!1}});let Ue=!1;function He(e,a){if(!A)return;const t=function(e){var t;null==(t=a.drag)||t.call(a,e)},l=function(e){var o;document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",l),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",l),document.onselectstart=null,document.ondragstart=null,Ue=!1,null==(o=a.end)||o.call(a,e)},o=function(e){var o;Ue||(e.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",t),document.addEventListener("mouseup",l),document.addEventListener("touchmove",t),document.addEventListener("touchend",l),Ue=!0,null==(o=a.start)||o.call(a,e))};e.addEventListener("mousedown",o),e.addEventListener("touchstart",o)}const Ke=(e,{bar:a,thumb:t,handleDrag:l})=>{const o=L(),i=n("color-alpha-slider"),c=s(0),u=s(0),d=s();function h(){c.value=function(){if(!t.value)return 0;if(e.vertical)return 0;const a=o.vnode.el,l=e.color.get("alpha");return a?Math.round(l*(a.offsetWidth-t.value.offsetWidth/2)/100):0}(),u.value=function(){if(!t.value)return 0;const a=o.vnode.el;if(!e.vertical)return 0;const l=e.color.get("alpha");return a?Math.round(l*(a.offsetHeight-t.value.offsetHeight/2)/100):0}(),d.value=function(){if(e.color&&e.color.value){const{r:a,g:t,b:l}=e.color.toRgb();return"linear-gradient(to right, rgba(".concat(a,", ").concat(t,", ").concat(l,", 0) 0%, rgba(").concat(a,", ").concat(t,", ").concat(l,", 1) 100%)")}return""}()}F((()=>{if(!a.value||!t.value)return;const e={drag:e=>{l(e)},end:e=>{l(e)}};He(a.value,e),He(t.value,e),h()})),D((()=>e.color.get("alpha")),(()=>h())),D((()=>e.color.value),(()=>h()));const v=r((()=>[i.b(),i.is("vertical",e.vertical)])),f=r((()=>i.e("bar"))),p=r((()=>i.e("thumb")));return{rootKls:v,barKls:f,barStyle:r((()=>({background:d.value}))),thumbKls:p,thumbStyle:r((()=>({left:N(c.value),top:N(u.value)}))),update:h}},Te=l({name:"ElColorAlphaSlider"});var Oe=V(l({...Te,props:We,setup(e,{expose:a}){const t=e,{bar:l,thumb:o,handleDrag:n,handleClick:s}=(e=>{const a=L(),t=j(),l=j();function o(o){if(!l.value||!t.value)return;const n=a.vnode.el.getBoundingClientRect(),{clientX:s,clientY:r}=Se(o);if(e.vertical){let a=r-n.top;a=Math.max(t.value.offsetHeight/2,a),a=Math.min(a,n.height-t.value.offsetHeight/2),e.color.set("alpha",Math.round((a-t.value.offsetHeight/2)/(n.height-t.value.offsetHeight)*100))}else{let a=s-n.left;a=Math.max(t.value.offsetWidth/2,a),a=Math.min(a,n.width-t.value.offsetWidth/2),e.color.set("alpha",Math.round((a-t.value.offsetWidth/2)/(n.width-t.value.offsetWidth)*100))}}return{thumb:t,bar:l,handleDrag:o,handleClick:function(e){e.target!==t.value&&o(e)}}})(t),{rootKls:r,barKls:c,barStyle:u,thumbKls:d,thumbStyle:p,update:m}=Ke(t,{bar:l,thumb:o,handleDrag:n});return a({update:m,bar:l,thumb:o}),(e,a)=>(i(),g("div",{class:v(f(r))},[h("div",{ref_key:"bar",ref:l,class:v(f(c)),style:I(f(u)),onClick:a[0]||(a[0]=(...e)=>f(s)&&f(s)(...e))},null,6),h("div",{ref_key:"thumb",ref:o,class:v(f(d)),style:I(f(p))},null,6)],2))}}),[["__file","alpha-slider.vue"]]);var Re=V(l({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(e){const a=n("color-hue-slider"),t=L(),l=s(),o=s(),i=s(0),c=s(0),u=r((()=>e.color.get("hue")));function d(a){if(!o.value||!l.value)return;const n=t.vnode.el.getBoundingClientRect(),{clientX:s,clientY:r}=Se(a);let i;if(e.vertical){let e=r-n.top;e=Math.min(e,n.height-l.value.offsetHeight/2),e=Math.max(l.value.offsetHeight/2,e),i=Math.round((e-l.value.offsetHeight/2)/(n.height-l.value.offsetHeight)*360)}else{let e=s-n.left;e=Math.min(e,n.width-l.value.offsetWidth/2),e=Math.max(l.value.offsetWidth/2,e),i=Math.round((e-l.value.offsetWidth/2)/(n.width-l.value.offsetWidth)*360)}e.color.set("hue",i)}function h(){i.value=function(){if(!l.value)return 0;const a=t.vnode.el;if(e.vertical)return 0;const o=e.color.get("hue");return a?Math.round(o*(a.offsetWidth-l.value.offsetWidth/2)/360):0}(),c.value=function(){if(!l.value)return 0;const a=t.vnode.el;if(!e.vertical)return 0;const o=e.color.get("hue");return a?Math.round(o*(a.offsetHeight-l.value.offsetHeight/2)/360):0}()}return D((()=>u.value),(()=>{h()})),F((()=>{if(!o.value||!l.value)return;const e={drag:e=>{d(e)},end:e=>{d(e)}};He(o.value,e),He(l.value,e),h()})),{bar:o,thumb:l,thumbLeft:i,thumbTop:c,hueValue:u,handleClick:function(e){e.target!==l.value&&d(e)},update:h,ns:a}}}),[["render",function(e,a,t,l,o,n){return i(),g("div",{class:v([e.ns.b(),e.ns.is("vertical",e.vertical)])},[h("div",{ref:"bar",class:v(e.ns.e("bar")),onClick:a[0]||(a[0]=(...a)=>e.handleClick&&e.handleClick(...a))},null,2),h("div",{ref:"thumb",class:v(e.ns.e("thumb")),style:I({left:e.thumbLeft+"px",top:e.thumbTop+"px"})},null,6)],2)}],["__file","hue-slider.vue"]]);const ze=e({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:W,popperClass:{type:String,default:""},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},teleported:Ee.teleported,predefine:{type:S(Array)},validateEvent:{type:Boolean,default:!0},...U(["ariaLabel"])}),Xe={[H]:e=>K(e)||T(e),[O]:e=>K(e)||T(e),activeChange:e=>K(e)||T(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent},$e=Symbol("colorPickerContextKey"),qe=function(e,a,t){return[e,a*t/((e=(2-a)*t)<1?e:2-e)||0,e/2]},Pe=function(e,a){var t;"string"==typeof(t=e)&&t.includes(".")&&1===Number.parseFloat(t)&&(e="100%");const l=function(e){return"string"==typeof e&&e.includes("%")}(e);return e=Math.min(a,Math.max(0,Number.parseFloat("".concat(e)))),l&&(e=Number.parseInt("".concat(e*a),10)/100),Math.abs(e-a)<1e-6?1:e%a/Number.parseFloat(a)},Ye={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},Ge=e=>{e=Math.min(Math.round(e),255);const a=Math.floor(e/16),t=e%16;return"".concat(Ye[a]||a).concat(Ye[t]||t)},Je=function({r:e,g:a,b:t}){return Number.isNaN(+e)||Number.isNaN(+a)||Number.isNaN(+t)?"":"#".concat(Ge(e)).concat(Ge(a)).concat(Ge(t))},Ze={A:10,B:11,C:12,D:13,E:14,F:15},Qe=function(e){return 2===e.length?16*(Ze[e[0].toUpperCase()]||+e[0])+(Ze[e[1].toUpperCase()]||+e[1]):Ze[e[1].toUpperCase()]||+e[1]},ea=(e,a,t)=>{e=Pe(e,255),a=Pe(a,255),t=Pe(t,255);const l=Math.max(e,a,t),o=Math.min(e,a,t);let n;const s=l,r=l-o,i=0===l?0:r/l;if(l===o)n=0;else{switch(l){case e:n=(a-t)/r+(a<t?6:0);break;case a:n=(t-e)/r+2;break;case t:n=(e-a)/r+4}n/=6}return{h:360*n,s:100*i,v:100*s}},aa=function(e,a,t){e=6*Pe(e,360),a=Pe(a,100),t=Pe(t,100);const l=Math.floor(e),o=e-l,n=t*(1-a),s=t*(1-o*a),r=t*(1-(1-o)*a),i=l%6,c=[t,s,n,n,r,t][i],u=[r,t,t,s,n,n][i],d=[n,n,r,t,t,s][i];return{r:Math.round(255*c),g:Math.round(255*u),b:Math.round(255*d)}};class ta{constructor(e={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const a in e)R(e,a)&&(this[a]=e[a]);e.value?this.fromString(e.value):this.doOnChange()}set(e,a){if(1!==arguments.length||"object"!=typeof e)this["_".concat(e)]=a,this.doOnChange();else for(const t in e)R(e,t)&&this.set(t,e[t])}get(e){return"alpha"===e?Math.floor(this["_".concat(e)]):this["_".concat(e)]}toRgb(){return aa(this._hue,this._saturation,this._value)}fromString(e){if(!e)return this._hue=0,this._saturation=100,this._value=100,void this.doOnChange();const a=(e,a,t)=>{this._hue=Math.max(0,Math.min(360,e)),this._saturation=Math.max(0,Math.min(100,a)),this._value=Math.max(0,Math.min(100,t)),this.doOnChange()};if(e.includes("hsl")){const t=e.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter((e=>""!==e)).map(((e,a)=>a>2?Number.parseFloat(e):Number.parseInt(e,10)));if(4===t.length?this._alpha=100*Number.parseFloat(t[3]):3===t.length&&(this._alpha=100),t.length>=3){const{h:e,s:l,v:o}=function(e,a,t){t/=100;let l=a/=100;const o=Math.max(t,.01);return a*=(t*=2)<=1?t:2-t,l*=o<=1?o:2-o,{h:e,s:100*(0===t?2*l/(o+l):2*a/(t+a)),v:(t+a)/2*100}}(t[0],t[1],t[2]);a(e,l,o)}}else if(e.includes("hsv")){const t=e.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter((e=>""!==e)).map(((e,a)=>a>2?Number.parseFloat(e):Number.parseInt(e,10)));4===t.length?this._alpha=100*Number.parseFloat(t[3]):3===t.length&&(this._alpha=100),t.length>=3&&a(t[0],t[1],t[2])}else if(e.includes("rgb")){const t=e.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter((e=>""!==e)).map(((e,a)=>a>2?Number.parseFloat(e):Number.parseInt(e,10)));if(4===t.length?this._alpha=100*Number.parseFloat(t[3]):3===t.length&&(this._alpha=100),t.length>=3){const{h:e,s:l,v:o}=ea(t[0],t[1],t[2]);a(e,l,o)}}else if(e.includes("#")){const t=e.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(t))return;let l,o,n;3===t.length?(l=Qe(t[0]+t[0]),o=Qe(t[1]+t[1]),n=Qe(t[2]+t[2])):6!==t.length&&8!==t.length||(l=Qe(t.slice(0,2)),o=Qe(t.slice(2,4)),n=Qe(t.slice(4,6))),8===t.length?this._alpha=Qe(t.slice(6))/255*100:3!==t.length&&6!==t.length||(this._alpha=100);const{h:s,s:r,v:i}=ea(l,o,n);a(s,r,i)}}compare(e){return Math.abs(e._hue-this._hue)<2&&Math.abs(e._saturation-this._saturation)<1&&Math.abs(e._value-this._value)<1&&Math.abs(e._alpha-this._alpha)<1}doOnChange(){const{_hue:e,_saturation:a,_value:t,_alpha:l,format:o}=this;if(this.enableAlpha)switch(o){case"hsl":{const l=qe(e,a/100,t/100);this.value="hsla(".concat(e,", ").concat(Math.round(100*l[1]),"%, ").concat(Math.round(100*l[2]),"%, ").concat(this.get("alpha")/100,")");break}case"hsv":this.value="hsva(".concat(e,", ").concat(Math.round(a),"%, ").concat(Math.round(t),"%, ").concat(this.get("alpha")/100,")");break;case"hex":this.value="".concat(Je(aa(e,a,t))).concat(Ge(255*l/100));break;default:{const{r:l,g:o,b:n}=aa(e,a,t);this.value="rgba(".concat(l,", ").concat(o,", ").concat(n,", ").concat(this.get("alpha")/100,")")}}else switch(o){case"hsl":{const l=qe(e,a/100,t/100);this.value="hsl(".concat(e,", ").concat(Math.round(100*l[1]),"%, ").concat(Math.round(100*l[2]),"%)");break}case"hsv":this.value="hsv(".concat(e,", ").concat(Math.round(a),"%, ").concat(Math.round(t),"%)");break;case"rgb":{const{r:l,g:o,b:n}=aa(e,a,t);this.value="rgb(".concat(l,", ").concat(o,", ").concat(n,")");break}default:this.value=Je(aa(e,a,t))}}}const la=l({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0}},setup(e){const a=n("color-predefine"),{currentColor:t}=z($e),l=s(o(e.colors,e.color));function o(e,a){return e.map((e=>{const t=new ta;return t.enableAlpha=!0,t.format="rgba",t.fromString(e),t.selected=t.value===a.value,t}))}return D((()=>t.value),(e=>{const a=new ta;a.fromString(e),l.value.forEach((e=>{e.selected=a.compare(e)}))})),X((()=>{l.value=o(e.colors,e.color)})),{rgbaColors:l,handleSelect:function(a){e.color.fromString(e.colors[a])},ns:a}}}),oa=["onClick"];var na=V(la,[["render",function(e,a,t,l,o,n){return i(),g("div",{class:v(e.ns.b())},[h("div",{class:v(e.ns.e("colors"))},[(i(!0),g(C,null,$(e.rgbaColors,((a,t)=>(i(),g("div",{key:e.colors[t],class:v([e.ns.e("color-selector"),e.ns.is("alpha",a._alpha<100),{selected:a.selected}]),onClick:a=>e.handleSelect(t)},[h("div",{style:I({backgroundColor:a.value})},null,4)],10,oa)))),128))],2)],2)}],["__file","predefine.vue"]]);const sa=l({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(e){const a=n("color-svpanel"),t=L(),l=s(0),o=s(0),i=s("hsl(0, 100%, 50%)"),c=r((()=>({hue:e.color.get("hue"),value:e.color.get("value")})));function u(){const a=e.color.get("saturation"),n=e.color.get("value"),s=t.vnode.el,{clientWidth:r,clientHeight:c}=s;o.value=a*r/100,l.value=(100-n)*c/100,i.value="hsl(".concat(e.color.get("hue"),", 100%, 50%)")}function d(a){const n=t.vnode.el.getBoundingClientRect(),{clientX:s,clientY:r}=Se(a);let i=s-n.left,c=r-n.top;i=Math.max(0,i),i=Math.min(i,n.width),c=Math.max(0,c),c=Math.min(c,n.height),o.value=i,l.value=c,e.color.set({saturation:i/n.width*100,value:100-c/n.height*100})}return D((()=>c.value),(()=>{u()})),F((()=>{He(t.vnode.el,{drag:e=>{d(e)},end:e=>{d(e)}}),u()})),{cursorTop:l,cursorLeft:o,background:i,colorValue:c,handleDrag:d,update:u,ns:a}}}),ra=[h("div",null,null,-1)];var ia=V(sa,[["render",function(e,a,t,l,o,n){return i(),g("div",{class:v(e.ns.b()),style:I({backgroundColor:e.background})},[h("div",{class:v(e.ns.e("white"))},null,2),h("div",{class:v(e.ns.e("black"))},null,2),h("div",{class:v(e.ns.e("cursor")),style:I({top:e.cursorTop+"px",left:e.cursorLeft+"px"})},ra,6)],6)}],["__file","sv-panel.vue"]]);const ca=["onKeydown"],ua=["id","aria-label","aria-labelledby","aria-description","aria-disabled","tabindex"],da=l({name:"ElColorPicker"});const ha=M(V(l({...da,props:ze,emits:Xe,setup(e,{expose:a,emit:t}){const l=e,{t:o}=q(),m=n("color"),{formItem:y}=P(),C=Y(),B=G(),{inputId:V,isLabeledByFormItem:E}=J(l,{formItemContext:y}),M=s(),S=s(),A=s(),j=s(),N=s(),L=s(),{isFocused:W,handleFocus:U,handleBlur:K}=Z(N,{beforeBlur(e){var a;return null==(a=j.value)?void 0:a.isFocusInsideContent(e)},afterBlur(){me(!1),ke()}}),T=e=>{if(B.value)return Se();U(e)};let O=!0;const R=Q(new ta({enableAlpha:l.showAlpha,format:l.colorFormat||"",value:l.modelValue})),z=s(!1),X=s(!1),$=s(""),de=r((()=>l.modelValue||X.value?function(e,a){if(!(e instanceof ta))throw new TypeError("color should be instance of _color Class");const{r:t,g:l,b:o}=e.toRgb();return a?"rgba(".concat(t,", ").concat(l,", ").concat(o,", ").concat(e.get("alpha")/100,")"):"rgb(".concat(t,", ").concat(l,", ").concat(o,")")}(R,l.showAlpha):"transparent")),he=r((()=>l.modelValue||X.value?R.value:"")),ve=r((()=>E.value?void 0:l.label||l.ariaLabel||o("el.colorpicker.defaultLabel")));ee({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-color-picker",ref:"https://element-plus.org/en-US/component/color-picker.html"},r((()=>!!l.label)));const fe=r((()=>E.value?null==y?void 0:y.labelId:void 0)),pe=r((()=>[m.b("picker"),m.is("disabled",B.value),m.bm("picker",C.value),m.is("focused",W.value)]));function me(e){z.value=e}const be=je(me,100,{leading:!0});function ge(){B.value||me(!0)}function ye(){be(!1),ke()}function ke(){ae((()=>{l.modelValue?R.fromString(l.modelValue):(R.value="",ae((()=>{X.value=!1})))}))}function _e(){B.value||be(!z.value)}function Ce(){R.fromString($.value)}function we(){const e=R.value;t(H,e),t("change",e),l.validateEvent&&(null==y||y.validate("change").catch((e=>ce()))),be(!1),ae((()=>{const e=new ta({enableAlpha:l.showAlpha,format:l.colorFormat||"",value:l.modelValue});R.compare(e)||ke()}))}function xe(){be(!1),t(H,null),t("change",null),null!==l.modelValue&&l.validateEvent&&(null==y||y.validate("change").catch((e=>ce()))),ke()}function Be(e){if(z.value&&(ye(),W.value)){const a=new FocusEvent("focus",e);K(a)}}function Ve(e){e.preventDefault(),e.stopPropagation(),me(!1),ke()}function Ee(e){switch(e.code){case ue.enter:case ue.space:e.preventDefault(),e.stopPropagation(),ge(),L.value.focus();break;case ue.esc:Ve(e)}}function Se(){N.value.blur()}return F((()=>{l.modelValue&&($.value=he.value)})),D((()=>l.modelValue),(e=>{e?e&&e!==R.value&&(O=!1,R.fromString(e)):X.value=!1})),D((()=>he.value),(e=>{$.value=e,O&&t("activeChange",e),O=!0})),D((()=>R.value),(()=>{l.modelValue||X.value||(X.value=!0)})),D((()=>z.value),(()=>{ae((()=>{var e,a,t;null==(e=M.value)||e.update(),null==(a=S.value)||a.update(),null==(t=A.value)||t.update()}))})),te($e,{currentColor:he}),a({color:R,show:ge,hide:ye,focus:function(){N.value.focus()},blur:Se}),(e,a)=>(i(),c(f(Me),{ref_key:"popper",ref:j,visible:z.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[f(m).be("picker","panel"),f(m).b("dropdown"),e.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",teleported:e.teleported,transition:"".concat(f(m).namespace.value,"-zoom-in-top"),persistent:"",onHide:a[2]||(a[2]=e=>me(!1))},{content:u((()=>[d((i(),g("div",{onKeydown:le(Ve,["esc"])},[h("div",{class:v(f(m).be("dropdown","main-wrapper"))},[w(Re,{ref_key:"hue",ref:M,class:"hue-slider",color:f(R),vertical:""},null,8,["color"]),w(ia,{ref_key:"sv",ref:S,color:f(R)},null,8,["color"])],2),e.showAlpha?(i(),c(Oe,{key:0,ref_key:"alpha",ref:A,color:f(R)},null,8,["color"])):b("v-if",!0),e.predefine?(i(),c(na,{key:1,ref:"predefine",color:f(R),colors:e.predefine},null,8,["color","colors"])):b("v-if",!0),h("div",{class:v(f(m).be("dropdown","btns"))},[h("span",{class:v(f(m).be("dropdown","value"))},[w(f(oe),{ref_key:"inputRef",ref:L,modelValue:$.value,"onUpdate:modelValue":a[0]||(a[0]=e=>$.value=e),"validate-event":!1,size:"small",onKeyup:le(Ce,["enter"]),onBlur:Ce},null,8,["modelValue","onKeyup"])],2),w(f(ne),{class:v(f(m).be("dropdown","link-btn")),text:"",size:"small",onClick:xe},{default:u((()=>[k(_(f(o)("el.colorpicker.clear")),1)])),_:1},8,["class"]),w(f(ne),{plain:"",size:"small",class:v(f(m).be("dropdown","btn")),onClick:we},{default:u((()=>[k(_(f(o)("el.colorpicker.confirm")),1)])),_:1},8,["class"])],2)],40,ca)),[[f(Ae),Be]])])),default:u((()=>[h("div",se({id:f(V),ref_key:"triggerRef",ref:N},e.$attrs,{class:f(pe),role:"button","aria-label":f(ve),"aria-labelledby":f(fe),"aria-description":f(o)("el.colorpicker.description",{color:e.modelValue||""}),"aria-disabled":f(B),tabindex:f(B)?-1:e.tabindex,onKeydown:Ee,onFocus:T,onBlur:a[1]||(a[1]=(...e)=>f(K)&&f(K)(...e))}),[f(B)?(i(),g("div",{key:0,class:v(f(m).be("picker","mask"))},null,2)):b("v-if",!0),h("div",{class:v(f(m).be("picker","trigger")),onClick:_e},[h("span",{class:v([f(m).be("picker","color"),f(m).is("alpha",e.showAlpha)])},[h("span",{class:v(f(m).be("picker","color-inner")),style:I({backgroundColor:f(de)})},[d(w(f(p),{class:v([f(m).be("picker","icon"),f(m).is("icon-arrow-down")])},{default:u((()=>[w(f(re))])),_:1},8,["class"]),[[x,e.modelValue||X.value]]),d(w(f(p),{class:v([f(m).be("picker","empty"),f(m).is("icon-close")])},{default:u((()=>[w(f(ie))])),_:1},8,["class"]),[[x,!e.modelValue&&!X.value]])],6)],2)],2)],16,ua)])),_:1},8,["visible","popper-class","teleported","transition"]))}}),[["__file","color-picker.vue"]])),va=e({options:{type:S(Array),default:()=>[]},modelValue:{type:[String,Number,Boolean],default:void 0},block:Boolean,size:W,disabled:Boolean,validateEvent:{type:Boolean,default:!0},id:String,name:String,...U(["ariaLabel"])}),fa={[H]:e=>K(e)||de(e),[O]:e=>K(e)||de(e)},pa=["id","aria-label","aria-labelledby"],ma=["name","disabled","checked","onChange"],ba=l({name:"ElSegmented"});const ga=M(V(l({...ba,props:va,emits:fa,setup(e,{emit:a}){const t=e,l=n("segmented"),o=he(),c=Y(),u=G(),{formItem:d}=P(),{inputId:p,isLabeledByFormItem:m}=J(t,{formItemContext:d}),b=s(null),w=ve(),x=Q({isInit:!1,width:0,translateX:0,disabled:!1,focusVisible:!1}),B=e=>pe(e)?e.value:e,V=e=>pe(e)?e.label:e,E=e=>!!(u.value||pe(e)&&e.disabled),M=e=>t.modelValue===B(e),S=e=>[l.e("item"),l.is("selected",M(e)),l.is("disabled",E(e))],A=()=>{if(!b.value)return;const e=b.value.querySelector(".is-selected"),a=b.value.querySelector(".is-selected input");if(!e||!a)return x.width=0,x.translateX=0,x.disabled=!1,void(x.focusVisible=!1);const l=e.getBoundingClientRect();var o;x.isInit=!0,x.width=l.width,x.translateX=e.offsetLeft,x.disabled=E((o=t.modelValue,t.options.find((e=>B(e)===o))));try{x.focusVisible=a.matches(":focus-visible")}catch(n){}},j=r((()=>[l.b(),l.m(c.value),l.is("block",t.block)])),F=r((()=>({width:"".concat(x.width,"px"),transform:"translateX(".concat(x.translateX,"px)"),display:x.isInit?"block":"none"}))),N=r((()=>[l.e("item-selected"),l.is("disabled",x.disabled),l.is("focus-visible",x.focusVisible)])),L=r((()=>t.name||o.value));return fe(b,A),D(w,A),D((()=>t.modelValue),(()=>{var e;A(),t.validateEvent&&(null==(e=null==d?void 0:d.validate)||e.call(d,"change").catch((e=>ce())))}),{flush:"post"}),(e,t)=>(i(),g("div",{id:f(p),ref_key:"segmentedRef",ref:b,class:v(f(j)),role:"radiogroup","aria-label":f(m)?void 0:e.ariaLabel||"segmented","aria-labelledby":f(m)?f(d).labelId:void 0},[h("div",{class:v(f(l).e("group"))},[h("div",{style:I(f(F)),class:v(f(N))},null,6),(i(!0),g(C,null,$(e.options,((t,o)=>(i(),g("label",{key:o,class:v(S(t))},[h("input",{class:v(f(l).e("item-input")),type:"radio",name:f(L),disabled:E(t),checked:M(t),onChange:e=>(e=>{const t=B(e);a(H,t),a(O,t)})(t)},null,42,ma),h("div",{class:v(f(l).e("item-label"))},[y(e.$slots,"default",{item:t},(()=>[k(_(V(t)),1)]))],2)],2)))),128))],2)],10,pa))}}),[["__file","segmented.vue"]])),ya=e=>(Ce("data-v-e4d73fda"),e=e(),we(),e),ka={class:"flex flex-col"},_a={class:"mb-8"},Ca=ya((()=>h("div",{class:"text-gray-800 dark:text-gray-100"},"默认主题",-1))),wa={class:"mt-2 text-sm p-2 flex items-center gap-2"},xa={class:"mb-8"},Ba=ya((()=>h("div",{class:"text-gray-800 dark:text-gray-100"},"主题色",-1))),Va={class:"mt-2 text-sm p-2 flex items-center gap-2"},Ea=["onClick"],Ma={class:"mb-8"},Sa=ya((()=>h("div",{class:"text-gray-800 dark:text-gray-100"},"界面显示",-1))),Aa={class:"mt-2 text-sm p-2"},ja={class:"flex items-center justify-between"},Fa=ya((()=>h("div",null,"展示水印",-1))),Da={class:"flex items-center justify-between"},Na=ya((()=>h("div",null,"灰色模式",-1))),La={class:"flex items-center justify-between"},Ia=ya((()=>h("div",null,"色弱模式",-1))),Wa={class:"flex items-center justify-between"},Ua=ya((()=>h("div",null,"菜单模式",-1))),Ha={class:"flex items-center justify-between"},Ka=ya((()=>h("div",null,"显示标签页",-1))),Ta={class:"mb-8"},Oa=ya((()=>h("div",{class:"text-gray-800 dark:text-gray-100"},"layout 大小配置",-1))),Ra={class:"mt-2 text-sm p-2"},za={class:"flex items-center justify-between mb-2"},Xa=ya((()=>h("div",null,"侧边栏展开宽度",-1))),$a={class:"flex items-center justify-between mb-2"},qa=ya((()=>h("div",null,"侧边栏收缩宽度",-1))),Pa={class:"flex items-center justify-between mb-2"},Ya=ya((()=>h("div",null,"侧边栏子项高度",-1))),Ga=me(Object.assign({name:"GvaSetting"},{__name:"index",props:{drawer:{default:!0,type:Boolean},drawerModifiers:{}},emits:["update:drawer"],setup(e){const a=be(),{config:t,device:l}=ge(a),o=r((()=>"mobile"===l.value?"100%":"500px")),n=["#EB2F96","#3b82f6","#2FEB54","#EBEB2F","#EB2F2F","#2FEBEB"],d=ye(e,"drawer"),v=["dark","light","auto"],m=[{label:"正常模式",value:"normal"},{label:"顶部菜单栏模式",value:"head"}],y=()=>{const e=document.createElement("textarea");e.value=JSON.stringify(t.value),e.value=e.value.replace(/,/g,",\n"),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),_e.success("复制成功, 请自行保存到本地文件中")},_=s("");return(e,l)=>{const s=ga,r=ke("Select"),x=p,B=ha,V=Ve,E=Be,M=Fe,S=Ie,A=ne,j=xe;return i(),c(j,{modelValue:d.value,"onUpdate:modelValue":l[10]||(l[10]=e=>d.value=e),title:"系统配置",direction:"rtl",size:o.value},{default:u((()=>[h("div",ka,[h("div",_a,[Ca,h("div",wa,[w(s,{modelValue:f(t).darkMode,"onUpdate:modelValue":l[0]||(l[0]=e=>f(t).darkMode=e),options:v,size:"default",onChange:f(a).toggleDarkMode},null,8,["modelValue","onChange"])])]),h("div",xa,[Ba,h("div",Va,[(i(),g(C,null,$(n,(e=>h("div",{key:e,class:"w-5 h-5 rounded cursor-pointer flex items-center justify-center",style:I("background:".concat(e)),onClick:t=>f(a).togglePrimaryColor(e)},[f(t).primaryColor===e?(i(),c(x,{key:0},{default:u((()=>[w(r)])),_:1})):b("",!0)],12,Ea))),64)),w(B,{modelValue:_.value,"onUpdate:modelValue":l[1]||(l[1]=e=>_.value=e),onChange:f(a).togglePrimaryColor},null,8,["modelValue","onChange"])])]),h("div",Ma,[Sa,h("div",Aa,[h("div",ja,[Fa,w(V,{modelValue:f(t).show_watermark,"onUpdate:modelValue":l[2]||(l[2]=e=>f(t).show_watermark=e),onChange:f(a).toggleConfigWatermark},null,8,["modelValue","onChange"])]),h("div",Da,[Na,w(V,{modelValue:f(t).grey,"onUpdate:modelValue":l[3]||(l[3]=e=>f(t).grey=e),onChange:f(a).toggleGrey},null,8,["modelValue","onChange"])]),h("div",La,[Ia,w(V,{modelValue:f(t).weakness,"onUpdate:modelValue":l[4]||(l[4]=e=>f(t).weakness=e),onChange:f(a).toggleWeakness},null,8,["modelValue","onChange"])]),h("div",Wa,[Ua,w(s,{modelValue:f(t).side_mode,"onUpdate:modelValue":l[5]||(l[5]=e=>f(t).side_mode=e),options:m,size:"default",onChange:f(a).toggleSideModel},null,8,["modelValue","onChange"])]),h("div",Ha,[Ka,w(V,{modelValue:f(t).showTabs,"onUpdate:modelValue":l[6]||(l[6]=e=>f(t).showTabs=e),onChange:f(a).toggleTabs},null,8,["modelValue","onChange"])])])]),h("div",Ta,[Oa,h("div",Ra,[h("div",za,[Xa,w(E,{modelValue:f(t).layout_side_width,"onUpdate:modelValue":l[7]||(l[7]=e=>f(t).layout_side_width=e),min:150,max:400,step:10},null,8,["modelValue"])]),h("div",$a,[qa,w(E,{modelValue:f(t).layout_side_collapsed_width,"onUpdate:modelValue":l[8]||(l[8]=e=>f(t).layout_side_collapsed_width=e),min:60,max:100},null,8,["modelValue"])]),h("div",Pa,[Ya,w(E,{modelValue:f(t).layout_side_item_height,"onUpdate:modelValue":l[9]||(l[9]=e=>f(t).layout_side_item_height=e),min:30,max:50},null,8,["modelValue"])])])]),w(S,{type:"warning",closable:!1},{default:u((()=>[k(" 请注意，所有配置请保存到本地文件的 "),w(M,null,{default:u((()=>[k("config.json")])),_:1}),k(" 文件中，否则刷新页面后会丢失配置 ")])),_:1}),w(A,{type:"primary",class:"mt-4",onClick:y},{default:u((()=>[k("复制配置json")])),_:1})])])),_:1},8,["modelValue","size"])}}}),[["__scopeId","data-v-e4d73fda"]]);export{Ga as default};
