<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>is-radius</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="center">
        <div class="demo-bg is-padding-6" :class="isRadiusClass">
          <div
            class="demo-radius-settings is-theme is-padding-center-6 is-padding-middle-3"
            :class="isRadiusClass"
          >
            <div>
              <div class="xui-checkbox">
                <input type="checkbox" id="radiusTL" v-model="tl" />
                <label for="radiusTL" class="xui-checkbox__label"></label>
              </div>
            </div>
            <div></div>
            <div data-flex="end">
              <div class="xui-checkbox">
                <input type="checkbox" id="radiusTR" v-model="tr" />
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
                <input type="checkbox" id="radiusBL" v-model="bl" />
                <label for="radiusBL" class="xui-checkbox__label"></label>
              </div>
            </div>
            <div></div>
            <div data-flex="end">
              <div class="xui-checkbox">
                <input type="checkbox" id="radiusBR" v-model="br" />
                <label for="radiusBR" class="xui-checkbox__label"></label>
              </div>
            </div>
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
  name: 'HasRadius',
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      requires: [{ name: 'rem()', type: 'function', link: '#scroll-to-rem' }],
      radiusOptions: ['is-radius-0', 'is-radius', 'is-round'],
      radiusOption: 'is-radius',
      tl: true,
      tr: true,
      br: true,
      bl: true,
      isRadiusClass: 'is-radius',
      markup: `<div class="is-radius"></div>`,
      params: [
        {
          name: '$is-radius-options',
          type: 'map',
          default: `(
  '0': 0,
  '': 8,
)`,
        },
      ],
    };
  },
  computed: {
    edges() {
      const value = ['tl', 'tr', 'br', 'bl'].filter((v) => this[v]).join('');
      const classes = {
        tltr: ['-top'],
        tlbl: ['-left'],
        trbr: ['-right'],
        brbl: ['-bottom'],
        tltrbr: ['-top', '-br'],
        tltrbl: ['-top', '-bl'],
        tlbrbl: ['-bottom', '-tl'],
        trbrbl: ['-bottom', '-tr'],
        tltrbrbl: [''],
      };
      console.log(value);
      return classes[value];
    },
    dirty() {
      const d = ['radiusOption', 'tl', 'tr', 'br', 'bl'];
      return d.map((e) => this[e]).join();
    },
  },
  watch: {
    dirty: function(val) {
      this.isRadiusClass = this.edges.map((e) => this.radiusOption + e).join(' ');
      this.markup = `<div class="${this.isRadiusClass}"></div>`;
    },
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
