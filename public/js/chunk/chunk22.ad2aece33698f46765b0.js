webpackJsonp([22],{176:function(t,e){t.exports=function(t,e,n,r,o,u){var a,s=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,s=t.default);var d,c="function"==typeof s?s.options:s;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o),u?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},c._ssrRegister=d):r&&(d=r),d){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=d,c.render=function(t,e){return d.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:a,exports:s,options:c}}},177:function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(178),u={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,i=0,d=!1,c=function(){},l=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(t){for(var e=0;e<t.length;e++){var n=t[e],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(p(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(p(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function p(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(h){var o=i++;r=s||(s=v()),e=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);l.ssrId&&t.setAttribute(f,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){d=n,l=r||{};var a=o(t,e);return _(a),function(e){for(var n=[],r=0;r<a.length;r++){var s=a[r];(i=u[s.id]).refs--,n.push(i)}e?_(a=o(t,e)):a=[];for(r=0;r<n.length;r++){var i;if(0===(i=n[r]).refs){for(var d=0;d<i.parts.length;d++)i.parts[d]();delete u[i.id]}}}};var m,g=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function b(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var u=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(u,a[e]):t.appendChild(u)}}},178:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var u=e[o],a=u[0],s={id:t+":"+o,css:u[1],media:u[2],sourceMap:u[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},196:function(t,e,n){"use strict";n.d(e,"E",function(){return o}),n.d(e,"B",function(){return u}),n.d(e,"F",function(){return a}),n.d(e,"G",function(){return s}),n.d(e,"C",function(){return i}),n.d(e,"s",function(){return d}),n.d(e,"t",function(){return c}),n.d(e,"r",function(){return l}),n.d(e,"u",function(){return f}),n.d(e,"v",function(){return h}),n.d(e,"m",function(){return _}),n.d(e,"w",function(){return v}),n.d(e,"z",function(){return p}),n.d(e,"A",function(){return m}),n.d(e,"y",function(){return g}),n.d(e,"x",function(){return b}),n.d(e,"c",function(){return C}),n.d(e,"g",function(){return q}),n.d(e,"f",function(){return y}),n.d(e,"e",function(){return x}),n.d(e,"d",function(){return E}),n.d(e,"n",function(){return O}),n.d(e,"i",function(){return S}),n.d(e,"h",function(){return k}),n.d(e,"j",function(){return w}),n.d(e,"k",function(){return N}),n.d(e,"l",function(){return R}),n.d(e,"D",function(){return z}),n.d(e,"H",function(){return T}),n.d(e,"p",function(){return $}),n.d(e,"b",function(){return D}),n.d(e,"q",function(){return U}),n.d(e,"a",function(){return j}),n.d(e,"o",function(){return M});var r=n(24),o=function(t){return r.a.request({url:"/source/"+t,method:"delete"})},u=function(t){return r.a.request({url:"/source",data:t,method:"post"})},a=function(t){return r.a.request({url:"/source/"+t,method:"get"})},s=function(t,e){return r.a.request({url:"/source/"+t,data:e,method:"put"})},i=function(t){return r.a.request({url:"/source/batchIdDelete",data:t,method:"post"})},d=function(t){return r.a.request({url:"/meal/batchIdDelete",data:t,method:"post"})},c=function(t){return r.a.request({url:"/meal/"+t,method:"delete"})},l=function(t){return r.a.request({url:"/meal",data:t,method:"post"})},f=function(t){return r.a.request({url:"/meal/"+t,method:"get"})},h=function(t,e){return r.a.request({url:"/meal/"+t,data:e,method:"put"})},_=function(){return r.a.request({url:"template/list",method:"get"})},v=function(t){return r.a.request({url:"size",data:t,method:"post"})},p=function(t){return r.a.request({url:"size/"+t,method:"get"})},m=function(t,e){return r.a.request({url:"size/"+t,data:e,method:"put"})},g=function(t){return r.a.request({url:"size/"+t,method:"delete"})},b=function(t){return r.a.request({url:"size/batchIdDelete",data:t,method:"post"})},C=function(t){return r.a.request({url:"goods",data:t,method:"post"})},q=function(t,e){return r.a.request({url:"goods/"+t,data:e,method:"put"})},y=function(t){return r.a.request({url:"goods/"+t,method:"get"})},x=function(t){return r.a.request({url:"goods/"+t,method:"delete"})},E=function(t){return r.a.request({url:"goods/batchDelete",data:t,method:"post"})},O=function(t){return r.a.request({url:"goodsOrder/ip_source/"+t,method:"get"})},S=function(t,e){return r.a.request({url:"goodsOrder/"+t,data:e,method:"delete"})},k=function(t){return r.a.request({url:"goodsOrder/batchDelete",data:t,method:"post"})},w=function(t){return r.a.request({url:"goodsOrder/"+t,method:"get"})},N=function(t,e){return r.a.request({url:"goodsOrder/"+t,data:e,method:"put"})},R=function(t,e){return r.a.request({url:"goodsOrder/status/"+t,data:e,method:"put"})},z=function(){return r.a.request({url:"source/count",method:"get"})},T=function(){return r.a.request({url:"source/zhcount",method:"get"})},$=function(){return r.a.request({url:"source/peoplecount",method:"get"})},D=function(t){return r.a.request({url:"goodsOrder/batchEdit",data:t,method:"post"})},U=function(){return r.a.request({url:"goodsOrder/repeatCheck",method:"get"})},j=function(t){return r.a.request({url:"source/Regenerate/"+t,method:"get"})},M=function(){return r.a.request({url:"goodsOrder/orderCount",method:"get"})}},484:function(t,e,n){var r=n(485);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(177)("6deb5786",r,!0,{})},485:function(t,e,n){(t.exports=n(75)(!1)).push([t.i,"td[data-v-45d76670]{border:1px solid #000;line-height:40px;text-align:center;background-color:#f9f9f9}table[data-v-45d76670]{width:300px;max-width:100%;margin-bottom:20px;border-spacing:0;border-collapse:collapse;background-color:transparent;margin-left:10px}.container[data-v-45d76670]{float:left;margin-right:15px}.sing[data-v-45d76670]{font-size:16px;font-weight:600}.count-table[data-v-45d76670]{margin-top:10px}td[data-v-45d76670]:last-child{color:green}.last>table[data-v-45d76670]{width:100%}",""])},486:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(196);e.default={name:"zhCount",data:function(){return{count:[]}},created:function(){var t=this;Object(r.H)().then(function(e){t.count=e.data.data,console.log(e.data.data)})}}},487:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("span",{staticClass:"sing"},[t._v("月度统计:")]),t._v(" "),n("table",{staticClass:"count-table"},[t._m(0),t._v(" "),n("tbody",t._l(t.count.monthCount,function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(r)+"月")]),t._v(" "),n("td",[t._v(t._s(e.order_count))]),t._v(" "),e.order_total_price_count?n("td",[t._v("¥"+t._s(e.order_total_price_count))]):n("td",[t._v("¥0")])])}))])]),t._v(" "),n("div",{staticClass:"container"},[n("span",{staticClass:"sing"},[t._v("12天销量:")]),t._v(" "),n("table",{staticClass:"count-table"},[t._m(1),t._v(" "),n("tbody",t._l(t.count.dayCount,function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.day)+"号")]),t._v(" "),n("td",[t._v(t._s(e.data.order_count))]),t._v(" "),e.data.order_total_price_count?n("td",[t._v("¥"+t._s(e.data.order_total_price_count))]):n("td",[t._v("¥0")])])}))])]),t._v(" "),n("div",{staticClass:"container"},[n("span",{staticClass:"sing"},[t._v("产品统计:")]),t._v(" "),n("table",{staticClass:"count-table"},[t._m(2),t._v(" "),n("tbody",t._l(t.count.goodsNameCount,function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.goods_name))]),t._v(" "),n("td",[t._v(t._s(e.goods_name_count))]),t._v(" "),n("td",[t._v("¥"+t._s(e.order_total_price_count))])])}))])]),t._v(" "),n("div",{staticClass:"container last"},[n("span",{staticClass:"sing"},[t._v("省份统计:")]),t._v(" "),n("table",{staticClass:"count-table"},[t._m(3),t._v(" "),n("tbody",t._l(t.count.provinceCount,function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.province))]),t._v(" "),n("td",[t._v(t._s(e.order_count))]),t._v(" "),n("td",[t._v("¥"+t._s(e.order_total_price_count))])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("月度统计")]),this._v(" "),e("th",[this._v("订单数量")]),this._v(" "),e("th",[this._v("订单金额(元)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("日统计")]),this._v(" "),e("th",[this._v("订单数量")]),this._v(" "),e("th",[this._v("订单金额(元)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("产品名称")]),this._v(" "),e("th",[this._v("订单数量")]),this._v(" "),e("th",[this._v("订单金额(元)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("所在地区")]),this._v(" "),e("th",[this._v("订单数量")]),this._v(" "),e("th",[this._v("订单金额(元)")])])])}]}},534:function(t,e,n){var r=n(176)(n(486),n(487),!1,function(t){n(484)},"data-v-45d76670",null);t.exports=r.exports}});