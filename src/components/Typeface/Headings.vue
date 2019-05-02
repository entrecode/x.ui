<template>
  <blocks-group :groups="sectionGroups" section-title="headings"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'Headings',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
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
      ],
    };
  },
};
</script>
