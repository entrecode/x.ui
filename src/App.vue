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
    <div class="divider divider_big"></div>
    <grid/>
    <div class="divider divider_big"></div>
    <Colors/>
    <div class="divider divider_big"></div>
    <h2 class="is-h1 align-center is-uppercase">typo</h2>
    <div class="divider divider_big"></div>
    <typo/>
    <div class="divider divider_big"></div>
    <h2 class="is-h1 align-center is-uppercase">media</h2>
    <div class="divider divider_big"></div>
    <media/>
    <div class="divider divider_big"></div>
    <h2 class="is-h1 align-center is-uppercase">form</h2>
    <div class="divider divider_big"></div>
    <Form/>
    <div class="divider divider_big"></div>
    <alert/>
    <div class="divider divider_big"></div>
    <Loader/>
    <div class="divider divider_big"></div>
    <h2 class="is-h1 align-center is-uppercase">UI</h2>
    <div class="divider divider_big"></div>
    <buttons/>
    <div class="divider divider_big"></div>
    <hamburger-btn/>
    <div class="divider divider_big"></div>
    <button-group/>
    <div class="divider divider_big"></div>
    <tag/>
    <div class="divider divider_big"></div>
    <Nav/>
    <div class="divider divider_big"></div>
    <titlebar/>
    <div class="divider divider_big"></div>
    <modal/>
    <div class="divider divider_big"></div>
    <well/>
    <div class="divider divider_big"></div>
    <card/>
    <div class="divider divider_big"></div>
    <Table/>
    <div class="divider divider_big"></div>
    <avatar/>
    <div class="divider divider_big"></div>
    <xui-list/>
    <div class="divider divider_big"></div>
    <xui-accordion/>
    <div class="divider divider_big"></div>
    <h2 class="is-h1 align-center is-uppercase">Layout</h2>
    <div class="divider divider_big"></div>
    <bumper/>
    <div class="divider divider_big"></div>
    <divider/>
    <div class="divider divider_big"></div>
    <Spacer />
    <div class="divider divider_big"></div>
    <flex-space/>
    <div class="divider divider_big"></div>
    <Function/>
    <Variables/>
    <footer class="has-padding-8 is-ink-light align-center">
      placeholder images
      <a href="https://unsplash.com/collections/4386752/women-are-amazing" target="_blank" rel="nofollow">https://unsplash.com/collections/4386752/women-are-amazing</a> &bull; filltext: <a href="http://socialgoodipsum.com/#/" target="_blank" rel="nofollow">http://socialgoodipsum.com/#/</a>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import DocTab from './components/DocTab.vue';
import Colors from './components/Core/Colors.vue';
import Typo from './components/Typeface/Typo.vue';
import Media from './components/Media/Media.vue';
import Buttons from './components/UI/Buttons.vue';
import HamburgerBtn from './components/UI/HamburgerBtn.vue';
import ButtonGroup from './components/UI/ButtonGroup.vue';
import Nav from './components/UI/Nav.vue';
import Tag from './components/UI/Tag.vue';
import Modal from './components/UI/Modal.vue';
import Well from './components/UI/Well.vue';
import Titlebar from './components/UI/Titlebar.vue';
import Card from './components/UI/Card.vue';
import Table from './components/UI/Table.vue';
import Avatar from './components/UI/Avatar.vue';
import XuiList from './components/UI/XuiList.vue';
import XuiAccordion from './components/UI/XuiAccordion.vue';
import Form from './components/Form/Form.vue';
import Alert from './components/UI/Alert.vue';
import Loader from './components/UI/Loader.vue';
import Grid from './components/Grid/Grid.vue';
import Bumper from './components/Layout/Bumper.vue';
import Divider from './components/Layout/Divider.vue';
import Spacer from './components/Layout/Spacer.vue';
import FlexSpace from './components/Layout/FlexSpace.vue';
import Function from './components/Function.vue';
import Variables from './components/Variables.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Colors,
    Typo,
    Media,
    DocTab,
    Buttons,
    HamburgerBtn,
    ButtonGroup,
    Nav,
    Tag,
    Modal,
    Titlebar,
    Well,
    Card,
    Table,
    Avatar,
    XuiList,
    XuiAccordion,
    Form,
    Alert,
    Loader,
    Grid,
    Bumper,
    Divider,
    Spacer,
    FlexSpace,
    Function,
    Variables,
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
