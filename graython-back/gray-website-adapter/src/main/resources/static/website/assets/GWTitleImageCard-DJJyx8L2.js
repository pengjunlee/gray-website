import{g as h,a as f,_ as k}from"./index-D8NwEpjL.js";import{d as y,r as b,I as S,o,c,u as l,a,D as r,L as w,S as C,U as D,Z as I,_ as T,ab as B}from"./@vue-BV9Q_yhH.js";const W={key:0,style:{"align-items":"center","text-align":"center",height:"100%",width:"100%",display:"inline-grid"}},$={key:1,style:{width:"100%",height:"100%",position:"relative"}},x={class:"card-content"},z={class:"card-title"},G={class:"card-btn"},M=y({__name:"GWTitleImageCard",props:{blankCard:{type:Boolean},image:{},title:{},cardData:{},clickT:{type:Function}},setup(d){const i=b(!1),e=d,{blankCard:u,image:n,title:v}=S(e),_=()=>{var t;return(t=n.value)!=null&&t.startsWith("http")?n.value:h()+n.value};function m(){if(e!=null&&e.clickT){const t=e.cardData?B(e.cardData):{};e==null||e.clickT(t)}}return(t,s)=>{const g=f;return o(),c("div",{class:"gw-card",onMouseover:s[0]||(s[0]=p=>i.value=!0),onMouseleave:s[1]||(s[1]=p=>i.value=!1),onClick:m},[l(u)?(o(),c("div",W,[a("div",null,[r(t.$slots,"add-btn",{},()=>[w(g,{size:"50px","icon-class":"add"})],!0)])])):(o(),c("div",$,[a("div",{class:"card-image",style:C({backgroundImage:"url("+_()+")"})},null,4),a("div",x,[a("h3",z,D(l(v)),1)]),I(a("div",G,[r(t.$slots,"customize-btn",{},void 0,!0)],512),[[T,i.value]])]))],32)}}}),U=k(M,[["__scopeId","data-v-6393c234"]]);export{U as G};
