(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-576757b2"],{"22e3":function(t,e,i){},"2c22":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.params?i("div",{staticClass:"params-table"},[i("h4",{staticClass:"is-h4 is-padding-left-5",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),i("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[i("table",{staticClass:"table"},[t._m(0),i("tbody",t._l(t.params,function(e,s){return i("tr",{key:s,attrs:{"data-grid":"small-gutter"}},[i("td",{attrs:{valign:"top","data-col":"5"}},[i("code",{staticClass:"is-bold",domProps:{textContent:t._s(e.name)}}),e.description?i("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(e.description)}}):t._e()]),e.type?i("td",{attrs:{valign:"top","data-col":"2"}},[i("span",{staticClass:"tag",domProps:{textContent:t._s(e.type)}})]):t._e(),i("td",{attrs:{valign:"top","data-col":"5"}},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.default||"...",expression:"param.default || '...'"}]},[i("code",{staticClass:"scss"})])])])}),0)])])]):t._e()},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",{attrs:{"data-grid":"small-gutter"}},[i("th",{attrs:{"data-col":"5"}},[t._v("Name")]),i("th",{attrs:{"data-col":"2"}},[t._v("Type")]),i("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],r={props:["params","title"]},l=r,n=(i("e7db"),i("2877")),o=Object(n["a"])(l,s,a,!1,null,"e7da4c6c",null);e["a"]=o.exports},"386b":function(t,e,i){var s=i("5ca1"),a=i("79e5"),r=i("be13"),l=/"/g,n=function(t,e,i,s){var a=String(r(t)),n="<"+e;return""!==i&&(n+=" "+i+'="'+String(s).replace(l,"&quot;")+'"'),n+">"+a+"</"+e+">"};t.exports=function(t,e){var i={};i[t]=e(n),s(s.P+s.F*a(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",i)}},"40ce":function(t,e,i){},b54a:function(t,e,i){"use strict";i("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},bb3a:function(t,e,i){"use strict";var s=i("40ce"),a=i.n(s);a.a},da36:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.requires?i("div",{staticClass:"requires-list"},[i("h4",{staticClass:"is-h2"},[t._v("requires")]),i("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(e,s){return i("li",{key:s,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[e.link?i("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{to:t.url(e)},domProps:{textContent:t._s(e.name)}}):i("span",{staticClass:"code",domProps:{textContent:t._s(e.name)}})],1)}),0)]):t._e()},a=[],r=(i("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),l=r,n=(i("bb3a"),i("2877")),o=Object(n["a"])(l,s,a,!1,null,"7bee28eb",null);e["a"]=o.exports},e685:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),i("div",{staticClass:"is-relative",class:{"demo-fullscreen":t.openDemo},attrs:{"data-flex":"center-items center"}},[i("div",{staticClass:"btn btn_minor btn_square is-absolute is-fab-ne is-layer-10",on:{click:function(e){t.openDemo=!t.openDemo}}},[i("svg",{staticClass:"ixo"},[i("use",{attrs:{"xlink:href":"#fullscreen"}})])]),i("div",{staticClass:"demo-preview is-padding-8",class:t.previewClass,attrs:{"data-flex":"center-items center"}},[i("div",{staticClass:"is-theme is-padding-5 is-elevated-16"},[i("div",{staticClass:"field-group"},[i("div",{staticClass:"xui-toggle"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.isWidthType,expression:"isWidthType"}],attrs:{id:"isWidthType",type:"checkbox"},domProps:{checked:Array.isArray(t.isWidthType)?t._i(t.isWidthType,null)>-1:t.isWidthType},on:{change:function(e){var i=t.isWidthType,s=e.target,a=!!s.checked;if(Array.isArray(i)){var r=null,l=t._i(i,r);s.checked?l<0&&(t.isWidthType=i.concat([r])):l>-1&&(t.isWidthType=i.slice(0,l).concat(i.slice(l+1)))}else t.isWidthType=a}}}),i("label",{staticClass:"xui-toggle__label",attrs:{for:"isWidthType"}},[i("div",{staticClass:"xui-toggle__switch"}),t._v("\n                "+t._s(this.isWidthType?"fixed":"flexibel")+"\n              ")])])]),i("div",{staticClass:"field-group"},[i("label",{staticClass:"field-group__label",attrs:{for:"isWidthRelation"}},[t._v("relation")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.isWidthRelation,expression:"isWidthRelation"}],staticClass:"input",attrs:{id:"isWidthRelation"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.isWidthRelation=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:""}},[t._v("relative")]),i("option",{attrs:{value:"-vw"}},[t._v("viewport width")]),i("option",{attrs:{value:"-vh"}},[t._v("viewport height")])])]),i("div",{staticClass:"field-group"},[i("label",{staticClass:"field-group__label",attrs:{for:"isWidthRatio"}},[t._v("ratio")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.isWidthRatio,expression:"isWidthRatio"}],staticClass:"input",attrs:{id:"isWidthRatio"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.isWidthRatio=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"-full"}},[t._v("full")]),i("option",{attrs:{value:"-1-4"}},[t._v("1:4")]),i("option",{attrs:{value:"-half"}},[t._v("half")]),i("option",{attrs:{value:"-3-4"}},[t._v("3:4")]),i("option",{attrs:{value:"-golden"}},[t._v("golden")]),i("option",{attrs:{value:"-16-9"}},[t._v("16:9")])])])])])]),i("div",{staticClass:"spacer"}),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[i("code",{staticClass:"html"})]),i("div",{staticClass:"spacer"}),i("params-table",{attrs:{params:t.params}}),i("div",{staticClass:"spacer"}),i("requires-list",{attrs:{requires:t.requires}})],1)])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"titlebar"},[i("h1",[t._v("is-width")])])}],r=i("2c22"),l=i("da36"),n={components:{ParamsTable:r["a"],RequiresList:l["a"]},data:function(){return{params:[{name:"$is-width-map",type:"map",default:"(\n  full: 100,\n  '1-4': 25,\n  half: 50,\n  '3-4': 75,\n  '16-9': 56.25,\n  golden: 61.803,\n)"}],requires:[{name:"set-breakpoints()",type:"mixin",link:"#scroll-to-set-breakpoints"}],openDemo:!1,isWidthType:!0,previewClass:"is-width-full",isWidthRatio:"-full",isWidthRelation:"",markup:'<div class="is-width-full">...</div>'}},computed:{dirty:function(){return[this.isWidthType?"is-width":"is-min-width",this.isWidthRelation,this.isWidthRatio].join("")}},watch:{dirty:function(t){this.previewClass=t,this.markup='<div class="'.concat(this.previewClass,'"></div>')}}},o=n,c=i("2877"),d=Object(c["a"])(o,s,a,!1,null,"deed44a6",null);e["default"]=d.exports},e7db:function(t,e,i){"use strict";var s=i("22e3"),a=i.n(s);a.a}}]);