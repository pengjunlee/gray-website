import{d as t}from"./request_website-BumznMBN.js";const r=s=>t.post("/music/refresh",s),a=s=>t.post("/music/list",s),c=s=>t.get("/music/like/"+s),u=s=>t.get("/music/playlist/add/"+s),n=s=>t.post("/music/page",{...s}),o=s=>t.get("/music/random/"+s),m=s=>{const i={headers:{"Content-Type":"multipart/form-data"}};return t.post("/music/musician/add",s,i)};export{u as a,m as b,a as c,r as d,c as m,n as p,o as r};
