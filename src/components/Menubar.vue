<template>
  <div class="doc-menubar">
    <div class="has-padding-5">
      <router-link to="/">
        <svg class="xui-logo">
          <use xlink:href="#logo"></use>
        </svg>
      </router-link>
      <div class="y-space-8"></div>
      <ul class="nav nav_stacked">
        <li class="nav__item">
          <router-link to="getting-started" class="is-kilo is-uppercase">getting started</router-link>
        </li>
        <li class="nav__item">
          <router-link to="introduction" class="is-kilo is-uppercase">introduction</router-link>
        </li>
        <li class="nav__item">
          <router-link to="colors" class="is-kilo is-uppercase">colors</router-link>
        </li>
        <li class="y-space-5"></li>
        <li class="nav__item">
          <router-link to="typo" class="is-mega is-uppercase">typo</router-link>
          <ul v-show="$route.name === 'typo'" class="nav nav_stacked has-margin-middle-3">
            <li class="nav__item">
              <router-link to="typo#scroll-to-headings" class="is-kilo">headings</router-link>
            </li>
            <li class="nav__item">
              <router-link to="typo#scroll-to-paragraph" class="is-kilo">paragraph</router-link>
            </li>
            <li class="nav__item">
              <router-link to="typo#scroll-to-list" class="is-kilo">list</router-link>
            </li>
            <li class="nav__item">
              <router-link to="typo#scroll-to-modifier" class="is-kilo">modifier</router-link>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          <router-link to="buttons" class="is-mega is-uppercase">Buttons</router-link>
          <ul v-show="$route.name === 'buttons'" class="nav nav_stacked has-margin-middle-3">
            <li class="nav__item">
              <a href="#scroll-to-button-group" class="is-kilo">button-group</a>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          <router-link to="form" class="is-mega is-uppercase">form</router-link>
        </li>
        <li class="nav__item">
          <router-link to="alert" class="is-mega is-uppercase">alert</router-link>
        </li>
        <li class="y-space-5"></li>
        <li class="nav__item">
          <router-link to="mixins" class="is-kilo is-uppercase">mixins</router-link>
        </li>
        <li class="nav__item">
          <router-link to="functions" class="is-kilo is-uppercase">functions</router-link>
        </li>
        <li class="nav__item">
          <router-link to="variables" class="is-kilo is-uppercase">variables</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menubar',
  components: {},
  data: () => {
    return {};
  },
};
</script>

<style scoped lang="scss">
.xui-logo {
  height: 32px;
  width: 68px;
  fill: currentColor;
}

.nav {
  a {
    color: var(--text);
  }

  .nav {
    a {
      color: var(--text-light);
    }
  }
}
</style>
