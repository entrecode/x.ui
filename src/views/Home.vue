<template>
  <section>
    <div style="font-size: 16px;" data-col="+2 8 +1@xl 6@xl">
      <h1>
        x.ui 10
        <br />
        <small
          class="is-ink-light"
          style="font-size: .75em; line-height: 1em; display: block;"
        >modular, semantic and adaptive framework</small>
      </h1>
      <p
        class="is-lead"
      >x.ui is a scss-framework based on the atomic design methodology. starting with its smallest parts, the atoms, which are combinded into bigger structures like molecules and eventually organisms.</p>
      <p>Its modular and semantic structure eliminates redundancies and is very comprehensive.</p>
      <div class="spacer"></div>
      <h2>atoms</h2>
      <p>Atoms are the smallest building blocks like type, headings, inputs, buttons and more.</p>
      <h2>molecules</h2>
      <p>molecules group informations and/or interactions.</p>
      <h2>organisms</h2>
      <p>organisms are the biggest structures in the framework. in combination with atoms, molecules and modifier they make up your interface.</p>
      <h2>modifier</h2>
      <p>modifier are helper classes to transfrom the style or behavior of atoms, molecules or organisms.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home',
};
</script>
