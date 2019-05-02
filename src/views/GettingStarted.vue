<template>
  <div data-container="is-left" style="max-width: 800px;">
    <h1>getting started</h1>
    <h2>install with npm</h2>
    <pre v-highlightjs><code class="shell">npm i x.ui --save</code></pre>
    <h3>2. config</h3>
    <p>
      download the default
      <a
        href="https://raw.githubusercontent.com/entrecode/x.ui/master/src/_xui-config.scss"
        title="config file for x.ui"
        target="_blank"
        rel="noopener"
        class="btn btn_minor"
      >config</a> file
    </p>
    <h3>3. import</h3>
    <pre v-highlightjs><code class="scss">@import '_config';
@import '~x.ui/src/x.ui';</code></pre>
  </div>
</template>

<script>
export default {
  name: 'getting-started',
  components: {},
};
</script>
