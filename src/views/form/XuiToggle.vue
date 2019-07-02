<template>
  <section>
    <div data-grid>
      <div data-col="10 8@xl">
        <div class="is-padding-center-3">
          <h2>xui-toggle</h2>
        </div>
        <div class="demo-preview is-padding-8" data-flex="column center-items">
          <div class="is-theme is-padding-5 is-radius">
            <div class="xui-toggle">
              <input id="toggle-1" type="checkbox" />
              <label for="toggle-1" class="xui-toggle__label">
                <div class="xui-toggle__switch"></div>toggle with a longer label
              </label>
            </div>
          </div>
        </div>
        <div data-grid="center">
          <div data-col="10@md 8@lg">
            <div class="spacer"></div>
            <pre v-highlightjs="markup"><code class="html"></code></pre>
            <div class="spacer"></div>
            <params-table :params="params"></params-table>
            <div class="divider"></div>
            <requires-list :requires="requires"></requires-list>
          </div>
        </div>
      </div>
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
      markup: `<div class="xui-toggle">
  <input id="toggle-1" type="checkbox">
  <label for="toggle-1" class="xui-toggle__label">
    <div class="xui-toggle__switch"></div>toggle with a longer label
  </label>
</div>`,
      params: [
        { name: '$xui-toggle-background', type: 'color', default: '$background-lighter' },
        { name: '$xui-toggle-hover-background', type: 'color', default: 'set-hover($xui-toggle-background)' },
        { name: '$$xui-toggle-active-background', type: 'color', default: 'link' },
        {
          name: '$xui-toggle-height',
          type: 'number',
          default: '20',
        },
        {
          name: '$xui-toggle-width',
          type: 'number',
          default: ' $xui-toggle-height * 1.75',
        },
        {
          name: '$$xui-toggle-radius',
          type: 'number',
          default: '$xui-toggle-height / 2',
        },
        {
          name: '$xui-toggle-spacing',
          type: 'array',
          default: '0 8 0 0',
        },
        {
          name: '$xui-toggle-style',
          type: 'array',
          default: '',
        },
        { name: '$xui-toggle-pin-background', type: 'color', default: '$background' },
        { name: '$xui-toggle-pin-height', type: 'number', default: '$xui-toggle-height - 8' },
        { name: '$xui-toggle-pin-width', type: 'number', default: '$xui-toggle-pin-height' },
        { name: '$xui-toggle-pin-radius', type: 'number', default: '$xui-toggle-pin-height / 2;' },
        {
          name: '$xui-toggle-pin-style',
          type: 'array',
          default: '',
        },
        {
          name: '$xui-toggle-label-font-size',
          type: 'number',
          default: '$base-font-size',
        },
        {
          name: '$xui-toggle-label-line-height',
          type: 'number',
          default: '$xui-toggle-label-font-size * $base-line-height',
        },
        {
          name: '$xui-toggle-label-style',
          type: 'array',
          default: '',
        },
      ],
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
        { name: 'em()', type: 'function', link: '#scroll-to-em' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: '%is-hidden-input', type: 'placeholder' },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
