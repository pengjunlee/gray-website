import{g as U,a as F,_ as w}from"./index-DjMqVLpm.js";import{d as B,I as R,r as o,G as b,b as z,o as i,c as _,a as g,S as c,u as t,Q as C}from"./@vue-BV9Q_yhH.js";const I=["src"],S=B({__name:"ImageUpload",props:{imageUrl:{},size:{}},emits:["selectFile"],setup(f,{emit:v}){const r=f,{size:s}=R(r),e=o(r.imageUrl),a=o(null),p=()=>e.value?e.value.startsWith("http")||e.value.startsWith("data")?e.value:U()+e.value:"",u=o(),h=v,x=m=>{const l=m.target;if(l.files&&l.files[0]){a.value=l.files[0];const n=new FileReader;n.onload=k=>{var d;e.value=(d=k.target)==null?void 0:d.result},n.readAsDataURL(a.value),h("selectFile",a.value)}},y=()=>{u.value.click()};return b(()=>{a.value=null}),z(()=>{}),(m,l)=>{const n=F;return i(),_("div",{class:"image-upload",style:c({height:t(s)?t(s)+"px":"200px"}),onClick:y},[g("input",{ref_key:"fileselectRef",ref:u,style:{display:"none"},type:"file",accept:"image/*",onChange:x},null,544),g("div",{class:"image-preview",style:c({border:e.value?"none":"1px solid var(--gw-bg-active)",width:t(s)?t(s)+"px":"200px"})},[p()?(i(),_("img",{key:0,class:"img",style:c({height:t(s)?t(s)+"px":"200px"}),src:p(),alt:"预览图片"},null,12,I)):(i(),C(n,{key:1,size:"50px","icon-class":"add"}))],4)],4)}}}),D=w(S,[["__scopeId","data-v-2a0edc77"]]);export{D as _};
