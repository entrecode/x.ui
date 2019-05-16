<template>
  <blocks-group :groups="sectionGroups" section-title="xui-toggle"></blocks-group>
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
          id: 'xui-toggle',
          navTitle: 'xui-toggle',
          type: 'atoms',
          groupItems: [
            {
              title: 'toggle',
              preview: `<div data-grid>
<div data-col='6'>
<div class="field-group">
  <div class="xui-toggle">
  <input id="toggle-1" type="checkbox">
  <label for="toggle-1" class="xui-toggle__label">
    <div class="xui-toggle__switch"></div>
    toggle with a longer label
  </label>
</div>
</div>
</div>
<div data-col='6'>
<div class="field-group">
<div class="xui-toggle">
  <input id="toggle-2" type="checkbox" checked>
  <label for="toggle-2" class="xui-toggle__label">
    <div class="xui-toggle__switch"></div>
    toggle
  </label>
</div>
</div>
</div>
<div data-col='6'>
<div class="field-group">
<div class="xui-toggle">
  <input id="toggle-3" type="checkbox">
  <label for="toggle-3" class="xui-toggle__switch">
  </label>
</div>
</div>
</div>
<div data-col='6'>
<div class="field-group">
<div class="xui-toggle">
  <input id="toggle-4" type="checkbox" checked>
  <label for="toggle-4" class="xui-toggle__switch">
  </label>
</div>
</div>
</div>
</div>`,
              markup: `<!-- switch with a label -->
<div class="xui-toggle">
  <input id="" type="checkbox">
  <label for="" class="xui-toggle__label">
    <div class="xui-toggle__switch"></div>
    toggle with a longer label
  </label>
</div>

<!-- just the switch -->
<div class="xui-toggle">
  <input id="" type="checkbox">
  <label for="" class="xui-toggle__switch">
  </label>
</div>`,
              config: `$xui-toggle-background: $background-lighter;
$xui-toggle-hover-background: set-hover($xui-toggle-background);
$xui-toggle-active-background: $link;
$xui-toggle-height: 20;
$xui-toggle-width: $xui-toggle-height * 1.75;
$xui-toggle-radius: $xui-toggle-height / 2;
$xui-toggle-spacing: 0 8 0 0;
$xui-toggle-style: ();

$xui-toggle-pin-background: $background;
$xui-toggle-pin-height: $xui-toggle-height - 8;
$xui-toggle-pin-width: $xui-toggle-pin-height;
$xui-toggle-pin-radius: $xui-toggle-pin-height / 2;
$xui-toggle-pin-style: ();

$xui-toggle-label-font-size: $base-font-size;
$xui-toggle-label-line-height: $xui-toggle-label-font-size * $base-line-height;
$xui-toggle-labelstyle: ();`,
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
