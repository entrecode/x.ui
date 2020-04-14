<template>
  <section id="scroll-to-space">
    <div class="titlebar">
      <h2>space</h2>
    </div>
    <div class="demo-preview is-padding-8">
      <div class="is-placed-ne is-absolute">
        <div class="is-padding-2 is-theme">
          <div class="xui-checkbox">
            <input type="checkbox" id="bjh23" v-model="showHelper" />
            <label for="bjh23" class="xui-checkbox__label">show helper</label>
          </div>
        </div>
      </div>
      <div class="is-margin-bottom-5">
        <div
          :data-flex="['center-items center', axis === 'y' ? 'column' : ''].join(' ')"
          :style="axis === 'y' ? 'min-height: 200px' : ''"
        >
          <div class="is-giga">space</div>
          <div :class="[{ 'spacing-demo': showHelper }, spacerClass]" data-flex-item="stretch"></div>
          <div class="is-giga">space</div>
        </div>
      </div>
      <div data-flex="center">
        <div class="is-theme is-padding-center-2 is-elevated-16">
          <div class="nav">
            <div class="nav__item">
              <input type="range" v-model="space" class="range-slider" min="0" max="9" />
            </div>
            <div class="nav__item">
              <div data-grid="small-gutter">
                <div data-col="fit">
                  <div class="xui-radio">
                    <input type="radio" name="axis" id="hjh47" v-model="axis" value="x" />
                    <label for="hjh47" class="xui-radio__label">x</label>
                  </div>
                </div>
                <div data-col="fit">
                  <div class="xui-radio">
                    <input type="radio" name="axis" id="hjh48" v-model="axis" value="y" />
                    <label for="hjh48" class="xui-radio__label">y</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="nav__item">
              <select id="displaySelected" class="input" v-model="breakpoint">
                <option
                  :value="value"
                  v-for="(value, index) in breakpoints"
                  :key="index"
                  v-text="value === '' ? 'always' : value"
                ></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <pre v-highlightjs="markup"><code class="html"></code></pre>
    <div class="spacer"></div>
    <requires-list :requires="requires"></requires-list>
  </section>
</template>

<script>
import RequiresList from '@/components/RequiresList.vue';
export default {
  name: 'FlexSpace',
  components: {
    RequiresList,
  },
  data: () => {
    return {
      requires: [
        { name: '$spacings', type: 'variable', link: '#scroll-to-spacings' },
        { name: 'get-space()', type: 'function', link: '#scroll-to-get-space' },
        { name: 'set-breakpoints()', type: 'mixin', link: '#scroll-to-set-breakpoints' },
      ],
      breakpoints: ['', '@xs', '@sm', '@md', '@lg', '@xl', '@xxl'],
      breakpoint: '',
      space: 9,
      axis: 'x',
      markup: `<div class="flex-space"></div>`,
      spacerClass: 'flex-space',
      showHelper: true,
    };
  },
  computed: {
    dirty() {
      return [this.axis, this.space, this.breakpoint].join('');
    },
  },
  watch: {
    dirty: function(val) {
      this.spacerClass = [this.space < 9 ? this.axis + '-space-' + this.space : 'flex-space', this.breakpoint]
        .join('')
        .trim();
      this.markup = `<div class="${this.spacerClass}"></div>`;
    },
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
