<template>
  <section>
    <div data-grid>
      <div data-col="10 8@xl">
        <div class="is-padding-center-3">
          <h2>loader</h2>
        </div>
        <div class="nav">
          <div class="nav__item">
            <a
              @click="activeTab = 1"
              class="btn btn_clear demo-tab"
              :class="{ 'is-active': activeTab === 1 }"
            >inline</a>
          </div>
          <div class="nav__item">
            <a
              @click="activeTab = 2"
              class="btn btn_clear demo-tab"
              :class="{ 'is-active': activeTab === 2 }"
            >local</a>
          </div>
          <div class="nav__item">
            <a
              @click="activeTab = 3"
              class="btn btn_clear demo-tab"
              :class="{ 'is-active': activeTab === 3 }"
            >global</a>
          </div>
        </div>

        <div v-if="activeTab === 1" class="animated fadeIn">
          <div class="demo-preview is-padding-8 is-margin-bottom-5">
            <div data-grid>
              <div data-col="4" data-flex="center center-items">
                <span class="loader"></span>
              </div>
              <div data-col="4" data-flex="center center-items">
                <a class="btn">
                  <span class="loader"></span>
                </a>
              </div>
              <div data-col="4" data-flex="center center-items">
                <div class="input-group">
                  <input type="text" class="input input_big" placeholder="input..." />
                  <div class="input-group__addon">
                    <span class="loader"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <pre v-highlightjs="markup1"><code class="html"></code></pre>
        </div>
        <div v-if="activeTab === 2" class="animated fadeIn">
          <div class="demo-preview is-padding-8 is-margin-bottom-5" data-flex="center center-items">
            <a class="btn btn_super is-relative">
              save
              <span class="loader is-local"></span>
            </a>
          </div>
          <pre v-highlightjs="markupLocal"><code class="html"></code></pre>
        </div>
        <div v-if="activeTab === 3" class="animated">
          <div class="demo-preview is-padding-8 is-margin-bottom-5" data-flex="center center-items">
            <a class="btn" @click="showLoader = !showLoader">show global loader</a>
            <div class="loader is-global" v-if="showLoader" @click="showLoader = !showLoader"></div>
          </div>
          <pre v-highlightjs="markupGlobal"><code class="html"></code></pre>
        </div>
        <div data-grid="center">
          <div data-col="10@md 8@lg">
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
import DocTab from '@/components/DocTab.vue';
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';

export default {
  components: {
    DocTab,
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      activeTab: 1,
      showLoader: false,
      markup1: `<span class="loader"></span>

<a href="btn"><span class="loader"></span></a>

<div class="input-group">
  <input type="text" class="input" placeholder="input...">
  <div class="input-group__addon">
    <span class="loader"></span>
  </div>
</div>`,
      markupLocal: `<span class="loader is-local"></span>`,
      markupGlobal: `<span class="loader is-global"></span>`,
      params: [
        {
          name: '$loader-size',
          type: 'number',
          description: 'height and width of loader',
          default: '24',
        },
        {
          name: '$loader-style',
          type: 'map',
        },
        {
          name: '$loader-track-width',
          type: 'number',
          default: '4',
        },
        {
          name: '$loader-track-color',
          type: 'color',
          default: 'rgba($text, 0.1)',
        },
        {
          name: '$loader-racer-color',
          type: 'color',
          default: '$link',
        },
        {
          name: '$loader-racer-animation',
          type: 'string',
          default: 'loaderDefault',
        },
        {
          name: '$loader-racer-animation-speed',
          type: 'string',
          default: '1s',
        },
        {
          name: '$loader-racer-animation-behavior',
          type: 'string',
          default: 'infinite linear',
        },
        {
          name: '$loader-is-local-style',
          type: 'string',
        },
        {
          name: '$loader-is-global-style',
          type: 'string',
        },
        {
          name: '$loader-is-global-background',
          type: 'color',
          default: '$backdrop // rgba(#000, 0.2)',
        },
      ],
      requires: [
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'em()', type: 'function', link: '#scroll-to-em' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
