<template>
  <section>
    <div data-col="10 8@xl">
      <layout-bumper />
      <layout-divider />
      <layout-spacer />
      <layout-flex-space />
    </div>
    <div data-col="4">
      <ul class="nav nav_stacked is-sticky" style="top: 120px;">
        <li class="nav__item">
          <a href="#scroll-to-bumper" class="is-kilo is-ink hover:is-ink-link">bumper</a>
        </li>
      </ul>
    </div>
  </section>
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
