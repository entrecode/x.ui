<template>
  <section>
    <div class="has-padding-center-3">
      <h2>responsiveness</h2>
    </div>
    <div class="demo-preview has-padding-5 has-margin-bottom-5 is-relative">
      <div data-grid="center">
        <div data-col="4">
          <div class="demo-bg">
            <img src="sample-image-small.jpg" :class="responsiveness" class="demo-transition">
          </div>
        </div>
      </div>
      <div
        class="demo-preview-settings is-absolute is-fab-s is-theme is-elevated-16 has-padding-middle-2 has-padding-center-3 is-round"
      >
        <div class="nav">
          <div class="nav__item">
            <a
              @click="responsiveness = 'is-responsive'"
              class="btn btn_clear is-uppercase"
              :class="{'is-ink': responsiveness !== 'is-responsive'}"
            >is-responsive</a>
          </div>
          <div class="nav__item">
            <a
              @click="responsiveness = 'is-fullwidth'"
              class="btn btn_clear is-uppercase"
              :class="{'is-ink': responsiveness !== 'is-fullwidth'}"
            >is-fullwidth</a>
          </div>
        </div>
      </div>
    </div>
    <div data-grid="center">
      <div data-col="10@md 8@lg">
        <pre v-highlightjs="markup"><code class="html"></code></pre>
      </div>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';

export default {
  name: 'Media',
  components: {
    ParamsTable,
  },
  data: () => {
    return {
      responsiveness: 'is-responsive',
      markup: `<img class="is-responsive" />`,
    };
  },
  watch: {
    responsiveness: function(val) {
      this.markup = `<img class="${val}" />`;
    },
  },
};
</script>

<style lang="scss">
</style>