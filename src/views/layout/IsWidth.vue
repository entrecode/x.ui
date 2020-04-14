<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>is-width</h1>
      </div>
      <div data-flex="center-items center" :class="{ 'demo-fullscreen': openDemo }" class="is-relative">
        <div class="btn btn_minor btn_square is-absolute is-fab-ne is-layer-10" @click="openDemo = !openDemo">
          <svg class="ixo">
            <use xlink:href="#fullscreen" />
          </svg>
        </div>
        <div class="demo-preview is-padding-8" data-flex="center-items center" :class="previewClass">
          <div class="is-theme is-padding-5 is-radius is-elevated-16">
            <div data-grid="small-gutter" data-flex="center-items">
              <div data-col="fit">
                <div class="xui-toggle">
                  <input id="isWidthType" type="checkbox" v-model="isWidthType" />
                  <label for="isWidthType" class="xui-toggle__label">
                    <div class="xui-toggle__switch"></div>
                    {{ this.isWidthType ? 'fixed' : 'flexibel' }}
                  </label>
                </div>
              </div>
              <div data-col="fit" data-tooltip-top="relation">
                <select id="isWidthRelation" class="input" v-model="isWidthRelation">
                  <option value>relative</option>
                  <option value="-vw">viewport width</option>
                  <option value="-vh">viewport height</option>
                </select>
              </div>
              <div data-col="fit" data-tooltip-top="ratio">
                <select id="isWidthRatio" class="input" v-model="isWidthRatio">
                  <option value="-full">full</option>
                  <option value="-1-4">1:4</option>
                  <option value="-half">half</option>
                  <option value="-3-4">3:4</option>
                  <option value="-golden">golden</option>
                  <option value="-16-9">16:9</option>
                </select>
              </div>
              <div data-col="fit" data-tooltip-top="breakpoints">
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
            <div class="spacer spacer_small"></div>
            <pre v-highlightjs="markup"><code class="html"></code></pre>
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
      params: [
        {
          name: '$is-width-map',
          type: 'map',
          default: `(
  full: 100,
  '1-4': 25,
  half: 50,
  '3-4': 75,
  '16-9': 56.25,
  golden: 61.803,
)`,
        },
      ],
      requires: [{ name: 'set-breakpoints()', type: 'mixin', link: '#scroll-to-set-breakpoints' }],
      openDemo: false,
      isWidthType: true,
      previewClass: 'is-width-full',
      breakpoints: ['', '@xs', '@sm', '@md', '@lg', '@xl', '@xxl'],
      breakpoint: '',
      isWidthRatio: '-full',
      isWidthRelation: '',
      markup: `<div class="is-width-full">...</div>`,
    };
  },
  computed: {
    dirty() {
      return [this.isWidthType ? 'is-width' : 'is-min-width', this.isWidthRelation, this.isWidthRatio, this.breakpoint]
        .join('')
        .trim();
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

<style scoped lang="scss"></style>
