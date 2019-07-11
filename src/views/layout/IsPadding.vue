<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>is-padding</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="center">
        <div class="demo-bg" :class="isPaddingClass + paddingSize">
          <div class="is-theme is-padding-3">
            <div class="nav" data-flex="center">
              <div class="nav__item">
                <div
                  class="btn btn_clear"
                  @click="isPaddingClass = 'is-padding-'"
                  :class="isPaddingClass === 'is-padding-' ? 'is-ink-link' : 'is-ink-lighter'"
                >
                  <svg class="ixo">
                    <use xlink:href="#border-outside" />
                  </svg>
                </div>
              </div>
              <div class="nav__item">
                <div
                  class="btn btn_clear"
                  @click="isPaddingClass = 'is-padding-top-'"
                  :class="isPaddingClass === 'is-padding-top-' ? 'is-ink-link' : 'is-ink-lighter'"
                >
                  <svg class="ixo">
                    <use xlink:href="#border-top" />
                  </svg>
                </div>
              </div>
              <div class="nav__item">
                <div
                  class="btn btn_clear"
                  @click="isPaddingClass = 'is-padding-right-'"
                  :class="isPaddingClass === 'is-padding-right-' ? 'is-ink-link' : 'is-ink-lighter'"
                >
                  <svg class="ixo">
                    <use xlink:href="#border-right" />
                  </svg>
                </div>
              </div>
              <div class="nav__item">
                <div
                  class="btn btn_clear"
                  @click="isPaddingClass = 'is-padding-bottom-'"
                  :class="isPaddingClass === 'is-padding-bottom-' ? 'is-ink-link' : 'is-ink-lighter'"
                >
                  <svg class="ixo">
                    <use xlink:href="#border-bottom" />
                  </svg>
                </div>
              </div>
              <div class="nav__item">
                <div
                  class="btn btn_clear"
                  @click="isPaddingClass = 'is-padding-left-'"
                  :class="isPaddingClass === 'is-padding-left-' ? 'is-ink-link' : 'is-ink-lighter'"
                >
                  <svg class="ixo">
                    <use xlink:href="#border-left" />
                  </svg>
                </div>
              </div>
            </div>
            <input type="range" class="range-slider" min="0" max="8" v-model="paddingSize" />
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="params"></params-table>
      <div class="spacer"></div>
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
        { name: '$spacings', type: 'variable', link: '#scroll-to-spacings' },
        { name: 'get-space()', type: 'function', link: '#scroll-to-get-space' },
        { name: 'set-breakpoints()', type: 'mixin', link: '#scroll-to-set-breakpoints' },
      ],
      params: [
        {
          name: '$is-padding-options',
          type: 'map',
          default: '$spacings',
        },
      ],
      isPaddingClass: 'is-padding-',
      paddingSize: 3,
      markup: `<div class="is-padding-3"></div>`,
    };
  },
  computed: {
    dirty() {
      return [this.isPaddingClass, this.paddingSize].join('');
    },
  },
  watch: {
    dirty: function(val) {
      this.markup = `<div class="${val}"></div>`;
    },
  },
};
</script>

<style scoped lang="scss">
.demo-bg {
  &.is-padding-0 {
    padding: 1px;
  }
}
</style>
