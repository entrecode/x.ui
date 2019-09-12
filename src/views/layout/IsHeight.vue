<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>is-height</h1>
      </div>
      <div data-flex="center-items" :class="{ 'demo-fullscreen': openDemo }">
        <div
          style="width: 100%;"
          class="demo-preview is-padding-8"
          data-flex="center-items center"
          :class="previewClass"
        >
          <div class="btn btn_minor btn_square is-absolute is-fab-ne" @click="openDemo = !openDemo">
            <svg class="ixo">
              <use xlink:href="#fullscreen" />
            </svg>
          </div>
          <div class="is-theme is-padding-5 is-radius is-elevated-16">
            <div data-grid="small-gutter" data-flex="center-items">
              <div data-col="fit">
                <div class="xui-toggle">
                  <input id="isHeightType" type="checkbox" v-model="isHeightType" />
                  <label for="isHeightType" class="xui-toggle__label">
                    <div class="xui-toggle__switch"></div>
                    {{ this.isHeightType ? 'fixed' : 'flexibel' }}
                  </label>
                </div>
              </div>
              <div data-col="fit" data-tooltip-top="relation">
                <select id="isHeightRelation" class="input" v-model="isHeightRelation">
                  <option value>relative</option>
                  <option value="-vw">viewport width</option>
                  <option value="-vh">viewport height</option>
                </select>
              </div>
              <div data-col="fit" data-tooltip-top="ratio">
                <select id="isHeightRatio" class="input" v-model="isHeightRatio">
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
      requires: [{ name: 'set-breakpoints()', type: 'mixin', link: '#scroll-to-set-breakpoints' }],
      openDemo: false,
      previewClass: 'is-height-vw-16-9',
      breakpoints: ['', '@xs', '@sm', '@md', '@lg', '@xl', '@xxl'],
      breakpoint: '',
      isHeightType: true,
      isHeightRatio: '-16-9',
      isHeightRelation: '-vh',
      markup: `<div class="is-height-vw-16-9">...</div>`,
      params: [
        {
          name: '$is-height-map',
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
    };
  },
  computed: {
    dirty() {
      return [
        this.isHeightType ? 'is-height' : 'is-min-height',
        this.isHeightRelation,
        this.isHeightRatio,
        this.breakpoint,
      ].join('').trim();
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
