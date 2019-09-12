<template>
  <div id="app" class="doc-layout">
    <inline-style />
    <router-view name="hero" class="doc-hero" />
    <demo-navbar class="doc-navbar" />
    <router-view
      name="menu"
      class="doc-menubar is-theme-menubar is-fixed is-height-vh-full is-scrollable-auto-y-contain is-border-right"
    />
    <router-view name="main" class="doc-body is-padding-8" />

    <footer class="doc-footer">
      <div data-col="10 8@xl"></div>
    </footer>
  </div>
</template>

<script>
import DemoNavbar from '@/components/Navbar.vue';
import InlineStyle from '@/components/Style.vue';

export default {
  name: 'app',
  components: {
    InlineStyle,
    DemoNavbar,
  },
};
</script>

<style lang="scss">
@import './styles/app';

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

.doc-layout {
  display: grid;
  grid-template-columns: 320px auto;
  grid-template-areas: 'menubar body';

  .doc-menubar {
    grid-area: menubar;
    width: 320px;
  }

  .doc-body {
    grid-area: body;
    min-width: 0;
  }
}
</style>
