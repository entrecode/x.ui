<template>
  <section>
    <div class="nav">
      <div class="nav__item">
        <a @click="activeTab = 1" class="btn btn_clear demo-tab" :class="{ 'is-active': activeTab === 1 }">simple</a>
      </div>
      <div class="nav__item">
        <a @click="activeTab = 2" class="btn btn_clear demo-tab" :class="{ 'is-active': activeTab === 2 }">advanced</a>
      </div>
    </div>
    <div v-if="activeTab === 1" class="animated fadeIn">
      <div class="demo-preview is-padding-8" data-flex="center">
        <a @click.prevent="showModal = !showModal" class="btn btn_big is-elevated-16">open modal</a>
      </div>

      <pre v-highlightjs="markupSimple"><code class="html"></code></pre>
    </div>

    <params-table :params="params"></params-table>
    <div class="divider"></div>
    <params-table :params="layoutParams" title="layout params"></params-table>
    <div class="divider"></div>
    <requires-list :requires="requires"></requires-list>

    <div
      class="modal-wrapper"
      ref="default"
      :class="[{ 'modal-wrapper_backdrop': hasBackdrop }, { 'is-active': showModal }, presets]"
      :data-flex="[alignItems, justifyContent].join(' ')"
    >
      <div
        class="modal is-padding-5"
        :data-col="dataCol ? dataCol : false"
        :class="[elevated.length ? 'is-elevated-' + elevated : false]"
      >
        <a class="modal__dismiss btn btn_clear" @click.prevent="showModal = !showModal">
          <svg class="ixo"><use xlink:href="#close"></use></svg>
        </a>
        <div style="max-width: 320px; margin: 0 auto;">
          <div class="field-group">
            <label for="presets" class="field-group__label">modal presets</label>
            <select v-model="presets" id="presets" class="input" @change="resetConfig()">
              <option value>select preset</option>
              <option value="modal_deck">deck</option>
              <option value="modal_deck opens-right">deck right</option>
              <option value="modal_toast">toast</option>
              <option value="modal_toast opens-bottom">toast bottom</option>
              <option value="modal_overlay">overlay</option>
            </select>
          </div>
          <div class="field-group">
            <label for class="field-group__label">[data-col]</label>
            <input type="number" class="input" min="1" max="12" v-model="dataCol" placeholder="1-12" />
          </div>
          <div class="field-group">
            <label for class="field-group__label">elevation</label>
            <div data-grid>
              <div data-col="8" data-flex="center-items">
                <input type="range" class="range-slider" v-model="elevated" min="0" max="24" step="1" />
              </div>
              <div data-col="4"><input type="number" class="input" v-model="elevated" placeholder="0-24" /></div>
            </div>
          </div>
          <div class="field-group">
            <div class="xui-checkbox">
              <input type="checkbox" v-model="hasBackdrop" id="hasBackdrop" />
              <label for="hasBackdrop" class="xui-checkbox__label">has backdrop</label>
            </div>
          </div>

          <div class="position-settings well">
            <div class="position-settings-item position-settings-item_top">
              <span @click="setSectionFlex('top')" :class="flexConfig.has('top') ? 'is-ink-link' : 'is-ink-light'">
                <svg class="ixo"><use xlink:href="#flex-position-top"></use></svg>
              </span>
            </div>
            <div class="position-settings-item position-settings-item_right">
              <span @click="setSectionFlex('right')" :class="flexConfig.has('right') ? 'is-ink-link' : 'is-ink-light'">
                <svg class="ixo"><use xlink:href="#flex-position-right"></use></svg>
              </span>
            </div>
            <div class="position-settings-item position-settings-item_bottom">
              <span
                @click="setSectionFlex('bottom')"
                :class="flexConfig.has('bottom') ? 'is-ink-link' : 'is-ink-light'"
              >
                <svg class="ixo"><use xlink:href="#flex-position-bottom"></use></svg>
              </span>
            </div>
            <div class="position-settings-item position-settings-item_left">
              <span @click="setSectionFlex('left')" :class="flexConfig.has('left') ? 'is-ink-link' : 'is-ink-light'">
                <svg class="ixo"><use xlink:href="#flex-position-left"></use></svg>
              </span>
            </div>
            <div class="position-settings-item position-settings-item_center">
              <span
                @click="setSectionFlex('center')"
                :class="flexConfig.has('center') ? 'is-ink-link' : 'is-ink-light'"
              >
                <svg class="ixo"><use xlink:href="#flex-position-center"></use></svg>
              </span>
            </div>
          </div>
        </div>
        <pre v-highlightjs="markupSimple"><code class="html"></code></pre>
      </div>
    </div>
  </section>
</template>

<script>
import DocTab from '@/components/DocTab.vue';
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';
import { maxHeaderSize } from 'http';

export default {
  components: {
    ParamsTable,
    RequiresList,
    DocTab,
  },
  data: () => {
    return {
      activeTab: 1,
      requires: [
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'elevation()', type: 'mixin', link: '#scroll-to-elevation' },
        { name: 'is-scrollable()', type: 'mixin', link: '#scroll-to-is-scrollable' },
      ],
      params: [
        {
          name: '$modal-wrapper-background',
          type: 'color',
          default: '$backdrop // rgba(#000, 0.2)',
        },
        {
          name: '$modal-wrapper-z-index',
          type: 'number',
          default: '100',
        },
        {
          name: '$modal-wrapper-style',
          type: 'map',
        },
        {
          name: '$modal-gutter',
          type: 'array',
          default: '16',
        },
        {
          name: '$modal-align-items',
          type: 'string',
          default: 'flex-start',
        },
        {
          name: '$modal-min-width',
          type: 'number',
          default: '240',
        },
        {
          name: '$modal-max-width-relative',
          type: 'number',
          default: '50',
        },
        {
          name: '$modal-max-width-absolute',
          type: 'number',
          default: '640',
        },
        {
          name: '$modal-background',
          type: 'color',
          default: '$background',
        },
        {
          name: '$modal-color',
          type: 'color',
          default: '$text',
        },
        {
          name: '$modal-padding',
          type: 'array',
          default: '16',
        },
        {
          name: '$modal-radius',
          type: 'array',
          default: '16',
        },
        {
          name: '$modal-elevated',
          type: '[1-24 | false]',
          default: '8',
        },
        {
          name: '$modal-z-index',
          type: 'number',
          default: '100',
        },
        {
          name: '$modal-style',
          type: 'map',
        },
        {
          name: '$modal-dismiss-style',
          type: 'map',
        },
      ],
      layoutParams: [
        {
          name: '$modal-header-spacing',
          type: 'array',
          default: '0',
        },
        {
          name: '$modal-header-padding',
          type: 'array',
          default: '16',
        },
        {
          name: '$modal-header-style',
          type: 'map',
        },
        {
          name: '$modal-body-spacing',
          type: 'array',
          default: '0',
        },
        {
          name: '$modal-body-padding',
          type: 'array',
          default: '16',
        },
        {
          name: '$modal-body-style',
          type: 'map',
        },
        {
          name: '$modal-footer-spacing',
          type: 'array',
          default: '0',
        },
        {
          name: '$modal-footer-padding',
          type: 'array',
          default: '16',
        },
        {
          name: '$modal-footer-style',
          type: 'map',
        },
      ],
      showModal: false,
      hasBackdrop: false,
      flexConfig: new Set(),
      presets: '',
      dataCol: null,
      alignItems: '',
      justifyContent: '',
      elevated: 8,
      markupSimple: `<div class="modal-wrapper">
  <div class="modal">
    <!-- whatever you want -->
  </div>
</div>`,
      markupLayout: `<div class="modal-wrapper">
  <div class="modal">
    <div class="modal__header">...
      <a class="modal__dismiss btn btn_clear">...</a>
    </div>
    <div class="modal__body">...</div>
    <div class="modal__footer">...</div>
  </div>
</div>`,
    };
  },
  methods: {
    setSectionFlex: function(pos) {
      this.presets = '';
      const f = this.flexConfig;

      if (f.has(pos)) {
        f.delete(pos);
      } else {
        f.add(pos);
      }

      if (pos === 'center') {
        f.delete('top');
        f.delete('right');
        f.delete('bottom');
        f.delete('left');
      } else {
        f.delete('center');
      }

      if (f.has('center')) {
        this.alignItems = 'center-items';
        this.justifyContent = 'center';
      } else {
        if (f.has('top')) {
          this.alignItems = 'start-items';
          if (f.has('bottom')) {
            this.alignItems = 'stretch-items';
          }
        } else if (f.has('bottom')) {
          this.alignItems = 'end-items';
        }

        if (f.has('left')) {
          this.justifyContent = 'start';
          if (f.has('right')) {
            this.justifyContent = 'stretch';
          }
        } else if (f.has('right')) {
          this.justifyContent = 'end';
        }
      }
    },
    resetConfig: function() {
      this.dataCol = null;
      this.alignItems = '';
      this.justifyContent = '';
    },
  },
  computed: {
    hasChange() {
      return [this.dataCol, this.hasBackdrop, this.alignItems, this.justifyContent, this.elevated, this.presets].join();
    },
  },
  watch: {
    hasChange: function(val) {
      this.markupSimple = `<div class="modal-wrapper${this.hasBackdrop ? ' modal-wrapper_backdrop' : ''}${
        this.presets ? ' ' + this.presets : ''
      }"${
        this.alignItems || this.justifyContent
          ? ' data-flex="' + [this.alignItems, this.justifyContent].join(' ') + '"'
          : ''
      }>
  <div class="modal${this.elevated ? ' is-elevated-' + this.elevated : ''}"${
        this.dataCol ? ' data-col="' + this.dataCol + '"' : ''
      }>
    <!-- whatever you want -->
  </div>
</div>`;
    },
  },
};
</script>

<style scoped lang="scss">
.position-settings {
  border-radius: 8px;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    '. top .'
    'left center right'
    '. bottom .';
  margin: 0 0 16px 0;

  span {
    cursor: pointer;
    font-size: 24px;
  }
}

.position-settings-item {
  text-align: center;
  display: flex;

  &_top {
    grid-area: top;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 8px;
  }
  &_right {
    grid-area: right;
    align-items: center;
    justify-content: flex-end;
  }
  &_bottom {
    grid-area: bottom;
    align-items: flex-end;
    justify-content: center;
    padding-top: 8px;
  }
  &_left {
    grid-area: left;
    align-items: center;
    justify-content: flex-start;
  }
  &_center {
    grid-area: center;
    align-items: center;
    justify-content: center;
  }
}
</style>
