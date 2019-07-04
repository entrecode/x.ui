(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34e977d8"],{"2c22":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"params-table"},[e("h4",{staticClass:"is-h4",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,function(a,r){return e("tr",{key:r,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])}),0)])]):t._e()},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],s={props:["params","title"]},n=s,o=(e("744b"),e("2877")),l=Object(o["a"])(n,r,i,!1,null,"834bd208",null);a["a"]=l.exports},"386b":function(t,a,e){var r=e("5ca1"),i=e("79e5"),s=e("be13"),n=/"/g,o=function(t,a,e,r){var i=String(s(t)),o="<"+a;return""!==e&&(o+=" "+e+'="'+String(r).replace(n,"&quot;")+'"'),o+">"+i+"</"+a+">"};t.exports=function(t,a){var e={};e[t]=a(o),r(r.P+r.F*i(function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",e)}},"5efc":function(t,a,e){},"744b":function(t,a,e){"use strict";var r=e("7a1d"),i=e.n(r);i.a},"7a1d":function(t,a,e){},b54a:function(t,a,e){"use strict";e("386b")("link",function(t){return function(a){return t(this,"a","href",a)}})},c1c1:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),t._m(1),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.params}}),e("div",{staticClass:"spacer"}),e("requires-list",{attrs:{requires:t.requires}})],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"titlebar"},[e("h1",[t._v("xui-radio")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"center"}},[e("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[e("div",{attrs:{"data-grid":""}},[e("div",{attrs:{"data-col":"6"}},[e("div",{staticClass:"xui-radio"},[e("input",{attrs:{type:"radio",name:"choice",id:"boollean-1"}}),e("label",{staticClass:"xui-radio__label",attrs:{for:"boollean-1"}},[t._v("checkbox")])])]),e("div",{attrs:{"data-col":"6"}},[e("div",{staticClass:"xui-radio"},[e("input",{attrs:{type:"radio",name:"choice",id:"boollean-2"}}),e("label",{staticClass:"xui-radio__label",attrs:{for:"boollean-2"}},[t._v("checkbox")])])])])])])}],s=e("2c22"),n=e("da36"),o={components:{ParamsTable:s["a"],RequiresList:n["a"]},data:function(){return{markup:'<div class="xui-radio">\n  <input type="radio" id="" name>\n  <label for="" class="xui-radio__label">checkbox</label>\n</div>',params:[{name:"$xui-radio-spacing",type:"array",default:"0 12 0 0"},{name:"$xui-radio-height",type:"number",default:"20"},{name:"$xui-radio-background",type:"color",default:"$input-background"},{name:"$xui-radio-style",type:"array",default:""},{name:"$xui-radio-hover-style",type:"array",default:""},{name:"$xui-radio-checked-style",type:"array",default:""},{name:"$xui-radio-dot-size",type:"number",default:"8"},{name:"$xui-radio-dot-color",type:"color",description:"color of the dot if unchecked",default:"transparent"},{name:"$xui-radio-dot-hover-color",type:"color",description:"color of the dot on hover",default:"$text-lightest"},{name:"$xui-radio-dot-checked-color",type:"color",description:"color of the dot if checked",default:"$link"}],requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"rem()",type:"function",link:"#scroll-to-rem"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"},{name:"%is-hidden-input",type:"placeholder"}]}}},l=o,c=e("2877"),d=Object(c["a"])(l,r,i,!1,null,"05e4b2a4",null);a["default"]=d.exports},da36:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.requires?e("div",{staticClass:"requires-list"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(a,r){return e("li",{key:r,attrs:{"data-col":"fit"}},[a.link?e("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{to:t.url(a)},domProps:{textContent:t._s(a.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(a.name)}})],1)}),0)]):t._e()},i=[],s=(e("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),n=s,o=(e("e20d"),e("2877")),l=Object(o["a"])(n,r,i,!1,null,"610b7bcc",null);a["a"]=l.exports},e20d:function(t,a,e){"use strict";var r=e("5efc"),i=e.n(r);i.a}}]);
//# sourceMappingURL=chunk-34e977d8.d93119b8.js.map