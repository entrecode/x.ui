<template>
  <group-section :groups="sectionGroups" section-title="Headings"></group-section>
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
          id: 'headings-style',
          navTitle: 'Style Config',
          groupItems: [
            {
              preview: `<h1>Headings Style<h1>`,
              config: `$headings-font: sans-serif;
$base-font-size: 16;
$headings-line-height: $base-line-height;   // 1.4
$headings-weight: $is-bold;
$headings-style: ();
$headings-inline-small-style: ();

$h1-style: ();
$h2-style: ();
$h3-style: ();
$h4-style: ();
$h5-style: ();
$h6-style: ();`,
            },
          ],
        },
        {
          title: 'headings spacing',
          id: 'headings-spacing',
          navTitle: 'Spacing Config',
          groupItems: [
            {
              summary: '<p>the default headings spacing uses a vertical rythm to calculate the vertical spacing.</p>',
              preview: `<h1>H1<h1>
<h2>H2<h2>
<h3>H3<h3>
<h4>H4<h4>
<h5>H5<h5>
<h6>H6<h6>`,
              previewStyle: 'headings-demo',
              markup: `<h1>H1<h1>
<div class="is-h1">H1<div>
<h2>H2<h2>
<div class="is-h2">H2<div>
<h3>H3<h3>
<div class="is-h3">H3<div>
<h4>H4<h4>
<div class="is-h4">H4<div>
<h5>H5<h5>
<div class="is-h5">H5<div>
<h6>H6<h6>
<div class="is-h6">H6<div>`,
              config: `$vertical-rhythm: round($base-line-height * $base-font-size); // equals 22px
$headings-spacing-unit: $base-spacing-unit; // em

$h1-spacing: 0 0 ($vertical-rhythm * 2) 0;
$h2-spacing: 0 0 $vertical-rhythm 0;
$h3-spacing: $h2-spacing;
$h4-spacing: $h3-spacing;
$h5-spacing: 0 0 ($vertical-rhythm / 2) 0;
$h6-spacing: $h5-spacing;`,
            },
          ],
        },
      ],
    };
  },
};
</script>
