<template>
  <div class="has-padding-8" style="max-width: 800px;">
    <h1>getting started</h1>
    <h2>1. install with npm</h2>
    <pre v-highlightjs><code class="shell">npm i x.ui --save</code></pre>
    <div class="spacer spacer_big"></div>
    <h2>2. create your config</h2>
    <p>
      <strong>x.ui</strong> is based on a detailed config with default parameters. it has a hierarchical structure so
      some parameters inherit values from stromnger core parameters.
    </p>
    <p>for a full overview of all config parameters you se the complete defautl config file here</p>
    <a
      href="https://raw.githubusercontent.com/entrecode/x.ui/master/src/_xui-config.scss"
      title="config file for x.ui"
      target="_blank"
      rel="noopener"
      class="btn btn_minor"
    >
      _xui-config.scss <svg class="ixo"><use xlink:href="#open"></use></svg>
    </a>
    <div class="spacer spacer_big"></div>
    <h2>3. your structure</h2>
    <pre v-highlightjs><code class="html">your-project/
└─ scss
  ├─ atoms/
  ├─ molecules/
  ├─ organisms/
  ├─ views/
  ├─ _your-config.scss
  └─ app.scss</code></pre>
    <div class="spacer"></div>
    <pre v-highlightjs><code class="scss">@import 'your-config';
@import '~x.ui/scss/x.ui.scss';</code></pre>
  </div>
</template>

<script>
export default {
  name: 'getting-started',
  components: {},
};
</script>
