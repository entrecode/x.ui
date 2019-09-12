(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-623a56ac"],{"2c22":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.params?a("div",{staticClass:"is-margin-bottom-5 is-padding-bottom-5 is-border-bottom"},[a("h2",{staticClass:"is-h3",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),a("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.params,function(e,i){return a("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[a("td",{attrs:{valign:"top","data-col":"5"}},[a("code",{staticClass:"is-bold",domProps:{textContent:t._s(e.name)}}),e.description?a("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(e.description)}}):t._e()]),e.type?a("td",{attrs:{valign:"top","data-col":"2"}},[a("span",{staticClass:"tag",domProps:{textContent:t._s(e.type)}})]):t._e(),a("td",{attrs:{valign:"top","data-col":"5"}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.default||"...",expression:"param.default || '...'"}]},[a("code",{staticClass:"scss"})])])])}),0)])])]):t._e()},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{attrs:{"data-grid":"small-gutter"}},[a("th",{attrs:{"data-col":"5"}},[t._v("Name")]),a("th",{attrs:{"data-col":"2"}},[t._v("Type")]),a("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],r={props:["params","title"]},n=r,o=(a("dd8e"),a("2877")),l=Object(o["a"])(n,i,s,!1,null,"40297bed",null);e["a"]=l.exports},"2dfb":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),a("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[a("div",{domProps:{innerHTML:t._s(t.markup)}}),a("div",{staticClass:"is-theme is-margin-top-5 is-padding-center-2 is-radius is-elevated-16"},[a("div",{staticClass:"nav"},[a("div",{staticClass:"nav__item"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.orientation,expression:"orientation"}],staticClass:"input input_round",attrs:{id:"alerStyle"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.orientation=e.target.multiple?a:a[0]}}},t._l(t.orientations,function(e,i){return a("option",{key:i,domProps:{value:e,textContent:t._s(e.slice(13))}})}),0)])])])]),a("div",{staticClass:"spacer"}),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[a("code",{staticClass:"html"})]),a("div",{staticClass:"spacer"}),a("params-table",{attrs:{params:t.params}}),a("requires-list",{attrs:{requires:t.requires}})],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titlebar"},[a("h1",[t._v("data-tooltip")])])}],r=a("2c22"),n=a("da36"),o={components:{ParamsTable:r["a"],RequiresList:n["a"]},data:function(){return{orientations:["data-tooltip-top","data-tooltip-right","data-tooltip-bottom","data-tooltip-left"],orientation:"data-tooltip-top",params:[{name:"$tooltip-style",type:"map",default:""},{name:"$tooltip-radius",type:"number",default:"2"},{name:"$tooltip-padding-ratio",type:"number",default:"2"},{name:"$tooltip-font-size",type:"number",default:"12"},{name:"$tooltip-line-height",type:"number",default:"12"},{name:"$tooltip-min-height",type:"number",default:"20"},{name:"$tooltip-weight",type:"string",default:"$is-normal"},{name:"$tooltip-background",type:"color",default:"$background-invert"},{name:"$tooltip-color",type:"color",default:"$text-invert"}],requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"},{name:"metrics()",type:"mixin",link:"#scroll-to-metrics"},{name:"$body-font-family",type:"variable",link:"#scroll-to-body-font-family"}],markup:'<a class="btn" data-tooltip-top="hello!">hover me</a>'}},watch:{orientation:function(t){this.markup='<a class="btn" '.concat(t,'="hello!">hover me</a>')}}},l=o,c=a("2877"),u=Object(c["a"])(l,i,s,!1,null,null,null);e["default"]=u.exports},"386b":function(t,e,a){var i=a("5ca1"),s=a("79e5"),r=a("be13"),n=/"/g,o=function(t,e,a,i){var s=String(r(t)),o="<"+e;return""!==a&&(o+=" "+a+'="'+String(i).replace(n,"&quot;")+'"'),o+">"+s+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(o),i(i.P+i.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",a)}},b54a:function(t,e,a){"use strict";a("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},da36:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.requires?a("div",{staticClass:"is-margin-bottom-8"},[a("h4",{staticClass:"is-h2"},[t._v("requires")]),a("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(e,i){return a("li",{key:i,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[e.link?a("router-link",{staticClass:"code",attrs:{to:t.url(e)},domProps:{textContent:t._s(e.name)}}):a("span",{staticClass:"code",domProps:{textContent:t._s(e.name)}})],1)}),0)]):t._e()},s=[],r=(a("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),n=r,o=a("2877"),l=Object(o["a"])(n,i,s,!1,null,null,null);e["a"]=l.exports},dd8e:function(t,e,a){"use strict";var i=a("e3f6"),s=a.n(i);s.a},e3f6:function(t,e,a){}}]);