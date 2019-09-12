<template>
  <div class="is-padding-5">
    <router-link to="/" class="is-block is-padding-middle-6">
      <svg class="xui-logo">
        <use xlink:href="#logo" />
      </svg>
    </router-link>
    <ul class="nav nav_stacked">
      <li class="nav__item">
        <router-link to="/" class="is-mega">intro</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/getting-started" class="is-mega">getting started</router-link>
      </li>
      <li class="nav__item">
        <router-link to="colors" class="is-mega">colors</router-link>
      </li>
      <li class="y-space-5"></li>
      <li class="nav__item">
        <a
          href="https://entrecode.github.io/ixo/"
          target="_blank"
          class="is-mega"
          data-flex="center-items"
        >
          ixo
          <div class="x-space-2"></div>
          <svg class="ixo is-ink-lighter">
            <use xlink:href="#open" />
          </svg>
        </a>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">typeface</div>
      </li>
      <li class="nav__item">
        <router-link to="headings" class="is-mega">headings</router-link>
      </li>
      <li class="nav__item">
        <router-link to="paragraphs" class="is-mega">paragraphs</router-link>
      </li>
      <li class="nav__item">
        <router-link to="lists" class="is-mega">lists</router-link>
      </li>
      <li class="nav__item">
        <router-link to="utils" class="is-mega">utils</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">images</div>
      </li>
      <li class="nav__item">
        <router-link to="img-crop" class="is-mega">img-crop</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-outset" class="is-mega">is-outset</router-link>
      </li>
      <li class="nav__item">
        <router-link to="avatar" class="is-mega">avatar</router-link>
      </li>
      <li class="nav__item">
        <router-link to="img-utils" class="is-mega">utils</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">form</div>
      </li>
      <li class="nav__item">
        <router-link to="fieldset" class="is-mega">fieldset</router-link>
      </li>
      <li class="nav__item">
        <router-link to="field-group" class="is-mega">field-group</router-link>
      </li>
      <li class="nav__item">
        <router-link to="input" class="is-mega">input</router-link>
      </li>
      <li class="nav__item">
        <router-link to="input-group" class="is-mega">input-group</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-checkbox" class="is-mega">xui-checkbox</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-radio" class="is-mega">xui-radio</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-toggle" class="is-mega">xui-toggle</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-select" class="is-mega">xui-select</router-link>
      </li>
      <li class="nav__item">
        <router-link to="range-slider" class="is-mega">range-slider</router-link>
      </li>
      <li class="nav__item">
        <router-link to="file-upload" class="is-mega">file-upload</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">interaction</div>
      </li>
      <li class="nav__item">
        <router-link to="button" class="is-mega">button</router-link>
      </li>
      <li class="nav__item">
        <router-link to="button-group" class="is-mega">button-group</router-link>
      </li>
      <li class="nav__item">
        <router-link to="hamburger" class="is-mega">hamburger</router-link>
      </li>
      <li class="nav__item">
        <router-link to="nav" class="is-mega">nav</router-link>
      </li>
      <li class="nav__item">
        <router-link to="dropdown" class="is-mega">dropdown</router-link>
      </li>
      <li class="nav__item">
        <router-link to="tag" class="is-mega">tag</router-link>
      </li>
      <li class="nav__item">
        <router-link to="meatball" class="is-mega">meatball</router-link>
      </li>
      <li class="nav__item">
        <router-link to="loader" class="is-mega">loader</router-link>
      </li>
      <li class="nav__item">
        <router-link to="alert" class="is-mega">alert</router-link>
      </li>
      <li class="nav__item">
        <router-link to="data-tooltip" class="is-mega">data-tooltip</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">interface</div>
      </li>
      <li class="nav__item">
        <router-link to="titlebar" class="is-mega">titlebar</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-list" class="is-mega">xui-list</router-link>
      </li>
      <li class="nav__item">
        <router-link to="xui-accordion" class="is-mega">xui-accordion</router-link>
      </li>
      <li class="nav__item">
        <router-link to="modal" class="is-mega">modal</router-link>
      </li>
      <li class="nav__item">
        <router-link to="card" class="is-mega">card</router-link>
      </li>
      <li class="nav__item">
        <router-link to="well" class="is-mega">well</router-link>
      </li>
      <li class="nav__item">
        <router-link to="table" class="is-mega">table</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">styling</div>
      </li>
      <li class="nav__item">
        <router-link to="is-ink" class="is-mega">is-ink</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-theme" class="is-mega">is-theme</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-elevated" class="is-mega">is-elevated</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-radius" class="is-mega">is-radius</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-border" class="is-mega">is-border</router-link>
      </li>
      <li class="y-space-5"></li>
      <li>
        <div class="is-h6">layout</div>
      </li>
      <li class="nav__item">
        <router-link to="grid" class="is-mega">grid</router-link>
      </li>
      <li class="nav__item">
        <router-link to="data-flex" class="is-mega">data-flex</router-link>
      </li>
      <li class="nav__item">
        <router-link to="spacer" class="is-mega">spacer</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-margin" class="is-mega">is-margin</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-padding" class="is-mega">is-padding</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-height" class="is-mega">is-height</router-link>
      </li>
      <li class="nav__item">
        <router-link to="is-width" class="is-mega">is-width</router-link>
      </li>
      <li class="nav__item">
        <router-link to="position" class="is-mega">position helper</router-link>
      </li>
      <li class="nav__item">
        <router-link to="display" class="is-mega">display helper</router-link>
      </li>
      <li class="nav__item">
        <router-link to="overflow" class="is-mega">overflow helper</router-link>
      </li>
      <li class="y-space-5"></li>
      <li class="nav__item">
        <router-link to="mixins" class="is-kilo">mixins</router-link>
      </li>
      <li class="nav__item">
        <router-link to="functions" class="is-kilo">functions</router-link>
      </li>
      <li class="nav__item">
        <router-link to="variables" class="is-kilo">variables</router-link>
      </li>
    </ul>
    <div class="is-margin-middle-5 is-ink" style="font-size: 10px;">
      placeholder images
      <a
        href="https://unsplash.com/@princearkman"
        target="_blank"
        rel="nofollow"
        class="is-ink-link"
      >unsplash.com/@princearkman</a>
      &emsp; filltext:
      <a
        href="http://socialgoodipsum.com/#/"
        target="_blank"
        rel="nofollow"
        class="is-ink-link"
      >socialgoodipsum.com</a> &emsp;
      contributor:
      <a
        href="https://github.com/bernester"
        target="_blank"
        rel="nofollow"
        class="is-ink-link"
      >@bernester</a> &emsp;
      created with
      <small>&#10084;</small> by
      <a
        href="https://entrecode.de"
        target="_blank"
        rel="nofollow"
        class="is-ink-link"
      >entrecode.de</a> &emsp;
      <a
        href="https://entrecode.de/datenschutz"
        target="_blank"
        rel="nofollow"
        class="is-ink-link"
      >imprint &amp; privacy</a>&emsp;
      Code licensed
      <a
        href="https://github.com/entrecode/x.ui/blob/master/LICENSE"
        target="_blank"
        rel="license noopener"
        class="is-ink-link"
      >MIT</a>, docs
      <a
        href="https://creativecommons.org/licenses/by/3.0/"
        target="_blank"
        rel="license noopener"
        class="is-ink-link"
      >CC BY 3.0</a>.
    </div>
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
