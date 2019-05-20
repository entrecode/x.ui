<template>
  <section>
    <div class="has-margin-bottom-5">
      <div data-grid="center">
        <div data-col="6">
          <div class="demo-preview has-padding-8">
            <div class="align-center has-padding-3">
              <input
                type="button"
                class="btn demo-transition"
                :class="[btnStyle, btnSize, {'btn_round' : btnRound}, {'btn_outlined' : btnOutlined}, btnWide]"
                value="button"
              >
            </div>
            <div class="align-center has-padding-3">
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
            <div class="align-center has-padding-3">
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
    <div data-grid>
      <div data-col="8">
        <pre v-highlightjs="markup"><code class="html"></code></pre>
        <div class="divider"></div>
        <params-table :params="coreParams" title="default params"></params-table>
        <div class="divider"></div>
        <params-table :params="smallParams" title="small params"></params-table>
        <div class="divider"></div>
        <params-table :params="stateParams" title="state params"></params-table>
        <div class="divider"></div>
        <params-table :params="colorParams" title="style params"></params-table>
        <div class="divider"></div>
      </div>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
export default {
  name: 'Button',
  components: {
    ParamsTable,
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
      colorParams: [
        {
          name: '$btn-background',
          type: 'color',
          description: 'default background-color',
          default: '$link',
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
          name: '$btn-radius',
          type: 'number',
          default: '4',
        },
        {
          name: '$btn-transition',
          type: 'string',
          default: 'background-color .2s, box-shadow .1s',
        },
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
