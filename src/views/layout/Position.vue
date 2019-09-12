<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>position helper</h1>
      </div>
      <div class="demo-preview is-relative is-height-vh-golden">
        <div
          class="is-theme is-padding-5 is-radius is-elevated-24"
          style="max-width: 320px; width: 100%"
          :class="previewClass"
        >
          <div data-grid="small-gutter" data-flex="end-items">
            <div data-col="6">
              <div class="field-group">
                <label for="isPosition" class="field-group__label">is-position</label>
                <select id="isPosition" class="input" v-model="isPosition">
                  <option
                    :value="value"
                    v-for="(value, index) in isPositions"
                    :key="index"
                    v-text="value"
                  ></option>
                </select>
              </div>
            </div>
            <div data-col="6">
              <div class="field-group">
                <select id="displaySelected" class="input" v-model="isPositionBreakpoint">
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

          <div data-grid="small-gutter" data-flex="end-items">
            <div data-col="6">
              <div class="field-group">
                <label for="isPlaced" class="field-group__label">is-placed</label>
                <select id="isPlaced" class="input" v-model="isPlaced">
                  <option
                    :value="value"
                    v-for="(value, index) in isPlaceds"
                    :key="index"
                    v-text="value"
                  ></option>
                </select>
              </div>
            </div>
            <div data-col="6">
              <div class="field-group">
                <select id="displaySelected" class="input" v-model="isPlacedBreakpoint">
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

          <div class="spacer spacer_small"></div>

          <div class="demo-compass is-margin-bottom-3">
            <div class="xui-radio">
              <input type="radio" id="nw" name="compass" value="nw" v-model="orientation" />
              <label for="nw" class="xui-radio__label"></label>
            </div>
            <div class="xui-radio">
              <input type="radio" id="n" name="compass" value="n" v-model="orientation" />
              <label for="n" class="xui-radio__label"></label>
            </div>
            <div class="xui-radio">
              <input type="radio" id="ne" name="compass" value="ne" v-model="orientation" />
              <label for="ne" class="xui-radio__label"></label>
            </div>
            <div class="xui-radio">
              <input type="radio" id="w" name="compass" value="w" v-model="orientation" />
              <label for="w" class="xui-radio__label"></label>
            </div>
            <div class="xui-radio">
              <input type="radio" id="0" name="compass" value="0" v-model="orientation" />
              <label for="0" class="xui-radio__label"></label>
            </div>
            <div class="xui-radio">
              <input type="radio" id="e" name="compass" value="e" v-model="orientation" />
              <label for="e" class="xui-radio__label"></label>
            </div>
            <div class="xui-radio">
              <input type="radio" id="sw" name="compass" value="sw" v-model="orientation" />
              <label for="sw" class="xui-radio__label"></label>
            </div>
            <div class="xui-radio">
              <input type="radio" id="s" name="compass" value="s" v-model="orientation" />
              <label for="s" class="xui-radio__label"></label>
            </div>
            <div class="xui-radio">
              <input type="radio" id="se" name="compass" value="se" v-model="orientation" />
              <label for="se" class="xui-radio__label"></label>
            </div>
          </div>

          <div data-grid="small-gutter" data-flex="end-items">
            <div data-col="6">
              <div class="field-group">
                <label for="isLayer" class="field-group__label">is-layer</label>
                <select id="isLayer" class="input" v-model="isLayer">
                  <option
                    :value="value"
                    v-for="(value, index) in isLayers"
                    :key="index"
                    v-text="value"
                  ></option>
                </select>
              </div>
            </div>
            <div data-col="6">
              <div class="field-group">
                <select id="displaySelected" class="input" v-model="isLayerBreakpoint">
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
      <params-table :params="params"></params-table>
      <requires-list :requires="requires"></requires-list>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';

export default {
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      requires: [
        { name: 'set-breakpoints()', type: 'mixin', link: '#scroll-to-set-breakpoints' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
      ],
      params: [
        {
          name: '$is-position-map',
          type: 'map',
          default: `(
  'is-relative': 'relative',
  'is-absolute': 'absolute',
  'is-fixed': 'fixed',
  'is-sticky': 'sticky',
)`,
        },
        {
          name: '$is-placed-map',
          type: 'map',
          default: `(
  'is-placed': 0,
  'is-fab': 16,
)`,
        },
        {
          name: '$is-layer',
          type: 'array',
          default: `1, 10, 100, 9999`,
        },
      ],
      isPositions: ['is-relative', 'is-absolute', 'is-fixed', 'is-sticky'],
      isPosition: 'is-absolute',
      isPlaceds: ['is-placed', 'is-fab'],
      isPlaced: 'is-placed',
      orientation: '0',
      isLayers: ['1', '10', '100', '9999'],
      isLayer: '10',
      breakpoints: ['', '@xs', '@sm', '@md', '@lg', '@xl', '@xxl'],
      isPositionBreakpoint: '',
      isPlacedBreakpoint: '',
      isLayerBreakpoint: '',
      markup: `<div class="is-absolute is-placed-0 is-layer-10">...</div>`,
      previewClass: 'is-absolute is-placed-0 is-layer-10',
    };
  },
  computed: {
    dirty() {
      return [
        this.isPosition + this.isPositionBreakpoint,
        this.isPlaced + '-' + this.orientation + this.isPlacedBreakpoint,
        'is-layer-' + this.isLayer + this.isLayerBreakpoint,
      ].join(' ');
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
.demo-compass {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 16px;
  align-items: center;
  justify-items: center;
}
</style>
