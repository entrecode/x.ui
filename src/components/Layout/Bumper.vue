<template>
  <section id="scroll-to-bumper">
    <div class="titlebar">
      <h2>bumper</h2>
    </div>
    <div class="demo-preview is-padding-8">
      <div class="is-placed-ne is-absolute">
        <div class="is-padding-2 is-theme">
          <div class="xui-checkbox">
            <input type="checkbox" id="showHelper" v-model="showHelper" />
            <label for="showHelper" class="xui-checkbox__label">show helper</label>
          </div>
        </div>
      </div>
      <div
        class="is-margin-bottom-5"
        :class="[{'spacing-demo': showHelper}, invert ? 'is-theme-invert' : 'is-theme']"
        style="overflow: hidden;"
        v-html="markup"
      ></div>
      <div data-flex="center">
        <div class="is-theme is-padding-center-2 is-round is-elevated-16">
          <div class="nav">
            <div class="nav__item">
              <select class="input" v-model="option">
                <option
                  :value="option"
                  v-for="(option, index) in options"
                  :key="index"
                  v-text="option === '' ? 'default' : option.slice(7)"
                ></option>
              </select>
            </div>
            <div class="nav__item">
              <div class="xui-checkbox">
                <input type="checkbox" id="invert" v-model="invert" />
                <label for="invert" class="xui-checkbox__label">inverted</label>
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
  name: 'Bumper',
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      markup: `<div class="bumper"></div>`,
      option: '',
      options: ['', 'bumper_small', 'bumper_big'],
      showHelper: true,
      invert: false,
      params: [
        {
          name: '$bumper-size',
          default: '4',
          type: 'number',
        },
        {
          name: '$bumper-color',
          default: '$base-divider-color',
          type: 'color',
        },
        {
          name: '$bumper-invert-color',
          default: '$base-divider-inverted-color',
          type: 'color',
        },
        {
          name: '$bumper-spacing',
          default: 'get-space(5) 0',
          type: 'array',
        },
        {
          name: '$bumper-small-spacing',
          default: 'get-space(3) 0',
          type: 'array',
        },
        {
          name: '$bumper-big-spacing',
          default: 'get-space(6) 0',
          type: 'array',
        },
      ],
    };
  },
  computed: {
    classes() {
      return [this.option, this.invert ? 'bumper_invert' : null].join(' ');
    },
  },
  watch: {
    classes: function(val) {
      this.markup = `<div class="bumper ${val}"></div>`;
    },
  },
};
</script>
