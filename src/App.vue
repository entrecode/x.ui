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
          <h3>2. customize your config</h3>
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
          <h3>3. setup root-scss</h3>
          <pre v-highlightjs><code class="scss">@import '_config';
@import '~x.ui/src/x.ui.scss';</code></pre>
        </div>
      </div>

      <div class="y-space-8"></div>

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
      <div class="y-space-8"></div>

      <DocTab>
        <div slot="title">
          <h3>font-weight</h3>
        </div>
        <div slot="preview">
          <div class="well">
            <div data-grid>
              <div data-col="3" class="align-center">
                <div class="is-mega is-light">Atomic</div>
                <span class="code">.is-light</span>
              </div>
              <div data-col="3" class="align-center">
                <div class="is-mega is-normal">Atomic</div>
                <span class="code">.is-normal</span>
              </div>
              <div data-col="3" class="align-center">
                <div class="is-mega is-medium">Atomic</div>
                <span class="code">.is-medium</span>
              </div>
              <div data-col="3" class="align-center">
                <div class="is-mega is-bold">Atomic</div>
                <span class="code">.is-bold</span>
              </div>
            </div>
          </div>
        </div>

        <div slot="config">
          <pre v-highlightjs><code class="scss">// @param {string} $is-light [lighter] - font-weight value for .is-light
$is-light: lighter !default;

// @param {string} $is-normal [normal] - font-weight value for .is-normal
$is-normal: normal !default;

// @param {string} $is-medium [bold] - font-weight value for .is-medium
$is-medium: bold !default;

// @param {string} $is-bold [bold] - font-weight value for .is-bold
$is-bold: bolder !default;</code></pre>
        </div>
      </DocTab>

      <div class="y-space-8"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import Navbar from './components/Navbar.vue';
import DocTab from './components/DocTab.vue';

Vue.use(VueHighlightJS);

export default {
  name: 'app',
  components: {
    Navbar,
    DocTab,
  },
};
</script>

<style lang="scss">
@import './src/styles/app';
</style>
