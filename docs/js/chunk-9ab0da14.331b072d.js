(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ab0da14"],{"2c22":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.params?a("div",{staticClass:"is-margin-bottom-5 is-padding-bottom-5 is-border-bottom"},[a("h2",{staticClass:"is-h3",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),a("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.params,function(e,i){return a("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[a("td",{attrs:{valign:"top","data-col":"5"}},[a("code",{staticClass:"is-bold",domProps:{textContent:t._s(e.name)}}),e.description?a("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(e.description)}}):t._e()]),e.type?a("td",{attrs:{valign:"top","data-col":"2"}},[a("span",{staticClass:"tag",domProps:{textContent:t._s(e.type)}})]):t._e(),a("td",{attrs:{valign:"top","data-col":"5"}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.default||"...",expression:"param.default || '...'"}]},[a("code",{staticClass:"scss"})])])])}),0)])])]):t._e()},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{attrs:{"data-grid":"small-gutter"}},[a("th",{attrs:{"data-col":"5"}},[t._v("Name")]),a("th",{attrs:{"data-col":"2"}},[t._v("Type")]),a("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],n={props:["params","title"]},r=n,l=(a("dd8e"),a("2877")),o=Object(l["a"])(r,i,s,!1,null,"40297bed",null);e["a"]=o.exports},"386b":function(t,e,a){var i=a("5ca1"),s=a("79e5"),n=a("be13"),r=/"/g,l=function(t,e,a,i){var s=String(n(t)),l="<"+e;return""!==a&&(l+=" "+a+'="'+String(i).replace(r,"&quot;")+'"'),l+">"+s+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(l),i(i.P+i.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",a)}},"917c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),a("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},[a("div",{domProps:{innerHTML:t._s(t.markup)}}),a("div",{staticClass:"is-theme is-margin-top-5 is-padding-center-2 is-radius is-elevated-16"},[a("div",{staticClass:"nav",attrs:{"data-flex":"center"}},[a("div",{staticClass:"nav__item",attrs:{"data-col":"6"}},[a("div",{staticClass:"field-"},[a("label",{staticClass:"field-group__label align-center"},[a("div",{staticClass:"tag tag_big",class:{tag_link:t.elevation>-1}},[t._v(t._s(t.elevation>-1?t.elevation:"-"))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.elevation,expression:"elevation"}],staticClass:"range-slider",attrs:{type:"range",min:"-1",max:"24"},domProps:{value:t.elevation},on:{__r:function(e){t.elevation=e.target.value}}}),a("div",{staticClass:"field-group__info align-center"},[t._v("elevation")])])]),a("div",{staticClass:"nav__item",attrs:{"data-col":"fit","data-flex":"center"}},[a("div",{staticClass:"field-"},[a("label",{staticClass:"field-group__label align-center"},[a("div",{staticClass:"tag tag_big",class:{tag_link:t.hoverElevation>-1}},[t._v(t._s(t.hoverElevation>-1?t.hoverElevation:"-"))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.hoverElevation,expression:"hoverElevation"}],staticClass:"range-slider",attrs:{type:"range",min:"-1",max:"24"},domProps:{value:t.hoverElevation},on:{__r:function(e){t.hoverElevation=e.target.value}}}),a("div",{staticClass:"field-group__info align-center"},[t._v("hover:elevation")])])])])])]),a("div",{staticClass:"spacer"}),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[a("code",{staticClass:"html"})]),a("div",{staticClass:"spacer"}),a("params-table",{attrs:{params:t.params}}),a("requires-list",{attrs:{requires:t.requires}})],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titlebar"},[a("h1",[t._v("is-elevated")])])}],n=a("2c22"),r=a("da36"),l={name:"IsElevated",components:{ParamsTable:n["a"],RequiresList:r["a"]},data:function(){return{markup:'<div class="is-padding-5 is-elevated-4">\n  <h1>watch me elevate</h1>\n</div>',elevation:4,hoverElevation:-1,params:[{name:"$elevation-color",type:"color",default:"#000"},{name:"$elevation-opacity",type:"number",default:"1",description:"multiplier for umbra (&times; 0.1), penumbra (&times; 0.08) and ambient (&times; 0.06)"},{name:"$elevation-transition-duration",type:"ms | s",default:"280ms"},{name:"$elevation-transition-timing-function",type:"string",default:"cubic-bezier(0.4, 0, 0.2, 1)"}],requires:[{name:"elevation()",type:"mixin"},{name:"elevation-transition()",type:"mixin"}]}},computed:{classes:function(){return[this.elevation>1?"is-elevated-"+this.elevation:null,this.hoverElevation>1?"hover:is-elevated-"+this.hoverElevation:null].join(" ").trim()}},watch:{classes:function(t){this.markup='<div class="is-padding-5 '.concat(t,'">\n  <h1>watch me elevate</h1>\n</div>')}}},o=l,c=a("2877"),d=Object(c["a"])(o,i,s,!1,null,"103d9820",null);e["default"]=d.exports},b54a:function(t,e,a){"use strict";a("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},da36:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.requires?a("div",{staticClass:"is-margin-bottom-8"},[a("h4",{staticClass:"is-h2"},[t._v("requires")]),a("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(e,i){return a("li",{key:i,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[e.link?a("router-link",{staticClass:"code",attrs:{to:t.url(e)},domProps:{textContent:t._s(e.name)}}):a("span",{staticClass:"code",domProps:{textContent:t._s(e.name)}})],1)}),0)]):t._e()},s=[],n=(a("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),r=n,l=a("2877"),o=Object(l["a"])(r,i,s,!1,null,null,null);e["a"]=o.exports},dd8e:function(t,e,a){"use strict";var i=a("e3f6"),s=a.n(i);s.a},e3f6:function(t,e,a){}}]);