import{f as A,c as R,E as h,h as $,i as q,j as G,k as L}from"./element-plus-8efUW2IF.js";import{l as S,e as j,f as H}from"./resources-CcK3UWYY.js";import{G as y}from"./GWTitleImageCard-C5eKu2TV.js";import{_ as J}from"./ImageUpload-F4lk5RSK.js";import{d as O,r as m,b as P,H as k,c as w,a as _,L as l,M as x,a7 as Q,P as n,o as C,Q as W,T as V}from"./@vue-BV9Q_yhH.js";import{_ as K}from"./index-DjMqVLpm.js";import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-DVUPgnhb.js";import"./dayjs-Dc0JWrkO.js";import"./@element-plus-DgtNr1CL.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";import"./request_website-CrBmHNxu.js";import"./axios-Cm0UX6qg.js";import"./pinia-CWZPuNdE.js";import"./vue-router-DaOdIdNP.js";import"./vue-pdf-embed-BcRweBTn.js";const X={class:"graython-Collection-root"},Y=["onClick"],Z=["onClick"],ee=O({__name:"Collection",setup(te){const s=m(!0),g=m(),v=m();P(()=>{u()});const u=async()=>{await S().then(e=>{v.value=e.data})},r=m(!1),t=k({name:""});let b;const F=k({name:[{required:!0,message:"请输入合集名称",trigger:"blur"}]}),c=e=>{e?(t.id=e.id,t.name=e.name,t.thumbnailUrl=e.thumbnailUrl):(t.id=void 0,t.name="",t.thumbnailUrl=void 0)},B=()=>{c(),r.value=!0},E=e=>{c(e),r.value=!0};function U(e){R.confirm("确定要删除合集["+e.name+"]吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await j(e.id).then(()=>{u()}),h({type:"success",message:"删除成功!"})}).catch(()=>{h({type:"info",message:"取消删除"})})}const d=()=>{r.value=!1},T=async e=>{s.value&&e&&await e.validate(async(o,p)=>{if(o){s.value=!1;let i=new FormData;i.append("file",b),i.append("entity",JSON.stringify({id:t.id,name:t.name})),await H(i).then(f=>{s.value=!0,c(),d(),u()}).finally(()=>{s.value=!0})}else console.log("error submit!",p)})},D=e=>{b=e};return(e,o)=>{const p=$,i=q,f=G,I=L,M=A;return C(),w(x,null,[_("div",X,[l(y,{blankCard:!0,onClick:B}),(C(!0),w(x,null,Q(v.value,(a,N)=>(C(),W(y,{blankCard:!1,key:N,image:a.thumbnailUrl,title:a.name,"card-data":a},{"customize-btn":n(()=>[_("span",{onClick:z=>E(a),style:{color:"green"},class:"customize-btn iconbl bl-a-fileedit-line"},null,8,Y),_("span",{onClick:z=>U(a),style:{color:"red"},class:"customize-btn iconbl bl-delete-line"},null,8,Z)]),_:2},1032,["image","title","card-data"]))),128))]),l(M,{style:{padding:"3rem","max-height":"50rem",overflow:"scroll"},title:"管理合集",modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=a=>r.value=a),width:"50rem",onClose:d},{default:n(()=>[l(I,{ref_key:"collectionFormRef",ref:g,model:t,"label-width":"auto",rules:F},{default:n(()=>[l(J,{"image-url":t.thumbnailUrl,onSelectFile:D},null,8,["image-url"]),l(i,{label:"合集名称：",prop:"name"},{default:n(()=>[l(p,{modelValue:t.name,"onUpdate:modelValue":o[0]||(o[0]=a=>t.name=a),placeholder:"请输入合集名称"},null,8,["modelValue"])]),_:1}),l(i,{style:{"flex-direction":"column"}},{default:n(()=>[l(f,{onClick:d},{default:n(()=>[V("取消")]),_:1}),l(f,{type:"primary",onClick:o[1]||(o[1]=a=>T(g.value))},{default:n(()=>[V("确定")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])],64)}}}),he=K(ee,[["__scopeId","data-v-8ad4328c"]]);export{he as default};
