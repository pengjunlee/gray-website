import{_ as c,d as l,o,c as t,g as a,F as u,r as p,t as r}from"./main.a71403af.js";const i=["onClick"],y=l({__name:"ToyShopBox",props:{toys:{type:Array,required:!0}},setup(n){return(_,d)=>(o(),t("div",null,[a("ul",null,[(o(!0),t(u,null,p(n.toys,(s,e)=>(o(),t("li",{key:e},[a("a",{href:"#",onClick:m=>_.$emit("itemClickEvent","toy "+(e+1))},"\u3010 "+r(e+1)+" \u3011 "+r(s.name)+"\uFF1A"+r(s.desc),9,i)]))),128))])]))}});var v=c(y,[["__scopeId","data-v-7058ee46"],["__file","/Users/pengjunlee/workspace/graython-website/graython-station/src/commands/toy/ToyShopBox.vue"]]);export{v as default};
