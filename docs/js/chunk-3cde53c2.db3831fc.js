(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cde53c2"],{2436:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),a("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[a("div",{domProps:{innerHTML:t._s(t.markup)}}),a("div",{staticClass:"is-theme is-margin-top-5 is-padding-center-2 is-round is-elevated-16"},[a("div",{staticClass:"nav",attrs:{"data-flex":"center"}},[a("div",{staticClass:"nav__item",attrs:{"data-col":"fit"}},[a("div",{staticClass:"input-group is-margin-top-2"},[a("label",{staticClass:"input-group__addon",attrs:{for:"alerStyle"}},[a("svg",{staticClass:"ixo is-ink-link"},[a("use",{attrs:{"xlink:href":"#saturation"}})])]),a("div",{staticClass:"input-group__addon"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.style,expression:"style"}],staticClass:"input input_round",attrs:{id:"alerStyle"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.style=e.target.multiple?a:a[0]}}},t._l(t.styles,function(e,s){return a("option",{key:s,domProps:{value:e,textContent:t._s("is-theme"===e?"default":e.slice(9))}})}),0)])]),a("div",{staticClass:"field-group__info align-center"},[t._v("change color")])]),a("div",{staticClass:"nav__item",attrs:{"data-col":"fit"}},[a("div",{staticClass:"input-group is-margin-top-2"},[a("label",{staticClass:"input-group__addon",attrs:{for:"alerStyle"}},[a("svg",{staticClass:"ixo is-ink-link"},[a("use",{attrs:{"xlink:href":"#saturation"}})])]),a("div",{staticClass:"input-group__addon"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.hoverStyle,expression:"hoverStyle"}],staticClass:"input input_round",attrs:{id:"alerStyle"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.hoverStyle=e.target.multiple?a:a[0]}}},t._l(t.hoverStyles,function(e,s){return a("option",{key:s,domProps:{value:e,textContent:t._s(""===e?"select":"hover:is-theme"===e?"default":e.slice(15))}})}),0)])]),a("div",{staticClass:"field-group__info align-center"},[t._v("change hover:color")])])])])]),a("div",{staticClass:"spacer"}),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[a("code",{staticClass:"html"})]),a("div",{staticClass:"spacer"}),a("params-table",{attrs:{params:t.params}}),a("div",{staticClass:"spacer"}),a("requires-list",{attrs:{requires:t.requires}})],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titlebar"},[a("h1",[t._v("is-theme")])])}],r=a("2c22"),n=a("da36"),l={name:"IsInk",components:{ParamsTable:r["a"],RequiresList:n["a"]},data:function(){return{markup:'<div class="is-theme">\n  <h1>change my color <a>i\'m a link</a></h1>\n</div>',styles:["is-theme","is-theme-lightest","is-theme-invert"],style:"is-theme",hoverStyles:["","hover:is-theme","hover:is-theme-lightest","hover:is-theme-invert"],hoverStyle:"",params:[{name:"$is-theme",type:"map",default:"(\n  '': (\n    $background,\n    $text,\n    $link,\n  ),\n  'lightest': (\n    $background-lightest,\n    $text,\n    $link,\n  ),\n  'invert': (\n    $background-invert,\n    $text-invert,\n    $link,\n  ),\n)"},{name:"$is-theme-style",type:"map",default:""}],requires:[{name:"inject-styles()",type:"mixin",link:"#scroll-to-inject-styles"}]}},computed:{classes:function(){return[this.style?this.style:null,this.hoverStyle?this.hoverStyle:null].join(" ").trim()}},watch:{classes:function(t){this.markup='<div class="'.concat(t,"\">\n  <h1>change my color <a>i'm a link</a></h1>\n</div>")}}},o=l,c=a("2877"),u=Object(c["a"])(o,s,i,!1,null,"02a6020e",null);e["default"]=u.exports},"2c22":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.params?a("div",{staticClass:"params-table"},[a("h4",{staticClass:"is-h4",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.params,function(e,s){return a("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[a("td",{attrs:{valign:"top","data-col":"5"}},[a("code",{staticClass:"is-bold",domProps:{textContent:t._s(e.name)}}),e.description?a("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(e.description)}}):t._e()]),e.type?a("td",{attrs:{valign:"top","data-col":"2"}},[a("span",{staticClass:"tag",domProps:{textContent:t._s(e.type)}})]):t._e(),a("td",{attrs:{valign:"top","data-col":"5"}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.default||"...",expression:"param.default || '...'"}]},[a("code",{staticClass:"scss"})])])])}),0)])]):t._e()},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{attrs:{"data-grid":"small-gutter"}},[a("th",{attrs:{"data-col":"5"}},[t._v("Name")]),a("th",{attrs:{"data-col":"2"}},[t._v("Type")]),a("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],r={props:["params","title"]},n=r,l=(a("744b"),a("2877")),o=Object(l["a"])(n,s,i,!1,null,"834bd208",null);e["a"]=o.exports},"386b":function(t,e,a){var s=a("5ca1"),i=a("79e5"),r=a("be13"),n=/"/g,l=function(t,e,a,s){var i=String(r(t)),l="<"+e;return""!==a&&(l+=" "+a+'="'+String(s).replace(n,"&quot;")+'"'),l+">"+i+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(l),s(s.P+s.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",a)}},"40ce":function(t,e,a){},"744b":function(t,e,a){"use strict";var s=a("7a1d"),i=a.n(s);i.a},"7a1d":function(t,e,a){},b54a:function(t,e,a){"use strict";a("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},bb3a:function(t,e,a){"use strict";var s=a("40ce"),i=a.n(s);i.a},da36:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.requires?a("div",{staticClass:"requires-list"},[a("h4",{staticClass:"is-h2"},[t._v("requires")]),a("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(e,s){return a("li",{key:s,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[e.link?a("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{to:t.url(e)},domProps:{textContent:t._s(e.name)}}):a("span",{staticClass:"code",domProps:{textContent:t._s(e.name)}})],1)}),0)]):t._e()},i=[],r=(a("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),n=r,l=(a("bb3a"),a("2877")),o=Object(l["a"])(n,s,i,!1,null,"7bee28eb",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-3cde53c2.db3831fc.js.map