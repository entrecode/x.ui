(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34e977d8"],{"2c22":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"params-table"},[e("h4",{staticClass:"is-h4",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,function(a,i){return e("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])}),0)])]):t._e()},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],s={props:["params","title"]},l=s,n=(e("744b"),e("2877")),o=Object(n["a"])(l,i,r,!1,null,"834bd208",null);a["a"]=o.exports},"386b":function(t,a,e){var i=e("5ca1"),r=e("79e5"),s=e("be13"),l=/"/g,n=function(t,a,e,i){var r=String(s(t)),n="<"+a;return""!==e&&(n+=" "+e+'="'+String(i).replace(l,"&quot;")+'"'),n+">"+r+"</"+a+">"};t.exports=function(t,a){var e={};e[t]=a(n),i(i.P+i.F*r(function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",e)}},"5efc":function(t,a,e){},"744b":function(t,a,e){"use strict";var i=e("7a1d"),r=e.n(i);r.a},"7a1d":function(t,a,e){},b54a:function(t,a,e){"use strict";e("386b")("link",function(t){return function(a){return t(this,"a","href",a)}})},c1c1:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),t._m(1),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.params}}),e("div",{staticClass:"spacer"}),e("requires-list",{attrs:{requires:t.requires}})],1)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"titlebar"},[e("h1",[t._v("xui-radio")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"center"}},[e("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[e("div",{attrs:{"data-grid":""}},[e("div",{attrs:{"data-col":"auto"}},[e("div",{staticClass:"xui-radio"},[e("input",{attrs:{type:"radio",name:"choice",id:"gdhf"}}),e("label",{staticClass:"xui-radio__label",attrs:{for:"gdhf"}},[t._v("checkbox")])])]),e("div",{attrs:{"data-col":"auto"}},[e("div",{staticClass:"xui-radio"},[e("input",{attrs:{type:"radio",name:"choice",id:"g3jhg"}}),e("label",{staticClass:"xui-radio__label",attrs:{for:"g3jhg"}},[t._v("checkbox")])])]),e("div",{attrs:{"data-col":"fit"}},[e("div",{staticClass:"xui-radio"},[e("input",{attrs:{type:"radio",name:"choice",id:"hg3hg"}}),e("label",{staticClass:"xui-radio__label",attrs:{for:"hg3hg"}})])])])])])}],s=e("2c22"),l=e("da36"),n={components:{ParamsTable:s["a"],RequiresList:l["a"]},data:function(){return{markup:'<div class="xui-radio">\n  <input type="radio" id="" name>\n  <label for="" class="xui-radio__label">checkbox</label>\n</div>\n\n\x3c!-- without label --\x3e\n<div class="xui-radio">\n  <input type="radio" id="" name>\n  <label for="" class="xui-radio__label"></label>\n</div>',params:[{name:"$xui-radio-spacing",type:"array",default:"0 12 0 0"},{name:"$xui-radio-height",type:"number",default:"20"},{name:"$xui-radio-background",type:"color",default:"$input-background"},{name:"$xui-radio-style",type:"map",default:""},{name:"$xui-radio-hover-style",type:"map",default:""},{name:"$xui-radio-checked-style",type:"map",default:""},{name:"$xui-radio-dot-size",type:"number",default:"8"},{name:"$xui-radio-dot-color",type:"color",description:"color of the dot if unchecked",default:"transparent"},{name:"$xui-radio-dot-hover-color",type:"color",description:"color of the dot on hover",default:"$text-lightest"},{name:"$xui-radio-dot-checked-color",type:"color",description:"color of the dot if checked",default:"$link"}],requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"rem()",type:"function",link:"#scroll-to-rem"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"},{name:"%is-hidden-input",type:"placeholder"}]}}},o=n,c=e("2877"),d=Object(c["a"])(o,i,r,!1,null,"663998ea",null);a["default"]=d.exports},da36:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.requires?e("div",{staticClass:"requires-list"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(a,i){return e("li",{key:i,attrs:{"data-col":"fit"}},[a.link?e("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{to:t.url(a)},domProps:{textContent:t._s(a.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(a.name)}})],1)}),0)]):t._e()},r=[],s=(e("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),l=s,n=(e("e20d"),e("2877")),o=Object(n["a"])(l,i,r,!1,null,"610b7bcc",null);a["a"]=o.exports},e20d:function(t,a,e){"use strict";var i=e("5efc"),r=e.n(i);r.a}}]);
//# sourceMappingURL=chunk-34e977d8.81d5d707.js.map