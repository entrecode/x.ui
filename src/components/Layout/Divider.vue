<template>
  <section id="scroll-to-divider">
    <div class="titlebar">
      <h2>divider</h2>
    </div>
    <div class="demo-preview is-padding-8">
      <div class="is-placed-ne is-absolute">
        <div class="is-padding-2 is-theme">
          <div class="xui-checkbox">
            <input type="checkbox" id="o39dh" v-model="showHelper" />
            <label for="o39dh" class="xui-checkbox__label">show helper</label>
          </div>
        </div>
      </div>
      <div
        class="is-margin-bottom-5"
        :class="[{ 'spacing-demo': showHelper }, invert ? 'is-theme-invert' : 'is-theme']"
        style="overflow: hidden;"
        v-html="markup"
      ></div>
      <div data-flex="center">
        <div class="is-theme is-padding-center-2 is-radius is-elevated-16">
          <div class="nav">
            <div class="nav__item">
              <select class="input" v-model="option">
                <option
                  :value="option"
                  v-for="(option, index) in options"
                  :key="index"
                  v-text="option === '' ? 'default' : option.slice(8)"
                ></option>
              </select>
            </div>
            <div class="nav__item">
              <select id="displaySelected" class="input" v-model="breakpoint">
                <option
                  :value="value"
                  v-for="(value, index) in breakpoints"
                  :key="index"
                  v-text="value === '' ? 'always' : value"
                ></option>
              </select>
            </div>
            <div class="nav__item">
              <div class="xui-checkbox">
                <input type="checkbox" id="u83hd" v-model="invert" />
                <label for="u83hd" class="xui-checkbox__label">inverted</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <pre v-highlightjs="markup"><code class="html"></code></pre>
    <div class="spacer"></div>
    <params-table :params="params"></params-table>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';

export default {
  name: 'Divider',
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      breakpoints: ['', '@xs', '@sm', '@md', '@lg', '@xl', '@xxl'],
      breakpoint: '',
      markup: `<div class="divider"></div>`,
      requires: [
        { name: 'set-breakpoints()', type: 'mixin', link: '#scroll-to-set-breakpoints' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
      ],
      option: '',
      options: ['', 'divider_small', 'divider_big'],
      showHelper: true,
      invert: false,
      params: [
        {
          name: '$divider-height',
          type: 'number',
          default: '1',
        },
        {
          name: '$divider-color',
          type: 'color',
          default: '$base-divider-color',
        },
        {
          name: '$divider-invert-color',
          type: 'color',
          default: '$base-divider-inverted-color',
        },
        {
          name: '$divider-spacing',
          type: 'array',
          default: 'get-space(3) 0; // 16 0',
        },
        {
          name: '$divider-small-spacing',
          type: 'array',
          default: 'get-space(1) 0; // 4 0',
        },
        {
          name: '$divider-big-spacing',
          type: 'array',
          default: 'get-space(5) 0; // 32 0',
        },
      ],
    };
  },
  computed: {
    classes() {
      return [
        this.option ? 'divider ' + this.option + this.breakpoint : 'divider' + this.breakpoint,
        this.invert ? 'divider_invert' : null,
      ]
        .join(' ')
        .trim();
    },
  },
  watch: {
    classes: function(val) {
      this.markup = `<div class="${val}"></div>`;
    },
  },
};
</script>
