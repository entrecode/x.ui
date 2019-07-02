<template>
  <section>
    <div data-grid>
      <div data-col="10 8@xl">
        <div class="is-padding-center-3">
          <h2>xui-radio</h2>
        </div>
        <div class="demo-preview is-padding-8" data-flex="column center-items">
          <div class="is-theme is-padding-5 is-radius">
            <div data-grid>
              <div data-col="6">
                <div class="xui-radio">
                  <input type="radio" name="choice" id="boollean-1" />
                  <label for="boollean-1" class="xui-radio__label">checkbox</label>
                </div>
              </div>
              <div data-col="6">
                <div class="xui-radio">
                  <input type="radio" name="choice" id="boollean-2" />
                  <label for="boollean-2" class="xui-radio__label">checkbox</label>
                </div>
              </div>
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
      markup: `<div class="xui-radio">
  <input type="radio" id="" name>
  <label for="" class="xui-radio__label">checkbox</label>
</div>`,
      params: [
        { name: '$xui-radio-spacing', type: 'array', default: '0 12 0 0' },
        {
          name: '$xui-radio-height',
          type: 'number',
          default: '20',
        },
        {
          name: '$xui-radio-background',
          type: 'color',
          default: '$input-background',
        },
        {
          name: '$xui-radio-style',
          type: 'array',
          default: '',
        },
        {
          name: '$xui-radio-hover-style',
          type: 'array',
          default: '',
        },
        {
          name: '$xui-radio-checked-style',
          type: 'array',
          default: '',
        },
        {
          name: '$xui-radio-dot-size',
          type: 'number',
          default: '8',
        },
        {
          name: '$xui-radio-dot-color',
          type: 'color',
          description: 'color of the dot if unchecked',
          default: 'transparent',
        },
        {
          name: '$xui-radio-dot-hover-color',
          type: 'color',
          description: 'color of the dot on hover',
          default: '$text-lightest',
        },
        {
          name: '$xui-radio-dot-checked-color',
          type: 'color',
          description: 'color of the dot if checked',
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
