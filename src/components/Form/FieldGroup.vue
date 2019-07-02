<template>
  <blocks-group :groups="sectionGroups" section-title="field-group"></blocks-group>
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
          id: 'field-group',
          type: 'molecules',
          navTitle: 'field-group',
          groupItems: [
            {
              title: 'with fieldset',
              preview: ``,
              markup: ``,
              
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
