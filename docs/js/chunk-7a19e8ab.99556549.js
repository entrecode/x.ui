(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a19e8ab"],{"2c22":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"params-table"},[e("h4",{staticClass:"is-h4",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,function(a,i){return e("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])}),0)])]):t._e()},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],r={props:["params","title"]},n=r,l=(e("744b"),e("2877")),c=Object(l["a"])(n,i,s,!1,null,"834bd208",null);a["a"]=c.exports},"386b":function(t,a,e){var i=e("5ca1"),s=e("79e5"),r=e("be13"),n=/"/g,l=function(t,a,e,i){var s=String(r(t)),l="<"+a;return""!==e&&(l+=" "+e+'="'+String(i).replace(n,"&quot;")+'"'),l+">"+s+"</"+a+">"};t.exports=function(t,a){var e={};e[t]=a(l),i(i.P+i.F*s(function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",e)}},"40ce":function(t,a,e){},"744b":function(t,a,e){"use strict";var i=e("7a1d"),s=e.n(i);s.a},"7a1d":function(t,a,e){},b54a:function(t,a,e){"use strict";e("386b")("link",function(t){return function(a){return t(this,"a","href",a)}})},bb3a:function(t,a,e){"use strict";var i=e("40ce"),s=e.n(i);s.a},c345:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center center-items"}},[e("div",{staticClass:"typo-demo demo-transition",attrs:{"data-col":"8@md"}},[e("p",{class:t.paragraphClass},[t._v("\n          Overcome injustice justice, her body her rights gender rights silo correlation vibrant. Empower communities\n          engaging, low-hanging fruit, catalyze citizen-centered disrupt. Social intrapreneurship collective impact;\n          greenwashing benefit corporation innovation white paper, innovate, blended.\n        ")])]),e("div",{staticClass:"is-theme is-margin-top-5 is-padding-center-2 is-round is-elevated-16"},[e("div",{staticClass:"nav"},[e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear is-uppercase",class:{"is-ink":""!==t.paragraphClass},on:{click:function(a){t.paragraphClass=""}}},[t._v("default")])]),e("div",{staticClass:"nav__item"},[e("a",{staticClass:"btn btn_clear is-uppercase",class:{"is-ink":"is-lead"!==t.paragraphClass},on:{click:function(a){t.paragraphClass="is-lead"}}},[t._v("is-lead")])])])])]),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.preview,expression:"preview"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.coreParams,title:"core params"}}),e("div",{staticClass:"divider"}),e("params-table",{attrs:{params:t.paragraphParams,title:"paragraph params"}}),e("div",{staticClass:"divider"}),e("params-table",{attrs:{params:t.leadParams,title:"lead params"}}),e("div",{staticClass:"spacer"}),e("requires-list",{attrs:{requires:t.requires}})],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"titlebar"},[e("h1",[t._v("paragraphs")])])}],r=e("2c22"),n=e("da36"),l={components:{ParamsTable:r["a"],RequiresList:n["a"]},data:function(){return{paragraphClass:"",preview:"<p>Overcome injustice justice, her body her rights gender rights silo correlation \nvibrant. Empower communities engaging, low-hanging fruit, catalyze citizen-centered disrupt. Social \nintrapreneurship collective impact; greenwashing benefit corporation innovation white paper, innovate, blended.</p>",coreParams:[{name:"$body-color",type:"color",default:"$text"},{name:"$body-font-family",type:"string",default:"sans-serif"},{name:"$base-font-size",type:"number",default:"16"},{name:"$base-line-height",type:"number",default:"1.4"},{name:"$_base-vertical-rhythm",type:"number",description:"size used for typeface spacing",default:"round($base-line-height * $base-font-size) // 22"}],paragraphParams:[{name:"$paragraph-weight",type:"string",default:"$is-normal  // normal"},{name:"$paragraph-line-height",type:"number",default:"$base-line-height // 1.4"},{name:"$paragraph-style",type:"map"},{name:"$paragraph-spacing",type:"number",default:"0 0 $_base-vertical-rhythm 0 // 0 0 22 0"},{name:"$paragraph-spacing-unit",type:"enum",default:"$base-spacing-unit // xrem`"}],leadParams:[{name:"$is-lead-weight",type:"string",default:"$is-light // lighter"},{name:"$is-lead-line-height",type:"number",default:"$paragraph-line-height // 1.4"},{name:"$is-lead-style",type:"map"},{name:"$is-lead-spacing",type:"number",default:"$paragraph-spacing // 0 0 22 0"},{name:"$is-lead-spacing-unit",type:"enum",default:"$base-spacing-unit // xrem`"}],requires:[{name:"array-magic",type:"function",link:"#scroll-to-array-magic"},{name:"inject-style",type:"mixin",link:"#scroll-to-inject-style"},{name:"get-font-size",type:"mixin",link:"#scroll-to-get-font-size"}]}},watch:{paragraphClass:function(t){this.preview="<p".concat(t?' class="'+t+'"':"",">Overcome injustice justice, her body her rights gender rights silo correlation \nvibrant. Empower communities engaging, low-hanging fruit, catalyze citizen-centered disrupt. Social \nintrapreneurship collective impact; greenwashing benefit corporation innovation white paper, innovate, blended.</p>")}}},c=l,o=e("2877"),p=Object(o["a"])(c,i,s,!1,null,null,null);a["default"]=p.exports},da36:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.requires?e("div",{staticClass:"requires-list"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(a,i){return e("li",{key:i,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[a.link?e("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{to:t.url(a)},domProps:{textContent:t._s(a.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(a.name)}})],1)}),0)]):t._e()},s=[],r=(e("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),n=r,l=(e("bb3a"),e("2877")),c=Object(l["a"])(n,i,s,!1,null,"7bee28eb",null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-7a19e8ab.99556549.js.map