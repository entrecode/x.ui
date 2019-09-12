<template>
  <section>
    <div data-grid="center">
      <div data-col="10 8@xl">
        <div class="titlebar">
          <h2>data-grid</h2>
        </div>
      </div>

      <div data-col="12">
        <div class="demo-preview is-padding-middle-8">
          <div :data-container="gridContainer">
            <div :data-grid="[gridAlign, gridGutter].join(' ')" class="demo-grid demo-bg">
              <div
                :data-col="[col.size + col.sizeBreakpoint, col.offset > 0 ? '+' + col.offset + col.offsetBreakpoint : ''].join(' ')"
                v-for="(col, index) in cols"
                :key="index"
                :data-flex-order="col.order ? col.order + col.orderBreakpoint : null"
              >
                <div
                  class="is-theme is-padding-center-3 is-padding-top-5 is-padding-bottom-2 is-margin-middle-2"
                >
                  <div data-grid="small-gutter center">
                    <div data-col="12">
                      <div class="is-h2 is-ink-light align-center">{{index}}</div>
                    </div>
                    <div data-col="4">
                      <div class="field-group">
                        <div class="input-group" data-tooltip-top="size">
                          <input
                            type="number"
                            min="0"
                            max="12"
                            v-model="col.size"
                            class="input input_number align-center"
                          />
                          <div class="input-group__addon is-padding-0">
                            <div class="dropdown" tabindex="0">
                              <div
                                class="btn btn_clear btn_small is-body-font"
                                :class="{'is-ink-light' : col.sizeBreakpoint === ''}"
                                v-text="col.sizeBreakpoint === '' ? '@' : col.sizeBreakpoint"
                              ></div>
                              <div class="dropdown-options">
                                <a
                                  href
                                  class="dropdown-option"
                                  @click.prevent="col.sizeBreakpoint = value"
                                  v-for="(value, index) in breakpoints"
                                  :key="index"
                                  v-text="value === '' ? 'always' : value"
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <label class="field-group__label" data-flex="center">
                          <small>width</small>
                        </label>
                      </div>
                    </div>
                    <div data-col="4">
                      <div class="field-group">
                        <div class="input-group" data-tooltip-top="offset">
                          <input
                            type="number"
                            min="0"
                            max="11"
                            placeholder="0"
                            v-model="col.offset"
                            class="input input_number align-center"
                          />
                          <div class="input-group__addon is-padding-0">
                            <div class="dropdown" tabindex="0">
                              <div
                                class="btn btn_clear btn_small is-body-font"
                                :class="{'is-ink-light' : col.offsetBreakpoint === ''}"
                                v-text="col.offsetBreakpoint === '' ? '@' : col.offsetBreakpoint"
                              ></div>
                              <div class="dropdown-options">
                                <a
                                  href
                                  class="dropdown-option"
                                  @click.prevent="col.offsetBreakpoint = value"
                                  v-for="(value, index) in breakpoints"
                                  :key="index"
                                  v-text="value === '' ? 'always' : value"
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <label class="field-group__label" data-flex="center">
                          <small>offest</small>
                        </label>
                      </div>
                    </div>
                    <div data-col="4">
                      <div class="field-group">
                        <div class="input-group" data-tooltip-top="offset">
                          <input
                            type="number"
                            min="-1"
                            max="11"
                            placeholder="0"
                            v-model="col.order"
                            class="input input_number align-center"
                          />
                          <div class="input-group__addon is-padding-0">
                            <div class="dropdown" tabindex="0">
                              <div
                                class="btn btn_clear btn_small is-body-font"
                                :class="{'is-ink-light' : col.orderBreakpoint === ''}"
                                v-text="col.orderBreakpoint === '' ? '@' : col.orderBreakpoint"
                              ></div>
                              <div class="dropdown-options">
                                <a
                                  href
                                  class="dropdown-option"
                                  @click.prevent="col.orderBreakpoint = value"
                                  v-for="(value, index) in breakpoints"
                                  :key="index"
                                  v-text="value === '' ? 'always' : value"
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <label class="field-group__label" data-flex="center">
                          <small>order</small>
                        </label>
                      </div>
                    </div>
                    <div data-col="fit">
                      <div
                        class="btn btn_small btn_clear hover:is-ink-error is-ink-lightest btn_square"
                        @click="removeCol(index)"
                      >remove col</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="is-absolute is-placed-s">
            <a
              @click.prevent="addCol"
              class="btn btn_square btn_big btn_invert is-elevated-16 hover:is-elevated-4"
            >
              <svg class="ixo">
                <use xlink:href="#add" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div data-col="10 8@xl">
        <div class="spacer"></div>

        <div class="nav" data-flex="center">
          <div class="nav__item">
            <div class="input-group">
              <div class="input-group__addon">
                <small>gutter</small>
              </div>
              <div class="input-group__addon">
                <select id="displaySelected" class="input" v-model="gridGutter">
                  <option value>default</option>
                  <option value="small-gutter">small-gutter</option>
                  <option value="no-gutter">no-gutter</option>
                </select>
              </div>
            </div>
          </div>
          <div class="nav__item">
            <div
              class="btn btn_clear btn_square"
              @click="gridAlign = 'start'"
              :class="{'is-ink-lightest' : gridAlign !== 'start'}"
            >
              <svg class="ixo">
                <use xlink:href="#align-left" />
              </svg>
            </div>
            <div
              class="btn btn_clear btn_square"
              @click="gridAlign = 'center'"
              :class="{'is-ink-lightest' : gridAlign !== 'center'}"
            >
              <svg class="ixo">
                <use xlink:href="#align-center" />
              </svg>
            </div>
            <div
              class="btn btn_clear btn_square"
              @click="gridAlign = 'end'"
              :class="{'is-ink-lightest' : gridAlign !== 'end'}"
            >
              <svg class="ixo">
                <use xlink:href="#align-right" />
              </svg>
            </div>
          </div>
          <div class="nav__item">
            <div class="xui-toggle">
              <input id="gridContainer" type="checkbox" v-model="gridContainer" />
              <label for="gridContainer" class="xui-toggle__label" data-flex="center-items">
                <div class="xui-toggle__switch"></div>
                <div>
                  use a container
                  <br />
                  <small>max. 1200px</small>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="spacer"></div>
        <pre v-highlightjs="markup" v-if="showMarkup"><code class="html"></code></pre>
        <div class="spacer"></div>
        <params-table :params="containerParams" title="container params"></params-table>
        <params-table :params="gutterParams" title="gutter params"></params-table>
        <params-table :params="colParams" title="column params"></params-table>
        <requires-list :requires="requires"></requires-list>
      </div>
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
        { name: '$breakpoints', type: 'variable', link: '#scroll-to-breakpoints' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
        { name: 'bp()', type: 'function', link: '#scroll-to-bp' },
        { name: 'set-data-breakpoints()', type: 'mixin', link: '#scroll-to-set-data-breakpoints' },
      ],
      containerParams: [
        { name: '$grid-container-width ', type: 'number', default: '1200' },
        { name: '$grid-container-gutter ', type: 'number', default: '16' },
      ],
      gutterParams: [
        { name: '$grid-gutter', type: 'number', default: '32' },
        { name: '$grid-small-gutter', type: 'number', default: '16' },
      ],
      colParams: [{ name: '$grid-num-columns', type: 'number', default: '12' }],
      breakpoints: ['', '@xs', '@sm', '@md', '@lg', '@xl', '@xxl'],
      cols: [
        { size: 4, offset: 0, sizeBreakpoint: '', offsetBreakpoint: '', order: '', orderBreakpoint: '' },
        { size: 4, offset: 0, sizeBreakpoint: '', offsetBreakpoint: '', order: '', orderBreakpoint: '' },
        { size: 4, offset: 0, sizeBreakpoint: '', offsetBreakpoint: '', order: '', orderBreakpoint: '' },
      ],
      colsWatch: '',
      gridGutter: '',
      gridAlign: 'center',
      gridContainer: false,
      markup: `<div data-grid="center">
  <div data-col="4">...</div>
  <div data-col="4">...</div>
  <div data-col="4">...</div>
</div>`,
      showMarkup: true,
    };
  },
  methods: {
    addCol: function() {
      this.cols.push({ size: 4, offset: 0, sizeBreakpoint: '', offsetBreakpoint: '', order: '', orderBreakpoint: '' });
    },
    removeCol: function(index) {
      this.cols.splice(index, 1);
    },
    upSize: function(event) {
      if (event.size === 12) {
        event.size = 1;
      } else {
        event.size++;
      }
    },
    upOffset: function(event) {
      if (event.offset === 11) {
        event.offset = null;
      } else {
        event.offset++;
      }
    },
  },
  computed: {
    dirty() {
      return [this.colsWatch, this.gridGutter, this.gridAlign, this.gridContainer].join('');
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
      this.markup = `${this.gridContainer ? '<div data-container>' : ''}
  <div data-grid="${[this.gridAlign, this.gridGutter].join(' ').trim()}">
    ${this.cols
      .map((c) => {
        return `<div data-col="${[c.size + c.sizeBreakpoint, c.offset > 0 ? '+' + c.offset + c.offsetBreakpoint : '']
          .join(' ')
          .trim()}"${[c.order ? ' data-flex-order="' + c.order + c.orderBreakpoint + '"' : '']}>...</div>`;
      })
      .join('\n    ')}
  </div>
${this.gridContainer ? '</div>' : ''}`;
    },
  },
};
</script>
