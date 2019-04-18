<template>
  <blocks-group :groups="sectionGroups" section-title="is-theme"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'IsTheme',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'is-theme',
          navTitle: 'is-theme',
          groupItems: [
            {
              title: '',
              preview: `<div data-grid>
  <div data-col="12">
    <div class="is-giga has-margin-bottom-2 has-padding-2 align-center is-theme">
      is-theme
      <a>link</a>
    </div>
  </div>
  <div data-col="12">
    <div class="is-giga has-margin-bottom-2 has-padding-2 align-center is-theme-lightest">
      is-theme-lightest
      <a>link</a>
    </div>
  </div>
  <div data-col="12">
    <div class="is-giga has-margin-bottom-2 has-padding-2 align-center is-theme-invert">
      is-theme-invert
      <a>link</a>
    </div>
  </div>
</div>`,
              markup: `<div class="is-theme"></div>
<div class="is-theme-lightest"></div>
<div class="is-theme-invert"></div>`,
              config: `$is-theme: (
  '': (
    $background,
    $text,
    $link,
  ),
  'lightest': (
    $background-lightest,
    $text,
    $link,
  ),
  'invert': (
    $background-invert,
    $text-invert,
    $link,
  ),
);`,
            },
          ],
        },
        {
          title: '',
          id: 'hover-is-theme',
          navTitle: 'hover:is-theme',
          groupItems: [
            {
              title: '',
              preview: `<div data-grid>
  <div data-col="12">
    <div class="demo-wrapper is-giga has-margin-bottom-2 has-padding-2 align-center hover:is-theme">
      hover:is-theme
      <a>link</a>
    </div>
  </div>
  <div data-col="12">
    <div class="demo-wrapper is-giga has-margin-bottom-2 has-padding-2 align-center hover:is-theme-lightest">
      hover:is-theme-lightest
      <a>link</a>
    </div>
  </div>
  <div data-col="12">
    <div class="demo-wrapper is-giga has-margin-bottom-2 has-padding-2 align-center hover:is-theme-invert">
      hover:is-theme-invert
      <a>link</a>
    </div>
  </div>
</div>`,
              markup: `<div class="hover:is-theme"></div>
<div class="hover:is-theme-lightest"></div>
<div class="hover:is-theme-invert"></div>`,
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