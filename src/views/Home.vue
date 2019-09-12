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
      >x.ui is a scss-framework based on the atomic design methodology. It is an extremly modular approach which is structured very hierarchic, starting with its smallest parts, the atoms, up to bigger structures like molecules and oraganisims.</p>
      <p>it's goal is to avoid redundancies and to be a very structured and therfore comprehensive design framework.</p>
      <div class="spacer"></div>
      <h2>atoms</h2>
      <p>
        Atoms are the smallest building blocks of
        <strong>x.ui</strong>. Atoms are elements like type, headings,
        inputs, buttons and more. Atoms only have one function. Most atoms have specific modifiers that change
        attributes like size, style or color.
      </p>
      <h2>molecules</h2>
      <p>
        Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound.
        molecules group connected information and/or interactions.
      </p>
      <h2>organisms</h2>
      <p>organisms are the biggest structures in the framework. in combination with atoms, molecules and modifier they make up your interface.</p>
      <h2>modifier</h2>
      <p>modifier are helper classes to transfrom the style or behavior of atoms, molecules or oprganisms.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home',
};
</script>
