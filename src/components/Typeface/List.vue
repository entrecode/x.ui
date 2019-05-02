<template>
  <blocks-group :groups="sectionGroups" section-title="list"></blocks-group>
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
          id: 'list',
          groupItems: [
            {
              title: '<ul><ol>',
              preview: `<ul class="is-unstyled">
  <li>List</li>
  <li>List</li>
  <li>List</li>
</ul>
<div class="y-space-3"></div>
<ul class="is-inline">
  <li>List</li>
  <li>List</li>
  <li>List</li>
</ul>`,
              markup: `<ul class="is-unstyled">...</ul>
<ul class="is-inline">...</ul>`,
              previewStyle: 'well',
            },
          ],
        },
      ],
    };
  },
};
</script>
