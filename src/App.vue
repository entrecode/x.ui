<template>
  <div id="app">
    <Navbar/>
    <div data-grid="no-gutter">
      <div data-col="4 2-xl">
        <Menubar/>
      </div>
      <div data-col="8 10-xl">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Menubar from '@/components/Menubar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Menubar,
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
