(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3f38d6c"],{"2c22":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"is-margin-bottom-5 is-padding-bottom-5 is-border-bottom"},[e("h2",{staticClass:"is-h3",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,(function(a,s){return e("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])})),0)])])]):t._e()},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],r={props:["params","title"]},n=r,l=(e("fc58"),e("2877")),o=Object(l["a"])(n,s,i,!1,null,"8ea7df52",null);a["a"]=o.exports},"6bb0":function(t,a,e){},"857a":function(t,a,e){var s=e("1d80"),i=/"/g;t.exports=function(t,a,e,r){var n=String(s(t)),l="<"+a;return""!==e&&(l+=" "+e+'="'+String(r).replace(i,"&quot;")+'"'),l+">"+n+"</"+a+">"}},9911:function(t,a,e){"use strict";var s=e("23e7"),i=e("857a"),r=e("af03");s({target:"String",proto:!0,forced:r("link")},{link:function(t){return i(this,"a","href",t)}})},a1a9:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),e("div",{staticClass:"nav"},[e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":1===t.activeTab},on:{click:function(a){t.activeTab=1}}},[t._v("inline")])]),e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":2===t.activeTab},on:{click:function(a){t.activeTab=2}}},[t._v("local")])]),e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":3===t.activeTab},on:{click:function(a){t.activeTab=3}}},[t._v("global")])])]),1===t.activeTab?e("div",{staticClass:"animated fadeIn"},[t._m(1),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup1,expression:"markup1"}]},[e("code",{staticClass:"html"})])]):t._e(),2===t.activeTab?e("div",{staticClass:"animated fadeIn"},[t._m(2),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markupLocal,expression:"markupLocal"}]},[e("code",{staticClass:"html"})])]):t._e(),3===t.activeTab?e("div",{staticClass:"animated"},[e("div",{staticClass:"demo-preview is-padding-8 is-margin-bottom-5",attrs:{"data-flex":"center center-items"}},[e("a",{staticClass:"btn",on:{click:function(a){t.showLoader=!t.showLoader}}},[t._v("show global loader")]),t.showLoader?e("div",{staticClass:"loader is-global",on:{click:function(a){t.showLoader=!t.showLoader}}}):t._e()]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markupGlobal,expression:"markupGlobal"}]},[e("code",{staticClass:"html"})])]):t._e(),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.params}}),e("requires-list",{attrs:{requires:t.requires}})],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"titlebar"},[e("h1",[t._v("loader")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demo-preview is-padding-8 is-margin-bottom-5"},[e("div",{attrs:{"data-grid":""}},[e("div",{attrs:{"data-col":"4","data-flex":"center center-items"}},[e("span",{staticClass:"loader"})]),e("div",{attrs:{"data-col":"4","data-flex":"center center-items"}},[e("a",{staticClass:"btn"},[e("span",{staticClass:"loader"})])]),e("div",{attrs:{"data-col":"4","data-flex":"center center-items"}},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"input input_big",attrs:{type:"text",placeholder:"input..."}}),e("div",{staticClass:"input-group__addon"},[e("span",{staticClass:"loader"})])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demo-preview is-padding-8 is-margin-bottom-5",attrs:{"data-flex":"center center-items"}},[e("a",{staticClass:"btn btn_super is-relative"},[t._v(" save "),e("span",{staticClass:"loader is-local"})])])}],r=e("2c22"),n=e("da36"),l={components:{ParamsTable:r["a"],RequiresList:n["a"]},data:function(){return{activeTab:1,showLoader:!1,markup1:'<span class="loader"></span>\n\n<a href="btn"><span class="loader"></span></a>\n\n<div class="input-group">\n  <input type="text" class="input" placeholder="input...">\n  <div class="input-group__addon">\n    <span class="loader"></span>\n  </div>\n</div>',markupLocal:'<span class="loader is-local"></span>',markupGlobal:'<span class="loader is-global"></span>',params:[{name:"$loader-size",type:"number",description:"height and width of loader",default:"24"},{name:"$loader-style",type:"map"},{name:"$loader-track-width",type:"number",default:"4"},{name:"$loader-track-color",type:"color",default:"rgba($text, 0.1)"},{name:"$loader-racer-color",type:"color",default:"$link"},{name:"$loader-racer-animation",type:"string",default:"loaderDefault"},{name:"$loader-racer-animation-speed",type:"string",default:"1s"},{name:"$loader-racer-animation-behavior",type:"string",default:"infinite linear"},{name:"$loader-is-local-style",type:"string"},{name:"$loader-is-global-style",type:"string"},{name:"$loader-is-global-background",type:"color",default:"$backdrop // rgba(#000, 0.2)"}],requires:[{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"},{name:"em()",type:"function",link:"#scroll-to-em"},{name:"rem()",type:"function",link:"#scroll-to-rem"}]}}},o=l,c=e("2877"),d=Object(c["a"])(o,s,i,!1,null,"2b3d440e",null);a["default"]=d.exports},af03:function(t,a,e){var s=e("d039");t.exports=function(t){return s((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},da36:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.requires?e("div",{staticClass:"is-margin-bottom-8"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,(function(a,s){return e("li",{key:s,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[a.link?e("router-link",{staticClass:"code",attrs:{to:t.url(a)},domProps:{textContent:t._s(a.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(a.name)}})],1)})),0)]):t._e()},i=[],r=(e("9911"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),n=r,l=e("2877"),o=Object(l["a"])(n,s,i,!1,null,null,null);a["a"]=o.exports},fc58:function(t,a,e){"use strict";var s=e("6bb0"),i=e.n(s);i.a}}]);