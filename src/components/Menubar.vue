<template>
  <div class="is-padding-5">
    <ul class="nav nav_stacked">
      <li class="nav__item">
        <router-link to="/" class="is-kilo is-uppercase">getting started</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">typeface</div>
      </li>
      <li class="nav__item">
        <router-link to="headings" class="is-mega is-uppercase">headings</router-link>
      </li>
      <li class="nav__item">
        <router-link to="paragraphs" class="is-mega is-uppercase">paragraphs</router-link>
      </li>
      <li class="nav__item">
        <router-link to="lists" class="is-mega is-uppercase">lists</router-link>
      </li>
      <li class="nav__item">
        <router-link to="utils" class="is-mega is-uppercase">utils</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">images</div>
      </li>
      <li class="nav__item">
        <router-link to="img-crop" class="is-mega is-uppercase">img-crop</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-outset" class="is-mega is-uppercase">is-outset</router-link>
      </li>
      <li class="nav__item">
        <router-link to="avatar" class="is-mega is-uppercase">avatar</router-link>
      </li>
      <li class="nav__item">
        <router-link to="img-utils" class="is-mega is-uppercase">utils</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">form</div>
      </li>
      <li class="nav__item">
        <router-link to="fieldset" class="is-mega is-uppercase">fieldset</router-link>
      </li>
      <li class="nav__item">
        <router-link to="field-group" class="is-mega is-uppercase">field-group</router-link>
      </li>
      <li class="nav__item">
        <router-link to="input" class="is-mega is-uppercase">input</router-link>
      </li>
      <li class="nav__item">
        <router-link to="input-group" class="is-mega is-uppercase">input-group</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-checkbox" class="is-mega is-uppercase">xui-checkbox</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-radio" class="is-mega is-uppercase">xui-radio</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-toggle" class="is-mega is-uppercase">xui-toggle</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-select" class="is-mega is-uppercase">xui-select</router-link>
      </li>
      <li class="nav__item">
        <router-link to="range-slider" class="is-mega is-uppercase">range-slider</router-link>
      </li>
      <li class="nav__item">
        <router-link to="file-upload" class="is-mega is-uppercase">file-upload</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">interaction</div>
      </li>
      <li class="nav__item">
        <router-link to="nav" class="is-mega is-uppercase">nav</router-link>
      </li>
      <li class="nav__item">
        <router-link to="dropdown" class="is-mega is-uppercase">dropdown</router-link>
      </li>
      <li class="nav__item">
        <router-link to="button" class="is-mega is-uppercase">button</router-link>
      </li>
      <li class="nav__item">
        <router-link to="button-group" class="is-mega is-uppercase">button-group</router-link>
      </li>
      <li class="nav__item">
        <router-link to="tags" class="is-mega is-uppercase">tags</router-link>
      </li>
      <li class="nav__item">
        <router-link to="loader" class="is-mega is-uppercase">loader</router-link>
      </li>
      <li class="nav__item">
        <router-link to="alert" class="is-mega is-uppercase">alert</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">interface</div>
      </li>
      <li class="nav__item">
        <router-link to="titlebar" class="is-mega is-uppercase">titlebar</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-list" class="is-mega is-uppercase">xui-list</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-accordion" class="is-mega is-uppercase">xui-accordion</router-link>
      </li>
      <li class="nav__item">
        <router-link to="modal" class="is-mega is-uppercase">modal</router-link>
      </li>
      <li class="nav__item">
        <router-link to="card" class="is-mega is-uppercase">card</router-link>
      </li>
      <li class="nav__item">
        <router-link to="well" class="is-mega is-uppercase">well</router-link>
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
        <router-link to="is-radius" class="is-mega is-uppercase">is-radius</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-border" class="is-mega is-uppercase">is-border</router-link>
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
        <router-link to="is-margin" class="is-mega is-uppercase">is-margin</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-padding" class="is-mega is-uppercase">is-padding</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-height" class="is-mega is-uppercase">is-height</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-width" class="is-mega is-uppercase">is-width</router-link>
      </li>
      <li class="nav__item">
        <router-link to="position" class="is-mega is-uppercase">position helper</router-link>
      </li>
      <li class="nav__item">
        <router-link to="display" class="is-mega is-uppercase">display helper</router-link>
      </li>
      <li class="nav__item">
        <router-link to="overflow" class="is-mega is-uppercase">overflow helper</router-link>
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
  components: {},
  data: () => {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
