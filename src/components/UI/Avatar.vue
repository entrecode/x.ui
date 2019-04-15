<template>
  <blocks-group :groups="sectionGroups" section-title="loader"></blocks-group>
</template>

<script>
import DocTab from './../DocTab.vue';
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'Avatar',
  components: {
    DocTab,
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'loader',
          groupItems: [
            {
              preview: `<div data-grid>
                <div data-col="4" data-flex="center center-items" class="has-padding-3">
                  <div class="avatar avatar_small">
                    <img src="avatar.png">
                  </div>
                </div>
                <div data-col="4" data-flex="center center-items" class="has-padding-3">
                  <div class="avatar">
                    <img src="avatar.png">
                  </div>
                </div>
                <div data-col="4" data-flex="center center-items" class="has-padding-3">
                  <div class="avatar avatar_big">
                    <img src="avatar.png">
                  </div>
                </div>
                <div data-col="4" data-flex="center center-items" class="has-padding-3">
                  <div class="avatar avatar_square avatar_small">
                    <img src="avatar.png">
                  </div>
                </div>
                <div data-col="4" data-flex="center center-items" class="has-padding-3">
                  <div class="avatar avatar_square">
                    <img src="avatar.png">
                  </div>
                </div>
                <div data-col="4" data-flex="center center-items" class="has-padding-3">
                  <div class="avatar avatar_square avatar_big">
                    <img src="avatar.png">
                  </div>
                </div>
              </div>`,
              markup: `<div class="avatar avatar_small">
  <img src="" />
</div>
<div class="avatar">
  <img src="" />
</div>
<div class="avatar avatar_big">
  <img src="" />
</div>
<div class="avatar avatar_square avatar_small">
  <img src="" />
</div>
<div class="avatar avatar_square">
  <img src="" />
</div>
<div class="avatar avatar_square avatar_big">
  <img src="" />
</div>`,
              config: `$avatar-size: 40;
$avatar-small-size: 24;
$avatar-big-size: 64;
$avatar-border: 0;
$avatar-background: $background-lightest;
$avatar-square-radius: 4;
$avatar-style: ();`,
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