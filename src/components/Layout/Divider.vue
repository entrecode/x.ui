<template>
  <group-section :groups="sectionGroups" section-title="Divider"></group-section>
</template>

<script>
import GroupSection from './../GroupSection.vue';

export default {
  name: 'Divider',
  components: {
    GroupSection,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'divider',
          groupItems: [
            {
              preview: `<div class="typo-demo has-margin-bottom-5"><div class="divider"></div></div>
              <div class="typo-demo has-margin-bottom-5"><div class="divider divider_big"></div></div>
              <div class="typo-demo has-margin-bottom-5"><div class="divider divider_small"></div></div>
              <div class="is-theme-invert"><div class="typo-demo has-margin-bottom-5"><div class="divider divider_invert"></div></div></div>`,
              markup: `<div class="divider"></div>
<div class="divider divider_big"></div>
<div class="divider divider_small"></div>

// inverted divider
<div class="divider divider_invert"></div>`,
              config: `$divider-height: 1;
$divider-background: $divider-color;
$divider-invert-background: rgba($background, 0.2);
$divider-spacing: getSpace(3) 0; // 16 0
$divider-small-spacing: getSpace(1) 0; // 4 0
$divider-big-spacing: getSpace(5) 0; // 32 0`, 
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
</style>