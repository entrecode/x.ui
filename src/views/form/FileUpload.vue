<template>
  <section>
    <div class="has-padding-center-3">
      <h2>file-upload</h2>
    </div>
    <div class="demo-preview has-padding-8" data-flex="column center-items">
      <div class="is-theme has-padding-5 has-radius">
        <form class="file-upload">
          <input type="file" multiple="multiple">
          drop files here or
          <a>upload</a>
        </form>
      </div>
    </div>
    <div data-grid="center">
      <div data-col="10@md 8@lg">
        <pre v-highlightjs="markup"><code class="html"></code></pre>
        <params-table :params="params"></params-table>
        <div class="divider"></div>
        <requires-list :requires="requires"></requires-list>
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
      markup: `<form class="file-upload">
  <input type="file" multiple="multiple">
  drop files here or <a>upload</a>
</form>`,
      params: [
        { name: '$file-upload-spacing', type: 'array', default: '0 0 16' },
        { name: '$file-upload-padding', type: 'array', default: '16' },
        {
          name: '$file-upload-border-radius',
          type: 'number',
          default: '4',
        },
        {
          name: '$file-upload-border',
          type: 'string',
          default: '2px dashed $minor',
        },
        {
          name: '$file-upload-background',
          type: 'color',
          default: 'none',
        },
        {
          name: '$file-upload-style',
          type: 'array',
          default: '',
        },
        {
          name: '$file-upload-hover-style',
          type: 'array',
          default: '',
        },
      ],
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
</style>
