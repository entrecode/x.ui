<template>
  <div class="input-group">
    <div class="input-group__addon">
      <svg class="ixo">
        <use xlink:href="#search" />
      </svg>
    </div>
    <input type="text" class="input" v-model="query" placeholder="search for element.." />
    <div class="xui-select-options">
      <div
        class="xui-select-option"
        v-for="(element, index) in filtered(elements)"
        :key="index"
      >{{element.name}}</div>
    </div>
  </div>
</template>

<script>
import Ixo from './Ixo.vue';
export default {
  name: 'Searchbar',
  components: {
    Ixo,
  },
  data: () => {
    return {
      query: '',
      elements: [
        {
          name: 'headings',
          aliases: ['h1', 'h2', 'h2', 'h3'],
          link: 'headings',
        },
      ],
    };
  },
  methods: {
    filtered(elements) {
      const { query } = this;
      const filtered = elements.filter((element) => {
        const regex = new RegExp(`(${query})`, 'i');
        return (element.aliases && element.aliases.some((t) => t.match(regex))) || element.name.match(regex);
      });
      return filtered;
    },

    looseFocus() {
      setTimeout(() => (this.showPopdown = false), 200);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
