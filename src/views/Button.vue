<template>
  <section>
    <div class="has-margin-bottom-5">
      <div data-grid="center">
        <div data-col="6">
          <div class="demo-preview has-padding-8 has-min-height-vh-half" data-flex="column center">
            <div class="align-center has-padding-bottom-5">
              <input
                type="button"
                class="btn demo-transition"
                :class="[btnStyle, btnSize, {'btn_round' : btnRound}, {'btn_outlined' : btnOutlined}, btnWide]"
                value="button"
              >
            </div>
            <div class="align-center has-padding-bottom-5">
              <button
                class="btn demo-transition"
                :class="[btnStyle, btnSize, {'btn_round' : btnRound}, {'btn_outlined' : btnOutlined}, btnWide]"
              >
                <svg class="ixo">
                  <use xlink:href="#fire"></use>
                </svg>
                Button
              </button>
            </div>
            <div class="align-center has-padding-bottom-5">
              <a
                href
                class="btn demo-transition"
                :class="[btnStyle, btnSize, {'btn_round' : btnRound}, {'btn_outlined' : btnOutlined}, btnWide]"
              >
                <svg class="ixo">
                  <use xlink:href="#fire"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div data-col="6" data-flex="column center">
          <div class="field-group">
            <div class="input-group">
              <label for="btnStyle" class="input-group__addon">
                <svg class="ixo is-ink-link">
                  <use xlink:href="#color-palette"></use>
                </svg>
              </label>
              <div class="input-group__addon">
                <select id="btnStyle" v-model="btnStyle" class="input">
                  <option value>default</option>
                  <option value="btn_minor">minor</option>
                  <option value="btn_super">super</option>
                  <option value="btn_invert">inverted</option>
                  <option value="btn_clear">clear</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field-group">
            <div class="input-group">
              <label for="btnSize" class="input-group__addon">
                <svg class="ixo is-ink-link">
                  <use xlink:href="#move-vertical"></use>
                </svg>
              </label>
              <div class="input-group__addon">
                <select id="btnSize" v-model="btnSize" class="input">
                  <option value>default</option>
                  <option value="btn_small">small</option>
                  <option value="btn_big">big</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field-group">
            <div class="input-group">
              <label for="btnWide" class="input-group__addon">
                <svg class="ixo is-ink-link">
                  <use xlink:href="#move-horizontal"></use>
                </svg>
              </label>
              <div class="input-group__addon">
                <select id="btnWide" v-model="btnWide" class="input">
                  <option value>default</option>
                  <option value="btn_wide">wide</option>
                  <option value="btn_block">block</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field-group">
            <div class="xui-checkbox">
              <input type="checkbox" id="btnRound" v-model="btnRound">
              <label for="btnRound" class="xui-checkbox__label">round</label>
            </div>
          </div>
          <div class="field-group">
            <div class="xui-checkbox">
              <input type="checkbox" id="btnOutlined" v-model="btnOutlined">
              <label for="btnOutlined" class="xui-checkbox__label">outlined</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div data-col="8@sm">
        <pre v-highlightjs="markup"><code class="html"></code></pre>
        <div class="y-space-8"></div>
        <params-table :params="coreParams" title="default params"></params-table>
        <div class="divider"></div>
        <params-table :params="smallParams" title="small params"></params-table>
        <div class="divider"></div>
        <params-table :params="bigParams" title="big params"></params-table>
        <div class="divider"></div>
        <params-table :params="wideParams" title="wide params"></params-table>
        <div class="divider"></div>
        <params-table :params="stateParams" title="state params"></params-table>
        <div class="divider"></div>
        <params-table :params="defaultStyleParams" title="default style params"></params-table>
        <div class="divider"></div>
        <params-table :params="minorStyleParams" title="minor style params"></params-table>
        <div class="divider"></div>
        <params-table :params="superStyleParams" title="super style params"></params-table>
        <div class="divider"></div>
        <params-table :params="invertStyleParams" title="invert style params"></params-table>
        <div class="divider"></div>
        <params-table :params="clearStyleParams" title="invert style params"></params-table>
        <div class="divider"></div>
        <params-table :params="defaultOutlinedParams" title="default outline params"></params-table>
        <div class="divider"></div>
        <params-table :params="defaultOutlinedStyleParams" title="default outline style params"></params-table>
        <div class="divider"></div>
        <params-table :params="minorOutlinedStyleParams" title="minor outline style params"></params-table>
        <div class="divider"></div>
        <params-table :params="superOutlinedStyleParams" title="super outline style params"></params-table>
        <div class="divider"></div>
        <params-table :params="invertOutlinedStyleParams" title="invert outline style params"></params-table>
        <div class="divider"></div>
        <requires-list :requires="requires"></requires-list>
      </div>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';
export default {
  name: 'Button',
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      btnStyle: '',
      btnSize: '',
      btnWide: '',
      btnRound: false,
      btnOutlined: false,
      markup: `<input type="button" class="btn" value="...">
<button class="btn">...</button>
<a href class="btn">...</a>`,
      coreParams: [
        {
          name: '$btn-font-family',
          type: 'string',
          description: 'font-face used by buttons',
          default: '$body-font-family',
        },
        {
          name: '$btn-weight',
          type: 'string',
          default: '$is-bold',
        },
        {
          name: '$btn-font-size',
          type: 'number',
          default: '$base-font-size',
        },
        {
          name: '$btn-line-height',
          type: 'number',
          default: '$btn-font-size * $base-line-height // (16 * 1.4)',
        },
        {
          name: '$btn-icon-size',
          type: 'number',
          description: 'size of inline-icons',
          default: '$base-icon-size',
        },
        {
          name: '$btn-min-height',
          type: 'number',
          default: '40',
        },
        {
          name: '$btn-padding-ratio',
          type: 'number',
          description: 'ratio by which padding-left and padding-right are bigger',
          default: '1.5',
        },
        {
          name: '$btn-spacing',
          type: 'number',
          description: 'margin around a button',
          default: '0',
        },
        {
          name: '$btn-round',
          type: 'boolean',
          description: 'for default rounded buttons',
          default: 'false',
        },
        {
          name: '$btn-radius',
          type: 'number',
          default: '4',
        },
        {
          name: '$btn-small-radius',
          type: 'number',
          default: '$btn-radius',
        },
        {
          name: '$btn-big-radius',
          type: 'number',
          default: '$btn-radius',
        },
        {
          name: '$btn-transition',
          type: 'string',
          default: 'background-color .2s, box-shadow .1s',
        },
      ],
      smallParams: [
        {
          name: '$btn-small-weight',
          type: 'string',
          default: '$btn-weight',
        },
        {
          name: '$btn-small-font-size',
          type: 'number',
          default: '$btn-font-size * 0.875',
        },
        {
          name: '$btn-small-line-height',
          type: 'number',
          default: '$btn-small-font-size * $base-line-height // (16 * .75) * 1.4)',
        },
        {
          name: '$btn-small-icon-size',
          type: 'number',
          description: 'size of inline-icons',
          default: '$btn-icon-size',
        },
        {
          name: '$btn-small-min-height',
          type: 'number',
          default: '32',
        },
        {
          name: '$btn-small-style',
          type: 'map',
        },
      ],
      bigParams: [
        {
          name: '$btn-big-weight',
          type: 'string',
          default: '$btn-weight',
        },
        {
          name: '$btn-big-font-size',
          type: 'number',
          default: '$btn-font-size * 1.125',
        },
        {
          name: '$btn-big-line-height',
          type: 'number',
          default: '$btn-big-font-size * $base-line-height // (16 * 1.125) * 1.4)',
        },
        {
          name: '$btn-big-icon-size',
          type: 'number',
          description: 'size of inline-icons',
          default: '$btn-icon-size',
        },
        {
          name: '$btn-big-min-height',
          type: 'number',
          default: '48',
        },
        {
          name: '$btn-small-style',
          type: 'map',
        },
      ],
      wideParams: [
        {
          name: '$btn-wide',
          type: 'number',
          description: 'min width for .btn_wide button',
          default: '240',
        },
        {
          name: '$btn-small-wide',
          type: 'number',
          description: 'min width for .btn_wide.btn_small button',
          default: '160',
        },
        {
          name: '$btn-big-wide',
          description: 'min width for .btn_wide.btn_big button',
          type: 'number',
          default: '160',
        },
      ],
      stateParams: [
        {
          name: '$btn-disabled-style',
          type: 'map',
          default: `(
  box-shadow: none,
  opacity: 0.6,
)`,
        },
        {
          name: '$btn-active-style',
          type: 'map',
          default: `(
  transform: translateY(2px),
)`,
        },
      ],
      defaultStyleParams: [
        {
          name: '$btn-background',
          type: 'color',
          description: 'default background-color',
          default: '$link',
        },
        {
          name: '$btn-color',
          type: 'color',
          description: 'default color',
          default: '$link-contrast',
        },
        {
          name: '$btn-style',
          type: 'map',
        },
        {
          name: '$btn-hover-background',
          type: 'color',
          default: 'set-hover($btn-background) ',
        },
        {
          name: '$btn-hover-color',
          type: 'color',
          default: '$btn-color',
        },
        {
          name: '$btn-hover-style',
          type: 'map',
        },
      ],
      minorStyleParams: [
        {
          name: '$btn-minor-background',
          type: 'color',
          default: '$minor',
        },
        {
          name: '$btn-minor-color',
          type: 'color',
          default: '$minor-contrast',
        },
        {
          name: '$btn-minor-style',
          type: 'map',
        },
        {
          name: '$btn-minor-hover-background',
          type: 'color',
          default: '$btn-minor-background',
        },
        {
          name: '$btn-minor-hover-color',
          type: 'color',
          default: '$btn-minor-color',
        },
        {
          name: '$btn-minor-hover-style',
          type: 'map',
        },
      ],
      superStyleParams: [
        {
          name: '$btn-super-background',
          type: 'color',
          default: '$super',
        },
        {
          name: '$btn-super-color',
          type: 'color',
          default: '$super-contrast',
        },
        {
          name: '$btn-super-style',
          type: 'map',
        },
        {
          name: '$btn-super-hover-background',
          type: 'color',
          default: 'set-hover($btn-super-background)',
        },
        {
          name: '$btn-super-hover-color',
          type: 'color',
          default: '$btn-super-color',
        },
        {
          name: '$btn-super-hover-style',
          type: 'map',
        },
      ],
      invertStyleParams: [
        {
          name: '$btn-invert-background',
          type: 'color',
          default: '$background',
        },
        {
          name: '$btn-invert-color',
          type: 'color',
          default: '$link',
        },
        {
          name: '$btn-invert-style',
          type: 'map',
        },
        {
          name: '$btn-invert-hover-background',
          type: 'color',
          default: 'set-hover($btn-invert-background)',
        },
        {
          name: '$btn-invert-hover-color',
          type: 'color',
          default: '$btn-invert-color',
        },
        {
          name: '$btn-invert-hover-style',
          type: 'map',
        },
      ],
      clearStyleParams: [
        {
          name: '$btn-clear-background',
          type: 'color',
          default: 'transparent',
        },
        {
          name: '$btn-clear-color',
          type: 'color',
          default: '$link',
        },
        {
          name: '$btn-clear-style',
          type: 'map',
        },
        {
          name: '$btn-clear-hover-background',
          type: 'color',
          default: '$btn-clear-background',
        },
        {
          name: '$btn-clear-hover-color',
          type: 'color',
          default: 'set-hover($btn-clear-color)',
        },
        {
          name: '$btn-clear-hover-style',
          type: 'map',
        },
      ],
      defaultOutlinedParams: [
        {
          name: '$btn-outline-border-width',
          type: 'number',
          default: '1',
        },
        {
          name: '$btn-outline-border-style',
          type: 'string',
          default: 'solid',
        },
      ],
      defaultOutlinedStyleParams: [
        {
          name: '$btn-outline-border-color',
          type: 'color',
          default: '$link',
        },
        {
          name: '$btn-outline-color',
          type: 'color',
          default: '$link',
        },
        {
          name: '$btn-outline-style',
          type: 'map',
        },
        {
          name: '$btn-outline-hover-border-color',
          type: 'color',
          default: 'set-hover($btn-outline-border-color)',
        },
        {
          name: '$btn-outline-hover-color',
          type: 'color',
          default: 'set-hover($btn-outline-color)',
        },
        {
          name: '$btn-outline-hover-style',
          type: 'map',
        },
      ],
      minorOutlinedStyleParams: [
        {
          name: '$btn-outline-minor-border-color',
          type: 'color',
          default: '$minor',
        },
        {
          name: '$btn-outline-minor-color',
          type: 'color',
          default: '$minor',
        },
        {
          name: '$btn-outline-minor-style',
          type: 'map',
        },
        {
          name: '$btn-outline-minor-hover-border-color',
          type: 'color',
          default: 'set-hover($btn-outline-minor-border-color)',
        },
        {
          name: '$btn-outline-minor-hover-color',
          type: 'color',
          default: 'set-hover($btn-outline-minor-color)',
        },
        {
          name: '$btn-outline-minor-hover-style',
          type: 'map',
        },
      ],
      superOutlinedStyleParams: [
        {
          name: '$btn-outline-super-border-color',
          type: 'color',
          default: '$super',
        },
        {
          name: '$btn-outline-super-color',
          type: 'color',
          default: '$super',
        },
        {
          name: '$btn-outline-super-style',
          type: 'map',
        },
        {
          name: '$btn-outline-super-hover-border-color',
          type: 'color',
          default: 'set-hover($btn-outline-super-border-color)',
        },
        {
          name: '$btn-outline-super-hover-color',
          type: 'color',
          default: 'set-hover($btn-outline-super-color)',
        },
        {
          name: '$btn-outline-super-hover-style',
          type: 'map',
        },
      ],
      invertOutlinedStyleParams: [
        {
          name: '$btn-outline-invert-border-color',
          type: 'color',
          default: '$text-invert',
        },
        {
          name: '$btn-outline-invert-color',
          type: 'color',
          default: '$text-invert',
        },
        {
          name: '$btn-outline-invert-style',
          type: 'map',
        },
        {
          name: '$btn-outline-invert-hover-border-color',
          type: 'color',
          default: 'set-hover($btn-outline-invert-border-color)',
        },
        {
          name: '$btn-outline-invert-hover-color',
          type: 'color',
          default: 'set-hover($btn-outline-invert-color)',
        },
        {
          name: '$btn-outline-invert-hover-style',
          type: 'map',
        },
      ],
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'metrics()', type: 'mixin', link: '#scroll-to-metrics' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
      ],
    };
  },
  computed: {
    btnClasses() {
      return [
        this.btnStyle ? this.btnStyle + ' ' : null,
        this.btnSize ? this.btnSize + ' ' : null,
        this.btnWide ? 'btn_wide ' : null,
        this.btnRound ? 'btn_round ' : null,
        this.btnOutlined ? 'btn_outlined' : null,
      ].join('');
    },
  },
  watch: {
    btnClasses: function(val) {
      this.markup = `<input type="button" class="btn ${this.btnClasses}" value="...">
<button class="btn ${this.btnClasses}">...</button>
<a href class="btn ${this.btnClasses}">...</a>`;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
