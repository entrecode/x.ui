<template>
  <section id="scroll-to-button">
    <DocTab>
      <div slot="title">
        <h3>Small Button</h3>
      </div>
      <div slot="preview">
        <a href class="btn btn_small">Small</a>&ensp;
        <a href class="btn btn_small">
          <svg class="ixo">
            <use xlink:href="#fire"></use>
          </svg>
          Small
        </a>&ensp;
        <a href class="btn btn_small">
          Small
          <svg class="ixo">
            <use xlink:href="#fire"></use>
          </svg>
        </a>&ensp;
        <a href class="btn btn_small">
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
$btn-small-font-size: $btn-font-size * 0.875;
$btn-small-line-height: $btn-small-font-size * $base-line-height;
$btn-small-icon-size: $btn-icon-size;
$btn-small-min-height: 32;
$btn-small-weight: $btn-weight;
$btn-small-style: ();
</code></pre>
      </div>
    </DocTab>
  </section>
</template>

<script>
import DocTab from './../DocTab.vue';

export default {
  name: 'ButtonSmall',
  components: {
    DocTab,
  },
  data: () => {
    return {
      inputMarkup:
        '<a href class="btn btn_small">Small</a>',
    };
  },
};
</script>

<style scoped lang="scss">
</style>
