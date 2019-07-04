<template>
  <section>
    <div data-grid>
      <div data-col="10 8@xl">
        <div class="is-padding-center-3">
          <h2>file-upload</h2>
        </div>
        <div class="demo-preview is-padding-8" data-flex="center">
          <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl">
            <form class="file-upload">
              <input type="file" multiple="multiple" /> drop files here or
              <a>upload</a>
            </form>
          </div>
        </div>
        <div class="spacer"></div>
        <pre v-highlightjs="markup"><code class="html"></code></pre>
        <div class="spacer"></div>
        <params-table :params="params"></params-table>
        <div class="spacer"></div>
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

<style scoped lang="scss"></style>
