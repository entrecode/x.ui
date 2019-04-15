<template>
  <section data-container class="has-margin-bottom-8">
    <div data-grid>
      <div data-col="10">
        <div id="#scroll-to-hamburger-btn">
          <h2>hamburger-btn</h2>
          <doc-tab>
            <div slot="preview">
              <div data-grid>
                <div data-col="6">
                  <div class="well align-center">
                    <a
                      class="hamburger-btn"
                      @click="hamburgerActive = !hamburgerActive"
                      :class="{'is-active' : hamburgerActive}"
                    ></a>
                  </div>
                </div>
                <div data-col="6">
                  <div class="well align-center">
                    <a
                      class="hamburger-btn"
                      @click="hamburgerActive = !hamburgerActive"
                      :class="{'is-active' : !hamburgerActive}"
                    ></a>
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DocTab from './../DocTab.vue';

export default {
  name: 'HamburgerBtn',
  components: {
    DocTab,
  },
  data: () => {
    return {
      hamburgerActive: false,
      markup: `<a class="hamburger-btn"></a>
<a class="hamburger-btn is-active"></a>`,
      config: `$hamburger-btn-spacing: $btn-spacing; // 0
$hamburger-btn-background: transparent;
$hamburger-btn-line-width: 16;
$hamburger-btn-line-weight: 2;
$hamburger-btn-line-spacing: 4;
$hamburger-btn-line-color: $link;
$hamburger-btn-style: ();`,
    };
  },
};
</script>

<style scoped lang="scss">
</style>