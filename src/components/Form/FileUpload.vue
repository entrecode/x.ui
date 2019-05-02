<template>
  <blocks-group :groups="sectionGroups" section-title="file-upload"></blocks-group>
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
          id: 'file-upload',
          type: 'atoms',
          navTitle: 'file-upload',
          groupItems: [
            {
              title: 'file-upload',
              preview: `<form class="file-upload">
  <input type="file" multiple="multiple">
  drop files here or <a>upload</a>
</form>`,
              config: `$file-upload-spacing: 0 0 16;
$file-upload-padding: 16;
$file-upload-background: none;
$file-upload-border-radius: 4;
$file-upload-border: 2px dashed $minor;
$file-upload-style: ();
$file-upload-hover-style: ();`,
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
