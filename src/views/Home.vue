<template>
  <section>
    <div style="background-color: var(--link);">
      <div
        class="is-padding-8 is-margin-bottom-8 demo-texture is-theme-invert align-center ís-width-vw-full is-height-vw-golden"
        data-flex="center center-items column"
      >
        <svg class="demo-hero-logo"><use xlink:href="#logo"></use></svg>
        <div class="y-space-4"></div>
        <router-link to="home" class="btn btn_big is-uppercase">get started</router-link>
        <div class="y-space-8"></div>
        <div data-grid="center">
          <div data-col="fit"><h2 class="align-center is-ink-highlight">modular</h2></div>
          <div data-col="fit"><h2 class="align-center is-ink-highlight">semantic</h2></div>
          <div data-col="fit"><h2 class="align-center is-ink-highlight">adaptive</h2></div>
        </div>
      </div>
    </div>

    <div data-container style="max-width: 800px;">
      <p class="is-lead is-hyphen-block">
        <strong>x.ui</strong> is a framework based on the atomic design methodology. this workflow is inspired by nature
        and physics and has a pretty serious focus on modularity and structure. it structure begins with the smallest
        part and builds up to complex structure. as a result, there is very little redundancy with a remarkable
        flexibility.
      </p>
      <p class="is-hyphen-block">
        the goal of <strong>x.ui</strong> is to translate the atomic philosophy into a new kind of framework, unattached
        to design-trends and 100% focused on user-driven ux-design and combine it a with a strict set of rules regarding
        naming conventions and front-end development.
      </p>

      <div class="y-space-8"></div>
      <div data-grid>
        <div data-col="3@sm">
          <div class="align-center">
            <img src="@/assets/atoms.svg" alt="x.ui atoms" />
            <h3>atoms</h3>
          </div>
          <p class="is-hyphen-block">
            Atoms are the smallest building blocks of <strong>x.ui</strong>. Atoms are elements like type, headings,
            inputs, buttons and more. Atoms only have one function. Most atoms have specific modifiers that change
            attributes like size, style or color.
          </p>
        </div>
        <div data-col="3@sm">
          <div class="align-center">
            <img src="@/assets/molecules.svg" alt="x.ui atoms" />
            <h3>molecules</h3>
          </div>
          <p class="is-hyphen-block">
            Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound.
            molecules group connected information and/or interactions.
          </p>
        </div>
        <div data-col="3@sm">
          <div class="align-center">
            <img src="@/assets/organisms.svg" alt="x.ui atoms" />
            <h3>organisms</h3>
          </div>
          <p class="is-hyphen-block">
            Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound.
            molecules group connected information and/or interactions.
          </p>
        </div>
        <div data-col="3@sm">
          <div class="align-center">
            <img src="@/assets/modifier.svg" alt="x.ui atoms" />
            <h3>modifier</h3>
          </div>
          <p class="is-hyphen-block">
            Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound.
            molecules group connected information and/or interactions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home',
  components: {},
};
</script>

<style lang="scss">
.demo-hero-logo {
  fill: var(--highlight);
  width: auto;
  height: 240px;
  filter: drop-shadow(8px 8px 0 var(--super)) drop-shadow(-4px 0 var(--link));
}
</style>
