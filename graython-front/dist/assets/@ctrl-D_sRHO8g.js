function s(e,t){F(e)&&(e="100%");var r=I(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function v(e){return Math.min(1,Math.max(0,e))}function F(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function I(e){return typeof e=="string"&&e.indexOf("%")!==-1}function A(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function p(e){return e<=1?"".concat(Number(e)*100,"%"):e}function b(e){return e.length===1?"0"+e:String(e)}function E(e,t,r){return{r:s(e,255)*255,g:s(t,255)*255,b:s(r,255)*255}}function M(e,t,r){e=s(e,255),t=s(t,255),r=s(r,255);var a=Math.max(e,t,r),n=Math.min(e,t,r),i=0,f=0,h=(a+n)/2;if(a===n)f=0,i=0;else{var u=a-n;switch(f=h>.5?u/(2-a-n):u/(a+n),a){case e:i=(t-r)/u+(t<r?6:0);break;case t:i=(r-e)/u+2;break;case r:i=(e-t)/u+4;break}i/=6}return{h:i,s:f,l:h}}function l(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function B(e,t,r){var a,n,i;if(e=s(e,360),t=s(t,100),r=s(r,100),t===0)n=r,i=r,a=r;else{var f=r<.5?r*(1+t):r+t-r*t,h=2*r-f;a=l(h,f,e+1/3),n=l(h,f,e),i=l(h,f,e-1/3)}return{r:a*255,g:n*255,b:i*255}}function S(e,t,r){e=s(e,255),t=s(t,255),r=s(r,255);var a=Math.max(e,t,r),n=Math.min(e,t,r),i=0,f=a,h=a-n,u=a===0?0:h/a;if(a===n)i=0;else{switch(a){case e:i=(t-r)/h+(t<r?6:0);break;case t:i=(r-e)/h+2;break;case r:i=(e-t)/h+4;break}i/=6}return{h:i,s:u,v:f}}function N(e,t,r){e=s(e,360)*6,t=s(t,100),r=s(r,100);var a=Math.floor(e),n=e-a,i=r*(1-t),f=r*(1-n*t),h=r*(1-(1-n)*t),u=a%6,H=[r,f,i,i,h,r][u],R=[h,r,r,f,i,i][u],T=[i,i,h,r,r,f][u];return{r:H*255,g:R*255,b:T*255}}function w(e,t,r,a){var n=[b(Math.round(e).toString(16)),b(Math.round(t).toString(16)),b(Math.round(r).toString(16))];return a&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function P(e,t,r,a,n){var i=[b(Math.round(e).toString(16)),b(Math.round(t).toString(16)),b(Math.round(r).toString(16)),b(j(a))];return n&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function j(e){return Math.round(parseFloat(e)*255).toString(16)}function k(e){return o(e)/255}function o(e){return parseInt(e,16)}function O(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var x={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function W(e){var t={r:0,g:0,b:0},r=1,a=null,n=null,i=null,f=!1,h=!1;return typeof e=="string"&&(e=U(e)),typeof e=="object"&&(g(e.r)&&g(e.g)&&g(e.b)?(t=E(e.r,e.g,e.b),f=!0,h=String(e.r).substr(-1)==="%"?"prgb":"rgb"):g(e.h)&&g(e.s)&&g(e.v)?(a=p(e.s),n=p(e.v),t=N(e.h,a,n),f=!0,h="hsv"):g(e.h)&&g(e.s)&&g(e.l)&&(a=p(e.s),i=p(e.l),t=B(e.h,a,i),f=!0,h="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=A(r),{ok:f,format:e.format||h,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}var G="[-\\+]?\\d+%?",q="[-\\+]?\\d*\\.\\d+%?",d="(?:".concat(q,")|(?:").concat(G,")"),y="[\\s|\\(]+(".concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")\\s*\\)?"),m="[\\s|\\(]+(".concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")\\s*\\)?"),c={CSS_UNIT:new RegExp(d),rgb:new RegExp("rgb"+y),rgba:new RegExp("rgba"+m),hsl:new RegExp("hsl"+y),hsla:new RegExp("hsla"+m),hsv:new RegExp("hsv"+y),hsva:new RegExp("hsva"+m),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function U(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(x[e])e=x[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r=c.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=c.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=c.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=c.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=c.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=c.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=c.hex8.exec(e),r?{r:o(r[1]),g:o(r[2]),b:o(r[3]),a:k(r[4]),format:t?"name":"hex8"}:(r=c.hex6.exec(e),r?{r:o(r[1]),g:o(r[2]),b:o(r[3]),format:t?"name":"hex"}:(r=c.hex4.exec(e),r?{r:o(r[1]+r[1]),g:o(r[2]+r[2]),b:o(r[3]+r[3]),a:k(r[4]+r[4]),format:t?"name":"hex8"}:(r=c.hex3.exec(e),r?{r:o(r[1]+r[1]),g:o(r[2]+r[2]),b:o(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function g(e){return!!c.CSS_UNIT.exec(String(e))}var D=function(){function e(t,r){t===void 0&&(t=""),r===void 0&&(r={});var a;if(t instanceof e)return t;typeof t=="number"&&(t=O(t)),this.originalInput=t;var n=W(t);this.originalInput=t,this.r=n.r,this.g=n.g,this.b=n.b,this.a=n.a,this.roundA=Math.round(100*this.a)/100,this.format=(a=r.format)!==null&&a!==void 0?a:n.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=n.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),r,a,n,i=t.r/255,f=t.g/255,h=t.b/255;return i<=.03928?r=i/12.92:r=Math.pow((i+.055)/1.055,2.4),f<=.03928?a=f/12.92:a=Math.pow((f+.055)/1.055,2.4),h<=.03928?n=h/12.92:n=Math.pow((h+.055)/1.055,2.4),.2126*r+.7152*a+.0722*n},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=A(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=S(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=S(this.r,this.g,this.b),r=Math.round(t.h*360),a=Math.round(t.s*100),n=Math.round(t.v*100);return this.a===1?"hsv(".concat(r,", ").concat(a,"%, ").concat(n,"%)"):"hsva(".concat(r,", ").concat(a,"%, ").concat(n,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=M(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=M(this.r,this.g,this.b),r=Math.round(t.h*360),a=Math.round(t.s*100),n=Math.round(t.l*100);return this.a===1?"hsl(".concat(r,", ").concat(a,"%, ").concat(n,"%)"):"hsla(".concat(r,", ").concat(a,"%, ").concat(n,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),w(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),P(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),r=Math.round(this.g),a=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(r,", ").concat(a,")"):"rgba(".concat(t,", ").concat(r,", ").concat(a,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(r){return"".concat(Math.round(s(r,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(r){return Math.round(s(r,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+w(this.r,this.g,this.b,!1),r=0,a=Object.entries(x);r<a.length;r++){var n=a[r],i=n[0],f=n[1];if(t===f)return i}return!1},e.prototype.toString=function(t){var r=!!t;t=t??this.format;var a=!1,n=this.a<1&&this.a>=0,i=!r&&n&&(t.startsWith("hex")||t==="name");return i?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(a=this.toRgbString()),t==="prgb"&&(a=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(a=this.toHexString()),t==="hex3"&&(a=this.toHexString(!0)),t==="hex4"&&(a=this.toHex8String(!0)),t==="hex8"&&(a=this.toHex8String()),t==="name"&&(a=this.toName()),t==="hsl"&&(a=this.toHslString()),t==="hsv"&&(a=this.toHsvString()),a||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l+=t/100,r.l=v(r.l),new e(r)},e.prototype.brighten=function(t){t===void 0&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new e(r)},e.prototype.darken=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l-=t/100,r.l=v(r.l),new e(r)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s-=t/100,r.s=v(r.s),new e(r)},e.prototype.saturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s+=t/100,r.s=v(r.s),new e(r)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var r=this.toHsl(),a=(r.h+t)%360;return r.h=a<0?360+a:a,new e(r)},e.prototype.mix=function(t,r){r===void 0&&(r=50);var a=this.toRgb(),n=new e(t).toRgb(),i=r/100,f={r:(n.r-a.r)*i+a.r,g:(n.g-a.g)*i+a.g,b:(n.b-a.b)*i+a.b,a:(n.a-a.a)*i+a.a};return new e(f)},e.prototype.analogous=function(t,r){t===void 0&&(t=6),r===void 0&&(r=30);var a=this.toHsl(),n=360/r,i=[this];for(a.h=(a.h-(n*t>>1)+720)%360;--t;)a.h=(a.h+n)%360,i.push(new e(a));return i},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var r=this.toHsv(),a=r.h,n=r.s,i=r.v,f=[],h=1/t;t--;)f.push(new e({h:a,s:n,v:i})),i=(i+h)%1;return f},e.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new e({h:(r+72)%360,s:t.s,l:t.l}),new e({h:(r+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var r=this.toRgb(),a=new e(t).toRgb();return new e({r:a.r+(r.r-a.r)*r.a,g:a.g+(r.g-a.g)*r.a,b:a.b+(r.b-a.b)*r.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var r=this.toHsl(),a=r.h,n=[this],i=360/t,f=1;f<t;f++)n.push(new e({h:(a+f*i)%360,s:r.s,l:r.l}));return n},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}();export{D as T};
