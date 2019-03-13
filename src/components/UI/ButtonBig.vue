<template>
  <section id="scroll-to-button">
    <DocTab>
      <div slot="title">
        <h3>Big Button</h3>
      </div>
      <div slot="preview">
        <a href class="btn btn_big">Big</a>&ensp;
        <a href class="btn btn_big">
          <svg class="ixo">
            <use xlink:href="#fire"></use>
          </svg>
          Big
        </a>&ensp;
        <a href class="btn btn_big">
          Big
          <svg class="ixo">
            <use xlink:href="#fire"></use>
          </svg>
        </a>&ensp;
        <a href class="btn btn_big">
          <svg class="ixo">
            <use xlink:href="#fire"></use>
          </svg>
        </a>
      </div>

      <div slot="markup">
        <pre v-highlightjs="inputMarkup"><code class="html"></code></pre>
      </div>
      <div slot="config">
        <pre v-highlightjs><code class="scss">
$btn-big-font-size: $btn-font-size * 1.125;
$btn-big-line-height: $btn-big-font-size * $base-line-height;
$btn-big-icon-size: $btn-icon-size;
$btn-big-min-height: 48;
$btn-big-weight: $btn-weight;
$btn-big-style: ();
</code></pre>
      </div>
    </DocTab>
  </section>
</template>

<script>
import DocTab from './../DocTab.vue';

export default {
  name: 'ButtonBig',
  components: {
    DocTab,
  },
  data: () => {
    return {
      inputMarkup:
        '<a href class="btn btn_big">Small</a>',
    };
  },
};
</script>

<style scoped lang="scss">
</style>
