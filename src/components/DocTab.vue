<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <nav class="nav">
        <ul class="nav__items">
          <li class="nav__item">
            <div
              class="btn"
              :class="showTab === 1 ? 'btn_minor' : 'btn_clear'"
              @click="showTab = 1"
            >
              <svg class="ixo">
                <use xlink:href="#eye-open"></use>
              </svg>
            </div>
          </li>
          <li class="nav__item" v-if="hasMarkup">
            <div
              class="btn"
              :class="showTab === 2 ? 'btn_minor' : 'btn_clear'"
              @click="showTab = 2"
            >
              <svg class="ixo">
                <use xlink:href="#code"></use>
              </svg>
            </div>
          </li>
          <li class="nav__item" v-if="hasConfig">
            <div
              class="btn"
              :class="showTab === 3 ? 'btn_minor' : 'btn_clear'"
              @click="showTab = 3"
            >
              <svg class="ixo">
                <use xlink:href="#json"></use>
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div v-show="showTab === 1">
      <slot name="preview"></slot>
    </div>
    <div v-show="showTab === 2">
      <slot name="markup"></slot>
    </div>
    <div v-show="showTab === 3">
      <slot name="config"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Doctab',
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
