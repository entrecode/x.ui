(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73ee005a"],{"2c22":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.params?e("div",{staticClass:"params-table"},[e("h4",{staticClass:"is-h4",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,function(a,i){return e("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(a.name)}}),a.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(a.description)}}):t._e()]),a.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(a.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])}),0)])]):t._e()},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],s={props:["params","title"]},o=s,n=(e("744b"),e("2877")),l=Object(n["a"])(o,i,r,!1,null,"834bd208",null);a["a"]=l.exports},"744b":function(t,a,e){"use strict";var i=e("7a1d"),r=e.n(i);r.a},"7a1d":function(t,a,e){},"8e70":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[t._m(0),e("div",{staticClass:"demo-preview has-padding-5 has-margin-bottom-5 is-relative"},[e("div",{attrs:{"data-grid":"center"}},[e("div",{staticClass:"demo-transition",attrs:{"data-col":["img-crop-16-9"===t.imgCrop||"img-crop-golden"===t.imgCrop||"img-crop-silver"===t.imgCrop?"8":"img-crop-ultrawide"===t.imgCrop?"12":"4"]}},[e("div",{staticClass:"demo-transition",class:t.imgCrop},[e("img",{attrs:{src:"sample-image.jpg"}})])])]),e("div",{staticClass:"demo-preview-settings is-absolute is-fab-s is-theme is-elevated-16 has-padding-middle-2 has-padding-center-3 is-round"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.imgCrop,expression:"imgCrop"}],staticClass:"input input_round",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.imgCrop=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"img-crop-1-1"}},[t._v("square")]),e("option",{attrs:{value:"img-crop-3-4"}},[t._v("3:4")]),e("option",{attrs:{value:"img-crop-4-3"}},[t._v("4:3")]),e("option",{attrs:{value:"img-crop-16-9"}},[t._v("16:9")]),e("option",{attrs:{value:"img-crop-golden"}},[t._v("golden ratio")]),e("option",{attrs:{value:"img-crop-silver"}},[t._v("silver ratio")]),e("option",{attrs:{value:"img-crop-ultrawide"}},[t._v("ultrawide")])])])]),e("div",{attrs:{"data-grid":"center"}},[e("div",{attrs:{"data-col":"10@md 8@lg"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.imgCropMarkup,expression:"imgCropMarkup"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"divider"}),e("params-table",{attrs:{params:t.imgCropParams}})],1)])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"has-padding-center-3"},[e("h2",[t._v("img-crop")])])}],s=e("2c22"),o={name:"Media",components:{ParamsTable:s["a"]},data:function(){return{imgCrop:"img-crop-1-1",imgCropParams:[{name:"$img-crop-ratio",type:"map",description:"ratio map declaring the class postfix and the ratio (x, y)",default:"(\n  '1-1': (1,1,),\n  '3-4': (3,4,),\n  '4-3': (4,3,),\n  '16-9': (16,9,),\n  'golden': (1.618,1,),\n  'silver': (2.414,1,),\n  'ultrawide': (3.6,1,),\n)"}],imgCropMarkup:'<div class="img-crop-1-1">\n  <img src="..." />\n</div>'}},watch:{imgCrop:function(t){this.imgCropMarkup='<div class="'.concat(t,'">\n  <img src="..." />\n</div>')}}},n=o,l=e("2877"),c=Object(l["a"])(n,i,r,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-73ee005a.7385fd19.js.map