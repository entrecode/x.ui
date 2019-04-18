<template>
  <div id="app">
    <Navbar/>
    <div class="y-space-8"></div>
    <div data-container style="max-width:800px;">
      <h1 class="align-center" id="scroll-to-intro">welcome to the atomsphere.</h1>
      <p class="is-lead is-hyphen-block">
        <strong>x.ui</strong> is a framework based on the atomic
        design methodology. this workflow is inspired by nature and physics and has a pretty
        serious focus on modularity and structure. it structure begins with the smallest part
        and
        builds up to complex structure. as a result, there is very little redundancy with a
        remarkable flexibility.
      </p>
      <p class="is-hyphen-block">
        the goal of
        <strong>x.ui</strong> is to translate the atomic
        philosophy into a new kind of framework, unattached to design-trends and 100% focused on
        user-driven ux-design and combine it a with a strict set of rules regarding naming
        conventions and front-end development.
      </p>
      <div class="spacer"></div>
      <h2 class="align-center">getting started</h2>
      <div data-grid>
        <div data-col="4-sm">
          <h3>1. install</h3>
          <pre v-highlightjs><code class="shell">npm i x.ui --save</code></pre>
        </div>
        <div data-col="4-sm">
          <h3>2. config</h3>
          <p>
            download the default
            <a
              href="https://raw.githubusercontent.com/entrecode/x.ui/master/src/_xui-config.scss"
              title="config file for x.ui"
              target="_blank"
              rel="noopener"
            >config</a> file
          </p>
        </div>
        <div data-col="4-sm">
          <h3>3. import</h3>
          <pre v-highlightjs><code class="scss">@import '_config';
@import '~x.ui/src/x.ui';</code></pre>
        </div>
      </div>

      <div class="y-space-8"></div>
    </div>

    <div data-container>
      <div data-grid>
        <div data-col="3-sm">
          <div class="align-center">
            <img src="./assets/atoms.svg" alt="x.ui atoms">
            <h3>atoms</h3>
          </div>
          <p class="is-hyphen-block">
            Atoms are the smallest building blocks of
            <strong>x.ui</strong>. Atoms are
            elements like type, headings, inputs, buttons and more. Atoms only have one
            function. Most atoms have specific modifiers that change attributes like size,
            style or color.
          </p>
        </div>
        <div data-col="3-sm">
          <div class="align-center">
            <img src="./assets/molecules.svg" alt="x.ui atoms">
            <h3>molecules</h3>
          </div>
          <p class="is-hyphen-block">
            Molecules are groups of atoms bonded together and are the smallest
            fundamental units of a compound. molecules group connected information and/or
            interactions.
          </p>
        </div>
        <div data-col="3-sm">
          <div class="align-center">
            <img src="./assets/organisms.svg" alt="x.ui atoms">
            <h3>organisms</h3>
          </div>
          <p class="is-hyphen-block">
            Molecules are groups of atoms bonded together and are the smallest
            fundamental units of a compound. molecules group connected information and/or
            interactions.
          </p>
        </div>
        <div data-col="3-sm">
          <div class="align-center">
            <img src="./assets/modifier.svg" alt="x.ui atoms">
            <h3>modifier</h3>
          </div>
          <p class="is-hyphen-block">
            Molecules are groups of atoms bonded together and are the smallest
            fundamental units of a compound. molecules group connected information and/or
            interactions.
          </p>
        </div>
      </div>
    </div>

    <grid/>
    
    <Colors/>

    <h2 class="is-h1 align-center is-uppercase">typo</h2>
    <typo/>

    <h2 class="is-h1 align-center is-uppercase">media</h2>
    <media/>

    <h2 class="is-h1 align-center is-uppercase">form</h2>
    <Form/>
    <alert/>

    <h2 class="is-h1 align-center is-uppercase">UI</h2>
    <ui-buttons/>
    <ui-hamburger-btn/>
    <ui-button-group/>
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

    <h2 class="is-h1 align-center is-uppercase">theme</h2>
    <is-ink/>
    <is-theme/>

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
</template>

<script>
import Navbar from './components/Navbar.vue';
import Colors from './components/Core/Colors.vue';
import Typo from './components/Typeface/Typo.vue';
import Media from './components/Media/Media.vue';
import Form from './components/Form/Form.vue';
import Grid from './components/Grid/Grid.vue';
import Function from './components/Function.vue';
import Variables from './components/Variables.vue';
import Mixins from './components/Mixins.vue';
import IsInk from './components/Theme/IsInk.vue';
import IsTheme from './components/Theme/IsTheme.vue';
import Alert from './components/UI/Alert.vue';

import LayoutBumper from './components/Layout/Bumper.vue';
import LayoutDivider from './components/Layout/Divider.vue';
import LayoutSpacer from './components/Layout/Spacer.vue';
import LayoutFlexSpace from './components/Layout/FlexSpace.vue';

import UiNav from './components/UI/Nav.vue';
import UiTag from './components/UI/Tag.vue';
import UiModal from './components/UI/Modal.vue';
import UiWell from './components/UI/Well.vue';
import UiTitlebar from './components/UI/Titlebar.vue';
import UiCard from './components/UI/Card.vue';
import UiTable from './components/UI/Table.vue';
import UiAvatar from './components/UI/Avatar.vue';
import UiXuiList from './components/UI/XuiList.vue';
import UiXuiAccordion from './components/UI/XuiAccordion.vue';
import UiLoader from './components/UI/Loader.vue';
import UiHamburgerBtn from './components/UI/HamburgerBtn.vue';
import UiButtons from './components/UI/Buttons.vue';
import UiButtonGroup from './components/UI/ButtonGroup.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Colors,
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
    UiButtons,
    UiHamburgerBtn,
    UiButtonGroup,

    LayoutBumper,
    LayoutDivider,
    LayoutSpacer,
    LayoutFlexSpace,

    Form,
    Grid,
    Function,
    Variables,
    Mixins,
    IsInk,
    IsTheme,
  },
};
</script>

<style lang="scss">
@import './src/styles/app';

.select-all {
  user-select: all;
}

pre {
  margin: 0;
}
</style>
