<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>data-tooltip</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="column center-items">
        <div v-html="markup"></div>
        <div class="is-theme is-margin-top-5 is-padding-center-2 is-radius is-elevated-16">
          <div class="nav">
            <div class="nav__item">
              <select class="input input_round" id="alerStyle" v-model="orientation">
                <option
                  :value="orientation"
                  v-for="(orientation, index) in orientations"
                  :key="index"
                  v-text="orientation.slice(13)"
                ></option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="params"></params-table>
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
      orientations: ['data-tooltip-top', 'data-tooltip-right', 'data-tooltip-bottom', 'data-tooltip-left'],
      orientation: 'data-tooltip-top',
      params: [
        {
          name: '$tooltip-style',
          type: 'map',
          default: '',
        },
        {
          name: '$tooltip-radius',
          type: 'number',
          default: '2',
        },
        {
          name: '$tooltip-padding-ratio',
          type: 'number',
          default: '2',
        },
        {
          name: '$tooltip-font-size',
          type: 'number',
          default: '12',
        },
        {
          name: '$tooltip-line-height',
          type: 'number',
          default: '12',
        },
        {
          name: '$tooltip-min-height',
          type: 'number',
          default: '20',
        },
        {
          name: '$tooltip-weight',
          type: 'string',
          default: '$is-normal',
        },
        {
          name: '$tooltip-background',
          type: 'color',
          default: '$background-invert',
        },
        {
          name: '$tooltip-color',
          type: 'color',
          default: '$text-invert',
        },
      ],
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'metrics()', type: 'mixin', link: '#scroll-to-metrics' },
        { name: '$body-font-family', type: 'variable', link: '#scroll-to-body-font-family' },
      ],
      markup: `<a class="btn" data-tooltip-top="hello!">hover me</a>`,
    };
  },
  watch: {
    orientation: function(val) {
      this.markup = `<a class="btn" ${val}="hello!">hover me</a>`;
    },
  },
};
</script>