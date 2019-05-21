<template>
  <section>
    <div class="has-margin-bottom-5">
      <div data-grid="center">
        <div data-col="6">
          <div class="demo-preview has-padding-8" data-flex="column center">
            <div
              class="alert demo-transition"
              :class="alertClasses"
            >ecosystem families energize correlation, social enterprise citizen-centered.</div>
          </div>
        </div>
        <div data-col="6" data-flex="column center">
          <div class="field-group">
            <div class="input-group">
              <label for="alertSize" class="input-group__addon">
                <svg class="ixo is-ink-link">
                  <use xlink:href="#move-vertical"></use>
                </svg>
              </label>
              <div class="input-group__addon">
                <select id="alertSize" class="input input_round" v-model="size">
                  <option value>default</option>
                  <option value="alert_small">small</option>
                  <option value="alert_big">big</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field-group">
            <div class="input-group">
              <label for="alerStyle" class="input-group__addon">
                <svg class="ixo is-ink-link">
                  <use xlink:href="#color-palette"></use>
                </svg>
              </label>
              <div class="input-group__addon">
                <select class="input input_round" id="alerStyle" v-model="style">
                  <option value>default</option>
                  <option value="alert_info">info</option>
                  <option value="alert_error">error</option>
                  <option value="alert_success">success</option>
                  <option value="alert_warning">warning</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-col="10@md 8@lg">
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="y-space-8"></div>
      <params-table :params="params" title="default params"></params-table>
      <div class="divider"></div>
      <params-table :params="smallParams" title="small params"></params-table>
      <div class="divider"></div>
      <params-table :params="bigParams" title="big params"></params-table>
      <div class="divider"></div>
      <params-table :params="stylesParams" title="style params"></params-table>
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
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      markup: `<div class="alert">
  ...
</div>`,
      size: '',
      style: '',
      requires: [
        { name: 'set-theme-colors()', type: 'mixin', link: '#scroll-to-set-theme-colors' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'em()', type: 'function', link: '#scroll-to-em' },
      ],
      params: [
        {
          name: '$alert-background',
          type: 'color',
          default: '$background-lightest',
        },
        {
          name: '$alert-weight',
          type: 'string',
          default: '$is-normal',
        },
        {
          name: '$alert-radius',
          type: 'number',
          default: '4',
        },
        {
          name: '$alert-font-size',
          type: 'number',
          default: '$base-font-size; // 16',
        },
        {
          name: '$alert-padding',
          type: 'array',
          default: '16 24',
        },
        {
          name: '$alert-spacing',
          type: 'array',
          default: '0 0 16 0',
        },
        {
          name: '$alert-style',
          type: 'map',
        },
      ],
      smallParams: [
        {
          name: '$alert-small-font-size',
          type: 'number',
          default: '$alert-font-size * 0.875; // 14.875',
        },
        {
          name: '$alert-small-padding',
          type: 'array',
          default: '8 12',
        },
        {
          name: '$alert-small-spacing',
          type: 'array',
          default: '$alert-spacing',
        },
        {
          name: '$alert-small-style',
          type: 'map',
        },
      ],
      bigParams: [
        {
          name: '$alert-big-font-size',
          type: 'number',
          default: '$alert-font-size * 1.125; // 18',
        },
        {
          name: '$alert-big-padding',
          type: 'array',
          default: '24 28',
        },
        {
          name: '$alert-big-spacing',
          type: 'array',
          default: '$alert-spacing',
        },
        {
          name: '$alert-big-style',
          type: 'map',
        },
      ],
      stylesParams: [
        {
          name: '$alert-styles',
          type: 'map',
          default: `(
  'info': (
    $state-info,
    $state-info-contrast,
  ),
  'error': (
    $state-error,
    $state-error-contrast,
  ),
  'success': (
    $state-success,
    $state-success-contrast,
  ),
  'warning': (
    $state-warning,
    $state-warning-contrast,
  ),
);`,
        },
      ],
    };
  },
  computed: {
    alertClasses() {
      return [this.size ? this.size + ' ' : null, this.style ? this.style + ' ' : null].join('');
    },
  },
  watch: {
    alertClasses: function(val) {
      this.markup = `<div class="alert ${this.alertClasses}">
  ...
</div>`;
    },
  },
};
</script>

<style scoped lang="scss">
</style>