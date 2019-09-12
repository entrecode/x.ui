(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc2fc56c"],{"2c22":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"is-margin-bottom-5 is-padding-bottom-5 is-border-bottom"},[e("h2",{staticClass:"is-h3",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,function(a,s){return e("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])}),0)])])]):t._e()},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],r={props:["params","title"]},n=r,l=(e("dd8e"),e("2877")),c=Object(l["a"])(n,s,i,!1,null,"40297bed",null);a["a"]=c.exports},"386b":function(t,a,e){var s=e("5ca1"),i=e("79e5"),r=e("be13"),n=/"/g,l=function(t,a,e,s){var i=String(r(t)),l="<"+a;return""!==e&&(l+=" "+e+'="'+String(s).replace(n,"&quot;")+'"'),l+">"+i+"</"+a+">"};t.exports=function(t,a){var e={};e[t]=a(l),s(s.P+s.F*i(function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",e)}},"760a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),e("div",{staticClass:"nav"},[e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":1===t.activeTab},on:{click:function(a){t.activeTab=1}}},[t._v("default")])]),e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":2===t.activeTab},on:{click:function(a){t.activeTab=2}}},[t._v("with tooltip")])])]),e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"center"}},[1===t.activeTab?e("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[e("input",{staticClass:"range-slider",attrs:{type:"range"}})]):t._e(),2===t.activeTab?e("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.testRange,expression:"testRange"}],staticClass:"range-slider",attrs:{type:"range",min:"0",max:"10","data-tooltip-top":t.testRange},domProps:{value:t.testRange},on:{__r:function(a){t.testRange=a.target.value}}})]):t._e()]),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"},{name:"show",rawName:"v-show",value:1===t.activeTab,expression:"activeTab === 1"}]},[e("code",{staticClass:"html"})]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup2,expression:"markup2"},{name:"show",rawName:"v-show",value:2===t.activeTab,expression:"activeTab === 2"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.params}}),e("requires-list",{attrs:{requires:t.requires}})],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"titlebar"},[e("h1",[t._v("range-slider")])])}],r=e("2c22"),n=e("da36"),l={components:{ParamsTable:r["a"],RequiresList:n["a"]},data:function(){return{testRange:5,activeTab:1,markup:'<input type="range" class="range-slider">',markup2:'<input type="range" class="range-slider" data-tooltip-top="...">',params:[{name:"$range-slider-height",type:"number",default:"8"},{name:"$range-slider-radius",type:"number",default:"4"},{name:"$range-slider-background",type:"color",default:"$background-lightest"},{name:"$range-slider-style",type:"map",default:""},{name:"$range-slider-hover-style",type:"map",default:""},{name:"$range-slider-thumb-color",type:"color",default:"$link"},{name:"$range-slider-thumb-size",type:"number",default:"16"},{name:"$range-slider-thumb-radius",type:"number",default:"8"},{name:"$range-slider-thumb-style",type:"map",default:""},{name:"$range-slider-thumb-hover-style",type:"map",default:""}],requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"rem()",type:"function",link:"#scroll-to-rem"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"}]}}},c=l,o=e("2877"),d=Object(o["a"])(c,s,i,!1,null,"6b078792",null);a["default"]=d.exports},b54a:function(t,a,e){"use strict";e("386b")("link",function(t){return function(a){return t(this,"a","href",a)}})},da36:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.requires?e("div",{staticClass:"is-margin-bottom-8"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(a,s){return e("li",{key:s,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[a.link?e("router-link",{staticClass:"code",attrs:{to:t.url(a)},domProps:{textContent:t._s(a.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(a.name)}})],1)}),0)]):t._e()},i=[],r=(e("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),n=r,l=e("2877"),c=Object(l["a"])(n,s,i,!1,null,null,null);a["a"]=c.exports},dd8e:function(t,a,e){"use strict";var s=e("e3f6"),i=e.n(s);i.a},e3f6:function(t,a,e){}}]);