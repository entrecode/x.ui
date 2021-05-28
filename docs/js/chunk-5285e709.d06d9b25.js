(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5285e709"],{"2c22":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"is-margin-bottom-5 is-padding-bottom-5 is-border-bottom"},[e("h2",{staticClass:"is-h3",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,(function(a,i){return e("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])})),0)])])]):t._e()},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],s={props:["params","title"]},r=s,n=(e("fc58"),e("2877")),o=Object(n["a"])(r,i,l,!1,null,"8ea7df52",null);a["a"]=o.exports},"6bb0":function(t,a,e){},"857a":function(t,a,e){var i=e("1d80"),l=/"/g;t.exports=function(t,a,e,s){var r=String(i(t)),n="<"+a;return""!==e&&(n+=" "+e+'="'+String(s).replace(l,"&quot;")+'"'),n+">"+r+"</"+a+">"}},9911:function(t,a,e){"use strict";var i=e("23e7"),l=e("857a"),s=e("af03");i({target:"String",proto:!0,forced:s("link")},{link:function(t){return l(this,"a","href",t)}})},af03:function(t,a,e){var i=e("d039");t.exports=function(t){return i((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},da36:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.requires?e("div",{staticClass:"is-margin-bottom-8"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,(function(a,i){return e("li",{key:i,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[a.link?e("router-link",{staticClass:"code",attrs:{to:t.url(a)},domProps:{textContent:t._s(a.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(a.name)}})],1)})),0)]):t._e()},l=[],s=(e("9911"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),r=s,n=e("2877"),o=Object(n["a"])(r,i,l,!1,null,null,null);a["a"]=o.exports},e60f:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),e("div",{staticClass:"nav"},[e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":1===t.activeTab},on:{click:function(a){t.activeTab=1}}},[t._v("default")])]),e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":2===t.activeTab},on:{click:function(a){t.activeTab=2}}},[t._v("with grid")])])]),1===t.activeTab?e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"center"}},[e("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"},domProps:{innerHTML:t._s(t.defaultMarkup)}})]):t._e(),2===t.activeTab?e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[t._m(1)]):t._e(),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.defaultMarkup,expression:"defaultMarkup"},{name:"show",rawName:"v-show",value:1===t.activeTab,expression:"activeTab === 1"}]},[e("code",{staticClass:"html"})]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.withGridMarkup,expression:"withGridMarkup"},{name:"show",rawName:"v-show",value:2===t.activeTab,expression:"activeTab === 2"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.inputParams}}),e("params-table",{attrs:{params:t.labelParams,title:"label params"}}),e("params-table",{attrs:{params:t.infoParams,title:"info params"}}),e("requires-list",{attrs:{requires:t.requires}})],1)])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"titlebar"},[e("h1",[t._v("field-group")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[e("div",{attrs:{"data-grid":""}},[e("div",{attrs:{"data-col":"6"}},[e("div",{staticClass:"field-group"},[e("label",{staticClass:"field-group__label",attrs:{for:""}},[t._v("label")]),e("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),e("p",{staticClass:"field-group__info"},[t._v("field-group info")])])]),e("div",{attrs:{"data-col":"6"}},[e("div",{staticClass:"field-group"},[e("label",{staticClass:"field-group__label",attrs:{for:""}},[t._v("label")]),e("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),e("p",{staticClass:"field-group__info"},[t._v("field-group info")])])]),e("div",{staticClass:"spacer"}),e("div",{attrs:{"data-col":"12"}},[e("div",{staticClass:"field-group",attrs:{"data-flex":""}},[e("label",{staticClass:"field-group__label",attrs:{for:"","data-col":"3"}},[t._v("label")]),e("div",{attrs:{"data-col":"9"}},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),e("p",{staticClass:"field-group__info"},[t._v("field-group info")])])])])])])}],s=e("2c22"),r=e("da36"),n={name:"Form",components:{RequiresList:r["a"],ParamsTable:s["a"]},data:function(){return{requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"},{name:"em()",type:"mixin",link:"#scroll-to-em"}],activeTab:1,defaultMarkup:'<div class="field-group">\n  <label for class="field-group__label">field-group label</label>\n  <input type="text" placeholder="input..." class="input" />\n  <p class="field-group__info">field-group info</p>\n</div>\n\n\n<div class="field-group field-group_boolean">\n  <label for="3gjh3" class="field-group__label">field-group label</label>\n  <input type="checkbox" id="3gjh3" />\n</div>\n\n\x3c!-- boolean with infotext --\x3e\n<div class="field-group">\n  <div class="field-group_boolean">\n    <label for="3gjh3" class="field-group__label">field-group label</label>\n    <input type="checkbox" id="3gjh3" />\n  </div>\n  <p class="field-group__info">field-group info</p>\n</div>\n\n\x3c!-- boolean with infotext --\x3e\n<div class="field-group field-group_boolean">\n  <label for="3gjh3" class="field-group__label">\n    field-group label\n    <p class="field-group__info">field-group info</p>\n  </label>\n  <input type="checkbox" id="3gjh3" />\n</div>',withGridMarkup:'<div data-grid>\n  <div data-col="6">\n    <div class="field-group">\n      <label for="" class="field-group__label">label</label>\n      <input type="text" placeholder="input..." class="input" />\n      <p class="field-group__info">field-group info</p>\n    </div>\n  </div>\n  \n  <div data-col="6">\n    <div class="field-group">\n      <label for="" class="field-group__label">label</label>\n      <input type="text" placeholder="input..." class="input" />\n      <p class="field-group__info">field-group info</p>\n    </div>\n  </div>\n  \n  <div data-col="12">\n    <div class="field-group" data-flex>\n      <label for="" class="field-group__label" data-col="3">label</label>\n      <div data-col="9">\n        <input type="text" placeholder="input..." class="input" />\n        <p class="field-group__info">field-group info</p>\n      </div>\n    </div>\n  </div>\n</div>',inputParams:[{name:"$field-group-spacing",type:"array",default:"0 0 16"},{name:"$field-group-padding",type:"array",default:"0"},{name:"$field-group-background",type:"color",default:"none"},{name:"$field-group-style",type:"map",default:""}],labelParams:[{name:"$field-group-label-spacing",type:"array",default:"4"},{name:"$field-group-label-font-size",type:"number",default:"$base-font-size // 16"},{name:"$field-group-label-style",type:"map",default:""}],infoParams:[{name:"$field-group-info-spacing",type:"array",default:"8 4"},{name:"$field-group-info-font-size",type:"number",default:"$base-font-size * 0.75 // 12"},{name:"$field-group-info-style",type:"map",default:""}]}}},o=n,d=e("2877"),p=Object(d["a"])(o,i,l,!1,null,"154b4904",null);a["default"]=p.exports},fc58:function(t,a,e){"use strict";e("6bb0")}}]);