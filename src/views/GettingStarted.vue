<template>
  <section>
    <div style="font-size: 16px;" data-col="+2 8 +1@xl 6@xl">
      <h1>getting started</h1>
      <h2>1. install with npm</h2>
      <pre v-highlightjs><code class="shell">npm i x.ui --save</code></pre>
      <div class="spacer spacer_big"></div>
      <h2>2. create your config</h2>
      <p>
        the config is the most important file in a x.ui project. basically it is all you need to make x.ui your own. for
        a full overview of all config parameters you se the complete defautl config file here
      </p>
      <a
        href="https://raw.githubusercontent.com/entrecode/x.ui/master/scss/_xui-config.scss"
        title="config file for x.ui"
        target="_blank"
        rel="noopener"
        class="btn btn_minor"
      >
        _xui-config.scss
        <svg class="ixo">
          <use xlink:href="#open" />
        </svg>
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
  </section>
</template>

<script>
export default {
  name: 'getting-started',
  components: {},
};
</script>
