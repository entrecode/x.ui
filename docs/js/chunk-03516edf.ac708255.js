(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03516edf"],{"15a1":function(t,e,a){"use strict";var n=a("a8ce"),s=a.n(n);s.a},"22e3":function(t,e,a){},"2c22":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.params?a("div",{staticClass:"params-table"},[a("h4",{staticClass:"is-h4 is-padding-left-5",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),a("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.params,function(e,n){return a("tr",{key:n,attrs:{"data-grid":"small-gutter"}},[a("td",{attrs:{valign:"top","data-col":"5"}},[a("code",{staticClass:"is-bold",domProps:{textContent:t._s(e.name)}}),e.description?a("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(e.description)}}):t._e()]),e.type?a("td",{attrs:{valign:"top","data-col":"2"}},[a("span",{staticClass:"tag",domProps:{textContent:t._s(e.type)}})]):t._e(),a("td",{attrs:{valign:"top","data-col":"5"}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.default||"...",expression:"param.default || '...'"}]},[a("code",{staticClass:"scss"})])])])}),0)])])]):t._e()},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{attrs:{"data-grid":"small-gutter"}},[a("th",{attrs:{"data-col":"5"}},[t._v("Name")]),a("th",{attrs:{"data-col":"2"}},[t._v("Type")]),a("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],r={props:["params","title"]},i=r,l=(a("e7db"),a("2877")),o=Object(l["a"])(i,n,s,!1,null,"e7da4c6c",null);e["a"]=o.exports},3055:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),a("div",{staticClass:"demo-preview is-relative",staticStyle:{"min-height":"320px"},attrs:{"data-flex":t.flexValues}},[t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)]),a("div",{staticClass:"spacer"}),a("div",{attrs:{"data-grid":""}},[a("div",{attrs:{"data-col":"4"}},[a("div",{staticClass:"field-group"},[a("label",{staticClass:"field-group__label",attrs:{for:"justifyContent"}},[t._v("justify-content")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.justifyContent,expression:"justifyContent"}],staticClass:"input",attrs:{id:"justifyContent"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.justifyContent=e.target.multiple?a:a[0]}}},t._l(t.justifyContents,function(e,n){return a("option",{key:n,domProps:{value:e,textContent:t._s(""===e?"select":e)}})}),0)])]),a("div",{attrs:{"data-col":"4"}},[a("div",{staticClass:"field-group"},[a("label",{staticClass:"field-group__label",attrs:{for:"alignItems"}},[t._v("align-items")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.alignItem,expression:"alignItem"}],staticClass:"input",attrs:{id:"alignItems"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.alignItem=e.target.multiple?a:a[0]}}},t._l(t.alignItems,function(e,n){return a("option",{key:n,domProps:{value:e,textContent:t._s(""===e?"select":e)}})}),0)])]),a("div",{attrs:{"data-col":"4"}},[a("div",{staticClass:"field-group"},[a("label",{staticClass:"field-group__label",attrs:{for:"direction"}},[t._v("flex-direction")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],staticClass:"input",attrs:{id:"direction"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.direction=e.target.multiple?a:a[0]}}},t._l(t.directions,function(e,n){return a("option",{key:n,domProps:{value:e,textContent:t._s(""===e?"select":e)}})}),0)])]),a("div",{attrs:{"data-col":"4"}},[a("div",{staticClass:"field-group"},[a("label",{staticClass:"field-group__label",attrs:{for:"wrap"}},[t._v("flex-wrap")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.wrap,expression:"wrap"}],staticClass:"input",attrs:{id:"wrap"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.wrap=e.target.multiple?a:a[0]}}},t._l(t.wraps,function(e,n){return a("option",{key:n,domProps:{value:e,textContent:t._s(""===e?"select":e)}})}),0)])]),a("div",{attrs:{"data-col":"4"}},[a("div",{staticClass:"field-group"},[a("label",{staticClass:"field-group__label",attrs:{for:"alignContent"}},[t._v("align-content")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.alignContent,expression:"alignContent"}],staticClass:"input",attrs:{id:"alignContent"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.alignContent=e.target.multiple?a:a[0]}}},t._l(t.alignContents,function(e,n){return a("option",{key:n,domProps:{value:e,textContent:t._s(""===e?"select":e)}})}),0)])])]),a("div",{staticClass:"spacer"}),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[a("code",{staticClass:"html"})]),a("div",{staticClass:"spacer"}),a("params-table",{attrs:{params:t.params}}),a("div",{staticClass:"spacer"}),a("requires-list",{attrs:{requires:t.requires}})],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titlebar"},[a("h1",[t._v("data-flex")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-col":"4"}},[a("div",{staticClass:"is-h1 is-margin-0 align-center"},[t._v("ONE")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-col":"4"}},[a("div",{staticClass:"is-h1 is-margin-0 align-center"},[t._v("ONE")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-col":"4"}},[a("div",{staticClass:"is-h1 is-margin-0 align-center"},[t._v("\n          THR\n          "),a("br"),t._v("EE\n        ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-col":"4"}},[a("div",{staticClass:"is-h1 is-margin-0 align-center"},[t._v("\n          FOU\n          "),a("br"),t._v("R\n        ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-col":"4"}},[a("div",{staticClass:"is-h1 is-margin-0 align-center"},[t._v("\n          FIVE\n          "),a("br"),t._v("E\n        ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-col":"4"}},[a("div",{staticClass:"is-h1 is-margin-0 align-center"},[t._v("SIX")])])}],r=a("2c22"),i=a("da36"),l={components:{ParamsTable:r["a"],RequiresList:i["a"]},data:function(){return{flexValues:"",justifyContents:["","around","between","center","stretch","start","end"],justifyContent:"",alignItems:["","end-items","start-items","center-items","baseline-items","stretch-items"],alignItem:"",alignContents:["","end-content","start-content","center-content","stretch-content","between-content","around-content"],alignContent:"",directions:["","column","column-reverse","row","row-reverse"],direction:"",wraps:["","wrap","nowrap","wrap-reverse"],wrap:"",markup:"<div data-flex></div>",requires:[{name:"set-data-map-breakpoints()",type:"mixin",link:"#scroll-to-set-data-map-breakpoints"}],params:[{name:"$_justify-content",type:"map",default:"(\n  'around': 'space-around',\n  'between': 'space-between',\n  'center': 'center',\n  'stretch': 'stretch',\n  'start': 'flex-start',\n  'end': 'flex-end'\n)"},{name:"$_align-items",type:"map",default:"(\n  'end-items': 'flex-end',\n  'start-items': 'flex-start',\n  'center-items': 'center',\n  'baseline-items': 'baseline',\n  'stretch-items': 'stretch'\n)"},{name:"$_flex-direction",type:"map",default:"(\n  'column': 'column',\n  'column-reverse': 'column-reverse',\n  'row': 'row',\n  'row-reverse': 'row-reverse'\n)"},{name:"$_flex-wrap",type:"map",default:"(\n  'wrap': 'wrap',\n  'nowrap': 'nowrap',\n  'wrap-reverse': 'wrap-reverse'\n)"}]}},computed:{dirty:function(){return[this.justifyContent,this.alignItem,this.alignContent,this.direction,this.wrap].join(" ").trim()}},watch:{dirty:function(t){this.flexValues=t,this.markup='<div data-flex="'.concat(this.flexValues,'"></div>')}}},o=l,c=(a("15a1"),a("2877")),u=Object(c["a"])(o,n,s,!1,null,"43f559e6",null);e["default"]=u.exports},"386b":function(t,e,a){var n=a("5ca1"),s=a("79e5"),r=a("be13"),i=/"/g,l=function(t,e,a,n){var s=String(r(t)),l="<"+e;return""!==a&&(l+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),l+">"+s+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(l),n(n.P+n.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",a)}},"40ce":function(t,e,a){},a8ce:function(t,e,a){},b54a:function(t,e,a){"use strict";a("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},bb3a:function(t,e,a){"use strict";var n=a("40ce"),s=a.n(n);s.a},da36:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.requires?a("div",{staticClass:"requires-list"},[a("h4",{staticClass:"is-h2"},[t._v("requires")]),a("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(e,n){return a("li",{key:n,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[e.link?a("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{to:t.url(e)},domProps:{textContent:t._s(e.name)}}):a("span",{staticClass:"code",domProps:{textContent:t._s(e.name)}})],1)}),0)]):t._e()},s=[],r=(a("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),i=r,l=(a("bb3a"),a("2877")),o=Object(l["a"])(i,n,s,!1,null,"7bee28eb",null);e["a"]=o.exports},e7db:function(t,e,a){"use strict";var n=a("22e3"),s=a.n(n);s.a}}]);