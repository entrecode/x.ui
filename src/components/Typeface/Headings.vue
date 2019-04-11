<template>
  <group-section :groups="sectionGroups" section-title="Typo"></group-section>
</template>

<script>
import GroupSection from './../GroupSection.vue';

export default {
  name: 'Headings',
  components: {
    GroupSection,
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
<h2>filltext by <a href="http://socialgoodipsum.com" target="_blank">socialgoodipsum.com</a></h2>
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
              preview: `<p>paragraph style: <a>Overcome injustice</a> justice, her body her rights gender rights silo correlation vibrant. Empower communities engaging, low-hanging fruit, catalyze citizen-centered disrupt. Social intrapreneurship collective impact; greenwashing benefit corporation innovation white paper, innovate, blended.</p>`,
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
$inline-small-style: ();`,
            },
          ],
        },
        {
          id: 'lead-paragraph',
          navTitle: 'lead paragraph',
          groupItems: [
            {
              title: 'lead paragraph',
              preview: `<p class="is-lead">lead paragraph style: Overcome injustice justice, her body her rights gender rights silo correlation vibrant. Empower communities engaging, low-hanging fruit, catalyze citizen-centered disrupt. Social intrapreneurship collective impact; greenwashing benefit corporation innovation white paper, innovate, blended.</p>`,
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
      ],
    };
  },
};
</script>
