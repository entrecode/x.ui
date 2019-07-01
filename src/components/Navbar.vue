<template>
  <div class="is-sticky is-padding-3 is-layer-10 is-theme" style="top:0;">
    <div class="is-padding-center-4" data-flex="center-items">
      <router-link to="/">
        <svg class="xui-logo"><use xlink:href="#logo"></use></svg>
      </router-link>
      <div class="x-space-3"></div>
      <div class="flex-space"></div>
      <!-- <div class="is-relative" style="flex-grow: 1; max-width: 480px;">
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
        <div class="popdown is-elevated-24" v-show="showPopdown">
          <ul class="nav nav_stacked">
            <li class="nav__item">
              <a href="#scroll-to-getting-started" class="btn btn_clear">getting started</a>
            </li>
            <li v-for="(value, key, index) in structure" :key="index" class="nav__item">
              <strong class="headings-font is-padding-3">{{key}}</strong>
              <ul>
                <li v-for="(val, index) in value" :key="index">
                  <a :href="val.link" class="btn btn_clear">{{val.title}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="x-space-3"></div> -->
      <a class="btn btn_clear" href="https://github.com/entrecode/x.ui" rel="nofollow" target="_blank">
        <ixo name="github"></ixo>
      </a>
      <div class="x-space-5"></div>
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
