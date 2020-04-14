<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>img-utils</h1>
      </div>
      <div class="demo-preview is-padding-5 is-margin-bottom-5 is-relative">
        <div data-grid="center">
          <div data-col="8">
            <div class="demo-bg">
              <img src="sample-image-small.jpg" :class="responsiveness" class="demo-transition" />
            </div>
          </div>
        </div>
        <div
          class="demo-preview-settings is-absolute is-fab-s is-theme is-elevated-16 is-padding-middle-2 is-padding-center-3 is-radius"
        >
          <div class="nav">
            <div class="nav__item">
              <a
                @click="responsiveness = 'img-responsive'"
                class="btn btn_clear"
                :class="{ 'is-ink': responsiveness !== 'img-responsive' }"
                >img-responsive</a
              >
            </div>
            <div class="nav__item">
              <a
                @click="responsiveness = 'img-fullwidth'"
                class="btn btn_clear"
                :class="{ 'is-ink': responsiveness !== 'img-fullwidth' }"
                >img-fullwidth</a
              >
            </div>
          </div>
        </div>
      </div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
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
      responsiveness: 'img-responsive',
      markup: `<img class="img-responsive" />`,
    };
  },
  watch: {
    responsiveness: function(val) {
      this.markup = `<img class="${val}" />`;
    },
  },
};
</script>

<style lang="scss"></style>
