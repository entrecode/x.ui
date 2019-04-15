<template>
  <blocks-group :groups="sectionGroups" section-title="loader"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'Loader',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'loader',
          groupItems: [
            {
              preview: `<div class="well">
  <div class="loader"></div>
</div>`,
              config: `$loader-size: 24;
$loader-style: ();
$loader-track-width: 4;
$loader-track-color: rgba($text, 0.1);
$loader-racer-color: $link;
$loader-racer-animation: loaderDefault;
$loader-racer-animation-speed: 1s;
$loader-racer-animation-behavior: infinite linear;

$loader-is-local-style: ();
$loader-is-global-style: ();
$loader-is-global-background: $backdrop;`,
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