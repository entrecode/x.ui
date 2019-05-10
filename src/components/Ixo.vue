<template>
  <svg
    class="ixo"
    role="presentation"
    version="1.1"
    :aria-labelledby="name"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <path :d="path"/>
  </svg>
</template>

<script>
import json from './../assets/ixo.json';

export default {
  name: 'Ixo',
  props: {
    name: {
      type: String,
      default: 'skull',
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
  },
  data: function() {
    return {
      path: '',
    };
  },
  mounted() {
    const s = this;
    const { icons } = json;
    this.path = icons.find((e) => e.title === s.name).paths[0];
  },
};
</script>
