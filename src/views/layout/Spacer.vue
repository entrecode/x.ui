<template>
  <section>
    <div data-grid>
      <div data-col="8 6@xl">
        <layout-bumper />
        <div class="spacer"></div>
        <layout-divider />
        <div class="spacer"></div>
        <layout-spacer />
        <div class="spacer"></div>
        <layout-flex-space />
      </div>
      <div data-col="4">
        <ul class="nav nav_stacked is-sticky" style="top: 120px;">
          <li class="nav__item">
            <a href="#scroll-to-bumper" class="is-kilo is-ink hover:is-ink-link">bumper</a>
          </li>
          <li class="nav__item">
            <a href="#scroll-to-divider" class="is-kilo is-ink hover:is-ink-link">divider</a>
          </li>
          <li class="nav__item">
            <a href="#scroll-to-spacer" class="is-kilo is-ink hover:is-ink-link">spacer</a>
          </li>
          <li class="nav__item">
            <a href="#scroll-to-space" class="is-kilo is-ink hover:is-ink-link">space</a>
          </li>
        </ul>
      </div>
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
