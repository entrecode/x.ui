<template>
  <section>
    <div data-col="10@md 8@lg">
      <div class="has-margin-bottom-5">
        <div class="demo-preview has-padding-8" data-flex="column center">
          <div class="well"><p>ecosystem families energize correlation, social enterprise citizen-centered.</p></div>
        </div>
      </div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="y-space-8"></div>
      <params-table :params="params" title="default params"></params-table>
      <div class="divider"></div>
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
      markup: `<div class="well">
  ...
</div>`,
      params: [
        {
          name: '$well-background',
          type: 'color',
          default: '$background-lightest',
        },
        {
          name: '$well-color',
          type: 'color',
          default: 'inherit',
        },
        {
          name: '$well-radius',
          type: 'number',
          default: '4',
        },
        {
          name: '$well-padding',
          type: 'array',
          default: '16 24',
        },
        {
          name: '$well-spacing',
          type: 'array',
          default: '0 0 16 0',
        },
        {
          name: '$well-style',
          type: 'map',
        },
      ],
      requires: [
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
