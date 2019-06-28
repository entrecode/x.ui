<template>
  <section class="demo-section">
    <div data-container>
      <div data-grid>
        <div data-col="10">
          <doc-tab>
            <div slot="preview">
              <div
                class="demo-card"
                :class="['is-elevated-' + elevation, hoverElevationActive ? 'hover:is-elevated-' + hoverElevation : null]"
              >
                <div class="field-group">
                  <div class="is-giga">
                    is-elevated-
                    <span class="is-ink-link" v-text="elevation"></span>
                  </div>
                  <div class="has-padding-middle-3">
                    <input type="range" min="0" max="24" v-model="elevation" class="range-slider">
                  </div>
                </div>
                <div
                  class="field-group"
                  :style="hoverElevationActive ? 'opacity: 1' : 'opacity: 0.4'"
                >
                  <div class="xui-checkbox">
                    <input type="checkbox" id="hoverElevationActive" v-model="hoverElevationActive">
                    <label
                      for="hoverElevationActive"
                      class="xui-checkbox__label"
                      data-flex="center-items"
                    >
                      <div class="is-giga" style="margin: 0;">
                        hover:is-elevated-
                        <span class="is-ink-link" v-text="hoverElevation"></span>
                      </div>
                    </label>
                  </div>
                  <div class="has-padding-middle-3">
                    <input
                      type="range"
                      min="0"
                      max="24"
                      v-model="hoverElevation"
                      class="range-slider"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div slot="markup">
              <pre v-highlightjs="markup"><code class="html"></code></pre>
            </div>
            <div slot="config">
              <pre v-highlightjs="config"><code class="scss"></code></pre>
            </div>
          </doc-tab>
        </div>
        <div data-col="2">
          <ul class="nav nav_stacked is-sticky" style="top: 120px;">
            <li class="nav__item">
              <h2>is-elevated</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DocTab from '@/components/DocTab.vue';

export default {
  name: 'IsElevated',
  components: {
    DocTab,
  },
  data: () => {
    return {
      elevation: 4,
      hoverElevationActive: false,
      hoverElevation: 0,
      markup: `<div class="is-elevated-#"></div>
<div class="hover:is-elevated-#"></div>`,
      config: `$elevation-color: #000;
$elevation-opacity: 1;
$elevation-prefix: 'is-elevated-';

$elevation-transition-duration: 280ms;
$elevation-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`,
    };
  },
};
</script>

<style scoped lang="scss">
</style>