<template>
  <section>
    <div class="has-padding-center-3"><h2>xui-select</h2></div>
    <div class="demo-preview has-padding-8" data-flex="center">
      <div class="is-theme has-padding-5 has-radius" data-col="8 6@lg 4@xl">
        <div tabindex="0" class="xui-select">
          <span class="xui-select__placeholder" v-if="!selected">select</span>
          <span class="xui-select__selected" v-else v-text="selected"></span> <span class="xui-select__caret"></span>
          <ul class="xui-select-options">
            <li><a @mousedown="selected = ''" tabindex="0" class="xui-select-option">make a selection</a></li>
            <li>
              <a
                @mousedown="selected = 'option 1'"
                tabindex="0"
                class="xui-select-option"
                :class="{ 'is-active': selected === 'option 1' }"
                >option 1</a
              >
            </li>
            <li>
              <a
                @mousedown="selected = 'option 2'"
                tabindex="0"
                class="xui-select-option"
                :class="{ 'is-active': selected === 'option 2' }"
                >option 2</a
              >
            </li>
            <li>
              <a
                @mousedown="selected = 'option 3'"
                tabindex="0"
                class="xui-select-option"
                :class="{ 'is-active': selected === 'option 3' }"
                >option 3</a
              >
            </li>
          </ul>
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
      markup: `<div tabindex="0" class="xui-select">
  <!-- if no selection -->
  <span class="xui-select__placeholder">...</span>
  <!-- if selection -->
  <span class="xui-select__selected">...</span>
  <span class="xui-select__caret"></span>
  <ul class="xui-select-options">
    <li>
      <!-- add .is-ative for selected option -->
      <a href="" tabindex="0" class="xui-select-option">...</a>
    </li>
    ...
  </ul>
</div>`,
      selected: '',
      params: [
        { name: '$file-upload-spacing', type: 'array', default: '0 0 16' },
        { name: '$file-upload-padding', type: 'array', default: '16' },
        {
          name: '$file-upload-border-radius',
          type: 'number',
          default: '4',
        },
        {
          name: '$file-upload-border',
          type: 'string',
          default: '2px dashed $minor',
        },
        {
          name: '$file-upload-background',
          type: 'color',
          default: 'none',
        },
        {
          name: '$file-upload-style',
          type: 'array',
          default: '',
        },
        {
          name: '$file-upload-hover-style',
          type: 'array',
          default: '',
        },
      ],
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
