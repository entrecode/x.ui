<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>img-crop</h1>
      </div>
      <div class="demo-preview is-padding-5 is-margin-bottom-5 is-relative">
        <div data-grid="center">
          <div
            :data-col="[
            imgCrop === 'img-crop-16-9' || imgCrop === 'img-crop-golden' || imgCrop === 'img-crop-silver'
              ? '8'
              : imgCrop === 'img-crop-ultrawide'
              ? '12'
              : '4',
          ]"
            class="demo-transition"
          >
            <div :class="imgCrop" class="demo-transition">
              <img src="sample-image.jpg" />
            </div>
          </div>
        </div>
        <div
          class="demo-preview-settings is-absolute is-fab-s is-theme is-elevated-16 is-padding-middle-2 is-padding-center-3 is-round"
        >
          <select class="input input_round" v-model="imgCrop">
            <option value="img-crop-1-1">1:1</option>
            <option value="img-crop-3-4">3:4</option>
            <option value="img-crop-4-3">4:3</option>
            <option value="img-crop-16-9">16:9</option>
            <option value="img-crop-golden">golden ratio</option>
            <option value="img-crop-silver">silver ratio</option>
            <option value="img-crop-ultrawide">ultrawide</option>
          </select>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="imgCropMarkup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="imgCropParams"></params-table>
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
      imgCrop: 'img-crop-1-1',
      imgCropParams: [
        {
          name: '$img-crop-ratio',
          type: 'map',
          description: `ratio map declaring the class postfix and the ratio (x, y)`,
          default: `(
  '1-1': (1,1,),
  '3-4': (3,4,),
  '4-3': (4,3,),
  '16-9': (16,9,),
  'golden': (1.618,1,),
  'silver': (2.414,1,),
  'ultrawide': (3.6,1,),
)`,
        },
      ],
      imgCropMarkup: `<div class="img-crop-1-1">
  <img src="..." />
</div>`,
    };
  },
  watch: {
    imgCrop: function(val) {
      this.imgCropMarkup = `<div class="${val}">
  <img src="..." />
</div>`;
    },
  },
};
</script>

<style lang="scss"></style>
