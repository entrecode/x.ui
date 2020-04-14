(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c46c744c"],{"2c22":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"is-margin-bottom-5 is-padding-bottom-5 is-border-bottom"},[e("h2",{staticClass:"is-h3",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,(function(a,s){return e("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])})),0)])])]):t._e()},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],l={props:["params","title"]},r=l,n=(e("fc58"),e("2877")),o=Object(n["a"])(r,s,i,!1,null,"8ea7df52",null);a["a"]=o.exports},"560c":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[e("div",{domProps:{innerHTML:t._s(t.markup)}}),e("div",{staticClass:"is-theme is-margin-top-5 is-padding-center-2 is-radius is-elevated-16"},[e("div",{staticClass:"nav",attrs:{"data-flex":"center"}},[e("div",{staticClass:"nav__item",attrs:{"data-col":"6"}},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"input-group__addon",attrs:{for:"alertSize"}},[e("svg",{staticClass:"ixo is-ink-link"},[e("use",{attrs:{"xlink:href":"#grid-half"}})])]),e("div",{staticClass:"x-space-1"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.col1,expression:"col1"}],staticClass:"input",staticStyle:{width:"80px"},attrs:{type:"text",placeholder:"auto"},domProps:{value:t.col1},on:{input:function(a){a.target.composing||(t.col1=a.target.value)}}}),e("div",{staticClass:"x-space-1"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.col2,expression:"col2"}],staticClass:"input",staticStyle:{width:"80px"},attrs:{type:"text",placeholder:"auto"},domProps:{value:t.col2},on:{input:function(a){a.target.composing||(t.col2=a.target.value)}}}),e("div",{staticClass:"x-space-1"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.col3,expression:"col3"}],staticClass:"input",staticStyle:{width:"80px"},attrs:{type:"text",placeholder:"auto"},domProps:{value:t.col3},on:{input:function(a){a.target.composing||(t.col3=a.target.value)}}})])]),e("div",{staticClass:"nav__item",attrs:{"data-col":"fit"}},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"input-group__addon",attrs:{for:"alerStyle"}},[e("svg",{staticClass:"ixo is-ink-link"},[e("use",{attrs:{"xlink:href":"#color-palette"}})])]),e("div",{staticClass:"input-group__addon"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.style,expression:"style"}],staticClass:"input input_round",attrs:{id:"alerStyle"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.style=a.target.multiple?e:e[0]}}},t._l(t.styles,(function(a,s){return e("option",{key:s,domProps:{value:a,textContent:t._s(""===a?"default":a.slice(6))}})})),0)])])])])])]),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.params}}),e("requires-list",{attrs:{requires:t.requires}})],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"titlebar"},[e("h1",[t._v("table")])])}],l=(e("99af"),e("a15b"),e("2c22")),r=e("da36"),n={components:{ParamsTable:l["a"],RequiresList:r["a"]},data:function(){return{params:[{name:"$table-spacing",type:"array",default:"0 0 16 0"},{name:"$table-border",type:"array",default:"1 solid $base-divider-color"},{name:"$table-cell-padding",type:"array",default:"8"}],requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"}],styles:["","table_bordered","table_clear"],style:"",col1:null,col2:null,col3:null,markup:'<table class="table">\n  <thead>\n    <tr>\n      <th>title</th>\n      <th>description</th>\n      <th>date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Outcomes gender rights</td>\n      <td>\n        global social entrepreneurship mobilize data.\n      </td>\n      <td>17-11-20</td>\n    </tr>\n  </tbody>\n</table>'}},computed:{cols:function(){return[this.col1+this.col1+this.col3+this.style].join("")}},watch:{cols:function(){this.markup='<table class="table'.concat(this.style?" "+this.style:"",'">\n  <thead>\n    <tr').concat(this.col1||this.col2||this.col3?" data-flex":"",">\n      <th").concat(this.col1?' data-col="'+this.col1+'"':"",">title</th{}>\n      <th").concat(this.col2?' data-col="'+this.col2+'"':"",">description</th>\n      <th").concat(this.col3?' data-col="'+this.col3+'"':"",">date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr").concat(this.col1||this.col2||this.col3?" data-flex":"",">\n      <td").concat(this.col1?' data-col="'+this.col1+'"':"",">Outcomes gender rights</td>\n      <td").concat(this.col2?' data-col="'+this.col2+'"':"",">\n        global social entrepreneurship mobilize data.\n      </td>\n      <td").concat(this.col3?' data-col="'+this.col3+'"':"",">17-11-20</td>\n    </tr>\n  </tbody>\n</table>")}}},o=n,c=e("2877"),d=Object(c["a"])(o,s,i,!1,null,"4f4b7676",null);a["default"]=d.exports},"6bb0":function(t,a,e){},"857a":function(t,a,e){var s=e("1d80"),i=/"/g;t.exports=function(t,a,e,l){var r=String(s(t)),n="<"+a;return""!==e&&(n+=" "+e+'="'+String(l).replace(i,"&quot;")+'"'),n+">"+r+"</"+a+">"}},9911:function(t,a,e){"use strict";var s=e("23e7"),i=e("857a"),l=e("af03");s({target:"String",proto:!0,forced:l("link")},{link:function(t){return i(this,"a","href",t)}})},a15b:function(t,a,e){"use strict";var s=e("23e7"),i=e("44ad"),l=e("fc6a"),r=e("a640"),n=[].join,o=i!=Object,c=r("join",",");s({target:"Array",proto:!0,forced:o||!c},{join:function(t){return n.call(l(this),void 0===t?",":t)}})},af03:function(t,a,e){var s=e("d039");t.exports=function(t){return s((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},da36:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.requires?e("div",{staticClass:"is-margin-bottom-8"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,(function(a,s){return e("li",{key:s,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[a.link?e("router-link",{staticClass:"code",attrs:{to:t.url(a)},domProps:{textContent:t._s(a.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(a.name)}})],1)})),0)]):t._e()},i=[],l=(e("9911"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),r=l,n=e("2877"),o=Object(n["a"])(r,s,i,!1,null,null,null);a["a"]=o.exports},fc58:function(t,a,e){"use strict";var s=e("6bb0"),i=e.n(s);i.a}}]);