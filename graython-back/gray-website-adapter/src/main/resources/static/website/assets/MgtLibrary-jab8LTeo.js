import{E as D,b as de,m as ve,n as pe,o as fe,p as me,q as _e,r as ge,g as ye}from"./element-plus-CJC0wB9Y.js";import{g as z,_ as B}from"./index-efiyaIaG.js";import{g as he,h as we,p as X,i as be,s as ke,j as Ce}from"./resources-CahXK3vj.js";import{b as Y}from"./vue-router-CN4d8vP8.js";import{d as G,r as l,b as j,o as c,c as g,a as o,T as W,M as F,a7 as q,U as I,S as $e,u as x,at as O,au as K,I as ee,L as d,P as h,V,x as xe,Z as Ie,am as Pe,aj as Q,J as Z,Q as U}from"./@vue-l7diRTBz.js";import{F as Ae}from"./file-saver-CJAWeVrG.js";import{D as Se,E as Te}from"./@element-plus-C5UfBZZn.js";import"./lodash-es-CZlvcgvt.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-B8VPWXef.js";import"./dayjs-Dc0JWrkO.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";import"./pinia-UVQjpmfQ.js";import"./axios-Cm0UX6qg.js";import"./vue-pdf-embed-lua1maMu.js";import"./request_website-lXUAtQsY.js";const te=r=>(O("data-v-40a7cdca"),r=r(),K(),r),Me={class:"class-items"},Ve=te(()=>o("br",null,null,-1)),Ee=te(()=>o("br",null,null,-1)),Re={class:"buttons"},Ue=G({__name:"GWClassifyImage",setup(r){const P=Y(),u=l([]);let n=!0;const p=P.params.id;l(1);const w=l(),y=l(),m=l();let f;const v=()=>{if(n){n=!1;const s=document.querySelectorAll(".item");w.value.prepend(s[s.length-1]),setTimeout(()=>n=!0,1e3)}},_=()=>{if(n){n=!1;const s=document.querySelectorAll(".item");w.value.appendChild(s[0]),setTimeout(()=>n=!0,1e3)}},k=async s=>{const e=s.key;if(/^[0-9]$/.test(e)){if(console.log(`按下了数字键：${e}`),u.value){let i={id:u.value[0].id,classification:f.get(Number.parseInt(e))};await we(i),u.value.shift(),u.value.length===5&&t(2,5)}}else s.key.toLowerCase()==="n"?_():s.key.toLowerCase()==="p"&&v()},t=async(s,e)=>{await X({pageNo:s,pageSize:e,libraryId:p,resourceTypes:[0,3],unclassified:!0}).then(i=>{var A;(A=u.value)==null||A.push(...i.data.result)})};return j(async()=>{y.value&&w.value.focus(),t(1,10),await he().then(s=>{s.data&&(m.value=s.data,f=new Map(m.value.map(e=>[e.value,e.name])))})}),(s,e)=>(c(),g("div",{class:"container",ref_key:"contaionerRef",ref:y,onKeydown:k,tabindex:"0"},[o("div",Me,[W(" 分类列表 "),Ve,W(" ------- "),Ee,(c(!0),g(F,null,q(m.value,i=>(c(),g("div",{key:i.value},"[ "+I(i.value)+" ] "+I(i.name),1))),128))]),o("div",{ref_key:"slideRef",ref:w,id:"slide"},[(c(!0),g(F,null,q(u.value,i=>(c(),g("div",{class:"item",style:$e({backgroundImage:`url('${x(z)()+i.previewUrl}')`})},null,4))),256)),o("div",Re,[o("div",{class:"left",onClick:e[0]||(e[0]=i=>v())},"< Prev"),o("div",{class:"right",onClick:e[1]||(e[1]=i=>_())},"Next >")])],512)],544))}}),De=B(Ue,[["__scopeId","data-v-40a7cdca"]]),We=r=>(O("data-v-a524a149"),r=r(),K(),r),Be=["src","alt"],Ge={class:"more-options"},Le={key:0,class:"options-div"},Ne=We(()=>o("div",{id:"triangle_bottom"},null,-1)),ze={class:"options-menu"},Fe={key:0},qe=G({__name:"GWResourceCard",props:{resource:{},onPreview:{type:Function},onCover:{type:Function},onDelete:{type:Function}},setup(r){const P=l(!1),u=l(!1),n=r,{resource:p}=ee(n);j(()=>{});const w=()=>p.value.thumbnailUrl?z()+p.value.thumbnailUrl:"/music.jpeg";function y(){n.onPreview&&n.onPreview(n.resource)}function m(){n.onCover&&n.onCover(n.resource)}function f(){P.value=!1,u.value=!1}const v=()=>{u.value=!u.value},_=async()=>{n.resource.id&&await be(n.resource.id).then(t=>{t.data>0?(D({type:"info",message:"删除成功"}),n.onDelete&&n.onDelete()):D({type:"error",message:"文件删除失败"})})},k=(t,s)=>{fetch(t).then(e=>e.blob()).then(e=>{Ae.saveAs(e,s)}).catch(e=>{console.error("Error fetching file:",e),D({type:"error",message:"文件下载异常"})})};return(t,s)=>{const e=de;return c(),g("div",{class:"resource-card",onMouseover:s[1]||(s[1]=i=>P.value=!0),onMouseleave:f},[o("img",{src:w(),alt:x(p).name,class:"image",onClick:y},null,8,Be),o("div",Ge,[o("button",{onClick:v,class:"more-btn"},"⋮"),u.value?(c(),g("div",Le,[Ne,o("div",ze,[o("ul",null,[x(p).thumbnail==="是"?(c(),g("li",Fe,[d(e,{class:"box-item",effect:"dark",content:"库封面",placement:"right"},{default:h(()=>[o("span",{onClick:m,class:"iconbl bl-star-line"})]),_:1})])):V("",!0),o("li",null,[d(e,{class:"box-item",effect:"dark",content:"下载",placement:"right"},{default:h(()=>[o("span",{onClick:s[0]||(s[0]=i=>k(x(z)()+x(p).previewUrl,x(p).name)),class:"iconbl bl-download--line"})]),_:1})]),o("li",null,[d(e,{class:"box-item",effect:"dark",content:"删除",placement:"right"},{default:h(()=>[o("span",{onClick:_,class:"iconbl bl-delete-line"})]),_:1})])])])])):V("",!0)])],32)}}}),je=B(qe,[["__scopeId","data-v-a524a149"]]),Oe=r=>(O("data-v-f56f9adc"),r=r(),K(),r),Ke={class:"audio-name"},He=Oe(()=>o("span",{class:"iconfont icon-audio_frequency"},null,-1)),Je={class:"controls"},Qe={class:"time-info"},Ze=["max"],Xe={key:0,class:"overlay"},Ye=G({__name:"GWAudioPreview",props:{url:{},name:{},duration:{}},setup(r,{expose:P}){const u=r,{url:n,name:p,duration:w}=ee(u),y=l(w.value),m=l(!0),f=l(!1),v=l(0),_=l(!1),k=C=>{const b=Math.floor(C/60),a=Math.floor(C%60);return`${String(b).padStart(2,"0")}:${String(a).padStart(2,"0")}`};Array.from({length:10});let t;const s=l(null),e=l(null);let i;const A=async()=>{t||(t=new window.AudioContext),t.state==="suspended"&&await t.resume(),s.value||await N(n.value),T()},L=()=>{m.value?(A(),m.value=!1):f.value?E():T()},T=async()=>{s.value&&(t.state==="suspended"?(t.resume(),console.log("播放中"),f.value=!0,i=setInterval(()=>{t.state==="running"&&(v.value=t.currentTime)},100)):(e.value=t.createBufferSource(),e.value.buffer=s.value,e.value.connect(t.destination),e.value.start(),console.log("播放中..."),f.value=!0,i=setInterval(()=>{t.state==="running"&&(v.value=t.currentTime)},100),e.value.onended=()=>{console.log("播放结束"),f.value=!1,clearInterval(i),v.value=0,t=null,e.value&&(e.value.stop(),e.value=null),m.value=!0}))},E=()=>{t.state==="running"&&t.suspend().then(()=>{console.log("已暂停"),f.value=!1,clearInterval(i)})},N=async C=>{const a=await(await fetch(C)).arrayBuffer();s.value=await new Promise(($,M)=>{t.decodeAudioData(a,S=>{S?(y.value=S.duration,$(S),console.log("音频已加载，准备播放")):M(new Error("音频解码失败"))})})};return xe(()=>{e.value&&e.value.stop(),i&&clearInterval(i)}),P({reset:()=>{m.value=!0,t&&(t.close(),t=null),f.value=!1,v.value=0,_.value=!1,s.value=null,e.value=null}}),(C,b)=>(c(),g("div",{class:"audio-player",onMouseover:b[1]||(b[1]=a=>_.value=!0),onMouseleave:b[2]||(b[2]=a=>_.value=!1)},[o("div",Ke,I(x(p)),1),He,o("div",Je,[o("div",Qe,[o("span",null,I(k(v.value)),1),Ie(o("input",{type:"range",min:"0",max:y.value,step:"0.1","onUpdate:modelValue":b[0]||(b[0]=a=>v.value=a)},null,8,Ze),[[Pe,v.value]]),o("span",null,I(k(y.value)),1)])]),_.value?(c(),g("div",Xe,[o("div",{class:"play-button",onClick:L},I(f.value?"⏸️":"▶️"),1)])):V("",!0)],32))}}),et=B(Ye,[["__scopeId","data-v-f56f9adc"]]),tt={class:"root-container"},at={style:{"text-align":"right",display:"inline-block",width:"100%"}},st={style:{"text-align":"right",display:"inline-block",width:"100%"}},ot={key:0,class:"resource-gallery"},nt={style:{width:"100%"}},lt=G({__name:"MgtLibrary",setup(r){const u=Y().params.id,n=l("1"),p=l(0),w=l(0),y=l(1),m=l(20),f=function(a,$){n.value=a},v=l(),_=l(!1),k=l(!1),t=l(!1),s=l(),e=l({}),i=a=>{a.resourceType==="视频"?L(a):a.resourceType==="音频"?T(a):A(a)},A=a=>{e.value=a,_.value=!0},L=a=>{k.value=!0,e.value=a},T=a=>{t.value=!0,e.value=a},E=()=>{_.value=!1,k.value=!1},N=()=>{s.value.reset(),t.value=!1},H=async a=>{let $={id:u,cover:a.id};await Ce($).then(M=>{D({type:"info",message:"库封面设置成功"})})},C=async()=>{await X({pageNo:y.value,pageSize:m.value,libraryId:u}).then(a=>{v.value=a.data.result,p.value=a.data.total})},b=a=>{y.value=a,C()};return j(async()=>{C(),await ke({libraryId:u,resourceTypes:[0,3],unclassified:!0}).then(a=>{w.value=a.data.unclassified})}),(a,$)=>{const M=pe,S=fe,ae=me,se=_e,oe=je,ne=ge,le=Q("GWPreviewImage"),ie=Q("GWPreviewVideo"),re=ye,ue=De,J=ve;return c(),g("div",tt,[d(J,{class:"layout-container-demo"},{default:h(()=>[d(se,{width:"200px"},{default:h(()=>[d(ae,{"default-active":n.value,onSelect:f},{default:h(()=>[d(S,{index:"1",class:Z(n.value==="1"?"selectTab":"")},{title:h(()=>[d(M,null,{default:h(()=>[d(x(Se))]),_:1}),W("全部 "),o("span",at,I(p.value),1)]),_:1},8,["class"]),d(S,{index:"2",class:Z(n.value==="2"?"selectTab":"")},{title:h(()=>[d(M,null,{default:h(()=>[d(x(Te))]),_:1}),W("待分类图片 "),o("span",st,I(w.value),1)]),_:1},8,["class"])]),_:1},8,["default-active"])]),_:1}),d(J,{class:"right-container"},{default:h(()=>[n.value==="1"?(c(),g("div",ot,[(c(!0),g(F,null,q(v.value,(R,ce)=>(c(),U(oe,{key:ce,resource:R,"on-preview":i,"on-cover":H,"on-delete":C},null,8,["resource"]))),128)),o("div",nt,[d(ne,{style:{"flex-direction":"row-reverse"},background:"",layout:"prev, pager, next",total:p.value,"pager-count":5,"page-size":m.value,"current-page":y.value,onCurrentChange:b},null,8,["total","page-size","current-page"])]),_.value?(c(),U(le,{key:0,resource:e.value.previewUrl,name:e.value.name,"on-close":E},null,8,["resource","name"])):V("",!0),k.value?(c(),U(ie,{key:1,url:e.value.previewUrl,name:e.value.name,"on-close":E},null,8,["url","name"])):V("",!0),d(re,{style:{padding:"30px","min-height":"200px"},title:"音频预览",modelValue:t.value,"onUpdate:modelValue":$[0]||($[0]=R=>t.value=R),onClose:$[1]||($[1]=R=>N())},{default:h(()=>[d(et,{ref_key:"audioPreviewRef",ref:s,name:e.value.name,duration:e.value.duration,url:e.value.previewUrl,class:"img-item"},null,8,["name","duration","url"])]),_:1},8,["modelValue"])])):(c(),U(ue,{key:1}))]),_:1})]),_:1})])}}}),$t=B(lt,[["__scopeId","data-v-a7535727"]]);export{$t as default};