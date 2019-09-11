<template>
  <div class="is-sticky is-padding-3 is-layer-10" style="top:0;">
    <div class="is-padding-center-4" data-flex="center-items">
      <router-link to="/">
        <svg class="xui-logo">
          <use xlink:href="#logo" />
        </svg>
      </router-link>
      <div class="x-space-3 flex-space"></div>
      <Searchbar data-col="fit" />
      <div class="x-space-3"></div>
      <div class="nav">
        <div class="nav__item">
          <a
            class="btn btn_clear"
            href="https://github.com/entrecode/x.ui"
            rel="nofollow"
            target="_blank"
          >
            <ixo name="github"></ixo>
          </a>
        </div>
        <div class="nav__item">
          <div tabindex="0" class="xui-select">
            <div class="xui-select__selected is-padding-center-1">10</div>
            <span class="xui-select__caret"></span>
            <ul class="xui-select-options align-center">
              <li>
                <a href="https://xuidoc.entrecode.de/" target="_blank" class="xui-select-option">9</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ixo from './Ixo.vue';
import Searchbar from './Searchbar.vue';
export default {
  name: 'Navbar',
  components: {
    Ixo,
    Searchbar,
  },
  data: () => {
    return {
      version: '10.0.0',
      menuActive: false,
      showPopdown: false,
      structureQuery: null,
      structure: {
        typo: [
          { title: 'sizes', link: '#scroll-to-typo-sizes' },
          { title: 'headings', link: '#scroll-to-headings' },
          { title: 'paragraph', link: '#scroll-to-paragraph' },
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
.xui-logo {
  height: 32px;
  width: 68px;
  fill: currentColor;
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
