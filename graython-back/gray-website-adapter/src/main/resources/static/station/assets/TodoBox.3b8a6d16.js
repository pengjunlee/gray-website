import{_ as F,d as v,A as B,N as k,o as a,c as n,g as e,F as f,r as y,C as u,O as C,P as b,I as c,t as i,u as r,Q as w,E as x,G as g}from"./main.e564e3ac.js";const p=o=>(x("data-v-58db46a5"),o=o(),g(),o),A={class:"main"},D={class:"taskDiv"},T=["id","onUpdate:modelValue","checked"],E=["for"],I=p(()=>e("span",null,"\u5DF2\u5B8C\u6210",-1)),S=p(()=>e("span",null,"\u672A\u5B8C\u6210",-1)),V=[I,S],Y=["onClick"],M=v({__name:"TodoBox",props:{today:{type:Boolean,required:!0}},setup(o){B(o);const{taskList:_,deleteTask:h}=k(),m=d=>{h(d)};return(d,U)=>(a(),n("div",A,[e("ul",null,[(a(!0),n(f,null,y(r(_),(s,t)=>(a(),n("li",{key:t},[e("div",D,[u(" \u5207\u6362\u5B8C\u6210\u72B6\u6001 "),C(e("input",{type:"checkbox",id:"label"+t,"onUpdate:modelValue":l=>s.isFinished=l,checked:s.isFinished},null,8,T),[[b,s.isFinished]]),e("label",{for:"label"+t},V,8,E),e("span",null,[u(" \u663E\u793A\u4EFB\u52A1\u63CF\u8FF0 "),e("div",{style:{width:"700px","word-wrap":"break-word","white-space":"pre-wrap"},class:c({completed:s.isFinished})},i(s.name),3),e("div",{style:{color:"aqua","font-size":"small","font-style":"italic"},class:c({completed:s.isFinished})}," \u521B\u5EFA\u65F6\u95F4\uFF1A"+i(r(w)(s.createTime).format("YYYY-MM-DD HH:mm:ss")),3)])]),u(" \u5220\u9664\u6309\u94AE "),e("button",{class:"deleteBtn",onClick:l=>m(t)},"\u5220\u9664",8,Y)]))),128))])]))}});var q=F(M,[["__scopeId","data-v-58db46a5"],["__file","/Users/pengjunlee/workspace/graython-website/graython-station/src/commands/tool/todo/TodoBox.vue"]]);export{q as default};
