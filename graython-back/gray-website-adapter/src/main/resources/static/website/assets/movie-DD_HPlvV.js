import{d as o}from"./request_website-CnR_fOv1.js";const s=e=>{const t={headers:{"Content-Type":"multipart/form-data"}};return o.post("/movie/cover",e,t)},i=()=>o.get("/movie/refresh"),a=e=>o.post("/movie/categories",{...e}),p=e=>o.post("/movie/page",{...e}),m=e=>o.post("/movie/m3u8",{...e});export{s as a,m as b,i as c,a as m,p};
