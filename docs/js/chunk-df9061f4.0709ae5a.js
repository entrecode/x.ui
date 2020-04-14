(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df9061f4"],{"0f0d":function(e,t,r){},"487c":function(e,t,r){"use strict";var o=r("0f0d"),n=r.n(o);n.a},7949:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("div",{attrs:{"data-grid":""}},[r("div",{attrs:{"data-col":"8"}},[e._m(0),e._l(e.sortedArray,(function(t,o){return r("div",{key:o,staticClass:"is-margin-bottom-8 is-border-bottom is-padding-bottom-4",attrs:{id:t.anchor}},[t.title?r("h3",[e._v(" "+e._s(t.title)+" "),r("div",{staticClass:"tag"},[e._v(e._s(t.type))])]):e._e(),t.codeShort?r("div",{directives:[{name:"show",rawName:"v-show",value:!t.toggleCode,expression:"!item.toggleCode"}],staticClass:"is-margin-bottom-5",class:{"is-clickable":t.code},on:{click:function(e){t.code&&(t.toggleCode=!t.toggleCode)}}},[r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.codeShort,expression:"item.codeShort"}]},[r("code",{staticClass:"scss",staticStyle:{"font-size":"16px"}})])]):e._e(),t.code?r("div",{directives:[{name:"show",rawName:"v-show",value:t.toggleCode,expression:"item.toggleCode"}],staticClass:"is-margin-bottom-5",class:{"is-clickable":t.codeShort},on:{click:function(e){t.codeShort&&(t.toggleCode=!t.toggleCode)}}},[r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.code,expression:"item.code"}]},[r("code",{staticClass:"scss",staticStyle:{"font-size":"14px"}})])]):e._e(),t.params?r("div",{staticClass:"is-margin-bottom-5"},[r("h4",{staticClass:"is-h4"},[e._v("parameters")]),r("div",{staticClass:"is-padding-5 is-radius is-theme-lightest"},[r("table",{staticClass:"table"},[e._m(1,!0),r("tbody",e._l(t.params,(function(t,o){return r("tr",{key:o},[r("td",[r("div",{staticClass:"code",domProps:{textContent:e._s(t.name)}})]),r("td",{domProps:{textContent:e._s(t.description)}}),r("td",{domProps:{textContent:e._s(t.type)}}),r("td",[r("div",{staticClass:"code",domProps:{textContent:e._s(t.default)}})])])})),0)])])]):e._e(),t.description?r("div",{staticClass:"is-margin-bottom-5"},[r("h4",{staticClass:"is-h4"},[e._v("description")]),r("p",{domProps:{innerHTML:e._s(t.description)}})]):e._e(),t.returns?r("div",{staticClass:"is-margin-bottom-5"},[r("h4",{staticClass:"is-h4"},[e._v("returns")]),r("div",{staticClass:"code",domProps:{textContent:e._s(t.returns)}})]):e._e(),t.example?r("div",{staticClass:"is-margin-bottom-5"},[r("h4",{staticClass:"is-h4"},[e._v("example")]),r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.example,expression:"item.example"}]},[r("code",{staticClass:"scss"})])]):e._e(),t.require?r("div",{staticClass:"is-margin-bottom-5"},[r("h4",{staticClass:"is-h4"},[e._v("requires")]),r("ul",{attrs:{"data-grid":"smaller-gutter"}},e._l(t.require,(function(t,o){return r("li",{key:o,attrs:{"data-col":"fit"}},[t.link?r("a",{staticClass:"code",attrs:{href:t.link},domProps:{textContent:e._s(t.name)}}):r("span",{staticClass:"code",domProps:{textContent:e._s(t.name)}})])})),0)]):e._e(),t.usedBy?r("div",{staticClass:"is-margin-bottom-5"},[r("h4",{staticClass:"is-h4"},[e._v("used by")]),r("ul",{attrs:{"data-grid":"smaller-gutter"}},e._l(t.usedBy,(function(t,o){return r("li",{key:o,attrs:{"data-col":"fit"}},[t.link?r("a",{staticClass:"code",attrs:{href:t.link},domProps:{textContent:e._s(t.name)}}):r("span",{staticClass:"code",domProps:{textContent:e._s(t.name)}})])})),0)]):e._e()])}))],2),r("div",{attrs:{"data-col":"4"}},[r("ul",{staticClass:"nav nav_stacked is-sticky",staticStyle:{top:"120px"}},e._l(e.sortedArray,(function(t,o){return r("li",{key:o,staticClass:"nav__item"},[r("a",{staticClass:"is-kilo is-ink hover:is-ink-link",attrs:{href:"#"+t.anchor}},[e._v(e._s(t.title))])])})),0)])])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"titlebar"},[r("h1",[e._v("functions")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Name")]),r("th",[e._v("Description")]),r("th",[e._v("Type")]),r("th",[e._v("Default Value")])])])}],a=r("ade3"),s={name:"Function",data:function(){var e;return{items:[(e={toggleCode:!1,title:"array-magic()",anchor:"scroll-to-array-magic",usedBy:["get-space"],codeShort:"@function array-magic($array, $unit: 'xrem') {...}",code:"@function array-magic($array, $unit: 'xrem') {\n  $_output: null;\n  $_value: null;\n\n  @for $i from 1 through length($array) {\n    $_entry: nth($array, $i);\n\n    @if type-of($_entry) == 'number' and unitless($_entry) == true {\n      @if $_entry == 0 {\n        $_value: #{$_entry};\n      } @else {\n        @if ($unit == 'xrem') {\n          $_value: rem($_entry);\n        } @else if($unit == 'xem') {\n          $_value: em($_entry);\n        } @else {\n          $_value: unquote('#{$_entry * 1}#{$unit}');\n        }\n      }\n    } @else {\n      $_value: #{$_entry};\n    }\n    $_output: append($_output, $_value);\n  }\n\n  @return $_output;\n}",description:"Converts an array or string of numbers into a a string of rem values",type:"size-function",returns:"string",example:"padding: array-magic(8 16); // returns rem(8) rem(16)",require:[{name:"rem()",type:"function",link:"#scroll-to-rem"},{name:"em()",type:"function",link:"#scroll-to-em"}]},Object(a["a"])(e,"usedBy",[{name:"get-space()",type:"function",link:"#scroll-to-get-space"}]),Object(a["a"])(e,"params",[{name:"$array",description:"array or string of numbers",type:"string | array"},{name:"$unit",type:"xrem | xem | rem | px | em | % | pt",default:"xrem"}]),e),{toggleCode:!1,title:"rem()",anchor:"scroll-to-rem",description:"Converts a px value into a rem value",type:"size-function",usedBy:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"}],example:"width: rem(32); // returns 2rem",returns:"rem",codeShort:"@function rem($value, $base: $root-size) {...}",code:"@function rem($value, $base: $root-size) {\n  @if type-of($value) == 'number' and unitless($value) {\n    @if ($value == 0) {\n      @return $value;\n    } @else {\n      @return ($value / $base) + rem;\n    }\n  } @else {\n    @return $value;\n  }\n}",require:[{name:"$root-size",type:"variable",link:"#scroll-to-root-size"}],params:[{name:"$value",type:"number"},{name:"$base",type:"number",default:"$root-size"}]},{toggleCode:!1,anchor:"scroll-to-em",title:"em()",description:"Converts a px value into a em value",type:"size-function",usedBy:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"}],example:"font-size: em(16); // returns 1em\nline-height: em(24, 12); // returns 2em",returns:"em",codeShort:"@function em($value, $base: $base-font-size) {...}",code:"@function em($value, $base: $base-font-size) {\n  @if type-of($value) == 'number' and unitless($value) {\n    @return ($value / $base) * 1em;\n  } @else {\n    @return $value;\n  }\n}",require:[{name:"$base-font-size",type:"variable",link:"#scroll-to-base-font-size"}],params:[{name:"$value",type:"number"},{name:"$base",type:"number",default:"$base-font-size"}]},{toggleCode:!1,title:"bp()",anchor:"scroll-to-bp",description:"get the breakpoints for responsiveness from a map",type:"grid-function",example:"bp(sm) // returns 480px\nbp(sm, max) // returns 479px",returns:"string",codeShort:"@function bp($breakpoint, $max: null, $map: $breakpoints) {...}",code:"@function bp($breakpoint, $max: null, $map: $breakpoints) {\n  @if map-is-key($map, $breakpoint) {\n    @if $max == max {\n      $_breakpoint-max: next-bp($breakpoint);\n      @return if($_breakpoint-max, $_breakpoint-max - 1 * 1px, null);\n    } @else {\n      @return map-get($map, $breakpoint) * 1px;\n    }\n  } @else {\n    @warn '#{$breakpoint} is not a key';\n    @return null;\n  }\n}",require:[{name:"$breakpoints",type:"map",link:"#scroll-to-breakpoints"},{name:"next-bp()",type:"function",link:"#scroll-to-next-bp"}],params:[{name:"$breakpoint",type:"string",description:"short code of the breakpoint"},{name:"$max",type:"string",default:"null"}],usedBy:[{name:"set-breakpoints()",type:"mixin",link:"#scroll-to-set-breakpoints"},{name:"set-data-breakpoints()",link:"#scroll-to-set-data-breakpoints"},{name:"set-data-map-breakpoints()",link:"#scroll-to-set-data-map-breakpoints"}]},{toggleCode:!1,title:"next-bp()",anchor:"scroll-to-next-bp",type:"grid-function",usedBy:[{name:"bp()",type:"function",link:"#scroll-to-bp"}],returns:"string | null",codeShort:"@function next-bp($breakpoint, $map: $breakpoints) {...}",code:"@function next-bp($breakpoint, $map: $breakpoints) {\n  $_keys: map-keys($map);\n  $_current: index($_keys, $breakpoint);\n\n  @return if($_current < length($map), map-get($map, nth($_keys, $_current + 1)) * 1px, null);\n}",require:[{name:"$breakpoints",type:"map",link:"#scroll-to-breakpoints"}],params:[{name:"$breakpoint",type:"string",description:"short code of the breakpoint"},{name:"$map",type:"map",default:"$breakpoints"}]},{toggleCode:!1,title:"flatten-color()",anchor:"scroll-to-flatten-color",type:"color-function",description:"Mixes two colors, considering opacity",returns:"color",usedBy:[{name:"set-hover()",link:"#scroll-to-set-hover"},{name:"set-contrast()",link:"#scroll-to-set-contrast"}],example:"color: flatten-color(rgba(black, .2);",codeShort:"@function flatten-color($fg, $bg: $_flatten-color-base) {...}",code:"@function flatten-color($fg, $bg: $_flatten-color-base) {\n  $a1: alpha($bg);\n  $a2: alpha($fg);\n\n  @if ($a1 == 0) {\n    @if ($a2 == 0) {\n      @return $fg;\n    }\n  }\n\n  $a: $a2 + (1 - $a2) * $a1;\n  $r: ($a2 * red($fg) + (1 - $a2) * $a1 * red($bg)) / $a;\n  $g: ($a2 * green($fg) + (1 - $a2) * $a1 * green($bg)) / $a;\n  $b: ($a2 * blue($fg) + (1 - $a2) * $a1 * blue($bg)) / $a;\n\n  @return rgba($r, $g, $b, $a);\n}",require:[{name:"$_flatten-color-base",type:"color",default:"$background // #fff"}],params:[{name:"$fg",type:"color",description:"forground-color to be flattened"},{name:"$bg",type:"color",default:"$background",description:"background-color"}]},{toggleCode:!1,title:"get-color()",anchor:"scroll-to-get-color",type:"color-function",description:"Mixes two colors, considering opacity",returns:"color",example:"color: get-color(text, invert);\ncolor: get-color(link);",codeShort:"@function get-color($color-string...) {...}",code:"@function get-color($color-string...) {\n  $_string-length: length($color-string);\n  $_color-map: $color-map-id;\n\n  @if $_string-length == 1 {\n    $_color-value: nth($color-string, 1);\n    @return map-get(map-get($_color-map, base), $_color-value);\n  }\n\n  @if $_string-length == 2 {\n    $_color-base: nth($color-string, 1);\n    $_color-value: nth($color-string, 2);\n\n    @return map-get(map-get($_color-map, $_color-base), $_color-value);\n  }\n}",require:[{name:"$color-map-id",type:"variable",link:"#scroll-to-color-map-id"}],params:[{name:"$color-string",type:"string",description:"Name of the color"}]},{toggleCode:!1,title:"get-space()",anchor:"scroll-to-get-space",type:"layout-function",returns:"number",codeShort:"@function get-space($space) {...}",code:"@function get-space($space) {\n  @return array-magic(map-get($spacings, $space), $base-spacing-unit);\n};",require:[{name:"array-magic()",type:"function",link:"#scroll-to-array-magic"},{name:"$spacings",type:"variables",link:"#scroll-to-spacings"},{name:"$base-spacing-unit",type:"variables",link:"#scroll-base-spacing-unit"}],params:[{name:"$space",type:"string",description:"key of map"}]},{toggleCode:!1,title:"set-hover()",anchor:"scroll-to-set-hover",type:"color-function",codeShort:"@function set-hover($color, $shade: $_set-hover-shading) {...}",code:"@function set-hover($color, $shade: $_set-hover-shading) {\n  @if type-of($color) == 'color' {\n    $_brightness: get-brightness($color);\n\n    @if (alpha($color) < 1) {\n      $color: flatten-color($color);\n    }\n\n    // if color is brighter\n    @if $_brightness > 180 {\n      $shade: $shade * -1;\n    }\n\n    @return var-color($color, $shade);\n  } @else {\n    @return $color;\n  }\n}",require:[{name:"get-brightness()",type:"function",link:"#scroll-to-get-brightness"},{name:"var-color()",type:"function",link:"#scroll-to-var-color"},{name:"flatten-color()",type:"function",link:"#scroll-to-flatten-color"},{name:"$_set-hover-shading",type:"variable",link:"#scroll-to-set-hover-shading"}],params:[{name:"$color",type:"color"},{name:"$shade",type:"number",description:"amount by which the color should be shaded",default:"$_set-hover-shading"}]},{toggleCode:!1,title:"shade-by-contrast()",anchor:"scroll-to-shade-by-contrast",description:"returns a shade of a color depending on it's lightness",type:"color-function",returns:"color",codeShort:"@function shade-by-contrast($color, $amount) {...}",code:"@function shade-by-contrast($color, $amount) {\n  $_luma: luma($color);\n\n  @if $_luma > .5 {\n    @return var-color($color, $amount * -1);\n  } @else {\n    @return var-color($color, $amount);\n  }\n}",require:[{name:"luma()",type:"function",link:"#scroll-to-luma"},{name:"var-color()",type:"function",link:"#scroll-to-var-color"}],params:[{name:"$color",type:"color"},{name:"$amount",type:"number",description:"value by which the color should be  to darkened or lightened"}]},{toggleCode:!1,title:"strip-unit()",anchor:"scroll-to-strip-unit",description:"removes the unit of a value",type:"unit-function",returns:"number",usedBy:[{name:"var-color()",link:"#scroll-to-var-color"}],example:"strip-unit(16px) // returns 16",codeShort:"@function strip-unit($number) {...}",code:"@function strip-unit($number) {\n  @if type-of($number) == 'number' and not unitless($number) {\n    @return $number / ($number * 0 + 1);\n  }\n\n  @return $number;\n}",params:[{name:"$number",type:"string"}]},{toggleCode:!1,title:"system-color()",anchor:"scroll-to-system-color",description:"harmonizes lightness and saturation of a color based on a set of colors",type:"color-function",returns:"color",example:"system-color(#00E676) // returns a color with a hue value of 151",codeShort:"@function system-color($target, $colors: $link $super $highlight) {...}",code:"@function system-color($target, $colors: $link $super $highlight) {\n  $_target-hue: hue($target);\n  $_total-hue: 0;\n  $_total-sat: 0;\n  $_total-light: 0;\n\n  @each $_color in $colors {\n    $i: index($colors, $_color);\n    $_total-hue: $_total-hue + hue($_color);\n    $_total-sat: $_total-sat + saturation($_color);\n    $_total-light: $_total-light + lightness($_color);\n  }\n\n  $_total-hue: $_total-hue / length($colors);\n  $_total-sat: $_total-sat / length($colors);\n  $_total-light: $_total-light / length($colors);\n\n  @return hsl($_target-hue, $_total-sat, $_total-light);\n}",require:[{name:"$_system-color-ref",type:"array",link:"#scroll-to-system-color-ref"}],params:[{name:"$target",type:"color",description:"name of target color"},{name:"$colors",type:"array",description:"name of target color",default:"$_system-color-ref"}]},{toggleCode:!1,title:"var-color()",anchor:"scroll-to-var-color",description:'generates a natural darker or lighter variation of a color. read <a href="https://medium.com/@erikdkennedy/color-in-ui-design-a-practical-framework-e18cacd97f9e" target="_blank" rel="nofollow">https://medium.com/@erikdkennedy/color-in-ui-design-a-practical-framework-e18cacd97f9e</a> for more.',type:"color-function",returns:"color",usedBy:[{name:"set-hover()",link:"#scroll-to-set-hover"},{name:"shade-by-contrast()",link:"#scroll-to-shade-by-contrast"}],example:"var-color(#ff0000, 20); // returns color: #fe6e67",codeShort:"@function var-color($source, $amount) {...}",code:"@function var-color($source, $amount) {\n  // @param {string} $_h: hue value of source color\n  // @param {string} $_l - lightness value of source color\n  // @param {string} $_s - saturation value of source color\n  // @param {number} $_h-ratio - ratio for increasing or decreasing hue based on $amount\n  // @param {number} $_s-ratio -  ratio for increasing or decreasing saturation based on $amount\n  // @param {string} $_target - target color value\n  // @param {string} $_a - alpha color value\n  $_h: strip-unit(hue($source));\n  $_l: strip-unit(lightness($source));\n  $_s: strip-unit(saturation($source));\n  $_a: strip-unit(alpha($source));\n  $_h-ratio: 0.15;\n  $_s-ratio: 0.66;\n  $_target: null;\n\n  @if ($_a < 0.2 and $amount < 20 and $amount > -20) {\n    $_target: rgba($source, $_a);\n  } @else {\n    @if ($amount > 0) {\n      // if $amount is positive\n      // color transformation to lighter and less saturated.\n      // also the hue is transformed depending on its value\n      //\n      // @param {string} $_h-transform -  value for hue adjustment\n      // @param {string} $_s-transform - value for desaturation\n      $_h-transform: $amount * $_h-ratio;\n      $_s-transform: $amount * $_s-ratio;\n\n      @if ($_l == 100 and $_s == 0 or $_l == 100 and $_s == 0) {\n      } @else {\n        // if next to red hue is transformed towards red (0)\n        @if ($_h < 60 and $_h >= 0) {\n          $source: adjust-hue($source, $_h-transform);\n        }\n\n        // if next to green hue is transformed towards green (120)\n        @if ($_h < 120 and $_h >= 60) {\n          $source: adjust-hue($source, $_h-transform * -1);\n        }\n\n        // if next to green hue is transformed towards green (120)\n        @if ($_h < 180 and $_h >= 120) {\n          $source: adjust-hue($source, $_h-transform);\n        }\n\n        // if next to blue hue is transformed towards blue (240)\n        @if ($_h < 240 and $_h >= 180) {\n          $source: adjust-hue($source, $_h-transform * -1);\n        }\n\n        // if next to blue hue is transformed towards blue (240)\n        @if ($_h < 300 and $_h >= 240) {\n          $source: adjust-hue($source, $_h-transform);\n        }\n\n        // if next to red hue is transformed towards red (360)\n        @if ($_h <= 360 and $_h >= 300) {\n          $source: adjust-hue($source, $_h-transform * -1);\n        }\n      }\n\n      $_target: lighten(desaturate($source, $_s-transform), $amount);\n    } @else {\n      // if $amount is negative\n      // color transformation to darker and more saturated.\n      // also the hue is transformed depending on its value\n      // make value of $amount positive for transformation\n      //\n      // @param {string} $_h-transform - value for hue adjustment\n      // @param {string} $_s-transform - value for desaturation\n      $amount: $amount * -1;\n      $_h-transform: $amount * $_h-ratio;\n      $_s-transform: $amount * $_s-ratio;\n\n      @if ($_l == 100 and $_s == 0 or $_l == 100 and $_s == 0) {\n      } @else {\n        // if next to red hue is transformed towards red (0)\n        @if ($_h < 60 and $_h >= 0) {\n          $source: adjust-hue($source, $_h-transform * -1);\n        }\n\n        // if next to green hue is transformed towards green (120)\n        @if ($_h < 120 and $_h >= 60) {\n          $source: adjust-hue($source, $_h-transform);\n        }\n\n        // if next to green hue is transformed towards green (120)\n        @if ($_h < 180 and $_h >= 120) {\n          $source: adjust-hue($source, $_h-transform * -1);\n        }\n\n        // if next to blue hue is transformed towards blue (120)\n        @if ($_h < 240 and $_h >= 180) {\n          $source: adjust-hue($source, $_h-transform);\n        }\n\n        // if next to blue hue is transformed towards blue (120)\n        @if ($_h < 300 and $_h >= 240) {\n          $source: adjust-hue($source, $_h-transform * -1);\n        }\n\n        // if next to red hue is transformed towards red (360)\n        @if ($_h <= 360 and $_h >= 300) {\n          $source: adjust-hue($source, $_h-transform);\n        }\n      }\n\n      $_target: darken(saturate($source, $_s-transform), $amount);\n    }\n  }\n\n  @return $_target;\n}",require:[{name:"strip-unit()",type:"function",link:"#scroll-to-strip-unit"}],params:[{name:"$source",type:"color",description:"source color"},{name:"$amount",type:"number",description:"positive or negative number for color transformation"}]},{toggleCode:!1,title:"set-contrast()",anchor:"scroll-to-set-contrast",description:'sets a contrast color based on the Web Content Accessibility Guidelines (WCAG). read <a href="https://www.w3.org/TR/AERT#color-contrast" target="_blank" rel="nofollow">https://www.w3.org/TR/AERT#color-contrast</a> for more.',type:"color-function",returns:"color",example:"set-contrast(#fff) // returns #000",codeShort:"@function set-contrast($color, $hue: $color) {...}",code:"@function set-contrast($color, $hue: $color) {\n  // remove transparency\n  @if (alpha($color) < 1) {\n    $color: flatten-color($color);\n  }\n\n  @if (alpha($hue) < 1) {\n    $hue: flatten-color($hue);\n  }\n\n  @if $hue == $color {\n    @return find-contrast-loop($color, $lighter-fallback, $darker-fallback);\n  } @else {\n    @return find-contrast-loop($color, $hue, $hue);\n  }\n}",require:[{name:"flatten-color()",type:"function",link:"#scroll-to-flatten-color"},{name:"find-contrast-loop()",type:"function",link:"#scroll-to-find-contrast-loop"},{name:"$lighter-fallback",type:"variable",link:"#scroll-to-lighter-fallback"},{name:"$darker-fallback",type:"variable",link:"#scroll-to-darker-fallback"}],usedBy:[{name:"set-theme-color()",link:"#scroll-to-set-theme-color"}],params:[{name:"$color",type:"color",description:"source color"},{name:"$hue",type:"color",description:"tweaks the output towards a specific hue",default:"$color"}]},{toggleCode:!1,title:"find-contrast-loop",anchor:"scroll-to-find-contrast-loop",description:"loop to find color shade with best contrast",type:"color-function",returns:"color",usedBy:[{name:"set-contrast()",link:"#scroll-to-set-contrast"}],codeShort:"@function find-contrast-loop($_color, $_lighter-hue, $_darker-hue) {...}",code:"@function find-contrast-loop($_color, $_lighter-hue, $_darker-hue) {\n  $_list: 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100;\n  $_last: nth($_list, length($_list));\n  $_final-color: null;\n  $_aa: 7;\n  $_aaa: 4.5;\n\n\n  @each $percent in $_list {\n    // darker variant\n    $_darker: darken($_darker-hue, $percent);\n    $_darker-color-diff: color-difference($_color, $_darker);\n    $_darker-pass: color-pass($_color, $_darker);\n    $_darker-margin: color-margin($_color, $_darker);\n    $_darker-contrast: contrast-ratio($_color, $_darker);\n    $_darker-aa: check-compliance($_color, $_darker, $_aa);\n    $_darker-aaa: check-compliance($_color, $_darker, $_aaa);\n\n    // lighter variant\n    $_lighter: lighten($_lighter-hue, $percent);\n    $_lighter-color-diff: color-difference($_color, $_lighter);\n    $_lighter-pass: color-pass($_color, $_lighter);\n    $_lighter-margin: color-margin($_color, $_lighter);\n    $_lighter-contrast: contrast-ratio($_color, $_lighter);\n    $_lighter-aa: check-compliance($_color, $_lighter, $_aa);\n    $_lighter-aaa: check-compliance($_color, $_lighter, $_aaa);\n\n    @if $_lighter-pass {\n      @return $_lighter;\n    }\n\n    @if $_darker-pass {\n      @return $_darker;\n    }\n\n    @if $_lighter-margin and $_lighter-aaa {\n      @return $_lighter;\n    }\n\n    @if $_darker-margin and $_lighter-aaa {\n      @return $_darker;\n    }\n\n    @if $percent == $_last {\n      @if $_lighter-contrast > $_darker-contrast {\n        $_final-color: $_lighter;\n      } @else {\n        $_final-color: $_darker;\n      }\n      @if $_lighter-aa {\n        $_final-color: $_lighter;\n      }\n      @if $_darker-aa {\n        $_final-color: $_darker;\n      }\n      @if $_lighter-aaa {\n        $_final-color: $_lighter;\n      }\n      @if $_darker-aaa {\n        $_final-color: $_darker;\n      }\n      @if $_lighter-margin and $_lighter-color-diff > $_darker-color-diff {\n        $_final-color: $_lighter;\n      }\n      @if $_darker-margin and $_lighter-color-diff < $_darker-color-diff {\n        $_final-color: $_darker;\n      }\n      @return $_final-color;\n    }\n  }\n}",params:[{name:"$_color",type:"color",description:"reference color"},{name:"$_lighter-hue",type:"color",description:"lighter-shade color"},{name:"$_darker-hue",type:"color",description:"darker-shade color"}],require:[{name:"color-difference()",link:"#scroll-to-color-difference",type:"function"},{name:"color-pass()",link:"#scroll-to-color-pass",type:"function"},{name:"color-margin()",link:"#scroll-to-color-margin",type:"function"},{name:"contrast-ratio()",link:"#scroll-to-contrast-ratio",type:"function"},{name:"check-compliance()",link:"#scroll-to-check-compliance",type:"function"}]},{toggleCode:!1,title:"check-compliance()",anchor:"scroll-to-check-compliance",description:'checks if a color meets the WCAG. read <a href="https://www.w3.org/TR/WCAG/#contrast-ratiodef" target="_blank" rel="nofollow">https://www.w3.org/TR/WCAG/#contrast-ratiodef</a> for more.',type:"color-function",returns:"boolean",example:"check-compliance(#fff, #ccc, 7) // returns false",codeShort:"@function check-compliance($_r, $_c, $_wcag) {...}",code:"@function check-compliance($_r, $_c, $_wcag) {\n  $_ratio: contrast-ratio($_r, $_c);\n  @if ($_ratio >= $_wcag) {\n    @return true;\n  } @else {\n    @return false;\n  }\n}",require:[{name:"contrast-ratio()",type:"function",link:"#scroll-to-contrast-ratio"}],usedBy:[{name:"find-contrast-loop()",link:"#scroll-to-find-contrast-loop"}],params:[{name:"$_r",type:"color"},{name:"$_c",type:"color"},{name:"$_wcag",type:"number",description:"WBAG compliance values (aaa: 7, aa: 4.5)"}]},{toggleCode:!1,title:"contrast-ratio()",anchor:"scroll-to-contrast-ratio",description:"contrast ratios can range from 1 to 21",type:"color-function",returns:"boolean",codeShort:"@function contrast-ratio($_c1, $_c2) {...}",code:"@function contrast-ratio($_c1, $_c2) {\n  $_l1: luma($_c1);\n  $_l2: luma($_c2);\n  @return round((max($_l1, $_l2) + 0.05) / (min($_l1, $_l2) + 0.05) * 100) / 100;\n}",require:[{name:"luma()",type:"function",link:"#scroll-to-luma"}],usedBy:[{name:"check-compliance()",link:"#scroll-to-check-compliance"},{name:"find-contrast-loop()",link:"#scroll-to-find-contrast-loop"}],params:[{name:"$_c1",type:"color"},{name:"$_c2",type:"color"}]},{toggleCode:!1,title:"luma()",anchor:"scroll-to-luma",description:"calculates the perceptual brightness or luma of a color object.",type:"color-function",returns:"number",usedBy:[{name:"shade-by-contrast()",link:"#scroll-to-shade-by-contrast"},{name:"contrast-ratio()",link:"#scroll-to-contrast-ratio"}],codeShort:"@function luma($_c) {...}",code:"@function luma($_c) {\n  $_r: red($_c) / 255;\n  $_g: green($_c) / 255;\n  $_b: blue($_c) / 255;\n  $_r: if($_r < 0.03928, $_r / 12.92, pow(($_r + 0.055) / 1.055, 2.4));\n  $_g: if($_g < 0.03928, $_g / 12.92, pow(($_g + 0.055) / 1.055, 2.4));\n  $_b: if($_b < 0.03928, $_b / 12.92, pow(($_b + 0.055) / 1.055, 2.4));\n  $_l: (0.2126 * $_r + 0.7152 * $_g + 0.0722 * $_b);\n  @return $_l;\n}",require:[{name:"pow()",type:"function",link:"#scroll-to-pow"}],params:[{name:"$_c",type:"color"}]},{toggleCode:!1,title:"color-margin()",description:"lesser grade for color compliance",anchor:"scroll-to-color-margin",type:"color-function",returns:"boolean",usedBy:[{name:"find-contrast-loop()",link:"#scroll-to-find-contrast-loop"}],codeShort:"@function color-margin($r, $c, $b-thr: 125, $c-thr: 500) {...}",code:"@function color-margin($r, $c, $b-thr: 125, $c-thr: 500) {\n  $_b-diff: brightness-difference($r, $c);\n  $_c-diff: color-difference($r, $c);\n  @return if($_b-diff > $b-thr or $_c-diff > $c-thr, true, false);\n}",require:[{name:"brightness-difference()",type:"function",link:"#scroll-to-brightness-difference"},{name:"color-difference()",type:"function",link:"#scroll-to-color-difference"}],params:[{name:"$_r",type:"color"},{name:"$_c",type:"color"},{name:"$_b-thr",type:"number",description:"brightness threshhold",default:125},{name:"$_c-thr",type:"number",description:"color threshhold",default:500}]},{toggleCode:!1,title:"color-pass()",description:"best grade for color compliance",anchor:"scroll-to-color-pass",type:"color-function",returns:"boolean",usedBy:[{name:"find-contrast-loop()",link:"#scroll-to-find-contrast-loop"}],codeShort:"@function color-pass($r, $c, $b-thr: 125, $c-thr: 500) {...}",code:"@function color-pass($r, $c, $b-thr: 125, $c-thr: 500) {\n  $_b-diff: brightness-difference($r, $c);\n  $_c-diff: color-difference($r, $c);\n  @return if($_b-diff > $b-thr and $_c-diff > $c-thr, true, false);\n}",require:[{name:"brightness-difference()",type:"function",link:"#scroll-to-brightness-difference"},{name:"color-difference()",type:"function",link:"#scroll-to-color-difference"}],params:[{name:"$_r",type:"color"},{name:"$_c",type:"color"},{name:"$_b-thr",type:"number",description:"brightness threshhold",default:125},{name:"$_c-thr",type:"number",description:"color threshhold",default:500}]},{toggleCode:!1,title:"color-difference()",anchor:"scroll-to-color-difference",type:"color-function",returns:"number",codeShort:"@function color-difference($_c1, $_c2) {...}",code:"@function color-difference($_c1, $_c2) {\n            @return max(red($_c1), red($_c2)) - min(red($_c1), red($_c2)) +\n    max(green($_c1), green($_c2)) - min(green($_c1), green($_c2)) +\n    max(blue($_c1), blue($_c2)) - min(blue($_c1), blue($_c2));\n}",usedBy:[{name:"find-contrast-loop()",link:"#scroll-to-find-contrast-loop"},{name:"color-margin",link:"#scroll-to-color-margin"},{name:"color-pass",link:"#scroll-to-color-pass"}],params:[{name:"$_c1",type:"color"},{name:"$_c1",type:"color"}]},{toggleCode:!1,title:"brightness-difference()",description:"an absolute number for the perceived brightness",anchor:"scroll-to-brightness-difference",type:"color-function",returns:"number",codeShort:"@function brightness-difference($_c1, $_c2) {...}",code:"@function brightness-difference($_c1, $_c2) {\n  @return abs(get-brightness($_c1) - get-brightness($_c2));\n}",require:[{name:"get-brightness()",link:"#scroll-to-get-brightness"}],usedBy:[{name:"color-margin",link:"#scroll-to-color-margin"},{name:"color-pass",link:"#scroll-to-color-pass"}],params:[{name:"$_c1",type:"color"},{name:"$_c1",type:"color"}]},{toggleCode:!1,title:"get-brightness()",description:"converts a RGB values to YIQ values. This brightness value gives a perceived brightness for a color.",anchor:"scroll-to-get-brightness",type:"color-function",returns:"number",usedBy:[{name:"set-hover()",link:"#scroll-to-set-hover"},{name:"brightness-difference",link:"#scroll-to-brightness-difference"}],codeShort:"@function get-brightness($_c) {...}",code:"@function get-brightness($_c) {\n  @return ((red($_c) * 299) + (green($_c) * 587) + (blue($_c) * 587)) / 1000;\n}",params:[{name:"$_c",type:"color"}]},{toggleCode:!1,title:"pow()",description:'Handles decimal exponents by trying to convert them into a fraction and then use a nth-root-algorithm for parts of the calculation. See <a href="https://gist.github.com/voxpelli/6304812#file-_math-scss" target="_blank" rel="nofollow">https://gist.github.com/voxpelli/6304812#file-_math-scss</a>',anchor:"scroll-to-pow",type:"math-function",usedBy:[{name:"luma()",link:"#scroll-to-luma"}]}]}},computed:{sortedArray:function(){function e(e,t){return e.title<t.title?-1:e.title>t.title?1:0}return this.items.sort(e)}}},l=s,i=(r("487c"),r("2877")),c=Object(i["a"])(l,o,n,!1,null,"79d7b5ed",null);t["default"]=c.exports},ade3:function(e,t,r){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return o}))}}]);