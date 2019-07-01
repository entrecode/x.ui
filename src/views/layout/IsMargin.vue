<template>
  <section class="demo-section" id="scroll-to-is-margin">
    <div data-container>
      <div data-grid>
        <div data-col="10">
          <doc-tab>
            <div slot="preview">
              <div class="demo-bg" style="--spacingColor: 0,255,0;">
                <div class="is-theme is-padding-3" :class="hasMarginClass + marginSize">
                  <div class="nav" data-flex="center">
                    <div class="nav__item">
                      <div
                        class="btn btn_clear"
                        @click="hasMarginClass = 'is-margin-'"
                        :class="hasMarginClass === 'is-margin-' ? 'is-ink-link' : 'is-ink-lighter'"
                      >
                        <svg class="ixo"><use xlink:href="#border-outside"></use></svg>
                      </div>
                    </div>
                    <div class="nav__item">
                      <div
                        class="btn btn_clear"
                        @click="hasMarginClass = 'is-margin-top-'"
                        :class="hasMarginClass === 'is-margin-top-' ? 'is-ink-link' : 'is-ink-lighter'"
                      >
                        <svg class="ixo"><use xlink:href="#border-top"></use></svg>
                      </div>
                    </div>
                    <div class="nav__item">
                      <div
                        class="btn btn_clear"
                        @click="hasMarginClass = 'is-margin-right-'"
                        :class="hasMarginClass === 'is-margin-right-' ? 'is-ink-link' : 'is-ink-lighter'"
                      >
                        <svg class="ixo"><use xlink:href="#border-right"></use></svg>
                      </div>
                    </div>
                    <div class="nav__item">
                      <div
                        class="btn btn_clear"
                        @click="hasMarginClass = 'is-margin-bottom-'"
                        :class="hasMarginClass === 'is-margin-bottom-' ? 'is-ink-link' : 'is-ink-lighter'"
                      >
                        <svg class="ixo"><use xlink:href="#border-bottom"></use></svg>
                      </div>
                    </div>
                    <div class="nav__item">
                      <div
                        class="btn btn_clear"
                        @click="hasMarginClass = 'is-margin-left-'"
                        :class="hasMarginClass === 'is-margin-left-' ? 'is-ink-link' : 'is-ink-lighter'"
                      >
                        <svg class="ixo"><use xlink:href="#border-left"></use></svg>
                      </div>
                    </div>
                  </div>
                  <input type="range" class="range-slider" min="0" max="8" v-model="marginSize" />
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
            <li class="nav__item"><h2>is-margin</h2></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DocTab from '@/components/DocTab.vue';

export default {
  components: {
    DocTab,
  },
  data: () => {
    return {
      hasMarginClass: 'is-margin-',
      marginSize: 3,
      markup: `...`,
      config: `$is-margin-options: $spacings;`,
    };
  },
};
</script>

<style scoped lang="scss">
.demo-bg {
  padding: 1px;
}
</style>
