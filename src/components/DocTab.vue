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
          <li class="nav__item" v-if="hasConfig">
            <div
              class="btn"
              :class="showTab === 2 ? 'btn_minor' : 'btn_clear'"
              @click="showTab = 2"
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
