<template>
  <section id="scroll-colors">
    <h2 class="align-center">colors</h2>
    <div data-grid>
      <div data-col="3">
        <div class="doc-color-sample doc-color-sample_link">
          <input type="text" v-model="link" class="input input_clear is-headings-font">
          <input type="text" v-model="linkContrast" class="input input_clear is-headings-font">
          <input type="text" v-model="linkSafe" class="input input_clear is-headings-font">
          <input type="text" v-model="linkHover" class="input input_clear is-headings-font">
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
      link: '#2fce6f',
      linkContrast: '#2fce6f',
      linkSafe: '#2fce6f',
      linkHover: '#2fce6f',
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
