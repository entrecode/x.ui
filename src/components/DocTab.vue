<template>
  <div class="has-margin-bottom-7">
    <div class="titlebar">
      <slot name="title"></slot>

      <nav class="nav">
        <ul class="nav__items">
          <li class="nav__item">
            <div
              class="btn btn_small"
              :class="showTab === 1 ? 'btn_minor' : 'btn_clear'"
              @click="showTab = 1"
            >
              <ixo name="eye-open"></ixo>
            </div>
          </li>
          <li class="nav__item" v-if="hasConfig">
            <div
              class="btn btn_small"
              :class="showTab === 2 ? 'btn_minor' : 'btn_clear'"
              @click="showTab = 2"
            >
              <ixo name="json"></ixo>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div v-show="showTab === 1">
      <div data-grid>
        <div :data-col="hasMarkup ? '6' : '12'">
          <slot name="preview"></slot>
        </div>
        <div data-col="6" v-if="hasMarkup">
          <slot name="markup"></slot>
        </div>
      </div>
    </div>
    <div v-show="showTab === 2">
      <slot name="config"></slot>
    </div>
  </div>
</template>

<script>
import Ixo from './Ixo.vue';
export default {
  name: 'Doctab',
  components: {
    Ixo,
  },
  data: () => {
    return {
      showTab: 1,
    };
  },
  computed: {
    hasMarkup() {
      return !!this.$slots.markup;
    },
    hasConfig() {
      return !!this.$slots.config;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
