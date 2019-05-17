<template>
  <section>
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
        <div data-grid>
          <div data-col="6">
            <div class="xui-radio">
              <input
                type="radio"
                id="imgResponsive"
                name="responsiveness"
                value="img-responsive"
                v-model="responsiveness"
              >
              <label for="imgResponsive" class="xui-checkbox__label">responsive</label>
            </div>
          </div>
          <div data-col="6">
            <div class="xui-radio">
              <input
                type="radio"
                id="imgFull"
                name="responsiveness"
                value="img-full"
                v-model="responsiveness"
              >
              <label for="imgFull" class="xui-checkbox__label">full</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-grid="center">
      <div data-col="8@xl">
        <h2 class="is-giga">img-crop</h2>
        <div class="demo-markup-preview has-margin-middle-5">
          <pre v-highlightjs="markup"><code class="html"></code></pre>
        </div>
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

<style lang="scss">
</style>