(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33c65d92"],{"2c22":function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.params?e("div",{staticClass:"params-table"},[e("h4",{staticClass:"is-h4",domProps:{textContent:a._s(a.title?a.title:"parameters")}}),e("table",{staticClass:"table"},[a._m(0),e("tbody",a._l(a.params,function(t,i){return e("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:a._s(t.name)}}),t.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:a._s(t.description)}}):a._e()]),t.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:a._s(t.type)}})]):a._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])}),0)])]):a._e()},l=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[a._v("Name")]),e("th",{attrs:{"data-col":"2"}},[a._v("Type")]),e("th",{attrs:{"data-col":"5"}},[a._v("Default Value")])])])}],s={props:["params","title"]},r=s,n=(e("744b"),e("2877")),d=Object(n["a"])(r,i,l,!1,null,"834bd208",null);t["a"]=d.exports},"744b":function(a,t,e){"use strict";var i=e("7a1d"),l=e.n(i);l.a},"7a1d":function(a,t,e){},e60f:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[a._m(0),e("div",{staticClass:"nav"},[e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":1===a.activeTab},on:{click:function(t){a.activeTab=1}}},[a._v("default")])]),e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear demo-tab",class:{"is-active":2===a.activeTab},on:{click:function(t){a.activeTab=2}}},[a._v("with grid")])])]),1===a.activeTab?e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"center"}},[a._m(1)]):a._e(),2===a.activeTab?e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[a._m(2)]):a._e(),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.defaultMarkup,expression:"defaultMarkup"},{name:"show",rawName:"v-show",value:1===a.activeTab,expression:"activeTab === 1"}]},[e("code",{staticClass:"html"})]),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.withGridMarkup,expression:"withGridMarkup"},{name:"show",rawName:"v-show",value:2===a.activeTab,expression:"activeTab === 2"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:a.inputParams}})],1)])},l=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"titlebar"},[e("h1",[a._v("field-group")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[e("div",{staticClass:"field-group"},[e("label",{staticClass:"field-group__label",attrs:{for:""}},[a._v("field-group label")]),e("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),e("p",{staticClass:"field-group__info"},[a._v("field-group info")])]),e("div",{staticClass:"field-group"},[e("input",{attrs:{type:"checkbox",id:"3gjh3"}}),e("label",{attrs:{for:"3gjh3"}},[a._v("field-group label")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"is-theme is-padding-5 is-radius is-elevated-24",attrs:{"data-col":"8@lg 6@xl"}},[e("div",{attrs:{"data-grid":""}},[e("div",{attrs:{"data-col":"6"}},[e("div",{staticClass:"field-group"},[e("label",{staticClass:"field-group__label",attrs:{for:""}},[a._v("label")]),e("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),e("p",{staticClass:"field-group__info"},[a._v("field-group info")])])]),e("div",{attrs:{"data-col":"6"}},[e("div",{staticClass:"field-group"},[e("label",{staticClass:"field-group__label",attrs:{for:""}},[a._v("label")]),e("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),e("p",{staticClass:"field-group__info"},[a._v("field-group info")])])]),e("div",{staticClass:"spacer"}),e("div",{attrs:{"data-col":"12"}},[e("div",{staticClass:"field-group",attrs:{"data-flex":""}},[e("label",{staticClass:"field-group__label",attrs:{for:"","data-col":"3"}},[a._v("label")]),e("div",{attrs:{"data-col":"9"}},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"input..."}}),e("p",{staticClass:"field-group__info"},[a._v("field-group info")])])])])])])}],s=e("2c22"),r={name:"Form",components:{ParamsTable:s["a"]},data:function(){return{activeTab:1,defaultMarkup:'<div class="field-group">\n  <label for="" class="field-group__label">field-group label</label>\n  <input type="text" placeholder="input..." class="input">\n  <p class="field-group__info">field-group info</p>\n</div>\n<div class="field-group">\n  <input type="checkbox" id="3gjh3">\n  <label for="3gjh3">field-group label</label>\n</div>',withGridMarkup:'<div data-grid>\n  <div data-col="6">\n    <div class="field-group">\n      <label for="" class="field-group__label">label</label>\n      <input type="text" placeholder="input..." class="input" />\n      <p class="field-group__info">field-group info</p>\n    </div>\n  </div>\n  \n  <div data-col="6">\n    <div class="field-group">\n      <label for="" class="field-group__label">label</label>\n      <input type="text" placeholder="input..." class="input" />\n      <p class="field-group__info">field-group info</p>\n    </div>\n  </div>\n  \n  <div data-col="12">\n    <div class="field-group" data-flex>\n      <label for="" class="field-group__label" data-col="3">label</label>\n      <div data-col="9">\n        <input type="text" placeholder="input..." class="input" />\n        <p class="field-group__info">field-group info</p>\n      </div>\n    </div>\n  </div>\n</div>',inputParams:[{name:"$field-group-spacing",type:"array",default:"0 0 16"},{name:"$field-group-padding",type:"array",default:"0"},{name:"$field-group-background",type:"color",default:"none"},{name:"$field-group-style",type:"array",default:""},{name:"$field-group-label-spacing",type:"array",default:"4"},{name:"$field-group-label-font-size",type:"number",default:"$base-font-size // 16"},{name:"$field-group-label-style",type:"array",default:""},{name:"$field-group-info-spacing",type:"array",default:"8"},{name:"$field-group-info-font-size",type:"number",default:"$base-font-size * 0.75 // 12"},{name:"$field-group-info-style",type:"array",default:""}]}}},n=r,d=e("2877"),o=Object(d["a"])(n,i,l,!1,null,"9e6e4f00",null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-33c65d92.5f19433c.js.map