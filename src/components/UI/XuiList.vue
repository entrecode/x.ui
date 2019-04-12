<template>
  <blocks-group :groups="sectionGroups" section-title="xui-list"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'XuiList',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'xui-list',
          navTitle: 'xui-list',
          groupItems: [
            {
              preview: `<div class="xui-list">
  <div class="xui-list-item">
    <div class="xui-list-item__start">
      <div class="avatar avatar_square avatar_big">
        <img src="avatar.png">
      </div>
    </div>
    <div class="xui-list-item__label">
      <h2>Itemtitle</h2>
    </div>
    <div class="xui-list-item__end">
      <a class="btn">
        <svg class="ixo"><use xlink:href="#fire"></use></svg>
      </a>
    </div>
  </div>
  <div class="xui-list-item">
    <div class="xui-list-item__start" data-col="3">
      <div class="tag">tag</div>
    </div>
    <div class="xui-list-item__label">
      <h2>Itemtitle</h2>
    </div>
  </div>
</div>`,
              markup: `<div class="xui-list">
  <div class="xui-list-item">
    <div class="xui-list-item__start">...</div>
    <div class="xui-list-item__label">...</div>
    <div class="xui-list-item__end">...</div>
  </div>
</div>`,
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