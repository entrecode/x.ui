(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bfb782b"],{"2c22":function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.params?e("div",{staticClass:"params-table"},[e("h4",{staticClass:"is-h4",domProps:{textContent:a._s(a.title?a.title:"parameters")}}),e("table",{staticClass:"table"},[a._m(0),e("tbody",a._l(a.params,function(t,s){return e("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:a._s(t.name)}}),t.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:a._s(t.description)}}):a._e()]),t.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:a._s(t.type)}})]):a._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])}),0)])]):a._e()},n=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[a._v("Name")]),e("th",{attrs:{"data-col":"2"}},[a._v("Type")]),e("th",{attrs:{"data-col":"5"}},[a._v("Default Value")])])])}],i={props:["params","title"]},r=i,l=(e("744b"),e("2877")),c=Object(l["a"])(r,s,n,!1,null,"834bd208",null);t["a"]=c.exports},"386b":function(a,t,e){var s=e("5ca1"),n=e("79e5"),i=e("be13"),r=/"/g,l=function(a,t,e,s){var n=String(i(a)),l="<"+t;return""!==e&&(l+=" "+e+'="'+String(s).replace(r,"&quot;")+'"'),l+">"+n+"</"+t+">"};a.exports=function(a,t){var e={};e[a]=t(l),s(s.P+s.F*n(function(){var t=""[a]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",e)}},"40ce":function(a,t,e){},"744b":function(a,t,e){"use strict";var s=e("7a1d"),n=e.n(s);n.a},"7a1d":function(a,t,e){},b454:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",[e("div",{attrs:{"data-col":"10@md 8@lg"}},[a._m(0),e("div",{staticClass:"demo-preview is-padding-5",attrs:{"data-flex":"column center-items"}},[e("div",{staticClass:"is-padding-5"},[e("ul",{staticClass:"nav demo-transition",class:a.computedClasses},[a._m(1),a._m(2),e("li",{staticClass:"nav__divider"}),a._m(3)])]),e("div",{staticClass:"is-theme is-margin-top-5 is-padding-center-2 is-round is-elevated-16"},[e("div",{staticClass:"nav"},[e("div",{staticClass:"nav__item"},[e("div",{staticClass:"xui-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.navStyle,expression:"navStyle"}],attrs:{type:"checkbox",id:"navStyle"},domProps:{checked:Array.isArray(a.navStyle)?a._i(a.navStyle,null)>-1:a.navStyle},on:{change:function(t){var e=a.navStyle,s=t.target,n=!!s.checked;if(Array.isArray(e)){var i=null,r=a._i(e,i);s.checked?r<0&&(a.navStyle=e.concat([i])):r>-1&&(a.navStyle=e.slice(0,r).concat(e.slice(r+1)))}else a.navStyle=n}}}),e("label",{staticClass:"xui-checkbox__label",attrs:{for:"navStyle"}},[a._v("stacked")])])])])])]),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.markup,expression:"markup"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:a.params}}),e("div",{staticClass:"divider"}),e("params-table",{attrs:{params:a.stackedParams,title:"stacked params"}}),e("div",{staticClass:"divider"}),e("params-table",{attrs:{params:a.itemParams,title:"item params"}}),e("div",{staticClass:"divider"}),e("params-table",{attrs:{params:a.linkParams,title:"link params"}}),e("div",{staticClass:"divider"}),e("params-table",{attrs:{params:a.dividerParams,title:"divider params"}}),e("div",{staticClass:"spacer"}),e("requires-list",{attrs:{requires:a.requires}})],1)])},n=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"titlebar"},[e("h1",[a._v("nav")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("li",{staticClass:"nav__item"},[e("a",{attrs:{href:""}},[a._v("Navlink")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("li",{staticClass:"nav__item"},[e("a",{attrs:{href:""}},[a._v("Navlink")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("li",{staticClass:"nav__item"},[e("a",{staticClass:"btn"},[a._v("Navlink")])])}],i=e("2c22"),r=e("da36"),l={components:{RequiresList:r["a"],ParamsTable:i["a"]},data:function(){return{navStyle:"",markup:'<ul class="nav">\n  <li class="nav__item">\n  </li>\n  <li class="nav__divider"></li>\n  <li class="nav__item">\n  </li>\n</ul>',params:[{name:"$nav-padding",type:"array",default:"0"},{name:"$nav-spacing",type:"array",default:"0"},{name:"$nav-style",type:"map"}],stackedParams:[{name:"$nav-stacked-padding",type:"array",default:"0"},{name:"$nav-stacked-spacing",type:"array",default:"0"},{name:"$nav-stacked-style",type:"map"},{name:"$nav-stacked-item-padding",type:"array",default:"$nav-item-padding"}],linkParams:[{name:"$nav-link-radius",type:"array",default:"4"},{name:"$nav-link-spacing",type:"array",default:"0"},{name:"$nav-link-padding",type:"array",default:"4"},{name:"$nav-link-font-size",type:"number",default:"$base-font-size"},{name:"$nav-link-background",type:"color",default:"none"},{name:"$nav-link-color",type:"color",default:"$text"},{name:"$nav-link-style",type:"array",default:""},{name:"$nav-link-hover-background",type:"color",default:"$nav-link-background"},{name:"$nav-link-hover-color",type:"color",default:"$nav-link-color"},{name:"$nav-link-hover-style",type:"array",default:""},{name:"$nav-link-active-background",type:"color",default:"$nav-link-hover-background"},{name:"$nav-link-active-color",type:"color",default:"$nav-link-hover-color"},{name:"$nav-link-active-style",type:"array",default:""}],itemParams:[{name:"$nav-item-padding",type:"array",default:"8"}],dividerParams:[{name:"$nav-divider-color",type:"color",default:"$base-divider-color // rgba($text, .1)"},{name:"$nav-divider-size",type:"number",default:"1"},{name:"$nav-divider-spacing",type:"array",default:"$nav-item-padding"}],requires:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"inject-style()",type:"mixin",link:"#scroll-to-inject-style"},{name:"rem()",type:"function",link:"#scroll-to-rem"},{name:"em()",type:"function",link:"#scroll-to-em"}]}},computed:{computedClasses:function(){return[this.navStyle?" nav_stacked":null].join("")}},watch:{computedClasses:function(a){this.markup='<ul class="nav'.concat(this.computedClasses,'">\n  <li class="nav__item">\n  </li>\n  <li class="nav__divider"></li>\n  <li class="nav__item">\n  </li>\n</ul>')}}},c=l,o=e("2877"),d=Object(o["a"])(c,s,n,!1,null,"e7c18f76",null);t["default"]=d.exports},b54a:function(a,t,e){"use strict";e("386b")("link",function(a){return function(t){return a(this,"a","href",t)}})},bb3a:function(a,t,e){"use strict";var s=e("40ce"),n=e.n(s);n.a},da36:function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.requires?e("div",{staticClass:"requires-list"},[e("h4",{staticClass:"is-h2"},[a._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},a._l(a.requires,function(t,s){return e("li",{key:s,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[t.link?e("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{to:a.url(t)},domProps:{textContent:a._s(t.name)}}):e("span",{staticClass:"code",domProps:{textContent:a._s(t.name)}})],1)}),0)]):a._e()},n=[],i=(e("b54a"),{props:["requires"],methods:{url:function(a){return"/"+a.type+"s"+a.link}}}),r=i,l=(e("bb3a"),e("2877")),c=Object(l["a"])(r,s,n,!1,null,"7bee28eb",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-2bfb782b.438d88dc.js.map