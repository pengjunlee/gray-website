import{_ as C,d as b,l as r,b as B,c as S,g as e,o as A}from"./main.e564e3ac.js";const P={class:"container"},w={class:"main"},D=b({__name:"ColorBarClock",setup(M){const d=r(),u=r(),_=r(),f=r(),v=r(),y=r();B(()=>{var s=u.value,a=_.value,o=f.value,n=v.value,l=y.value,c=d.value;setInterval(()=>{R(c,s,a,o,n,l)},1e3)});const R=(s,a,o,n,l,c)=>{var t=new Date,i=t.getMonth(),p=t.getDate(),g=t.getHours(),m=t.getMinutes(),h=t.getSeconds(),k=t.getFullYear();a.style.setProperty("--s",String(i/12*100)+"%"),a.setAttribute("datatext",("0"+(i+1)).slice(-2));var x=new Date(k,i+1,0).getDate();o.style.setProperty("--s",String(p/x*100)+"%"),o.setAttribute("datatext",("0"+p).slice(-2)),n.style.setProperty("--s",String(g/24*100)+"%"),n.setAttribute("datatext",("0"+g).slice(-2)),l.style.setProperty("--s",String(m/60*100)+"%"),l.setAttribute("datatext",("0"+m).slice(-2)),c.style.setProperty("--s",String(h/60*100)+"%"),c.setAttribute("datatext",("0"+h).slice(-2)),s.innerText=k.toString()};return(s,a)=>(A(),S("div",P,[e("div",{id:"year",ref_key:"yearRef",ref:d},null,512),e("div",w,[e("span",{ref_key:"monthRef",ref:u,id:"month"},null,512),e("span",{ref_key:"dayRef",ref:_,id:"day"},null,512),e("span",{ref_key:"hourRef",ref:f,id:"hour"},null,512),e("span",{ref_key:"minRef",ref:v,id:"min"},null,512),e("span",{ref_key:"secRef",ref:y,id:"sec"},null,512)])]))}});var j=C(D,[["__scopeId","data-v-42563d98"],["__file","/Users/pengjunlee/workspace/graython-website/graython-station/src/commands/toy/shop/ColorBarClock.vue"]]);export{j as default};
