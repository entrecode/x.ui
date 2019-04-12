<template>
  <blocks-group :groups="sectionGroups" section-title="Media"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'Media',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          type: 'atoms',
          id: 'img-crop',
          navTitle: 'img-crop',
          groupItems: [
            {
              preview: `<div class="img-crop-1-1 has-margin-bottom-3">
  <div class="tag img-crop-tag">square</div>
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-3-4 has-margin-bottom-3">
  <div class="tag img-crop-tag">3:4</div>
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-4-3 has-margin-bottom-3">
  <div class="tag img-crop-tag">4:3</div>
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-16-9 has-margin-bottom-3">
  <div class="tag img-crop-tag">16:9</div>
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-golden has-margin-bottom-3">
  <div class="tag img-crop-tag">golden</div>
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-silver has-margin-bottom-3">
  <div class="tag img-crop-tag">silver</div>
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-ultrawide has-margin-bottom-3">
  <div class="tag img-crop-tag">ultrawide</div>
  <img src="sample-image.jpg" />
</div>`,
              markup: `<div class="img-crop-1-1">
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-3-4">
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-4-3">
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-16-9">
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-golden">
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-silver">
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-ultrawide">
  <img src="sample-image.jpg" />
</div>`,
              config: `$img-crop-ratio: (
  '1-1': (1,1,),
  '3-4': (3,4,),
  '4-3': (4,3,),
  '16-9': (16,9,),
  'golden': (1.618,1,),
  'silver': (2.414,1,),
  'ultrawide': (3.6,1,
);`,
            },
          ],
        },
        {
          type: 'modifier',
          id: 'img-responsive',
          navTitle: 'img-responsive',
          groupItems: [
            {
              preview: '<img src="sample-image-small.jpg" class="img-responsive" />',
              config: `...`,
            },
          ],
        },
        {
          type: 'modifier',
          id: 'img-full',
          navTitle: 'img-full',
          groupItems: [
            {
              preview: '<img src="sample-image.jpg" class="img-full" />',
              config: `...`,
            },
          ],
        },
        {
          title: 'is-outset',
          type: 'modifier',
          id: 'is-outset',
          navTitle: 'is-outset',
          groupItems: [
            {
              preview: `<div class="is-outset is-outset_left" data-col="8"><div class="img-crop-4-3"><div class="tag img-crop-tag">is-outset_left</div><img src="sample-image.jpg"></div></div> 
<p class="is-lead is-hyphen-block">Move the needle, progress thought partnership innovate white paper but thought provoking do-gooder. Technology humanitarian catalyze; invest green space. Impact investing segmentation but paradigm mobilize.</p>
<p class="is-hyphen-block">Systems thinking, unprecedented challenge innovate; parse inspirational initiative paradigm. Revolutionary, rubric, citizen-centered optimism collaborative cities compelling effective altruism social enterprise. Youth or because change-makers, society. Leverage collaborative consumption capacity building, issue outcomes resist compelling.</p>
<div class="is-outset is-outset_right" data-col="5"><div class="img-crop-16-9"><div class="tag img-crop-tag">is-outset_right</div><img src="sample-image.jpg"></div></div> 
<p class="is-lead is-hyphen-block">Move the needle, progress thought partnership innovate white paper but thought provoking do-gooder. Technology humanitarian catalyze; invest green space. Impact investing segmentation but paradigm mobilize.</p>
<p class="is-hyphen-block">Systems thinking, unprecedented challenge innovate; parse inspirational initiative paradigm. Revolutionary, rubric, citizen-centered optimism collaborative cities compelling effective altruism social enterprise. Youth or because change-makers, society. Leverage collaborative consumption capacity building, issue outcomes resist compelling.</p>
<div class="is-outset is-outset_full"><div class="img-crop-silver"><div class="tag img-crop-tag">is-outset_full</div><img src="sample-image.jpg"></div></div> 
<p class="is-hyphen-block">Move the needle, progress thought partnership innovate white paper but thought provoking do-gooder. Technology humanitarian catalyze; invest green space. Impact investing segmentation but paradigm mobilize.</p>`,
              markup: `<div class="is-outset is-outset_left" data-col="8">
  <div class="img-crop-4-3">
    <div class="tag img-crop-tag">is-outset_left</div>
    <img src="sample-image.jpg" />
  </div>
</div>
<p>...</p>

<div class="is-outset is-outset_right" data-col="5">
  <div class="img-crop-16-9">
    <div class="tag img-crop-tag">is-outset_right</div>
    <img src="sample-image.jpg" />
  </div>
</div>
<p>...</p>

<div class="is-outset is-outset_full">
  <div class="img-crop-silver">
    <div class="tag img-crop-tag">is-outset_full</div>
    <img src="sample-image.jpg" />
  </div>
</div>
<p>...</p>`,
              previewCol: 12,
              markupCol: 12,
              config: `$is-outset: 48;
$is-outset-spacing: 16 0;
$is-outset-gutter: 32;
$is-outset-bp: 1200;`,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.img-crop-tag {
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: rgba(#000, 0.4);
  color: #fff;
  z-index: 10;
}
</style>