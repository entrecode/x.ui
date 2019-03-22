<template>
  <group-section :groups="sectionGroups" section-title="Buttongroup"></group-section>
</template>

<script>
import GroupSection from './../GroupSection.vue';

export default {
  name: 'ButtonGroup',
  components: {
    GroupSection,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'btn-group',
          navTitle: 'Button-Group',
          summary: '',
          groupItems: [
            {
              name: 'btn-group',
              preview: `<div class="btn-group">
  <a class="btn">button</a>
  <div class="btn-group__divider"></div>
  <a class="btn btn_super">button</a>
</div>`,
              markup: `<div class="btn-group">
  <a class="btn">button</a>
  <div class="btn-group__divider"></div>
  <a class="btn btn_super">button</a>
</div>`,
              config: `$btn-group-style: ();
$btn-group-divider-size: 1;
$btn-group-divider-color: $divider-color`,
            },
            {
              name: 'btn-group with a dropdown',
              preview: `<div class="btn-group">
  <a class="btn">button</a>
  <div class="btn-group__divider"></div>
  <div class="dropdown" tabindex="0">
    <div class="btn"><svg class="ixo"><use xlink:href="#more-vertical"></use></svg></div>
    <div class="dropdown-options">
      ...
    </div>
  </div>
</div>`,
              markup: `<div class="btn-group">
  <a class="btn">button</a>
  <div class="btn-group__divider"></div>
  <div class="dropdown" tabindex="0">
    <div class="btn"><svg class="ixo"><use xlink:href="#more-vertical"></use></svg></div>
    <div class="dropdown-options">
      ...
    </div>
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
