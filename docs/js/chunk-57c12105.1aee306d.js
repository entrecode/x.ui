(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57c12105"],{"46f8":function(i,t,s){"use strict";s.r(t);var e=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("blocks-group",{attrs:{groups:i.sectionGroups,"section-title":"xui-list"}})},a=[],l=s("e31a"),n={name:"XuiList",components:{BlocksGroup:l["a"]},data:function(){return{sectionGroups:[{title:"",id:"xui-list",navTitle:"xui-list",groupItems:[{preview:'<div class="xui-list">\n  <div class="xui-list-item">\n    <div class="xui-list-item__start">\n      <div class="avatar avatar_square avatar_big">\n        <img src="avatar.png">\n      </div>\n    </div>\n    <div class="xui-list-item__label">\n      <h2>Itemtitle</h2>\n    </div>\n    <div class="xui-list-item__end">\n      <a class="btn">\n        <svg class="ixo"><use xlink:href="#fire"></use></svg>\n      </a>\n    </div>\n  </div>\n  <div class="xui-list-item">\n    <div class="xui-list-item__start" data-col="3">\n      <div class="tag">tag</div>\n    </div>\n    <div class="xui-list-item__label">\n      <h2>Itemtitle</h2>\n    </div>\n  </div>\n</div>',markup:'<div class="xui-list">\n  <div class="xui-list-item">\n    <div class="xui-list-item__start">...</div>\n    <div class="xui-list-item__label">...</div>\n    <div class="xui-list-item__end">...</div>\n  </div>\n</div>',config:""}]}]}}},o=n,r=s("2877"),c=Object(r["a"])(o,e,a,!1,null,"6a6a06fd",null);t["default"]=c.exports},be5a:function(i,t,s){},de10:function(i,t,s){"use strict";var e=s("be5a"),a=s.n(e);a.a},e31a:function(i,t,s){"use strict";var e=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("section",{staticClass:"demo-blocks-group"},[s("div",{attrs:{"data-grid":""}},[s("div",{attrs:{"data-col":"8"}},[s("blocks",{attrs:{group:i.filterGroup(void 0)}}),s("blocks",{attrs:{group:i.filterGroup("atoms")}}),s("blocks",{attrs:{group:i.filterGroup("molecules")}}),s("blocks",{attrs:{group:i.filterGroup("modifier")}})],1),s("div",{attrs:{"data-col":"4"}},[s("ul",{staticClass:"nav nav_stacked is-sticky",staticStyle:{top:"120px"}},[i.sectionTitle?s("li",{staticClass:"nav__item"},[s("h2",{domProps:{textContent:i._s(i.sectionTitle)}})]):i._e(),i._l(i.filterGroup(void 0),function(t,e){return s("li",{key:e,staticClass:"nav__item"},[s("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+t.id}},[i._v(i._s(t.navTitle))])])}),i.filterGroup("atoms").length?s("li",{staticClass:"is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3"},[s("small",[i._v("atoms")])]):i._e(),i._l(i.filterGroup("atoms"),function(t,e){return s("li",{key:"atoms"+e,staticClass:"nav__item"},[s("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+t.id}},[i._v(i._s(t.navTitle))])])}),i.filterGroup("molecules").length?s("li",{staticClass:"is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3"},[s("small",[i._v("molecules")])]):i._e(),i._l(i.filterGroup("molecules"),function(t,e){return s("li",{key:"molecules"+e,staticClass:"nav__item"},[s("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+t.id}},[i._v(i._s(t.navTitle))])])}),i.filterGroup("organisms").length?s("li",{staticClass:"is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3"},[s("small",[i._v("organisms")])]):i._e(),i._l(i.filterGroup("organisms"),function(t,e){return s("li",{key:"organisms"+e,staticClass:"nav__item"},[s("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+t.id}},[i._v(i._s(t.navTitle))])])}),i.filterGroup("modifier").length?s("li",{staticClass:"is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3"},[s("small",[i._v("Modifier")])]):i._e(),i._l(i.filterGroup("modifier"),function(t,e){return s("li",{key:"modifier"+e,staticClass:"nav__item"},[s("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+t.id}},[i._v(i._s(t.navTitle))])])})],2)])])])},a=[],l=function(){var i=this,t=i.$createElement,s=i._self._c||t;return i.group&&i.group.length?s("div",{staticClass:"has-margin-bottom-8"},i._l(i.group,function(t,e){return s("div",{key:e,attrs:{id:"#scroll-to-"+t.id}},[t.title?s("h2",{domProps:{textContent:i._s(t.title)}}):i._e(),t.summary?s("div",{domProps:{innerHTML:i._s(t.summary)}}):i._e(),i._l(t.groupItems,function(t,e){return s("DocTab",{key:e,attrs:{"markup-col":t.markupCol,"preview-col":t.previewCol}},[s("div",{attrs:{slot:"title"},slot:"title"},[t.title?s("h3",{staticClass:"is-h4",domProps:{textContent:i._s(t.title)}}):i._e(),t.summary?s("div",{domProps:{innerHTML:i._s(t.summary)}}):i._e()]),s("div",{class:t.previewStyle,attrs:{slot:"preview"},domProps:{innerHTML:i._s(t.preview)},slot:"preview"}),s("div",{attrs:{slot:"markup"},slot:"markup"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup||t.preview,expression:"item.markup || item.preview"}]},[s("code",{staticClass:"html"})])]),t.config?s("div",{attrs:{slot:"config"},slot:"config"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.config,expression:"item.config"}]},[s("code",{staticClass:"scss"})])]):i._e()])})],2)}),0):i._e()},n=[],o=s("e33d"),r={name:"Blocks",components:{DocTab:o["a"]},props:["group"]},c=r,u=s("2877"),v=Object(u["a"])(c,l,n,!1,null,"2eb91fc5",null),d=v.exports,p={name:"BlocksGroup",components:{Blocks:d},props:["groups","sectionTitle"],methods:{filterGroup:function(i){return this.groups.filter(function(t){return t.type===i})}}},m=p,_=Object(u["a"])(m,e,a,!1,null,null,null);t["a"]=_.exports},e33d:function(i,t,s){"use strict";var e=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"has-margin-bottom-7"},[s("div",{attrs:{"data-grid":""}},[s("div",{attrs:{"data-col":i.previewCol?i.previewCol:i.hasMarkup?"6":"12"}},[i._t("title"),i._t("preview")],2),s("div",{attrs:{"data-col":i.markupCol?i.markupCol:"6"}},[s("div",{staticClass:"is-relative"},[i.hasConfig?s("div",{staticClass:"btn btn_round btn_small toggle-btn",on:{click:function(t){i.showConfig=!i.showConfig}}},[i.showConfig?i._e():s("span",[i._v("config")]),i.showConfig?s("span",[i._v("markup")]):i._e()]):i._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:!i.showConfig,expression:"!showConfig"}]},[i._t("markup")],2),s("div",{directives:[{name:"show",rawName:"v-show",value:i.showConfig,expression:"showConfig"}]},[i._t("config")],2)])])])])},a=[],l=s("cdf5"),n={props:["previewCol","markupCol"],name:"Doctab",components:{Ixo:l["a"]},data:function(){return{showConfig:!1}},computed:{hasMarkup:function(){return!!this.$slots.markup},hasConfig:function(){return!!this.$slots.config}}},o=n,r=(s("de10"),s("2877")),c=Object(r["a"])(o,e,a,!1,null,"b4d8b8ba",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-57c12105.1aee306d.js.map