<template>
  <blocks-group :groups="sectionGroups" section-title="xui-accordion"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'XuiAccordion',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'xui-accordion',
          navTitle: 'xui-accordion',
          groupItems: [
            {
              preview: `<div class="xui-accordion">
  <input
    type="radio"
    name="xuiToggleGroup"
    id="toggleList1"
    checked="checked"
  />
  <label for="toggleList1">
    Entry 1
    <svg class="ixo xui-accordion__visible"><use xlink:href="#expand-horizontal"></use></svg>
    <svg class="ixo xui-accordion__hidden"><use xlink:href="#shrink-horizontal"></use></svg>
  </label>
  <div class="xui-accordion__target">
    Content 1
  </div>
</div>
<div class="xui-accordion">
  <input type="radio" name="xuiToggleGroup" id="toggleList2" />
  <label for="toggleList2">
    Entry 2
  </label>
  <div class="xui-accordion__target">
    Content 2
  </div>
</div>
<div class="xui-accordion">
  <input type="radio" name="xuiToggleGroup" id="toggleList3" />
  <label for="toggleList3">
    Entry 3
  </label>
  <div class="xui-accordion__target">
    Content 3
  </div>
</div>`,
              markup: `<div class="xui-accordion">
  <input type="radio" name="" id="" checked="checked" />
  <label for="">
    ..
    <span class="xui-accordion__visible">...</span>
    <span class="xui-accordion__hidden">...</span>
  </label>
  <div class="xui-accordion__target">
    ...
  </div>
</div>
`,
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