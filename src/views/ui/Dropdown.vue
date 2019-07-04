<template>
  <section>
    <div data-col="10 8@xl">
      <div class="is-padding-center-3">
        <h2>dropdown</h2>
      </div>
      <div class="demo-preview is-padding-8" data-flex="column center-items">
        <div class="align-center is-padding-bottom-5">
          <div
            class="dropdown"
            tabindex="0"
            :class="[posX !== '' ? 'dropdown_' + posX : '', {'dropdown_above' : posY } , { 'on-hover': onHover }]"
          >
            <a class="btn">click here</a>
            <div class="dropdown-options">
              <a href class="dropdown-option">dropdown option</a>
              <a href class="dropdown-option">dropdown option</a>
              <a href class="dropdown-option">dropdown option</a>
              <div class="dropdown_divider"></div>
              <div class="dropdown-option">
                <a href class="btn btn_block">a button</a>
              </div>
            </div>
          </div>
        </div>
        <div class="is-theme is-margin-top-5 is-padding-center-2 is-round is-elevated-16">
          <div class="nav">
            <div class="nav__item">
              <select class="input" v-model="posX">
                <option
                  :value="pos"
                  v-for="(pos, index) in posXs"
                  :key="index"
                  v-text="pos === '' ? 'default' : pos"
                ></option>
              </select>
            </div>
            <div class="nav__item">
              <div class="xui-checkbox">
                <input type="checkbox" id="posY" value="above" v-model="posY" />
                <label for="posY" class="xui-checkbox__label">above</label>
              </div>
            </div>
            <div class="nav__item">
              <div class="xui-checkbox">
                <input type="checkbox" id="onHover" v-model="onHover" />
                <label for="onHover" class="xui-checkbox__label">on-hover</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="params"></params-table>
      <div class="divider"></div>
      <params-table :params="paramsOptions" title="dropdown-options params"></params-table>
      <div class="divider"></div>
      <params-table :params="paramsOption" title="dropdown-option params"></params-table>
      <div class="divider"></div>
      <params-table :params="paramsDivider" title="dropdown-divider params"></params-table>
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
      markup: `<div class="dropdown" tabindex="0">
  <a class="btn">click here</a>
  <div class="dropdown-options">
    <a href class="dropdown-option">...</a>
    <div class="dropdown_divider"></div>
    ...
  </div>
</div>`,
      posY: '',
      posXs: ['', 'left', 'center', 'right', 'full'],
      posX: '',
      onHover: false,
      requires: [
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'is-scrollable()', type: 'mixin', link: '#scroll-to-is-scrollable' },
        { name: 'elevation()', type: 'mixin', link: '#scroll-to-elevation' },
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
      ],
      params: [
        {
          name: '$dropdown-in-hover',
          type: 'boolean',
          description: 'open all dropdowns on hove by default',
          default: 'false',
        },
      ],
      paramsOptions: [
        {
          name: '$dropdown-options-radius',
          type: 'number',
          default: '4',
        },
        {
          name: '$dropdown-options-padding',
          type: 'array',
          default: '8',
        },
        {
          name: '$dropdown-options-max-height',
          type: 'number | null',
          default: '320',
        },
        {
          name: '$dropdown-options-background',
          type: 'color',
          default: '$background',
        },
        {
          name: '$dropdown-options-color',
          type: 'color',
          default: '$text',
        },
        {
          name: '$dropdown-options-elevation',
          type: '[1-24] | false',
          default: '8',
        },
        {
          name: '$dropdown-options-style',
          type: 'array',
          default: '',
        },
      ],
      paramsOption: [
        {
          name: '$dropdown-option-color',
          type: 'color',
          default: '$text',
        },
        {
          name: '$dropdown-option-background',
          type: 'color',
          default: 'none',
        },
        {
          name: '$dropdown-option-padding',
          type: 'array',
          default: '4 8',
        },
        {
          name: '$dropdown-option-spacing',
          type: 'array',
          default: '0',
        },
        {
          name: '$dropdown-option-font-size',
          type: 'number',
          default: '$base-font-size',
        },
        {
          name: '$dropdown-option-line-height',
          type: 'number',
          default: '$dropdown-option-font-size * $base-line-height',
        },
        {
          name: '$dropdown-option-alignment',
          type: 'center | left | right',
          default: '$dropdown-option-font-size * $base-line-height',
        },
        {
          name: '$dropdown-option-style',
          type: 'array',
          default: '',
        },
        {
          name: '$dropdown-option-hover-style',
          type: 'array',
          default: '',
        },
      ],
      paramsDivider: [
        {
          name: '$dropdown-option-divider-size',
          type: 'number',
          default: '1',
        },
        {
          name: '$dropdown-option-divider-spacing',
          type: 'array',
          default: '4 0',
        },
        {
          name: '$dropdown-option-divider-color',
          type: 'color',
          default: '$base-divider-color',
        },
        {
          name: '$dropdown-option-divider-style',
          type: 'array',
          default: '',
        },
      ],
    };
  },
  computed: {
    classes() {
      return [
        this.posY ? 'dropdown_above' : null,
        this.onHover ? 'on-hover' : null,
        this.posX !== '' ? 'dropdown_' + this.posX : null,
      ].join(' ');
    },
  },
  watch: {
    classes: function(val) {
      this.markup = `<div class="dropdown ${this.classes}" tabindex="0">
  <a class="btn">click here</a>
  <div class="dropdown-options">
    <a href class="dropdown-option">...</a>
    <div class="dropdown_divider"></div>
    ...
  </div>
</div>`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
