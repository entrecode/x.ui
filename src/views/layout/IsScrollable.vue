<template>
  <section style="overflow: hidden;">
    <div
      class="has-radius has-margin-bottom-5 demo-highlight"
      style="height: 400px; max-width: 100%;"
      :class="[isClipped ? 'is-clipped' : 'is-scrollable' + (behavior === 'scroll' ? '' : '-auto') + (axis === 'both' ? '' : '-' + axis ) + (contain ? '-contain' : ''), !isClipped ? 'demo-highlight-' + axis : '']"
    >
      <img src="sample-image.jpg" style="width: 120vw; height: auto;">
    </div>
    <div>
      <code
        class="demo-code has-margin-bottom-3"
        v-text="isClipped ? 'is-clipped' : 'is-scrollable' + (behavior === 'scroll' ? '' : '-auto') + (axis === 'both' ? '' : '-' + axis ) + (contain ? '-contain' : '')"
      ></code>
      <div data-grid="small-gutter center" data-flex="center-items">
        <div data-col="fit">
          <select id="behavior" class="input" v-model="behavior">
            <option :value="value" v-for="(value, index) in behaviors" :key="index" v-text="value"></option>
          </select>
        </div>
        <div data-col="fit">
          <select id="axis" class="input" v-model="axis">
            <option :value="value" v-for="(value, index) in axes" :key="index" v-text="value"></option>
          </select>
        </div>
        <div data-col="fit">
          <div class="xui-checkbox">
            <input type="checkbox" v-model="contain" id="contain">
            <label for="contain" class="xui-checkbox__label">contain</label>
          </div>
        </div>
        <div data-col="fit">
          <div class="xui-checkbox">
            <input type="checkbox" v-model="isClipped" id="isClipped">
            <label for="isClipped" class="xui-checkbox__label">is-clipped</label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      axes: ['both', 'x', 'y'],
      axis: 'y',
      behaviors: ['scroll', 'auto'],
      behavior: 'auto',
      contain: true,
      isClipped: true,
    };
  },
};
</script>

<style scoped lang="scss">
.demo-highlight {
  img {
    position: relative;
    z-index: -1;
  }
}

.demo-highlight-y {
  box-shadow: inset -16px 0 0 rgba(var(--spacingColor), 0.2);
}

.demo-highlight-x {
  box-shadow: inset 0 -16px 0 rgba(var(--spacingColor), 0.2);
}

.demo-highlight-both {
  box-shadow: inset -16px -16px 0 rgba(var(--spacingColor), 0.2);
}
</style>
