<template>
  <blocks-group :groups="sectionGroups" section-title="radio"></blocks-group>
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
          id: 'radio',
          navTitle: 'radio',
          type: 'atoms',
          groupItems: [
            {
              title: 'radio',
              preview: `<div data-grid>
<div data-col='6'>
<div class="xui-radio">
  <input type="radio" id="radio-1">
  <label for="radio-1" class="xui-radio__label">radio boolean with longer label</label>
</div>
</div>
<div data-col='6'>
<div class="xui-radio">
  <input type="radio" checked id="radio-2">
  <label for="radio-2" class="xui-radio__label">radio</label>
</div>
</div>
</div>`,
              markup: `<div class="xui-radio">
  <input type="radio" id="">
  <label for="" class="xui-radio__label">radio</label>
</div>`,
              config: `$xui-radio-spacing: 0 12 0 0;
$xui-radio-height: 20;
$xui-radio-background: input-background;
$xui-radio-style: ();

$xui-radio-hover-style: ();
$xui-radio-checked-style: ();

$xui-radio-dot-size: 8;
$xui-radio-dot-color: transparent;
$xui-radio-dot-hover-color: $text-lightest;
$xui-radio-dot-checked-color: $link;`,
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
