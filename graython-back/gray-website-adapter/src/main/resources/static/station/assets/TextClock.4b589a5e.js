import{_ as w,d as x,l as r,H as A,b,c as a,g as S,t as o,C as k,F as i,r as c,o as l,I as v,J as d}from"./main.87253db0.js";const T={class:"container"},I={class:"main",id:"main"},M={class:"white"},j=x({__name:"TextClock",setup(z){const B=r(""),D=A(["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"]),h=r([]),m=r([]),g=r([]),C=r([]),E=r([]);b(()=>{setInterval(F,1)});const F=()=>{h.value=[],m.value=[],g.value=[],C.value=[],E.value=[];var n=new Date,_=n.getMonth(),s=n.getDate(),t=n.getHours(),p=n.getMinutes(),f=n.getSeconds();B.value=n.getFullYear().toString();for(var e=0;e<12;e++){let y=0;_+e<12?y=_+e:y=_+e-12;let u=D;h.value.push(u[y])}for(var e=0;e<31;e++){let u="";s+e<=31?u=String(s+e)+"\u65E5":u=String(s+e-31)+"\u65E5",u="0"+u,m.value.push(u.slice(-3))}for(var e=0;e<24;e++){let u="";t+e<=24?u=String(t+e)+":":u=String(t+e-24)+":",u="0"+u,g.value.push(u.slice(-3))}for(var e=0;e<60;e++){let u="";p+e<=60?u=String(p+e)+":":u=String(p+e-60)+":",u="0"+u,C.value.push(u.slice(-3))}for(var e=0;e<60;e++){let u="";f+e<=60?u=String(f+e):u=String(f+e-60),u="0"+u,E.value.push(u.slice(-2))}};return(n,_)=>(l(),a("div",T,[S("div",I,[S("h1",M,o(B.value),1),k(` 
          vue\u7684\u4F7F\u7528\u65B9\u6CD5\u53EF\u4EE5\u8BE6\u89C1vue.js\u7684\u5B98\u65B9\u4E3B\u9875\uFF0C
          \u8FD9\u91CC\u4E3B\u8981\u7528\u5230\u7684\u662Fv-for\u5FAA\u73AF,\u83B7\u53D6\u6570\u7EC4\u5185\u5BB9\u53CA\u7D22\u5F15\u503C,
          v-bind:style\u7ED1\u5B9Acss\u53D8\u91CF
          \u4EE5\u53CA\u4F7F\u7528v-bind:class\u7ED1\u5B9ACSS\u6307\u5B9A\u7C7B 
      `),(l(!0),a(i,null,c(h.value,(s,t)=>(l(),a("div",{class:v(["month",{white:t==0}]),style:d({"--m":t})},o(s),7))),256)),(l(!0),a(i,null,c(m.value,(s,t)=>(l(),a("div",{class:v(["days",{white:t==0}]),style:d({"--d":t})},o(s),7))),256)),(l(!0),a(i,null,c(g.value,(s,t)=>(l(),a("div",{class:v(["hours",{white:t==0}]),style:d({"--h":t})},o(s),7))),256)),(l(!0),a(i,null,c(C.value,(s,t)=>(l(),a("div",{class:v(["min",{white:t==0}]),style:d({"--min":t})},o(s),7))),256)),(l(!0),a(i,null,c(E.value,(s,t)=>(l(),a("div",{class:v(["sec",{white:t==0}]),style:d({"--s":t})},o(s),7))),256))])]))}});var N=w(j,[["__scopeId","data-v-3450e552"],["__file","/Users/pengjunlee/workspace/graython-website/graython-station/src/commands/toy/shop/TextClock.vue"]]);export{N as default};
