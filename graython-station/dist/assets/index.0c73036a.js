import{i as A,j as c,k as Q,l as U,b as q,m as T,n as p,p as V,q as B,d as D,s as H,v as j,x as W,y as L,e as k,z}from"./main.52daf70d.js";var I=["xxxl","xxl","xl","lg","md","sm","xs"],G={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)",xxxl:"(min-width: 2000px)"},b=new Map,P=-1,O={},$={matchHandlers:{},dispatch:function(e){return O=e,b.forEach(function(d){return d(O)}),b.size>=1},subscribe:function(e){return b.size||this.register(),P+=1,b.set(P,e),e(O),P},unsubscribe:function(e){b.delete(e),b.size||this.unregister()},unregister:function(){var e=this;Object.keys(G).forEach(function(d){var f=G[d],u=e.matchHandlers[f];u==null||u.mql.removeListener(u==null?void 0:u.listener)}),b.clear()},register:function(){var e=this;Object.keys(G).forEach(function(d){var f=G[d],u=function(h){var x=h.matches;e.dispatch(A(A({},O),c({},d,x)))},s=window.matchMedia(f);s.addListener(u),e.matchHandlers[f]={mql:s,listener:u},u(s)})}},M=$,J=function(){return Q()&&window.document.documentElement},R,X=function(){if(!J())return!1;if(R!==void 0)return R;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),R=e.scrollHeight===1,document.body.removeChild(e),R},Y=function(){var n=U(!1);return q(function(){n.value=X()}),n},K=Symbol("rowContextKey"),Z=function(e){V(K,e)},ee=function(){return T(K,{gutter:p(function(){}),wrap:p(function(){}),supportFlexGap:p(function(){})})};B("top","middle","bottom","stretch");B("start","end","center","space-around","space-between");var te=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array,Object],default:0},wrap:{type:Boolean,default:void 0}}},re=D({name:"ARow",props:te(),setup:function(e,d){var f=d.slots,u=H("row",e),s=u.prefixCls,S=u.direction,h,x=U({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),_=Y();q(function(){h=M.subscribe(function(t){var r=e.gutter||0;(!Array.isArray(r)&&j(r)==="object"||Array.isArray(r)&&(j(r[0])==="object"||j(r[1])==="object"))&&(x.value=t)})}),W(function(){M.unsubscribe(h)});var C=p(function(){var t=[0,0],r=e.gutter,a=r===void 0?0:r,l=Array.isArray(a)?a:[a,0];return l.forEach(function(v,w){if(j(v)==="object")for(var i=0;i<I.length;i++){var g=I[i];if(x.value[g]&&v[g]!==void 0){t[w]=v[g];break}}else t[w]=v||0}),t});Z({gutter:C,supportFlexGap:_,wrap:p(function(){return e.wrap})});var E=p(function(){var t;return L(s.value,(t={},c(t,"".concat(s.value,"-no-wrap"),e.wrap===!1),c(t,"".concat(s.value,"-").concat(e.justify),e.justify),c(t,"".concat(s.value,"-").concat(e.align),e.align),c(t,"".concat(s.value,"-rtl"),S.value==="rtl"),t))}),F=p(function(){var t=C.value,r={},a=t[0]>0?"".concat(t[0]/-2,"px"):void 0,l=t[1]>0?"".concat(t[1]/-2,"px"):void 0;return a&&(r.marginLeft=a,r.marginRight=a),_.value?r.rowGap="".concat(t[1],"px"):l&&(r.marginTop=l,r.marginBottom=l),r});return function(){var t;return k("div",{class:E.value,style:F.value},[(t=f.default)===null||t===void 0?void 0:t.call(f)])}}}),ne=re;function ae(n){return typeof n=="number"?"".concat(n," ").concat(n," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(n)?"0 0 ".concat(n):n}var ue=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}},ie=D({name:"ACol",props:ue(),setup:function(e,d){var f=d.slots,u=ee(),s=u.gutter,S=u.supportFlexGap,h=u.wrap,x=H("col",e),_=x.prefixCls,C=x.direction,E=p(function(){var t,r=e.span,a=e.order,l=e.offset,v=e.push,w=e.pull,i=_.value,g={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(y){var m,o={},N=e[y];typeof N=="number"?o.span=N:j(N)==="object"&&(o=N||{}),g=A(A({},g),(m={},c(m,"".concat(i,"-").concat(y,"-").concat(o.span),o.span!==void 0),c(m,"".concat(i,"-").concat(y,"-order-").concat(o.order),o.order||o.order===0),c(m,"".concat(i,"-").concat(y,"-offset-").concat(o.offset),o.offset||o.offset===0),c(m,"".concat(i,"-").concat(y,"-push-").concat(o.push),o.push||o.push===0),c(m,"".concat(i,"-").concat(y,"-pull-").concat(o.pull),o.pull||o.pull===0),c(m,"".concat(i,"-rtl"),C.value==="rtl"),m))}),L(i,(t={},c(t,"".concat(i,"-").concat(r),r!==void 0),c(t,"".concat(i,"-order-").concat(a),a),c(t,"".concat(i,"-offset-").concat(l),l),c(t,"".concat(i,"-push-").concat(v),v),c(t,"".concat(i,"-pull-").concat(w),w),t),g)}),F=p(function(){var t=e.flex,r=s.value,a={};if(r&&r[0]>0){var l="".concat(r[0]/2,"px");a.paddingLeft=l,a.paddingRight=l}if(r&&r[1]>0&&!S.value){var v="".concat(r[1]/2,"px");a.paddingTop=v,a.paddingBottom=v}return t&&(a.flex=ae(t),h.value===!1&&!a.minWidth&&(a.minWidth=0)),a});return function(){var t;return k("div",{class:E.value,style:F.value},[(t=f.default)===null||t===void 0?void 0:t.call(f)])}}}),ce=z(ne),se=z(ie);export{ce as _,se as a};
