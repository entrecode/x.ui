<template>
  <section id="scroll-to-grid">
    <div data-container>
      <div class="titlebar">
        <h2>data-grid</h2>
        <div class="nav">
          <div class="nav__item">
            <a
              @click.prevent="gridContainer = !gridContainer"
              class="btn btn_clear"
              :class="gridContainer ? 'is-ink-link' : 'is-ink-lighter'"
              data-tooltip-top="use a container"
            >
              <svg class="ixo">
                <use xlink:href="#grid-half"></use>
              </svg>
            </a>
          </div>
          <div class="nav__item">
            <a @click.prevent="addCol" class="btn btn_clear">
              <svg class="ixo">
                <use xlink:href="#add"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div :data-container="gridContainer">
      <div :data-grid="[gridAlign + ' ' + gridGutterSize]" class>
        <div
          :data-col="[col.size, col.offset ? '+' + col.offset : null ].join(' ')"
          v-for="(col, index) in cols"
          :key="index"
        >
          <div class="typo-demo has-padding-3 has-margin-bottom-3" data-flex="center center-items">
            <div data-flex="center center-items" class="has-padding-3 is-theme" style="user-select: none;">
              <a class="is-mega" @click.prevent="upSize(col)">{{col.size}}</a>&ensp;
              <a
                class="is-mega"
                :class="col.offset ? 'is-ink-link' : 'is-ink-lightest'"
                @click.prevent="upOffset(col)"
              >{{'+' + col.offset}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Grid',
  data: () => {
    return {
      cols: [{ size: 4, offset: null }, { size: 4, offset: null }, { size: 4, offset: null }],
      gridAlign: 'is-center',
      gridContainer: false,
      gridGutterSize: 'is-small',
    };
  },
  methods: {
    addCol: function() {
      this.cols.push({ size: 4, offset: 0 });
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
};
</script>

<style scoped lang="scss">
</style>
