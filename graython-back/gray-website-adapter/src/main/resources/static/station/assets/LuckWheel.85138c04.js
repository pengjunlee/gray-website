import{_ as r,d as c,l as a,b as _,c as i,g as t,o as l}from"./main.f9b6f8c7.js";var p="./assets/green_bottle.34a9f341.png";const d={class:"container"},u={class:"pointer-wrap"},f={class:"btn-wrap"},v=c({__name:"LuckWheel",setup(h){const n=a(),s=a();return _(()=>{let e=0;const o=s.value;n.value.addEventListener("click",function(){e=e+2*360+Math.random()*360,o.style.transform=`rotate(${e}deg)`})}),(e,o)=>(l(),i("div",d,[t("div",u,[t("img",{ref_key:"pointerRef",ref:s,id:"pointer",src:p,alt:"pointer"},null,512)]),t("div",f,[t("button",{ref_key:"btnRef",ref:n,id:"btn",class:"btn"},"Run",512)])]))}});var g=r(v,[["__scopeId","data-v-07cf7c20"],["__file","/Users/pengjunlee/workspace/graython-website/graython-station/src/commands/toy/shop/LuckWheel.vue"]]);export{g as default};
