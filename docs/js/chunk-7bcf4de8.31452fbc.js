(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bcf4de8"],{1848:function(t,s,a){},"2c22":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.params?a("div",{staticClass:"params-table"},[a("h2",{staticClass:"is-h3",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),a("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.params,function(s,i){return a("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[a("td",{attrs:{valign:"top","data-col":"5"}},[a("code",{staticClass:"is-bold",domProps:{textContent:t._s(s.name)}}),s.description?a("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(s.description)}}):t._e()]),s.type?a("td",{attrs:{valign:"top","data-col":"2"}},[a("span",{staticClass:"tag",domProps:{textContent:t._s(s.type)}})]):t._e(),a("td",{attrs:{valign:"top","data-col":"5"}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:s.default||"...",expression:"param.default || '...'"}]},[a("code",{staticClass:"scss"})])])])}),0)])])]):t._e()},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",{attrs:{"data-grid":"small-gutter"}},[a("th",{attrs:{"data-col":"5"}},[t._v("Name")]),a("th",{attrs:{"data-col":"2"}},[t._v("Type")]),a("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],r={props:["params","title"]},n=r,l=(a("cf9a"),a("2877")),c=Object(l["a"])(n,i,e,!1,null,"767a07fb",null);s["a"]=c.exports},"386b":function(t,s,a){var i=a("5ca1"),e=a("79e5"),r=a("be13"),n=/"/g,l=function(t,s,a,i){var e=String(r(t)),l="<"+s;return""!==a&&(l+=" "+a+'="'+String(i).replace(n,"&quot;")+'"'),l+">"+e+"</"+s+">"};t.exports=function(t,s){var a={};a[t]=s(l),i(i.P+i.F*e(function(){var s=""[t]('"');return s!==s.toLowerCase()||s.split('"').length>3}),"String",a)}},"40ce":function(t,s,a){},"70d1":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),a("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"center"}},[a("div",{staticClass:"demo-bg",staticStyle:{"--spacingColor":"0,255,0"}},[a("div",{staticClass:"is-theme is-padding-3",class:t.isMarginClass+t.marginSize},[a("div",{staticClass:"nav",attrs:{"data-flex":"center"}},[a("div",{staticClass:"nav__item"},[a("div",{staticClass:"btn btn_clear",class:"is-margin-"===t.isMarginClass?"is-ink-link":"is-ink-lighter",on:{click:function(s){t.isMarginClass="is-margin-"}}},[a("svg",{staticClass:"ixo"},[a("use",{attrs:{"xlink:href":"#border-outside"}})])])]),a("div",{staticClass:"nav__item"},[a("div",{staticClass:"btn btn_clear",class:"is-margin-top-"===t.isMarginClass?"is-ink-link":"is-ink-lighter",on:{click:function(s){t.isMarginClass="is-margin-top-"}}},[a("svg",{staticClass:"ixo"},[a("use",{attrs:{"xlink:href":"#border-top"}})])])]),a("div",{staticClass:"nav__item"},[a("div",{staticClass:"btn btn_clear",class:"is-margin-right-"===t.isMarginClass?"is-ink-link":"is-ink-lighter",on:{click:function(s){t.isMarginClass="is-margin-right-"}}},[a("svg",{staticClass:"ixo"},[a("use",{attrs:{"xlink:href":"#border-right"}})])])]),a("div",{staticClass:"nav__item"},[a("div",{staticClass:"btn btn_clear",class:"is-margin-bottom-"===t.isMarginClass?"is-ink-link":"is-ink-lighter",on:{click:function(s){t.isMarginClass="is-margin-bottom-"}}},[a("svg",{staticClass:"ixo"},[a("use",{attrs:{"xlink:href":"#border-bottom"}})])])]),a("div",{staticClass:"nav__item"},[a("div",{staticClass:"btn btn_clear",class:"is-margin-left-"===t.isMarginClass?"is-ink-link":"is-ink-lighter",on:{click:function(s){t.isMarginClass="is-margin-left-"}}},[a("svg",{staticClass:"ixo"},[a("use",{attrs:{"xlink:href":"#border-left"}})])])])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.marginSize,expression:"marginSize"}],staticClass:"range-slider",attrs:{type:"range",min:"0",max:"8"},domProps:{value:t.marginSize},on:{__r:function(s){t.marginSize=s.target.value}}})])])]),a("div",{staticClass:"spacer"}),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[a("code",{staticClass:"html"})]),a("div",{staticClass:"spacer"}),a("params-table",{attrs:{params:t.params}}),a("div",{staticClass:"spacer"}),a("requires-list",{attrs:{requires:t.requires}})],1)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"titlebar"},[a("h1",[t._v("is-margin")])])}],r=a("2c22"),n=a("da36"),l={components:{ParamsTable:r["a"],RequiresList:n["a"]},data:function(){return{requires:[{name:"$spacings",type:"variable",link:"#scroll-to-spacings"},{name:"get-space()",type:"function",link:"#scroll-to-get-space"},{name:"set-breakpoints()",type:"mixin",link:"#scroll-to-set-breakpoints"}],params:[{name:"$is-margin-options",type:"map",default:"$spacings"}],isMarginClass:"is-margin-",marginSize:3,markup:'<div class="is-margin-3"></div>'}},computed:{dirty:function(){return[this.isMarginClass,this.marginSize].join("")}},watch:{dirty:function(t){this.markup='<div class="'.concat(t,'"></div>')}}},c=l,o=(a("85a0"),a("2877")),u=Object(o["a"])(c,i,e,!1,null,"240c6970",null);s["default"]=u.exports},"85a0":function(t,s,a){"use strict";var i=a("b3b2"),e=a.n(i);e.a},b3b2:function(t,s,a){},b54a:function(t,s,a){"use strict";a("386b")("link",function(t){return function(s){return t(this,"a","href",s)}})},bb3a:function(t,s,a){"use strict";var i=a("40ce"),e=a.n(i);e.a},cf9a:function(t,s,a){"use strict";var i=a("1848"),e=a.n(i);e.a},da36:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.requires?a("div",{staticClass:"requires-list"},[a("h4",{staticClass:"is-h2"},[t._v("requires")]),a("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(s,i){return a("li",{key:i,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[s.link?a("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{to:t.url(s)},domProps:{textContent:t._s(s.name)}}):a("span",{staticClass:"code",domProps:{textContent:t._s(s.name)}})],1)}),0)]):t._e()},e=[],r=(a("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),n=r,l=(a("bb3a"),a("2877")),c=Object(l["a"])(n,i,e,!1,null,"7bee28eb",null);s["a"]=c.exports}}]);