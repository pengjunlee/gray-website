import{_ as f,d as v,A as k,N as m,o as a,c as l,g as e,F,r as y,O as B,P as b,I as c,t as i,u as r,Q as w,E as x,G as C}from"./main.edbd7862.js";const u=o=>(x("data-v-054d7fb6"),o=o(),C(),o),D={class:"main"},T={class:"taskDiv"},I=["id","onUpdate:modelValue","checked"],S=["for"],g=u(()=>e("span",null,"\u5DF2\u5B8C\u6210",-1)),A=u(()=>e("span",null,"\u672A\u5B8C\u6210",-1)),Y=[g,A],E=["onClick"],M=v({__name:"TodoBox",props:{today:{type:Boolean}},setup(o){k(o);const{taskList:p,deleteTask:_}=m(),h=d=>{_(d)};return(d,z)=>(a(),l("div",D,[e("ul",null,[(a(!0),l(F,null,y(r(p),(s,t)=>(a(),l("li",{key:t},[e("div",T,[B(e("input",{type:"checkbox",id:"label"+t,"onUpdate:modelValue":n=>s.isFinished=n,checked:s.isFinished},null,8,I),[[b,s.isFinished]]),e("label",{for:"label"+t},Y,8,S),e("span",null,[e("div",{style:{width:"700px","word-wrap":"break-word","white-space":"pre-wrap"},class:c({completed:s.isFinished})},i(s.name),3),e("div",{style:{color:"aqua","font-size":"small","font-style":"italic"},class:c({completed:s.isFinished})}," \u521B\u5EFA\u65F6\u95F4\uFF1A"+i(r(w)(s.createTime).format("YYYY-MM-DD HH:mm:ss")),3)])]),e("button",{class:"deleteBtn",onClick:n=>h(t)},"\u5220\u9664",8,E)]))),128))])]))}});var L=f(M,[["__scopeId","data-v-054d7fb6"]]);export{L as default};