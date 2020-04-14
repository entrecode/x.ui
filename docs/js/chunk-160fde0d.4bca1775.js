(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-160fde0d"],{"2c22":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"is-margin-bottom-5 is-padding-bottom-5 is-border-bottom"},[e("h2",{staticClass:"is-h3",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,(function(a,s){return e("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])})),0)])])]):t._e()},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],i={props:["params","title"]},l=i,n=(e("fc58"),e("2877")),o=Object(n["a"])(l,s,r,!1,null,"8ea7df52",null);a["a"]=o.exports},"6bb0":function(t,a,e){},"857a":function(t,a,e){var s=e("1d80"),r=/"/g;t.exports=function(t,a,e,i){var l=String(s(t)),n="<"+a;return""!==e&&(n+=" "+e+'="'+String(i).replace(r,"&quot;")+'"'),n+">"+l+"</"+a+">"}},9911:function(t,a,e){"use strict";var s=e("23e7"),r=e("857a"),i=e("af03");s({target:"String",proto:!0,forced:i("link")},{link:function(t){return r(this,"a","href",t)}})},af03:function(t,a,e){var s=e("d039");t.exports=function(t){return s((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},b9b6:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),t._m(1),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.params}}),e("requires-list",{attrs:{requires:t.requires}})],1)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"titlebar"},[e("h1",[t._v("file-upload")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"center"}},[e("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[e("form",{staticClass:"file-upload"},[e("input",{staticClass:"file-upload__input",attrs:{type:"file",multiple:"multiple"}}),t._v(" drop files here or "),e("a",[t._v("upload")])])])])}],i=e("2c22"),l=e("da36"),n={components:{ParamsTable:i["a"],RequiresList:l["a"]},data:function(){return{markup:'<form class="file-upload">\n  <input class="file-upload__input" type="file" multiple="multiple">\n  drop files here or <a>upload</a>\n</form>',params:[{name:"$file-upload-spacing",type:"array",default:"0 0 16"},{name:"$file-upload-padding",type:"array",default:"16"},{name:"$file-upload-border-radius",type:"number",default:"4"},{name:"$file-upload-border",type:"string",default:"2px dashed $minor"},{name:"$file-upload-background",type:"color",default:"none"},{name:"$file-upload-style",type:"map",default:""},{name:"$file-upload-hover-style",type:"map",default:""}],requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"}]}}},o=n,u=e("2877"),c=Object(u["a"])(o,s,r,!1,null,"55541b04",null);a["default"]=c.exports},da36:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.requires?e("div",{staticClass:"is-margin-bottom-8"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,(function(a,s){return e("li",{key:s,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[a.link?e("router-link",{staticClass:"code",attrs:{to:t.url(a)},domProps:{textContent:t._s(a.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(a.name)}})],1)})),0)]):t._e()},r=[],i=(e("9911"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),l=i,n=e("2877"),o=Object(n["a"])(l,s,r,!1,null,null,null);a["a"]=o.exports},fc58:function(t,a,e){"use strict";var s=e("6bb0"),r=e.n(s);r.a}}]);