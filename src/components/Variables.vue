<template>
  <section>
    <div v-for="(item, index) in items" :key="index">
      <div data-container>
        <div data-grid="is-center">
          <div data-col="8">
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
                  <div class="code" v-text="req"></div>
                </li>
              </ul>
            </div>
            <div class="has-margin-bottom-5" v-if="item.usedBy">
              <h4 class="is-h4">used by</h4>
              <ul data-grid="is-small">
                <li v-for="(used, index) in item.usedBy" :key="index" data-col="is-fit">
                  <div class="code" v-text="used"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="divider divider_big"></div>
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
          usedBy: ['rem()'],
          code: `$root-size: 16 !default;`,
          type: 'number',
        },
        {
          title: '$base-spacing',
          usedBy: ['$spacings'],
          code: `$base-spacing: 16 !default;`,
          type: 'number',
        },
        {
          title: '$base-font-size',
          usedBy: ['em()'],
          code: `$base-font-size: 16 !default;`,
          type: 'number',
        },
        {
          title: '$breakpoints',
          usedBy: ['bp()', 'nextBp()'],
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
          usedBy: ['getColor()'],
          code: `$color-map-id: $xui-colors !default;`,
          type: 'map',
          require: ['$xui-colors'],
        },
        {
          title: '$_set-hover-shading',
          usedBy: ['setHover()'],
          code: `$_set-hover-shading: 4 !default;`,
          type: 'number',
        },
        {
          title: '$spacings',
          usedBy: ['getSpace()'],
          require: ['$base-spacing'],
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
          usedBy: ['$color-map-id'],
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
    state: (
      'hover': $state-hover,
      'info': $state-info,
      'error': $state-error,
      'success': $state-success,
      'warning': $state-warning,
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
