<template>
  <div class="doc-navbar is-sticky has-padding-2 is-layer-10" style="top:0;">
    <div class="has-padding-center-4" data-flex="is-center-items">
      <img src="./../assets/x-logo.png" style="height: 32px; width: auto;">
      <div class="x-space-3"></div>
      <div class="flex-space"></div>
      <div class="is-relative" style="flex-grow: 1; max-width: 480px;">
        <div class="input-group">
          <div class="input-group__addon">
            <ixo name="search"></ixo>
          </div>
          <input
            id="js-search"
            @focus="showPopdown = true"
            @blur="looseFocus()"
            placeholder="search x.ui..."
            type="text"
            class="input input_big"
            v-model="structureQuery"
          >
          <div class="input-group__addon" @click="structureQuery = null" v-if="structureQuery">
            <div class="btn btn_small btn_clear">clear</div>
          </div>
        </div>
        <div class="popdown is-elevated-24" v-if="showPopdown">
          <ul>
            <li>
              <a href="#scroll-to-intro" class="btn btn_clear">intro</a>
            </li>
            <li v-for="(value, key, index) in structure" :key="index">
              <strong class="headings-font has-padding-3">{{key}}</strong>
              <ul>
                <li v-for="(val, index) in value" :key="index">
                  <a :href="'#scoll-to-' + val" class="btn btn_clear">{{val}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-space"></div>
      <div class="x-space-3"></div>
      <a
        class="btn btn_clear"
        href="https://github.com/entrecode/x.ui"
        rel="nofollow"
        target="_blank"
      >
        <ixo name="github"></ixo>
      </a>
      <div class="x-space-3"></div>
      <small class="is-ink-lighter is-nowrap">v.{{ version }}</small>
    </div>
  </div>
</template>

<script>
import Ixo from './Ixo.vue';
export default {
  name: 'Navbar',
  components: {
    Ixo,
  },
  data: () => {
    return {
      version: '10.0.0',
      menuActive: false,
      showPopdown: false,
      structureQuery: null,
      structure: {
        typeface: ['typeface', 'headings', 'paragraph', 'list', 'modifier'],
        media: ['img', 'img-crop', 'is-outset'],
        form: [
          'input',
          'slider',
          'file-upload',
          'input-group',
          'xui-select',
          'xui-checkbox',
          'xui-radio',
          'xui-toggle',
          'field-group',
        ],
        ui: [
          'btn',
          'hamburger-btn',
          'tag',
          'dropdown',
          'btn-group',
          'nav',
          'titlebar',
          'card',
          'xui-tabs',
          'xui-list',
          'xui-accordion',
          'dialog',
          'deck',
          'toast',
          'snackbar',
          'overlay',
          'well',
          'alert',
          'loader',
          'data-tooltip',
          'table',
          'avatar',
          'is-ink',
          'is-theme',
          'has-radius',
          'has-border',
          'is-elevated',
          'is-fab',
        ],
        layout: [
          'bumper',
          'divider',
          'spacer',
          'spacing',
          'x-space',
          'y-space',
          'flex-space',
          'has-margin',
          'has-padding',
          'flex',
          'has-height',
          'has-width',
          'pull',
          'is-clipped',
          'is-position',
          'is-layer',
        ],
      },
    };
  },
  methods: {
    looseFocus() {
      setTimeout(() => (this.showPopdown = false), 200);
    },
  },
};
</script>

<style scoped lang="scss">
.doc-navbar {
  background-color: rgba(#fff, 0.9);
}

.input-group {
  position: relative;

  .input-group__addon {
    min-width: 40px;
  }

  .input-group__addon + .input {
    padding-left: 0;
  }

  :first-child {
    border-radius: 20px 0 0 20px;
  }

  :last-child {
    border-radius: 0 20px 20px 0;
  }
}
.popdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  z-index: 10;
  max-height: 80vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  padding: 16px;

  ul {
    list-style: none;
    margin: 0 0 16px;
    padding: 0;
  }
}
</style>
