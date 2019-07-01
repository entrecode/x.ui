<template>
  <blocks-group :groups="sectionGroups" section-title="divider"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'Divider',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'divider',
          groupItems: [
            {
              preview: `<div class="typo-demo is-margin-bottom-5"><div class="divider"></div></div>
              <div class="typo-demo is-margin-bottom-5"><div class="divider divider_big"></div></div>
              <div class="typo-demo is-margin-bottom-5"><div class="divider divider_small"></div></div>
              <div class="is-theme-invert"><div class="typo-demo is-margin-bottom-5"><div class="divider divider_invert"></div></div></div>`,
              markup: `<div class="divider"></div>
<div class="divider divider_big"></div>
<div class="divider divider_small"></div>

// inverted divider
<div class="divider divider_invert"></div>`,
              config: `$divider-height: 1;
$divider-color: $base-divider-color;
$divider-invert-color: rgba($background, 0.2);
$divider-spacing: get-space(3) 0; // 16 0
$divider-small-spacing: get-space(1) 0; // 4 0
$divider-big-spacing: get-space(5) 0; // 32 0`,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
