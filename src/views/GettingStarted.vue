<template>
  <div data-container>
    
    <h1 class="align-center">getting started</h1>
    <div data-grid>
      <div data-col="4-sm">
        <h3>1. install with npm</h3>
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
    <div data-grid>
      <div data-col="3-sm">
        <div class="align-center">
          <img src="@/assets/atoms.svg" alt="x.ui atoms">
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
          <img src="@/assets/molecules.svg" alt="x.ui atoms">
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
          <img src="@/assets/organisms.svg" alt="x.ui atoms">
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
          <img src="@/assets/modifier.svg" alt="x.ui atoms">
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
</template>

<script>
export default {
  name: 'getting-started',
  components: {},
};
</script>
