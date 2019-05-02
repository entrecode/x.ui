<template>
  <div class="about">

    <grid/>


    <h2 class="is-h1 align-center is-uppercase">media</h2>
    <media/>

    


    <h2 class="is-h1 align-center is-uppercase">UI</h2>
    <ui-hamburger-btn/>
    <ui-tag/>
    <ui-nav/>
    <ui-titlebar/>
    <ui-modal/>
    <ui-well/>
    <ui-card/>
    <ui-table/>
    <ui-avatar/>
    <ui-xui-list/>
    <ui-xui-accordion/>
    <ui-loader/>

    <h2 class="is-h1 align-center is-uppercase">style</h2>
    <style-is-ink/>
    <style-is-theme/>
    <style-is-elevated/>
    <style-has-radius/>
    <style-has-border/>
    <style-has-padding/>
    <style-has-margin/>

    <h2 class="is-h1 align-center is-uppercase">layout</h2>
    <layout-bumper/>
    <layout-divider/>
    <layout-spacer/>
    <layout-flex-space/>

    <h2 class="is-h1 align-center is-uppercase">mixins</h2>
    <mixins/>

    <h2 class="is-h1 align-center is-uppercase">functions</h2>
    <function/>

    <h2 class="is-h1 align-center is-uppercase">variables</h2>
    <variables/>

    <footer class="has-padding-8 is-ink-light align-center">
      placeholder images
      <a
        href="https://unsplash.com/collections/4386752/women-are-amazing"
        target="_blank"
        rel="nofollow"
      >https://unsplash.com/collections/4386752/women-are-amazing</a> &bull; filltext:
      <a
        href="http://socialgoodipsum.com/#/"
        target="_blank"
        rel="nofollow"
      >http://socialgoodipsum.com/#/</a>
    </footer>
  </div>
  </div>
</template>

<script>
import Media from '@/components/Media/Media.vue';
import Grid from '@/components/Grid/Grid.vue';
import StyleIsInk from '@/components/Style/IsInk.vue';
import StyleIsTheme from '@/components/Style/IsTheme.vue';
import StyleIsElevated from '@/components/Style/IsElevated.vue';
import StyleHasRadius from '@/components/Style/HasRadius.vue';
import StyleHasBorder from '@/components/Style/HasBorder.vue';
import StyleHasPadding from '@/components/Style/HasPadding.vue';
import StyleHasMargin from '@/components/Style/HasMargin.vue';

import LayoutBumper from '@/components/Layout/Bumper.vue';
import LayoutDivider from '@/components/Layout/Divider.vue';
import LayoutSpacer from '@/components/Layout/Spacer.vue';
import LayoutFlexSpace from '@/components/Layout/FlexSpace.vue';

import UiNav from '@/components/UI/Nav.vue';
import UiTag from '@/components/UI/Tag.vue';
import UiModal from '@/components/UI/Modal.vue';
import UiWell from '@/components/UI/Well.vue';
import UiTitlebar from '@/components/UI/Titlebar.vue';
import UiCard from '@/components/UI/Card.vue';
import UiTable from '@/components/UI/Table.vue';
import UiAvatar from '@/components/UI/Avatar.vue';
import UiXuiList from '@/components/UI/XuiList.vue';
import UiXuiAccordion from '@/components/UI/XuiAccordion.vue';
import UiLoader from '@/components/UI/Loader.vue';
import UiHamburgerBtn from '@/components/UI/HamburgerBtn.vue';

export default {
  components: {
    Typo,
    Media,
    Alert,

    UiNav,
    UiTag,
    UiModal,
    UiWell,
    UiTitlebar,
    UiCard,
    UiTable,
    UiAvatar,
    UiXuiList,
    UiXuiAccordion,
    UiLoader,
    UiHamburgerBtn,

    LayoutBumper,
    LayoutDivider,
    LayoutSpacer,
    LayoutFlexSpace,

    StyleIsInk,
    StyleIsTheme,
    StyleIsElevated,
    StyleHasRadius,
    StyleHasBorder,
    StyleHasPadding,
    StyleHasMargin,

    Grid,
  },
}
</script>
