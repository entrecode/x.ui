<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>overflow helper</h1>
      </div>
      <div class="is-relative">
        <div
          class="is-theme is-padding-center-2 is-round is-elevated-16 is-absolute is-placed-0 is-layer-10"
        >
          <div class="nav">
            <div class="nav__item">
              <select id="behavior" class="input" v-model="behavior">
                <option
                  :value="value"
                  v-for="(value, index) in behaviors"
                  :key="index"
                  v-text="value"
                ></option>
              </select>
            </div>
            <div class="nav__item" v-show="behavior !== 'clipped'">
              <select id="axis" class="input" v-model="axis">
                <option :value="value" v-for="(value, index) in axes" :key="index" v-text="value"></option>
              </select>
            </div>
            <div class="nav__item" v-show="behavior !== 'clipped'">
              <div class="xui-checkbox">
                <input type="checkbox" v-model="isContain" id="isContain" />
                <label for="isContain" class="xui-checkbox__label">contain</label>
              </div>
            </div>
          </div>
        </div>
        <div class="is-height-vh-golden" :class="previewClass" data-col>
          <img src="sample-image.jpg" style="width: 120vw; height: auto; position: relative" />
        </div>
        <div
          class="is-fab-s is-ink-invert is-absolute"
          style="font-size: 48px;"
          :style="behavior === 'clipped' || axis === 'x' ? 'opacity: .2' : ''"
        >
          <svg class="ixo">
            <use xlink:href="#arrow-down" />
          </svg>
        </div>
        <div
          class="is-fab-e is-ink-invert is-absolute"
          style="font-size: 48px;"
          :style="behavior === 'clipped' || axis === 'y' ? 'opacity: .2' : ''"
        >
          <svg class="ixo">
            <use xlink:href="#arrow-right" />
          </svg>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <requires-list :requires="requires"></requires-list>
    </div>
  </section>
</template>

<script>
import RequiresList from '@/components/RequiresList.vue';

export default {
  components: {
    RequiresList,
  },
  data: () => {
    return {
      requires: [{ name: 'is-scrollable()', type: 'mixins', link: '#scroll-to-is-scrollable' }],
      behaviors: ['scroll', 'auto', 'clipped'],
      behavior: 'scroll',
      axes: ['both', 'x', 'y'],
      axis: 'y',
      isContain: true,
      previewClass: 'is-scrollable-y-contain',
      markup: `<div class="is-scrollable-y-contain"></div>`,
    };
  },
  computed: {
    dirty() {
      if (this.behavior === 'clipped') {
        return 'is-clipped';
      } else {
        return [
          this.behavior === 'scroll' ? 'is-scrollable' : 'is-scrollable-auto',
          this.axis === 'both' ? '' : '-' + this.axis,
          this.isContain ? '-contain' : null,
        ].join('');
      }
    },
  },
  watch: {
    dirty: function(val) {
      this.previewClass = val;
      this.markup = `<div class="${this.previewClass}"></div>`;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
