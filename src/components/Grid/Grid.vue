<template>
  <section id="scroll-to-grif">
    <h2 class="align-center">Grid</h2>
    <a href @click.prevent="addCol">add</a>

    <div :data-grid="gridAlign" class>
      <div data-col="4" v-for="(col, index) in cols" :key="index">
        <div class="is-giga is-theme-grid align-center has-padding-3">{{col}}</div>
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
    };
  },
  methods: {
    addCol: function() {
      console.log('hihi')
      this.cols.push('col');
    },
  },
};
</script>

<style scoped lang="scss">
[data-grid] {
}
</style>
