(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f07af36"],{"2c22":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"params-table"},[e("h4",{staticClass:"is-h4",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,function(a,s){return e("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])}),0)])]):t._e()},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],i={props:["params","title"]},l=i,n=(e("744b"),e("2877")),o=Object(n["a"])(l,s,r,!1,null,"834bd208",null);a["a"]=o.exports},"386b":function(t,a,e){var s=e("5ca1"),r=e("79e5"),i=e("be13"),l=/"/g,n=function(t,a,e,s){var r=String(i(t)),n="<"+a;return""!==e&&(n+=" "+e+'="'+String(s).replace(l,"&quot;")+'"'),n+">"+r+"</"+a+">"};t.exports=function(t,a){var e={};e[t]=a(n),s(s.P+s.F*r(function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",e)}},"40ce":function(t,a,e){},"744b":function(t,a,e){"use strict";var s=e("7a1d"),r=e.n(s);r.a},"7a1d":function(t,a,e){},b54a:function(t,a,e){"use strict";e("386b")("link",function(t){return function(a){return t(this,"a","href",a)}})},b9b6:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),t._m(1),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.params}}),e("div",{staticClass:"spacer"}),e("requires-list",{attrs:{requires:t.requires}})],1)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"titlebar"},[e("h1",[t._v("file-upload")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"center"}},[e("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[e("form",{staticClass:"file-upload"},[e("input",{staticClass:"file-upload__input",attrs:{type:"file",multiple:"multiple"}}),t._v(" drop files here or\n          "),e("a",[t._v("upload")])])])])}],i=e("2c22"),l=e("da36"),n={components:{ParamsTable:i["a"],RequiresList:l["a"]},data:function(){return{markup:'<form class="file-upload">\n  <input class="file-upload__input" type="file" multiple="multiple">\n  drop files here or <a>upload</a>\n</form>',params:[{name:"$file-upload-spacing",type:"array",default:"0 0 16"},{name:"$file-upload-padding",type:"array",default:"16"},{name:"$file-upload-border-radius",type:"number",default:"4"},{name:"$file-upload-border",type:"string",default:"2px dashed $minor"},{name:"$file-upload-background",type:"color",default:"none"},{name:"$file-upload-style",type:"map",default:""},{name:"$file-upload-hover-style",type:"map",default:""}],requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"}]}}},o=n,c=e("2877"),u=Object(c["a"])(o,s,r,!1,null,"81abc710",null);a["default"]=u.exports},bb3a:function(t,a,e){"use strict";var s=e("40ce"),r=e.n(s);r.a},da36:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.requires?e("div",{staticClass:"requires-list"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(a,s){return e("li",{key:s,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[a.link?e("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{to:t.url(a)},domProps:{textContent:t._s(a.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(a.name)}})],1)}),0)]):t._e()},r=[],i=(e("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),l=i,n=(e("bb3a"),e("2877")),o=Object(n["a"])(l,s,r,!1,null,"7bee28eb",null);a["a"]=o.exports}}]);
//# sourceMappingURL=chunk-2f07af36.10659820.js.map