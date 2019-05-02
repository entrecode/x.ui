<template>
  <section class="demo-section" id="scroll-to-has-radius">
    <div data-container>
      <div data-grid>
        <div data-col="10">
          <doc-tab>
            <div slot="preview">
              <div class="demo-bg has-padding-6" :class="hasRadiusClass">
                <div class="demo-radius-settings is-theme has-padding-center-6 has-padding-middle-3" :class="hasRadiusClass">
                  <div>
                    <div class="xui-checkbox">
                      <input type="checkbox" id="radiusTL" v-model="radiusEdge.tl">
                      <label for="radiusTL" class="xui-checkbox__label"></label>
                    </div>
                  </div>
                  <div></div>
                  <div data-flex="end">
                    <div class="xui-checkbox">
                      <input type="checkbox" id="radiusTR" v-model="radiusEdge.tr">
                      <label for="radiusTR" class="xui-checkbox__label"></label>
                    </div>
                  </div>
                  <div></div>
                  <div>
                    <select name id class="input" v-model="radiusOption">
                      <option
                        :value="option"
                        v-for="(option, index) in radiusOptions"
                        :key="index"
                        v-text="option"
                      ></option>
                    </select>
                  </div>
                  <div></div>
                  <div>
                    <div class="xui-checkbox">
                      <input type="checkbox" id="radiusBL" v-model="radiusEdge.bl">
                      <label for="radiusBL" class="xui-checkbox__label"></label>
                    </div>
                  </div>
                  <div></div>
                  <div data-flex="end">
                    <div class="xui-checkbox">
                      <input type="checkbox" id="radiusBR" v-model="radiusEdge.br">
                      <label for="radiusBR" class="xui-checkbox__label"></label>
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
            <li class="nav__item">
              <h2>has-radius</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';
import DocTab from './../DocTab.vue';

export default {
  name: 'HasRadius',
  components: {
    BlocksGroup,
    DocTab,
  },
  data: () => {
    return {
      radiusOptions: ['none', 'default', 'round'],
      radiusOption: 'round',
      radiusEdge: { tl: true, tr: true, bl: true, br: true },
      hasRadiusClass: 'is-round',
      markup: `<div class="has-radius-0"></div>
<div class="has-radius"></div>
<div class="is-round"></div>`,
      config: `$has-radius-options: (
  '0': 0,
  '': 4,
);`,
    };
  },
};
</script>

<style scoped lang="scss">
.demo-radius-settings {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  position: relative;
  z-index: 1;
}
</style>