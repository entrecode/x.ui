<template>
  <blocks-group :groups="sectionGroups" section-title="Bumper"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'Bumper',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'bumper',
          groupItems: [
            {
              preview: `<div class="spacing-demo has-margin-bottom-5"><div class="bumper"></div></div>
              <div class="spacing-demo has-margin-bottom-5"><div class="bumper bumper_big"></div></div>
              <div class="spacing-demo has-margin-bottom-5"><div class="bumper bumper_small"></div></div>
              <div class="is-theme-invert"><div class="spacing-demo"><div class="bumper bumper_invert"></div></div></div>`,
              markup: `<div class="bumper"></div>
<div class="bumper bumper_big"></div>
<div class="bumper bumper_small"></div>

// inverted bumper
<div class="bumper bumper_invert"></div>`,
              config: `$bumper-size: 4;
$bumper-color: $divider-color;
$bumper-invert-color: rgba($background, 0.2);
$bumper-spacing: getSpace(5) 0;
$bumper-small-spacing: getSpace(3) 0;
$bumper-big-spacing: getSpace(6) 0;`,
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