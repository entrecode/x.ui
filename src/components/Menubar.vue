<template>
  <div class="has-padding-5">
    <ul class="nav nav_stacked">
      <li class="nav__item">
        <router-link to="getting-started" class="is-kilo is-uppercase">getting started</router-link>
      </li>
      <li class="nav__item">
        <router-link to="introduction" class="is-kilo is-uppercase">introduction</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">core</div>
      </li>
      <li class="nav__item">
        <router-link to="colors" class="is-mega is-uppercase">colors</router-link>
      </li>
      <li class="y-space-5"></li>
      <li class="nav__item">
        <router-link to="typo" class="is-mega is-uppercase">typo</router-link>
        <ul
          v-show="$route.name === 'typo'"
          class="nav nav_stacked has-margin-middle-3 is-theme-submenu"
        >
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
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">images</div>
      </li>
      <li class="nav__item">
        <router-link to="img-crop" class="is-mega is-uppercase">img-crop</router-link>
      </li>
      <li class="nav__item">
        <router-link to="responsiveness" class="is-mega is-uppercase">responsiveness</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-outset" class="is-mega is-uppercase">is-outset</router-link>
      </li>
      <li class="y-space-5"></li>
      <li class="nav__item">
        <router-link to="button" class="is-mega is-uppercase">button</router-link>
      </li>
      <li class="nav__item">
        <router-link to="button-group" class="is-mega is-uppercase">button-group</router-link>
      </li>
      <li class="nav__item">
        <router-link to="form" class="is-mega is-uppercase">form</router-link>
        <ul
          v-show="$route.name === 'form'"
          class="nav nav_stacked has-margin-middle-3 is-theme-submenu"
        >
          <li class="nav__item">
            <router-link to="form#scroll-to-field-group" class="is-kilo">field-group</router-link>
          </li>
          <li class="nav__item">
            <router-link to="form#scroll-to-input" class="is-kilo">input</router-link>
          </li>
          <li class="nav__item">
            <router-link to="form#scroll-to-xui-select" class="is-kilo">xui-select</router-link>
          </li>
          <li class="nav__item">
            <router-link to="form#scroll-to-xui-toggle" class="is-kilo">xui-toggle</router-link>
          </li>
          <li class="nav__item">
            <router-link to="form#scroll-to-checkbox" class="is-kilo">checkbox</router-link>
          </li>
          <li class="nav__item">
            <router-link to="form#scroll-to-radio" class="is-kilo">radio</router-link>
          </li>
          <li class="nav__item">
            <router-link to="form#scroll-to-range-slider" class="is-kilo">range-slider</router-link>
          </li>
          <li class="nav__item">
            <router-link to="form#scroll-to-file-upload" class="is-kilo">file-upload</router-link>
          </li>
        </ul>
      </li>
      <li class="nav__item">
        <router-link to="loader" class="is-mega is-uppercase">loader</router-link>
      </li>
      <li class="nav__item">
        <router-link to="tags" class="is-mega is-uppercase">tags</router-link>
      </li>
      <li class="nav__item">
        <router-link to="alert" class="is-mega is-uppercase">alert</router-link>
      </li>
      <li class="nav__item">
        <router-link to="well" class="is-mega is-uppercase">well</router-link>
      </li>
      <li class="nav__item">
        <router-link to="avatar" class="is-mega is-uppercase">avatar</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">ui</div>
      </li>
      <li class="nav__item">
        <router-link to="titlebar" class="is-mega is-uppercase">titlebar</router-link>
      </li>
      <li class="nav__item">
        <router-link to="nav" class="is-mega is-uppercase">nav</router-link>
      </li>
      <li class="nav__item">
        <router-link to="dropdown" class="is-mega is-uppercase">dropdown</router-link>
      </li>
      <li class="nav__item">
        <router-link to="modal" class="is-mega is-uppercase">modal</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-list" class="is-mega is-uppercase">xui-list</router-link>
      </li>
      <li class="nav__item">
        <router-link to="card" class="is-mega is-uppercase">card</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-accordion" class="is-mega is-uppercase">xui-accordion</router-link>
      </li>
      <li class="nav__item">
        <router-link to="table" class="is-mega is-uppercase">table</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">styling</div>
      </li>
      <li class="nav__item">
        <router-link to="is-ink" class="is-mega is-uppercase">is-ink</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-theme" class="is-mega is-uppercase">is-theme</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-elevated" class="is-mega is-uppercase">is-elevated</router-link>
      </li>
      <li class="nav__item">
        <router-link to="has-radius" class="is-mega is-uppercase">has-radius</router-link>
      </li>
      <li class="nav__item">
        <router-link to="has-border" class="is-mega is-uppercase">has-border</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">layout</div>
      </li>
      <li class="nav__item">
        <router-link to="grid" class="is-mega is-uppercase">grid</router-link>
      </li>
      <li class="nav__item">
        <router-link to="spacer" class="is-mega is-uppercase">spacer</router-link>
      </li>
      <li class="nav__item">
        <router-link to="has-margin" class="is-mega is-uppercase">has-margin</router-link>
      </li>
      <li class="nav__item">
        <router-link to="has-padding" class="is-mega is-uppercase">has-padding</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-height" class="is-mega is-uppercase">is-height</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-width" class="is-mega is-uppercase">is-width</router-link>
      </li>
      <li class="nav__item">
        <router-link to="position" class="is-mega is-uppercase">position</router-link>
      </li>
      <li class="nav__item">
        <router-link to="display" class="is-mega is-uppercase">display</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-scrollable" class="is-mega is-uppercase">is-scrollable</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">utilities</div>
      </li>
      <li class="nav__item">
        <router-link to="data-tooltip" class="is-mega is-uppercase">data-tooltip</router-link>
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
</style>
