<template>
  <section>
    <div data-grid>
      <div data-col="10 8@xl">
        <div class="is-padding-center-3">
          <h2>xui-checkbox</h2>
        </div>
        <div class="demo-preview is-padding-8" data-flex="column center-items">
          <div class="is-theme is-padding-5 is-radius">
            <div class="xui-checkbox">
              <input type="checkbox" id="boollean-1" />
              <label for="boollean-1" class="xui-checkbox__label">checkbox</label>
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
      markup: `<div class="xui-checkbox">
  <input type="checkbox" id="">
  <label for="" class="xui-checkbox__label">checkbox</label>
</div>`,
      params: [
        { name: '$xui-checkbox-spacing', type: 'array', default: '4 12 4 4' },
        {
          name: '$xui-checkbox-height',
          type: 'number',
          default: '20',
        },
        {
          name: '$xui-checkbox-radius',
          type: 'number',
          default: '6',
        },
        {
          name: '$xui-checkbox-background',
          type: 'color',
          default: '$input-background',
        },
        {
          name: '$xui-checkbox-style',
          type: 'array',
          default: '',
        },
        {
          name: '$xui-checkbox-hover-style',
          type: 'array',
          default: '',
        },
        {
          name: '$xui-checkbox-checked-style',
          type: 'array',
          default: '',
        },
        {
          name: '$xui-checkbox-check-size',
          type: 'number',
          default: '14',
        },
        {
          name: '$xui-checkbox-check-color',
          type: 'color',
          description: 'color of the checkmark if unchecked',
          default: 'transparent',
        },
        {
          name: '$xui-checkbox-check-hover-color',
          type: 'color',
          description: 'color of the checkmark on hover',
          default: '$text-lightest',
        },
        {
          name: '$xui-checkbox-check-checked-color',
          type: 'color',
          description: 'color of the checkmark if checked',
          default: '$link',
        },
      ],
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: '%is-hidden-input', type: 'placeholder' },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
