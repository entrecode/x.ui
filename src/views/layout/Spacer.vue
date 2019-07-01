<template>
  <div class="is-padding-8">
    <layout-bumper />
    <layout-divider />
    <layout-spacer />
    <layout-flex-space />
  </div>
</template>

<script>
import LayoutBumper from '@/components/Layout/Bumper.vue';
import LayoutDivider from '@/components/Layout/Divider.vue';
import LayoutSpacer from '@/components/Layout/Spacer.vue';
import LayoutFlexSpace from '@/components/Layout/FlexSpace.vue';

export default {
  components: {
    LayoutBumper,
    LayoutDivider,
    LayoutSpacer,
    LayoutFlexSpace,
  },
};
</script>
