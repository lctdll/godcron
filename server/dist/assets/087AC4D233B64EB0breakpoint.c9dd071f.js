/*! 
 Build based on gin-vue-admin 
 Time : 1718874130000 */
import{as as e,v as t,_ as a,a as r,T as n,ad as s,o as i,c as o,b as u,d as f,w as l,g as h,a2 as p,a5 as d,t as c,e as v,a6 as y,j as g,E as m,J as b,p as _,i as A}from"./087AC4D233B64EB0index.f7794d3b.js";import{E as w}from"./087AC4D233B64EB0progress.1fbcd622.js";/* empty css                               */import{E as B}from"./087AC4D233B64EB0divider.1f5cee2b.js";var C={exports:{}};const k=e(C.exports=function(e){var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function a(e,t){var a=e[0],r=e[1],n=e[2],s=e[3];r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&n|~r&s)+t[0]-680876936|0)<<7|a>>>25)+r|0)&r|~a&n)+t[1]-389564586|0)<<12|s>>>20)+a|0)&a|~s&r)+t[2]+606105819|0)<<17|n>>>15)+s|0)&s|~n&a)+t[3]-1044525330|0)<<22|r>>>10)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&n|~r&s)+t[4]-176418897|0)<<7|a>>>25)+r|0)&r|~a&n)+t[5]+1200080426|0)<<12|s>>>20)+a|0)&a|~s&r)+t[6]-1473231341|0)<<17|n>>>15)+s|0)&s|~n&a)+t[7]-45705983|0)<<22|r>>>10)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&n|~r&s)+t[8]+1770035416|0)<<7|a>>>25)+r|0)&r|~a&n)+t[9]-1958414417|0)<<12|s>>>20)+a|0)&a|~s&r)+t[10]-42063|0)<<17|n>>>15)+s|0)&s|~n&a)+t[11]-1990404162|0)<<22|r>>>10)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&n|~r&s)+t[12]+1804603682|0)<<7|a>>>25)+r|0)&r|~a&n)+t[13]-40341101|0)<<12|s>>>20)+a|0)&a|~s&r)+t[14]-1502002290|0)<<17|n>>>15)+s|0)&s|~n&a)+t[15]+1236535329|0)<<22|r>>>10)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&s|n&~s)+t[1]-165796510|0)<<5|a>>>27)+r|0)&n|r&~n)+t[6]-1069501632|0)<<9|s>>>23)+a|0)&r|a&~r)+t[11]+643717713|0)<<14|n>>>18)+s|0)&a|s&~a)+t[0]-373897302|0)<<20|r>>>12)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&s|n&~s)+t[5]-701558691|0)<<5|a>>>27)+r|0)&n|r&~n)+t[10]+38016083|0)<<9|s>>>23)+a|0)&r|a&~r)+t[15]-660478335|0)<<14|n>>>18)+s|0)&a|s&~a)+t[4]-405537848|0)<<20|r>>>12)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&s|n&~s)+t[9]+568446438|0)<<5|a>>>27)+r|0)&n|r&~n)+t[14]-1019803690|0)<<9|s>>>23)+a|0)&r|a&~r)+t[3]-187363961|0)<<14|n>>>18)+s|0)&a|s&~a)+t[8]+1163531501|0)<<20|r>>>12)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r&s|n&~s)+t[13]-1444681467|0)<<5|a>>>27)+r|0)&n|r&~n)+t[2]-51403784|0)<<9|s>>>23)+a|0)&r|a&~r)+t[7]+1735328473|0)<<14|n>>>18)+s|0)&a|s&~a)+t[12]-1926607734|0)<<20|r>>>12)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r^n^s)+t[5]-378558|0)<<4|a>>>28)+r|0)^r^n)+t[8]-2022574463|0)<<11|s>>>21)+a|0)^a^r)+t[11]+1839030562|0)<<16|n>>>16)+s|0)^s^a)+t[14]-35309556|0)<<23|r>>>9)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r^n^s)+t[1]-1530992060|0)<<4|a>>>28)+r|0)^r^n)+t[4]+1272893353|0)<<11|s>>>21)+a|0)^a^r)+t[7]-155497632|0)<<16|n>>>16)+s|0)^s^a)+t[10]-1094730640|0)<<23|r>>>9)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r^n^s)+t[13]+681279174|0)<<4|a>>>28)+r|0)^r^n)+t[0]-358537222|0)<<11|s>>>21)+a|0)^a^r)+t[3]-722521979|0)<<16|n>>>16)+s|0)^s^a)+t[6]+76029189|0)<<23|r>>>9)+n|0,r=((r+=((n=((n+=((s=((s+=((a=((a+=(r^n^s)+t[9]-640364487|0)<<4|a>>>28)+r|0)^r^n)+t[12]-421815835|0)<<11|s>>>21)+a|0)^a^r)+t[15]+530742520|0)<<16|n>>>16)+s|0)^s^a)+t[2]-995338651|0)<<23|r>>>9)+n|0,r=((r+=((s=((s+=(r^((a=((a+=(n^(r|~s))+t[0]-198630844|0)<<6|a>>>26)+r|0)|~n))+t[7]+1126891415|0)<<10|s>>>22)+a|0)^((n=((n+=(a^(s|~r))+t[14]-1416354905|0)<<15|n>>>17)+s|0)|~a))+t[5]-57434055|0)<<21|r>>>11)+n|0,r=((r+=((s=((s+=(r^((a=((a+=(n^(r|~s))+t[12]+1700485571|0)<<6|a>>>26)+r|0)|~n))+t[3]-1894986606|0)<<10|s>>>22)+a|0)^((n=((n+=(a^(s|~r))+t[10]-1051523|0)<<15|n>>>17)+s|0)|~a))+t[1]-2054922799|0)<<21|r>>>11)+n|0,r=((r+=((s=((s+=(r^((a=((a+=(n^(r|~s))+t[8]+1873313359|0)<<6|a>>>26)+r|0)|~n))+t[15]-30611744|0)<<10|s>>>22)+a|0)^((n=((n+=(a^(s|~r))+t[6]-1560198380|0)<<15|n>>>17)+s|0)|~a))+t[13]+1309151649|0)<<21|r>>>11)+n|0,r=((r+=((s=((s+=(r^((a=((a+=(n^(r|~s))+t[4]-145523070|0)<<6|a>>>26)+r|0)|~n))+t[11]-1120210379|0)<<10|s>>>22)+a|0)^((n=((n+=(a^(s|~r))+t[2]+718787259|0)<<15|n>>>17)+s|0)|~a))+t[9]-343485551|0)<<21|r>>>11)+n|0,e[0]=a+e[0]|0,e[1]=r+e[1]|0,e[2]=n+e[2]|0,e[3]=s+e[3]|0}function r(e){var t,a=[];for(t=0;t<64;t+=4)a[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return a}function n(e){var t,a=[];for(t=0;t<64;t+=4)a[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return a}function s(e){var t,n,s,i,o,u,f=e.length,l=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=f;t+=64)a(l,r(e.substring(t-64,t)));for(n=(e=e.substring(t-64)).length,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)s[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(s[t>>2]|=128<<(t%4<<3),t>55)for(a(l,s),t=0;t<16;t+=1)s[t]=0;return i=(i=8*f).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(i[2],16),u=parseInt(i[1],16)||0,s[14]=o,s[15]=u,a(l,s),l}function i(e){var t,r,s,i,o,u,f=e.length,l=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=f;t+=64)a(l,n(e.subarray(t-64,t)));for(r=(e=t-64<f?e.subarray(t-64):new Uint8Array(0)).length,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<r;t+=1)s[t>>2]|=e[t]<<(t%4<<3);if(s[t>>2]|=128<<(t%4<<3),t>55)for(a(l,s),t=0;t<16;t+=1)s[t]=0;return i=(i=8*f).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(i[2],16),u=parseInt(i[1],16)||0,s[14]=o,s[15]=u,a(l,s),l}function o(e){var a,r="";for(a=0;a<4;a+=1)r+=t[e>>8*a+4&15]+t[e>>8*a&15];return r}function u(e){var t;for(t=0;t<e.length;t+=1)e[t]=o(e[t]);return e.join("")}function f(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function l(e,t){var a,r=e.length,n=new ArrayBuffer(r),s=new Uint8Array(n);for(a=0;a<r;a+=1)s[a]=e.charCodeAt(a);return t?s:n}function h(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function p(e,t,a){var r=new Uint8Array(e.byteLength+t.byteLength);return r.set(new Uint8Array(e)),r.set(new Uint8Array(t),e.byteLength),a?r:r.buffer}function d(e){var t,a=[],r=e.length;for(t=0;t<r-1;t+=2)a.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,a)}function c(){this.reset()}return u(s("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(a,r){var n,s,i,o,u=this.byteLength,f=t(a,u),l=u;return r!==e&&(l=t(r,u)),f>l?new ArrayBuffer(0):(n=l-f,s=new ArrayBuffer(n),i=new Uint8Array(s),o=new Uint8Array(this,f,n),i.set(o),s)}}(),c.prototype.append=function(e){return this.appendBinary(f(e)),this},c.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,n=this._buff.length;for(t=64;t<=n;t+=64)a(this._hash,r(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},c.prototype.end=function(e){var t,a,r=this._buff,n=r.length,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<n;t+=1)s[t>>2]|=r.charCodeAt(t)<<(t%4<<3);return this._finish(s,n),a=u(this._hash),e&&(a=d(a)),this.reset(),a},c.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},c.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},c.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},c.prototype._finish=function(e,t){var r,n,s,i=t;if(e[i>>2]|=128<<(i%4<<3),i>55)for(a(this._hash,e),i=0;i<16;i+=1)e[i]=0;r=(r=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),n=parseInt(r[2],16),s=parseInt(r[1],16)||0,e[14]=n,e[15]=s,a(this._hash,e)},c.hash=function(e,t){return c.hashBinary(f(e),t)},c.hashBinary=function(e,t){var a=u(s(e));return t?d(a):a},c.ArrayBuffer=function(){this.reset()},c.ArrayBuffer.prototype.append=function(e){var t,r=p(this._buff.buffer,e,!0),s=r.length;for(this._length+=e.byteLength,t=64;t<=s;t+=64)a(this._hash,n(r.subarray(t-64,t)));return this._buff=t-64<s?new Uint8Array(r.buffer.slice(t-64)):new Uint8Array(0),this},c.ArrayBuffer.prototype.end=function(e){var t,a,r=this._buff,n=r.length,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<n;t+=1)s[t>>2]|=r[t]<<(t%4<<3);return this._finish(s,n),a=u(this._hash),e&&(a=d(a)),this.reset(),a},c.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.ArrayBuffer.prototype.getState=function(){var e=c.prototype.getState.call(this);return e.buff=h(e.buff),e},c.ArrayBuffer.prototype.setState=function(e){return e.buff=l(e.buff,!0),c.prototype.setState.call(this,e)},c.ArrayBuffer.prototype.destroy=c.prototype.destroy,c.ArrayBuffer.prototype._finish=c.prototype._finish,c.ArrayBuffer.hash=function(e,t){var a=u(i(new Uint8Array(e)));return t?d(a):a},c}()),U=e=>(_("data-v-c6e8eb9c"),e=e(),A(),e),D={class:"break-point"},F={class:"gva-table-box"},S={id:"fromCont",method:"post"},M=U((()=>u("div",{class:"el-upload__tip"},"请上传不超过5MB的文件",-1))),E={class:"list"},I={key:0,class:"list-item"},x={class:"percentage"},N=U((()=>u("div",{class:"tips"},"此版本为先行体验功能测试版，样式美化和性能优化正在进行中，上传切片文件和合成的完整文件分别再QMPlusserver目录的breakpointDir文件夹和fileDir文件夹",-1))),j=a(Object.assign({name:"BreakPoint"},{__name:"breakpoint",setup(e){const a=r(null),_=r(""),A=r([]),C=r([]),U=r(NaN),j=r(!1),L=r(0),P=r(!0),T=async e=>{if(!e.target.files.length)return;const r=new FileReader,n=e.target.files[0];a.value=n,L.value=0,a.value.size<5242880?(r.readAsArrayBuffer(a.value),r.onload=async e=>{const r=e.target.result,n=new k.ArrayBuffer;n.append(r),_.value=n.end();const s=1048576;let i=0,o=0,u=0;for(A.value=[];o<a.value.size;){i=u*s,o=(u+1)*s;var f=a.value.slice(i,o);const e=new window.FormData;e.append("fileMd5",_.value),e.append("file",f),e.append("chunkNumber",u),e.append("fileName",a.value.name),A.value.push({key:u,formData:e}),u++}const l={fileName:a.value.name,fileMd5:_.value,chunkTotal:A.value.length},h=await(e=>t({url:"/fileUploadAndDownload/findFile",method:"get",params:e}))(l),p=h.data.file.ExaFileChunk;h.data.file.IsFinish?(C.value=[],g.success("文件已秒传")):C.value=A.value.filter((e=>!(p&&p.some((t=>t.FileChunkNumber===e.key))))),U.value=C.value.length}):(j.value=!0,g("请上传小于5M文件"))},R=()=>{null!==a.value?(100===L.value&&(P.value=!1),$()):g("请先上传文件")},$=()=>{C.value&&C.value.forEach((e=>{e.formData.append("chunkTotal",A.value.length);const t=new FileReader,a=e.formData.get("file");t.readAsArrayBuffer(a),t.onload=t=>{const a=new k.ArrayBuffer;a.append(t.target.result),e.formData.append("chunkMd5",a.end()),z(e)}}))};n((()=>U.value),(()=>{L.value=Math.floor((A.value.length-U.value)/A.value.length*100)}));const z=async e=>{var r;if(0===(await(r=e.formData,t({url:"/fileUploadAndDownload/breakpointContinue",method:"post",donNotShowLoading:!0,headers:{"Content-Type":"multipart/form-data"},data:r}))).code&&(U.value--,0===U.value)){const e={fileName:a.value.name,fileMd5:_.value},r=await(e=>t({url:"/fileUploadAndDownload/breakpointContinueFinish",method:"post",params:e}))(e);if(0===r.code){const e={fileName:a.value.name,fileMd5:_.value,filePath:r.data.filePath};g.success("上传成功"),await((e,a)=>t({url:"/fileUploadAndDownload/removeChunk",method:"post",data:e,params:a}))(e)}}},J=r(null),O=()=>{J.value.dispatchEvent(new MouseEvent("click"))};return(e,t)=>{const r=B,n=m,g=s("document"),_=b,A=w;return i(),o("div",D,[u("div",F,[f(r,{"content-position":"left"},{default:l((()=>[h("大文件上传")])),_:1}),u("form",S,[u("div",{class:"fileUpload",onClick:O},[h(" 选择文件 "),p(u("input",{id:"file",ref_key:"FileInput",ref:J,multiple:"multiple",type:"file",onChange:T},null,544),[[d,!1]])])]),f(n,{disabled:j.value,type:"primary",class:"uploadBtn",onClick:R},{default:l((()=>[h("上传文件")])),_:1},8,["disabled"]),M,u("div",E,[f(y,{name:"list",tag:"p"},{default:l((()=>[a.value?(i(),o("div",I,[f(_,null,{default:l((()=>[f(g)])),_:1}),u("span",null,c(a.value.name),1),u("span",x,c(L.value)+"%",1),f(A,{"show-text":!1,"text-inside":!1,"stroke-width":2,percentage:L.value},null,8,["percentage"])])):v("",!0)])),_:1})]),N])])}}}),[["__scopeId","data-v-c6e8eb9c"]]);export{j as default};
