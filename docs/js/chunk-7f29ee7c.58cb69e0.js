(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f29ee7c"],{"22e3":function(t,e,s){},"2c22":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.params?s("div",{staticClass:"params-table"},[s("h4",{staticClass:"is-h4 is-padding-left-5",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),s("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.params,function(e,i){return s("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[s("td",{attrs:{valign:"top","data-col":"5"}},[s("code",{staticClass:"is-bold",domProps:{textContent:t._s(e.name)}}),e.description?s("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(e.description)}}):t._e()]),e.type?s("td",{attrs:{valign:"top","data-col":"2"}},[s("span",{staticClass:"tag",domProps:{textContent:t._s(e.type)}})]):t._e(),s("td",{attrs:{valign:"top","data-col":"5"}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.default||"...",expression:"param.default || '...'"}]},[s("code",{staticClass:"scss"})])])])}),0)])])]):t._e()},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{attrs:{"data-grid":"small-gutter"}},[s("th",{attrs:{"data-col":"5"}},[t._v("Name")]),s("th",{attrs:{"data-col":"2"}},[t._v("Type")]),s("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],n={props:["params","title"]},r=n,l=(s("e7db"),s("2877")),o=Object(l["a"])(r,i,a,!1,null,"e7da4c6c",null);e["a"]=o.exports},e7db:function(t,e,s){"use strict";var i=s("22e3"),a=s.n(i);a.a},f40e:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),s("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[s("div",{domProps:{innerHTML:t._s(t.markup)}}),s("div",{staticClass:"is-theme is-margin-top-5 is-padding-center-2 is-round is-elevated-16"},[s("div",{staticClass:"nav",attrs:{"data-flex":"center"}},[s("div",{staticClass:"nav__item",attrs:{"data-col":"fit"}},[s("div",{staticClass:"input-group is-margin-top-2"},[s("label",{staticClass:"input-group__addon",attrs:{for:"alerStyle"}},[s("svg",{staticClass:"ixo is-ink-link"},[s("use",{attrs:{"xlink:href":"#saturation"}})])]),s("div",{staticClass:"input-group__addon"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.style,expression:"style"}],staticClass:"input input_round",attrs:{id:"alerStyle"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.style=e.target.multiple?s:s[0]}}},t._l(t.styles,function(e,i){return s("option",{key:i,domProps:{value:e,textContent:t._s("is-ink"===e?"default":e.slice(7))}})}),0)])]),s("div",{staticClass:"field-group__info align-center"},[t._v("change color")])]),s("div",{staticClass:"nav__item",attrs:{"data-col":"fit"}},[s("div",{staticClass:"input-group is-margin-top-2"},[s("label",{staticClass:"input-group__addon",attrs:{for:"alerStyle"}},[s("svg",{staticClass:"ixo is-ink-link"},[s("use",{attrs:{"xlink:href":"#saturation"}})])]),s("div",{staticClass:"input-group__addon"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.hoverStyle,expression:"hoverStyle"}],staticClass:"input input_round",attrs:{id:"alerStyle"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.hoverStyle=e.target.multiple?s:s[0]}}},t._l(t.hoverStyles,function(e,i){return s("option",{key:i,domProps:{value:e,textContent:t._s(""===e?"select":"hover:is-ink"===e?"default":e.slice(13))}})}),0)])]),s("div",{staticClass:"field-group__info align-center"},[t._v("change hover:color")])])])])]),s("div",{staticClass:"spacer"}),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[s("code",{staticClass:"html"})]),s("div",{staticClass:"spacer"}),s("params-table",{attrs:{params:t.params}})],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"titlebar"},[s("h1",[t._v("is-ink")])])}],n=s("2c22"),r={name:"IsInk",components:{ParamsTable:n["a"]},data:function(){return{markup:'<h1 class="is-ink">change my color</h1>',styles:["is-ink","is-ink-light","is-ink-lighter","is-ink-lightest","is-ink-link","is-ink-super","is-ink-highlight","is-ink-invert"],style:"is-ink",hoverStyles:["","hover:is-ink","hover:is-ink-light","hover:is-ink-lighter","hover:is-ink-lightest","hover:is-ink-link","hover:is-ink-super","hover:is-ink-highlight","hover:is-ink-invert"],hoverStyle:"",params:[{name:"$is-ink",type:"map",default:"(\n  '': $text,\n  'light': $text-light,\n  'lighter': $text-lighter,\n  'lightest': $text-lightest,\n  'link': $link,\n  'super': $super,\n  'highlight': $highlight,\n  'invert': $text-invert,\n);"}]}},computed:{classes:function(){return[this.style?this.style:null,this.hoverStyle?this.hoverStyle:null].join(" ").trim()}},watch:{classes:function(t){this.markup='<h1 class="'.concat(t,'">change my color</h1>')}}},l=r,o=s("2877"),c=Object(o["a"])(l,i,a,!1,null,"721c07db",null);e["default"]=c.exports}}]);