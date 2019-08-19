(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c2165d4"],{"22e3":function(t,e,a){},"2c22":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.params?a("div",{staticClass:"params-table"},[a("h4",{staticClass:"is-h4 is-padding-left-5",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),a("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.params,function(e,s){return a("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[a("td",{attrs:{valign:"top","data-col":"5"}},[a("code",{staticClass:"is-bold",domProps:{textContent:t._s(e.name)}}),e.description?a("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(e.description)}}):t._e()]),e.type?a("td",{attrs:{valign:"top","data-col":"2"}},[a("span",{staticClass:"tag",domProps:{textContent:t._s(e.type)}})]):t._e(),a("td",{attrs:{valign:"top","data-col":"5"}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.default||"...",expression:"param.default || '...'"}]},[a("code",{staticClass:"scss"})])])])}),0)])])]):t._e()},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{attrs:{"data-grid":"small-gutter"}},[a("th",{attrs:{"data-col":"5"}},[t._v("Name")]),a("th",{attrs:{"data-col":"2"}},[t._v("Type")]),a("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],i={props:["params","title"]},n=i,l=(a("e7db"),a("2877")),c=Object(l["a"])(n,s,r,!1,null,"e7da4c6c",null);e["a"]=c.exports},"386b":function(t,e,a){var s=a("5ca1"),r=a("79e5"),i=a("be13"),n=/"/g,l=function(t,e,a,s){var r=String(i(t)),l="<"+e;return""!==a&&(l+=" "+a+'="'+String(s).replace(n,"&quot;")+'"'),l+">"+r+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(l),s(s.P+s.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",a)}},"40ce":function(t,e,a){},"760a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),t._m(1),a("div",{staticClass:"spacer"}),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[a("code",{staticClass:"html"})]),a("div",{staticClass:"spacer"}),a("params-table",{attrs:{params:t.params}}),a("div",{staticClass:"spacer"}),a("requires-list",{attrs:{requires:t.requires}})],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titlebar"},[a("h1",[t._v("range-slider")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"center"}},[a("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[a("input",{staticClass:"range-slider",attrs:{type:"range"}})])])}],i=a("2c22"),n=a("da36"),l={components:{ParamsTable:i["a"],RequiresList:n["a"]},data:function(){return{markup:'<input type="range" class="range-slider">',params:[{name:"$range-slider-height",type:"number",default:"8"},{name:"$range-slider-radius",type:"number",default:"4"},{name:"$range-slider-background",type:"color",default:"$background-lightest"},{name:"$range-slider-style",type:"map",default:""},{name:"$range-slider-hover-style",type:"map",default:""},{name:"$range-slider-thumb-color",type:"color",default:"$link"},{name:"$range-slider-thumb-size",type:"number",default:"16"},{name:"$range-slider-thumb-radius",type:"number",default:"8"},{name:"$range-slider-thumb-style",type:"map",default:""},{name:"$range-slider-thumb-hover-style",type:"map",default:""}],requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"rem()",type:"function",link:"#scroll-to-rem"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"}]}}},c=l,o=a("2877"),u=Object(o["a"])(c,s,r,!1,null,"fe656bb2",null);e["default"]=u.exports},b54a:function(t,e,a){"use strict";a("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},bb3a:function(t,e,a){"use strict";var s=a("40ce"),r=a.n(s);r.a},da36:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.requires?a("div",{staticClass:"requires-list"},[a("h4",{staticClass:"is-h2"},[t._v("requires")]),a("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(e,s){return a("li",{key:s,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[e.link?a("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{to:t.url(e)},domProps:{textContent:t._s(e.name)}}):a("span",{staticClass:"code",domProps:{textContent:t._s(e.name)}})],1)}),0)]):t._e()},r=[],i=(a("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),n=i,l=(a("bb3a"),a("2877")),c=Object(l["a"])(n,s,r,!1,null,"7bee28eb",null);e["a"]=c.exports},e7db:function(t,e,a){"use strict";var s=a("22e3"),r=a.n(s);r.a}}]);