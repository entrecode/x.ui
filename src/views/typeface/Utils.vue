
<template>
  <blocks-group :groups="sectionGroups" section-title="modifier"></blocks-group>
</template>

<script>
import BlocksGroup from '@/components/BlocksGroup.vue';

export default {
  name: 'TypoModifier',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          id: 'align',
          type: 'modifier',
          navTitle: 'align',
          groupItems: [
            {
              title: 'align',
              preview: `<div data-grid>
  <div data-col="4">
    <p class="align-left">Move the needle synergy indicators collaborative consumption problem-solvers black lives matter co-create. Rubric scalable commitment, shine our work shared unit of analysis.</p>
  </div>
  <div data-col="4">
    <p class="align-center">Move the needle synergy indicators collaborative consumption problem-solvers black lives matter co-create. Rubric scalable commitment, shine our work shared unit of analysis.</p>
  </div>
  <div data-col="4">
    <p class="align-right">Move the needle synergy indicators collaborative consumption problem-solvers black lives matter co-create. Rubric scalable commitment, shine our work shared unit of analysis.</p>
  </div>
</div>`,
              markup: `<p class="align-left">...</p>
<p class="align-center"></p>
<p class="align-right"></p>`,
              previewCol: 12,
              markupCol: 12,
            },
          ],
        },
        {
          id: 'font-weight',
          type: 'modifier',
          navTitle: 'font-weight',
          groupItems: [
            {
              title: 'font-weight',
              preview: `<div data-grid>
  <div data-col="3" class="align-center">
    <h5 class="is-light select-all">is-light</h5>
  </div>
  <div data-col="3" class="align-center">
    <strong class="is-normal select-all">is-normal</strong>
  </div>
  <div data-col="3" class="align-center">
    <div class="is-medium select-all">is-medium</div>
  </div>
  <div data-col="3" class="align-center">
    <div class="is-bold select-all">is-bold</div>
  </div>
</div>`,
              markup: `<h5 class="is-light">is-light</h5>
<strong class="is-normal">is-normal</strong>
<div class="is-medium">is-medium</div>
<div class="is-bold">is-bold</div>`,
              previewCol: 12,
              markupCol: 12,
              previewStyle: 'well',
              config: `$is-light: lighter;
$is-normal: normal;
$is-medium: bold;
$is-bold: bolder;`,
            },
          ],
        },
        {
          id: 'font-family',
          type: 'modifier',
          navTitle: 'font-family',
          groupItems: [
            {
              title: 'font-family',
              preview: `<div data-grid>
  <div data-col="4" class="align-center">
    <div class="is-body-font select-all">is-body-font</div>
  </div>
  <div data-col="4" class="align-center">
    <div class="is-headings-font select-all">is-headings-font</div>
  </div>
  <div data-col="4" class="align-center">
    <div class="is-monospace-font select-all">is-monospace-font</div>
  </div>
</div>`,
              markup: `<div class="is-body-font">...</div>
<div class="is-headings-font">...</div>
<div class="is-monospace-font">...</div>`,
              previewCol: 12,
              markupCol: 12,
              previewStyle: 'well',
              config: `$body-font-family: sans-serif;
$headings-font-family: sans-serif;
$monospace-font: monospace;`,
            },
          ],
        },
        {
          id: 'text-transform',
          type: 'modifier',
          navTitle: 'text-transform',
          groupItems: [
            {
              title: 'text-transform',
              preview: `<div data-grid="center">
  <div data-col="4" class="align-center">
    <div class="is-giga is-lowercase">is-lowercase</div>
  </div>
  <div data-col="4" class="align-center">
    <div class="is-giga is-uppercase">is-uppercase</div>
  </div>
</div>`,
              markup: `<div class="is-lowercase">...</div>
<h2 class="is-uppercase">...</h2>`,
              previewCol: 12,
              markupCol: 12,
              previewStyle: 'well',
            },
          ],
        },
        {
          id: 'word-wrap',
          type: 'modifier',
          navTitle: 'word-wrap',
          groupItems: [
            {
              title: 'word-wrap',
              preview: `<div class="well is-clipped"><p class="is-nowrap">Social entrepreneur blended value catalyze, synergy contextualize living a fully ethical life state of play natural resources best practices.</p></div>
<div class="well"><p class="is-hyphen">Social entrepreneur blended value catalyze, synergy contextualize living a fully ethical life state of play natural resources best practices.</p></div>
<div class="well"><p class="is-hyphen-block">Social entrepreneur blended value catalyze, synergy contextualize living a fully ethical life state of play natural resources best practices.</p></div>
<div class="well"><p class="is-ellipsis">Social entrepreneur blended value catalyze, synergy contextualize living a fully ethical life state of play natural resources best practices.</p></div>`,
              markup: `<div class="is-clipped">...</div>
<h2 class="is-hyphen">...</h2>
<p class="is-hyphen-block">...</p>
<div class="is-ellipsis">...</div>`,
              previewCol: 6,
              markupCol: 6,
            },
          ],
        },
      ],
    };
  },
};
</script>

/* 
sectionGroups: [
        {
          config: `
// link styles
$link-color: $link;
$link-decoration: none;
$link-weight: $is-normal; // normal
$link-style: ();

$link-hover-color: set-hover($link-hover);
$link-hover-decoration: $link-decoration;
$link-hover-style: ();

// for <small> elements
$inline-small-style: ();

// <mark> style
$mark-color: $highlight-contrast;
$mark-background: $highlight;
$mark-style: ();`,
        },
      ], */