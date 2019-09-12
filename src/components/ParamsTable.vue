<template>
  <div v-if="params" class="is-margin-bottom-5 is-padding-bottom-5 is-border-bottom">
    <h2 class="is-h3" v-text="title ? title : 'parameters'"></h2>
    <div class="is-padding-5 is-radius is-theme-lightest">
      <table class="table">
        <thead>
          <tr data-grid="small-gutter">
            <th data-col="5">Name</th>
            <th data-col="2">Type</th>
            <th data-col="5">Default Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(param, index) in params" :key="index" data-grid="small-gutter">
            <td valign="top" data-col="5">
              <code v-text="param.name" class="is-bold"></code>
              <div
                v-html="param.description"
                v-if="param.description"
                style="font-size: .825em; padding: 8px 0;"
              ></div>
            </td>
            <td v-if="param.type" valign="top" data-col="2">
              <span class="tag" v-text="param.type"></span>
            </td>
            <td valign="top" data-col="5">
              <pre v-highlightjs="param.default || '...'"><code class="scss"></code></pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['params', 'title'],
};
</script>

<style scoped lang="scss">
.table {
  font-size: 12px;
  text-align: left;

  tr:last-child td {
    border: 0;
  }
}

.hljs {
  padding: 4px 8px;
}
</style>
