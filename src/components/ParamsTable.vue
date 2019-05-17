<template>
  <div class="has-margin-bottom-5" v-if="params">
    <h4 class="is-h4">parameters</h4>
    <table class="table">
      <thead>
        <tr data-flex>
          <th data-col="3">Name</th>
          <th data-col="4">Description</th>
          <th data-col="1">Type</th>
          <th data-col="4">Default Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(param, index) in params" :key="index" data-flex>
          <td valign="top" data-col="3">
            <div class="code" v-text="param.name"></div>
          </td>
          <td v-html="param.description" valign="top" data-col="4"></td>
          <td v-if="param.type" valign="top" data-col="1">
            <span class="tag" v-text="param.type"></span>
          </td>
          <td valign="top" data-col="4">
            <pre v-highlightjs="param.default"><code class="scss"></code></pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['params'],
};
</script>

<style scoped lang="scss">
.table {
  thead {
    font-size: 0.75em;
  }
  td,
  th {
    text-align: left;
    padding: 8px 0;
  }
}
</style>