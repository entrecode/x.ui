(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b2f7336"],{"71d0":function(i,s,t){"use strict";var n=t("a97c"),e=t.n(n);e.a},a97c:function(i,s,t){},e31a:function(i,s,t){"use strict";var n=function(){var i=this,s=i.$createElement,t=i._self._c||s;return t("section",{staticClass:"demo-blocks-group"},[t("div",{attrs:{"data-grid":""}},[t("div",{attrs:{"data-col":"8"}},[t("blocks",{attrs:{group:i.filterGroup(void 0)}}),t("blocks",{attrs:{group:i.filterGroup("atoms")}}),t("blocks",{attrs:{group:i.filterGroup("molecules")}}),t("blocks",{attrs:{group:i.filterGroup("modifier")}})],1),t("div",{attrs:{"data-col":"4"}},[t("ul",{staticClass:"nav nav_stacked is-sticky",staticStyle:{top:"120px"}},[i.sectionTitle?t("li",{staticClass:"nav__item"},[t("h2",{domProps:{textContent:i._s(i.sectionTitle)}})]):i._e(),i._l(i.filterGroup(void 0),function(s,n){return t("li",{key:n,staticClass:"nav__item"},[t("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+s.id}},[i._v(i._s(s.navTitle))])])}),i.filterGroup("atoms").length?t("li",{staticClass:"is-uppercase is-padding-2 is-headings-font is-ink-light is-margin-top-3"},[t("small",[i._v("atoms")])]):i._e(),i._l(i.filterGroup("atoms"),function(s,n){return t("li",{key:"atoms"+n,staticClass:"nav__item"},[t("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+s.id}},[i._v(i._s(s.navTitle))])])}),i.filterGroup("molecules").length?t("li",{staticClass:"is-uppercase is-padding-2 is-headings-font is-ink-light is-margin-top-3"},[t("small",[i._v("molecules")])]):i._e(),i._l(i.filterGroup("molecules"),function(s,n){return t("li",{key:"molecules"+n,staticClass:"nav__item"},[t("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+s.id}},[i._v(i._s(s.navTitle))])])}),i.filterGroup("organisms").length?t("li",{staticClass:"is-uppercase is-padding-2 is-headings-font is-ink-light is-margin-top-3"},[t("small",[i._v("organisms")])]):i._e(),i._l(i.filterGroup("organisms"),function(s,n){return t("li",{key:"organisms"+n,staticClass:"nav__item"},[t("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+s.id}},[i._v(i._s(s.navTitle))])])}),i.filterGroup("modifier").length?t("li",{staticClass:"is-uppercase is-padding-2 is-headings-font is-ink-light is-margin-top-3"},[t("small",[i._v("Modifier")])]):i._e(),i._l(i.filterGroup("modifier"),function(s,n){return t("li",{key:"modifier"+n,staticClass:"nav__item"},[t("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+s.id}},[i._v(i._s(s.navTitle))])])})],2)])])])},e=[],l=function(){var i=this,s=i.$createElement,t=i._self._c||s;return i.group&&i.group.length?t("div",{staticClass:"is-margin-bottom-8"},i._l(i.group,function(s,n){return t("div",{key:n,attrs:{id:"#scroll-to-"+s.id}},[s.title?t("h2",{domProps:{textContent:i._s(s.title)}}):i._e(),s.summary?t("div",{domProps:{innerHTML:i._s(s.summary)}}):i._e(),i._l(s.groupItems,function(s,n){return t("DocTab",{key:n,attrs:{"markup-col":s.markupCol,"preview-col":s.previewCol}},[t("div",{attrs:{slot:"title"},slot:"title"},[s.title?t("h3",{staticClass:"is-h4",domProps:{textContent:i._s(s.title)}}):i._e(),s.summary?t("div",{domProps:{innerHTML:i._s(s.summary)}}):i._e()]),t("div",{class:s.previewStyle,attrs:{slot:"preview"},domProps:{innerHTML:i._s(s.preview)},slot:"preview"}),t("div",{attrs:{slot:"markup"},slot:"markup"},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:s.markup||s.preview,expression:"item.markup || item.preview"}]},[t("code",{staticClass:"html"})])]),s.config?t("div",{attrs:{slot:"config"},slot:"config"},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:s.config,expression:"item.config"}]},[t("code",{staticClass:"scss"})])]):i._e()])})],2)}),0):i._e()},a=[],o=t("e33d"),r={name:"Blocks",components:{DocTab:o["a"]},props:["group"]},v=r,d=t("2877"),c=Object(d["a"])(v,l,a,!1,null,"52c48e75",null),g=c.exports,h={name:"BlocksGroup",components:{Blocks:g},props:["groups","sectionTitle"],methods:{filterGroup:function(i){return this.groups.filter(function(s){return s.type===i})}}},m=h,u=Object(d["a"])(m,n,e,!1,null,null,null);s["a"]=u.exports},e33d:function(i,s,t){"use strict";var n=function(){var i=this,s=i.$createElement,t=i._self._c||s;return t("div",{staticClass:"is-margin-bottom-7"},[t("div",{attrs:{"data-grid":""}},[t("div",{attrs:{"data-col":i.previewCol?i.previewCol:i.hasMarkup?"6":"12"}},[i._t("title"),i._t("preview")],2),t("div",{attrs:{"data-col":i.markupCol?i.markupCol:"6"}},[t("div",{staticClass:"is-relative"},[i.hasConfig?t("div",{staticClass:"btn btn_round btn_small toggle-btn",on:{click:function(s){i.showConfig=!i.showConfig}}},[i.showConfig?i._e():t("span",[i._v("config")]),i.showConfig?t("span",[i._v("markup")]):i._e()]):i._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:!i.showConfig,expression:"!showConfig"}]},[i._t("markup")],2),t("div",{directives:[{name:"show",rawName:"v-show",value:i.showConfig,expression:"showConfig"}]},[i._t("config")],2)])])])])},e=[],l=t("cdf5"),a={props:["previewCol","markupCol"],name:"Doctab",components:{Ixo:l["a"]},data:function(){return{showConfig:!1}},computed:{hasMarkup:function(){return!!this.$slots.markup},hasConfig:function(){return!!this.$slots.config}}},o=a,r=(t("71d0"),t("2877")),v=Object(r["a"])(o,n,e,!1,null,"76aba243",null);s["a"]=v.exports},f40e:function(i,s,t){"use strict";t.r(s);var n=function(){var i=this,s=i.$createElement,t=i._self._c||s;return t("blocks-group",{attrs:{groups:i.sectionGroups,"section-title":"is-ink"}})},e=[],l=t("e31a"),a={name:"IsInk",components:{BlocksGroup:l["a"]},data:function(){return{sectionGroups:[{title:"",id:"is-ink",navTitle:"is-ink",groupItems:[{title:"",preview:'<div data-grid>\n  <div data-col="6">\n    <div class="is-giga is-margin-bottom-3 well align-center is-ink">\n      is-ink\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="is-giga is-margin-bottom-3 well align-center is-ink-light">\n      is-ink-light\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="is-giga is-margin-bottom-3 well align-center is-ink-lighter">\n      is-ink-lighter\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="is-giga is-margin-bottom-3 well align-center is-ink-lightest">\n      is-ink-lightest\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="is-giga is-margin-bottom-3 well align-center is-ink-link">\n      is-ink-link\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="is-giga is-margin-bottom-3 well align-center is-ink-super">\n      is-ink-super\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="is-giga is-margin-bottom-3 well align-center is-ink-highlight">\n      is-ink-highlight\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="is-giga is-margin-bottom-3 well align-center is-ink-invert">\n      is-ink-invert\n    </div>\n  </div>\n</div>\n',markup:'<div class="is-ink"></div>\n<div class="is-ink-light"></div>\n<div class="is-ink-lighter"></div>\n<div class="is-ink-lightest"></div>\n<div class="is-ink-link"></div>\n<div class="is-ink-super"></div>\n<div class="is-ink-highlight"></div>\n<div class="is-ink-invert"></div>',config:"$is-ink: (\n  '': $text,\n  'light': $text-light,\n  'lighter': $text-lighter,\n  'lightest': $text-lightest,\n  'link': $link,\n  'super': $super,\n  'highlight': $highlight,\n  'invert': $text-invert,\n);"}]},{title:"",id:"hover-is-ink",navTitle:"hover:is-ink",groupItems:[{title:"",preview:'<div data-grid>\n  <div data-col="6">\n    <div class="demo-type is-giga is-margin-bottom-3 well align-center hover:is-ink">\n      hover:is-ink\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="demo-type is-giga is-margin-bottom-3 well align-center hover:is-ink-light">\n      hover:is-ink-light\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="demo-type is-giga is-margin-bottom-3 well align-center hover:is-ink-lighter">\n      hover:is-ink-lighter\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="demo-type is-giga is-margin-bottom-3 well align-center hover:is-ink-lightest">\n      hover:is-ink-lightest\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="demo-type is-giga is-margin-bottom-3 well align-center hover:is-ink-link">\n      hover:is-ink-link\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="demo-type is-giga is-margin-bottom-3 well align-center hover:is-ink-super">\n      hover:is-ink-super\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="demo-type is-giga is-margin-bottom-3 well align-center hover:is-ink-highlight">\n      hover:is-ink-highlight\n    </div>\n  </div>\n  <div data-col="6">\n    <div class="demo-type is-giga is-margin-bottom-3 well align-center hover:is-ink-invert">\n      hover:is-ink-invert\n    </div>\n  </div>\n</div>',markup:'<div class="hover:is-ink"></div>\n<div class="hover:is-ink-light"></div>\n<div class="hover:is-ink-lighter"></div>\n<div class="hover:is-ink-lightest"></div>\n<div class="hover:is-ink-link"></div>\n<div class="hover:is-ink-super"></div>\n<div class="hover:is-ink-highlight"></div>\n<div class="hover:is-ink-invert"></div>'}]}]}}},o=a,r=t("2877"),v=Object(r["a"])(o,n,e,!1,null,"5533bc56",null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-1b2f7336.52fccfac.js.map