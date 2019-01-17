<template>
  <section id="scroll-to-fontWeight">
    <DocTab>
        <div slot="title">
          <h3>font-weight</h3>
        </div>
        <div slot="preview">
          <div class="well" style="font-size: 20px;">
            <div data-grid>
              <div data-col="3" class="align-center">
                <div class="is-light select-all">is-light</div>
              </div>
              <div data-col="3" class="align-center">
                <div class="is-normal select-all">is-normal</div>
              </div>
              <div data-col="3" class="align-center">
                <div class="is-medium select-all">is-medium</div>
              </div>
              <div data-col="3" class="align-center">
                <div class="is-bold select-all">is-bold</div>
              </div>
            </div>
          </div>
        </div>

        <div slot="config">
          <pre v-highlightjs><code class="scss">// @param {string} $is-light [lighter]
// @param {string} $is-normal [normal]
// @param {string} $is-medium [bold]
// @param {string} $is-bold [bold]
$is-light: lighter !default;
$is-normal: normal !default;
$is-medium: bold !default;
$is-bold: bolder !default;</code></pre>
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
  name: 'FontWeight',
  components: {
    DocTab,
  },
};
</script>

<style scoped lang="scss">
</style>
