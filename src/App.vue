<template>
  <div id="app">
    <router-view name="hero"/>
    <!-- <demo-navbar/> -->
    <div data-grid="no-gutter">
      <router-view name="menu" data-col="3 2-xl"/>
      <div data-col="9 10-xl">
        <router-view name="main"/>
      </div>
    </div>
    <footer class="has-padding-8 is-ink-light align-center">
      placeholder images
      <a
        href="https://unsplash.com/collections/4386752/women-are-amazing"
        target="_blank"
        rel="nofollow"
      >https://unsplash.com/collections/4386752/women-are-amazing</a> &bull; filltext:
      <a
        href="http://socialgoodipsum.com/#/"
        target="_blank"
        rel="nofollow"
      >http://socialgoodipsum.com/#/</a>
    </footer>
  </div>
</template>

<script>
import DemoNavbar from '@/components/Navbar.vue';

export default {
  name: 'app',
  components: {
    DemoNavbar,
  },
};
</script>

<style lang="scss">
@import './src/styles/app';

.select-all {
  user-select: all;
}

pre {
  margin: 0;
}

html,
body {
  height: 100%;
}
</style>
