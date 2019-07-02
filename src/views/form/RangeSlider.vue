<template>
  <section>
    <div data-grid>
      <div data-col="10 8@xl">
        <div class="is-padding-center-3">
          <h2>range-slider</h2>
        </div>
        <div class="demo-preview is-padding-8" data-flex="center">
          <div class="is-theme is-padding-5 is-radius" data-col="8">
            <input type="range" class="range-slider" />
          </div>
        </div>
        <div data-grid="center">
          <div data-col="10@md 8@lg">
            <div class="spacer"></div>
            <pre v-highlightjs="markup"><code class="html"></code></pre>
            <div class="spacer"></div>
            <params-table :params="params"></params-table>
            <div class="divider"></div>
            <requires-list :requires="requires"></requires-list>
          </div>
        </div>
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
      markup: `<input type="range" class="range-slider">`,
      params: [
        { name: '$range-slider-height', type: 'number', default: '8' },
        {
          name: '$range-slider-radius',
          type: 'number',
          default: '4',
        },
        {
          name: '$range-slider-background',
          type: 'color',
          default: '$background-lightest',
        },
        {
          name: '$range-slider-style',
          type: 'array',
          default: '',
        },
        {
          name: '$range-slider-hover-style',
          type: 'array',
          default: '',
        },
        {
          name: '$range-slider-thumb-color',
          type: 'color',
          default: '$link',
        },
        {
          name: '$range-slider-thumb-size',
          type: 'number',
          default: '16',
        },
        {
          name: '$range-slider-thumb-radius',
          type: 'number',
          default: '8',
        },
        {
          name: '$range-slider-thumb-style',
          type: 'array',
          default: '',
        },
        {
          name: '$range-slider-thumb-hover-style',
          type: 'array',
          default: '',
        },
      ],
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
