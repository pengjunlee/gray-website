import{r as s,t as v,_ as f}from"./index-BrhFncrl.js";import{_ as b}from"./Header.vue_vue_type_style_index_0_lang-Dz1C2kY9.js";import{d as h,r as t,w as y,c as x,Q as n,V as A,L as C,P as L,ah as g,o as a,R as k,av as T}from"./@vue-BV9Q_yhH.js";import"./element-plus-D_LIGSL8.js";import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-DVUPgnhb.js";import"./dayjs-Dc0JWrkO.js";import"./@element-plus-DgtNr1CL.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";/* empty css                             */import"./pinia-CWZPuNdE.js";import"./axios-Cm0UX6qg.js";import"./vue-router-DaOdIdNP.js";import"./vue-pdf-embed-BcRweBTn.js";import"./auth-Du5-fmn5.js";const w={class:"flex-container"},B=h({__name:"Admin",setup(V){const c=t([{icon:"icon-wangzhanguanli",name:"Collection",title:"合集"},{icon:"icon-heji",name:"Library",title:"库"},{icon:"icon-wangzhantubiao",name:"Anchor",title:"网址"}]),o=t("Library"),r=t(["Library"]),m=t("Library");y(()=>s.currentRoute.value,e=>{e.name&&(m.value=e.name,o.value=e.name.toString()),e.meta.keepAlive&&r.value.indexOf(e.name)===-1&&r.value.push(e.name)},{immediate:!0});const l=["Login"],p=()=>{const e=s.currentRoute.value;return!(e!=null&&e.name&&l.find(i=>i===e.name))},u=e=>{o.value=e,v(e)};return(e,i)=>{const d=g("router-view");return a(),x("div",w,[p()?(a(),n(b,{key:0,tabs:c.value,selectedTab:o.value,"onUpdate:selectedTab":u},null,8,["tabs","selectedTab"])):A("",!0),C(d,null,{default:L(({Component:_})=>[(a(),n(T,{include:[r.value]},[(a(),n(k(_)))],1032,["include"]))]),_:1})])}}}),J=f(B,[["__scopeId","data-v-fe028796"]]);export{J as default};
