(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8867b3c0"],{"71d0":function(t,e,i){"use strict";var n=i("a97c"),s=i.n(n);s.a},"757a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("blocks-group",{attrs:{groups:t.sectionGroups,"section-title":"table"}})},s=[],a=i("e31a"),r={name:"Table",components:{BlocksGroup:a["a"]},data:function(){return{sectionGroups:[{navTitle:"default",title:"",id:"table",groupItems:[{preview:'<table class="table">\n  <thead>\n    <tr>\n      <th>title</th>\n      <th>description</th>\n      <th>date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>title</td>\n      <td>\n        Gewiß. Aber was steht nicht alles - von Kinderfreund gar nicht zu reden\n        - in Bibel und Katechismus, und die Leute wissen es doch nicht. Ich zum\n        Beispiel.\n      </td>\n      <td>17-11-20</td>\n    </tr>\n  </tbody>\n</table>',markup:'<table class="table">\n  <thead>\n    <tr>\n      <th>...</th>\n      ...\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>...</td>\n      ...\n    </tr>\n  </tbody>\n</table>',config:"$table-spacing: 0 0 16 0;\n$table-border: 1 solid $base-divider-color;\n$table-cell-padding: 8;",previewCol:12,markupCol:12}]},{navTitle:"bordered",title:"",id:"table-bordered",groupItems:[{preview:'<table class="table table_bordered">\n  <thead>\n    <tr>\n      <th>title</th>\n      <th>description</th>\n      <th>date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>title</td>\n      <td>\n        Gewiß. Aber was steht nicht alles - von Kinderfreund gar nicht zu reden\n        - in Bibel und Katechismus, und die Leute wissen es doch nicht. Ich zum\n        Beispiel.\n      </td>\n      <td>17-11-20</td>\n    </tr>\n  </tbody>\n</table>',markup:'<table class="table table_bordered">\n  <thead>\n    <tr>\n      <th>...</th>\n      ...\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>...</td>\n      ...\n    </tr>\n  </tbody>\n</table>',previewCol:12,markupCol:12}]},{navTitle:"clear",title:"",id:"table-clear",groupItems:[{preview:'<table class="table table_clear">\n  <thead>\n    <tr>\n      <th>title</th>\n      <th>description</th>\n      <th>date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>title</td>\n      <td>\n        Gewiß. Aber was steht nicht alles - von Kinderfreund gar nicht zu reden\n        - in Bibel und Katechismus, und die Leute wissen es doch nicht. Ich zum\n        Beispiel.\n      </td>\n      <td>17-11-20</td>\n    </tr>\n  </tbody>\n</table>',markup:'<table class="table table_bordered">\n  <thead>\n    <tr>\n      <th>...</th>\n      ...\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>...</td>\n      ...\n    </tr>\n  </tbody>\n</table>',previewCol:12,markupCol:12}]},{navTitle:"with data-col",title:"",id:"table-grid",groupItems:[{preview:'<table class="table table_bordered">\n  <thead>\n    <tr data-flex>\n      <th data-col="4">title</th>\n      <th data-col="4">description</th>\n      <th data-col="4">date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr data-flex>\n      <td data-col="4">title</td>\n      <td data-col="4">\n        Gewiß. Aber was steht nicht alles - von Kinderfreund gar nicht zu reden\n        - in Bibel und Katechismus, und die Leute wissen es doch nicht. Ich zum\n        Beispiel.\n      </td>\n      <td data-col="4">17-11-20</td>\n    </tr>\n  </tbody>\n</table>',markup:'<table class="table table_bordered">\n  <thead>\n    <tr>\n      <th data-col="4">...</th>\n      ...\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td data-col="4">...</td>\n      ...\n    </tr>\n  </tbody>\n</table>',previewCol:12,markupCol:12}]}]}}},l=r,o=i("2877"),d=Object(o["a"])(l,n,s,!1,null,"5b394303",null);e["default"]=d.exports},a97c:function(t,e,i){},e31a:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"demo-blocks-group"},[i("div",{attrs:{"data-grid":""}},[i("div",{attrs:{"data-col":"8"}},[i("blocks",{attrs:{group:t.filterGroup(void 0)}}),i("blocks",{attrs:{group:t.filterGroup("atoms")}}),i("blocks",{attrs:{group:t.filterGroup("molecules")}}),i("blocks",{attrs:{group:t.filterGroup("modifier")}})],1),i("div",{attrs:{"data-col":"4"}},[i("ul",{staticClass:"nav nav_stacked is-sticky",staticStyle:{top:"120px"}},[t.sectionTitle?i("li",{staticClass:"nav__item"},[i("h2",{domProps:{textContent:t._s(t.sectionTitle)}})]):t._e(),t._l(t.filterGroup(void 0),function(e,n){return i("li",{key:n,staticClass:"nav__item"},[i("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+e.id}},[t._v(t._s(e.navTitle))])])}),t.filterGroup("atoms").length?i("li",{staticClass:"is-uppercase is-padding-2 is-headings-font is-ink-light is-margin-top-3"},[i("small",[t._v("atoms")])]):t._e(),t._l(t.filterGroup("atoms"),function(e,n){return i("li",{key:"atoms"+n,staticClass:"nav__item"},[i("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+e.id}},[t._v(t._s(e.navTitle))])])}),t.filterGroup("molecules").length?i("li",{staticClass:"is-uppercase is-padding-2 is-headings-font is-ink-light is-margin-top-3"},[i("small",[t._v("molecules")])]):t._e(),t._l(t.filterGroup("molecules"),function(e,n){return i("li",{key:"molecules"+n,staticClass:"nav__item"},[i("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+e.id}},[t._v(t._s(e.navTitle))])])}),t.filterGroup("organisms").length?i("li",{staticClass:"is-uppercase is-padding-2 is-headings-font is-ink-light is-margin-top-3"},[i("small",[t._v("organisms")])]):t._e(),t._l(t.filterGroup("organisms"),function(e,n){return i("li",{key:"organisms"+n,staticClass:"nav__item"},[i("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+e.id}},[t._v(t._s(e.navTitle))])])}),t.filterGroup("modifier").length?i("li",{staticClass:"is-uppercase is-padding-2 is-headings-font is-ink-light is-margin-top-3"},[i("small",[t._v("Modifier")])]):t._e(),t._l(t.filterGroup("modifier"),function(e,n){return i("li",{key:"modifier"+n,staticClass:"nav__item"},[i("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#scroll-to-"+e.id}},[t._v(t._s(e.navTitle))])])})],2)])])])},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.group&&t.group.length?i("div",{staticClass:"is-margin-bottom-8"},t._l(t.group,function(e,n){return i("div",{key:n,attrs:{id:"#scroll-to-"+e.id}},[e.title?i("h2",{domProps:{textContent:t._s(e.title)}}):t._e(),e.summary?i("div",{domProps:{innerHTML:t._s(e.summary)}}):t._e(),t._l(e.groupItems,function(e,n){return i("DocTab",{key:n,attrs:{"markup-col":e.markupCol,"preview-col":e.previewCol}},[i("div",{attrs:{slot:"title"},slot:"title"},[e.title?i("h3",{staticClass:"is-h4",domProps:{textContent:t._s(e.title)}}):t._e(),e.summary?i("div",{domProps:{innerHTML:t._s(e.summary)}}):t._e()]),i("div",{class:e.previewStyle,attrs:{slot:"preview"},domProps:{innerHTML:t._s(e.preview)},slot:"preview"}),i("div",{attrs:{slot:"markup"},slot:"markup"},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.markup||e.preview,expression:"item.markup || item.preview"}]},[i("code",{staticClass:"html"})])]),e.config?i("div",{attrs:{slot:"config"},slot:"config"},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.config,expression:"item.config"}]},[i("code",{staticClass:"scss"})])]):t._e()])})],2)}),0):t._e()},r=[],l=i("e33d"),o={name:"Blocks",components:{DocTab:l["a"]},props:["group"]},d=o,c=i("2877"),u=Object(c["a"])(d,a,r,!1,null,"52c48e75",null),h=u.exports,p={name:"BlocksGroup",components:{Blocks:h},props:["groups","sectionTitle"],methods:{filterGroup:function(t){return this.groups.filter(function(e){return e.type===t})}}},m=p,v=Object(c["a"])(m,n,s,!1,null,null,null);e["a"]=v.exports},e33d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"is-margin-bottom-7"},[i("div",{attrs:{"data-grid":""}},[i("div",{attrs:{"data-col":t.previewCol?t.previewCol:t.hasMarkup?"6":"12"}},[t._t("title"),t._t("preview")],2),i("div",{attrs:{"data-col":t.markupCol?t.markupCol:"6"}},[i("div",{staticClass:"is-relative"},[t.hasConfig?i("div",{staticClass:"btn btn_round btn_small toggle-btn",on:{click:function(e){t.showConfig=!t.showConfig}}},[t.showConfig?t._e():i("span",[t._v("config")]),t.showConfig?i("span",[t._v("markup")]):t._e()]):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showConfig,expression:"!showConfig"}]},[t._t("markup")],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showConfig,expression:"showConfig"}]},[t._t("config")],2)])])])])},s=[],a=i("cdf5"),r={props:["previewCol","markupCol"],name:"Doctab",components:{Ixo:a["a"]},data:function(){return{showConfig:!1}},computed:{hasMarkup:function(){return!!this.$slots.markup},hasConfig:function(){return!!this.$slots.config}}},l=r,o=(i("71d0"),i("2877")),d=Object(o["a"])(l,n,s,!1,null,"76aba243",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-8867b3c0.c80fa6ef.js.map