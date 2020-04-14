<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>xui-select</h1>
      </div>

      <div class="nav">
        <div class="nav__item">
          <a @click="activeTab = 1" class="btn btn_clear demo-tab" :class="{ 'is-active': activeTab === 1 }"
            >css only</a
          >
        </div>
        <div class="nav__item">
          <a @click="activeTab = 2" class="btn btn_clear demo-tab" :class="{ 'is-active': activeTab === 2 }">with js</a>
        </div>
      </div>

      <div v-if="activeTab === 1" class="animated fadeIn">
        <div class="demo-preview is-padding-8" data-flex="center">
          <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl">
            <div tabindex="0" class="xui-select">
              <span class="xui-select__placeholder" v-if="!selected">select</span>
              <span class="xui-select__selected" v-else v-text="selected"></span>
              <span class="xui-select__caret"></span>
              <ul class="xui-select-options">
                <li>
                  <a @mousedown="selected = ''" tabindex="0" class="xui-select-option">make a selection</a>
                </li>
                <li>
                  <a
                    @mousedown="selected = 'option 1'"
                    tabindex="0"
                    class="xui-select-option"
                    :class="{ 'is-selected': selected === 'option 1' }"
                    >option 1</a
                  >
                </li>
                <li>
                  <a
                    @mousedown="selected = 'option 2'"
                    tabindex="0"
                    class="xui-select-option"
                    :class="{ 'is-selected': selected === 'option 2' }"
                    >option 2</a
                  >
                </li>
                <li>
                  <a
                    @mousedown="selected = 'option 3'"
                    tabindex="0"
                    class="xui-select-option"
                    :class="{ 'is-selected': selected === 'option 3' }"
                    >option 3</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="spacer"></div>
        <pre v-highlightjs="markup"><code class="html"></code></pre>
      </div>
      <div v-if="activeTab === 2" class="animated fadeIn">
        <div class="demo-preview is-padding-8" data-flex="center">
          <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl">
            <div class="xui-select">
              <span class="xui-select__placeholder" @click="toggleSelect = !toggleSelect" v-if="!selected">select</span>
              <span class="xui-select__selected" @click="toggleSelect = !toggleSelect" v-else v-text="selected"></span>
              <span class="xui-select__caret"></span>
              <ul class="xui-select-options" :class="{ 'is-active': toggleSelect }">
                <li>
                  <a @mousedown="selected = ''" class="xui-select-option">make a selection</a>
                </li>
                <li>
                  <a
                    @mousedown="selected = 'option 1'"
                    class="xui-select-option"
                    :class="{ 'is-selected': selected === 'option 1' }"
                    >option 1</a
                  >
                </li>
                <li>
                  <a
                    @mousedown="selected = 'option 2'"
                    class="xui-select-option"
                    :class="{ 'is-selected': selected === 'option 2' }"
                    >option 2</a
                  >
                </li>
                <li>
                  <a
                    @mousedown="selected = 'option 3'"
                    class="xui-select-option"
                    :class="{ 'is-selected': selected === 'option 3' }"
                    >option 3</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="spacer"></div>
        <pre v-highlightjs="markup2"><code class="html"></code></pre>
      </div>
      <div class="spacer"></div>
      <h2>special feature</h2>
      <p>
        the
        <code class="is-ink-highlight">.xui-select-options</code> can be used outside an
        <code class="is-ink-highlight">.xui-select</code> for a custom elements. without the
        <code class="is-ink-highlight">xui-select</code> wrapper there is no
        <code class="is-ink-highlight">:focus</code> or <code class="is-ink-highlight">.is-active</code> functionality.
      </p>
      <div class="demo-preview is-padding-8" data-flex="center">
        <div data-col="8@lg 6@xl">
          <ul class="xui-select-options" style="position: inherit; top: inherit;">
            <li>
              <a @mousedown="selected = ''" tabindex="0" class="xui-select-option">make a selection</a>
            </li>
            <li>
              <a
                @mousedown="selected = 'option 1'"
                tabindex="0"
                class="xui-select-option"
                :class="{ 'is-selected': selected === 'option 1' }"
                >option 1</a
              >
            </li>
            <li>
              <a
                @mousedown="selected = 'option 2'"
                tabindex="0"
                class="xui-select-option"
                :class="{ 'is-selected': selected === 'option 2' }"
                >option 2</a
              >
            </li>
            <li>
              <a
                @mousedown="selected = 'option 3'"
                tabindex="0"
                class="xui-select-option"
                :class="{ 'is-selected': selected === 'option 3' }"
                >option 3</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="spacer"></div>
      <params-table :params="params"></params-table>
      <params-table :params="placeholderParams" title="placeholder params"></params-table>
      <params-table :params="optionsParams" title="options params"></params-table>
      <params-table :params="optionParams" title="option params"></params-table>
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
      markup: `<div tabindex="0" class="xui-select">
  <!-- if no selection -->
  <span class="xui-select__placeholder">...</span>
  <!-- if selection -->
  <span class="xui-select__selected">...</span>
  <span class="xui-select__caret"></span>
  <ul class="xui-select-options">
    <li>
      <!-- add .is-active for selected option -->
      <a tabindex="0" class="xui-select-option">...</a>
    </li>
    ...
  </ul>
</div>`,
      markup2: `<div class="xui-select">
  <!-- if no selection -->
  <span class="xui-select__placeholder">...</span>
  <!-- if selection -->
  <span class="xui-select__selected">...</span>
  <span class="xui-select__caret"></span>
  <ul class="xui-select-options">
    <li>
      <!-- add .is-active for selected option -->
      <a class="xui-select-option">...</a>
    </li>
    ...
  </ul>
</div>`,
      selected: '',
      activeTab: 1,
      toggleSelect: false,
      params: [
        { name: '$xui-select-background', type: 'color', default: '$input-background' },
        { name: '$xui-select-color', type: 'color', default: '$input-color' },
        { name: '$xui-select-spacing', type: 'array', default: '$input-spacing' },
        { name: '$xui-select-padding-ratio', type: 'number', default: '$input-padding-ratio' },
        { name: '$xui-select-font-size', type: 'number', default: '$input-font-size' },
        { name: '$xui-select-line-height', type: 'number', default: '$input-line-height' },
        { name: '$xui-select-min-height', type: 'number', default: '$input-min-height' },
        { name: '$xui-select-round', type: 'boolean', default: '$input-round' },
        { name: '$xui-select-radius', type: 'array', default: '$input-radius' },
        { name: '$xui-select-border-color', type: 'color', default: '$input-border-color' },
        { name: '$xui-select-border-width', type: 'number', default: '$input-border-width' },
        { name: '$xui-select-border-style', type: 'string', default: '$input-border-style' },
        { name: '$xui-select-style', type: 'map', default: '' },
      ],
      placeholderParams: [
        { name: '$xui-select-placeholder-color', type: 'color', default: '$input-placeholder-color' },
        { name: '$xui-select-placeholder-style', type: 'map', default: '' },
        { name: '$xui-select-placeholder-hover-style', type: 'map', default: '' },
      ],
      optionsParams: [
        { name: '$xui-select-options-radius', type: 'number', default: '4' },
        { name: '$xui-select-options-padding', type: 'array', default: '4' },
        { name: '$xui-select-options-max-height', type: 'px | null', default: '240' },
        { name: '$xui-select-options-background', type: 'color', default: '$background' },
        { name: '$xui-select-options-elevation', type: '[1-24] | false', default: '8' },
        { name: '$xui-select-options-style', type: 'map', default: '' },
      ],
      optionParams: [
        { name: '$xui-select-option-radius', type: 'array', default: '4' },
        { name: '$xui-select-option-spacing', type: 'array', default: '4 0' },
        { name: '$xui-select-option-padding', type: 'array', default: '4' },
        { name: '$xui-select-option-font-size', type: 'number', default: '$xui-select-font-size' },
        { name: '$xui-select-option-background', type: 'color', default: 'none' },
        { name: '$xui-select-option-color', type: 'color', default: '$text' },
        { name: '$xui-select-option-style', type: 'map', default: '' },
        { name: '$xui-select-option-hover-background', type: 'color', default: '$state-hover' },
        { name: '$xui-select-option-hover-color', type: 'color', default: '$xui-select-option-color' },
        { name: '$xui-select-option-hover-style', type: 'map', default: '' },
        {
          name: '$xui-select-option-selected-background',
          type: 'color',
          default: '$xui-select-option-hover-background',
        },
        { name: '$xui-select-option-selected-color', type: 'color', default: '$xui-select-option-hover-color' },
        { name: '$xui-select-option-selected-style', type: 'map', default: '' },
      ],
      requires: [
        { name: 'array-magic()', type: 'mixin', link: '#scroll-to-array-magic' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'elevation()', type: 'mixin', link: '#scroll-to-elevation' },
        { name: 'metrics()', type: 'mixin', link: '#scroll-to-metrics' },
        { name: 'is-scrollable()', type: 'mixin', link: '#scroll-to-is-scrollable' },
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'em()', type: 'function', link: '#scroll-to-em' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
      ],
    };
  },
  watch: {
    toggleSelect: function(val) {
      this.markup2 = `<div class="xui-select">
  <!-- if no selection -->
  <span class="xui-select__placeholder">...</span>
  <!-- if selection -->
  <span class="xui-select__selected">...</span>
  <span class="xui-select__caret"></span>
  <ul class="xui-select-options${this.toggleSelect ? ' is-active' : ''}">
    <li>
      <!-- add .is-active for selected option -->
      <a class="xui-select-option">...</a>
    </li>
    ...
  </ul>
</div>`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
