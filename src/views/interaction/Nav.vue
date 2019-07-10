<template>
  <section>
    <div data-col="10@md 8@lg">
      <div class="titlebar">
        <h1>nav</h1>
      </div>
      <div class="demo-preview is-padding-5" data-flex="column center-items">
        <div class="is-padding-5">
          <ul class="nav demo-transition" :class="computedClasses">
            <li class="nav__item">
              <a href>Navlink</a>
            </li>
            <li class="nav__item">
              <a href>Navlink</a>
            </li>
            <li class="nav__divider"></li>
            <li class="nav__item">
              <a class="btn">Navlink</a>
            </li>
          </ul>
        </div>
        <div class="is-theme is-margin-top-5 is-padding-center-2 is-round is-elevated-16">
          <div class="nav">
            <div class="nav__item">
              <div class="xui-checkbox">
                <input type="checkbox" v-model="navStyle" id="navStyle" />
                <label for="navStyle" class="xui-checkbox__label">stacked</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="params"></params-table>
      <div class="divider"></div>
      <params-table :params="stackedParams" title="stacked params"></params-table>
      <div class="divider"></div>
      <params-table :params="itemParams" title="item params"></params-table>
      <div class="divider"></div>
      <params-table :params="linkParams" title="link params"></params-table>
      <div class="divider"></div>
      <params-table :params="dividerParams" title="divider params"></params-table>
      <div class="spacer"></div>
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
      ],
      stackedParams: [
        { name: '$nav-stacked-padding', type: 'array', default: '0' },
        { name: '$nav-stacked-spacing', type: 'array', default: '0' },
        { name: '$nav-stacked-style', type: 'map' },
        { name: '$nav-stacked-item-padding', type: 'array', default: '$nav-item-padding' },
      ],
      linkParams: [
        { name: '$nav-link-radius', type: 'array', default: '4' },
        { name: '$nav-link-spacing', type: 'array', default: '0' },
        { name: '$nav-link-padding', type: 'array', default: '4' },
        { name: '$nav-link-font-size', type: 'number', default: '$base-font-size' },
        { name: '$nav-link-background', type: 'color', default: 'none' },
        { name: '$nav-link-color', type: 'color', default: '$text' },
        { name: '$nav-link-style', type: 'array', default: '' },
        { name: '$nav-link-hover-background', type: 'color', default: '$nav-link-background' },
        { name: '$nav-link-hover-color', type: 'color', default: '$nav-link-color' },
        { name: '$nav-link-hover-style', type: 'array', default: '' },
        { name: '$nav-link-active-background', type: 'color', default: '$nav-link-hover-background' },
        { name: '$nav-link-active-color', type: 'color', default: '$nav-link-hover-color' },
        { name: '$nav-link-active-style', type: 'array', default: '' },
      ],
      itemParams: [{ name: '$nav-item-padding', type: 'array', default: '8' }],
      dividerParams: [
        { name: '$nav-divider-color', type: 'color', default: '$base-divider-color // rgba($text, .1)' },
        { name: '$nav-divider-size', type: 'number', default: '1' },
        { name: '$nav-divider-spacing', type: 'array', default: '$nav-item-padding' },
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
