import{d as e}from"./request_website-Cm3mNg2b.js";const o=()=>e.get("/resource/directories"),c=()=>e.get("/resource/types"),i=()=>e.get("/resource/classifications"),a=r=>e.post("/resource/library/add",{...r}),n=r=>e.get("/resource/library/list/"+r),u=r=>e.post("/resource/library/delete/"+r),l=r=>e.post("/resource/library/statistics",r),p=r=>e.post("/resource/library/cover",r),d=r=>e.post("/resource/classify",r),y=r=>e.post("/resource/library/refresh/"+r),A=r=>e.post("/resource/page",{...r}),b=r=>{const s={headers:{"Content-Type":"multipart/form-data"}};return e.post("/resource/collection/add",r,s)},f=()=>e.get("/resource/collection/list"),g=r=>e.post("/resource/collection/delete/"+r),C=r=>e.post("/resource/delete/"+r);export{n as a,a as b,y as c,u as d,g as e,b as f,i as g,d as h,C as i,p as j,c as k,f as l,A as p,o as r,l as s};
