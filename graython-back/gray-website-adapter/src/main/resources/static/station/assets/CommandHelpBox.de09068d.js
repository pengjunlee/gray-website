import{_ as f,d as g,A as v,n as h,B as C,b as k,o as n,c as a,g as o,t as s,u as e,C as r,F as l,r as i,D as B}from"./main.66e5f742.js";const A={key:0},E={key:1},D=o("div",null,"\u5B50\u547D\u4EE4\uFF1A",-1),b={style:{"margin-bottom":"0"}},x=o("div",null,"\u53C2\u6570\uFF1A",-1),V={style:{"margin-bottom":"0"}},j=o("div",null,"\u9009\u9879\uFF1A",-1),q={style:{"margin-bottom":"0"}},H=g({__name:"CommandHelpBox",props:{command:{type:null,required:!0},parentCommand:{type:null,required:!0}},setup(m){const _=m,{command:u,parentCommand:F}=v(_),p=h(()=>C(u.value,F.value));return k(()=>{}),(S,w)=>{var c;return n(),a("div",null,[o("div",null,"\u547D\u4EE4\uFF1A"+s(e(u).name),1),e(u).desc?(n(),a("div",A,"\u4ECB\u7ECD\uFF1A"+s(e(u).desc),1)):r("v-if",!0),e(u).alias&&e(u).alias.length>0?(n(),a("div",E," \u522B\u540D\uFF1A"+s(e(u).alias.join(", ")),1)):r("v-if",!0),o("div",null,"\u7528\u6CD5\uFF1A"+s(e(p)),1),e(u).subCommands&&Object.keys(e(u).subCommands).length>0?(n(),a(l,{key:2},[D,o("ul",b,[(n(!0),a(l,null,i(e(u).subCommands,(t,d,y)=>(n(),a("li",{key:y},s(t.func)+" "+s(t.name)+" "+s(t.desc),1))),128))])],64)):r("v-if",!0),e(u).params&&e(u).params.length>0?(n(),a(l,{key:3},[x,o("ul",V,[(n(!0),a(l,null,i(e(u).params,(t,d)=>(n(),a("li",{key:d},s(t.key)+" "+s(t.required?"\u5FC5\u586B":"\u53EF\u9009")+" "+s(t.defaultValue?`\u9ED8\u8BA4\uFF1A${t.defaultValue}`:"")+" "+s(t.desc),1))),128))])],64)):r("v-if",!0),((c=e(u).options)==null?void 0:c.length)>0?(n(),a(l,{key:4},[j,o("ul",q,[(n(!0),a(l,null,i(e(u).options,(t,d)=>(n(),a("li",{key:d},s(e(B)(t).join(", "))+" "+s(t.required?"\u5FC5\u586B":"\u53EF\u9009")+" "+s(t.defaultValue?`\u9ED8\u8BA4\uFF1A${t.defaultValue}`:"")+" "+s(t.desc),1))),128))])],64)):r("v-if",!0)])}}});var N=f(H,[["__file","/Users/pengjunlee/workspace/graython-website/graython-station/src/commands/terminal/help/CommandHelpBox.vue"]]);export{N as default};
