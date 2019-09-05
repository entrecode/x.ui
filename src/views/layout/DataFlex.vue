<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>data-flex</h1>
      </div>
      <div class="demo-preview is-relative" :data-flex="flexValues" style="min-height: 320px;">
        <div
          data-col="4"
          class="is-padding-2"
          v-for="(col, index) in cols"
          :key="index"
          :data-flex-item="col.alignSelf"
        >
          <div class="is-padding-3 is-theme-invert">
            <div class="is-h2" v-html="col.body"></div>
            <div data-grid="small-gutter">
              <div data-col="auto" data-tooltip-top="align-self">
                <select id="alignSelf" class="input" v-model="col.alignSelf">
                  <option
                    :value="value"
                    v-for="(value, index) in alignSelfs"
                    :key="index"
                    v-text="value === '' ? 'select' : value"
                  ></option>
                </select>
              </div>
              <div data-col="auto" v-show="col.alignSelf">
                <select id="displaySelected" class="input" v-model="col.alignSelfBp">
                  <option
                    :value="value"
                    v-for="(value, index) in breakpoints"
                    :key="index"
                    v-text="value === '' ? 'always' : value"
                  ></option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <div data-grid>
        <div data-col="4">
          <div data-grid="small-gutter" data-flex="end-items">
            <div data-col="8">
              <div class="field-group">
                <label for="justifyContent" class="field-group__label">
                  <h2 class="is-h4">justify-content</h2>
                </label>
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
                <select id="displaySelected" class="input" v-model="justifyContentBp">
                  <option
                    :value="value"
                    v-for="(value, index) in breakpoints"
                    :key="index"
                    v-text="value === '' ? 'always' : value"
                  ></option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div data-col="4">
          <div data-grid="small-gutter" data-flex="end-items">
            <div data-col="8">
              <div class="field-group">
                <label for="alignItems" class="field-group__label">
                  <h2 class="is-h4">align-items</h2>
                </label>
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
                <select id="displaySelected" class="input" v-model="alignItemBp">
                  <option
                    :value="value"
                    v-for="(value, index) in breakpoints"
                    :key="index"
                    v-text="value === '' ? 'always' : value"
                  ></option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div data-col="4">
          <div data-grid="small-gutter" data-flex="end-items">
            <div data-col="8">
              <div class="field-group">
                <label for="direction" class="field-group__label">
                  <h2 class="is-h4">flex-direction</h2>
                </label>
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
                <select id="displaySelected" class="input" v-model="directionBp">
                  <option
                    :value="value"
                    v-for="(value, index) in breakpoints"
                    :key="index"
                    v-text="value === '' ? 'always' : value"
                  ></option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div data-col="4">
          <div data-grid="small-gutter" data-flex="end-items">
            <div data-col="8">
              <div class="field-group">
                <label for="wrap" class="field-group__label">
                  <h2 class="is-h4">flex-wrap</h2>
                </label>
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
                <select id="displaySelected" class="input" v-model="wrapBp">
                  <option
                    :value="value"
                    v-for="(value, index) in breakpoints"
                    :key="index"
                    v-text="value === '' ? 'always' : value"
                  ></option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div data-col="4">
          <div data-grid="small-gutter" data-flex="end-items">
            <div data-col="8">
              <div class="field-group">
                <label for="alignContent" class="field-group__label">
                  <h2 class="is-h4">align-content</h2>
                </label>
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
            <div data-col="4">
              <div class="field-group">
                <select id="displaySelected" class="input" v-model="alignContentBp">
                  <option
                    :value="value"
                    v-for="(value, index) in breakpoints"
                    :key="index"
                    v-text="value === '' ? 'always' : value"
                  ></option>
                </select>
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
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      colsWatch: '',
      cols: [
        { body: `<div class="is-ink-link">One</div>grey elephant balancing`, alignSelf: '', alignSelfBp: '' },
        { body: `One, <div class="is-ink-link">two</div>buckle my shoe`, alignSelf: '', alignSelfBp: '' },
        { body: `The ants go marching<div class="is-ink-link">three</div>by three`, alignSelf: '', alignSelfBp: '' },
        { body: `Three, <div class="is-ink-link">four</div>knock on the door`, alignSelf: '', alignSelfBp: '' },
        { body: `<div class="is-ink-link">Five</div>jellyfish sitting on a rock`, alignSelf: '', alignSelfBp: '' },
        { body: `Five, <div class="is-ink-link">six</div>pick up sticks`, alignSelf: '', alignSelfBp: '' },
      ],
      breakpoints: ['', '@xs', '@sm', '@md', '@lg', '@xl', '@xxl'],
      flexValues: '',
      justifyContents: ['', 'around', 'between', 'center', 'stretch', 'start', 'end'],
      justifyContent: '',
      justifyContentBp: '',
      alignItems: ['', 'end-items', 'start-items', 'center-items', 'baseline-items', 'stretch-items'],
      alignItem: '',
      alignItemBp: '',
      alignSelfs: ['', 'auto', 'baseline', 'stretch', 'center', 'start', 'end'],
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
      alignContentBp: '',
      directions: ['', 'column', 'column-reverse', 'row', 'row-reverse'],
      direction: '',
      directionBp: '',
      wraps: ['', 'wrap', 'nowrap', 'wrap-reverse'],
      wrap: '',
      wrapBp: '',
      markup: `<div data-flex>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>`,
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
          name: '$_align-content',
          type: 'map',
          default: `(
  'end-content': 'flex-end',
  'start-content': 'flex-start',
  'center-content': 'center',
  'stretch-content': 'stretch',
  'between-content': 'space-between',
  'around-content': 'space-around'
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
      return [
        this.colsWatch,
        this.justifyContent,
        this.justifyContentBp,
        this.alignItem,
        this.alignItemBp,
        this.alignContent,
        this.alignContentBp,
        this.direction,
        this.directionBp,
        this.wrap,
        this.wrapBp,
      ].join('');
    },
  },
  watch: {
    cols: {
      deep: true,
      handler() {
        this.colsWatch = JSON.stringify(this.cols);
      },
    },
    dirty: function(val) {
      this.flexValues = [
        this.justifyContent + this.justifyContentBp,
        this.alignItem + this.alignItemBp,
        this.alignContent + this.alignContentBp,
        this.direction + this.directionBp,
        this.wrap + this.wrapBp,
      ]
        .join(' ')
        .trim();
      this.markup = `<div data-flex="${this.flexValues}">
  ${this.cols
    .map((c) => {
      return `<div${c.alignSelf ? ` data-flex-item="` + c.alignSelf + c.alignSelfBp + `"` : ''}>...</div>`;
    })
    .join('\n  ')}
</div>
${this.gridContainer ? '</div>' : ''}`;
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
