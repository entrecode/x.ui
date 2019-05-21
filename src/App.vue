<template>
  <div id="app" class="doc-layout">
    <router-view name="hero" class="doc-hero"/>
    <demo-navbar class="doc-navbar"/>
    <router-view
      name="menu"
      class="doc-menubar is-theme-menubar is-fixed is-height-vh-full is-scrollable-auto-y-contain"
    />
    <router-view name="main" class="doc-body"/>
    <footer class="has-padding-8 is-ink-light align-center doc-footer">
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

.doc-layout {
  display: grid;
  grid-template-columns: 320px auto;
  grid-template-rows: auto;
  grid-template-areas: 'hero hero' 'navbar navbar' 'menubar body' '. footer';

  .doc-hero {
    grid-area: hero;
  }

  .doc-navbar {
    grid-area: navbar;
  }

  .doc-menubar {
    grid-area: menubar;
    width: 320px;
    padding-top: 120px;
    padding-bottom: 120px;
  }

  .doc-body {
    grid-area: body;
    padding-right: 80px;
  }

  .doc-footer {
    grid-area: footer;
  }
}
</style>
