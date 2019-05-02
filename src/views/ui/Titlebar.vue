<template>
  <blocks-group :groups="sectionGroups" section-title="titlebar"></blocks-group>
</template>

<script>
import BlocksGroup from '@/components/BlocksGroup.vue';

export default {
  name: 'Titlebar',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'titlebar',
          navTitle: 'titlebar',
          groupItems: [
            {
              previewCol: 12,
              markupCol: 12,
              preview: `<div class="titlebar">
  <h2 class="is-giga">Titel</h2>
  <ul class="nav">
    <li class="nav__item">
      <a class="btn">open</a>
    </li>
  </ul>
</div>`,
              config: `$titlebar-spacing: 0;
$titlebar-padding: 0;
$titlebar-style: ();
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