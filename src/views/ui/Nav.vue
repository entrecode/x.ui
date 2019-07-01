<template>
  <section>
    <div data-col="10@md 8@lg">
      <div class="demo-preview is-padding-5" data-flex="column center-items">
        <div class="is-padding-4 is-radius is-elevated-16 is-margin-bottom-5 is-theme">
          <ul class="nav demo-transition" :class="computedClasses">
            <li class="nav__item"><a href>Navlink</a></li>
            <li class="nav__item"><a href>Navlink</a></li>
            <li class="nav__divider"></li>
            <li class="nav__item"><a class="btn">Navlink</a></li>
          </ul>
        </div>
        <div class="is-theme is-padding-middle-2 is-padding-center-3">
          <div class="xui-checkbox">
            <input type="checkbox" v-model="navStyle" id="navStyle" />
            <label for="navStyle" class="xui-checkbox__label">square</label>
          </div>
        </div>
      </div>
      <div class="y-space-5"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="y-space-5"></div>
      <params-table :params="params"></params-table>
      <div class="divider"></div>
      <params-table :params="stackedParams" title="stacked params"></params-table>
      <div class="divider"></div>
      <requires-list :requires="requires"></requires-list>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';

export default {
  components: {
    RequiresList,
    ParamsTable,
  },
  data: () => {
    return {
      navStyle: '',
      markup: `<ul class="nav">
  <li class="nav__item">
  </li>
  <li class="nav__divider"></li>
  <li class="nav__item">
  </li>
</ul>`,
      params: [
        { name: '$nav-padding', type: 'array', default: '0' },
        { name: '$nav-spacing', type: 'array', default: '0' },
        { name: '$nav-style', type: 'map' },
        { name: '$nav-item-padding', type: 'array', default: '8' },
        { name: '$nav-divider-color', type: 'color', default: '$base-divider-color // rgba($text, .1)' },
        { name: '$nav-divider-size', type: 'number', default: '1' },
        { name: '$nav-divider-spacing', type: 'array', default: '$nav-item-padding' },
      ],
      stackedParams: [
        { name: '$nav-stacked-padding', type: 'array', default: '0' },
        { name: '$nav-stacked-spacing', type: 'array', default: '0' },
        { name: '$nav-stacked-style', type: 'map' },
        { name: '$nav-stacked-item-padding', type: 'array', default: '$nav-item-padding' },
      ],
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
        { name: 'em()', type: 'function', link: '#scroll-to-em' },
      ],
    };
  },
  computed: {
    computedClasses() {
      return [this.navStyle ? ' nav_stacked' : null].join('');
    },
  },
  watch: {
    computedClasses: function(val) {
      this.markup = `<ul class="nav${this.computedClasses}">
  <li class="nav__item">
  </li>
  <li class="nav__divider"></li>
  <li class="nav__item">
  </li>
</ul>`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
