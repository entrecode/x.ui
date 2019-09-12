<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>xui-checkbox</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="center">
        <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl">
          <div data-grid>
            <div data-col="auto">
              <div class="xui-checkbox">
                <input type="checkbox" id="rt5e" />
                <label for="rt5e" class="xui-checkbox__label">checkbox</label>
              </div>
            </div>
            <div data-col="fit">
              <div class="xui-checkbox">
                <input type="checkbox" id="rt4e" />
                <label for="rt4e" class="xui-checkbox__label"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="params"></params-table>
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
      markup: `<div class="xui-checkbox">
  <input type="checkbox" id="">
  <label for="" class="xui-checkbox__label">checkbox</label>
</div>

<!-- without label -->
<div class="xui-checkbox">
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
          type: 'map',
          default: '',
        },
        {
          name: '$xui-checkbox-hover-style',
          type: 'map',
          default: '',
        },
        {
          name: '$xui-checkbox-checked-style',
          type: 'map',
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
