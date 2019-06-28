<template>
  <section class="demo-blocks-group">
    <div data-grid>
      <div data-col="8">
        <div v-for="(item, index) in sortedArray" :key="index" :id="item.anchor" class="has-margin-middle-8">
          <h3 v-if="item.title">
            {{ item.title }}&ensp;
            <div class="tag">{{ item.type }}</div>
          </h3>
          <div
            class="has-margin-bottom-5"
            v-if="item.codeShort"
            @click="item.code ? (item.toggleCode = !item.toggleCode) : null"
            v-show="!item.toggleCode"
            :class="{ 'is-clickable': item.code }"
          >
            <pre v-highlightjs="item.codeShort"><code class="scss" style="font-size: 16px;"></code></pre>
          </div>
          <div
            class="has-margin-bottom-5"
            v-if="item.code"
            v-show="item.toggleCode"
            @click="item.codeShort ? (item.toggleCode = !item.toggleCode) : null"
            :class="{ 'is-clickable': item.codeShort }"
          >
            <pre v-highlightjs="item.code"><code class="scss" style="font-size: 14px;"></code></pre>
          </div>
          <div class="has-margin-bottom-5" v-if="item.params">
            <h4 class="is-h4">parameters</h4>
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Default Value</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(param, index) in item.params" :key="index">
                  <td><div class="code" v-text="param.name"></div></td>
                  <td v-text="param.description"></td>
                  <td v-text="param.type"></td>
                  <td><div class="code" v-text="param.default"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="has-margin-bottom-5" v-if="item.description">
            <h4 class="is-h4">description</h4>
            <p v-html="item.description"></p>
          </div>
          <div class="has-margin-bottom-5" v-if="item.returns">
            <h4 class="is-h4">returns</h4>
            <div class="code" v-text="item.returns"></div>
          </div>
          <div class="has-margin-bottom-5" v-if="item.example">
            <h4 class="is-h4">example</h4>
            <pre v-highlightjs="item.example"><code class="scss"></code></pre>
          </div>
          <div class="has-margin-bottom-5" v-if="item.require">
            <h4 class="is-h4">requires</h4>
            <ul data-grid="small-gutter">
              <li v-for="(req, index) in item.require" :key="index" data-col="fit">
                <a :href="req.link" class="code" v-text="req.name" v-if="req.link" v-smooth-scroll></a>
                <span class="code" v-text="req.name" v-else></span>
              </li>
            </ul>
          </div>
          <div class="has-margin-bottom-5" v-if="item.usedBy">
            <h4 class="is-h4">used by</h4>
            <ul data-grid="small-gutter">
              <li v-for="(used, index) in item.usedBy" :key="index" data-col="fit">
                <a :href="used.link" class="code" v-text="used.name" v-if="used.link" v-smooth-scroll></a>
                <span class="code" v-text="used.name" v-else></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div data-col="4">
        <ul class="nav nav_stacked is-sticky" style="top: 120px;">
          <li class="nav__item"><h2>functions</h2></li>
          <li class="nav__item" v-for="(item, index) in sortedArray" :key="index">
            <a :href="'#' + item.anchor" v-smooth-scroll class="is-kilo is-ink hover:is-ink-link">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Function',
  data: () => {
    return {
      items: [
        {
          toggleCode: false,
          title: 'array-magic()',
          anchor: 'scroll-to-array-magic',
          usedBy: ['get-space'],
          codeShort: `@function array-magic($array, $unit: 'xrem') {...}`,
          code: `@function array-magic($array, $unit: 'xrem') {
  $_output: null;
  $_value: null;

  @for $i from 1 through length($array) {
    $_entry: nth($array, $i);

    @if type-of($_entry) == 'number' and unitless($_entry) == true {
      @if $_entry == 0 {
        $_value: #{$_entry};
      } @else {
        @if ($unit == 'xrem') {
          $_value: rem($_entry);
        } @else if($unit == 'xem') {
          $_value: em($_entry);
        } @else {
          $_value: unquote('#{$_entry * 1}#{$unit}');
        }
      }
    } @else {
      $_value: #{$_entry};
    }
    $_output: append($_output, $_value);
  }

  @return $_output;
}`,

          description: 'Converts an array or string of numbers into a a string of rem values',
          type: 'size-function',
          returns: 'string',
          example: `padding: array-magic(8 16); // returns rem(8) rem(16)`,
          require: [
            { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
            { name: 'em()', type: 'function', link: '#scroll-to-em' },
          ],
          usedBy: [{ name: 'get-space()', type: 'function', link: '#scroll-to-get-space' }],
          params: [
            {
              name: '$array',
              description: 'array or string of numbers',
              type: 'string | array',
            },
            {
              name: '$unit',
              type: 'xrem | xem | rem | px | em | % | pt',
              default: 'xrem',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'rem()',
          anchor: 'scroll-to-rem',
          description: 'Converts a px value into a rem value',
          type: 'size-function',
          usedBy: [
            {
              name: 'array-magic()',
              type: 'function',
              link: '#scroll-to-array-magic',
            },
          ],
          example: `width: rem(32); // returns 2rem`,
          returns: 'rem',
          codeShort: `@function rem($value, $base: $root-size) {...}`,
          code: `@function rem($value, $base: $root-size) {
  @if type-of($value) == 'number' and unitless($value) {
    @if ($value == 0) {
      @return $value;
    } @else {
      @return ($value / $base) + rem;
    }
  } @else {
    @return $value;
  }
}`,
          require: [
            {
              name: '$root-size',
              type: 'variable',
              link: '#scroll-to-root-size',
            },
          ],
          params: [
            {
              name: '$value',
              type: 'number',
            },
            {
              name: '$base',
              type: 'number',
              default: '$root-size',
            },
          ],
        },
        {
          toggleCode: false,
          anchor: 'scroll-to-em',
          title: 'em()',
          description: 'Converts a px value into a em value',
          type: 'size-function',
          usedBy: [
            {
              name: 'array-magic()',
              type: 'function',
              link: '#scroll-to-array-magic',
            },
          ],
          example: `font-size: em(16); // returns 1em
line-height: em(24, 12); // returns 2em`,
          returns: 'em',
          codeShort: `@function em($value, $base: $base-font-size) {...}`,
          code: `@function em($value, $base: $base-font-size) {
  @if type-of($value) == 'number' and unitless($value) {
    @return ($value / $base) * 1em;
  } @else {
    @return $value;
  }
}`,
          require: [
            {
              name: '$base-font-size',
              type: 'variable',
              link: '#scroll-to-base-font-size',
            },
          ],
          params: [
            {
              name: '$value',
              type: 'number',
            },
            {
              name: '$base',
              type: 'number',
              default: '$base-font-size',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'bp()',
          anchor: 'scroll-to-bp',
          description: 'get the breakpoints for responsiveness from a map',
          type: 'grid-function',
          example: `bp(sm) // returns 480px
bp(sm, max) // returns 479px`,
          returns: 'string',
          codeShort: `@function bp($breakpoint, $max: null, $map: $breakpoints) {...}`,
          code: `@function bp($breakpoint, $max: null, $map: $breakpoints) {
  @if map-has-key($map, $breakpoint) {
    @if $max == max {
      $_breakpoint-max: next-bp($breakpoint);
      @return if($_breakpoint-max, $_breakpoint-max - 1 * 1px, null);
    } @else {
      @return map-get($map, $breakpoint) * 1px;
    }
  } @else {
    @warn '#{$breakpoint} is not a key';
    @return null;
  }
}`,
          require: [
            {
              name: '$breakpoints',
              type: 'map',
              link: '#scroll-to-breakpoints',
            },
            {
              name: 'next-bp()',
              type: 'function',
              link: '#scroll-to-next-bp',
            },
          ],
          params: [
            {
              name: '$breakpoint',
              type: 'string',
              description: 'short code of the breakpoint',
            },
            {
              name: '$max',
              type: 'string',
              default: 'null',
            },
          ],
          usedBy: [
            { name: 'set-breakpoints()', type: 'mixin', link: '#scroll-to-set-breakpoints' },
            {
              name: 'set-data-breakpoints()',
              link: '#scroll-to-set-data-breakpoints',
            },
            {
              name: 'set-data-map-breakpoints()',
              link: '#scroll-to-set-data-map-breakpoints',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'next-bp()',
          anchor: 'scroll-to-next-bp',
          type: 'grid-function',
          usedBy: [
            {
              name: 'bp()',
              type: 'function',
              link: '#scroll-to-bp',
            },
          ],
          returns: 'string | null',
          codeShort: `@function next-bp($breakpoint, $map: $breakpoints) {...}`,
          code: `@function next-bp($breakpoint, $map: $breakpoints) {
  $_keys: map-keys($map);
  $_current: index($_keys, $breakpoint);

  @return if($_current < length($map), map-get($map, nth($_keys, $_current + 1)) * 1px, null);
}`,
          require: [
            {
              name: '$breakpoints',
              type: 'map',
              link: '#scroll-to-breakpoints',
            },
          ],
          params: [
            {
              name: '$breakpoint',
              type: 'string',
              description: 'short code of the breakpoint',
            },
            {
              name: '$map',
              type: 'map',
              default: '$breakpoints',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'flatten-color()',
          anchor: 'scroll-to-flatten-color',
          type: 'color-function',
          description: 'Mixes two colors, considering opacity',
          returns: 'color',
          usedBy: [
            { name: 'set-hover()', link: '#scroll-to-set-hover' },
            { name: 'set-contrast()', link: '#scroll-to-set-contrast' },
          ],
          example: `color: flatten-color(rgba(black, .2);`,
          codeShort: `@function flatten-color($fg, $bg: $background) {...}`,
          code: `@function flatten-color($fg, $bg: $background) {
  $a1: alpha($bg);
  $a2: alpha($fg);

  @if ($a1 == 0) {
    @if ($a2 == 0) {
      @return $fg;
    }
  }

  $a: $a2 + (1 - $a2) * $a1;
  $r: ($a2 * red($fg) + (1 - $a2) * $a1 * red($bg)) / $a;
  $g: ($a2 * green($fg) + (1 - $a2) * $a1 * green($bg)) / $a;
  $b: ($a2 * blue($fg) + (1 - $a2) * $a1 * blue($bg)) / $a;

  @return rgba($r, $g, $b, $a);
}`,
          require: [{ name: '$background', type: 'variable' }],
          params: [
            {
              name: '$fg',
              type: 'color',
              description: 'forground-color to be flattened',
            },
            {
              name: '$bg',
              type: 'color',
              default: '$background',
              description: 'background-color',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'get-color()',
          anchor: 'scroll-to-get-color',
          type: 'color-function',
          description: 'Mixes two colors, considering opacity',
          returns: 'color',
          example: `color: get-color(text, invert);
color: get-color(link);`,
          codeShort: `@function get-color($color-string...) {...}`,
          code: `@function get-color($color-string...) {
  $_string-length: length($color-string);
  $_color-map: $color-map-id;

  @if $_string-length == 1 {
    $_color-value: nth($color-string, 1);
    @return map-get(map-get($_color-map, base), $_color-value);
  }

  @if $_string-length == 2 {
    $_color-base: nth($color-string, 1);
    $_color-value: nth($color-string, 2);

    @return map-get(map-get($_color-map, $_color-base), $_color-value);
  }
}`,
          require: [{ name: '$color-map-id', type: 'variable', link: '#scroll-to-color-map-id' }],
          params: [
            {
              name: '$color-string',
              type: 'string',
              description: 'Name of the color',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'get-space()',
          anchor: 'scroll-to-get-space',
          type: 'layout-function',
          returns: 'number',
          codeShort: `@function get-space($space) {...}`,
          code: `@function get-space($space) {
  @return array-magic(map-get($spacings, $space), $base-spacing-unit);
};`,
          require: [
            { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
            { name: '$spacings', type: 'variables', link: '#scroll-to-spacings' },
            { name: '$base-spacing-unit', type: 'variables', link: '#scroll-base-spacing-unit' },
          ],
          params: [
            {
              name: '$space',
              type: 'string',
              description: 'key of map',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'set-hover()',
          anchor: 'scroll-to-set-hover',
          type: 'color-function',
          codeShort: `@function set-hover($color, $shade: $_set-hover-shading) {...}`,
          code: `@function set-hover($color, $shade: $_set-hover-shading) {
  @if type-of($color) == 'color' {
    $_brightness: get-brightness($color);

    @if (alpha($color) < 1) {
      $color: flatten-color($color);
    }

    // if color is brighter
    @if $_brightness > 180 {
      $shade: $shade * -1;
    }

    @return var-color($color, $shade);
  } @else {
    @return $color;
  }
}`,
          require: [
            { name: 'get-brightness()', type: 'function', link: '#scroll-to-get-brightness' },
            { name: 'var-color()', type: 'function', link: '#scroll-to-var-color' },
            { name: 'flatten-color()', type: 'function', link: '#scroll-to-flatten-color' },
            { name: '$_set-hover-shading', type: 'variable', link: '#scroll-to-set-hover-shading' },
          ],
          params: [
            {
              name: '$color',
              type: 'color',
            },
            {
              name: '$shade',
              type: 'number',
              description: 'amount by which the color should be shaded',
              default: '$_set-hover-shading',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'shade-by-contrast()',
          anchor: 'scroll-to-shade-by-contrast',
          description: `returns a shade of a color depending on it's lightness`,
          type: 'color-function',
          returns: 'color',
          codeShort: `@function shade-by-contrast($color, $amount) {...}`,
          code: `@function shade-by-contrast($color, $amount) {
  $_luma: luma($color);

  @if $_luma > .5 {
    @return var-color($color, $amount * -1);
  } @else {
    @return var-color($color, $amount);
  }
}`,
          require: [
            {
              name: 'luma()',
              type: 'function',
              link: '#scroll-to-luma',
            },
            {
              name: 'var-color()',
              type: 'function',
              link: '#scroll-to-var-color',
            },
          ],
          params: [
            {
              name: '$color',
              type: 'color',
            },
            {
              name: '$amount',
              type: 'number',
              description: 'value by which the color should be  to darkened or lightened',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'strip-unit()',
          anchor: 'scroll-to-strip-unit',
          description: `removes the unit of a value`,
          type: 'unit-function',
          returns: 'number',
          usedBy: [{ name: 'var-color()', link: '#scroll-to-var-color' }],
          example: `strip-unit(16px) // returns 16`,
          codeShort: `@function strip-unit($number) {...}`,
          code: `@function strip-unit($number) {
  @if type-of($number) == 'number' and not unitless($number) {
    @return $number / ($number * 0 + 1);
  }

  @return $number;
}`,
          params: [
            {
              name: '$number',
              type: 'string',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'system-color()',
          anchor: 'scroll-to-system-color',
          description: `harmonizes lightness and saturation of a color based on a set of colors`,
          type: 'color-function',
          returns: 'color',
          example: `system-color(#00E676) // returns a color with a hue value of 151`,
          codeShort: `@function system-color($target, $colors: $link $super $highlight) {...}`,
          code: `@function system-color($target, $colors: $link $super $highlight) {
  $_target-hue: hue($target);
  $_total-hue: 0;
  $_total-sat: 0;
  $_total-light: 0;

  @each $_color in $colors {
    $i: index($colors, $_color);
    $_total-hue: $_total-hue + hue($_color);
    $_total-sat: $_total-sat + saturation($_color);
    $_total-light: $_total-light + lightness($_color);
  }

  $_total-hue: $_total-hue / length($colors);
  $_total-sat: $_total-sat / length($colors);
  $_total-light: $_total-light / length($colors);

  @return hsl($_target-hue, $_total-sat, $_total-light);
}`,
          require: [
            {
              name: '$_system-color-ref',
              type: 'array',
              link: '#scroll-to-system-color-ref',
            },
          ],
          params: [
            {
              name: '$target',
              type: 'color',
              description: 'name of target color',
            },
            {
              name: '$colors',
              type: 'array',
              description: 'name of target color',
              default: '$_system-color-ref',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'var-color()',
          anchor: 'scroll-to-var-color',
          description: `generates a natural darker or lighter variation of a color. read <a href="https://medium.com/@erikdkennedy/color-in-ui-design-a-practical-framework-e18cacd97f9e" target="_blank" rel="nofollow">https://medium.com/@erikdkennedy/color-in-ui-design-a-practical-framework-e18cacd97f9e</a> for more.`,
          type: 'color-function',
          returns: 'color',
          usedBy: [
            { name: 'set-hover()', link: '#scroll-to-set-hover' },
            { name: 'shade-by-contrast()', link: '#scroll-to-shade-by-contrast' },
          ],
          example: `var-color(#ff0000, 20); // returns color: #fe6e67`,
          codeShort: `@function var-color($source, $amount) {...}`,
          code: `@function var-color($source, $amount) {
  // @param {string} $_h: hue value of source color
  // @param {string} $_l - lightness value of source color
  // @param {string} $_s - saturation value of source color
  // @param {number} $_h-ratio - ratio for increasing or decreasing hue based on $amount
  // @param {number} $_s-ratio -  ratio for increasing or decreasing saturation based on $amount
  // @param {string} $_target - target color value
  // @param {string} $_a - alpha color value
  $_h: strip-unit(hue($source));
  $_l: strip-unit(lightness($source));
  $_s: strip-unit(saturation($source));
  $_a: strip-unit(alpha($source));
  $_h-ratio: 0.15;
  $_s-ratio: 0.66;
  $_target: null;

  @if ($_a < 0.2 and $amount < 20 and $amount > -20) {
    $_target: rgba($source, $_a);
  } @else {
    @if ($amount > 0) {
      // if $amount is positive
      // color transformation to lighter and less saturated.
      // also the hue is transformed depending on its value
      //
      // @param {string} $_h-transform -  value for hue adjustment
      // @param {string} $_s-transform - value for desaturation
      $_h-transform: $amount * $_h-ratio;
      $_s-transform: $amount * $_s-ratio;

      @if ($_l == 100 and $_s == 0 or $_l == 100 and $_s == 0) {
      } @else {
        // if next to red hue is transformed towards red (0)
        @if ($_h < 60 and $_h >= 0) {
          $source: adjust-hue($source, $_h-transform);
        }

        // if next to green hue is transformed towards green (120)
        @if ($_h < 120 and $_h >= 60) {
          $source: adjust-hue($source, $_h-transform * -1);
        }

        // if next to green hue is transformed towards green (120)
        @if ($_h < 180 and $_h >= 120) {
          $source: adjust-hue($source, $_h-transform);
        }

        // if next to blue hue is transformed towards blue (240)
        @if ($_h < 240 and $_h >= 180) {
          $source: adjust-hue($source, $_h-transform * -1);
        }

        // if next to blue hue is transformed towards blue (240)
        @if ($_h < 300 and $_h >= 240) {
          $source: adjust-hue($source, $_h-transform);
        }

        // if next to red hue is transformed towards red (360)
        @if ($_h <= 360 and $_h >= 300) {
          $source: adjust-hue($source, $_h-transform * -1);
        }
      }

      $_target: lighten(desaturate($source, $_s-transform), $amount);
    } @else {
      // if $amount is negative
      // color transformation to darker and more saturated.
      // also the hue is transformed depending on its value
      // make value of $amount positive for transformation
      //
      // @param {string} $_h-transform - value for hue adjustment
      // @param {string} $_s-transform - value for desaturation
      $amount: $amount * -1;
      $_h-transform: $amount * $_h-ratio;
      $_s-transform: $amount * $_s-ratio;

      @if ($_l == 100 and $_s == 0 or $_l == 100 and $_s == 0) {
      } @else {
        // if next to red hue is transformed towards red (0)
        @if ($_h < 60 and $_h >= 0) {
          $source: adjust-hue($source, $_h-transform * -1);
        }

        // if next to green hue is transformed towards green (120)
        @if ($_h < 120 and $_h >= 60) {
          $source: adjust-hue($source, $_h-transform);
        }

        // if next to green hue is transformed towards green (120)
        @if ($_h < 180 and $_h >= 120) {
          $source: adjust-hue($source, $_h-transform * -1);
        }

        // if next to blue hue is transformed towards blue (120)
        @if ($_h < 240 and $_h >= 180) {
          $source: adjust-hue($source, $_h-transform);
        }

        // if next to blue hue is transformed towards blue (120)
        @if ($_h < 300 and $_h >= 240) {
          $source: adjust-hue($source, $_h-transform * -1);
        }

        // if next to red hue is transformed towards red (360)
        @if ($_h <= 360 and $_h >= 300) {
          $source: adjust-hue($source, $_h-transform);
        }
      }

      $_target: darken(saturate($source, $_s-transform), $amount);
    }
  }

  @return $_target;
}`,
          require: [
            {
              name: 'strip-unit()',
              type: 'function',
              link: '#scroll-to-strip-unit',
            },
          ],
          params: [
            {
              name: '$source',
              type: 'color',
              description: 'source color',
            },
            {
              name: '$amount',
              type: 'number',
              description: 'positive or negative number for color transformation',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'set-contrast()',
          anchor: 'scroll-to-set-contrast',
          description: `sets a contrast color based on the Web Content Accessibility Guidelines (WCAG). read <a href="https://www.w3.org/TR/AERT#color-contrast" target="_blank" rel="nofollow">https://www.w3.org/TR/AERT#color-contrast</a> for more.`,
          type: 'color-function',
          returns: 'color',
          example: `set-contrast(#fff) // returns #000`,
          codeShort: `@function set-contrast($color, $hue: $color) {...}`,
          code: `@function set-contrast($color, $hue: $color) {
  // remove transparency
  @if (alpha($color) < 1) {
    $color: flatten-color($color);
  }

  @if (alpha($hue) < 1) {
    $hue: flatten-color($hue);
  }

  @if $hue == $color {
    @return find-contrast-loop($color, $lighter-fallback, $darker-fallback);
  } @else {
    @return find-contrast-loop($color, $hue, $hue);
  }
}`,
          require: [
            {
              name: 'flatten-color()',
              type: 'function',
              link: '#scroll-to-flatten-color',
            },
            {
              name: 'find-contrast-loop()',
              type: 'function',
              link: '#scroll-to-find-contrast-loop',
            },
            {
              name: '$lighter-fallback',
              type: 'variable',
              link: '#scroll-to-lighter-fallback',
            },
            {
              name: '$darker-fallback',
              type: 'variable',
              link: '#scroll-to-darker-fallback',
            },
          ],
          usedBy: [
            {
              name: 'set-theme-color()',
              link: '#scroll-to-set-theme-color',
            },
          ],
          params: [
            {
              name: '$color',
              type: 'color',
              description: 'source color',
            },
            {
              name: '$hue',
              type: 'color',
              description: 'tweaks the output towards a specific hue',
              default: '$color',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'find-contrast-loop',
          anchor: 'scroll-to-find-contrast-loop',
          description: 'loop to find color shade with best contrast',
          type: 'color-function',
          returns: 'color',
          usedBy: [{ name: 'set-contrast()', link: '#scroll-to-set-contrast' }],
          codeShort: `@function find-contrast-loop($_color, $_lighter-hue, $_darker-hue) {...}`,
          code: `@function find-contrast-loop($_color, $_lighter-hue, $_darker-hue) {
  $_list: 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100;
  $_last: nth($_list, length($_list));
  $_final-color: null;
  $_aa: 7;
  $_aaa: 4.5;


  @each $percent in $_list {
    // darker variant
    $_darker: darken($_darker-hue, $percent);
    $_darker-color-diff: color-difference($_color, $_darker);
    $_darker-pass: color-pass($_color, $_darker);
    $_darker-margin: color-margin($_color, $_darker);
    $_darker-contrast: contrast-ratio($_color, $_darker);
    $_darker-aa: check-compliance($_color, $_darker, $_aa);
    $_darker-aaa: check-compliance($_color, $_darker, $_aaa);

    // lighter variant
    $_lighter: lighten($_lighter-hue, $percent);
    $_lighter-color-diff: color-difference($_color, $_lighter);
    $_lighter-pass: color-pass($_color, $_lighter);
    $_lighter-margin: color-margin($_color, $_lighter);
    $_lighter-contrast: contrast-ratio($_color, $_lighter);
    $_lighter-aa: check-compliance($_color, $_lighter, $_aa);
    $_lighter-aaa: check-compliance($_color, $_lighter, $_aaa);

    @if $_lighter-pass {
      @return $_lighter;
    }

    @if $_darker-pass {
      @return $_darker;
    }

    @if $_lighter-margin and $_lighter-aaa {
      @return $_lighter;
    }

    @if $_darker-margin and $_lighter-aaa {
      @return $_darker;
    }

    @if $percent == $_last {
      @if $_lighter-contrast > $_darker-contrast {
        $_final-color: $_lighter;
      } @else {
        $_final-color: $_darker;
      }
      @if $_lighter-aa {
        $_final-color: $_lighter;
      }
      @if $_darker-aa {
        $_final-color: $_darker;
      }
      @if $_lighter-aaa {
        $_final-color: $_lighter;
      }
      @if $_darker-aaa {
        $_final-color: $_darker;
      }
      @if $_lighter-margin and $_lighter-color-diff > $_darker-color-diff {
        $_final-color: $_lighter;
      }
      @if $_darker-margin and $_lighter-color-diff < $_darker-color-diff {
        $_final-color: $_darker;
      }
      @return $_final-color;
    }
  }
}`,
          params: [
            {
              name: '$_color',
              type: 'color',
              description: 'reference color',
            },
            {
              name: '$_lighter-hue',
              type: 'color',
              description: 'lighter-shade color',
            },
            {
              name: '$_darker-hue',
              type: 'color',
              description: 'darker-shade color',
            },
          ],
          require: [
            {
              name: 'color-difference()',
              link: '#scroll-to-color-difference',
              type: 'function',
            },
            {
              name: 'color-pass()',
              link: '#scroll-to-color-pass',
              type: 'function',
            },
            {
              name: 'color-margin()',
              link: '#scroll-to-color-margin',
              type: 'function',
            },
            {
              name: 'contrast-ratio()',
              link: '#scroll-to-contrast-ratio',
              type: 'function',
            },
            {
              name: 'check-compliance()',
              link: '#scroll-to-check-compliance',
              type: 'function',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'check-compliance()',
          anchor: 'scroll-to-check-compliance',
          description: `checks if a color meets the WCAG. read <a href="https://www.w3.org/TR/WCAG/#contrast-ratiodef" target="_blank" rel="nofollow">https://www.w3.org/TR/WCAG/#contrast-ratiodef</a> for more.`,
          type: 'color-function',
          returns: 'boolean',
          example: 'check-compliance(#fff, #ccc, 7) // returns false',
          codeShort: `@function check-compliance($_r, $_c, $_wcag) {...}`,
          code: `@function check-compliance($_r, $_c, $_wcag) {
  $_ratio: contrast-ratio($_r, $_c);
  @if ($_ratio >= $_wcag) {
    @return true;
  } @else {
    @return false;
  }
}`,
          require: [
            {
              name: 'contrast-ratio()',
              type: 'function',
              link: '#scroll-to-contrast-ratio',
            },
          ],
          usedBy: [
            {
              name: 'find-contrast-loop()',
              link: '#scroll-to-find-contrast-loop',
            },
          ],
          params: [
            {
              name: '$_r',
              type: 'color',
            },
            {
              name: '$_c',
              type: 'color',
            },
            {
              name: '$_wcag',
              type: 'number',
              description: 'WBAG compliance values (aaa: 7, aa: 4.5)',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'contrast-ratio()',
          anchor: 'scroll-to-contrast-ratio',
          description: `contrast ratios can range from 1 to 21`,
          type: 'color-function',
          returns: 'boolean',
          codeShort: `@function contrast-ratio($_c1, $_c2) {...}`,
          code: `@function contrast-ratio($_c1, $_c2) {
  $_l1: luma($_c1);
  $_l2: luma($_c2);
  @return round((max($_l1, $_l2) + 0.05) / (min($_l1, $_l2) + 0.05) * 100) / 100;
}`,
          require: [
            {
              name: 'luma()',
              type: 'function',
              link: '#scroll-to-luma',
            },
          ],
          usedBy: [
            {
              name: 'check-compliance()',
              link: '#scroll-to-check-compliance',
            },
            {
              name: 'find-contrast-loop()',
              link: '#scroll-to-find-contrast-loop',
            },
          ],
          params: [
            {
              name: '$_c1',
              type: 'color',
            },
            {
              name: '$_c2',
              type: 'color',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'luma()',
          anchor: 'scroll-to-luma',
          description: `calculates the perceptual brightness or luma of a color object.`,
          type: 'color-function',
          returns: 'number',
          usedBy: [
            { name: 'shade-by-contrast()', link: '#scroll-to-shade-by-contrast' },
            {
              name: 'contrast-ratio()',
              link: '#scroll-to-contrast-ratio',
            },
          ],
          codeShort: `@function luma($_c) {...}`,
          code: `@function luma($_c) {
  $_r: red($_c) / 255;
  $_g: green($_c) / 255;
  $_b: blue($_c) / 255;
  $_r: if($_r < 0.03928, $_r / 12.92, pow(($_r + 0.055) / 1.055, 2.4));
  $_g: if($_g < 0.03928, $_g / 12.92, pow(($_g + 0.055) / 1.055, 2.4));
  $_b: if($_b < 0.03928, $_b / 12.92, pow(($_b + 0.055) / 1.055, 2.4));
  $_l: (0.2126 * $_r + 0.7152 * $_g + 0.0722 * $_b);
  @return $_l;
}`,
          require: [
            {
              name: 'pow()',
              type: 'function',
              link: '#scroll-to-pow',
            },
          ],
          params: [
            {
              name: '$_c',
              type: 'color',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'color-margin()',
          description: 'lesser grade for color compliance',
          anchor: 'scroll-to-color-margin',
          type: 'color-function',
          returns: 'boolean',
          usedBy: [{ name: 'find-contrast-loop()', link: '#scroll-to-find-contrast-loop' }],
          codeShort: `@function color-margin($r, $c, $b-thr: 125, $c-thr: 500) {...}`,
          code: `@function color-margin($r, $c, $b-thr: 125, $c-thr: 500) {
  $_b-diff: brightness-difference($r, $c);
  $_c-diff: color-difference($r, $c);
  @return if($_b-diff > $b-thr or $_c-diff > $c-thr, true, false);
}`,
          require: [
            {
              name: 'brightness-difference()',
              type: 'function',
              link: '#scroll-to-brightness-difference',
            },
            {
              name: 'color-difference()',
              type: 'function',
              link: '#scroll-to-color-difference',
            },
          ],
          params: [
            {
              name: '$_r',
              type: 'color',
            },
            {
              name: '$_c',
              type: 'color',
            },
            {
              name: '$_b-thr',
              type: 'number',
              description: 'brightness threshhold',
              default: 125,
            },
            {
              name: '$_c-thr',
              type: 'number',
              description: 'color threshhold',
              default: 500,
            },
          ],
        },
        {
          toggleCode: false,
          title: 'color-pass()',
          description: 'best grade for color compliance',
          anchor: 'scroll-to-color-pass',
          type: 'color-function',
          returns: 'boolean',
          usedBy: [{ name: 'find-contrast-loop()', link: '#scroll-to-find-contrast-loop' }],
          codeShort: `@function color-pass($r, $c, $b-thr: 125, $c-thr: 500) {...}`,
          code: `@function color-pass($r, $c, $b-thr: 125, $c-thr: 500) {
  $_b-diff: brightness-difference($r, $c);
  $_c-diff: color-difference($r, $c);
  @return if($_b-diff > $b-thr and $_c-diff > $c-thr, true, false);
}`,
          require: [
            {
              name: 'brightness-difference()',
              type: 'function',
              link: '#scroll-to-brightness-difference',
            },
            {
              name: 'color-difference()',
              type: 'function',
              link: '#scroll-to-color-difference',
            },
          ],
          params: [
            {
              name: '$_r',
              type: 'color',
            },
            {
              name: '$_c',
              type: 'color',
            },
            {
              name: '$_b-thr',
              type: 'number',
              description: 'brightness threshhold',
              default: 125,
            },
            {
              name: '$_c-thr',
              type: 'number',
              description: 'color threshhold',
              default: 500,
            },
          ],
        },
        {
          toggleCode: false,
          title: 'color-difference()',
          anchor: 'scroll-to-color-difference',
          type: 'color-function',
          returns: 'number',
          codeShort: `@function color-difference($_c1, $_c2) {...}`,
          code: `@function color-difference($_c1, $_c2) {
            @return max(red($_c1), red($_c2)) - min(red($_c1), red($_c2)) +
    max(green($_c1), green($_c2)) - min(green($_c1), green($_c2)) +
    max(blue($_c1), blue($_c2)) - min(blue($_c1), blue($_c2));
}`,
          usedBy: [
            { name: 'find-contrast-loop()', link: '#scroll-to-find-contrast-loop' },
            { name: 'color-margin', link: '#scroll-to-color-margin' },
            { name: 'color-pass', link: '#scroll-to-color-pass' },
          ],
          params: [
            {
              name: '$_c1',
              type: 'color',
            },
            {
              name: '$_c1',
              type: 'color',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'brightness-difference()',
          description: 'an absolute number for the perceived brightness',
          anchor: 'scroll-to-brightness-difference',
          type: 'color-function',
          returns: 'number',
          codeShort: `@function brightness-difference($_c1, $_c2) {...}`,
          code: `@function brightness-difference($_c1, $_c2) {
  @return abs(get-brightness($_c1) - get-brightness($_c2));
}`,
          require: [
            {
              name: 'get-brightness()',
              link: '#scroll-to-get-brightness',
            },
          ],
          usedBy: [
            { name: 'color-margin', link: '#scroll-to-color-margin' },
            { name: 'color-pass', link: '#scroll-to-color-pass' },
          ],
          params: [
            {
              name: '$_c1',
              type: 'color',
            },
            {
              name: '$_c1',
              type: 'color',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'get-brightness()',
          description:
            'converts a RGB values to YIQ values. This brightness value gives a perceived brightness for a color.',
          anchor: 'scroll-to-get-brightness',
          type: 'color-function',
          returns: 'number',
          usedBy: [
            { name: 'set-hover()', link: '#scroll-to-set-hover' },
            { name: 'brightness-difference', link: '#scroll-to-brightness-difference' },
          ],
          codeShort: `@function get-brightness($_c) {...}`,
          code: `@function get-brightness($_c) {
  @return ((red($_c) * 299) + (green($_c) * 587) + (blue($_c) * 587)) / 1000;
}`,
          params: [
            {
              name: '$_c',
              type: 'color',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'pow()',
          description:
            'Handles decimal exponents by trying to convert them into a fraction and then use a nth-root-algorithm for parts of the calculation. See <a href="https://gist.github.com/voxpelli/6304812#file-_math-scss" target="_blank" rel="nofollow">https://gist.github.com/voxpelli/6304812#file-_math-scss</a>',
          anchor: 'scroll-to-pow',
          type: 'math-function',
          usedBy: [{ name: 'luma()', link: '#scroll-to-luma' }],
        },
      ],
    };
  },
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.type < b.type) {
          return -1;
        }
        if (a.type > b.type) {
          return 1;
        }
        return 0;
      }

      return this.items.sort(compare);
    },
  },
};
</script>

<style scoped lang="scss">
.table {
  thead {
    font-size: 0.75em;
  }
  td,
  th {
    text-align: left;
    padding: 8px 0;
  }
}

.is-clickable {
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
}
</style>
