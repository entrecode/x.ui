<template>
  <section class="demo-blocks-group">
    <div data-grid>
      <div data-col="8">
        <div v-for="(item, index) in sortedArray" :key="index" :id="item.anchor" class="is-padding-middle-5">
          <h3 v-if="item.title">
            {{ item.title }}&ensp;
            <div class="tag">{{ item.type }}</div>
          </h3>
          <div
            class="is-margin-bottom-5"
            v-if="item.codeShort"
            @click="item.code ? (item.toggleCode = !item.toggleCode) : null"
            v-show="!item.toggleCode"
            :class="{ 'is-clickable': item.code }"
          >
            <pre v-highlightjs="item.codeShort"><code class="scss" style="font-size: 16px;"></code></pre>
          </div>
          <div
            class="is-margin-bottom-5"
            v-if="item.code"
            v-show="item.toggleCode"
            @click="item.codeShort ? (item.toggleCode = !item.toggleCode) : null"
            :class="{ 'is-clickable': item.codeShort }"
          >
            <pre v-highlightjs="item.code"><code class="scss" style="font-size: 14px;"></code></pre>
          </div>
          <div class="is-margin-bottom-5" v-if="item.params">
            <h4 class="is-h4">parameters</h4>
            <table class="table">
              <thead>
                <tr data-grid="no-gutter">
                  <th data-col="2">Name</th>
                  <th data-col="5">Description</th>
                  <th data-col="2">Type</th>
                  <th data-col="3">Default Value</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(param, index) in item.params" :key="index" data-grid="no-gutter">
                  <td data-col="2"><div class="code" v-text="param.name"></div></td>
                  <td data-col="5" v-text="param.description"></td>
                  <td data-col="2" v-text="param.type"></td>
                  <td data-col="3"><div class="code" v-text="param.default"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="is-margin-bottom-5" v-if="item.description">
            <h4 class="is-h4">description</h4>
            <p v-html="item.description"></p>
          </div>
          <div class="is-margin-bottom-5" v-if="item.returns">
            <h4 class="is-h4">returns</h4>
            <div class="code" v-text="item.returns"></div>
          </div>
          <div class="is-margin-bottom-5" v-if="item.example">
            <h4 class="is-h4">example</h4>
            <pre v-highlightjs="item.example"><code class="scss"></code></pre>
          </div>
          <div class="is-margin-bottom-5" v-if="item.require">
            <h4 class="is-h4">requires</h4>
            <ul data-grid="small-gutter">
              <li v-for="(req, index) in item.require" :key="index" data-col="fit">
                <a :href="req.link" class="code" v-text="req.name" v-if="req.link" v-smooth-scroll></a>
                <span class="code" v-text="req.name" v-else></span>
              </li>
            </ul>
          </div>
          <div class="is-margin-bottom-5" v-if="item.usedBy">
            <h4 class="is-h4">used by</h4>
            <ul data-grid="small-gutter">
              <li v-for="(used, index) in item.usedBy" :key="index" data-col="fit" class="is-padding-bottom-3">
                <a :href="used.link" class="code" v-text="used.name" v-if="used.link" v-smooth-scroll></a>
                <span class="code" v-text="used.name" v-else></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div data-col="4">
        <ul class="nav nav_stacked is-sticky" style="top: 120px;">
          <li class="nav__item"><h2>mixins</h2></li>
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
  name: 'Mixins',
  data: () => {
    return {
      items: [
        {
          toggleCode: false,
          title: 'clearfix',
          description: 'mixin to fix floating and overflow bug',
          anchor: 'scroll-to-clearfix',
          codeShort: `@mixin clearfix {...}`,
          code: `@mixin clearfix {
  &::before,
  &::after {
    content: '';
    display: table;
  }

  &::after {
    clear: both;
  }
}`,
          type: 'layout-mixin',
        },
        {
          toggleCode: false,
          title: 'headings',
          description: 'mixin to apply styles to all heading elements',
          anchor: 'scroll-to-headings-mixin',
          codeShort: `@mixin headings {...}`,
          code: `@mixin headings {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @content;
  }
}`,
          type: 'typeface-mixin',
          example: `@include headings {
  color: red;
}

//returns
h1,
h2,
h3,
h4,
h5,
h6 {
  color: red;
}`,
          usedBy: [
            {
              name: '_alert__inline.scss',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'ellipsis',
          anchor: 'scroll-to-ellipsis',
          codeShort: `@mixin ellipsis {...}`,
          code: `@mixin ellipsis {
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}`,
          type: 'typeface-mixin',
          usedBy: [{ name: '_word-wrap.scss' }],
        },
        {
          toggleCode: false,
          title: 'placeholder',
          anchor: 'scroll-to-placeholder',
          codeShort: `@mixin placeholder {...}`,
          code: `@mixin placeholder {
  &::-webkit-input-placeholder {
    @content;
  }

  &::-moz-placeholder {
    @content;
  }

  &::-moz-placeholder {
    @content;
  }

  &:-ms-input-placeholder {
    @content;
  }
}`,
          type: 'form-mixin',
          usedBy: [
            {
              name: '_input.scss',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'elevation()',
          description:
            'adds an elevation-shadow. <a href="https://github.com/angular/material2/blob/8050f633b56b6c048fc72dad2ab79304afdfad19/src/lib/core/style/_elevation.scss" target="_blank" rel="nofollow" style="word-break: break-all;">https://github.com/angular/material2/blob/8050f633b56b6c048fc72dad2ab79304afdfad19/src/lib/core/style/_elevation.scss</a>.',
          anchor: 'scroll-to-elevation',
          type: 'style-mixin',
          example: '@include elevation($zValue, $color: $elevation-color, $opacity: $elevation-opacity);',
          require: [
            {
              name: '$elevation-color',
              link: '#scroll-to-elevation-color',
            },
            {
              name: '$elevation-opacity',
              link: '#scroll-to-elevation-opacity',
            },
          ],
          params: [
            {
              name: '$zValue',
              type: 'number',
              description: 'a value between 0-24',
            },
            {
              name: '$color',
              type: 'color',
              description: 'color of the shadow',
              default: '$elevation-color',
            },
            {
              name: '$opacity',
              type: 'number',
              description: 'opacity of the shadow',
              default: '$elevation-opacity',
            },
          ],
          usedBy: [
            {
              name: '_is-elevated.scss',
            },
            { name: '_card.scss' },
            { name: '_modal.scss' },
          ],
        },
        {
          toggleCode: false,
          title: 'get-font-size()',
          description: '',
          codeShort: `@mixin get-font-size(
  $level,
  $map: $type-scale,
  $bp: $type-scale-bp,
  $unit: $type-scale-unit
) {...}`,
          code: `@mixin get-font-size(
  $level,
  $map: $type-scale,
  $bp: $type-scale-bp,
  $unit: $type-scale-unit
) {
  @for $i from 1 through length($bp) {
    $key: nth(map-keys($bp), $i);
    $size: map-get($map, $level);

    @media (min-width: bp($key)) {
      $scale: map-get($bp, $key);
      font-size: array-magic($size * $scale, $unit);
    }
  }
}`,
          anchor: 'scroll-to-get-font-size',
          example: '@include get-font-size(h1);',
          type: 'typeface-mixin',
          require: [
            {
              name: '$type-scale',
              link: '#scroll-to-type-scale',
            },
            {
              name: '$type-scale-bp',
              link: '#scroll-to-type-scale-bp',
            },
            {
              name: '$type-scale-unit',
              link: '#scroll-to-type-scale-unit',
            },
          ],
          params: [
            {
              name: '$level',
              type: 'string',
              description: 'key of the map refered in $map',
            },
            {
              name: '$map',
              description: 'modular scale for typeface',
              type: 'map',
              default: '$type-scale',
            },
            {
              name: '$bp',
              type: 'map',
              description: 'breakpoints for modular scale',
              default: '$type-scale-bp',
            },
            {
              name: '$unit',
              type: 'string',
              description: 'unit for modular scale',
              default: '$type-scale-unit',
            },
          ],
          usedBy: [
            {
              name: '_headings.scss',
            },
            {
              name: '_is-lead.scss',
            },
            {
              name: '_is-type.scss',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'metrics()',
          description: '',
          codeShort: `@mixin metrics($font-size, $line-height, $min-height, $border: null, $padding-ratio: 2) {...}`,
          code: `@mixin metrics($font-size, $line-height, $min-height, $border: null, $padding-ratio: 2) {
  $padding: false;

  // check if $min-height is a number, some of the styles will not be rendered
  @if type-of($min-height) == 'number' {
    $padding: ($min-height - $line-height) / 2;
  } @else {
    $padding: ($line-height - $font-size) / 2;
  }

  // remove border from padding
  @if $border {
    $padding: ($padding - $border);
  }

  padding: array-magic($padding ($padding * $padding-ratio));

  font-size: rem($font-size);
  line-height: rem($line-height);
  min-height: rem($min-height);
  min-width: rem($min-height);

  @if $border {
    border-style: solid;
    border-width: rem($border);
  }

  @content;
}`,
          anchor: 'scroll-to-metrics',
          type: 'layout-mixin',
          params: [
            {
              name: '$font-size',
              type: 'number',
            },
            {
              name: '$line-height',
              type: 'number',
            },
            {
              name: '$min-height',
              type: 'number',
            },
            {
              name: '$border',
              type: 'number',
              default: 'null',
            },
            {
              name: '$padding-ratio',
              description: 'ratio by which padding-left and padding-right are bigger',
              type: 'number',
              default: '2',
            },
          ],
          usedBy: [
            {
              name: '_btn.scss',
            },
            {
              name: '_btn_outlined.scss',
            },
            {
              name: '_hamburger-btn.scss',
            },
            {
              name: '_input.scss',
            },
            {
              name: '_tag.scss',
            },
            {
              name: '_tag_outlined.scss',
            },
            {
              name: '_xui-select.scss',
            },
            {
              name: '_data-tooltip.scss',
            },
            {
              name: '_dropdown.scss',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'inject-style()',
          anchor: 'scroll-to-inject-style',
          codeShort: `@mixin inject-style($style) {...}`,
          code: `@mixin inject-style($style) {
  @if $style {
    @each $_key, $_value in $style {
      $_value-type: type-of($_value);

      @if $_value-type == map {
        $c-style: $_value;

        @if $_key == responsive {
          $r-style: $_value;

          @each $_r-key, $_r-value in $r-style {
            @media (min-with: #{$_r-key}) {
              $rc-style: $_r-value;
              @each $_rc-key, $_rc-value in $rc-style {
                #{$_rc-key}: $_rc-value;
              }
            }
          }
        } @else {
          #{$_key} {
            @each $_c-key, $_c-value in $c-style {
              #{$_c-key}: $_c-value;
            }
          }
        }
      } @else {
        #{$_key}: $_value;
      }
    }
  }
}`,
          type: 'style-mixin',
          description: 'mixin to turn maps into scss',
          params: [{ name: '$style', type: 'map' }],
          example: `$example: (
   color: #ff0,
   '&:hover': (
     color: #ff0
   ),
   responsive: (
     800px: (
       display: none
     )
   )
);

.example {
  @include inject-style($example);
}

// returns

.example {
  color: #ff0

  &:hover {
    color: #ff0;
  }

  @media (min-width: 800px) {
    display: none;
  }
}`,
          usedBy: [
            { name: '_avatar.scss' },
            { name: '_btn.scss' },
            { name: '_btn_clear.scss' },
            { name: '_btn_invert.scss' },
            { name: '_btn_minor.scss' },
            { name: '_btn_super.scss' },
            { name: '_btn_outlined.scss' },
            { name: '_fieldset.scss' },
            { name: '_file-upload.scss' },
            { name: '_hamburger-btn.scss' },
            { name: '_headings.scss' },
            { name: '_input.scss' },
            { name: '_input-group.scss' },
            { name: '_is-lead.scss' },
            { name: '_loader.scss' },
            { name: '_mark.scss' },
            { name: '_range-slider.scss' },
            { name: '_tag.scss' },
            { name: '_type.scss' },
            { name: '_xui-checkbox.scss' },
            { name: '_xui-radio.scss' },
            { name: '_xui-select.scss' },
            { name: '_xui-toggle.scss' },
            { name: '_xui-tooltip.scss' },
            { name: '_alert.scss' },
            { name: '_alert_outlined.scss' },
            { name: '_btn-group.scss' },
            { name: '_dropdown.scss' },
            { name: '_field-group.scss' },
            { name: '_modal.scss' },
            { name: '_nav.scss' },
            { name: '_well.scss' },
            { name: '_xui-tabs.scss' },
            { name: '_titlebar.scss' },
            { name: '_xui-list.scss' },
          ],
        },
        {
          toggleCode: false,
          title: 'set-theme-colors()',
          description: 'sets background-color and matching text-color',
          anchor: 'scroll-to-set-theme-colors',
          codeShort: `@mixin set-theme-colors($color, $hue: false) {...}`,
          code: `@mixin set-theme-colors($color, $hue: false) {
  background-color: $color;
  @if $hue {
    color: set-contrast($color, $hue);
  } @else {
    color: set-contrast($color);
  }
}`,
          type: 'theme-mixin',
          params: [
            {
              name: '$color',
              type: 'color',
            },
            {
              name: '$hue',
              type: 'color',
              default: 'false',
              description: 'color value for hue orientation',
            },
          ],
          require: [
            {
              name: 'set-contrast()',
              link: '#scroll-to-set-contrast',
            },
          ],
          usedBy: [
            {
              name: '_divider.scss',
            },
            { name: '_space.scss' },
            { name: '_has-height.scss' },
            { name: '_has-margin.scss' },
            { name: '_has-padding.scss' },
            { name: '_has-width.scss' },
            { name: '_not-positioned.scss' },
            { name: '_pull.scss' },
            { name: '_word-wrap.scss' },
          ],
        },
        {
          toggleCode: false,
          title: 'word-wrap',
          description: 'mixin for word wrapping using hyphen',
          anchor: 'scroll-to-word-wrap-mixin',
          codeShort: `@mixin word-wrap {...}`,
          code: `@mixin word-wrap {
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  hyphens: auto;
}`,
          type: 'typeface-mixin',
          usedBy: [
            {
              name: '_word-wrap.scss',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'is-scrollable',
          anchor: 'scroll-to-is-scrollable-mixin',
          codeShort: `@mixin is-scrollable($axis: both, $contain: false, $behavior: scroll) {
  -webkit-overflow-scrolling: touch;

  @if $axis == 'both' {
    overflow: #{$behavior};
    @if $contain != false {
      overscroll-behavior: contain;
    }
  } @else if $axis == 'x' {
    overflow-x: #{$behavior};
    overflow-y: hidden;
    @if $contain != false {
      overscroll-behavior-x: contain;
    }
  } @else if $axis == 'y' {
    overflow-y: #{$behavior};
    overflow-x: hidden;
    @if $contain != false {
      overscroll-behavior-y: contain;
    }
  }
}`,
          type: 'layout-mixin',
          usedBy: [
            {
              name: '_xui-select.scss',
              name: '_dropdown.scss',
              name: '_modal.scss',
            },
          ],
          params: [
            {
              name: '$axis',
              type: 'enum',
              description: 'can be both | x | y',
              default: 'both',
            },
            {
              name: '$contain',
              type: 'boolean',
              default: 'false',
              description: 'sets overscroll-behavior: contain if true.',
            },
            {
              name: '$behavior',
              type: 'enum',
              description: 'can be scroll | auto',
              default: 'scroll',
            },
          ],
          usedBy: [
            {
              name: '_word-wrap.scss',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'set-breakpoints()',
          description: 'mixin for repeating styles with breakpoints',
          anchor: 'scroll-to-set-breakpoints',
          codeShort: `@mixin set-breakpoints($area: false, $has-root: true) {...}`,
          code: `@mixin set-breakpoints($area: false, $has-root: true) {
  @if $has-root == true {
    @content;
  }

  @if $area == true {
    @each $bp in $map-keys($breakpoints) {
      @if index($bps, $bp) == length($breakpoints) {
        &\@#{$bp} {
          @media (min-width: bp(#{$bp})) {
            @content;
          }
        }
      } @else {
        &\@#{$bp} {
          @media (min-width: bp(#{$bp})) and (max-width: bp(#{$bp}, max)) {
            @content;
          }
        }
      }
    }
  } @else {
    @each $bp in map-keys($breakpoints) {
      &\@#{$bp} {
        @media (min-width: bp(#{$bp})) {
          @content;
        }
      }
    }
  }
}`,
          type: 'layout-mixin',
          params: [
            {
              name: '$area',
              type: 'boolean',
              default: 'false',
              description: 'set a range for the media query using min-width and max-width media queries if true',
            },
            {
              name: '$has-root',
              type: 'boolean',
              default: 'true',
              description: 'sets @content for a root element without a media-query',
            },
          ],
          require: [
            {
              name: '$breakpoints',
              link: '#scroll-to-breakpoints',
            },
            {
              name: 'bp()',
              link: '#scroll-to-bp',
            },
          ],
          usedBy: [
            {
              name: '_divider.scss',
            },
            { name: '_space.scss' },
            { name: '_has-height.scss' },
            { name: '_has-margin.scss' },
            { name: '_has-padding.scss' },
            { name: '_has-width.scss' },
            { name: '_not-positioned.scss' },
            { name: '_pull.scss' },
            { name: '_word-wrap.scss' },
          ],
        },
        {
          toggleCode: false,
          title: 'set-data-breakpoints()',
          description: 'mixin for repeating styles with breakpoints used for an attribute related style',
          anchor: 'scroll-to-set-data-breakpoints',
          codeShort: `@mixin set-data-breakpoints($data, $data-value, $area: false, $has-root: true) {...}`,
          code: `@mixin set-data-breakpoints($data, $data-value, $area: false, $has-root: true) {
  @if $has-root == true {
    [data-#{$data}~='#{$data-value}'] {
      @content;
    }
  }

  @if $area == true {
    @each $bp in map-keys($breakpoints) {
      [data-#{$data}~='#{$data-value}\@#{$bp}'] {
        @media (min-width: bp(#{$bp})) and (max-width: bp(#{$bp}, max)) {
          @content;
        }
      }
    }
  } @else {
    @each $bp in map-keys($breakpoints) {
      [data-#{$data}~='#{$data-value}\@#{$bp}'] {
        @media (min-width: bp(#{$bp})) {
          @content;
        }
      }
    }
  }
}`,
          type: 'layout-mixin',
          usedBy: [],
          params: [
            {
              name: '$data',
              type: 'string',
              description: 'name of the data-attribute',
            },
            {
              name: '$data-value',
              type: 'string',
              description: 'value of data-attribute',
            },
            {
              name: '$area',
              type: 'boolean',
              description: 'set a range for the media query using min-width and max-width media queries if true',
              default: 'false',
            },
            {
              name: '$has-root',
              type: 'boolean',
              description: 'sets @content for the root element without a media-query',
              default: 'true',
            },
          ],
          require: [
            {
              name: 'bp()',
              link: '#scroll-to-bp',
            },
            {
              name: '$breakpoints',
              link: '#scroll-to-breakpoints',
            },
          ],
          usedBy: [
            {
              name: '_data-container.scss',
              name: '_data-grid.scss',
            },
          ],
        },
        {
          toggleCode: false,
          title: 'set-data-map-breakpoints()',
          description: 'mixin for repeating styles with breakpoints used for attribute selectors using a map',
          anchor: 'scroll-to-set-data-map-breakpoints',
          codeShort: `@mixin set-data-map-breakpoints($attr-name, $css-attr, $attr-map, $area: false, $has-root: true) {...}`,
          code: `@mixin set-data-map-breakpoints($attr-name, $css-attr, $attr-map, $area: false, $has-root: true) {
  @if $has-root == true {
    @each $_attr-key in map-keys($attr-map) {
      $v: map-get($attr-map, $_attr-key);

      [data-#{$attr-name}~='#{$_attr-key}'] {
        #{$css-attr}: #{$v};
      }
    }
  }

  @if $area == true {
    @each $bp in map-keys($breakpoints) {
      @each $_attr-key in map-keys($attr-map) {
        $v: map-get($attr-map, $_attr-key);

        [data-#{$attr-name}~='#{$_attr-key}\@#{$bp}'] {
          @media (min-width: bp(#{$bp})) and (max-width: bp(#{$bp}, max)) {
            #{$css-attr}: #{$v};
          }
        }
      }
    }
  } @else {
    @each $bp in map-keys($breakpoints) {
      @each $_attr-key in map-keys($attr-map) {
        $v: map-get($attr-map, $_attr-key);

        [data-#{$attr-name}~='#{$_attr-key}\@#{$bp}'] {
          @media (min-width: bp(#{$bp})) {
            #{$css-attr}: #{$v};
          }
        }
      }
    }
  }
}`,
          type: 'layout-mixin',
          usedBy: [],
          params: [
            {
              name: '$attr-name',
              type: 'string',
              description: 'name of the data-attribute. will be prefixed with data-.',
            },
            {
              name: '$css-attr',
              type: 'string',
              description: 'name of the used css-attribute',
            },
            {
              name: '$attr-map',
              type: 'map',
              description: 'map width css-attribute values',
            },
            {
              name: '$area',
              type: 'boolean',
              description: 'set a range for the media query using min-width and max-width media queries if true',
              default: 'false',
            },
            {
              name: '$has-root',
              type: 'boolean',
              description: 'styles are applied for the root element without a media-query if true',
              default: 'true',
            },
          ],
          require: [
            {
              name: 'bp()',
              link: '#scroll-to-bp',
            },
            {
              name: '$breakpoints',
              link: '#scroll-to-breakpoints',
            },
          ],
          usedBy: [
            { name: '_flex-item-align.scss' },
            { name: '_data-flex-content.scss' },
            { name: '_data-flex-direction.scss' },
            { name: '_data-flex-items.scss' },
            { name: '_data-flex-justify.scss' },
            { name: '_data-flex-order.scss' },
            { name: '_data-flex-wrap.scss' },
          ],
        },
      ],
    };
  },
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
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
