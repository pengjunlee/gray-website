import{d as P,e as R,f as ne,g as se,h as re,i as ie,j as de,k as ce,c as ue,E as C}from"./element-plus-D_LIGSL8.js";import{d as z,r,b as D,w as S,o as i,c as v,a as p,L as o,P as n,M as L,a7 as N,Q as I,H as M,Y as V,u as me,T as U}from"./@vue-BV9Q_yhH.js";import{u as pe}from"./vue-router-DaOdIdNP.js";import{l as q,a as $,r as A,b as fe,d as _e,c as he}from"./resources-CqmEGsv3.js";import{G as F}from"./GWTitleImageCard-Df5hq5fe.js";import{_ as G}from"./index-CO_KhjXY.js";import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-DVUPgnhb.js";import"./dayjs-Dc0JWrkO.js";import"./@element-plus-DgtNr1CL.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";import"./request_website-D1CVj42G.js";import"./axios-Cm0UX6qg.js";/* empty css                             */import"./pinia-CWZPuNdE.js";import"./vue-pdf-embed-BcRweBTn.js";const ve={class:"gw-search-root"},be={class:"search-item"},ge=z({__name:"LibrarySearch",emits:["change"],setup(j,{emit:y}){const f=r(),d=r(),b=y;return D(async()=>{await q().then(c=>{c.data&&(f.value=c.data)})}),S(()=>d.value,c=>{b("change",c)},{deep:!0,immediate:!0}),(c,g)=>{const _=P,u=R;return i(),v("div",ve,[p("div",be,[o(u,{modelValue:d.value,"onUpdate:modelValue":g[0]||(g[0]=s=>d.value=s),clearable:"",placeholder:"合集",style:{width:"150px"}},{default:n(()=>[(i(!0),v(L,null,N(f.value,s=>(i(),I(_,{key:s.id,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])])}}}),ye=G(ge,[["__scopeId","data-v-a4bb0c05"]]),ke={class:"library-container"},we={class:"graython-library-root"},xe=["onClick"],Ce=["onClick"],Ve=["onClick"],Le={style:{display:"inline-block","margin-left":"79px"}},Ne=z({__name:"Library",setup(j){const y=pe(),f=r(),d=r(),b=r();D(()=>{_()});const c=e=>{e!=null&&e.id&&window.open(y.resolve({name:"MgtLibrary",params:{id:e.id}}).href,"_blank")},g=async e=>{await $(e||0).then(a=>{d.value=a.data})},_=async()=>{await $(0).then(e=>{d.value=e.data}),await q().then(e=>{b.value=e.data})},u=r(!1),s=r(""),E=r();S(s,e=>{E.value.filter(e)});const H=(e,a)=>e?a.label.includes(e):!0,k=r([]),l=M({name:""}),O=M({name:[{required:!0,message:"请输入库名称",trigger:"blur"}],folderName:[{required:!0,message:"请选择库对应的文件夹",trigger:"blur"}]}),Q={children:"children",label:"name"},w=e=>{e?(l.id=e.id,l.name=e.name,l.folderName=e.folderName,l.folderPath=e.folderPath,l.collectionId=e.collectionId):(l.id=void 0,l.name="",l.folderName="",l.folderPath="",l.collectionId=void 0)},W=async()=>{w(),await A().then(e=>{k.value=e.data,u.value=!0})},Y=async e=>{w(e),await A().then(a=>{k.value=a.data,u.value=!0})};function J(e){ue.confirm("确定要删除库["+e.name+"]吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await _e(e.id).then(()=>{_()}),C({type:"success",message:"删除成功!"})}).catch(()=>{C({type:"info",message:"取消删除"})})}const x=()=>{u.value=!1},K=async e=>{e&&await e.validate(async(a,h)=>{a?await fe(l).then(m=>{w(),x(),_()}):console.log("error submit!",h)})},X=e=>{he(e.id),C({type:"success",message:"开始同步!"})},Z=e=>{l.folderPath=e.path,l.folderName=e.name};return(e,a)=>{const h=re,m=ie,ee=P,te=R,B=de,le=ce,ae=ne;return i(),v("div",ke,[o(ye,{onChange:g}),p("div",we,[o(F,{blankCard:!0,onClick:W}),(i(!0),v(L,null,N(d.value,(t,oe)=>(i(),I(F,{blankCard:!1,key:oe,image:t.coverUrl,title:t.name,"card-data":t,"click-t":c},{"customize-btn":n(()=>[p("span",{onClick:V(T=>Y(t),["stop"]),style:{color:"green"},class:"customize-btn iconbl bl-a-fileedit-line"},null,8,xe),p("span",{onClick:V(T=>X(t),["stop"]),style:{color:"#13aeff"},class:"customize-btn iconbl bl-refresh-line"},null,8,Ce),p("span",{onClick:V(T=>J(t),["stop"]),style:{color:"red"},class:"customize-btn iconbl bl-delete-line"},null,8,Ve)]),_:2},1032,["image","title","card-data"]))),128))]),o(ae,{style:{padding:"30px","max-height":"500px",overflow:"scroll"},title:"管理库",modelValue:u.value,"onUpdate:modelValue":a[5]||(a[5]=t=>u.value=t),width:"500px",onClose:x},{default:n(()=>[o(le,{ref_key:"libraryFormRef",ref:f,model:l,"label-width":"auto",rules:O},{default:n(()=>[o(m,{label:"库名称：",prop:"name"},{default:n(()=>[o(h,{modelValue:l.name,"onUpdate:modelValue":a[0]||(a[0]=t=>l.name=t),placeholder:"请输入库名称"},null,8,["modelValue"])]),_:1}),o(m,{label:"合集：",prop:"collectionId"},{default:n(()=>[o(te,{modelValue:l.collectionId,"onUpdate:modelValue":a[1]||(a[1]=t=>l.collectionId=t),filterable:"",placeholder:"请选择库所属的合集",style:{width:"200px"}},{default:n(()=>[(i(!0),v(L,null,N(b.value,t=>(i(),I(ee,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(m,{label:"库地址：",prop:"folderName"},{default:n(()=>[o(h,{readonly:"",modelValue:l.folderName,"onUpdate:modelValue":a[2]||(a[2]=t=>l.folderName=t),placeholder:"请选择库对应的文件夹"},null,8,["modelValue"])]),_:1}),o(m,null,{default:n(()=>[p("div",Le,[o(h,{modelValue:s.value,"onUpdate:modelValue":a[3]||(a[3]=t=>s.value=t),style:{width:"200px"},placeholder:"搜索文件夹"},null,8,["modelValue"]),o(me(se),{ref_key:"treeRef",ref:E,style:{"max-width":"500px",margin:"10px 0"},class:"filter-tree",data:k.value,props:Q,accordion:"","filter-node-method":H,onNodeClick:Z},null,8,["data"])])]),_:1}),o(m,{style:{"flex-direction":"column"}},{default:n(()=>[o(B,{onClick:x},{default:n(()=>[U("取消")]),_:1}),o(B,{type:"primary",onClick:a[4]||(a[4]=t=>K(f.value))},{default:n(()=>[U("确定")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}}),Oe=G(Ne,[["__scopeId","data-v-50f81c7a"]]);export{Oe as default};
