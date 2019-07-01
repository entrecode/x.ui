(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3904e56a"],{"2c22":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"params-table"},[e("h4",{staticClass:"is-h4",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,function(a,s){return e("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])}),0)])]):t._e()},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],r={props:["params","title"]},l=r,o=(e("744b"),e("2877")),n=Object(o["a"])(l,s,i,!1,null,"834bd208",null);a["a"]=n.exports},"744b":function(t,a,e){"use strict";var s=e("7a1d"),i=e.n(s);i.a},"7a1d":function(t,a,e){},"7b87":function(t,a,e){"use strict";var s=e("a2b7"),i=e.n(s);i.a},a2b7:function(t,a,e){},c1c1:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[t._m(0),t._m(1),e("div",{attrs:{"data-grid":"center"}},[e("div",{attrs:{"data-col":"10@md 8@lg"}},[e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.params}}),e("div",{staticClass:"divider"}),e("requires-list",{attrs:{requires:t.requires}})],1)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"is-padding-center-3"},[e("h2",[t._v("xui-radio")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[e("div",{staticClass:"is-theme is-padding-5 is-radius"},[e("div",{attrs:{"data-grid":""}},[e("div",{attrs:{"data-col":"6"}},[e("div",{staticClass:"xui-radio"},[e("input",{attrs:{type:"radio",name:"choice",id:"boollean-1"}}),e("label",{staticClass:"xui-radio__label",attrs:{for:"boollean-1"}},[t._v("checkbox")])])]),e("div",{attrs:{"data-col":"6"}},[e("div",{staticClass:"xui-radio"},[e("input",{attrs:{type:"radio",name:"choice",id:"boollean-2"}}),e("label",{staticClass:"xui-radio__label",attrs:{for:"boollean-2"}},[t._v("checkbox")])])])])])])}],r=e("2c22"),l=e("da36"),o={components:{ParamsTable:r["a"],RequiresList:l["a"]},data:function(){return{markup:'<div class="xui-radio">\n  <input type="radio" id="" name>\n  <label for="" class="xui-radio__label">checkbox</label>\n</div>',params:[{name:"$xui-radio-spacing",type:"array",default:"0 12 0 0"},{name:"$xui-radio-height",type:"number",default:"20"},{name:"$xui-radio-background",type:"color",default:"$input-background"},{name:"$xui-radio-style",type:"array",default:""},{name:"$xui-radio-hover-style",type:"array",default:""},{name:"$xui-radio-checked-style",type:"array",default:""},{name:"$xui-radio-dot-size",type:"number",default:"8"},{name:"$xui-radio-dot-color",type:"color",description:"color of the dot if unchecked",default:"transparent"},{name:"$xui-radio-dot-hover-color",type:"color",description:"color of the dot on hover",default:"$text-lightest"},{name:"$xui-radio-dot-checked-color",type:"color",description:"color of the dot if checked",default:"$link"}],requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"rem()",type:"function",link:"#scroll-to-rem"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"},{name:"%is-hidden-input",type:"placeholder"}]}}},n=o,c=e("2877"),d=Object(c["a"])(n,s,i,!1,null,"187193d0",null);a["default"]=d.exports},da36:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.requires?e("div",{staticClass:"requires-list"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(a,s){return e("li",{key:s,attrs:{"data-col":"fit"}},[a.link?e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{href:a.link},domProps:{textContent:t._s(a.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(a.name)}})])}),0)]):t._e()},i=[],r={props:["requires"]},l=r,o=(e("7b87"),e("2877")),n=Object(o["a"])(l,s,i,!1,null,"787126dd",null);a["a"]=n.exports}}]);
//# sourceMappingURL=chunk-3904e56a.eaae040e.js.map