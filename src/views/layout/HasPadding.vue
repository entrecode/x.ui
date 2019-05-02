<template>
  <section class="demo-section" id="scroll-to-has-padding">
    <div data-container>
      <div data-grid>
        <div data-col="10">
          <doc-tab>
            <div slot="preview">
              <div class="demo-bg" :class="hasPaddingClass + paddingSize">
                <div class="is-theme has-padding-3">
                  <div class="nav" data-flex="center">
                    <div class="nav__item">
                      <div
                        class="btn btn_clear"
                        @click="hasPaddingClass = 'has-padding-'"
                        :class="hasPaddingClass === 'has-padding-' ? 'is-ink-link' : 'is-ink-lighter'"
                      >
                        <svg class="ixo">
                          <use xlink:href="#border-outside"></use>
                        </svg>
                      </div>
                    </div>
                    <div class="nav__item">
                      <div
                        class="btn btn_clear"
                        @click="hasPaddingClass = 'has-padding-top-'"
                        :class="hasPaddingClass === 'has-padding-top-' ? 'is-ink-link' : 'is-ink-lighter'"
                      >
                        <svg class="ixo">
                          <use xlink:href="#border-top"></use>
                        </svg>
                      </div>
                    </div>
                    <div class="nav__item">
                      <div
                        class="btn btn_clear"
                        @click="hasPaddingClass = 'has-padding-right-'"
                        :class="hasPaddingClass === 'has-padding-right-' ? 'is-ink-link' : 'is-ink-lighter'"
                      >
                        <svg class="ixo">
                          <use xlink:href="#border-right"></use>
                        </svg>
                      </div>
                    </div>
                    <div class="nav__item">
                      <div
                        class="btn btn_clear"
                        @click="hasPaddingClass = 'has-padding-bottom-'"
                        :class="hasPaddingClass === 'has-padding-bottom-' ? 'is-ink-link' : 'is-ink-lighter'"
                      >
                        <svg class="ixo">
                          <use xlink:href="#border-bottom"></use>
                        </svg>
                      </div>
                    </div>
                    <div class="nav__item">
                      <div
                        class="btn btn_clear"
                        @click="hasPaddingClass = 'has-padding-left-'"
                        :class="hasPaddingClass === 'has-padding-left-' ? 'is-ink-link' : 'is-ink-lighter'"
                      >
                        <svg class="ixo">
                          <use xlink:href="#border-left"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <input type="range" class="range-slider" min="0" max="8" v-model="paddingSize">
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
              <h2>has-padding</h2>
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
  components: {
    DocTab,
  },
  data: () => {
    return {
      hasPaddingClass: 'has-padding-',
      paddingSize: 3,
      markup: `...`,
      config: `$has-padding-options: $spacings;`,
    };
  },
};
</script>

<style scoped lang="scss">
.demo-bg {
  &.has-padding-0 {
    padding: 1px;
  }
}
</style>