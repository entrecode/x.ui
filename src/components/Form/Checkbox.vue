<template>
  <blocks-group :groups="sectionGroups" section-title="checkbox"></blocks-group>
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
          id: 'checkbox',
          navTitle: 'checkbox',
          type: 'atoms',
          groupItems: [
            {
              title: 'checkbox',
              preview: `<div data-grid>
<div data-col='6'>
<div class="xui-checkbox">
  <input type="checkbox" id="boollean-1">
  <label for="boollean-1" class="xui-checkbox__label">checkbox</label>
</div>
</div>
<div data-col='6'>
<div class="xui-checkbox">
  <input type="checkbox" checked id="boollean-2">
  <label for="boollean-2" class="xui-checkbox__label">checkbox</label>
</div>
</div>
</div>`,
              markup: `<div class="xui-checkbox">
  <input type="checkbox" id="">
  <label for="" class="xui-checkbox__label">checkbox</label>
</div>`,
              config: `$xui-checkbox-spacing: 4 12 4 4;
$xui-checkbox-height: 20;
$xui-checkbox-radius: 6;
$xui-checkbox-background: $background-lighter;
$xui-checkbox-style: ();

$xui-checkbox-hover-style: ();
$xui-checkbox-checked-style: ();

$xui-checkbox-check-size: 14;
$xui-checkbox-check-color: transparent;
$xui-checkbox-check-hover-color: $text-lightest;
$xui-checkbox-check-checked-color: $link;`,
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
