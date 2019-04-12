<template>
  <blocks-group :groups="sectionGroups" section-title="Typo"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'Typo',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          id: 'typo-sizes',
          navTitle: 'sizes',
          groupItems: [
            {
              preview: `<h1>Overcome injustice justice,</h1>
<p class="is-lead">her body her rights gender rights silo correlation vibrant. Empower communities engaging, low-hanging fruit, catalyze citizen-centered disrupt.</p>
<h2>Social intrapreneurship</h2>
<p><strong>Social intrapreneurship</strong> collective impact; greenwashing benefit corporation innovation white paper, innovate, blended.</p>`,
              previewStyle: 'typo-demo',
              config: `// modular scale for typeface see on http://www.modularscale.com/?1&em&1.25
$type-scale: (
  h1: 3.052,      // 48.832
  h2: 2.441,      // 39.056
  h3: 1.953,      // 31.248
  h4: 1.563,      // 25.008
  h5: 1.25,       // 20
  h6: 1,          // 16
  is-giga: 2,     // 32
  is-mega: 1.5,   // 24
  is-kilo: 1,     // 16
  is-lead: 1.25,  // 20
  p: 1,           // 16
);
  
$type-scale-unit: $base-scale-unit; // em

// for scaling down typo on mobile 
$type-scale-bp: (
  xs: 0.875,
  md: 1,
)`,
            },
          ],
        },
        {
          id: 'headings',
          navTitle: 'headings',
          groupItems: [
            {
              preview: `<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
<h4>H4</h4>
<h5>H5</h5>
<h6>H6</h6>`,
              markup: `<h1>H1</h1>
<div class="is-h1">H1</div>
<h2>H2</h2>
<div class="is-h2">H2</div>
<h3>H3</h3>
<div class="is-h3">H3</div>
<h4>H4</h4>
<div class="is-h4">H4</div>
<h5>H5</h5>
<div class="is-h5">H5</div>
<h6>H6</h6>
<div class="is-h6">H6</div>`,
              previewStyle: 'typo-demo',
              config: `// styles for headings
$headings-font-family: sans-serif;
$base-font-size: 16;
$headings-line-height: $base-line-height;   // 1.4
$headings-weight: $is-bold; // bolder
$headings-style: ();

// for inline <small> elements 
$headings-inline-small-style: ();

$h1-style: ();
$h2-style: ();
$h3-style: ();
$h4-style: ();
$h5-style: ();
$h6-style: ();

// spacing of headings
$_headings-vertical-rhythm: round($headings-line-height * $base-font-size); // equals 22px
$headings-spacing-unit: $base-spacing-unit; // xrem

$h1-spacing: 0 0 ($_headings-vertical-rhythm * 2) 0;
$h2-spacing: 0 0 $_headings-vertical-rhythm 0;
$h3-spacing: $h2-spacing;
$h4-spacing: $h3-spacing;
$h5-spacing: 0 0 ($_headings-vertical-rhythm / 2) 0;
$h6-spacing: $h5-spacing;`,
            },
          ],
        },
        {
          id: 'simple-headings',
          navTitle: 'simple headings',
          groupItems: [
            {
              title: 'Simple Headings',
              summary: 'for data interfaces xui provides three heading styles, to simplify the styling',
              preview: `<h2 class="is-giga">is-giga</h2>
<h2 class="is-mega">is-mega</h2>
<h2 class="is-kilo">is-kilo</h2>`,
              previewStyle: 'typo-demo',
              config: `// styles for headings
$giga-style: ();
$mega-style: ();
$kilo-style: ();

// spacing
$giga-spacing: ($_headings-vertical-rhythm / 2) 0;
$mega-spacing: $giga-spacing;
$kilo-spacing: $mega-spacing;`,
            },
          ],
        },
        {
          id: 'paragraph',
          navTitle: 'paragraph',
          groupItems: [
            {
              title: 'standard paragraph',
              preview: `<p>paragraph style: <a>Overcome injustice</a> justice, her body her rights gender
rights silo correlation vibrant. Empower <mark>communities engaging</mark>,
low-hanging fruit, catalyze citizen-centered disrupt. Social intrapreneurship
collective impact; greenwashing benefit corporation innovation white paper,
innovate, blended.</p>`,
              previewStyle: 'typo-demo',
              config: `// basic typo styles
$body-color: $text;
$body-font-family: sans-serif;

// styles for paragraphs
$paragraph-weight: $is-normal;  // normal
$paragraph-line-height: $base-line-height; // 1.4
$paragraph-style: ();

$_base-vertical-rhythm: round($base-line-height * $base-font-size); // 22
$paragraph-spacing: 0 0 $_base-vertical-rhythm 0;
$paragraph-spacing-unit: $base-spacing-unit; // xrem

// link styles
$link-color: $link;
$link-decoration: none;
$link-weight: $is-normal; // normal
$link-style: ();

$link-hover-color: setHover($link-hover);
$link-hover-decoration: $link-decoration;
$link-hover-style: ();

// for <small> elements
$inline-small-style: ();

// <mark> style
$mark-color: $highlight-contrast;
$mark-background: $highlight;
$mark-style: ();`,
            },
          ],
        },
        {
          id: 'lead-paragraph',
          navTitle: 'lead paragraph',
          groupItems: [
            {
              title: 'lead paragraph',
              preview: `<p class="is-lead">lead paragraph style: Overcome injustice justice, her body her rights gender
rights silo correlation vibrant. Empower communities engaging, low-hanging
fruit, catalyze citizen-centered disrupt. Social intrapreneurship collective
impact; greenwashing benefit corporation innovation white paper, innovate,
blended.</p>`,
              previewStyle: 'typo-demo',
              config: `// styles for lead paragraphs
$is-lead-weight: $is-light; // lighter
$is-lead-line-height: $paragraph-line-height; // 1.4
$is-lead-style: ();

// spacing
$is-lead-spacing: $paragraph-spacing; // 0 0 22 0
$is-lead-spacing-unit: $base-spacing-unit; // xrem`,
            },
          ],
        },
        {
          id: 'list',
          navTitle: 'list',
          groupItems: [
            {
              title: '<ul><ol>',
              preview: `<ul class="is-unstyled">
  <li>List</li>
  <li>List</li>
  <li>List</li>
</ul>
<div class="y-space-3"></div>
<ul class="is-inline">
  <li>List</li>
  <li>List</li>
  <li>List</li>
</ul>`,
              markup: `<ul class="is-unstyled">...</ul>
<ul class="is-inline">...</ul>`,
              previewStyle: 'well',
            },
          ],
        },
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
              preview: `<div data-grid="is-center">
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
