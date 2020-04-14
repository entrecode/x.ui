<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>hamburger</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="column center-items">
        <div class="align-center is-padding-bottom-5">
          <div data-grid="small-gutter">
            <div data-col="fit">
              <div @click="isActive = !isActive" :class="{ 'is-active': isActive }" class="hamburger"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="params" title="default params"></params-table>
      <requires-list :requires="requires"></requires-list>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';
export default {
  name: 'Button',
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      isActive: false,
      markup: `<a class="hamburger"></a>`,
      params: [
        {
          name: '$hamburger-spacing',
          type: 'array',
          default: '$btn-spacing  // 0',
        },
        {
          name: '$hamburger-width',
          type: 'number',
          default: '16',
        },
        {
          name: '$hamburger-background',
          type: 'color',
          default: 'transparent',
        },
        {
          name: '$hamburger-line-weight',
          type: 'number',
          description: 'line strength of hamburger layers',
          default: '2',
        },
        {
          name: '$hamburger-line-spacing',
          type: 'number',
          description: 'spacing of hamburger layers',
          default: '4',
        },
        {
          name: '$hamburger-line-color',
          type: 'color',
          default: '$link',
        },
        {
          name: '$hamburger-style',
          type: 'map',
          default: '',
        },
      ],
      requires: [
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'metrics()', type: 'mixin', link: '#scroll-to-metrics' },
        { name: '_btn-reset', type: 'mixin' },
      ],
    };
  },
  watch: {
    isActive: function() {
      this.markup = `<a class="hamburger${this.isActive ? ' is-active' : ''}"></a>`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
