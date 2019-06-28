(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-127b22b8"],{"7fa2":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("div",{class:{"demo-fullscreen":t.openDemo},attrs:{"data-flex":"is-center center"}},[i("div",{staticClass:"btn is-absolute is-fab-ne",on:{click:function(e){t.openDemo=!t.openDemo}}},[i("svg",{staticClass:"ixo"},[i("use",{attrs:{"xlink:href":"#fullscreen"}})])]),i("div",{staticClass:"demo-bg",class:t.isHeightType+t.isHeightRelation+t.isHeightRatio,staticStyle:{transition:"height .2s"},attrs:{"data-flex":"center center-items"}},[i("div",{staticClass:"has-padding-8 is-theme has-margin-8"},[i("h1",{domProps:{textContent:t._s(t.isHeightType)}}),i("div",{attrs:{"data-grid":""}},[i("div",{attrs:{"data-col":"6"}},[i("div",{staticClass:"field-group"},[i("div",{staticClass:"xui-radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.isHeightType,expression:"isHeightType"}],attrs:{type:"radio",name:"isHeightType",id:"isHeight",value:"is-height"},domProps:{checked:t._q(t.isHeightType,"is-height")},on:{change:function(e){t.isHeightType="is-height"}}}),i("label",{staticClass:"xui-radio__label",attrs:{for:"isHeight"}},[t._v("is-height")])])])]),i("div",{attrs:{"data-col":"6"}},[i("div",{staticClass:"field-group"},[i("div",{staticClass:"xui-radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.isHeightType,expression:"isHeightType"}],attrs:{type:"radio",name:"isHeightType",id:"hasMinHeight",value:"has-min-height"},domProps:{checked:t._q(t.isHeightType,"has-min-height")},on:{change:function(e){t.isHeightType="has-min-height"}}}),i("label",{staticClass:"xui-radio__label",attrs:{for:"hasMinHeight"}},[t._v("has-min-height")])])])])]),i("div",{staticClass:"field-group"},[i("label",{staticClass:"field-group__label",attrs:{for:"isHeightRelation"}},[t._v("relation")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.isHeightRelation,expression:"isHeightRelation"}],staticClass:"input",attrs:{id:"isHeightRelation"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.isHeightRelation=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:""}},[t._v("relative")]),i("option",{attrs:{value:"-vw"}},[t._v("viewport width")]),i("option",{attrs:{value:"-vh"}},[t._v("viewport height")])])]),i("div",{staticClass:"field-group"},[i("label",{staticClass:"field-group__label",attrs:{for:"isHeightRatio"}},[t._v("ratio")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.isHeightRatio,expression:"isHeightRatio"}],staticClass:"input",attrs:{id:"isHeightRatio"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.isHeightRatio=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"-full"}},[t._v("full")]),i("option",{attrs:{value:"-1-4"}},[t._v("1:4")]),i("option",{attrs:{value:"-half"}},[t._v("half")]),i("option",{attrs:{value:"-3-4"}},[t._v("3:4")]),i("option",{attrs:{value:"-golden"}},[t._v("golden")]),i("option",{attrs:{value:"-16-9"}},[t._v("16:9")])])]),i("doc-tab",{attrs:{"markup-col":12,"preview-col":12}},[i("div",{attrs:{slot:"markup"},slot:"markup"},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[i("code",{staticClass:"html"})])]),i("div",{attrs:{slot:"config"},slot:"config"},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.config,expression:"config"}]},[i("code",{staticClass:"scss"})])])])],1)])])])},s=[],o=i("e33d"),n={components:{DocTab:o["a"]},data:function(){return{openDemo:!1,isHeightType:"is-height",isHeightRatio:"-full",isHeightRelation:"",previewClass:"",markup:"...",config:"$is-height-map: (\n  full: 100,\n  '1-4': 25,\n  half: 50,\n  '3-4': 75,\n  '16-9': 56.25,\n  golden: 61.803,\n);"}}},l=n,r=i("2877"),h=Object(r["a"])(l,a,s,!1,null,"51537d40",null);e["default"]=h.exports},be5a:function(t,e,i){},de10:function(t,e,i){"use strict";var a=i("be5a"),s=i.n(a);s.a},e33d:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"has-margin-bottom-7"},[i("div",{attrs:{"data-grid":""}},[i("div",{attrs:{"data-col":t.previewCol?t.previewCol:t.hasMarkup?"6":"12"}},[t._t("title"),t._t("preview")],2),i("div",{attrs:{"data-col":t.markupCol?t.markupCol:"6"}},[i("div",{staticClass:"is-relative"},[t.hasConfig?i("div",{staticClass:"btn btn_round btn_small toggle-btn",on:{click:function(e){t.showConfig=!t.showConfig}}},[t.showConfig?t._e():i("span",[t._v("config")]),t.showConfig?i("span",[t._v("markup")]):t._e()]):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showConfig,expression:"!showConfig"}]},[t._t("markup")],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showConfig,expression:"showConfig"}]},[t._t("config")],2)])])])])},s=[],o=i("cdf5"),n={props:["previewCol","markupCol"],name:"Doctab",components:{Ixo:o["a"]},data:function(){return{showConfig:!1}},computed:{hasMarkup:function(){return!!this.$slots.markup},hasConfig:function(){return!!this.$slots.config}}},l=n,r=(i("de10"),i("2877")),h=Object(r["a"])(l,a,s,!1,null,"b4d8b8ba",null);e["a"]=h.exports}}]);
//# sourceMappingURL=chunk-127b22b8.79d89c3e.js.map