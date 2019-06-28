(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25c2f902"],{be5a:function(i,t,e){},c109:function(i,t,e){"use strict";e.r(t);var s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("section",{staticClass:"has-padding-8"},[e("form-field-group")],1)},l=[],n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("blocks-group",{attrs:{groups:i.sectionGroups,"section-title":"field-group"}})},a=[],o=e("e31a"),r={components:{BlocksGroup:o["a"]},data:function(){return{sectionGroups:[{id:"field-group",type:"molecules",navTitle:"field-group",groupItems:[{title:"default usage",preview:'<div class="field-group">\n  <label for="" class="field-group__label">field-group label</label>\n  <input type="text" placeholder="input..." class="input">\n  <p class="field-group__info">field-group info</p>\n</div>\n<div class="field-group">\n  <input type="checkbox" id="3gjh3">\n  <label for="3gjh3">field-group label</label>\n</div>',markup:"",config:"$field-group-spacing: 0 0 16;\n$field-group-padding: 0;\n$field-group-background: none;\n$field-group-style: ();\n\n$field-group-label-spacing: 4;\n$field-group-label-font-size: $base-font-size;\n$field-group-label-style: ();\n\n$field-group-info-spacing: 8;\n$field-group-info-font-size: $base-font-size * 0.75;\n$field-group-info-style: ();"},{title:"with grid",preview:'<div data-grid>\n  <div data-col="6">\n    <div class="field-group">\n      <label for="" class="field-group__label">label</label>\n      <input type="text" placeholder="input..." class="input" />\n      <p class="field-group__info">field-group info</p>\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="field-group">\n      <label for="" class="field-group__label">label</label>\n      <input type="text" placeholder="input..." class="input" />\n      <p class="field-group__info">field-group info</p>\n    </div>\n  </div>\n  <div class="spacer"></div>\n  <div data-col="12">\n    <div class="field-group" data-flex>\n      <label for="" class="field-group__label" data-col="3">label</label>\n      <div data-col="9">\n        <input type="text" placeholder="input..." class="input" />\n        <p class="field-group__info">field-group info</p>\n      </div>\n    </div>\n  </div>\n</div>',markup:""},{title:"with fieldset",preview:'<fieldset class="fieldset">\n  <div data-grid="small-gutter">\n    <div data-col="8">\n      <div class="field-group">\n        <input type="text" placeholder="input..." class="input" />\n      </div>\n    </div>\n    <div data-col="4" data-flex="center-items">\n      <div class="field-group">\n        <div class="xui-checkbox">\n          <input type="checkbox" id="checkbox-4">\n          <label for="checkbox-4" class="xui-checkbox__label">checkbox</label>\n        </div>\n      </div>\n    </div>\n    <div data-col="4">\n      <div class="field-group">\n        <input type="text" placeholder="input..." class="input" />\n      </div>\n    </div>\n    <div data-col="8">\n      <div class="field-group">\n        <input type="text" placeholder="input..." class="input" />\n      </div>\n    </div>\n  </div>\n</fieldset>',markup:"",config:"$fieldset-background: transparent;\n$fieldset-padding: 0;\n$fieldset-spacing: 0 0 16;\n$fieldset-border: 0;\n$fieldset-style: ();"}]}]}}},p=r,c=e("2877"),d=Object(c["a"])(p,n,a,!1,null,"778faba6",null),u=d.exports,f={components:{FormFieldGroup:u}},v=f,g=Object(c["a"])(v,s,l,!1,null,null,null);t["default"]=g.exports},de10:function(i,t,e){"use strict";var s=e("be5a"),l=e.n(s);l.a},e31a:function(i,t,e){"use strict";var s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("section",{staticClass:"demo-blocks-group"},[e("div",{attrs:{"data-grid":""}},[e("div",{attrs:{"data-col":"8"}},[e("blocks",{attrs:{group:i.filterGroup(void 0)}}),e("blocks",{attrs:{group:i.filterGroup("atoms")}}),e("blocks",{attrs:{group:i.filterGroup("molecules")}}),e("blocks",{attrs:{group:i.filterGroup("modifier")}})],1),e("div",{attrs:{"data-col":"4"}},[e("ul",{staticClass:"nav nav_stacked is-sticky",staticStyle:{top:"120px"}},[i.sectionTitle?e("li",{staticClass:"nav__item"},[e("h2",{domProps:{textContent:i._s(i.sectionTitle)}})]):i._e(),i._l(i.filterGroup(void 0),function(t,s){return e("li",{key:s,staticClass:"nav__item"},[e("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+t.id}},[i._v(i._s(t.navTitle))])])}),i.filterGroup("atoms").length?e("li",{staticClass:"is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3"},[e("small",[i._v("atoms")])]):i._e(),i._l(i.filterGroup("atoms"),function(t,s){return e("li",{key:"atoms"+s,staticClass:"nav__item"},[e("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+t.id}},[i._v(i._s(t.navTitle))])])}),i.filterGroup("molecules").length?e("li",{staticClass:"is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3"},[e("small",[i._v("molecules")])]):i._e(),i._l(i.filterGroup("molecules"),function(t,s){return e("li",{key:"molecules"+s,staticClass:"nav__item"},[e("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+t.id}},[i._v(i._s(t.navTitle))])])}),i.filterGroup("organisms").length?e("li",{staticClass:"is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3"},[e("small",[i._v("organisms")])]):i._e(),i._l(i.filterGroup("organisms"),function(t,s){return e("li",{key:"organisms"+s,staticClass:"nav__item"},[e("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+t.id}},[i._v(i._s(t.navTitle))])])}),i.filterGroup("modifier").length?e("li",{staticClass:"is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3"},[e("small",[i._v("Modifier")])]):i._e(),i._l(i.filterGroup("modifier"),function(t,s){return e("li",{key:"modifier"+s,staticClass:"nav__item"},[e("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+t.id}},[i._v(i._s(t.navTitle))])])})],2)])])])},l=[],n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return i.group&&i.group.length?e("div",{staticClass:"has-margin-bottom-8"},i._l(i.group,function(t,s){return e("div",{key:s,attrs:{id:"#scroll-to-"+t.id}},[t.title?e("h2",{domProps:{textContent:i._s(t.title)}}):i._e(),t.summary?e("div",{domProps:{innerHTML:i._s(t.summary)}}):i._e(),i._l(t.groupItems,function(t,s){return e("DocTab",{key:s,attrs:{"markup-col":t.markupCol,"preview-col":t.previewCol}},[e("div",{attrs:{slot:"title"},slot:"title"},[t.title?e("h3",{staticClass:"is-h4",domProps:{textContent:i._s(t.title)}}):i._e(),t.summary?e("div",{domProps:{innerHTML:i._s(t.summary)}}):i._e()]),e("div",{class:t.previewStyle,attrs:{slot:"preview"},domProps:{innerHTML:i._s(t.preview)},slot:"preview"}),e("div",{attrs:{slot:"markup"},slot:"markup"},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup||t.preview,expression:"item.markup || item.preview"}]},[e("code",{staticClass:"html"})])]),t.config?e("div",{attrs:{slot:"config"},slot:"config"},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.config,expression:"item.config"}]},[e("code",{staticClass:"scss"})])]):i._e()])})],2)}),0):i._e()},a=[],o=e("e33d"),r={name:"Blocks",components:{DocTab:o["a"]},props:["group"]},p=r,c=e("2877"),d=Object(c["a"])(p,n,a,!1,null,"2eb91fc5",null),u=d.exports,f={name:"BlocksGroup",components:{Blocks:u},props:["groups","sectionTitle"],methods:{filterGroup:function(i){return this.groups.filter(function(t){return t.type===i})}}},v=f,g=Object(c["a"])(v,s,l,!1,null,null,null);t["a"]=g.exports},e33d:function(i,t,e){"use strict";var s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"has-margin-bottom-7"},[e("div",{attrs:{"data-grid":""}},[e("div",{attrs:{"data-col":i.previewCol?i.previewCol:i.hasMarkup?"6":"12"}},[i._t("title"),i._t("preview")],2),e("div",{attrs:{"data-col":i.markupCol?i.markupCol:"6"}},[e("div",{staticClass:"is-relative"},[i.hasConfig?e("div",{staticClass:"btn btn_round btn_small toggle-btn",on:{click:function(t){i.showConfig=!i.showConfig}}},[i.showConfig?i._e():e("span",[i._v("config")]),i.showConfig?e("span",[i._v("markup")]):i._e()]):i._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:!i.showConfig,expression:"!showConfig"}]},[i._t("markup")],2),e("div",{directives:[{name:"show",rawName:"v-show",value:i.showConfig,expression:"showConfig"}]},[i._t("config")],2)])])])])},l=[],n=e("cdf5"),a={props:["previewCol","markupCol"],name:"Doctab",components:{Ixo:n["a"]},data:function(){return{showConfig:!1}},computed:{hasMarkup:function(){return!!this.$slots.markup},hasConfig:function(){return!!this.$slots.config}}},o=a,r=(e("de10"),e("2877")),p=Object(r["a"])(o,s,l,!1,null,"b4d8b8ba",null);t["a"]=p.exports}}]);
//# sourceMappingURL=chunk-25c2f902.878e7cb6.js.map