<template>
  <blocks-group :groups="sectionGroups" section-title="xui-select"></blocks-group>
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
          title: 'xui-select',
          id: 'xui-select',
          type: 'atoms',
          navTitle: 'xui-select',
          groupItems: [
            {
              title: '',
              preview: `<div tabindex="0" class="xui-select">
  <span class="xui-select__placeholder">select</span>
  <ul class="xui-select-options">
    <li tabindex="0" class="xui-select-option">
      <a href="">option 1</a>
    </li>
    <li tabindex="0" class="xui-select-option">
      <a href="">option 2</a>
    </li>
    <li tabindex="0" class="xui-select-option">
      <a href="">option 3</a>
    </li>
  </ul>
</div>
<div class="y-space-3"></div>
<div tabindex="0" class="xui-select">
  <span class="xui-select__selected">selected option</span>
  <ul class="xui-select-options">
    <li tabindex="0" class="xui-select-option is-selected">
      <a href="">selected option</a>
    </li>
    <li tabindex="0" class="xui-select-option">
      <a href="">option 2</a>
    </li>
    <li tabindex="0" class="xui-select-option">
      <a href="">option 3</a>
    </li>
  </ul>
</div>
`,
              config: ``,
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
