<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>tag</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="column center-items">
        <div class="is-theme is-padding-center-5 is-padding-middle-3">
          <div data-grid data-flex="center-items">
            <div data-col="fit">
              <span class="tag" :class="combinedClass">1</span>
            </div>
            <div data-col="fit">
              <a class="btn">
                Button &emsp;
                <span class="tag" :class="combinedClass">1</span>
              </a>
            </div>
            <div data-col="fit">
              <a class="tag" :class="combinedClass">
                <svg class="ixo">
                  <use xlink:href="#fire" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="is-theme is-margin-top-5 is-padding-center-2 is-radius is-elevated-16">
          <div class="nav">
            <div class="nav__item">
              <div class="input-group">
                <label for="tagStyle" class="input-group__addon">
                  <svg class="ixo is-ink-link">
                    <use xlink:href="#color-palette" />
                  </svg>
                </label>
                <div class="input-group__addon">
                  <select id="tagStyle" v-model="tagStyle" class="input">
                    <option
                      :value="style"
                      v-for="(style, index) in tagStyles"
                      :key="index"
                      v-text="style === '' ? 'default' : style.slice(4)"
                    ></option>
                  </select>
                </div>
              </div>
            </div>
            <div class="nav__item">
              <div class="input-group">
                <label for="tagSize" class="input-group__addon">
                  <svg class="ixo is-ink-link">
                    <use xlink:href="#move-vertical" />
                  </svg>
                </label>
                <div class="input-group__addon">
                  <select id="tagSize" v-model="tagSize" class="input">
                    <option
                      :value="size"
                      v-for="(size, index) in tagSizes"
                      :key="index"
                      v-text="size === '' ? 'default' : size.slice(4)"
                    ></option>
                  </select>
                </div>
              </div>
            </div>
            <div class="nav__item">
              <div class="xui-checkbox">
                <input type="checkbox" id="tagRound" v-model="tagRound" />
                <label for="tagRound" class="xui-checkbox__label">round</label>
              </div>
            </div>
            <div class="nav__item">
              <div class="xui-checkbox">
                <input type="checkbox" id="tagOutlined" v-model="tagOutlined" />
                <label for="tagOutlined" class="xui-checkbox__label">outlined</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="coreParams" title="default params"></params-table>
      <params-table :params="smallParams" title="size params"></params-table>
      <params-table :params="bigParams" title="size params"></params-table>
      <params-table :params="outlinedParams" title="outlined params"></params-table>
      <requires-list :requires="requires"></requires-list>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';

export default {
  name: 'Tag',
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      tagStyles: [
        '',
        'tag_minor',
        'tag_link',
        'tag_super',
        'tag_highlight',
        'tag_info',
        'tag_error',
        'tag_success',
        'tag_warning',
      ],
      tagStyle: '',
      tagSizes: ['', 'tag_small', 'tag_big'],
      tagSize: '',
      tagRound: false,
      tagOutlined: false,
      markup: `<span class="tag">1</span>

<a class="btn">
  Button 
  <span class="tag">1</span>
</a>`,
      coreParams: [
        {
          name: '$tag-font-family',
          type: 'string',
          description: 'font-face used by buttons',
          default: '$body-font-family',
        },
        {
          name: '$tag-weight',
          type: 'string',
          default: '$is-bold',
        },
        {
          name: '$tag-font-size',
          type: 'number',
          default: '14',
        },
        {
          name: '$tag-line-height',
          type: 'number',
          default: '16',
        },
        {
          name: '$tag-min-height',
          type: 'number',
          default: '20',
        },
        {
          name: '$tag-style',
          type: 'map',
          default: '',
        },
        {
          name: '$tag-padding-ratio',
          type: 'number',
          description: 'ratio by which padding-left and padding-right are bigger',
          default: '2',
        },
        {
          name: '$tag-spacing',
          type: 'number',
          description: 'margin around a tag',
          default: '0',
        },
        {
          name: '$tag-round',
          type: 'boolean',
          description: 'for default rounded tags',
          default: 'false',
        },
        {
          name: '$tag-radius',
          type: 'number',
          default: '2',
        },
        {
          name: '$tag-small-radius',
          type: 'number',
          default: '$tag-radius',
        },
        {
          name: '$tag-big-radius',
          type: 'number',
          default: '$tag-radius',
        },
        {
          name: '$tag-styles',
          type: 'array',
          description: 'style color width postfix, background, text-color, hover-color',
          default: `(
  'minor': (
    $minor,
    $minor-contrast,
    $minor-hover,
  ),
  'link': (
    $link,
    $link-contrast,
    $link-hover,
  ),
  'super': (
    $super,
    $super-contrast,
    $super-hover,
  ),
  'highlight': (
    $highlight,
    $highlight-contrast,
    $highlight-hover,
  ),
  'info': (
    $state-info,
    $state-info-contrast,
    $state-info-hover,
  ),
  'error': (
    $state-error,
    $state-error-contrast,
    $state-error-hover,
  ),
  'success': (
    $state-success,
    $state-success-contrast,
    $state-success-hover,
  ),
  'warning': (
    $state-warning,
    $state-warning-contrast,
    $state-warning-hover,
  ),
)`,
        },
      ],
      smallParams: [
        {
          name: '$tag-small-font-size',
          type: 'number',
          default: '12',
        },
        {
          name: '$tag-small-line-height',
          type: 'number',
          default: '12',
        },
        {
          name: '$tag-small-min-height',
          type: 'number',
          default: '16',
        },
        {
          name: '$tag-small-style',
          type: 'map',
          default: '',
        },
      ],
      bigParams: [
        {
          name: '$tag-big-font-size',
          type: 'number',
          default: '16',
        },
        {
          name: '$tag-big-line-height',
          type: 'number',
          default: '20',
        },
        {
          name: '$tag-big-min-height',
          type: 'number',
          default: '24',
        },
        {
          name: '$tag-big-style',
          type: 'map',
          default: '',
        },
      ],
      outlinedParams: [
        {
          name: '$tag-outlined-color',
          type: 'color',
          default: '$minor-contrast',
        },
        {
          name: '$tag-outlined-border-color',
          type: 'color',
          default: '$minor',
        },
        {
          name: '$tag-outlined-border-width',
          type: 'number',
          default: '1',
        },
        {
          name: '$tag-outlined-border-style',
          type: 'enum',
          default: 'solid',
        },
      ],
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'metrics()', type: 'mixin', link: '#scroll-to-metrics' },
      ],
    };
  },
  computed: {
    combinedClass() {
      return [
        this.tagStyle ? ' ' + this.tagStyle : null,
        this.tagSize ? ' ' + this.tagSize : null,
        this.tagRound ? ' tag_round' : null,
        this.tagOutlined ? ' tag_outlined' : null,
      ].join('');
    },
  },
  watch: {
    combinedClass: function(val) {
      this.markup = `<span class="tag${val}">1</span>

<a class="btn">
  Button 
  <span class="tag${val}">1</span>
</a>`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
