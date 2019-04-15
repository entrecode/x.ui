<template>
  <section data-container>
    <div data-grid="is-center">
      <div data-col="10">
        <div class="has-margin-bottom-8" id="scroll-to-modal">
          <DocTab>
            <div slot="title"></div>
            <div slot="preview" data-flex="center center-items" style="height: 100%;">
              <div class="align-center">
                <a @click.prevent="showModal = !showModal" class="btn">open modal</a>
              </div>
            </div>
            <div slot="markup">
              <pre v-highlightjs="markup"><code class="html"></code></pre>
            </div>
            <div slot="config">
              <pre v-highlightjs="config"><code class="scss"></code></pre>
            </div>
          </DocTab>
        </div>
      </div>

      <div data-col="2">
        <ul class="nav nav_stacked is-sticky" style="top: 120px;">
          <li class="nav__item">
            <h2>Modal</h2>
          </li>
          <li class="nav__item">
            <a
              href="#scroll-to-modal"
              v-smooth-scroll
              class="is-kilo is-ink-light hover:is-ink-link"
            >default modal</a>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="modal-wrapper"
      ref="default"
      :class="[{'has-backdrop' : hasBackdrop }, {'is-active' : showModal } ]"
      :data-flex="[alignItems, justifyContent].join(' ')"
    >
      <div
        class="modal"
        :data-col="dataCol ? dataCol : false"
        :class="[elevated.length ? 'is-elevated-' + elevated : false]"
      >
        <a class="modal__dismiss btn btn_clear" @click.prevent="showModal = !showModal">
          <svg class="ixo">
            <use xlink:href="#close"></use>
          </svg>
        </a>
        <div class="modal__header">
          <h2>Modal Header</h2>
        </div>
        <div class="modal__body">
          <div style="max-width: 320px; margin: 0 auto;">
            <div class="field-group">
              <label for class="field-group__label">[data-col]</label>
              <input
                type="number"
                class="input"
                min="1"
                max="12"
                v-model="dataCol"
                placeholder="1-12"
              >
            </div>
            <div class="field-group">
              <label for class="field-group__label">elevation</label>
              <div data-grid>
                <div data-col="8" data-flex="center-items">
                  <input
                    type="range"
                    class="range-slider"
                    v-model="elevated"
                    min="0"
                    max="24"
                    step="1"
                  >
                </div>
                <div data-col="4">
                  <input type="number" class="input" v-model="elevated" placeholder="0-24">
                </div>
              </div>
            </div>
            <div class="field-group">
              <div class="xui-checkbox">
                <input type="checkbox" v-model="hasBackdrop" id="hasBackdrop">
                <label for="hasBackdrop">has backdrop</label>
              </div>
            </div>

            <div class="position-settings well">
              <div class="position-settings-item position-settings-item_top">
                <span
                  @click="setSectionFlex('top')"
                  :class="flexConfig.has('top') ? 'is-ink-link' : 'is-ink-light'"
                >
                  <svg class="ixo">
                    <use xlink:href="#flex-position-top"></use>
                  </svg>
                </span>
              </div>
              <div class="position-settings-item position-settings-item_right">
                <span
                  @click="setSectionFlex('right')"
                  :class="flexConfig.has('right') ? 'is-ink-link' : 'is-ink-light'"
                >
                  <svg class="ixo">
                    <use xlink:href="#flex-position-right"></use>
                  </svg>
                </span>
              </div>
              <div class="position-settings-item position-settings-item_bottom">
                <span
                  @click="setSectionFlex('bottom')"
                  :class="flexConfig.has('bottom') ? 'is-ink-link' : 'is-ink-light'"
                >
                  <svg class="ixo">
                    <use xlink:href="#flex-position-bottom"></use>
                  </svg>
                </span>
              </div>
              <div class="position-settings-item position-settings-item_left">
                <span
                  @click="setSectionFlex('left')"
                  :class="flexConfig.has('left') ? 'is-ink-link' : 'is-ink-light'"
                >
                  <svg class="ixo">
                    <use xlink:href="#flex-position-left"></use>
                  </svg>
                </span>
              </div>
              <div class="position-settings-item position-settings-item_center">
                <span
                  @click="setSectionFlex('center')"
                  :class="flexConfig.has('center') ? 'is-ink-link' : 'is-ink-light'"
                >
                  <svg class="ixo">
                    <use xlink:href="#flex-position-center"></use>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__footer">
          <ul class="nav" data-flex="center">
            <li class="nav__item">
              <a class="btn">save</a>
            </li>
            <li class="nav__item">
              <a class="btn btn_minor">cancel</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DocTab from './../DocTab.vue';

export default {
  name: 'Modal',
  components: {
    DocTab,
  },
  data: () => {
    return {
      showModal: false,
      dataCol: null,
      hasBackdrop: false,
      flexConfig: new Set(),
      alignItems: '',
      justifyContent: '',
      elevated: 8,
      markup: `<div class="modal-wrapper">
  <div class="modal">
    <a class="modal__dismiss btn btn_clear">...</a>
    <div class="modal__header">...</div>
    <div class="modal__body">...</div>
    <div class="modal__footer">...</div>
  </div>
</div>`,
      config: `$modal-wrapper-background: $backdrop;
$modal-wrapper-z-index: 100;
$modal-wrapper-style: ();

$modal-min-width: 240;
$modal-max-width-relative: 50;
$modal-max-width-absolute: 640;

$modal-background: $background;
$modal-color: $text;
$modal-padding: 16;
$modal-radius: 16;
$modal-elevated: 8;
$modal-z-index: 100;
$modal-style: ();

$modal-dismiss-style: ();

$modal-header-spacing: 0;
$modal-header-padding: 16;
$modal-header-style: ();

$modal-body-spacing: 0;
$modal-body-padding: 16;
$modal-body-style: ();

$modal-footer-spacing: 0;
$modal-footer-padding: 16;
$modal-footer-style: ();`,
    };
  },
  methods: {
    setSectionFlex: function(pos) {
      const f = this.flexConfig;

      if (f.has(pos)) {
        f.delete(pos);
      } else {
        f.add(pos);
      }

      if (pos === 'center') {
        f.delete('top');
        f.delete('right');
        f.delete('bottom');
        f.delete('left');
      } else {
        f.delete('center');
      }

      if (f.has('center')) {
        this.alignItems = '';
        this.justifyContent = '';
      } else {
        if (f.has('top')) {
          this.alignItems = 'start-items';
          if (f.has('bottom')) {
            this.alignItems = 'stretch-items';
          }
        } else if (f.has('bottom')) {
          this.alignItems = 'end-items';
        }

        if (f.has('left')) {
          this.justifyContent = 'start';
          if (f.has('right')) {
            this.justifyContent = 'stretch';
          }
        } else if (f.has('right')) {
          this.justifyContent = 'end';
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.position-settings {
  border-radius: 8px;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    '. top .'
    'left center right'
    '. bottom .';
  margin: 0 0 16px 0;

  span {
    cursor: pointer;
    font-size: 24px;
  }
}

.position-settings-item {
  text-align: center;
  display: flex;

  &_top {
    grid-area: top;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 8px;
  }
  &_right {
    grid-area: right;
    align-items: center;
    justify-content: flex-end;
  }
  &_bottom {
    grid-area: bottom;
    align-items: flex-end;
    justify-content: center;
    padding-top: 8px;
  }
  &_left {
    grid-area: left;
    align-items: center;
    justify-content: flex-start;
  }
  &_center {
    grid-area: center;
    align-items: center;
    justify-content: center;
  }
}
</style>