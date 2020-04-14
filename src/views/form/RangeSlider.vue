<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>range-slider</h1>
      </div>
      <div class="nav">
        <div class="nav__item">
          <a @click="activeTab = 1" class="btn btn_clear demo-tab" :class="{ 'is-active': activeTab === 1 }">default</a>
        </div>
        <div class="nav__item">
          <a @click="activeTab = 2" class="btn btn_clear demo-tab" :class="{ 'is-active': activeTab === 2 }"
            >with tooltip</a
          >
        </div>
      </div>

      <div class="demo-preview is-padding-8" data-flex="center">
        <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl" v-if="activeTab === 1">
          <input type="range" class="range-slider" />
        </div>
        <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl" v-if="activeTab === 2">
          <input type="range" min="0" max="10" class="range-slider" v-model="testRange" :data-tooltip-top="testRange" />
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup" v-show="activeTab === 1"><code class="html"></code></pre>
      <pre v-highlightjs="markup2" v-show="activeTab === 2"><code class="html"></code></pre>
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
      testRange: 5,
      activeTab: 1,
      markup: `<input type="range" class="range-slider">`,
      markup2: `<input type="range" class="range-slider" data-tooltip-top="...">`,
      params: [
        { name: '$range-slider-height', type: 'number', default: '8' },
        {
          name: '$range-slider-radius',
          type: 'number',
          default: '4',
        },
        {
          name: '$range-slider-background',
          type: 'color',
          default: '$background-lightest',
        },
        {
          name: '$range-slider-style',
          type: 'map',
          default: '',
        },
        {
          name: '$range-slider-hover-style',
          type: 'map',
          default: '',
        },
        {
          name: '$range-slider-thumb-color',
          type: 'color',
          default: '$link',
        },
        {
          name: '$range-slider-thumb-size',
          type: 'number',
          default: '16',
        },
        {
          name: '$range-slider-thumb-radius',
          type: 'number',
          default: '8',
        },
        {
          name: '$range-slider-thumb-style',
          type: 'map',
          default: '',
        },
        {
          name: '$range-slider-thumb-hover-style',
          type: 'map',
          default: '',
        },
      ],
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
