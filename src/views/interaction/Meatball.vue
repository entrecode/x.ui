<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>meatball</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="center">
        <div class="btn">
          button
          <div class="meatball"></div>
        </div>
        <div class="x-space-3"></div>
        <div class="btn">
          button
          <div class="meatball">2</div>
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
      markup: `<div class="meatball"></div>`,
      requires: [
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'elevation()', type: 'mixin', link: '#scroll-to-elevation' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
      ],
      params: [
        {
          name: '$meatball-size',
          type: 'number',
          default: '12',
        },
        {
          name: '$meatball-position-top',
          type: 'number',
          default: '0',
        },
        {
          name: '$meatball-position-right',
          type: 'number',
          default: '0',
        },
        {
          name: '$meatball-border-width',
          type: 'number',
          default: '4',
        },
        {
          name: '$meatball-border-color',
          type: 'color',
          default: '#f00',
        },
        {
          name: '$meatball-background',
          type: 'color',
          default: '#fff',
        },
        {
          name: '$meatball-elevation',
          type: '[1-24] | false',
          default: '4',
        },
        {
          name: '$meatball-style',
          type: 'map',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
