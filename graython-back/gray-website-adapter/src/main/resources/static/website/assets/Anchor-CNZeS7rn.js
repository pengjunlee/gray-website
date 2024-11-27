import{f as $,c as O,E,d as j,e as H,h as J,i as P,j as Q,k as W}from"./element-plus-8efUW2IF.js";import{a as K,l as X,d as Y,b as Z}from"./link-cZO64DsY.js";import{G as L}from"./GWTitleImageCard-DJJyx8L2.js";import{_ as ee}from"./ImageUpload-c1Kr0uQb.js";import{_ as le}from"./GWSearchCondition-fNwGO_w9.js";import{d as ae,r as m,b as oe,H as F,w as te,c as g,L as t,P as r,a as y,M as k,a7 as h,o as u,Q as w,T as B}from"./@vue-BV9Q_yhH.js";import{_ as re}from"./index-D8NwEpjL.js";import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-DVUPgnhb.js";import"./dayjs-Dc0JWrkO.js";import"./@element-plus-DgtNr1CL.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";import"./request_website-CnR_fOv1.js";import"./axios-Cm0UX6qg.js";import"./pinia-CWZPuNdE.js";import"./vue-router-DaOdIdNP.js";import"./vue-pdf-embed-BcRweBTn.js";const ne={class:"library-container"},ue={class:"flex-item"},se={class:"graython-Link-root"},ie=["onClick"],me=["onClick"],pe=ae({__name:"Anchor",setup(de){const c=m(!0),C=m(),T=m(),b=m(),n=m();oe(async()=>{await K().then(a=>{b.value=a.data}),v(n.value)});const v=async a=>{n.value=a,await X(n.value?n.value:-1).then(o=>{T.value=o.data})},p=m(!1),e=F({name:"",remark:"",url:"",cover:"",coverUrl:"",groupType:0});let x;const A=F({name:[{required:!0,message:"请输入网站名称",trigger:"blur"}],remark:[{required:!0,message:"请输入网站描述",trigger:"blur"}],url:[{required:!0,message:"请输入网站链接",trigger:"blur"}]}),f=a=>{a?(e.id=a.id,e.name=a.name,e.remark=a.remark,e.url=a.url,e.cover=a.cover,e.coverUrl=a.coverUrl,e.groupType=a.groupType):(e.id=void 0,e.name="",e.remark="",e.url="",e.cover="",e.coverUrl=void 0,e.groupType=0)},R=()=>{f(),p.value=!0},q=a=>{f(a),p.value=!0};function z(a){O.confirm("确定要删除合集["+a.name+"]吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await Y(a.id).then(()=>{v(n.value)}),E({type:"success",message:"删除成功!"})}).catch(()=>{E({type:"info",message:"取消删除"})})}const V=()=>{p.value=!1,f()},D=async a=>{c.value&&a&&await a.validate(async(o,_)=>{if(o){c.value=!1;let s=new FormData;s.append("file",x),s.append("entity",JSON.stringify({id:e.id,name:e.name,remark:e.remark,url:e.url,cover:e.cover,groupType:e.groupType})),await Z(s).then(d=>{c.value=!0,f(),V(),v(n.value)}).finally(()=>{c.value=!0})}else console.log("error submit!",_)})},I=a=>{x=a};return te(()=>n.value,a=>{v(n.value)},{deep:!0,immediate:!0}),(a,o)=>{const _=j,s=H,d=J,i=P,U=Q,M=W,N=$;return u(),g("div",ne,[t(le,null,{"left-items":r(()=>[y("div",ue,[t(s,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=l=>n.value=l),clearable:"",placeholder:"分组",style:{width:"150px"}},{default:r(()=>[(u(!0),g(k,null,h(b.value,l=>(u(),w(_,{key:l.value,label:l.name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),y("div",se,[t(L,{blankCard:!0,onClick:R}),(u(!0),g(k,null,h(T.value,(l,G)=>(u(),w(L,{blankCard:!1,key:G,image:l.coverUrl,title:l.name,"card-data":l},{"customize-btn":r(()=>[y("span",{onClick:S=>q(l),style:{color:"green"},class:"customize-btn iconbl bl-a-fileedit-line"},null,8,ie),y("span",{onClick:S=>z(l),style:{color:"red"},class:"customize-btn iconbl bl-delete-line"},null,8,me)]),_:2},1032,["image","title","card-data"]))),128))]),t(N,{style:{padding:"30px",height:"600px",overflow:"scroll"},title:"管理网址",modelValue:p.value,"onUpdate:modelValue":o[7]||(o[7]=l=>p.value=l),width:"600px",onClose:V},{default:r(()=>[t(M,{ref_key:"anchorFormRef",ref:C,model:e,"label-width":"auto",rules:A},{default:r(()=>[t(ee,{size:150,"image-url":e.coverUrl,onSelectFile:I},null,8,["image-url"]),t(i,{label:"封面：",prop:"cover"},{default:r(()=>[t(d,{modelValue:e.cover,"onUpdate:modelValue":o[1]||(o[1]=l=>e.cover=l),placeholder:"请输入封面URL"},null,8,["modelValue"])]),_:1}),t(i,{label:"名称：",prop:"name"},{default:r(()=>[t(d,{modelValue:e.name,"onUpdate:modelValue":o[2]||(o[2]=l=>e.name=l),placeholder:"请输入网址名称"},null,8,["modelValue"])]),_:1}),t(i,{label:"描述：",prop:"remark"},{default:r(()=>[t(d,{type:"textarea",rows:2,modelValue:e.remark,"onUpdate:modelValue":o[3]||(o[3]=l=>e.remark=l),placeholder:"请输入网址描述"},null,8,["modelValue"])]),_:1}),t(i,{label:"网址：",prop:"url"},{default:r(()=>[t(d,{modelValue:e.url,"onUpdate:modelValue":o[4]||(o[4]=l=>e.url=l),placeholder:"请输入网址URL"},null,8,["modelValue"])]),_:1}),t(i,{label:"分组：",prop:"groupType"},{default:r(()=>[t(s,{modelValue:e.groupType,"onUpdate:modelValue":o[5]||(o[5]=l=>e.groupType=l),filterable:"",placeholder:"请选择分组",style:{width:"200px"}},{default:r(()=>[(u(!0),g(k,null,h(b.value,l=>(u(),w(_,{key:l.value,label:l.name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(i,{style:{"flex-direction":"column"}},{default:r(()=>[t(U,{onClick:V},{default:r(()=>[B("取消")]),_:1}),t(U,{type:"primary",onClick:o[6]||(o[6]=l=>D(C.value))},{default:r(()=>[B("确定")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}}),Ae=re(pe,[["__scopeId","data-v-945ae05c"]]);export{Ae as default};
