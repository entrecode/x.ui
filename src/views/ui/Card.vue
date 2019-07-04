<template>
  <section>
    <div class="is-padding-center-3">
      <h2>card</h2>
    </div>
    <div data-col="10@md 8@lg">
      <div class="demo-preview is-padding-8">
        <div class="card">
          <h2>catalyze design thinking</h2>
          <p>academic thought leadership. Emerging innovate; society humanitarian change-makers benefit corporation.</p>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="params"></params-table>
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
      markup: `<div class="card">
  ...
</div>`,
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'elevation()', type: 'mixin', link: '#scroll-to-elevation' },
      ],
      params: [
        {
          name: '$card-background',
          type: 'color',
          default: '$background',
        },
        {
          name: '$card-color',
          type: 'color',
          default: '$text',
        },
        {
          name: '$card-padding',
          type: 'array',
          default: '24',
        },
        {
          name: '$card-spacing',
          type: 'array',
          default: '0',
        },
        {
          name: '$card-elevation',
          type: '[1-24] | false',
          default: '4',
        },
        {
          name: '$card-radius',
          type: 'number',
          default: '4',
        },
        {
          name: '$card-style',
          type: 'array',
          default: '',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
