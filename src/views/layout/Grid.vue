<template>
  <section id="scroll-to-grid">
    <div data-container>
      <div class="titlebar">
        <h2>data-grid</h2>
      </div>
    </div>

    <div :data-container="gridContainer">
      <div :data-grid="[gridAlign, gridGutter].join(' ')" class="demo-grid">
        <div
          :data-col="[col.size, col.offset ? '+' + col.offset : null].join(' ')"
          v-for="(col, index) in cols"
          :key="index"
        >
          <div class="demo-col demo-preview is-padding-5" data-flex="center">
            <div class="is-theme">
              <div class="nav">
                <div class="nav__item">
                  <div class="input-group" data-tooltip-top="size">
                    <div class="input-group__addon">
                      <svg class="ixo">
                        <use xlink:href="#move-horizontal" />
                      </svg>
                    </div>
                    <input
                      type="number"
                      min="0"
                      max="12"
                      v-model="col.size"
                      class="input input_number"
                    />
                    <div class="input-group__addon">
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
                </div>
                <div class="nav__item">
                  <div class="input-group" data-tooltip-top="offset">
                    <div class="input-group__addon">
                      <svg class="ixo">
                        <use xlink:href="#add" />
                      </svg>
                    </div>
                    <input
                      type="number"
                      min="0"
                      max="11"
                      placeholder="0"
                      v-model="col.offset"
                      class="input input_number"
                    />
                    <div class="input-group__addon">
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
                </div>
                <div class="nav__item">
                  <div
                    class="btn btn_small btn_clear hover:is-ink-error is-ink-lightest btn_square"
                    @click="removeCol(index)"
                  >
                    <svg class="ixo">
                      <use xlink:href="#clear" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="spacer"></div>

      <div class="nav" data-flex="center">
        <div class="nav__item">
          <select id="displaySelected" class="input" v-model="gridGutter">
            <option value>default</option>
            <option value="small-gutter">small-gutter</option>
            <option value="no-gutter">no-gutter</option>
          </select>
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
        <div class="nav__item">
          <a @click.prevent="addCol" class="btn btn_clear">
            <svg class="ixo">
              <use xlink:href="#add" />
            </svg>
          </a>
        </div>
      </div>

      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      breakpoints: ['', '@xs', '@sm', '@md', '@lg', '@xl', '@xxl'],
      cols: [
        { size: 4, offset: null, sizeBreakpoint: '', offsetBreakpoint: '' },
        { size: 4, offset: null, sizeBreakpoint: '', offsetBreakpoint: '' },
        { size: 4, offset: null, sizeBreakpoint: '', offsetBreakpoint: '' },
      ],
      gridGutter: '',
      gridAlign: 'center',
      gridContainer: false,
      markup: `<div data-grid="center">
  <div data-col="4">...</div>
  <div data-col="4">...</div>
  <div data-col="4">...</div>
</div>`,
    };
  },
  methods: {
    addCol: function() {
      this.cols.push({ size: 4, offset: null, sizeBreakpoint: '', offsetBreakpoint: '' });
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
      return [this.cols, this.gridGutter, this.gridAlign, this.gridContainer].join('');
    },
    deep: true,
  },
  watch: {
    dirty: function(val) {
      this.markup = `${this.gridContainer ? '<div data-container>' : ''}
  <div data-grid="${[this.gridAlign, this.gridGutter].join(' ').trim()}">
    ${this.cols
      .map((c) => {
        return `<div data-col="${[c.size + c.sizeBreakpoint, c.offset + c.offsetBreakpoint]
          .join(' ')
          .trim()}">...</div>`;
      })
      .join('\n    ')}
  </div>
${this.gridContainer ? '</div>' : ''}`;
    },
    deep: true,
  },
};
</script>
