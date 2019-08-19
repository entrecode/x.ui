(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9bdf9c34"],{"22e3":function(t,a,e){},"2c22":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"params-table"},[e("h4",{staticClass:"is-h4 is-padding-left-5",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,function(a,s){return e("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])}),0)])])]):t._e()},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],i={props:["params","title"]},n=i,l=(e("e7db"),e("2877")),c=Object(l["a"])(n,s,r,!1,null,"e7da4c6c",null);a["a"]=c.exports},"386b":function(t,a,e){var s=e("5ca1"),r=e("79e5"),i=e("be13"),n=/"/g,l=function(t,a,e,s){var r=String(i(t)),l="<"+a;return""!==e&&(l+=" "+e+'="'+String(s).replace(n,"&quot;")+'"'),l+">"+r+"</"+a+">"};t.exports=function(t,a){var e={};e[t]=a(l),s(s.P+s.F*r(function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",e)}},"40ce":function(t,a,e){},b54a:function(t,a,e){"use strict";e("386b")("link",function(t){return function(a){return t(this,"a","href",a)}})},b85a:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[e("div",{staticClass:"align-center is-padding-bottom-5"},[e("div",{attrs:{"data-grid":"small-gutter"}},[e("div",{attrs:{"data-col":"fit"}},[e("div",{staticClass:"hamburger",class:{"is-active":t.isActive},on:{click:function(a){t.isActive=!t.isActive}}})])])])]),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.params,title:"default params"}}),e("div",{staticClass:"spacer"}),e("requires-list",{attrs:{requires:t.requires}})],1)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"titlebar"},[e("h1",[t._v("hamburger")])])}],i=e("2c22"),n=e("da36"),l={name:"Button",components:{ParamsTable:i["a"],RequiresList:n["a"]},data:function(){return{isActive:!1,markup:'<a class="hamburger"></a>',params:[{name:"$hamburger-spacing",type:"array",default:"$btn-spacing  // 0"},{name:"$hamburger-width",type:"number",default:"16"},{name:"$hamburger-background",type:"color",default:"transparent"},{name:"$hamburger-line-weight",type:"number",description:"line strength of hamburger layers",default:"2"},{name:"$hamburger-line-spacing",type:"number",description:"spacing of hamburger layers",default:"4"},{name:"$hamburger-line-color",type:"color",default:"$link"},{name:"$hamburger-style",type:"map",default:""}],requires:[{name:"rem()",type:"function",link:"#scroll-to-rem"},{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"},{name:"metrics()",type:"mixin",link:"#scroll-to-metrics"},{name:"_btn-reset",type:"mixin"}]}},watch:{isActive:function(){this.markup='<a class="hamburger'.concat(this.isActive?" is-active":"",'"></a>')}}},c=l,o=e("2877"),u=Object(o["a"])(c,s,r,!1,null,"d3aa17be",null);a["default"]=u.exports},bb3a:function(t,a,e){"use strict";var s=e("40ce"),r=e.n(s);r.a},da36:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.requires?e("div",{staticClass:"requires-list"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(a,s){return e("li",{key:s,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[a.link?e("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{to:t.url(a)},domProps:{textContent:t._s(a.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(a.name)}})],1)}),0)]):t._e()},r=[],i=(e("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),n=i,l=(e("bb3a"),e("2877")),c=Object(l["a"])(n,s,r,!1,null,"7bee28eb",null);a["a"]=c.exports},e7db:function(t,a,e){"use strict";var s=e("22e3"),r=e.n(s);r.a}}]);