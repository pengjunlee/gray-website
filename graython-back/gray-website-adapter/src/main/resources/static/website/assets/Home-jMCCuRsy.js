import{d as $,b as T}from"./element-plus-CJC0wB9Y.js";import{d as b,u as _,c as v,M as L,a7 as N,V as C,o as f,a as o,L as h,P as y,U as g,g as S,at as k,au as B,r as d,w as I,x as D,b as E,D as A,G as M,T as V}from"./@vue-l7diRTBz.js";import{_ as x}from"./index-kmAYPRuw.js";import{e as w}from"./mitt-CJohXFwE.js";import"./lodash-es-CZlvcgvt.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-B8VPWXef.js";import"./dayjs-Dc0JWrkO.js";import"./@element-plus-C5UfBZZn.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";import"./pinia-UVQjpmfQ.js";import"./axios-Cm0UX6qg.js";import"./vue-router-CN4d8vP8.js";import"./vue-pdf-embed-lua1maMu.js";import"./mitt-DJ65BbbF.js";const P=a=>(k("data-v-e3b16e4a"),a=a(),B(),a),U={key:0,class:"card-container"},H={class:"card-image"},z=P(()=>o("div",{slot:"error",class:"image-slot"},null,-1)),W={class:"card-body"},q={slot:"content"},F={class:"card-desc"},G={class:"card-time"},j=b({__name:"index",props:{resourcePathList:{type:Array,required:!0}},setup(a){var n;const e=S(),l=(n=e==null?void 0:e.proxy)==null?void 0:n.$common,s=()=>window.location.hostname==="graython.us.kg"?"https://graython.us.kg/blossom-api":"http://192.168.192.66:8081";return(r,i)=>{const u=$,p=T;return _(l).isEmpty(a.resourcePathList)?C("",!0):(f(),v("div",U,[(f(!0),v(L,null,N(a.resourcePathList,(c,t)=>(f(),v("div",{key:t,class:"card-item shadow-box-mini"},[o("div",H,[h(u,{class:"my-el-image",style:{width:"100%",height:"100%"},lazy:"","preview-src-list":[c.cover],src:s()+c.cover,fit:"cover"},{default:y(()=>[z]),_:2},1032,["preview-src-list","src"])]),o("div",W,[h(p,{placement:"bottom-start",effect:"light"},{default:y(()=>[o("div",q,g(c.title),1),o("div",F,g(c.title),1)]),_:2},1024),o("div",G," Date: "+g(_(l).getDateDiff(c.createTime)),1)])]))),128))]))}}}),J=x(j,[["__scopeId","data-v-e3b16e4a"]]),K=b({__name:"index",props:{printerInfo:{type:String,default:""},duration:{type:Number,default:100},delay:{type:Number,default:3e3},working:{type:Boolean,default:!0},once:{type:Boolean,default:!1}},setup(a){const e=a,l=d(""),s=d(0),n=d(null),r=d(null),i=d(!0);I(()=>e.working,c),I(()=>e.printerInfo,c),I(s,t=>{l.value=e.printerInfo.slice(0,t)}),D(()=>{n.value&&clearInterval(n.value),r.value&&clearTimeout(r.value)});function u(t){r.value=setTimeout(()=>{n.value=setInterval(()=>{t(),s.value===0||s.value===e.printerInfo.length&&!e.once?(clearInterval(n.value),u(t)):s.value===e.printerInfo.length&&e.once&&clearInterval(n.value)},e.duration)},e.delay)}function p(){let t=s.value;t+=i.value?1:-1,i.value?t===e.printerInfo.length+1&&(t-=2,i.value=!i.value):t===-1&&(t+=2,i.value=!i.value),s.value=t}function c(){s.value=0,r.value!==null&&(clearTimeout(r.value),n.value!==null&&clearInterval(n.value)),e.working?u(p):l.value=e.printerInfo}return E(()=>{e.working?u(p):l.value=e.printerInfo}),(t,re)=>(f(),v("div",null,[A(t.$slots,"paper",{content:l.value})]))}}),m=a=>(k("data-v-b12b227f"),a=a(),B(),a),O={class:"gray-home-root"},Q={class:"banner-div"},R=m(()=>o("div",{class:"round-div-1"},null,-1)),X=m(()=>o("div",{class:"round-div-2"},null,-1)),Y={class:"pic-div"},Z=m(()=>o("img",{id:"bannerImg",src:"",style:{"z-index":"888"},alt:"banner image"},null,-1)),ee=m(()=>o("span",{class:"cursor"},"|",-1)),te=m(()=>o("div",{id:"bannerWave1"},null,-1)),oe=m(()=>o("div",{id:"bannerWave2"},null,-1)),ne="./light.png",ae="./dark.png",se=b({__name:"Home",setup(a){const e=d([{id:137,title:"佳能M50 Mark II拍照",cover:"/preview/1/wallpaper/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8/12.png",createTime:"2023-07-17 11:37:15"},{id:136,title:"苹果14pro给她拍照",cover:"/preview/1/wallpaper/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8/41.png",createTime:"2023-07-17 11:36:43"}]),l=d("技术造就艺术!"),s=d(!0),n=async r=>{console.log("主题又变了");let i=document.getElementById("bannerImg");i instanceof HTMLImageElement&&(i.src=r?ae:ne)};return E(()=>{n(document.documentElement.classList.contains("dark")),w.on("dayNightChanged",r=>{n(r)})}),M(()=>{w.off("dayNightChanged",n)}),(r,i)=>{const u=J;return f(),v("div",O,[o("div",Q,[R,X,o("div",Y,[Z,h(K,{class:"printer",printerInfo:_(l),working:_(s),duration:500,delay:500,once:!1},{paper:y(({content:p})=>[o("h3",null,[V(g(p),1),ee])]),_:1},8,["printerInfo","working"])]),te,oe]),h(u,{resourcePathList:_(e)},null,8,["resourcePathList"])])}}}),ke=x(se,[["__scopeId","data-v-b12b227f"]]);export{ke as default};
