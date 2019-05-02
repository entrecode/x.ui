<template>
  <section data-container class="has-margin-bottom-8">
    <div data-grid>
      <div data-col="10">
        <div id="#scroll-to-loader">
          <doc-tab>
            <div slot="preview">
              <div data-grid>
                <div data-col="4" data-flex="center center-items">
                  <span class="loader"></span>
                </div>
                <div data-col="4" data-flex="center center-items">
                  <a class="btn">
                    <span class="loader"></span>
                  </a>
                </div>
                <div data-col="4" data-flex="center center-items">
                  <div class="input-group">
                    <input type="text" class="input input_big" placeholder="input...">
                    <div class="input-group__addon">
                      <span class="loader"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div slot="markup">
              <pre v-highlightjs="markup"><code class="html"></code></pre>
            </div>
            <div slot="config">
              <pre v-highlightjs="config"><code class="scss"></code></pre>
            </div>
          </doc-tab>
          <doc-tab>
            <div slot="preview">
              <div class="align-center">
                <a class="btn btn_super is-relative">
                  save
                  <span class="loader is-local"></span>
                </a>
              </div>
            </div>

            <div slot="markup">
              <pre v-highlightjs="markupLocal"><code class="html"></code></pre>
            </div>
          </doc-tab>
          <doc-tab>
            <div slot="preview">
              <div class="align-center">
                <a class="btn" @click="showLoader = !showLoader">
                  show global loader
                </a>
                <span class="loader is-global" v-if="showLoader" @click="showLoader = !showLoader"></span>
              </div>
            </div>

            <div slot="markup">
              <pre v-highlightjs="markupGlobal"><code class="html"></code></pre>
            </div>
          </doc-tab>
        </div>
      </div>
      <div data-col="2">
        <ul class="nav nav_stacked is-sticky" style="top: 120px;">
          <li class="nav__item">
            <h2>loader</h2>
          </li>
          <li class="nav__item">
            <!-- <a href="#scroll-to-loader" class="is-kilo is-ink hover:is-ink-link">inline loader</a> -->
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import DocTab from '@/components/DocTab.vue';

export default {
  components: {
    DocTab,
  },
  data: () => {
    return {
      showLoader: false,
      markup: `<span class="loader"></span>

<a href="btn"><span class="loader"></span></a>

<div class="input-group">
  <input type="text" class="input" placeholder="input...">
  <div class="input-group__addon">
    <span class="loader"></span>
  </div>
</div>`,
      markupLocal: `<span class="loader is-local"></span>`,
      markupGlobal: `<span class="loader is-global"></span>`,
      config: `$loader-size: 24;
$loader-style: ();
$loader-track-width: 4;
$loader-track-color: rgba($text, 0.1);
$loader-racer-color: $link;
$loader-racer-animation: loaderDefault;
$loader-racer-animation-speed: 1s;
$loader-racer-animation-behavior: infinite linear;

$loader-is-local-style: ();
$loader-is-global-style: ();
$loader-is-global-background: $backdrop;`,
    };
  },
};
</script>

<style scoped lang="scss">
</style>