import{_ as i,d as n,l as s,b as u,T as m,o as r,c,g as d,t as l,C as _}from"./main.25781b05.js";const h=["src"],p={key:0},f=n({__name:"MusicBox",setup(g){const t=s(),a=s("");return u(async()=>{const e=await m();if((e==null?void 0:e.code)===2e4){const o=e.data;t.value="//music.163.com/outchain/player?type=2&auto=1&height=66&id="+o.mid}else a.value="\u672A\u627E\u5230\u97F3\u4E50"}),(e,o)=>(r(),c("div",null,[d("iframe",{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"330",height:"86",src:t.value},null,8,h),a.value?(r(),c("div",p,l(a.value),1)):_("v-if",!0)]))}});var x=i(f,[["__file","/Users/pengjunlee/workspace/graython-website/graython-station/src/commands/relax/music/MusicBox.vue"]]);export{x as default};
