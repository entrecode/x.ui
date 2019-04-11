<template>
  <group-section :groups="sectionGroups" section-title="Well"></group-section>
</template>

<script>
import GroupSection from './../GroupSection.vue';

export default {
  name: 'Well',
  components: {
    GroupSection,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'well',
          groupItems: [
            {
              preview: `<div class="well">
  <h2>Titel</h2>
  <p>card is a standard ui element to combine related Informations or elements</p>
</div>`,
              config: `$well-background: $background-lightest;
$well-color: inherit;
$well-radius: 4;
$well-padding: 16 24;
$well-spacing: 0 0 16 0;
$well-style: ();`,
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