(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44367b15"],{"2c22":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.params?a("div",{staticClass:"is-margin-bottom-5 is-padding-bottom-5 is-border-bottom"},[a("h2",{staticClass:"is-h3",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),a("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.params,(function(e,s){return a("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[a("td",{attrs:{valign:"top","data-col":"5"}},[a("code",{staticClass:"is-bold",domProps:{textContent:t._s(e.name)}}),e.description?a("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(e.description)}}):t._e()]),e.type?a("td",{attrs:{valign:"top","data-col":"2"}},[a("span",{staticClass:"tag",domProps:{textContent:t._s(e.type)}})]):t._e(),a("td",{attrs:{valign:"top","data-col":"5"}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.default||"...",expression:"param.default || '...'"}]},[a("code",{staticClass:"scss"})])])])})),0)])])]):t._e()},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{attrs:{"data-grid":"small-gutter"}},[a("th",{attrs:{"data-col":"5"}},[t._v("Name")]),a("th",{attrs:{"data-col":"2"}},[t._v("Type")]),a("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],r={props:["params","title"]},n=r,l=(a("fc58"),a("2877")),o=Object(l["a"])(n,s,i,!1,null,"8ea7df52",null);e["a"]=o.exports},"2f35":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),a("div",{staticClass:"demo-preview is-relative",staticStyle:{"min-height":"320px"},attrs:{"data-flex":"column center center-items"}},[a("h2",{staticClass:"is-h1 is-ink-super align-center",class:t.previewClass},[a("div",[t._v("watch how ")]),a("div",[t._v("i behave")])]),a("div",{staticClass:"is-theme is-padding-center-2 is-radius is-elevated-16"},[a("div",{staticClass:"nav"},[a("div",{staticClass:"nav__item"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.displaySelected,expression:"displaySelected"}],staticClass:"input",attrs:{id:"displaySelected"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.displaySelected=e.target.multiple?a:a[0]}}},t._l(t.displayOptions,(function(e,s){return a("option",{key:s,domProps:{value:e,textContent:t._s(e.slice(3))}})})),0)]),a("div",{staticClass:"nav__item"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.breakpoint,expression:"breakpoint"}],staticClass:"input",attrs:{id:"displaySelected"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.breakpoint=e.target.multiple?a:a[0]}}},t._l(t.breakpoints,(function(e,s){return a("option",{key:s,domProps:{value:e,textContent:t._s(""===e?"always":e)}})})),0)]),t.breakpoint?a("div",{staticClass:"nav__item"},[a("div",{staticClass:"xui-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.startsFrom,expression:"startsFrom"}],attrs:{type:"checkbox",id:"startsFrom"},domProps:{checked:Array.isArray(t.startsFrom)?t._i(t.startsFrom,null)>-1:t.startsFrom},on:{change:function(e){var a=t.startsFrom,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=t._i(a,r);s.checked?n<0&&(t.startsFrom=a.concat([r])):n>-1&&(t.startsFrom=a.slice(0,n).concat(a.slice(n+1)))}else t.startsFrom=i}}}),a("label",{staticClass:"xui-checkbox__label",attrs:{for:"startsFrom"}},[t._v("starts with bp")])])]):t._e()])])]),a("div",{staticClass:"spacer"}),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[a("code",{staticClass:"html"})]),a("div",{staticClass:"spacer"}),a("params-table",{attrs:{params:t.params}}),a("requires-list",{attrs:{requires:t.requires}})],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titlebar"},[a("h1",[t._v("display helper")])])}],r=(a("a15b"),a("2c22")),n=a("da36"),l={components:{ParamsTable:r["a"],RequiresList:n["a"]},data:function(){return{requires:[{name:"bp()",type:"function",link:"#scroll-to-bp"},{name:"$breakpoints",type:"variable",link:"#scroll-to-breakpoints"}],params:[{name:"$is-display-map",type:"map",default:"(\n    'is-hidden': 'none',\n    'is-block': 'block',\n    'is-flex': 'flex',\n  )"}],displayOptions:["is-hidden","is-block","is-flex"],displaySelected:"is-block",breakpoints:["","@xs","@sm","@md","@lg","@xl","@xxl"],breakpoint:"",startsFrom:!1,previewClass:"is-block",markup:'<div class="is-block"></div>'}},computed:{dirty:function(){return[this.displaySelected,this.breakpoint,this.startsFrom?"+":null].join("")}},watch:{dirty:function(t){this.previewClass=t,this.markup='<div class="'.concat(this.previewClass,'"></div>')}}},o=l,c=(a("43fb"),a("2877")),d=Object(c["a"])(o,s,i,!1,null,"6bcf2582",null);e["default"]=d.exports},"43fb":function(t,e,a){"use strict";var s=a("64c8"),i=a.n(s);i.a},"64c8":function(t,e,a){},"6bb0":function(t,e,a){},"857a":function(t,e,a){var s=a("1d80"),i=/"/g;t.exports=function(t,e,a,r){var n=String(s(t)),l="<"+e;return""!==a&&(l+=" "+a+'="'+String(r).replace(i,"&quot;")+'"'),l+">"+n+"</"+e+">"}},9911:function(t,e,a){"use strict";var s=a("23e7"),i=a("857a"),r=a("af03");s({target:"String",proto:!0,forced:r("link")},{link:function(t){return i(this,"a","href",t)}})},a15b:function(t,e,a){"use strict";var s=a("23e7"),i=a("44ad"),r=a("fc6a"),n=a("a640"),l=[].join,o=i!=Object,c=n("join",",");s({target:"Array",proto:!0,forced:o||!c},{join:function(t){return l.call(r(this),void 0===t?",":t)}})},af03:function(t,e,a){var s=a("d039");t.exports=function(t){return s((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},da36:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.requires?a("div",{staticClass:"is-margin-bottom-8"},[a("h4",{staticClass:"is-h2"},[t._v("requires")]),a("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,(function(e,s){return a("li",{key:s,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[e.link?a("router-link",{staticClass:"code",attrs:{to:t.url(e)},domProps:{textContent:t._s(e.name)}}):a("span",{staticClass:"code",domProps:{textContent:t._s(e.name)}})],1)})),0)]):t._e()},i=[],r=(a("9911"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),n=r,l=a("2877"),o=Object(l["a"])(n,s,i,!1,null,null,null);e["a"]=o.exports},fc58:function(t,e,a){"use strict";var s=a("6bb0"),i=a.n(s);i.a}}]);