<template>
  <section>
    <div data-grid>
      <div data-col="10 8@xl">
        <h1>colors</h1>
        <p class="is-lead">
          here you find almost all the colors used in the config file of x.ui. when compiled the colors are very modular
          and hierarchic as well. basically it is enought to modify only four values for your project.
          <code class="code">$background</code>, <code class="code">$text</code>, <code class="code">$link</code> and
          <code class="code">$super</code> are the four values that inform all the other colors.
        </p>
        <h2>smart colors</h2>
        <p>
          multiple helper functions try to make the configuration as simple as possible. most colors are adapted and
          generated from the four main variables.
          <code class="code">#-contrast</code> and <code class="code">#-safe</code> variables are calculated with
          <a href="/functions#scroll-to-set-contrast">
            <code class="code">set-contrast()</code> </a
          >. it calculates a contrast color with the best reading capabilities based on a background-color.
          <code class="code">#-hover</code> are generated via the
          <a href="/functions#scroll-to-set-hover">
            <code class="code">set-hover()</code>
          </a>
          functions. Dependening on the color it lightens or darkens the color for a nice hover-effekt.
        </p>
        <div class="spacer"></div>
        <div data-grid>
          <div data-col="6@md" v-for="(colorset, key, index) in colors" :key="index" class="is-margin-bottom-5">
            <h2 class="is-h4" v-text="key"></h2>
            <div
              class="field-group"
              data-grid="small-gutter"
              data-flex="center-items"
              v-for="(val, key, index) in colorset"
              :key="index"
            >
              <div data-col="6@md">
                <div class="input-group">
                  <verte
                    v-model="colorset[key]"
                    :value="colorset[key]"
                    :rgbSliders="true"
                    @input="updateColor(colorset[key], key)"
                    model="rgb"
                    :draggable="false"
                  >
                    <div class="demo-color-picker" :style="{ backgroundColor: val }"></div>
                  </verte>
                  <input type="text" v-model="colorset[key]" @change="updateColor(colorset[key], key)" class="input" />
                </div>
              </div>
              <div data-col="6@md">
                <label for="background">
                  <small>
                    <code class="is-bold" v-text="'$' + key"></code>
                  </small>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Verte from 'verte';
import 'verte/dist/verte.css';

export default {
  components: {
    Verte,
  },
  computed: {
    colors() {
      return {
        background: {
          background: this.$store.state.colors.background,
          'background-light': this.$store.state.colors.backgroundLight,
          'background-lighter': this.$store.state.colors.backgroundLighter,
          'background-lightest': this.$store.state.colors.backgroundLightest,
          'background-invert': this.$store.state.colors.backgroundInvert,
        },
        text: {
          text: this.$store.state.colors.text,
          'text-light': this.$store.state.colors.textLight,
          'text-lighter': this.$store.state.colors.textLighter,
          'text-lightest': this.$store.state.colors.textLightest,
          'text-invert': this.$store.state.colors.textInvert,
        },
        input: {
          'input-background': this.$store.state.colors.inputBackground,
          'input-color': this.$store.state.colors.inputColor,
        },
        link: {
          link: this.$store.state.colors.link,
          'link-contrast': this.$store.state.colors.linkContrast,
          'link-safe': this.$store.state.colors.linkSafe,
          'link-hover': this.$store.state.colors.linkHover,
        },
        super: {
          super: this.$store.state.colors.super,
          'super-contrast': this.$store.state.colors.superContrast,
          'super-safe': this.$store.state.colors.superSafe,
          'super-hover': this.$store.state.colors.superHover,
        },
        minor: {
          minor: this.$store.state.colors.minor,
          'minor-contrast': this.$store.state.colors.minorContrast,
          'minor-safe': this.$store.state.colors.minorSafe,
          'minor-hover': this.$store.state.colors.minorHover,
        },
        highlight: {
          highlight: this.$store.state.colors.highlight,
          'highlight-contrast': this.$store.state.colors.highlightContrast,
          'highlight-safe': this.$store.state.colors.highlightSafe,
          'highlight-hover': this.$store.state.colors.highlightHover,
        },
        'state-hover': {
          'state-hover': this.$store.state.colors.stateHover,
          'state-hover-contrast': this.$store.state.colors.stateHoverContrast,
        },
        'state-error': {
          'state-error': this.$store.state.colors.stateError,
          'state-error-contrast': this.$store.state.colors.stateErrorContrast,
          'state-error-safe': this.$store.state.colors.stateErrorSafe,
          'state-error-hover': this.$store.state.colors.stateErrorHover,
        },
        'state-success': {
          'state-success': this.$store.state.colors.stateSuccess,
          'state-success-contrast': this.$store.state.colors.stateSuccessContrast,
          'state-success-safe': this.$store.state.colors.stateSuccessSafe,
          'state-success-hover': this.$store.state.colors.stateSuccessHover,
        },
        'state-warning': {
          'state-warning': this.$store.state.colors.stateWarning,
          'state-warning-contrast': this.$store.state.colors.stateWarningContrast,
          'state-warning-safe': this.$store.state.colors.stateWarningSafe,
          'state-warning-hover': this.$store.state.colors.stateWarningHover,
        },
        'state-info': {
          'state-info': this.$store.state.colors.stateInfo,
          'state-info-contrast': this.$store.state.colors.stateInfoContrast,
          'state-info-safe': this.$store.state.colors.stateInfoSafe,
          'state-info-hover': this.$store.state.colors.stateInfoHover,
        },
      };
    },
  },
  methods: {
    updateColor(color, key) {
      key = key.replace(/\W+(.)/g, function(match, chr) {
        return chr.toUpperCase();
      });
      this.$store.commit('updateColor', { color, key });
    },
  },
};
</script>

<style lang="scss">
.doc-color-sample {
  text-align: center;
  padding: 32px;

  input {
    padding: 0;
    text-align: center;
    border: 0;
    margin: 0;
    font-size: 32px;
    line-height: 1em;
  }
}
</style>
