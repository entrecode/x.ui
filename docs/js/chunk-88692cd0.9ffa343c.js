(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88692cd0"],{"386b":function(t,i,e){var s=e("5ca1"),a=e("79e5"),r=e("be13"),n=/"/g,o=function(t,i,e,s){var a=String(r(t)),o="<"+i;return""!==e&&(o+=" "+e+'="'+String(s).replace(n,"&quot;")+'"'),o+">"+a+"</"+i+">"};t.exports=function(t,i){var e={};e[t]=i(o),s(s.P+s.F*a(function(){var i=""[t]('"');return i!==i.toLowerCase()||i.split('"').length>3}),"String",e)}},"40ce":function(t,i,e){},8511:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[e("div",{attrs:{"data-col":"10 8@xl"}},[t._m(0),e("div",{staticClass:"is-relative"},[e("div",{staticClass:"is-theme is-padding-center-2 is-round is-elevated-16 is-absolute is-placed-0 is-layer-10"},[e("div",{staticClass:"nav"},[e("div",{staticClass:"nav__item"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.behavior,expression:"behavior"}],staticClass:"input",attrs:{id:"behavior"},on:{change:function(i){var e=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){var i="_value"in t?t._value:t.value;return i});t.behavior=i.target.multiple?e:e[0]}}},t._l(t.behaviors,function(i,s){return e("option",{key:s,domProps:{value:i,textContent:t._s(i)}})}),0)]),e("div",{directives:[{name:"show",rawName:"v-show",value:"clipped"!==t.behavior,expression:"behavior !== 'clipped'"}],staticClass:"nav__item"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.axis,expression:"axis"}],staticClass:"input",attrs:{id:"axis"},on:{change:function(i){var e=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){var i="_value"in t?t._value:t.value;return i});t.axis=i.target.multiple?e:e[0]}}},t._l(t.axes,function(i,s){return e("option",{key:s,domProps:{value:i,textContent:t._s(i)}})}),0)]),e("div",{directives:[{name:"show",rawName:"v-show",value:"clipped"!==t.behavior,expression:"behavior !== 'clipped'"}],staticClass:"nav__item"},[e("div",{staticClass:"xui-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isContain,expression:"isContain"}],attrs:{type:"checkbox",id:"isContain"},domProps:{checked:Array.isArray(t.isContain)?t._i(t.isContain,null)>-1:t.isContain},on:{change:function(i){var e=t.isContain,s=i.target,a=!!s.checked;if(Array.isArray(e)){var r=null,n=t._i(e,r);s.checked?n<0&&(t.isContain=e.concat([r])):n>-1&&(t.isContain=e.slice(0,n).concat(e.slice(n+1)))}else t.isContain=a}}}),e("label",{staticClass:"xui-checkbox__label",attrs:{for:"isContain"}},[t._v("contain")])])])])]),e("div",{staticClass:"is-height-vh-golden",class:t.previewClass,attrs:{"data-col":""}},[e("img",{staticStyle:{width:"120vw",height:"auto",position:"relative"},attrs:{src:"sample-image.jpg"}})]),e("div",{staticClass:"is-fab-s is-ink-invert is-absolute",staticStyle:{"font-size":"48px"},style:"clipped"===t.behavior||"x"===t.axis?"opacity: .2":""},[e("svg",{staticClass:"ixo"},[e("use",{attrs:{"xlink:href":"#arrow-down"}})])]),e("div",{staticClass:"is-fab-e is-ink-invert is-absolute",staticStyle:{"font-size":"48px"},style:"clipped"===t.behavior||"y"===t.axis?"opacity: .2":""},[e("svg",{staticClass:"ixo"},[e("use",{attrs:{"xlink:href":"#arrow-right"}})])])]),e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.markup,expression:"markup"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("requires-list",{attrs:{requires:t.requires}})],1)])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"titlebar"},[e("h1",[t._v("overflow helper")])])}],r=e("da36"),n={components:{RequiresList:r["a"]},data:function(){return{requires:[{name:"is-scrollable()",type:"mixins",link:"#scroll-to-is-scrollable"}],behaviors:["scroll","auto","clipped"],behavior:"scroll",axes:["both","x","y"],axis:"y",isContain:!0,previewClass:"is-scrollable-y-contain",markup:'<div class="is-scrollable-y-contain"></div>'}},computed:{dirty:function(){return"clipped"===this.behavior?"is-clipped":["scroll"===this.behavior?"is-scrollable":"is-scrollable-auto","both"===this.axis?"":"-"+this.axis,this.isContain?"-contain":null].join("")}},watch:{dirty:function(t){this.previewClass=t,this.markup='<div class="'.concat(this.previewClass,'"></div>')}}},o=n,l=e("2877"),c=Object(l["a"])(o,s,a,!1,null,"ff231f7e",null);i["default"]=c.exports},b54a:function(t,i,e){"use strict";e("386b")("link",function(t){return function(i){return t(this,"a","href",i)}})},bb3a:function(t,i,e){"use strict";var s=e("40ce"),a=e.n(s);a.a},da36:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.requires?e("div",{staticClass:"requires-list"},[e("h4",{staticClass:"is-h2"},[t._v("requires")]),e("ul",{attrs:{"data-grid":"small-gutter"}},t._l(t.requires,function(i,s){return e("li",{key:s,staticClass:"is-margin-bottom-2",attrs:{"data-col":"fit"}},[i.link?e("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"code",attrs:{to:t.url(i)},domProps:{textContent:t._s(i.name)}}):e("span",{staticClass:"code",domProps:{textContent:t._s(i.name)}})],1)}),0)]):t._e()},a=[],r=(e("b54a"),{props:["requires"],methods:{url:function(t){return"/"+t.type+"s"+t.link}}}),n=r,o=(e("bb3a"),e("2877")),l=Object(o["a"])(n,s,a,!1,null,"7bee28eb",null);i["a"]=l.exports}}]);
//# sourceMappingURL=chunk-88692cd0.9ffa343c.js.map