import{d as $,I as A,r as d,Z as M,_ as O,u as n,o as B,c as D,a as s,S as X,w as Y,b as Z,U as q,L as z,H as j,ao as C}from"./@vue-l7diRTBz.js";import{F as U}from"./file-saver-CJAWeVrG.js";import{_ as L}from"./index-DYZQi8qJ.js";import{l as G}from"./vue-pdf-embed-lua1maMu.js";const J=["src","alt"],H=.1,K=.5,Q=3,T=$({__name:"ImageViewer",props:{src:{},name:{},visible:{}},emits:["close"],setup(o,{emit:c}){const f=o,{src:i,name:_,visible:w}=A(f),p=c;function u(){p("close")}const h=()=>{i.value&&fetch(i.value).then(e=>e.blob()).then(e=>{U.saveAs(e,_.value||"image.png")}).catch(e=>console.error("下载图片异常:",e))},m=d(),l=()=>{const e=m.value;e&&(e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen())},t=d(1),y=e=>{e.preventDefault(),e.deltaY<0?v():W()},v=()=>{t.value<Q&&(t.value+=H)},W=()=>{t.value>K&&(t.value-=H)};return(e,be)=>M((B(),D("div",{class:"preview-container",onWheel:y},[s("div",{class:"preview-btns"},[s("span",{style:{"font-size":"24px"},onClick:u,class:"iconfont icon-plus-circle-fill"}),s("span",{style:{"font-size":"24px"},onClick:h,class:"iconfont icon-download1"}),s("span",{style:{"font-size":"24px"},onClick:l,class:"iconfont icon-a-ScreenExpand"})]),s("div",{class:"preview-content",onClick:u},[s("img",{src:n(i),alt:n(_),style:X({transform:`scale(${n(t)})`}),class:"preview-image",ref_key:"previewImageRef",ref:m},null,12,J)])],544)),[[O,n(w)]])}}),ee=L(T,[["__scopeId","data-v-fe36e278"]]),se={class:"preview-container"},oe={class:"preview-content"},te=["src"],ie=$({__name:"VideoViewer",props:{src:{},name:{},visible:{}},emits:["close"],setup(o,{emit:c}){const f=o,{src:i,name:_,visible:w}=A(f),p=c;Y(i,t=>{console.log(t.value)}),Z(()=>{console.log(i.value)});function u(){var t=document.getElementById("videoPlayer");t==null||t.pause(),p("close")}const h=()=>{console.log("视频暂停")},m=()=>{console.log("视频播放结束")},l=()=>{console.log("视频加载被中止")};return(t,y)=>M((B(),D("div",se,[s("div",{class:"preview-btns"},[s("span",{style:{"font-size":"30px"},onClick:u,class:"iconfont icon-plus-circle-fill"})]),s("div",oe,[s("video",{id:"videoPlayer",controls:"",src:n(i),onPause:h,onEnded:m,onAbort:l}," 你的浏览器不支持视频播放。 ",40,te)])],512)),[[O,n(w)]])}}),le=L(ie,[["__scopeId","data-v-cb9d71a7"]]),ne={class:"pdf-preview"},ce={class:"pdf-header"},ae={class:"title"},re={class:"page-tool"},de={class:"page-tool-item"},ve={class:"pdf-container"},pe=$({__name:"PdfViewer",props:{params:{}},emits:["close"],setup(o,{emit:c}){const f=o,{title:i,url:_,doc:w,pages:p}=A(f.params),u=c;function h(){u("close")}function m(){fetch(w.value).then(v=>v.blob()).then(v=>{U.saveAs(v,i.value)}).catch(v=>console.error("下载图片异常:",v))}const l=d(1);function t(){l.value>1&&(l.value-=1)}function y(){l.value<p.value&&(l.value+=1)}return(v,W)=>(B(),D("div",ne,[s("div",ce,[s("p",ae,q(n(i)),1),s("div",re,[s("div",{class:"page-tool-item",onClick:t},"上一页"),s("div",{class:"page-tool-item",onClick:y},"下一页"),s("div",de,q(l.value)+"/"+q(n(p)),1),s("div",{class:"page-tool-item",onClick:m},"下载"),s("div",{class:"page-tool-item",onClick:h},"关闭")])]),s("div",ve,[z(n(G),{class:"paper-pdf",source:n(_),page:l.value},null,8,["source","page"])])]))}}),ue=L(pe,[["__scopeId","data-v-312d82cf"]]);let a=null,S=null;const b=d(!1),E=d(),R=d(),me=(o,c)=>{b.value=!0,E.value=o,R.value=c,a?(a.props.src=E,a.props.name=R,a.props.visible=b):(a=z(ee,{src:E,name:R,visible:b,onClose:fe}),S=document.createElement("div"),document.body.appendChild(S)),C(a,S)},fe=()=>{a&&(b.value=!1,a.props.visible=b,C(a,S))};let r=null,I=null;const P=d(!1),x=d(),F=d(),_e=(o,c)=>{P.value=!0,x.value=o,F.value=c,r?(r.props.src=x,r.props.name=F,r.props.visible=P):(r=z(le,{src:x,name:F,visible:P,onClose:we}),I=document.createElement("div"),document.body.appendChild(I)),C(r,I)},we=()=>{r&&(P.value=!1,x.value="",F.value="",r.props.visible=P,C(r,I))};let N=null,k,V;const g=j({}),he=o=>{g.doc=o.doc,g.title=o.title,g.pages=o.pages,g.url=o.url,N||(N=z(ue,{params:g,onClose:ge}),k=document.createElement("div"),document.body.appendChild(k)),C(N,k),V=k.querySelector(".pdf-preview"),V&&V.classList.remove("hidden")},ge=()=>{V&&V.classList.add("hidden")},ke={previewImage:me,previewVideo:_e,previewPdf:he};export{ke as P};