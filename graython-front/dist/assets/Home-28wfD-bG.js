import{d as x,b as T}from"./element-plus-CJC0wB9Y.js";import{d as y,u as m,c as _,M as L,a7 as N,V as C,y as S,o as v,a as t,L as g,P as I,U as f,at as k,au as B,r as d,w as h,x as D,b as E,D as A,G as M,T as V}from"./@vue-l7diRTBz.js";import{_ as $}from"./index-Dh-3IoMf.js";import{e as w}from"./mitt-CJohXFwE.js";import"./lodash-es-CZlvcgvt.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-B8VPWXef.js";import"./dayjs-Dc0JWrkO.js";import"./@element-plus-C5UfBZZn.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";import"./pinia-UVQjpmfQ.js";import"./axios-Cm0UX6qg.js";import"./vue-router-CN4d8vP8.js";import"./vue-pdf-embed-lua1maMu.js";import"./mitt-DJ65BbbF.js";const P=n=>(k("data-v-b68e8822"),n=n(),B(),n),U={key:0,class:"card-container"},H={class:"card-image"},j=P(()=>t("div",{slot:"error",class:"image-slot"},null,-1)),z={class:"card-body"},W={slot:"content"},q={class:"card-desc"},F={class:"card-time"},G=y({__name:"index",props:{resourcePathList:{type:Array,required:!0}},setup(n){const e=S("$common"),c=()=>window.location.hostname==="graython.us.kg"?"https://pengjunlee.us.kg/blossom-api":"http://192.168.192.66:8081";return(l,a)=>{const s=x,r=T;return m(e).isEmpty(n.resourcePathList)?C("",!0):(v(),_("div",U,[(v(!0),_(L,null,N(n.resourcePathList,(i,u)=>(v(),_("div",{key:u,class:"card-item shadow-box-mini"},[t("div",H,[g(s,{class:"my-el-image",style:{width:"100%",height:"100%"},lazy:"","preview-src-list":[i.cover],src:c()+i.cover,fit:"cover"},{default:I(()=>[j]),_:2},1032,["preview-src-list","src"])]),t("div",z,[g(r,{placement:"bottom-start",effect:"light"},{default:I(()=>[t("div",W,f(i.title),1),t("div",q,f(i.title),1)]),_:2},1024),t("div",F," Date: "+f(m(e).getDateDiff(i.createTime)),1)])]))),128))]))}}}),J=$(G,[["__scopeId","data-v-b68e8822"]]),K=y({__name:"index",props:{printerInfo:{type:String,default:""},duration:{type:Number,default:100},delay:{type:Number,default:3e3},working:{type:Boolean,default:!0},once:{type:Boolean,default:!1}},setup(n){const e=n,c=d(""),l=d(0),a=d(null),s=d(null),r=d(!0);h(()=>e.working,b),h(()=>e.printerInfo,b),h(l,o=>{c.value=e.printerInfo.slice(0,o)}),D(()=>{a.value&&clearInterval(a.value),s.value&&clearTimeout(s.value)});function i(o){s.value=setTimeout(()=>{a.value=setInterval(()=>{o(),l.value===0||l.value===e.printerInfo.length&&!e.once?(clearInterval(a.value),i(o)):l.value===e.printerInfo.length&&e.once&&clearInterval(a.value)},e.duration)},e.delay)}function u(){let o=l.value;o+=r.value?1:-1,r.value?o===e.printerInfo.length+1&&(o-=2,r.value=!r.value):o===-1&&(o+=2,r.value=!r.value),l.value=o}function b(){l.value=0,s.value!==null&&(clearTimeout(s.value),a.value!==null&&clearInterval(a.value)),e.working?i(u):c.value=e.printerInfo}return E(()=>{e.working?i(u):c.value=e.printerInfo}),(o,re)=>(v(),_("div",null,[A(o.$slots,"paper",{content:c.value})]))}}),p=n=>(k("data-v-b12b227f"),n=n(),B(),n),O={class:"gray-home-root"},Q={class:"banner-div"},R=p(()=>t("div",{class:"round-div-1"},null,-1)),X=p(()=>t("div",{class:"round-div-2"},null,-1)),Y={class:"pic-div"},Z=p(()=>t("img",{id:"bannerImg",src:"",style:{"z-index":"888"},alt:"banner image"},null,-1)),ee=p(()=>t("span",{class:"cursor"},"|",-1)),te=p(()=>t("div",{id:"bannerWave1"},null,-1)),ne=p(()=>t("div",{id:"bannerWave2"},null,-1)),oe="./light.png",ae="./dark.png",se=y({__name:"Home",setup(n){const e=d([{id:137,title:"佳能M50 Mark II拍照",cover:"/preview/1/wallpaper/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8/12.png",createTime:"2023-07-17 11:37:15"},{id:136,title:"苹果14pro给她拍照",cover:"/preview/1/wallpaper/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8/41.png",createTime:"2023-07-17 11:36:43"}]),c=d("技术造就艺术!"),l=d(!0),a=async s=>{console.log("主题又变了");let r=document.getElementById("bannerImg");r instanceof HTMLImageElement&&(r.src=s?ae:oe)};return E(()=>{a(document.documentElement.classList.contains("dark")),w.on("dayNightChanged",s=>{a(s)})}),M(()=>{w.off("dayNightChanged",a)}),(s,r)=>{const i=J;return v(),_("div",O,[t("div",Q,[R,X,t("div",Y,[Z,g(K,{class:"printer",printerInfo:m(c),working:m(l),duration:500,delay:500,once:!1},{paper:I(({content:u})=>[t("h3",null,[V(f(u),1),ee])]),_:1},8,["printerInfo","working"])]),te,ne]),g(i,{resourcePathList:m(e)},null,8,["resourcePathList"])])}}}),ke=$(se,[["__scopeId","data-v-b12b227f"]]);export{ke as default};
