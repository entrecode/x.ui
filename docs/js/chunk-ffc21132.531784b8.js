(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffc21132"],{"1ca2":function(t,s,a){"use strict";a("f202")},"2c22":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.params?a("div",{staticClass:"is-margin-bottom-5 is-padding-bottom-5 is-border-bottom"},[a("h2",{staticClass:"is-h3",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),a("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.params,(function(s,i){return a("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[a("td",{attrs:{valign:"top","data-col":"5"}},[a("code",{staticClass:"is-bold",domProps:{textContent:t._s(s.name)}}),s.description?a("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(s.description)}}):t._e()]),s.type?a("td",{attrs:{valign:"top","data-col":"2"}},[a("span",{staticClass:"tag",domProps:{textContent:t._s(s.type)}})]):t._e(),a("td",{attrs:{valign:"top","data-col":"5"}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:s.default||"...",expression:"param.default || '...'"}]},[a("code",{staticClass:"scss"})])])])})),0)])])]):t._e()},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",{attrs:{"data-grid":"small-gutter"}},[a("th",{attrs:{"data-col":"5"}},[t._v("Name")]),a("th",{attrs:{"data-col":"2"}},[t._v("Type")]),a("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],n={props:["params","title"]},r=n,l=(a("fc58"),a("2877")),d=Object(l["a"])(r,i,e,!1,null,"8ea7df52",null);s["a"]=d.exports},"6bb0":function(t,s,a){},"857a":function(t,s,a){var i=a("1d80"),e=/"/g;t.exports=function(t,s,a,n){var r=String(i(t)),l="<"+s;return""!==a&&(l+=" "+a+'="'+String(n).replace(e,"&quot;")+'"'),l+">"+r+"</"+s+">"}},9911:function(t,s,a){"use strict";var i=a("23e7"),e=a("857a"),n=a("af03");i({target:"String",proto:!0,forced:n("link")},{link:function(t){return e(this,"a","href",t)}})},a15b:function(t,s,a){"use strict";var i=a("23e7"),e=a("44ad"),n=a("fc6a"),r=a("a640"),l=[].join,d=e!=Object,o=r("join",",");i({target:"Array",proto:!0,forced:d||!o},{join:function(t){return l.call(n(this),void 0===t?",":t)}})},a640:function(t,s,a){"use strict";var i=a("d039");t.exports=function(t,s){var a=[][t];return!!a&&i((function(){a.call(null,s||function(){throw 1},1)}))}},af03:function(t,s,a){var i=a("d039");t.exports=function(t){return i((function(){var s=""[t]('"');return s!==s.toLowerCase()||s.split('"').length>3}))}},c2d2:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),a("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"center"}},[a("div",{staticClass:"demo-bg",class:t.isPaddingClass+t.paddingSize},[a("div",{staticClass:"is-theme is-padding-3"},[a("div",{staticClass:"nav",attrs:{"data-flex":"center"}},[a("div",{staticClass:"nav__item"},[a("div",{staticClass:"btn btn_clear",class:"is-padding-"===t.isPaddingClass?"is-ink-link":"is-ink-lighter",on:{click:function(s){t.isPaddingClass="is-padding-"}}},[a("svg",{staticClass:"ixo"},[a("use",{attrs:{"xlink:href":"#border-outside"}})])])]),a("div",{staticClass:"nav__item"},[a("div",{staticClass:"btn btn_clear",class:"is-padding-top-"===t.isPaddingClass?"is-ink-link":"is-ink-lighter",on:{click:function(s){t.isPaddingClass="is-padding-top-"}}},[a("svg",{staticClass:"ixo"},[a("use",{attrs:{"xlink:href":"#border-top"}})])])]),a("div",{staticClass:"nav__item"},[a("div",{staticClass:"btn btn_clear",class:"is-padding-right-"===t.isPaddingClass?"is-ink-link":"is-ink-lighter",on:{click:function(s){t.isPaddingClass="is-padding-right-"}}},[a("svg",{staticClass:"ixo"},[a("use",{attrs:{"xlink:href":"#border-right"}})])])]),a("div",{staticClass:"nav__item"},[a("div",{staticClass:"btn btn_clear",class:"is-padding-bottom-"===t.isPaddingClass?"is-ink-link":"is-ink-lighter",on:{click:function(s){t.isPaddingClass="is-padding-bottom-"}}},[a("svg",{staticClass:"ixo"},[a("use",{attrs:{"xlink:href":"#border-bottom"}})])])]),a("div",{staticClass:"nav__item"},[a("div",{staticClass:"btn btn_clear",class:"is-padding-left-"===t.isPaddingClass?"is-ink-link":"is-ink-lighter",on:{click:function(s){t.isPaddingClass="is-padding-left-"}}},[a("svg",{staticClass:"ixo"},[a("use",{attrs:{"xlink:href":"#border-left"}})])])])]),a("div",{attrs:{"data-grid":"small-gutter","data-flex":"center-items"}},[a("div",{attrs:{"data-col":"auto"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paddingSize,expression:"paddingSize"}],staticClass:"range-slider",attrs:{type:"range",min:"0",max:"8"},domProps:{value:t.paddingSize},on:{__r:function(s){t.paddingSize=s.target.value}}})]),a("div",{attrs:{"data-col":"fit"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.breakpoint,expression:"breakpoint"}],staticClass:"input",attrs:{id:"displaySelected"},on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.breakpoint=s.target.multiple?a:a[0]}}},t._l(t.breakpoints,(function(s,i){return a("option",{key:i,domProps:{value:s,textContent:t._s(""===s?"always":s)}})})),0)])])])])]),a("div",{staticClass:"spacer"}),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[a("code",{staticClass:"html"})]),a("div",{staticClass:"spacer"}),a("params-table",{attrs:{params:t.params}}),a("requires-list",{attrs:{requires:t.requires}})],1)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"titlebar"},[a("h1",[t._v("is-padding")])])}],n=(a("a15b"),a("2c22")),r=a("da36"),l={components:{ParamsTable:n["a"],RequiresList:r["a"]},data:function(){return{requires:[{name:"$spacings",type:"variable",link:"#scroll-to-spacings"},{name:"get-space()",type:"function",link:"#scroll-to-get-space"},{name:"set-breakpoints()",type:"mixin",link:"#scroll-to-set-breakpoints"}],params:[{name:"$is-padding-options",type:"map",default:"$spacings"}],isPaddingClass:"is-padding-",paddingSize:3,breakpoints:["","@xs","@sm","@md","@lg","@xl","@xxl"],breakpoint:"",markup:'<div class="is-padding-3"></div>'}},computed:{dirty:function(){return[this.isPaddingClass,this.paddingSize,this.breakpoint].join("")}},watch:{dirty:function(t){this.markup='<div class="'.concat(t,'"></div>')}}},d=l,o=(a("1ca2"),a("2877")),c=Object(o["a"])(d,i,e,!1,null,"2da8bc66",null);s["default"]=c.exports},da36:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.requires?a("div",{staticClass:"is-margin-bottom-8"},[a("h4",{staticClass:"is-h2"},[t._v("requires")]),a("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,(function(s,i){return a("li",{key:i,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[s.link?a("router-link",{staticClass:"code",attrs:{to:t.url(s)},domProps:{textContent:t._s(s.name)}}):a("span",{staticClass:"code",domProps:{textContent:t._s(s.name)}})],1)})),0)]):t._e()},e=[],n=(a("9911"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),r=n,l=a("2877"),d=Object(l["a"])(r,i,e,!1,null,null,null);s["a"]=d.exports},f202:function(t,s,a){},fc58:function(t,s,a){"use strict";a("6bb0")}}]);