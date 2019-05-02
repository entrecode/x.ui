<template>
  <div class="about">
    <h2 class="is-h1 align-center is-uppercase">UI</h2>
    <ui-hamburger-btn/>
    <ui-table/>
  </div>
</template>

<script>
import UiTable from '@/components/UI/Table.vue';
import UiHamburgerBtn from '@/components/UI/HamburgerBtn.vue';

export default {
  components: {
    UiTable,
    UiHamburgerBtn,
  },
};
</script>
