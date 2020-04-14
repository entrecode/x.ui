<template>
  <section>
    <div class="titlebar">
      <h1>variables</h1>
    </div>
    <div data-grid>
      <div data-col="8">
        <div
          v-for="(item, index) in sortedArray"
          :key="index"
          :id="item.anchor"
          class="is-margin-bottom-8 is-border-bottom is-padding-bottom-4"
        >
          <h3 v-if="item.title">
            {{ item.title }}&ensp;
            <div class="tag">{{ item.type }}</div>
          </h3>
          <div class="is-margin-bottom-5" v-if="item.code">
            <pre v-highlightjs="item.code"><code class="scss" style="font-size: 14px;"></code></pre>
          </div>
          <div class="is-margin-bottom-5" v-if="item.description">
            <h4 class="is-h4">description</h4>
            <p v-text="item.description"></p>
          </div>
          <div class="is-margin-bottom-5" v-if="item.require">
            <h4 class="is-h4">requires</h4>
            <ul data-grid="smaller-gutter">
              <li v-for="(req, index) in item.require" :key="index" data-col="fit">
                <a :href="req.link" class="code" v-text="req.name" v-if="req.link"></a>
                <span class="code" v-text="req.name" v-else></span>
              </li>
            </ul>
          </div>
          <div class="is-margin-bottom-5" v-if="item.usedBy">
            <h4 class="is-h4">used by</h4>
            <ul data-grid="smaller-gutter">
              <li v-for="(used, index) in item.usedBy" :key="index" data-col="fit">
                <a :href="used.link" class="code" v-text="used.name" v-if="used.link"></a>
                <span class="code" v-text="used.name" v-else></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div data-col="4">
        <ul class="nav nav_stacked is-sticky" style="top: 120px;">
          <li class="nav__item" v-for="(item, index) in sortedArray" :key="index">
            <a :href="'#' + item.anchor" class="is-kilo is-ink hover:is-ink-link">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Variables',
  data: () => {
    return {
      items: [
        {
          title: '$root-size',
          anchor: 'scroll-to-root-size',
          usedBy: [{ name: 'rem()', type: 'function', link: '#scroll-to-rem' }],
          code: `$root-size: 16 !default;`,
          type: 'number',
        },
        {
          title: '$_luma-text',
          anchor: 'scroll-to-luma-text',
          usedBy: [
            { name: '$lighter-fallback', type: 'variable', link: '#scroll-to-lighter-fallback' },
            { name: '$darker-fallback', type: 'variable', link: '#scroll-to-darker-fallback' },
          ],
          code: `$root-size: 16 !default;`,
          type: 'number',
        },
        {
          title: '$lighter-fallback',
          anchor: 'scroll-to-lighter-fallback',
          usedBy: [{ name: 'set-contrast()', type: 'function', link: '#scroll-to-set-contrast' }],
          require: [
            {
              name: '$_luma-text',
              type: 'number',
              link: '#scroll-to-luma-text',
            },
            {
              name: '$text',
              type: 'color',
            },
            {
              name: '$background',
              type: 'color',
            },
          ],
          code: `$lighter-fallback: false !default;

@if $lighter-fallback == false {
  @if $_luma-text > 0.5 {
    $lighter-fallback: $text;
  } @else {
    $lighter-fallback: $background;
  }
}`,
          type: 'color',
        },
        {
          title: '$darker-fallback',
          anchor: 'scroll-to-darker-fallback',
          usedBy: [{ name: 'set-contrast()', type: 'function', link: '#scroll-to-set-contrast' }],
          require: [
            {
              name: '$_luma-text',
              type: 'number',
              link: '#scroll-to-luma-text',
            },
            {
              name: '$text',
              type: 'color',
            },
            {
              name: '$background',
              type: 'color',
            },
          ],
          code: `$darker-fallback: false !default;

@if $darker-fallback == false {
  @if $_luma-text < 0.5 {
    $darker-fallback: $text;
  } @else {
    $darker-fallback: $background;
  }
}`,
          type: 'color',
        },
        {
          title: '$_system-color-ref',
          anchor: 'scroll-to-system-color-ref',
          usedBy: [{ name: 'system-color()', type: 'function', link: '#scroll-to-system-color' }],
          code: `$_system-color-ref: null !default;`,
          type: 'array',
        },
        {
          title: '$base-spacing',
          anchor: 'scroll-to-base-spacing',
          usedBy: [{ name: '$spacings', type: 'variable', link: '#scroll-to-spacings' }],
          code: `$base-spacing: 16 !default;`,
          type: 'number',
        },
        {
          title: '$base-spacing-unit',
          anchor: 'scroll-to-base-spacing-unit',
          usedBy: [{ name: 'get-space()', type: 'function', link: '#scroll-to-get-space' }],
          code: `$base-spacing-unit: xrem !default;`,
          type: 'string',
        },
        {
          title: '$base-font-size',
          anchor: 'scroll-to-base-font-size',
          usedBy: [{ name: 'em()', type: 'function', link: '#scroll-to-em' }],
          code: `$base-font-size: 16 !default;`,
          type: 'number',
        },
        {
          title: '$breakpoints',
          anchor: 'scroll-to-breakpoints',
          usedBy: [
            { name: 'bp()', type: 'function', link: '#scroll-to-bp' },
            { name: 'next-bp()', type: 'function', link: '#scroll-to-next-bp' },
            { name: 'set-breakpoints()', type: 'mixin', link: '#scroll-to-set-breakpoints' },
            { name: 'set-data-breakpoints()', type: 'mixin', link: '#scroll-to-set-data-breakpoints' },
            {
              name: 'set-data-map-breakpoints()',
              type: 'mixin',
              link: '#scroll-to-set-data-map-breakpoints',
            },
          ],
          code: `$breakpoints: (
  'xs': 0 /* smartphone*/,
  'sm': 480 /* smartphone landscape*/,
  'md': 720 /* tablet*/,
  'lg': 1024 /* tablet landscape*/,
  'xl': 1280 /* desktop*/,
  'xxl': 1920 /* large*/,
);`,
          type: 'map',
        },
        {
          title: '$color-map-id',
          anchor: 'scroll-to-color-map-id',
          usedBy: [{ name: 'get-color()', type: 'function', link: '#scroll-to-get-color' }],
          code: `$color-map-id: $xui-colors !default;`,
          type: 'map',
          require: [{ name: '$xui-colors', type: 'variable', link: '#scroll-to-xui-colors' }],
        },
        {
          title: '$_set-hover-shading',
          anchor: 'scroll-to-set-hover-shading',
          usedBy: [{ name: 'set-hover()', type: 'function', link: '#scroll-to-set-hover' }],
          code: `$_set-hover-shading: 4 !default;`,
          type: 'number',
        },
        {
          title: '$spacings',
          anchor: 'scroll-to-spacings',
          usedBy: [{ name: 'get-space()', type: 'function', link: '#scroll-to-get-space' }],
          require: [{ name: '$base-spacing', type: 'variable', link: '#scroll-to-base-spacing' }],
          code: `$spacings: (
  0: 0,
  1: $base-spacing * 0.25 /* equals 4 */,
  2: $base-spacing * 0.5 /* equals 8 */,
  3: $base-spacing /* equals 16 */,
  4: $base-spacing * 1.5 /* equals 24 */,
  5: $base-spacing * 2 /* equals 32 */,
  6: $base-spacing * 3 /* equals 48 */,
  7: $base-spacing * 4 /* equals 64 */,
  8: $base-spacing * 5 /* equals 80 */,
);`,
          type: 'map',
        },
        {
          title: '$xui-colors',
          anchor: 'scroll-to-xui-colors',
          usedBy: [{ name: '$color-map-id', type: 'variable', link: '#scroll-to-color-map-id' }],
          code: `$xui-colors: (
    'base': (
      'text': $text,
      'background': $background,
      'link': $link,
      'minor': $minor,
      'super': $super,
      'highlight': $highlight,
      'divider': $base-divider-color,
    ),
    'text': (
      'invert': $text-invert,
      'light': $text-light,
      'lighter': $text-lighter,
      'lightest': $text-lightest,
    ),
    'background': (
      'invert': $background-invert,
      'light': $background-light,
      'lighter': $background-lighter,
      'lightest': $background-lightest,
    ),
    'link': (
      'contrast': $link-contrast,
      'safe': $link-safe,
      'hover': $link-hover,
    ),
    'minor': (
      'contrast': $minor-contrast,
      'safe': $minor-safe,
      'hover': $minor-hover,
    ),
    'super': (
      'contrast': $super-contrast,
      'safe': $super-safe,
      'hover': $super-hover,
    ),
    'highlight': (
      'contrast': $highlight-contrast,
      'safe': $highlight-safe,
      'hover': $highlight-hover,
    ),
    'state': (
      'hover': $state-hover,
      'error': $state-error,
      'success': $state-success,
      'warning': $state-warning,
      'info': $state-info,
    ),
    'hover': (
      'contrast': $state-hover-contrast,
    ),
    'error': (
      'contrast': $state-error-contrast,
      'safe': $state-error-safe,
      'hover': $state-error-hover,
    ),
    'success': (
      'contrast': $state-success-contrast,
      'safe': $state-success-safe,
      'hover': $state-success-hover,
    ),
    'warning': (
      'contrast': $state-warning-contrast,
      'safe': $state-warning-safe,
      'hover': $state-warning-hover,
    ),
    'info': (
      'contrast': $state-info-contrast,
      'safe': $state-info-safe,
      'hover': $state-info-hover,
    ),
  );`,
          type: 'map',
        },
        {
          title: '$elevation-color',
          anchor: 'scroll-to-elevation-color',
          usedBy: [{ name: 'elevation()', type: 'function', link: '#scroll-to-elevation' }],
          code: `$elevation-color: #000 !default;`,
          type: 'color',
        },
        {
          title: '$elevation-opacity',
          anchor: 'scroll-to-elevation-opacity',
          usedBy: [{ name: 'elevation()', type: 'function', link: '#scroll-to-elevation' }],
          code: `$elevation-opacity: 1 !default;`,
          type: 'color',
        },
        {
          title: '$type-scale-bp',
          anchor: 'scroll-to-type-scale-bp',
          usedBy: [{ name: 'get-font-size()', type: 'mixin', link: '#scroll-to-get-font-size' }],
          code: `$type-scale-bp: (
  xs: 0.875,
  md: 1,
));`,
          type: 'map',
        },
        {
          title: '$type-scale-unit',
          anchor: 'scroll-to-type-scale-unit',
          usedBy: [{ name: 'get-font-size()', type: 'mixin', link: '#scroll-to-get-font-size' }],
          code: `$type-scale-unit: $base-scale-unit !default;`,
          require: [{ name: '$base-scale-unit', link: '#scroll-to-base-scale-unit' }],
          type: 'string',
        },
        {
          title: '$_flatten-color-base',
          anchor: 'scroll-to-type-flatten-color-base',
          usedBy: [{ name: 'flatten-color()', type: 'function', link: '#scroll-to-flatten-color' }],
          code: `$_flatten-color-base: $background !default;`,
          require: [{ name: '$background' }],
          type: 'color',
        },
        {
          title: '$base-scale-unit',
          anchor: 'scroll-to-base-scale-unit',
          usedBy: [{ name: '$type-scale-unit', link: '#scroll-to-type-scale-unit' }],
          code: `$base-scale-unit: em !default;`,
          type: 'string',
        },
        {
          title: '$type-scale',
          anchor: 'scroll-to-type-scale',
          usedBy: [{ name: 'get-font-size()', type: 'mixin', link: '#scroll-to-get-font-size' }],
          code: `$type-scale: (
  h1: 3.052,
  h2: 2.441,
  h3: 1.953,
  h4: 1.563,
  h5: 1.25,
  h6: 1,
  is-giga: 2,
  is-mega: 1.5,
  is-kilo: 1,
  is-lead: 1.25,
  p: 1,
));`,
          type: 'map',
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

<style scoped lang="scss"></style>
