<template>
  <blocks-group :groups="sectionGroups" section-title="paragraphs"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
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
      ],
    };
  },
};
</script>
