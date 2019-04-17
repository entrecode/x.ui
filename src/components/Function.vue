<template>
  <section>
    <div data-container>
      <div data-grid>
        <div data-col="10">
          <div
            v-for="(item, index) in items"
            :key="index"
            :id="item.anchor"
            class="has-margin-bottom-8"
          >
            <h3 v-if="item.title">
              {{ item.title }}&ensp;
              <div class="tag">{{ item.type }}</div>
            </h3>
            <div
              class="has-margin-bottom-5"
              v-if="item.codeShort"
              @click="item.code ? item.toggleCode = !item.toggleCode : null"
              v-show="!item.toggleCode"
              :class="{'is-clickable' : item.code}"
            >
              <pre v-highlightjs="item.codeShort"><code class="scss" style="font-size: 16px;"></code></pre>
            </div>
            <div
              class="has-margin-bottom-5"
              v-if="item.code"
              v-show="item.toggleCode"
              @click="item.codeShort ? item.toggleCode = !item.toggleCode : null"
              :class="{'is-clickable' : item.codeShort}"
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
                    <td>
                      <div class="code" v-text="param.name"></div>
                    </td>
                    <td v-text="param.description"></td>
                    <td v-text="param.type"></td>
                    <td>
                      <div class="code" v-text="param.default"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="has-margin-bottom-5" v-if="item.description">
              <h4 class="is-h4">description</h4>
              <p v-text="item.description"></p>
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
              <ul data-grid="is-small">
                <li v-for="(req, index) in item.require" :key="index" data-col="is-fit">
                  <a
                    :href="req.link"
                    class="code"
                    v-text="req.name"
                    v-if="req.link"
                    v-smooth-scroll
                  ></a>
                  <span class="code" v-text="req.name" v-else></span>
                </li>
              </ul>
            </div>
            <div class="has-margin-bottom-5" v-if="item.usedBy">
              <h4 class="is-h4">used by</h4>
              <ul data-grid="is-small">
                <li v-for="(used, index) in item.usedBy" :key="index" data-col="is-fit">
                  <a
                    :href="used.link"
                    class="code"
                    v-text="used.name"
                    v-if="used.link"
                    v-smooth-scroll
                  ></a>
                  <span class="code" v-text="used.name" v-else></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div data-col="2">
          <ul class="nav nav_stacked is-sticky" style="top: 120px;">
            <li class="nav__item">
              <h2>functions</h2>
            </li>
            <li class="nav__item" v-for="(item, index) in items" :key="index">
              <a :href="'#' + item.anchor" v-smooth-scroll class="is-kilo is-ink hover:is-ink-link">{{item.title}}</a>
            </li>
          </ul>
        </div>
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
          title: 'arrayMagic()',
          anchor: 'scroll-to-array-magic',
          usedBy: ['getSpace'],
          codeShort: `@function arrayMagic($array, $unit: 'xrem') {...}`,
          code: `@function arrayMagic($array, $unit: 'xrem') {
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
          example: `padding: arrayMagic(8 16); // returns rem(8) rem(16)`,
          require: [
            { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
            { name: 'em()', type: 'function', link: '#scroll-to-em' },
          ],
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
              name: 'arrayMagic()',
              type: 'function',
              link: '#scroll-to-array-magic',
            },
          ],
          example: `width: rem(32); // returns 2rem`,
          return: 'rem',
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
              name: 'arrayMagic()',
              type: 'function',
              link: '#scroll-to-array-magic',
            },
          ],
          example: `font-size: em(16); // returns 1em
line-height: em(24, 12); // returns 2em`,
          return: 'em',
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
          return: 'string',
          codeShort: `@function bp($breakpoint, $max: null) {...}`,
          code: `@function bp($breakpoint, $max: null) {
  @if map-has-key($breakpoints, $breakpoint) {
    @if $max == max {
      $_breakpoint-max: nextBp($breakpoint);
      @return if($_breakpoint-max, $_breakpoint-max - 1 * 1px, map-get($breakpoints, $breakpoint) * 1px);
    } @else {
      @return map-get($breakpoints, $breakpoint) * 1px;
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
              name: 'nextBp()',
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
        },
        {
          toggleCode: false,
          title: 'nextBp()',
          anchor: 'scroll-to-next-bp',
          type: 'grid-function',
          usedBy: [
            {
              name: 'bp()',
              type: 'function',
              link: '#scroll-to-bp',
            },
          ],
          return: 'string | null',
          codeShort: `@function nextBp($breakpoint, $map: $breakpoints) {...}`,
          code: `@function nextBp($breakpoint, $map: $breakpoints) {
  $_keys: map-keys($map);
  $_current: index($_keys, $breakpoint);

  @return if($_current < length($map), map-get($map, nth($_keys, $_current + 1)), null);
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
          title: 'flattenColor()',
          anchor: 'scroll-to-flatten-color',
          type: 'color-function',
          description: 'Mixes two colors, considering opacity',
          return: 'color',
          example: `color: flattenColor(rgba(black, .2);`,
          codeShort: `@function flattenColor($fg, $bg: $background) {...}`,
          code: `@function flattenColor($fg, $bg: $background) {
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
          title: 'getColor()',
          anchor: 'scroll-to-get-color',
          type: 'color-function',
          description: 'Mixes two colors, considering opacity',
          return: 'color',
          example: `color: getColor(text, invert);
color: getColor(link);`,
          codeShort: `@function getColor($color-string...) {...}`,
          code: `@function getColor($color-string...) {
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
          title: 'getSpace()',
          anchor: 'scroll-to-get-space',
          type: 'layout-function',
          return: 'number',
          codeShort: `@function getSpace($space) {...}`,
          code: `@function getSpace($space) {
  @return arrayMagic(map-get($spacings, $space), $base-spacing-unit);
};`,
          require: [
            { name: 'arrayMagic()', type: 'function', link: '#scroll-to-array-magic' },
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
          title: 'setHover()',
          anchor: 'scroll-to-set-hover',
          type: 'color-function',
          codeShort: `@function setHover($color, $shade: $_set-hover-shading) {...}`,
          code: `@function setHover($color, $shade: $_set-hover-shading) {
  @if type-of($color) == 'color' {
    $_brightness: getBrightness($color);

    @if (alpha($color) < 1) {
      $color: flattenColor($color);
    }

    // if color is brighter
    @if $_brightness > 180 {
      $shade: $shade * -1;
    }

    @return varColor($color, $shade);
  } @else {
    @return $color;
  }
}`,
          require: [
            { name: 'getBrightness()', type: 'function', link: '#scroll-to-get-brightness' },
            { name: 'varColor()', type: 'function', link: '#scroll-to-var-color' },
            { name: 'flattenColor()', type: 'function', link: '#scroll-to-flatten-color' },
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
          title: 'shadeByContrast()',
          anchor: 'scroll-to-shade-by-contrast',
          description: `returns a shade of a color depending on it's lightness`,
          type: 'color-function',
          return: 'color',
          codeShort: `@function shadeByContrast($color, $amount) {...}`,
          code: `@function shadeByContrast($color, $amount) {
  $_luma: luma($color);

  @if $_luma > .5 {
    @return varColor($color, $amount * -1);
  } @else {
    @return varColor($color, $amount);
  }
}`,
          require: [
            {
              name: 'luma()',
              type: 'function',
              link: '#scroll-to-luma',
            },
            {
              name: 'varColor()',
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
          title: 'stripUnit()',
          anchor: 'scroll-to-strip-unit',
          description: `removes the unit of a value`,
          type: 'unit-function',
          return: 'number',
          example: `stripUnit(16px) // returns 16`,
          codeShort: `@function stripUnit($number) {...}`,
          code: `@function stripUnit($number) {
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
      ],
    };
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
