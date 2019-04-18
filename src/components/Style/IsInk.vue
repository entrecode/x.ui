<template>
  <blocks-group :groups="sectionGroups" section-title="is-ink"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'IsInk',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'is-ink',
          navTitle: 'is-ink',
          groupItems: [
            {
              title: '',
              preview: `<div data-grid>
  <div data-col="6">
    <div class="is-giga has-margin-bottom-3 well align-center is-ink">
      is-ink
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-margin-bottom-3 well align-center is-ink-light">
      is-ink-light
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-margin-bottom-3 well align-center is-ink-lighter">
      is-ink-lighter
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-margin-bottom-3 well align-center is-ink-lightest">
      is-ink-lightest
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-margin-bottom-3 well align-center is-ink-link">
      is-ink-link
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-margin-bottom-3 well align-center is-ink-super">
      is-ink-super
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-margin-bottom-3 well align-center is-ink-highlight">
      is-ink-highlight
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-margin-bottom-3 well align-center is-ink-invert">
      is-ink-invert
    </div>
  </div>
</div>
`,
              markup: `<div class="is-ink"></div>
<div class="is-ink-light"></div>
<div class="is-ink-lighter"></div>
<div class="is-ink-lightest"></div>
<div class="is-ink-link"></div>
<div class="is-ink-super"></div>
<div class="is-ink-highlight"></div>
<div class="is-ink-invert"></div>`,
              config: `$is-ink: (
  '': $text,
  'light': $text-light,
  'lighter': $text-lighter,
  'lightest': $text-lightest,
  'link': $link,
  'super': $super,
  'highlight': $highlight,
  'invert': $text-invert,
);`,
            },
          ],
        },
        {
          title: '',
          id: 'hover-is-ink',
          navTitle: 'hover:is-ink',
          groupItems: [
            {
              title: '',
              preview: `<div data-grid>
  <div data-col="6">
    <div class="demo-type is-giga has-margin-bottom-3 well align-center hover:is-ink">
      hover:is-ink
    </div>
  </div>
  <div data-col="6">
    <div class="demo-type is-giga has-margin-bottom-3 well align-center hover:is-ink-light">
      hover:is-ink-light
    </div>
  </div>
  <div data-col="6">
    <div class="demo-type is-giga has-margin-bottom-3 well align-center hover:is-ink-lighter">
      hover:is-ink-lighter
    </div>
  </div>
  <div data-col="6">
    <div class="demo-type is-giga has-margin-bottom-3 well align-center hover:is-ink-lightest">
      hover:is-ink-lightest
    </div>
  </div>
  <div data-col="6">
    <div class="demo-type is-giga has-margin-bottom-3 well align-center hover:is-ink-link">
      hover:is-ink-link
    </div>
  </div>
  <div data-col="6">
    <div class="demo-type is-giga has-margin-bottom-3 well align-center hover:is-ink-super">
      hover:is-ink-super
    </div>
  </div>
  <div data-col="6">
    <div class="demo-type is-giga has-margin-bottom-3 well align-center hover:is-ink-highlight">
      hover:is-ink-highlight
    </div>
  </div>
  <div data-col="6">
    <div class="demo-type is-giga has-margin-bottom-3 well align-center hover:is-ink-invert">
      hover:is-ink-invert
    </div>
  </div>
</div>`,
              markup: `<div class="hover:is-ink"></div>
<div class="hover:is-ink-light"></div>
<div class="hover:is-ink-lighter"></div>
<div class="hover:is-ink-lightest"></div>
<div class="hover:is-ink-link"></div>
<div class="hover:is-ink-super"></div>
<div class="hover:is-ink-highlight"></div>
<div class="hover:is-ink-invert"></div>`,
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