import{d as c,l as s,b as i,T as u,o as r,c as n,g as d,t as m,C as l}from"./main.52daf70d.js";const h=["src"],_={key:0},g=c({__name:"MusicBox",setup(p){const t=s(),a=s("");return i(async()=>{const e=await u();if((e==null?void 0:e.code)===2e4){const o=e.data;t.value="//music.163.com/outchain/player?type=2&auto=1&height=66&id="+o.mid}else a.value="\u672A\u627E\u5230\u97F3\u4E50"}),(e,o)=>(r(),n("div",null,[d("iframe",{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"330",height:"86",src:t.value},null,8,h),a.value?(r(),n("div",_,m(a.value),1)):l("",!0)]))}});export{g as default};
