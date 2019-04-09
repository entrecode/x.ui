<template>
  <section id="scroll-to-headings" data-container>
    <DocTab>
      <div slot="title">
        <h2>Headings</h2>
      </div>
      <div slot="preview">
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <h6>H6</h6>
      </div>

      <div slot="config">
        <pre v-highlightjs="config"><code class="scss"></code></pre>
      </div>
    </DocTab>
  </section>
</template>

<script>
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import DocTab from './../DocTab.vue';

Vue.use(VueHighlightJS);

export default {
  name: 'Headings',
  components: {
    DocTab,
  },
  data: () => {
    return {
      config: `$headings-font: sans-serif;
$base-font-size: 16;
$headings-line-height: $base-line-height;   // 1.4
$headings-weight: $is-bold;
$headings-style: ();
$headings-inline-small-style: ();`,
    }
  },
};
</script>

<style scoped lang="scss">
</style>
