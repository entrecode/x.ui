(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f495d40"],{"2c22":function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return a.params?t("div",{staticClass:"params-table"},[t("h4",{staticClass:"is-h4",domProps:{textContent:a._s(a.title?a.title:"parameters")}}),t("table",{staticClass:"table"},[a._m(0),t("tbody",a._l(a.params,function(e,i){return t("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[t("td",{attrs:{valign:"top","data-col":"5"}},[t("code",{staticClass:"is-bold",domProps:{textContent:a._s(e.name)}}),e.description?t("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:a._s(e.description)}}):a._e()]),e.type?t("td",{attrs:{valign:"top","data-col":"2"}},[t("span",{staticClass:"tag",domProps:{textContent:a._s(e.type)}})]):a._e(),t("td",{attrs:{valign:"top","data-col":"5"}},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.default||"...",expression:"param.default || '...'"}]},[t("code",{staticClass:"scss"})])])])}),0)])]):a._e()},s=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("thead",[t("tr",{attrs:{"data-grid":"small-gutter"}},[t("th",{attrs:{"data-col":"5"}},[a._v("Name")]),t("th",{attrs:{"data-col":"2"}},[a._v("Type")]),t("th",{attrs:{"data-col":"5"}},[a._v("Default Value")])])])}],r={props:["params","title"]},n=r,l=(t("744b"),t("2877")),c=Object(l["a"])(n,i,s,!1,null,"834bd208",null);e["a"]=c.exports},"744b":function(a,e,t){"use strict";var i=t("7a1d"),s=t.n(i);s.a},"7a1d":function(a,e,t){},"7b87":function(a,e,t){"use strict";var i=t("a2b7"),s=t.n(i);s.a},a2b7:function(a,e,t){},c345:function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",[a._m(0),t("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center center-items"}},[t("div",{staticClass:"typo-demo demo-transition",attrs:{"data-col":"8@md"}},[t("p",{class:a.paragraphClass},[a._v("\n        Overcome injustice justice, her body her rights gender rights silo correlation vibrant. Empower communities\n        engaging, low-hanging fruit, catalyze citizen-centered disrupt. Social intrapreneurship collective impact;\n        greenwashing benefit corporation innovation white paper, innovate, blended.\n      ")])]),t("div",{staticClass:"is-theme is-margin-top-5 is-padding-center-2 is-round is-elevated-16"},[t("div",{staticClass:"nav"},[t("div",{staticClass:"nav__item"},[t("a",{staticClass:"btn btn_clear is-uppercase",class:{"is-ink":""!==a.paragraphClass},on:{click:function(e){a.paragraphClass=""}}},[a._v("default")])]),t("div",{staticClass:"nav__item"},[t("a",{staticClass:"btn btn_clear is-uppercase",class:{"is-ink":"is-lead"!==a.paragraphClass},on:{click:function(e){a.paragraphClass="is-lead"}}},[a._v("is-lead")])])])])]),t("div",{attrs:{"data-grid":"center"}},[t("div",{attrs:{"data-col":"10@md 8@lg"}},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.preview,expression:"preview"}]},[t("code",{staticClass:"html"})]),t("params-table",{attrs:{params:a.coreParams,title:"core params"}}),t("div",{staticClass:"divider"}),t("params-table",{attrs:{params:a.paragraphParams,title:"paragraph params"}}),t("div",{staticClass:"divider"}),t("params-table",{attrs:{params:a.leadParams,title:"lead params"}}),t("div",{staticClass:"divider"}),t("requires-list",{attrs:{requires:a.requires}})],1)])])},s=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"is-padding-center-3"},[t("h2",[a._v("paragraphs")])])}],r=t("2c22"),n=t("da36"),l={components:{ParamsTable:r["a"],RequiresList:n["a"]},data:function(){return{paragraphClass:"",preview:"<p>Overcome injustice justice, her body her rights gender rights silo correlation \nvibrant. Empower communities engaging, low-hanging fruit, catalyze citizen-centered disrupt. Social \nintrapreneurship collective impact; greenwashing benefit corporation innovation white paper, innovate, blended.</p>",coreParams:[{name:"$body-color",type:"color",default:"$text"},{name:"$body-font-family",type:"string",default:"sans-serif"},{name:"$base-font-size",type:"number",default:"16"},{name:"$base-line-height",type:"number",default:"1.4"},{name:"$_base-vertical-rhythm",type:"number",description:"size used for typeface spacing",default:"round($base-line-height * $base-font-size) // 22"}],paragraphParams:[{name:"$paragraph-weight",type:"string",default:"$is-normal  // normal"},{name:"$paragraph-line-height",type:"number",default:"$base-line-height // 1.4"},{name:"$paragraph-style",type:"map"},{name:"$paragraph-spacing",type:"number",default:"0 0 $_base-vertical-rhythm 0 // 0 0 22 0"},{name:"$paragraph-spacing-unit",type:"enum",default:"$base-spacing-unit // xrem`"}],leadParams:[{name:"$is-lead-weight",type:"string",default:"$is-light // lighter"},{name:"$is-lead-line-height",type:"number",default:"$paragraph-line-height // 1.4"},{name:"$is-lead-style",type:"map"},{name:"$is-lead-spacing",type:"number",default:"$paragraph-spacing // 0 0 22 0"},{name:"$is-lead-spacing-unit",type:"enum",default:"$base-spacing-unit // xrem`"}],requires:[{name:"array-magic",type:"function",link:"#scroll-to-array-magic"},{name:"inject-style",type:"mixin",link:"#scroll-to-inject-style"},{name:"get-font-size",type:"mixin",link:"#scroll-to-get-font-size"}]}},watch:{paragraphClass:function(a){this.preview="<p".concat(a?' class="'+a+'"':"",">Overcome injustice justice, her body her rights gender rights silo correlation \nvibrant. Empower communities engaging, low-hanging fruit, catalyze citizen-centered disrupt. Social \nintrapreneurship collective impact; greenwashing benefit corporation innovation white paper, innovate, blended.</p>")}}},c=l,o=t("2877"),p=Object(o["a"])(c,i,s,!1,null,null,null);e["default"]=p.exports},da36:function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return a.requires?t("div",{staticClass:"requires-list"},[t("h4",{staticClass:"is-h2"},[a._v("requires")]),t("ul",{attrs:{"data-grid":"small-gutter"}},a._l(a.requires,function(e,i){return t("li",{key:i,attrs:{"data-col":"fit"}},[e.link?t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{href:e.link},domProps:{textContent:a._s(e.name)}}):t("span",{staticClass:"code",domProps:{textContent:a._s(e.name)}})])}),0)]):a._e()},s=[],r={props:["requires"]},n=r,l=(t("7b87"),t("2877")),c=Object(l["a"])(n,i,s,!1,null,"787126dd",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-5f495d40.8cf00ab5.js.map