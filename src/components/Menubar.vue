<template>
  <div class="doc-menubar has-padding-5">
    <ul class="nav nav_stacked">
      <li class="nav__item">
        <router-link to="getting-started" class="is-kilo">getting started</router-link>
      </li>
      <li class="nav__item">
        <router-link to="typo" class="is-mega is-uppercase">typo</router-link>
      </li>
      <li class="nav__item">
        <router-link to="form" class="is-mega is-uppercase">form</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menubar',
  components: {
  },
  data: () => {
    return {};
  },
};
</script>

<style scoped lang="scss">
</style>
