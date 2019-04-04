<template>
  <group-section :groups="sectionGroups" section-title="Card"></group-section>
</template>

<script>
import GroupSection from './../GroupSection.vue';

export default {
  name: 'Card',
  components: {
    GroupSection,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'card',
          navTitle: 'Default Card',
          groupItems: [
            {
              title: 'Default Card',
              preview: `<div class="card">
  <h2>Titel</h2>
  <p>card is a standard ui element to combine related Informations or elements</p>
</div>`,
              markup: `<div class="card">
  ...
</div>`,
              config: `@param {px} $card-radius [4]
@param {color} $card-background [$background]
@param {color} $card-color [$text]
@param {array} $card-padding [24]
@param {array} $card-spacing [0]
@param {[1-24] | false} $card-elevated [4]
@param {array} $card-style`,
            },
          ],
        },
        {
          title: 'Additional Expamples',
          id: 'card_examples',
          navTitle: 'Additional Expamples',
          groupItems: [
            {
              title: '...',
              preview: `...`,
              markup: `...`,
              config: `...`,
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