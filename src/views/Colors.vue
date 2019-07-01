<template>
  <section id="scroll-colors">
    <h2 class="align-center">colors</h2>
    <div data-grid>
      <div data-col="3">
        <div class="doc-color-sample">
          <div v-text="colors.link" class="is-giga is-padding-2" :style="`color: ${colors.link};`"></div>
          <div
            v-text="colors.linkContrast"
            class="is-giga is-radius is-padding-2"
            :style="`color: ${colors.linkContrast}; background-color: ${colors.link};`"
          ></div>
          <div v-text="colors.linkSafe" class="is-giga is-padding-2" :style="`color: ${colors.linkSafe};`"></div>
          <div v-text="colors.linkHover" class="is-giga is-padding-2" :style="`color: ${colors.linkHover};`"></div>
        </div>
      </div>
      <div data-col="3"></div>
      <div data-col="3"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Grid',
  data: () => {
    return {
      colors: {
        background: '#fff',
        backgroundLight: '#fff',
        backgroundLighter: '#fff',
        backgroundLightest: '#fff',
        backgroundInvert: '#fff',
        link: '#2fce6f',
        linkContrast: '#fff',
        linkSafe: '#2fce6f',
        linkHover: '#1eb159',
      },
    };
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
