(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2365ef91"],{"2c22":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.params?a("div",{staticClass:"params-table"},[a("h4",{staticClass:"is-h4",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.params,function(e,n){return a("tr",{key:n,attrs:{"data-grid":"small-gutter"}},[a("td",{attrs:{valign:"top","data-col":"5"}},[a("code",{staticClass:"is-bold",domProps:{textContent:t._s(e.name)}}),e.description?a("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(e.description)}}):t._e()]),e.type?a("td",{attrs:{valign:"top","data-col":"2"}},[a("span",{staticClass:"tag",domProps:{textContent:t._s(e.type)}})]):t._e(),a("td",{attrs:{valign:"top","data-col":"5"}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.default||"...",expression:"param.default || '...'"}]},[a("code",{staticClass:"scss"})])])])}),0)])]):t._e()},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{attrs:{"data-grid":"small-gutter"}},[a("th",{attrs:{"data-col":"5"}},[t._v("Name")]),a("th",{attrs:{"data-col":"2"}},[t._v("Type")]),a("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],i={props:["params","title"]},s=i,l=(a("744b"),a("2877")),o=Object(l["a"])(s,n,r,!1,null,"834bd208",null);e["a"]=o.exports},"4be9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t._m(0),a("div",{staticClass:"has-margin-bottom-5"},[a("div",{attrs:{"data-grid":""}},[a("div",{attrs:{"data-col":"10@md 8@lg"}},[a("div",{staticClass:"demo-preview has-padding-8 has-min-height-vh-half",attrs:{"data-flex":"column center"}},[a("div",{staticClass:"align-center has-padding-bottom-5"},[a("input",{staticClass:"btn demo-transition",class:[t.btnStyle,t.btnSize,{btn_round:t.btnRound},{btn_outlined:t.btnOutlined},t.btnWide],attrs:{type:"button",value:"button"}})]),a("div",{staticClass:"align-center has-padding-bottom-5"},[a("button",{staticClass:"btn demo-transition",class:[t.btnStyle,t.btnSize,{btn_round:t.btnRound},{btn_outlined:t.btnOutlined},t.btnWide]},[a("svg",{staticClass:"ixo"},[a("use",{attrs:{"xlink:href":"#fire"}})]),t._v(" Button\n            ")])]),a("div",{staticClass:"align-center has-padding-bottom-5"},[a("a",{staticClass:"btn demo-transition",class:[t.btnStyle,t.btnSize,{btn_round:t.btnRound},{btn_outlined:t.btnOutlined},t.btnWide],attrs:{href:""}},[a("svg",{staticClass:"ixo"},[a("use",{attrs:{"xlink:href":"#fire"}})])])])])]),a("div",{attrs:{"data-col":"2@md 4@lg","data-flex":"column center"}},[a("div",{staticClass:"field-group"},[a("div",{staticClass:"input-group"},[a("label",{staticClass:"input-group__addon",attrs:{for:"btnStyle"}},[a("svg",{staticClass:"ixo is-ink-link"},[a("use",{attrs:{"xlink:href":"#color-palette"}})])]),a("div",{staticClass:"input-group__addon"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.btnStyle,expression:"btnStyle"}],staticClass:"input",attrs:{id:"btnStyle"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.btnStyle=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("default")]),a("option",{attrs:{value:"btn_minor"}},[t._v("minor")]),a("option",{attrs:{value:"btn_super"}},[t._v("super")]),a("option",{attrs:{value:"btn_invert"}},[t._v("inverted")]),a("option",{attrs:{value:"btn_clear"}},[t._v("clear")])])])])]),a("div",{staticClass:"field-group"},[a("div",{staticClass:"input-group"},[a("label",{staticClass:"input-group__addon",attrs:{for:"btnSize"}},[a("svg",{staticClass:"ixo is-ink-link"},[a("use",{attrs:{"xlink:href":"#move-vertical"}})])]),a("div",{staticClass:"input-group__addon"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.btnSize,expression:"btnSize"}],staticClass:"input",attrs:{id:"btnSize"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.btnSize=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("default")]),a("option",{attrs:{value:"btn_small"}},[t._v("small")]),a("option",{attrs:{value:"btn_big"}},[t._v("big")])])])])]),a("div",{staticClass:"field-group"},[a("div",{staticClass:"input-group"},[a("label",{staticClass:"input-group__addon",attrs:{for:"btnWide"}},[a("svg",{staticClass:"ixo is-ink-link"},[a("use",{attrs:{"xlink:href":"#move-horizontal"}})])]),a("div",{staticClass:"input-group__addon"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.btnWide,expression:"btnWide"}],staticClass:"input",attrs:{id:"btnWide"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.btnWide=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("default")]),a("option",{attrs:{value:"btn_wide"}},[t._v("wide")]),a("option",{attrs:{value:"btn_block"}},[t._v("block")])])])])]),a("div",{staticClass:"field-group"},[a("div",{staticClass:"xui-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.btnRound,expression:"btnRound"}],attrs:{type:"checkbox",id:"btnRound"},domProps:{checked:Array.isArray(t.btnRound)?t._i(t.btnRound,null)>-1:t.btnRound},on:{change:function(e){var a=t.btnRound,n=e.target,r=!!n.checked;if(Array.isArray(a)){var i=null,s=t._i(a,i);n.checked?s<0&&(t.btnRound=a.concat([i])):s>-1&&(t.btnRound=a.slice(0,s).concat(a.slice(s+1)))}else t.btnRound=r}}}),a("label",{staticClass:"xui-checkbox__label",attrs:{for:"btnRound"}},[t._v("round")])])]),a("div",{staticClass:"field-group"},[a("div",{staticClass:"xui-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.btnOutlined,expression:"btnOutlined"}],attrs:{type:"checkbox",id:"btnOutlined"},domProps:{checked:Array.isArray(t.btnOutlined)?t._i(t.btnOutlined,null)>-1:t.btnOutlined},on:{change:function(e){var a=t.btnOutlined,n=e.target,r=!!n.checked;if(Array.isArray(a)){var i=null,s=t._i(a,i);n.checked?s<0&&(t.btnOutlined=a.concat([i])):s>-1&&(t.btnOutlined=a.slice(0,s).concat(a.slice(s+1)))}else t.btnOutlined=r}}}),a("label",{staticClass:"xui-checkbox__label",attrs:{for:"btnOutlined"}},[t._v("outlined")])])])])])]),a("div",{attrs:{"data-grid":""}},[a("div",{attrs:{"data-col":"10@md 8@lg"}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[a("code",{staticClass:"html"})]),a("div",{staticClass:"y-space-8"}),a("params-table",{attrs:{params:t.coreParams,title:"default params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.smallParams,title:"small params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.bigParams,title:"big params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.wideParams,title:"wide params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.stateParams,title:"state params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.defaultStyleParams,title:"default style params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.minorStyleParams,title:"minor style params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.superStyleParams,title:"super style params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.invertStyleParams,title:"invert style params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.clearStyleParams,title:"invert style params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.defaultOutlinedParams,title:"default outline params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.defaultOutlinedStyleParams,title:"default outline style params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.minorOutlinedStyleParams,title:"minor outline style params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.superOutlinedStyleParams,title:"super outline style params"}}),a("div",{staticClass:"divider"}),a("params-table",{attrs:{params:t.invertOutlinedStyleParams,title:"invert outline style params"}}),a("div",{staticClass:"divider"}),a("requires-list",{attrs:{requires:t.requires}})],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"has-padding-center-3"},[a("h2",[t._v("button")])])}],i=a("2c22"),s=a("da36"),l={name:"Button",components:{ParamsTable:i["a"],RequiresList:s["a"]},data:function(){return{btnStyle:"",btnSize:"",btnWide:"",btnRound:!1,btnOutlined:!1,markup:'<input type="button" class="btn" value="...">\n<button class="btn">...</button>\n<a href class="btn">...</a>',coreParams:[{name:"$btn-font-family",type:"string",description:"font-face used by buttons",default:"$body-font-family"},{name:"$btn-weight",type:"string",default:"$is-bold"},{name:"$btn-font-size",type:"number",default:"$base-font-size"},{name:"$btn-line-height",type:"number",default:"$btn-font-size * $base-line-height // (16 * 1.4)"},{name:"$btn-icon-size",type:"number",description:"size of inline-icons",default:"$base-icon-size"},{name:"$btn-min-height",type:"number",default:"40"},{name:"$btn-padding-ratio",type:"number",description:"ratio by which padding-left and padding-right are bigger",default:"1.5"},{name:"$btn-spacing",type:"number",description:"margin around a button",default:"0"},{name:"$btn-round",type:"boolean",description:"for default rounded buttons",default:"false"},{name:"$btn-radius",type:"number",default:"4"},{name:"$btn-small-radius",type:"number",default:"$btn-radius"},{name:"$btn-big-radius",type:"number",default:"$btn-radius"},{name:"$btn-transition",type:"string",default:"background-color .2s, box-shadow .1s"}],smallParams:[{name:"$btn-small-weight",type:"string",default:"$btn-weight"},{name:"$btn-small-font-size",type:"number",default:"$btn-font-size * 0.875"},{name:"$btn-small-line-height",type:"number",default:"$btn-small-font-size * $base-line-height // (16 * .75) * 1.4)"},{name:"$btn-small-icon-size",type:"number",description:"size of inline-icons",default:"$btn-icon-size"},{name:"$btn-small-min-height",type:"number",default:"32"},{name:"$btn-small-style",type:"map"}],bigParams:[{name:"$btn-big-weight",type:"string",default:"$btn-weight"},{name:"$btn-big-font-size",type:"number",default:"$btn-font-size * 1.125"},{name:"$btn-big-line-height",type:"number",default:"$btn-big-font-size * $base-line-height // (16 * 1.125) * 1.4)"},{name:"$btn-big-icon-size",type:"number",description:"size of inline-icons",default:"$btn-icon-size"},{name:"$btn-big-min-height",type:"number",default:"48"},{name:"$btn-small-style",type:"map"}],wideParams:[{name:"$btn-wide",type:"number",description:"min width for .btn_wide button",default:"240"},{name:"$btn-small-wide",type:"number",description:"min width for .btn_wide.btn_small button",default:"160"},{name:"$btn-big-wide",description:"min width for .btn_wide.btn_big button",type:"number",default:"160"}],stateParams:[{name:"$btn-disabled-style",type:"map",default:"(\n  box-shadow: none,\n  opacity: 0.6,\n)"},{name:"$btn-active-style",type:"map",default:"(\n  transform: translateY(2px),\n)"}],defaultStyleParams:[{name:"$btn-background",type:"color",description:"default background-color",default:"$link"},{name:"$btn-color",type:"color",description:"default color",default:"$link-contrast"},{name:"$btn-style",type:"map"},{name:"$btn-hover-background",type:"color",default:"set-hover($btn-background) "},{name:"$btn-hover-color",type:"color",default:"$btn-color"},{name:"$btn-hover-style",type:"map"}],minorStyleParams:[{name:"$btn-minor-background",type:"color",default:"$minor"},{name:"$btn-minor-color",type:"color",default:"$minor-contrast"},{name:"$btn-minor-style",type:"map"},{name:"$btn-minor-hover-background",type:"color",default:"$btn-minor-background"},{name:"$btn-minor-hover-color",type:"color",default:"$btn-minor-color"},{name:"$btn-minor-hover-style",type:"map"}],superStyleParams:[{name:"$btn-super-background",type:"color",default:"$super"},{name:"$btn-super-color",type:"color",default:"$super-contrast"},{name:"$btn-super-style",type:"map"},{name:"$btn-super-hover-background",type:"color",default:"set-hover($btn-super-background)"},{name:"$btn-super-hover-color",type:"color",default:"$btn-super-color"},{name:"$btn-super-hover-style",type:"map"}],invertStyleParams:[{name:"$btn-invert-background",type:"color",default:"$background"},{name:"$btn-invert-color",type:"color",default:"$link"},{name:"$btn-invert-style",type:"map"},{name:"$btn-invert-hover-background",type:"color",default:"set-hover($btn-invert-background)"},{name:"$btn-invert-hover-color",type:"color",default:"$btn-invert-color"},{name:"$btn-invert-hover-style",type:"map"}],clearStyleParams:[{name:"$btn-clear-background",type:"color",default:"transparent"},{name:"$btn-clear-color",type:"color",default:"$link"},{name:"$btn-clear-style",type:"map"},{name:"$btn-clear-hover-background",type:"color",default:"$btn-clear-background"},{name:"$btn-clear-hover-color",type:"color",default:"set-hover($btn-clear-color)"},{name:"$btn-clear-hover-style",type:"map"}],defaultOutlinedParams:[{name:"$btn-outlined-border-width",type:"number",default:"1"},{name:"$btn-outlined-border-style",type:"string",default:"solid"}],defaultOutlinedStyleParams:[{name:"$btn-outlined-border-color",type:"color",default:"$link"},{name:"$btn-outlined-color",type:"color",default:"$link"},{name:"$btn-outlined-style",type:"map"},{name:"$btn-outlined-hover-border-color",type:"color",default:"set-hover($btn-outlined-border-color)"},{name:"$btn-outlined-hover-color",type:"color",default:"set-hover($btn-outlined-color)"},{name:"$btn-outlined-hover-style",type:"map"}],minorOutlinedStyleParams:[{name:"$btn-outlined-minor-border-color",type:"color",default:"$minor"},{name:"$btn-outlined-minor-color",type:"color",default:"$minor"},{name:"$btn-outlined-minor-style",type:"map"},{name:"$btn-outlined-minor-hover-border-color",type:"color",default:"set-hover($btn-outlined-minor-border-color)"},{name:"$btn-outlined-minor-hover-color",type:"color",default:"set-hover($btn-outlined-minor-color)"},{name:"$btn-outlined-minor-hover-style",type:"map"}],superOutlinedStyleParams:[{name:"$btn-outlined-super-border-color",type:"color",default:"$super"},{name:"$btn-outlined-super-color",type:"color",default:"$super"},{name:"$btn-outlined-super-style",type:"map"},{name:"$btn-outlined-super-hover-border-color",type:"color",default:"set-hover($btn-outlined-super-border-color)"},{name:"$btn-outlined-super-hover-color",type:"color",default:"set-hover($btn-outlined-super-color)"},{name:"$btn-outlined-super-hover-style",type:"map"}],invertOutlinedStyleParams:[{name:"$btn-outlined-invert-border-color",type:"color",default:"$text-invert"},{name:"$btn-outlined-invert-color",type:"color",default:"$text-invert"},{name:"$btn-outlined-invert-style",type:"map"},{name:"$btn-outlined-invert-hover-border-color",type:"color",default:"set-hover($btn-outlined-invert-border-color)"},{name:"$btn-outlined-invert-hover-color",type:"color",default:"set-hover($btn-outlined-invert-color)"},{name:"$btn-outlined-invert-hover-style",type:"map"}],requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"},{name:"metrics()",type:"mixin",link:"#scroll-to-metrics"},{name:"rem()",type:"function",link:"#scroll-to-rem"}]}},computed:{btnClasses:function(){return[this.btnStyle?this.btnStyle+" ":null,this.btnSize?this.btnSize+" ":null,this.btnWide?"btn_wide ":null,this.btnRound?"btn_round ":null,this.btnOutlined?"btn_outlined":null].join("")}},watch:{btnClasses:function(t){this.markup='<input type="button" class="btn '.concat(this.btnClasses,'" value="...">\n<button class="btn ').concat(this.btnClasses,'">...</button>\n<a href class="btn ').concat(this.btnClasses,'">...</a>')}}},o=l,d=a("2877"),u=Object(d["a"])(o,n,r,!1,null,"1d3699ae",null);e["default"]=u.exports},"744b":function(t,e,a){"use strict";var n=a("7a1d"),r=a.n(n);r.a},"7a1d":function(t,e,a){},"7b87":function(t,e,a){"use strict";var n=a("a2b7"),r=a.n(n);r.a},a2b7:function(t,e,a){},da36:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.requires?a("div",{staticClass:"requires-list"},[a("h4",{staticClass:"is-h2"},[t._v("requires")]),a("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(e,n){return a("li",{key:n,attrs:{"data-col":"fit"}},[e.link?a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{href:e.link},domProps:{textContent:t._s(e.name)}}):a("span",{staticClass:"code",domProps:{textContent:t._s(e.name)}})])}),0)]):t._e()},r=[],i={props:["requires"]},s=i,l=(a("7b87"),a("2877")),o=Object(l["a"])(s,n,r,!1,null,"787126dd",null);e["a"]=o.exports}}]);