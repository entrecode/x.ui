<template>
  <div class="has-margin-bottom-7">
    <div data-grid>
      <div :data-col="previewCol ? previewCol : hasMarkup ? '6' : '12'">
        <slot name="title"></slot>
        <slot name="preview"></slot>
      </div>
      <div :data-col="markupCol ? markupCol : '6'">
        <div class="is-relative">
          <div class="btn btn_round btn_small toggle-btn" @click="showConfig = !showConfig" v-if="hasConfig">
            <span v-if="!showConfig">config</span>
            <span v-if="showConfig">markup</span>
          </div>
          <div v-show="!showConfig">
            <slot name="markup"></slot>
          </div>
          <div v-show="showConfig">
            <slot name="config"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ixo from './Ixo.vue';
export default {
  props: ['previewCol', 'markupCol'],
  name: 'Doctab',
  components: {
    Ixo,
  },
  data: () => {
    return {
      showConfig: false,
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
.toggle-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 0;
  background: rgba(#000, .4);
}

.hljs {
  padding-top: 32px;
}
</style>
