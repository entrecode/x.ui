(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-460c69b8"],{1848:function(t,a,s){},"2c22":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.params?s("div",{staticClass:"params-table"},[s("h2",{staticClass:"is-h3",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),s("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.params,function(a,i){return s("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[s("td",{attrs:{valign:"top","data-col":"5"}},[s("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?s("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?s("td",{attrs:{valign:"top","data-col":"2"}},[s("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),s("td",{attrs:{valign:"top","data-col":"5"}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[s("code",{staticClass:"scss"})])])])}),0)])])]):t._e()},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",{attrs:{"data-grid":"small-gutter"}},[s("th",{attrs:{"data-col":"5"}},[t._v("Name")]),s("th",{attrs:{"data-col":"2"}},[t._v("Type")]),s("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],n={props:["params","title"]},l=n,c=(s("cf9a"),s("2877")),p=Object(c["a"])(l,i,e,!1,null,"767a07fb",null);a["a"]=p.exports},cf9a:function(t,a,s){"use strict";var i=s("1848"),e=s.n(i);e.a},cfee:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[s("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),s("div",{staticClass:"nav"},[s("div",{staticClass:"nav__item"},[s("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":1===t.activeTab},on:{click:function(a){t.activeTab=1}}},[t._v("default")])]),s("div",{staticClass:"nav__item"},[s("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":2===t.activeTab},on:{click:function(a){t.activeTab=2}}},[t._v("advanced")])]),s("div",{staticClass:"nav__item"},[s("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":3===t.activeTab},on:{click:function(a){t.activeTab=3}}},[t._v("with grid")])]),s("div",{staticClass:"nav__item"},[s("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":4===t.activeTab},on:{click:function(a){t.activeTab=4}}},[t._v("mixed inputs")])]),s("div",{staticClass:"nav__item"},[s("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":5===t.activeTab},on:{click:function(a){t.activeTab=5}}},[t._v("with button")])]),s("div",{staticClass:"nav__item"},[s("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":6===t.activeTab},on:{click:function(a){t.activeTab=6}}},[t._v("with ixo")])])]),1===t.activeTab?s("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[t._m(1)]):t._e(),2===t.activeTab?s("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[t._m(2)]):t._e(),3===t.activeTab?s("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[t._m(3)]):t._e(),4===t.activeTab?s("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[t._m(4)]):t._e(),5===t.activeTab?s("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[t._m(5)]):t._e(),6===t.activeTab?s("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[s("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),s("div",{staticClass:"input-group__addon"},[s("svg",{staticClass:"ixo"},[s("use",{attrs:{"xlink:href":"#fire"}})])])])])]):t._e(),s("div",{staticClass:"spacer"}),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.defaultMarkup,expression:"defaultMarkup"},{name:"show",rawName:"v-show",value:1===t.activeTab,expression:"activeTab === 1"}]},[s("code",{staticClass:"html"})]),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.advancedMarkup,expression:"advancedMarkup"},{name:"show",rawName:"v-show",value:2===t.activeTab,expression:"activeTab === 2"}]},[s("code",{staticClass:"html"})]),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.withGridMarkup,expression:"withGridMarkup"},{name:"show",rawName:"v-show",value:3===t.activeTab,expression:"activeTab === 3"}]},[s("code",{staticClass:"html"})]),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.mixedMarkup,expression:"mixedMarkup"},{name:"show",rawName:"v-show",value:4===t.activeTab,expression:"activeTab === 4"}]},[s("code",{staticClass:"html"})]),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.buttonMarkup,expression:"buttonMarkup"},{name:"show",rawName:"v-show",value:5===t.activeTab,expression:"activeTab === 5"}]},[s("code",{staticClass:"html"})]),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.ixoMarkup,expression:"ixoMarkup"},{name:"show",rawName:"v-show",value:6===t.activeTab,expression:"activeTab === 6"}]},[s("code",{staticClass:"html"})]),s("div",{staticClass:"spacer"}),s("params-table",{attrs:{params:t.inputParams}})],1)])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"titlebar"},[s("h1",[t._v("input-group")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group__addon"},[s("small",[t._v("addon")])]),s("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}})]),s("div",{staticClass:"y-space-3"}),s("div",{staticClass:"input-group"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),s("div",{staticClass:"input-group__addon"},[s("small",[t._v("addon")])])]),s("div",{staticClass:"y-space-3"}),s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group__addon is-round-left"},[s("small",[t._v("addon")])]),s("input",{staticClass:"input input_round",attrs:{type:"text",placeholder:"input..."}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group__addon"},[s("small",[t._v("addon")])]),s("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),s("div",{staticClass:"x-space-1"}),s("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group__addon",attrs:{"data-col":"4"}},[s("small",[t._v("addon")])]),s("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),s("div",{staticClass:"input-group__addon",attrs:{"data-col":"6"}},[s("select",{staticClass:"input input_clear"},[s("option",{attrs:{value:"",selected:""}},[t._v("select option")]),s("option",{attrs:{value:""}},[t._v("option")]),s("option",{attrs:{value:""}},[t._v("option")])])])]),s("div",{staticClass:"y-space-3"}),s("div",{staticClass:"input-group"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),s("div",{staticClass:"x-space-1",staticStyle:{width:"2px"}}),s("div",{staticClass:"input-group__addon"},[s("div",{staticClass:"xui-checkbox"},[s("input",{attrs:{type:"checkbox",id:"checkbox-3"}}),s("label",{staticClass:"xui-checkbox__label",attrs:{for:"checkbox-3"}},[t._v("checkbox")])])])]),s("div",{staticClass:"y-space-3"}),s("div",{staticClass:"input-group"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),s("div",{staticClass:"xui-select",attrs:{tabindex:"0"}},[s("span",{staticClass:"xui-select__placeholder"},[t._v("select")]),s("span",{staticClass:"xui-select__caret"}),s("ul",{staticClass:"xui-select-options"},[s("li",[s("a",{staticClass:"xui-select-option",attrs:{href:"",tabindex:"0"}},[t._v("option 1")])]),s("li",[s("a",{staticClass:"xui-select-option",attrs:{href:"",tabindex:"0"}},[t._v("option 2")])]),s("li",[s("a",{staticClass:"xui-select-option",attrs:{href:"",tabindex:"0"}},[t._v("option 3")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group__addon"},[s("small",[t._v("addon")])]),s("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),s("a",{staticClass:"btn"},[t._v("submit")])]),s("div",{staticClass:"y-space-3"}),s("div",{staticClass:"input-group"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),s("div",{staticClass:"input-group__addon"},[s("a",{staticClass:"btn btn_clear"},[t._v("submit")])])])])}],n=s("2c22"),l={name:"Form",components:{ParamsTable:n["a"]},data:function(){return{activeTab:1,defaultMarkup:'<div class="input-group">\n  <div class="input-group__addon">\n    <small>addon</small>\n  </div>\n  <input type="text" placeholder="input..." class="input" />\n</div>\n\n<div class="input-group">\n  <input type="text" placeholder="input..." class="input" />\n  <div class="input-group__addon">\n    <small>addon</small>\n  </div>\n</div>\n\n<div class="input-group">\n  <div class="input-group__addon is-round-left">\n    <small>addon</small>\n  </div>\n  <input type="text" placeholder="input..." class="input input_round" />\n</div>',advancedMarkup:'<div class="input-group">\n  <div class="input-group__addon">\n    <small>addon</small>\n  </div>\n  <input type="text" placeholder="input..." class="input" />\n  <div class="x-space-1"></div>\n  <input type="text" placeholder="input..." class="input" />\n</div>',withGridMarkup:'<div class="input-group">\n  <div class="input-group__addon" data-col="4">\n    <small>addon</small>\n  </div>\n  <input type="text" placeholder="input..." class="input" />\n</div>',mixedMarkup:'<div class="input-group">\n  <input type="text" placeholder="input..." class="input" />\n  <div class="input-group__addon" data-col="4">\n    <select class="input input_clear">\n      <option value="" selected>select option</option>\n      <option value="">option</option>\n      <option value="">option</option>\n    </select>\n  </div>\n</div>\n\n<div class="input-group">\n  <input type="text" placeholder="input..." class="input" />\n  <div class="x-space-1" style="width:2px;"></div>\n  <div class="input-group__addon">\n    <div class="xui-checkbox">\n      <input type="checkbox" id="checkbox-3">\n      <label for="checkbox-3" class="xui-checkbox__label">checkbox</label>\n    </div>\n  </div>\n</div>\n\n<div class="input-group">\n  <input type="text" placeholder="input..." class="input" />\n  <div tabindex="0" class="xui-select">\n    <span class="xui-select__placeholder">select</span>\n    <span class="xui-select__caret"></span>\n    <ul class="xui-select-options">\n      <li>\n        <a href="" tabindex="0" class="xui-select-option">option 1</a>\n      </li>\n      <li>\n        <a href="" tabindex="0" class="xui-select-option">option 2</a>\n      </li>\n      <li>\n        <a href="" tabindex="0" class="xui-select-option">option 3</a>\n      </li>\n    </ul>\n  </div>\n</div>',buttonMarkup:'<div class="input-group">\n  <div class="input-group__addon">\n    <small>addon</small>\n  </div>\n  <input type="text" placeholder="input..." class="input" />\n  <a class="btn">submit</a>\n</div>\n\n<div class="input-group">\n  <input type="text" placeholder="input..." class="input" />\n  <div class="input-group__addon">\n    <a class="btn btn_clear">submit</a>\n  </div>\n</div>',ixoMarkup:'<div class="input-group">\n  <input type="text" placeholder="input..." class="input" />\n  <div class="input-group__addon">\n    <svg class="ixo"><use xlink:href="#fire"></use></svg>\n  </div>\n</div>',inputParams:[{name:"$input-group-spacing",type:"array",default:"$input-spacing // 0"},{name:"$input-group-addon-color",type:"color",default:"$text-light"},{name:"$input-group-addon-background",type:"color",default:"$input-background"},{name:"$input-group-addon-border-color",type:"color",default:"$input-border-color"},{name:"$input-group-addon-border-width",type:"number",default:"$input-border-width // 0"},{name:"$input-group-addon-border-style",type:"map",default:"$input-border-style"},{name:"$input-group-addon-padding",type:"array",default:"0 8"},{name:"$input-group-addon-style",type:"map",default:""}]}}},c=l,p=s("2877"),d=Object(p["a"])(c,i,e,!1,null,"bf19cae8",null);a["default"]=d.exports}}]);