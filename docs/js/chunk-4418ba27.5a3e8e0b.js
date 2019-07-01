(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4418ba27"],{"2c22":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.params?e("div",{staticClass:"params-table"},[e("h4",{staticClass:"is-h4",domProps:{textContent:t._s(t.title?t.title:"parameters")}}),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.params,function(n,i){return e("tr",{key:i,attrs:{"data-grid":"small-gutter"}},[e("td",{attrs:{valign:"top","data-col":"5"}},[e("code",{staticClass:"is-bold",domProps:{textContent:t._s(n.name)}}),n.description?e("div",{staticStyle:{"font-size":".825em",padding:"8px 0"},domProps:{innerHTML:t._s(n.description)}}):t._e()]),n.type?e("td",{attrs:{valign:"top","data-col":"2"}},[e("span",{staticClass:"tag",domProps:{textContent:t._s(n.type)}})]):t._e(),e("td",{attrs:{valign:"top","data-col":"5"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:n.default||"...",expression:"param.default || '...'"}]},[e("code",{staticClass:"scss"})])])])}),0)])]):t._e()},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",{attrs:{"data-grid":"small-gutter"}},[e("th",{attrs:{"data-col":"5"}},[t._v("Name")]),e("th",{attrs:{"data-col":"2"}},[t._v("Type")]),e("th",{attrs:{"data-col":"5"}},[t._v("Default Value")])])])}],s={props:["params","title"]},p=s,u=(e("744b"),e("2877")),l=Object(u["a"])(p,i,a,!1,null,"834bd208",null);n["a"]=l.exports},"430c":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[t._m(0),e("div",{staticClass:"demo-preview is-padding-8",attrs:{"data-flex":"column center-items"}},["textarea"===t.inputType?e("textarea",{staticClass:"input",class:[t.inputSize,t.inputRound?" input_round":""],attrs:{placeholder:"textarea...",rows:"4"}}):"select"===t.inputType?e("select",{staticClass:"input",class:[t.inputSize,t.inputRound?" input_round":""]},[e("option",{attrs:{value:""}},[t._v("select")]),e("option",{attrs:{value:"option 1"}},[t._v("option 1")]),e("option",{attrs:{value:"option 2"}},[t._v("option 2")]),e("option",{attrs:{value:"option 3"}},[t._v("option 3")])]):e("input",{staticClass:"input",class:[t.inputSize,t.inputRound?" input_round":""],attrs:{type:t.inputType,placeholder:t.inputType+" input..."}}),e("div",{staticClass:"is-theme is-margin-top-5 is-padding-center-2 is-round is-elevated-16"},[e("div",{staticClass:"nav"},[e("div",{staticClass:"nav__item"},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"input-group__addon",attrs:{for:"inputSize"}},[e("svg",{staticClass:"ixo is-ink-link"},[e("use",{attrs:{"xlink:href":"#move-vertical"}})])]),e("div",{staticClass:"input-group__addon"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.inputSize,expression:"inputSize"}],staticClass:"input",attrs:{id:"inputSize"},on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.inputSize=n.target.multiple?e:e[0]}}},[e("option",{attrs:{value:""}},[t._v("default")]),e("option",{attrs:{value:"input_small"}},[t._v("small")]),e("option",{attrs:{value:"input_big"}},[t._v("big")])])])])]),e("div",{staticClass:"nav__item"},[e("div",{staticClass:"input-group"},[t._m(1),e("div",{staticClass:"input-group__addon"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.inputType,expression:"inputType"}],staticClass:"input",attrs:{id:"inputType"},on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.inputType=n.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"text"}},[t._v("text")]),e("option",{attrs:{value:"date"}},[t._v("date")]),e("option",{attrs:{value:"datetime-local"}},[t._v("datetime-local")]),e("option",{attrs:{value:"time"}},[t._v("time")]),e("option",{attrs:{value:"week"}},[t._v("week")]),e("option",{attrs:{value:"month"}},[t._v("month")]),e("option",{attrs:{value:"password"}},[t._v("password")]),e("option",{attrs:{value:"search"}},[t._v("search")]),e("option",{attrs:{value:"tel"}},[t._v("tel")]),e("option",{attrs:{value:"url"}},[t._v("url")]),e("option",{attrs:{value:"number"}},[t._v("number")]),e("option",{attrs:{value:"textarea"}},[t._v("textarea")]),e("option",{attrs:{value:"select"}},[t._v("select")])])])])]),e("div",{staticClass:"nav__item"},[e("div",{staticClass:"xui-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputRound,expression:"inputRound"}],attrs:{type:"checkbox",id:"inputRound"},domProps:{checked:Array.isArray(t.inputRound)?t._i(t.inputRound,null)>-1:t.inputRound},on:{change:function(n){var e=t.inputRound,i=n.target,a=!!i.checked;if(Array.isArray(e)){var s=null,p=t._i(e,s);i.checked?p<0&&(t.inputRound=e.concat([s])):p>-1&&(t.inputRound=e.slice(0,p).concat(e.slice(p+1)))}else t.inputRound=a}}}),e("label",{staticClass:"xui-checkbox__label",attrs:{for:"inputRound"}},[t._v("round")])])])])])]),e("div",{attrs:{"data-grid":"center"}},[e("div",{attrs:{"data-col":"10@md 8@lg"}},[e("div",{staticClass:"spacer"}),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.inputMarkup,expression:"inputMarkup"}]},[e("code",{staticClass:"html"})]),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.inputParams}}),e("div",{staticClass:"spacer"}),e("params-table",{attrs:{params:t.inputSizeParama,title:"size params"}})],1)])])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"is-padding-center-3"},[e("h2",[t._v("input")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("label",{staticClass:"input-group__addon",attrs:{for:"inputSize"}},[e("small",[t._v("type")])])}],s=e("2c22"),p={name:"Form",components:{ParamsTable:s["a"]},data:function(){return{inputSize:"",inputType:"text",inputRound:!1,inputMarkup:'<input\n  type="text"\n  class="input"\n  placeholder="..."\n>',inputParams:[{name:"$input-font-size",type:"number",default:"$base-font-size"},{name:"$input-line-height",type:"number",default:"$input-font-size * 1.125"},{name:"$input-min-height",type:"number",default:"32"},{name:"$input-padding-ratio",type:"number",default:"1"},{name:"$input-spacing",type:"number",default:"0"},{name:"$input-border-color",type:"color",default:"transparent"},{name:"$input-border-width",type:"number",default:"0"},{name:"$input-border-style",type:"string",default:"solid"},{name:"$input-background",type:"color",default:"$background-lighter"},{name:"$input-color",type:"color",default:"$text"},{name:"$input-style",type:"array"},{name:"$input-hover-style",type:"array"},{name:"$input-focus-style",type:"array"},{name:"$input-disabled-style",type:"array"},{name:"$input-placeholder-color",type:"color",default:"$text-lighter"},{name:"$input-placeholder-style",type:"array"},{name:"$input-placeholder-hover-style",type:"array"},{name:"$input-placeholder-focus-style",type:"array"}],inputSizeParama:[{name:"$input-small-font-size",type:"number",default:"$input-font-size * 0.875"},{name:"$input-small-line-height",type:"number",default:"$input-small-font-size * $base-line-height"},{name:"$input-small-min-height",type:"number",default:"28"},{name:"$input-small-style",type:"array"},{name:"$input-big-font-size",type:"number",default:"$input-font-size * 1.125"},{name:"$input-big-line-height",type:"number",default:"$input-big-font-size * $base-line-height"},{name:"$input-big-min-height",type:"number",default:"40"},{name:"$input-big-style",type:"array"}],sectionGroups:[{title:"input-group",type:"atoms",id:"input-group",navTitle:"input-group",groupItems:[{title:"default usage",preview:'<div class="input-group">\n  <div class="input-group__addon">\n    <small>addon</small>\n  </div>\n  <input type="text" placeholder="input..." class="input" />\n</div>\n<div class="y-space-2"></div>\n<div class="input-group">\n  <input type="text" placeholder="input..." class="input" />\n  <div class="input-group__addon">\n    <small>addon</small>\n  </div>\n</div>\n<div class="y-space-2"></div>\n<div class="input-group">\n  <div class="input-group__addon">\n    <small>addon</small>\n  </div>\n  <input type="text" placeholder="input..." class="input" />\n  <div class="x-space-1"></div>\n  <input type="text" placeholder="input..." class="input" />\n</div>\n<div class="y-space-3"></div>\n<div class="input-group">\n  <div class="input-group__addon is-round-left">\n    <small>addon</small>\n  </div>\n  <input type="text" placeholder="input..." class="input input_round" />\n</div>',config:"$input-group-spacing: $input-spacing;\n\n$input-group-addon-color: $text-light;\n$input-group-addon-background: $input-background;\n$input-group-addon-border-color: $input-border-color;\n$input-group-addon-border-width: $input-border-width;\n$input-group-addon-border-style: $input-border-style;\n$input-group-addon-padding: 0 8;\n$input-group-addon-style: ();"},{title:"with grid",preview:'<div class="input-group">\n  <div class="input-group__addon" data-col="4">\n    <small>addon</small>\n  </div>\n  <input type="text" placeholder="input..." class="input" />\n</div>',markup:'<div class="input-group">\n  <div class="input-group__addon" data-col="4">\n    <small>addon</small>\n  </div>\n  <input type="text" placeholder="input..." class="input" />\n</div>'},{title:"mixed inputs grid",preview:'<div class="input-group">\n  <input type="text" placeholder="input..." class="input" />\n  <div class="input-group__addon" data-col="4">\n    <select class="input input_clear">\n      <option value="" selected>select option</option>\n      <option value="">option</option>\n      <option value="">option</option>\n    </select>\n  </div>\n</div>\n<div class="y-space-2"></div>\n<div class="input-group">\n  <input type="text" placeholder="input..." class="input" />\n  <div class="x-space-1" style="width:2px;"></div>\n  <div class="input-group__addon">\n    <div class="xui-checkbox">\n      <input type="checkbox" id="checkbox-3">\n      <label for="checkbox-3" class="xui-checkbox__label">checkbox</label>\n    </div>\n  </div>\n</div>\n<div class="y-space-2"></div>\n<div class="input-group">\n  <input type="text" placeholder="input..." class="input" />\n  <div tabindex="0" class="xui-select">\n    <span class="xui-select__placeholder">select</span>\n    <span class="xui-select__caret"></span>\n    <ul class="xui-select-options">\n      <li>\n        <a href="" tabindex="0" class="xui-select-option">option 1</a>\n      </li>\n      <li>\n        <a href="" tabindex="0" class="xui-select-option">option 2</a>\n      </li>\n      <li>\n        <a href="" tabindex="0" class="xui-select-option">option 3</a>\n      </li>\n    </ul>\n  </div>\n</div>',markup:""},{title:"combinded with button",preview:'<div class="input-group">\n  <div class="input-group__addon">\n    <small>addon</small>\n  </div>\n  <input type="text" placeholder="input..." class="input" />\n  <a class="btn">submit</a>\n</div>\n<div class="y-space-2"></div>\n<div class="input-group">\n  <input type="text" placeholder="input..." class="input" />\n  <div class="input-group__addon">\n    <a class="btn btn_clear">submit</a>\n  </div>\n</div>'},{title:"used with icon ",preview:'<div class="input-group">\n  <input type="text" placeholder="input..." class="input" />\n  <div class="input-group__addon">\n    <svg class="ixo"><use xlink:href="#fire"></use></svg>\n  </div>\n</div>'}]}]}},computed:{hasChange:function(){return[this.inputSize,this.inputType,this.inputRound].join()}},watch:{hasChange:function(){"textarea"===this.inputType?this.inputMarkup='<textarea class="input'.concat(this.inputSize?" "+this.inputSize:"").concat(this.inputRound?" input_round":"",'" placeholder="..."></textarea>'):"select"===this.inputType?this.inputMarkup='<select class="input'.concat(this.inputSize?" "+this.inputSize:"").concat(this.inputRound?" input_round":"",'">\n  <option value>...</option>\n  ...\n</select>'):this.inputMarkup='<input type="'.concat(this.inputType,'" class="input').concat(this.inputSize?" "+this.inputSize:"").concat(this.inputRound?" input_round":"",'" placeholder="..."\n      >')}}},u=p,l=e("2877"),o=Object(l["a"])(u,i,a,!1,null,"13309062",null);n["default"]=o.exports},"744b":function(t,n,e){"use strict";var i=e("7a1d"),a=e.n(i);a.a},"7a1d":function(t,n,e){}}]);
//# sourceMappingURL=chunk-4418ba27.5a3e8e0b.js.map