var d=Object.defineProperty;var m=(s,t,e)=>t in s?d(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var o=(s,t,e)=>(m(s,typeof t!="symbol"?t+"":t,e),e);import{a as f}from"./axios-Cm0UX6qg.js";import{b as g,L as p,s as h,i as n,u as R,r as b,t as j,g as q}from"./index-kmAYPRuw.js";import{E as c}from"./element-plus-CJC0wB9Y.js";const U=g(),P=q();class S{constructor(t){o(this,"instance");o(this,"baseConfig",{baseURL:P,timeout:6e4});this.instance=f.create(Object.assign(this.baseConfig,t)),this.instance.interceptors.request.use(e=>{let a="",r=p.get(h);return n(r)&&n(r.token)&&(a=r.token),e.headers={...e.headers,"Blossom-User-Id":U,Authorization:"Bearer "+a},e},e=>Promise.reject(e)),this.instance.interceptors.response.use(e=>{e.status!==200&&Promise.reject(e);let r=!1;if((e.config.responseType==="blob"||e.headers["content-type"]==="application/force-download")&&(n(e.data.code)?u(e.data.code)||(r=!1):r=!0),u(e.data.code)&&(r=!0),r)return e.data;if(e.data.code==="20002"||e.data.code===20002){console.log("授权失败, 重置登录状态"),R().reset();const l=b.currentRoute.value;return j({name:"Login",query:{redirect:l.name}}),Promise.reject(e)}else{let i=e.data;return i.url=e.config.url,c({message:e.data.message,duration:9999}),Promise.reject(e)}},e=>{let a=e.message;return e.code==="ERR_NETWORK"&&(a="网络错误,请检查您的网络是否通畅"),c({message:a}),Promise.reject(e)})}request(t){return this.instance.request(t)}get(t,e){return this.instance.get(t,e)}post(t,e,a){return this.instance.post(t,e,a)}delete(t,e){return this.instance.delete(t,e)}}const u=s=>s===0||s==="0"||s===2e4||s==="20000",L=new S;export{L as d};
