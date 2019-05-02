<template>
  <blocks-group :groups="sectionGroups"></blocks-group>
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
      ],
    };
  },
};
</script>
