<template>
  <section id="scroll-to-grid">
    <h2 class="align-center">Grid</h2>
    <a href @click.prevent="addCol"><svg class="ixo"><use xlink:href="#add"></use></svg></a>

    <div :data-grid="[gridAlign + ' ' + gridGutterSize]" class>
      <div data-col="4" v-for="(col, index) in cols" :key="index">
        <div class="is-giga is-theme-grid align-center has-padding-3 has-margin-bottom-3">{{col}}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Grid',
  data: () => {
    return {
      cols: ['col', 'col'],
      gridAlign: 'is-center',
      gridGutterSize: 'is-small',
    };
  },
  methods: {
    addCol: function() {
      console.log('hihi');
      this.cols.push('col');
    },
  },
};
</script>

<style scoped lang="scss">
</style>
