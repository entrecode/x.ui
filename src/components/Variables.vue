<template>
  <section>
    <div data-container>
      <div data-grid>
        <div data-col="10">
          <div v-for="(item, index) in items" :key="index" class="has-margin-bottom-8" :id="item.anchor">
            <h3 v-if="item.title">
              {{ item.title }}&ensp;
              <div class="tag">{{ item.type }}</div>
            </h3>
            <div class="has-margin-bottom-5" v-if="item.code">
              <pre v-highlightjs="item.code"><code class="scss" style="font-size: 14px;"></code></pre>
            </div>
            <div class="has-margin-bottom-5" v-if="item.description">
              <h4 class="is-h4">description</h4>
              <p v-text="item.description"></p>
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
          title: '$base-spacing',
          anchor: 'scroll-to-base-spacing',
          usedBy: [{ name: '$spacings', type: 'variable', link: '#scroll-to-spacings' }],
          code: `$base-spacing: 16 !default;`,
          type: 'number',
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
            { name: 'nextBp()', type: 'function', link: '#scroll-to-next-bp' },
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
          usedBy: [{ name: 'getColor()', type: 'function', link: '#scroll-to-get-color' }],
          code: `$color-map-id: $xui-colors !default;`,
          type: 'map',
          require: [{ name: '$xui-colors', type: 'variable', link: '#scroll-to-xui-colors' }],
        },
        {
          title: '$_set-hover-shading',
          anchor: 'scroll-to-set-hover-shading',
          usedBy: [{ name: 'setHover()', type: 'function', link: '#scroll-to-set-hover' }],
          usedBy: ['setHover()'],
          code: `$_set-hover-shading: 4 !default;`,
          type: 'number',
        },
        {
          title: '$spacings',
          anchor: 'scroll-to-spacings',
          usedBy: [{ name: 'getSpace()', type: 'function', link: '#scroll-to-get-space' }],
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
  base: (
    'text': $text,
    'background': $background,
    'link': $link,
    'minor': $minor,
    'super': $super,
    'highlight': $highlight,
    'divider': $divider-color,
  ),
  text: (
    'invert': $text-invert,
    'light': $text-light,
    'lighter': $text-lighter,
    'lightest': $text-lightest,
  ),
  background: (
    'invert': $background-invert,
    'light': $background-light,
    'lighter': $background-lighter,
    'lightest': $background-lightest,
  ),
);`,
          type: 'map',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
</style>
