(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5285e709"],{"2c22":function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.params?e("div",{staticClass:"is-margin-bottom-5 is-padding-bottom-5 is-border-bottom"},[e("h2",{staticClass:"is-h3",domProps:{textContent:a._s(a.title?a.title:"parameters")}}),e("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[e("table",{staticClass:"table"},[a._m(0),e("tbody",a._l(a.params,(function(t,i){return e("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:a._s(t.name)}}),t.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:a._s(t.description)}}):a._e()]),t.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:a._s(t.type)}})]):a._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])})),0)])])]):a._e()},l=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[a._v("Name")]),e("th",{attrs:{"data-col":"2"}},[a._v("Type")]),e("th",{attrs:{"data-col":"5"}},[a._v("Default Value")])])])}],s={props:["params","title"]},r=s,n=(e("fc58"),e("2877")),o=Object(n["a"])(r,i,l,!1,null,"8ea7df52",null);t["a"]=o.exports},"6bb0":function(a,t,e){},"857a":function(a,t,e){var i=e("1d80"),l=/"/g;a.exports=function(a,t,e,s){var r=String(i(a)),n="<"+t;return""!==e&&(n+=" "+e+'="'+String(s).replace(l,"&quot;")+'"'),n+">"+r+"</"+t+">"}},9911:function(a,t,e){"use strict";var i=e("23e7"),l=e("857a"),s=e("af03");i({target:"String",proto:!0,forced:s("link")},{link:function(a){return l(this,"a","href",a)}})},af03:function(a,t,e){var i=e("d039");a.exports=function(a){return i((function(){var t=""[a]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},da36:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.requires?e("div",{staticClass:"is-margin-bottom-8"},[e("h4",{staticClass:"is-h2"},[a._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},a._l(a.requires,(function(t,i){return e("li",{key:i,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[t.link?e("router-link",{staticClass:"code",attrs:{to:a.url(t)},domProps:{textContent:a._s(t.name)}}):e("span",{staticClass:"code",domProps:{textContent:a._s(t.name)}})],1)})),0)]):a._e()},l=[],s=(e("9911"),{props:["requires"],methods:{url:function(a){return"/"+a.type+"s"+a.link}}}),r=s,n=e("2877"),o=Object(n["a"])(r,i,l,!1,null,null,null);t["a"]=o.exports},e60f:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[a._m(0),e("div",{staticClass:"nav"},[e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":1===a.activeTab},on:{click:function(t){a.activeTab=1}}},[a._v("default")])]),e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":2===a.activeTab},on:{click:function(t){a.activeTab=2}}},[a._v("with grid")])])]),1===a.activeTab?e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"center"}},[e("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"},domProps:{innerHTML:a._s(a.defaultMarkup)}})]):a._e(),2===a.activeTab?e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[a._m(1)]):a._e(),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.defaultMarkup,expression:"defaultMarkup"},{name:"show",rawName:"v-show",value:1===a.activeTab,expression:"activeTab === 1"}]},[e("code",{staticClass:"html"})]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.withGridMarkup,expression:"withGridMarkup"},{name:"show",rawName:"v-show",value:2===a.activeTab,expression:"activeTab === 2"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:a.inputParams}}),e("params-table",{attrs:{params:a.labelParams,title:"label params"}}),e("params-table",{attrs:{params:a.infoParams,title:"info params"}}),e("requires-list",{attrs:{requires:a.requires}})],1)])},l=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"titlebar"},[e("h1",[a._v("field-group")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[e("div",{attrs:{"data-grid":""}},[e("div",{attrs:{"data-col":"6"}},[e("div",{staticClass:"field-group"},[e("label",{staticClass:"field-group__label",attrs:{for:""}},[a._v("label")]),e("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),e("p",{staticClass:"field-group__info"},[a._v("field-group info")])])]),e("div",{attrs:{"data-col":"6"}},[e("div",{staticClass:"field-group"},[e("label",{staticClass:"field-group__label",attrs:{for:""}},[a._v("label")]),e("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),e("p",{staticClass:"field-group__info"},[a._v("field-group info")])])]),e("div",{staticClass:"spacer"}),e("div",{attrs:{"data-col":"12"}},[e("div",{staticClass:"field-group",attrs:{"data-flex":""}},[e("label",{staticClass:"field-group__label",attrs:{for:"","data-col":"3"}},[a._v("label")]),e("div",{attrs:{"data-col":"9"}},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),e("p",{staticClass:"field-group__info"},[a._v("field-group info")])])])])])])}],s=e("2c22"),r=e("da36"),n={name:"Form",components:{RequiresList:r["a"],ParamsTable:s["a"]},data:function(){return{requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"},{name:"em()",type:"mixin",link:"#scroll-to-em"}],activeTab:1,defaultMarkup:'<div class="field-group">\n  <label for class="field-group__label">field-group label</label>\n  <input type="text" placeholder="input..." class="input" />\n  <p class="field-group__info">field-group info</p>\n</div>\n\n\n<div class="field-group field-group_boolean">\n  <label for="3gjh3" class="field-group__label">field-group label</label>\n  <input type="checkbox" id="3gjh3" />\n</div>\n\n\x3c!-- boolean with infotext --\x3e\n<div class="field-group">\n  <div class="field-group_boolean">\n    <label for="3gjh3" class="field-group__label">field-group label</label>\n    <input type="checkbox" id="3gjh3" />\n  </div>\n  <p class="field-group__info">field-group info</p>\n</div>\n\n\x3c!-- boolean with infotext --\x3e\n<div class="field-group field-group_boolean">\n  <label for="3gjh3" class="field-group__label">\n    field-group label\n    <p class="field-group__info">field-group info</p>\n  </label>\n  <input type="checkbox" id="3gjh3" />\n</div>',withGridMarkup:'<div data-grid>\n  <div data-col="6">\n    <div class="field-group">\n      <label for="" class="field-group__label">label</label>\n      <input type="text" placeholder="input..." class="input" />\n      <p class="field-group__info">field-group info</p>\n    </div>\n  </div>\n  \n  <div data-col="6">\n    <div class="field-group">\n      <label for="" class="field-group__label">label</label>\n      <input type="text" placeholder="input..." class="input" />\n      <p class="field-group__info">field-group info</p>\n    </div>\n  </div>\n  \n  <div data-col="12">\n    <div class="field-group" data-flex>\n      <label for="" class="field-group__label" data-col="3">label</label>\n      <div data-col="9">\n        <input type="text" placeholder="input..." class="input" />\n        <p class="field-group__info">field-group info</p>\n      </div>\n    </div>\n  </div>\n</div>',inputParams:[{name:"$field-group-spacing",type:"array",default:"0 0 16"},{name:"$field-group-padding",type:"array",default:"0"},{name:"$field-group-background",type:"color",default:"none"},{name:"$field-group-style",type:"map",default:""}],labelParams:[{name:"$field-group-label-spacing",type:"array",default:"4"},{name:"$field-group-label-font-size",type:"number",default:"$base-font-size // 16"},{name:"$field-group-label-style",type:"map",default:""}],infoParams:[{name:"$field-group-info-spacing",type:"array",default:"8 4"},{name:"$field-group-info-font-size",type:"number",default:"$base-font-size * 0.75 // 12"},{name:"$field-group-info-style",type:"map",default:""}]}}},o=n,d=e("2877"),p=Object(d["a"])(o,i,l,!1,null,"154b4904",null);t["default"]=p.exports},fc58:function(a,t,e){"use strict";var i=e("6bb0"),l=e.n(i);l.a}}]);