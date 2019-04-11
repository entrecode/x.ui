<template>
  <group-section :groups="sectionGroups" section-title="Spacer"></group-section>
</template>

<script>
import GroupSection from './../GroupSection.vue';

export default {
  name: 'Spacer',
  components: {
    GroupSection,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'spacer',
          groupItems: [
            {
              preview: `<div class="typo-demo has-margin-bottom-5"><div class="spacer"></div></div>
              <div class="typo-demo has-margin-bottom-5"><div class="spacer spacer_big"></div></div>
              <div class="typo-demo has-margin-bottom-5"><div class="spacer spacer_small"></div></div>`,
              markup: `<div class="spacer"></div>
<div class="spacer spacer_big"></div>
<div class="spacer spacer_small"></div>`,
              config: `$spacer-size: getSpace(5); // 32
$spacer-small-size: getSpace(3); // 16
$spacer-big-size: getSpace(6); // 48`,
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