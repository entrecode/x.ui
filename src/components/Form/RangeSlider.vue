<template>
  <blocks-group :groups="sectionGroups" section-title="range-slider"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';
import RequiresList from '@/components/RequiresList.vue';

export default {
  components: {
    BlocksGroup,
    RequiresList,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          id: 'range-slider',
          type: 'atoms',
          navTitle: 'range-slider',
          groupItems: [
            {
              title: 'range-slider',
              preview: `<input type="range" class="range-slider">`,
              config: `

$range-slider-thumb-color: $link;
$range-slider-thumb-size: 16;
$range-slider-thumb-radius: 8;
$range-slider-thumb-style: ();
$range-slider-thumb-hover-style: ();`,
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
