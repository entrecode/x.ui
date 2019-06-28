<template>
  <section>
    <div data-container>
      <div data-grid="center">
        <div data-col="6-md">
          <input type="range" v-model="space" class="range-slider" min="0" max="9">
        </div>
      </div>
      <div class="spacer"></div>
      <div data-grid>
        <div data-col="6" data-flex="center" style="min-height: 200;">
          <div
            class="is-mega"
            data-flex-item="center"
          >{{ space < 9 ? 'x-space-' + space : 'flex-space'}}</div>
          <div class="spacing-demo" :class="space < 9 ? 'x-space-' + space : 'flex-space'"></div>
          <div
            class="is-mega"
            data-flex-item="center"
          >{{ space < 9 ? 'x-space-' + space : 'flex-space'}}</div>
        </div>
        <div data-col="6" data-flex="column center" style="min-height: 200px;">
          <div
            class="is-mega"
            data-flex-item="center"
          >{{ space < 9 ? 'y-space-' + space : 'flex-space'}}</div>
          <div class="spacing-demo" :class="space < 9 ? 'y-space-' + space : 'flex-space'"></div>
          <div
            class="is-mega"
            data-flex-item="center"
          >{{ space < 9 ? 'y-space-' + space : 'flex-space'}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FlexSpace',
  components: {},
  data: () => {
    return {
      space: 9,
    };
  },
};
</script>

<style scoped lang="scss">
.spacing-demo {
  transition: all 0.2;
  min-height: 1px;
  min-width: 1px;
}
</style>
