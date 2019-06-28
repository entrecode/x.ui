<template>
  <section class="demo-blocks-group">
    <div data-grid>
      <div data-col="8">
        <blocks :group="filterGroup(undefined)"></blocks>
        <blocks :group="filterGroup('atoms')"></blocks>
        <blocks :group="filterGroup('molecules')"></blocks>
        <blocks :group="filterGroup('modifier')"></blocks>
      </div>
      <div data-col="4">
        <ul class="nav nav_stacked is-sticky" style="top: 120px;">
          <li class="nav__item" v-if="sectionTitle">
            <h2 v-text="sectionTitle"></h2>
          </li>
          <li class="nav__item" v-for="(item, index) in filterGroup(undefined)" :key="index">
            <a
              :href="'#scroll-to-' + item.id"
              class="is-kilo is-ink hover:is-ink-link"
            >{{item.navTitle}}</a>
          </li>
          <li
            v-if="filterGroup('atoms').length"
            class="is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3"
          >
            <small>atoms</small>
          </li>
          <li class="nav__item" v-for="(item, index) in filterGroup('atoms')" :key="'atoms' + index">
            <a
              :href="'#scroll-to-' + item.id"
              class="is-kilo is-ink hover:is-ink-link"
            >{{item.navTitle}}</a>
          </li>
          <li
            v-if="filterGroup('molecules').length"
            class="is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3"
          >
            <small>molecules</small>
          </li>
          <li class="nav__item" v-for="(item, index) in filterGroup('molecules')" :key="'molecules' + index">
            <a
              :href="'#scroll-to-' + item.id"
              class="is-kilo is-ink hover:is-ink-link"
            >{{item.navTitle}}</a>
          </li>
          <li
            v-if="filterGroup('organisms').length"
            class="is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3"
          >
            <small>organisms</small>
          </li>
          <li class="nav__item" v-for="(item, index) in filterGroup('organisms')" :key="'organisms' + index">
            <a
              :href="'#scroll-to-' + item.id"
              class="is-kilo is-ink hover:is-ink-link"
            >{{item.navTitle}}</a>
          </li>
          <li
            v-if="filterGroup('modifier').length"
            class="is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3"
          >
            <small>Modifier</small>
          </li>
          <li class="nav__item" v-for="(item, index) in filterGroup('modifier')" :key="'modifier' + index">
            <a
              :href="'#scroll-to-' + item.id"
              class="is-kilo is-ink hover:is-ink-link"
            >{{item.navTitle}}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Blocks from './Blocks.vue';

export default {
  name: 'BlocksGroup',
  components: {
    Blocks,
  },
  props: ['groups', 'sectionTitle'],
  methods: {
    filterGroup: function(filter) {
      return this.groups.filter(function(group) {
        return group.type === filter;
      });
    },
  },
};
</script>

<style lang="scss">
</style>
