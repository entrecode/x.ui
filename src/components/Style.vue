<template>
  <component :is="'style'">:root { {{ colorVars }} }</component>
</template>
<script>
export default {
  computed: {
    colorVars() {
      let stateColors = this.$store.state.colors;
      let colorVars = '';
      for (let color in stateColors) {
        const _name = color
          .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
          .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
          .toLowerCase();
        const _def = `--${_name}: ${stateColors[color]};`;
        colorVars += _def;
      }
      return colorVars;
    },
  },
};
</script>