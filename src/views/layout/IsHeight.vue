<template>
  <section>
    <div :class="{ 'demo-fullscreen': openDemo }" data-flex="is-center center">
      <div class="btn is-absolute is-fab-ne" @click="openDemo = !openDemo">
        <svg class="ixo"><use xlink:href="#fullscreen"></use></svg>
      </div>
      <div
        :class="isHeightType + isHeightRelation + isHeightRatio"
        data-flex="center center-items"
        class="demo-bg"
        style="transition: height .2s;"
      >
        <div class="has-padding-8 is-theme has-margin-8">
          <h1 v-text="isHeightType"></h1>
          <div data-grid>
            <div data-col="6">
              <div class="field-group">
                <div class="xui-radio">
                  <input type="radio" name="isHeightType" id="isHeight" v-model="isHeightType" value="is-height" />
                  <label for="isHeight" class="xui-radio__label">is-height</label>
                </div>
              </div>
            </div>
            <div data-col="6">
              <div class="field-group">
                <div class="xui-radio">
                  <input
                    type="radio"
                    name="isHeightType"
                    id="hasMinHeight"
                    v-model="isHeightType"
                    value="has-min-height"
                  />
                  <label for="hasMinHeight" class="xui-radio__label">has-min-height</label>
                </div>
              </div>
            </div>
          </div>
          <div class="field-group">
            <label for="isHeightRelation" class="field-group__label">relation</label>
            <select id="isHeightRelation" class="input" v-model="isHeightRelation">
              <option value>relative</option>
              <option value="-vw">viewport width</option>
              <option value="-vh">viewport height</option>
            </select>
          </div>
          <div class="field-group">
            <label for="isHeightRatio" class="field-group__label">ratio</label>
            <select id="isHeightRatio" class="input" v-model="isHeightRatio">
              <option value="-full">full</option>
              <option value="-1-4">1:4</option>
              <option value="-half">half</option>
              <option value="-3-4">3:4</option>
              <option value="-golden">golden</option>
              <option value="-16-9">16:9</option>
            </select>
          </div>
          <doc-tab :markup-col="12" :preview-col="12">
            <div slot="markup">
              <pre v-highlightjs="markup"><code class="html"></code></pre>
            </div>
            <div slot="config">
              <pre v-highlightjs="config"><code class="scss"></code></pre>
            </div>
          </doc-tab>
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
      openDemo: false,
      isHeightType: 'is-height',
      isHeightRatio: '-full',
      isHeightRelation: '',
      previewClass: '',
      markup: `...`,
      config: `$is-height-map: (
  full: 100,
  '1-4': 25,
  half: 50,
  '3-4': 75,
  '16-9': 56.25,
  golden: 61.803,
);`,
    };
  },
};
</script>

<style scoped lang="scss"></style>
