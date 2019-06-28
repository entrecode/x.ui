(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46be28be"],{"2c22":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"params-table"},[e("h4",{staticClass:"is-h4",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,function(a,s){return e("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])}),0)])]):t._e()},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],i={props:["params","title"]},l=i,n=(e("744b"),e("2877")),o=Object(n["a"])(l,s,r,!1,null,"834bd208",null);a["a"]=o.exports},"475a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"has-margin-bottom-5"},[e("div",{attrs:{"data-grid":"center"}},[e("div",{attrs:{"data-col":"6"}},[e("div",{staticClass:"demo-preview has-padding-8",attrs:{"data-flex":"column center"}},[e("div",{staticClass:"alert demo-transition",class:t.alertClasses},[t._v("\n            ecosystem families energize correlation, social enterprise citizen-centered.\n          ")])])]),e("div",{attrs:{"data-col":"6","data-flex":"column center"}},[e("div",{staticClass:"field-group"},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"input-group__addon",attrs:{for:"alertSize"}},[e("svg",{staticClass:"ixo is-ink-link"},[e("use",{attrs:{"xlink:href":"#move-vertical"}})])]),e("div",{staticClass:"input-group__addon"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.size,expression:"size"}],staticClass:"input input_round",attrs:{id:"alertSize"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.size=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:""}},[t._v("default")]),e("option",{attrs:{value:"alert_small"}},[t._v("small")]),e("option",{attrs:{value:"alert_big"}},[t._v("big")])])])])]),e("div",{staticClass:"field-group"},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"input-group__addon",attrs:{for:"alerStyle"}},[e("svg",{staticClass:"ixo is-ink-link"},[e("use",{attrs:{"xlink:href":"#color-palette"}})])]),e("div",{staticClass:"input-group__addon"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.style,expression:"style"}],staticClass:"input input_round",attrs:{id:"alerStyle"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.style=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:""}},[t._v("default")]),e("option",{attrs:{value:"alert_info"}},[t._v("info")]),e("option",{attrs:{value:"alert_error"}},[t._v("error")]),e("option",{attrs:{value:"alert_success"}},[t._v("success")]),e("option",{attrs:{value:"alert_warning"}},[t._v("warning")])])])])])])])]),e("div",{attrs:{"data-col":"10@md 8@lg"}},[e("div",{staticClass:"y-space-5"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"y-space-8"}),e("params-table",{attrs:{params:t.params,title:"default params"}}),e("div",{staticClass:"divider"}),e("params-table",{attrs:{params:t.smallParams,title:"small params"}}),e("div",{staticClass:"divider"}),e("params-table",{attrs:{params:t.bigParams,title:"big params"}}),e("div",{staticClass:"divider"}),e("params-table",{attrs:{params:t.stylesParams,title:"style params"}}),e("div",{staticClass:"divider"}),e("requires-list",{attrs:{requires:t.requires}})],1)])},r=[],i=e("2c22"),l=e("da36"),n={components:{ParamsTable:i["a"],RequiresList:l["a"]},data:function(){return{markup:'<div class="alert">\n  ...\n</div>',size:"",style:"",requires:[{name:"set-theme-colors()",type:"mixin",link:"#scroll-to-set-theme-colors"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"},{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"em()",type:"function",link:"#scroll-to-em"}],params:[{name:"$alert-background",type:"color",default:"$background-lightest"},{name:"$alert-weight",type:"string",default:"$is-normal"},{name:"$alert-radius",type:"number",default:"4"},{name:"$alert-font-size",type:"number",default:"$base-font-size; // 16"},{name:"$alert-padding",type:"array",default:"16 24"},{name:"$alert-spacing",type:"array",default:"0 0 16 0"},{name:"$alert-style",type:"map"}],smallParams:[{name:"$alert-small-font-size",type:"number",default:"$alert-font-size * 0.875; // 14.875"},{name:"$alert-small-padding",type:"array",default:"8 12"},{name:"$alert-small-spacing",type:"array",default:"$alert-spacing"},{name:"$alert-small-style",type:"map"}],bigParams:[{name:"$alert-big-font-size",type:"number",default:"$alert-font-size * 1.125; // 18"},{name:"$alert-big-padding",type:"array",default:"24 28"},{name:"$alert-big-spacing",type:"array",default:"$alert-spacing"},{name:"$alert-big-style",type:"map"}],stylesParams:[{name:"$alert-styles",type:"map",default:"(\n  'info': (\n    $state-info,\n    $state-info-contrast,\n  ),\n  'error': (\n    $state-error,\n    $state-error-contrast,\n  ),\n  'success': (\n    $state-success,\n    $state-success-contrast,\n  ),\n  'warning': (\n    $state-warning,\n    $state-warning-contrast,\n  ),\n);"}]}},computed:{alertClasses:function(){return[this.size?this.size+" ":null,this.style?this.style+" ":null].join("")}},watch:{alertClasses:function(t){this.markup='<div class="alert '.concat(this.alertClasses,'">\n  ...\n</div>')}}},o=n,c=e("2877"),d=Object(c["a"])(o,s,r,!1,null,"af6bd1de",null);a["default"]=d.exports},"744b":function(t,a,e){"use strict";var s=e("7a1d"),r=e.n(s);r.a},"7a1d":function(t,a,e){},"7b87":function(t,a,e){"use strict";var s=e("a2b7"),r=e.n(s);r.a},a2b7:function(t,a,e){},da36:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.requires?e("div",{staticClass:"requires-list"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(a,s){return e("li",{key:s,attrs:{"data-col":"fit"}},[a.link?e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{href:a.link},domProps:{textContent:t._s(a.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(a.name)}})])}),0)]):t._e()},r=[],i={props:["requires"]},l=i,n=(e("7b87"),e("2877")),o=Object(n["a"])(l,s,r,!1,null,"787126dd",null);a["a"]=o.exports}}]);