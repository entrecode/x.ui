<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>data-flex</h1>
      </div>
      <div class="demo-preview is-relative" :data-flex="flexValues" style="min-height: 320px;">
        <div data-col="4">
          <div class="is-h1 is-margin-0 align-center">ONE</div>
        </div>
        <div data-col="4">
          <div class="is-h1 is-margin-0 align-center">ONE</div>
        </div>
        <div data-col="4">
          <div class="is-h1 is-margin-0 align-center">
            THR
            <br />EE
          </div>
        </div>
        <div data-col="4">
          <div class="is-h1 is-margin-0 align-center">
            FOU
            <br />R
          </div>
        </div>
        <div data-col="4">
          <div class="is-h1 is-margin-0 align-center">
            FIVE
            <br />E
          </div>
        </div>
        <div data-col="4">
          <div class="is-h1 is-margin-0 align-center">SIX</div>
        </div>
      </div>
      <div class="spacer"></div>
      <div data-grid>
        <div data-col="4">
          <div class="field-group">
            <label for="justifyContent" class="field-group__label">justify-content</label>
            <select id="justifyContent" class="input" v-model="justifyContent">
              <option
                :value="value"
                v-for="(value, index) in justifyContents"
                :key="index"
                v-text="value === '' ? 'select' : value"
              ></option>
            </select>
          </div>
        </div>
        <div data-col="4">
          <div class="field-group">
            <label for="alignItems" class="field-group__label">align-items</label>
            <select id="alignItems" class="input" v-model="alignItem">
              <option
                :value="value"
                v-for="(value, index) in alignItems"
                :key="index"
                v-text="value === '' ? 'select' : value"
              ></option>
            </select>
          </div>
        </div>
        <div data-col="4">
          <div class="field-group">
            <label for="direction" class="field-group__label">flex-direction</label>
            <select id="direction" class="input" v-model="direction">
              <option
                :value="value"
                v-for="(value, index) in directions"
                :key="index"
                v-text="value === '' ? 'select' : value"
              ></option>
            </select>
          </div>
        </div>
        <div data-col="4">
          <div class="field-group">
            <label for="wrap" class="field-group__label">flex-wrap</label>
            <select id="wrap" class="input" v-model="wrap">
              <option
                :value="value"
                v-for="(value, index) in wraps"
                :key="index"
                v-text="value === '' ? 'select' : value"
              ></option>
            </select>
          </div>
        </div>
        <div data-col="4">
          <div class="field-group">
            <label for="alignContent" class="field-group__label">align-content</label>
            <select id="alignContent" class="input" v-model="alignContent">
              <option
                :value="value"
                v-for="(value, index) in alignContents"
                :key="index"
                v-text="value === '' ? 'select' : value"
              ></option>
            </select>
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
      flexValues: '',
      justifyContents: ['', 'around', 'between', 'center', 'stretch', 'start', 'end'],
      justifyContent: '',
      alignItems: ['', 'end-items', 'start-items', 'center-items', 'baseline-items', 'stretch-items'],
      alignItem: '',
      alignContents: [
        '',
        'end-content',
        'start-content',
        'center-content',
        'stretch-content',
        'between-content',
        'around-content',
      ],
      alignContent: '',
      directions: ['', 'column', 'column-reverse', 'row', 'row-reverse'],
      direction: '',
      wraps: ['', 'wrap', 'nowrap', 'wrap-reverse'],
      wrap: '',
      markup: `<div data-flex></div>`,
      requires: [{ name: 'set-data-map-breakpoints()', type: 'mixin', link: '#scroll-to-set-data-map-breakpoints' }],
      params: [
        {
          name: '$_justify-content',
          type: 'map',
          default: `(
  'around': 'space-around',
  'between': 'space-between',
  'center': 'center',
  'stretch': 'stretch',
  'start': 'flex-start',
  'end': 'flex-end'
)`,
        },
        {
          name: '$_align-items',
          type: 'map',
          default: `(
  'end-items': 'flex-end',
  'start-items': 'flex-start',
  'center-items': 'center',
  'baseline-items': 'baseline',
  'stretch-items': 'stretch'
)`,
        },
        {
          name: '$_flex-direction',
          type: 'map',
          default: `(
  'column': 'column',
  'column-reverse': 'column-reverse',
  'row': 'row',
  'row-reverse': 'row-reverse'
)`,
        },
        {
          name: '$_flex-wrap',
          type: 'map',
          default: `(
  'wrap': 'wrap',
  'nowrap': 'nowrap',
  'wrap-reverse': 'wrap-reverse'
)`,
        },
      ],
    };
  },
  computed: {
    dirty() {
      return [this.justifyContent, this.alignItem, this.alignContent, this.direction, this.wrap].join(' ').trim();
    },
  },
  watch: {
    dirty: function(val) {
      this.flexValues = val;
      this.markup = `<div data-flex="${this.flexValues}"></div>`;
    },
  },
};
</script>

<style scoped lang="scss">
.demo-highlight {
  img {
    position: relative;
    z-index: -1;
  }
}

.demo-highlight-y {
  box-shadow: inset -16px 0 0 rgba(var(--spacingColor), 0.2);
}

.demo-highlight-x {
  box-shadow: inset 0 -16px 0 rgba(var(--spacingColor), 0.2);
}

.demo-highlight-both {
  box-shadow: inset -16px -16px 0 rgba(var(--spacingColor), 0.2);
}
</style>
