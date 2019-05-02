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
