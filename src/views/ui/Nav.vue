<template>
  <blocks-group :groups="sectionGroups" section-title="nav"></blocks-group>
</template>

<script>
import BlocksGroup from '@/components/BlocksGroup.vue';

export default {
  name: 'Nav',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: 'Default Nav',
          id: 'nav',
          navTitle: 'Default Nav',
          groupItems: [
            {
              preview: `<ul class="nav">
  <li class="nav__item">
    <a href="">Navlink</a>
  </li>
  <li class="nav__item">
    <a href="">Navlink</a>
  </li>
  <li class="nav__divider"></li>
  <li class="nav__item">
    <a class="btn">Navlink</a>
  </li>
</ul>`,
              markup: ``,
              config: `$nav-padding: 0;
$nav-spacing: 0;
$nav-style: ();

$nav-item-padding: 8;

$nav-divider-color: $divider-color;
$nav-divider-size: 1;
$nav-divider-spacing: $nav-item-padding;`,
            },
          ],
        },
        {
          title: 'Stacked Nav',
          id: 'nav-stacked',
          navTitle: 'Stacked Nav',
          groupItems: [
            {
              title: 'stacked nav',
              preview: `<ul class="nav nav_stacked">
  <li class="nav__item">
    <a href="">Navlink</a>
  </li>
  <li class="nav__divider"></li>
  <li class="nav__item">
    <a href="">Navlink</a>
  </li>
</ul>`,
              markup: ``,
              config: `$nav-stacked-padding: 0;
$nav-stacked-spacing: 0;
$nav-stacked-style: ();

$nav-stacked-item-padding: $nav-item-padding;`,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
</style>