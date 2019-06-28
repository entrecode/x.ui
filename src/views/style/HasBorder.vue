<template>
  <section class="demo-section" id="scroll-to-has-border">
    <div data-container>
      <div data-grid>
        <div data-col="10">
          <doc-tab>
            <div slot="preview">
              <div :class="borderClass">
                <div class="nav" data-flex="center">
                  <div class="nav__item">
                    <div
                      class="btn btn_clear"
                      @click="setBorder('outside')"
                      :class="border.has('outside') ? 'is-ink-link' : 'is-ink-lighter'"
                    >
                      <svg class="ixo"><use xlink:href="#border-outside"></use></svg>
                    </div>
                  </div>
                  <div class="nav__item">
                    <div
                      class="btn btn_clear"
                      @click="setBorder('top')"
                      :class="border.has('top') ? 'is-ink-link' : 'is-ink-lighter'"
                    >
                      <svg class="ixo"><use xlink:href="#border-top"></use></svg>
                    </div>
                  </div>
                  <div class="nav__item">
                    <div
                      class="btn btn_clear"
                      @click="setBorder('right')"
                      :class="border.has('right') ? 'is-ink-link' : 'is-ink-lighter'"
                    >
                      <svg class="ixo"><use xlink:href="#border-right"></use></svg>
                    </div>
                  </div>
                  <div class="nav__item">
                    <div
                      class="btn btn_clear"
                      @click="setBorder('bottom')"
                      :class="border.has('bottom') ? 'is-ink-link' : 'is-ink-lighter'"
                    >
                      <svg class="ixo"><use xlink:href="#border-bottom"></use></svg>
                    </div>
                  </div>
                  <div class="nav__item">
                    <div
                      class="btn btn_clear"
                      @click="setBorder('left')"
                      :class="border.has('left') ? 'is-ink-link' : 'is-ink-lighter'"
                    >
                      <svg class="ixo"><use xlink:href="#border-left"></use></svg>
                    </div>
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
            <li class="nav__item"><h2>has-border</h2></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DocTab from '@/components/DocTab.vue';

export default {
  name: 'HasBorder',
  components: {
    DocTab,
  },
  data: () => {
    return {
      border: new Set(),
      borderClass: '',
      markup: `...`,
      config: `$has-border: 1 solid rgba($text, 0.1);`,
    };
  },
  methods: {
    setBorder: function(el) {
      if (el === 'outside') {
        if (this.border.has(el)) {
          this.border.clear();
        } else {
          this.border.clear();
          this.border.add(el);
        }
      } else {
        if (this.border.has('outside')) {
          this.border.clear();
        }
        if (this.border.has(el)) {
          this.border.delete(el);
        } else {
          this.border.add(el);
        }
      }

      this.$forceUpdate();

      let hb = '';
      let vb = '';

      if (this.border.has('top')) {
        hb = 'has-border-top';

        if (this.border.has('bottom')) {
          hb = 'has-border-middle';
        }
      }

      if (this.border.has('bottom')) {
        hb = 'has-border-bottom';

        if (this.border.has('top')) {
          hb = 'has-border-middle';
        }
      }

      if (this.border.has('left')) {
        vb = 'has-border-left';

        if (this.border.has('right')) {
          vb = 'has-border-center';
        }
      }

      if (this.border.has('right')) {
        vb = 'has-border-right';

        if (this.border.has('left')) {
          vb = 'has-border-center';
        }
      }

      if (this.border.has('outside')) {
        hb = 'has-border';
        vb = null;
      }

      this.borderClass = hb + ' ' + vb;
    },
  },
  mounted() {
    this.setBorder('outside');
  },
};
</script>

<style scoped lang="scss"></style>
