import{g as f,_ as m}from"./index-Bnss-Ia5.js";import{d,I as k,o as t,c as e,a as o,S as v,u as n,U as c,M as u,a7 as h,r as g,b as y,Q as x}from"./@vue-BV9Q_yhH.js";import{g as L}from"./link-DRuoEar2.js";import"./element-plus-D_LIGSL8.js";import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-DVUPgnhb.js";import"./dayjs-Dc0JWrkO.js";import"./@element-plus-DgtNr1CL.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";/* empty css                             */import"./pinia-CWZPuNdE.js";import"./axios-Cm0UX6qg.js";import"./vue-router-DaOdIdNP.js";import"./vue-pdf-embed-BcRweBTn.js";import"./request_website-D510ohil.js";const z={class:"link-card-root"},b={class:"link-card",style:{width:"100%"}},w={class:"link-items"},B=["href"],U=["src"],S=["src"],A={class:"link-text"},G={class:"nowrap link-title"},M={class:"nowrap",style:{"font-size":"12px"}},W=d({__name:"index",props:{title:{},tsize:{},items:{},isize:{}},setup(l){const r=l,{title:i,tsize:_,items:a}=k(r);return(p,E)=>(t(),e("div",z,[o("div",b,[o("div",{class:"name",style:v({fontSize:n(_)||"3rem"})},c(n(i)),5),o("div",w,[(t(!0),e(u,null,h(n(a),s=>(t(),e("a",{href:s.url,target:"_blank",class:"el-card is-hover-shadow link-item",key:s.url},[s.coverUrl.startsWith("http")?(t(),e("img",{key:0,src:s.coverUrl,alt:"Logo",class:"img"},null,8,U)):(t(),e("img",{key:1,src:n(f)()+s.coverUrl,alt:"Logo",class:"img"},null,8,S)),o("div",A,[o("div",G,c(s.name),1),o("div",M,c(s.remark),1)])],8,B))),128))])])]))}}),$=m(W,[["__scopeId","data-v-beb68f63"]]),C={class:"gray-link-root"},D=d({__name:"Links",setup(l){const r=g([]);return y(async()=>{await L().then(i=>{r.value=i.data})}),(i,_)=>(t(),e("div",C,[(t(!0),e(u,null,h(r.value,(a,p)=>(t(),x($,{key:p,title:a.name,items:a.links},null,8,["title","items"]))),128))]))}}),tt=m(D,[["__scopeId","data-v-7a68ed7c"]]);export{tt as default};
