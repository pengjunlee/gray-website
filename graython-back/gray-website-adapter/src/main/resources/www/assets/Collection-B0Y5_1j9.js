import{f as A,c as R,E as h,h as $,i as q,j as G,k as L}from"./element-plus-D_LIGSL8.js";import{l as S,e as j,f as H}from"./resources-DMBAChkD.js";import{G as y}from"./GWTitleImageCard-BjaUU0B7.js";import{_ as J}from"./ImageUpload-Bl1YTEVH.js";import{d as O,r as m,b as P,H as k,c as x,a as _,L as o,M as w,a7 as Q,P as n,o as C,Q as W,T as V}from"./@vue-BV9Q_yhH.js";import{_ as K}from"./index-BrhFncrl.js";import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-DVUPgnhb.js";import"./dayjs-Dc0JWrkO.js";import"./@element-plus-DgtNr1CL.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";import"./request_website-Bu8lLbZY.js";import"./axios-Cm0UX6qg.js";/* empty css                             */import"./pinia-CWZPuNdE.js";import"./vue-router-DaOdIdNP.js";import"./vue-pdf-embed-BcRweBTn.js";const X={class:"graython-Collection-root"},Y=["onClick"],Z=["onClick"],ee=O({__name:"Collection",setup(te){const r=m(!0),g=m(),v=m();P(()=>{c()});const c=async()=>{await S().then(e=>{v.value=e.data})},s=m(!1),t=k({name:""});let b;const F=k({name:[{required:!0,message:"请输入合集名称",trigger:"blur"}]}),u=e=>{e?(t.id=e.id,t.name=e.name,t.thumbnailUrl=e.thumbnailUrl):(t.id=void 0,t.name="",t.thumbnailUrl=void 0)},B=()=>{u(),s.value=!0},E=e=>{u(e),s.value=!0};function U(e){R.confirm("确定要删除合集["+e.name+"]吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await j(e.id).then(()=>{c()}),h({type:"success",message:"删除成功!"})}).catch(()=>{h({type:"info",message:"取消删除"})})}const d=()=>{s.value=!1},T=async e=>{r.value&&e&&await e.validate(async(l,p)=>{if(l){r.value=!1;let i=new FormData;i.append("file",b),i.append("entity",JSON.stringify({id:t.id,name:t.name})),await H(i).then(f=>{r.value=!0,u(),d(),c()}).finally(()=>{r.value=!0})}else console.log("error submit!",p)})},D=e=>{b=e};return(e,l)=>{const p=$,i=q,f=G,I=L,M=A;return C(),x(w,null,[_("div",X,[o(y,{blankCard:!0,onClick:B}),(C(!0),x(w,null,Q(v.value,(a,N)=>(C(),W(y,{blankCard:!1,key:N,image:a.thumbnailUrl,title:a.name,"card-data":a},{"customize-btn":n(()=>[_("span",{onClick:z=>E(a),style:{color:"green"},class:"customize-btn iconbl bl-a-fileedit-line"},null,8,Y),_("span",{onClick:z=>U(a),style:{color:"red"},class:"customize-btn iconbl bl-delete-line"},null,8,Z)]),_:2},1032,["image","title","card-data"]))),128))]),o(M,{style:{padding:"30px","max-height":"500px",overflow:"scroll"},title:"管理合集",modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=a=>s.value=a),width:"500px",onClose:d},{default:n(()=>[o(I,{ref_key:"collectionFormRef",ref:g,model:t,"label-width":"auto",rules:F},{default:n(()=>[o(J,{"image-url":t.thumbnailUrl,onSelectFile:D},null,8,["image-url"]),o(i,{label:"合集名称：",prop:"name"},{default:n(()=>[o(p,{modelValue:t.name,"onUpdate:modelValue":l[0]||(l[0]=a=>t.name=a),placeholder:"请输入合集名称"},null,8,["modelValue"])]),_:1}),o(i,{style:{"flex-direction":"column"}},{default:n(()=>[o(f,{onClick:d},{default:n(()=>[V("取消")]),_:1}),o(f,{type:"primary",onClick:l[1]||(l[1]=a=>T(g.value))},{default:n(()=>[V("确定")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])],64)}}}),ye=K(ee,[["__scopeId","data-v-17ca54c8"]]);export{ye as default};
