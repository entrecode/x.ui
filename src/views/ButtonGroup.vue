<template>
  <section>
    <div class="nav">
      <div class="nav__item">
        <a
          @click="activeTab = 1"
          class="btn btn_clear demo-tab"
          :class="{'is-active' : activeTab === 1}"
        >normal</a>
      </div>
      <div class="nav__item">
        <a
          @click="activeTab = 2"
          class="btn btn_clear demo-tab"
          :class="{'is-active' : activeTab === 2}"
        >rounded</a>
      </div>
      <div class="nav__item">
        <a
          @click="activeTab = 3"
          class="btn btn_clear demo-tab"
          :class="{'is-active' : activeTab === 3}"
        >dropdown</a>
      </div>
    </div>
    <div v-if="activeTab === 1" class="animated fadeIn">
      <div class="demo-preview has-padding-8" data-flex="center center-items">
        <div class="btn-group">
          <a class="btn-group__start btn">button</a>
          <div class="btn-group__divider"></div>
          <a class="btn-group__inner btn">button</a>
          <div class="btn-group__divider"></div>
          <a class="btn-group__end btn">button</a>
        </div>
      </div>
      <pre v-highlightjs="markup1"><code class="html"></code></pre>
    </div>
    <div v-if="activeTab === 2" class="animated fadeIn">
      <div class="demo-preview has-padding-8" data-flex="center center-items">
        <div class="btn-group">
          <a class="btn-group__start btn btn_round">button</a>
          <a class="btn-group__inner btn btn_round">button</a>
          <a class="btn-group__end btn btn_super btn_round">button</a>
        </div>
      </div>
      <pre v-highlightjs="markup2"><code class="html"></code></pre>
    </div>
    <div v-if="activeTab === 3" class="animated fadeIn">
      <div class="demo-preview has-padding-8" data-flex="center center-items">
        <div class="btn-group">
          <a class="btn-group__start btn_outlined btn">button</a>
          <a class="btn-group__inner btn_outlined btn">button</a>
          <div class="dropdown" tabindex="0">
            <div class="btn btn_outlined btn-group__end">
              <svg class="ixo">
                <use xlink:href="#more-vertical"></use>
              </svg>
            </div>
            <div class="dropdown-options">...</div>
          </div>
        </div>
      </div>
      <pre v-highlightjs="markup3"><code class="html"></code></pre>
    </div>
    <div data-col="10@md 8@lg">
      <params-table :params="params"></params-table>
      <requires-list :requires="requires"></requires-list>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';
export default {
  name: 'ButtonGroup',
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      activeTab: 1,
      markup1: `<div class="btn-group">
  <a class="btn-group__start btn">button</a>
  <div class="btn-group__divider"></div>
  <a class="btn-group__inner btn ">button</a>
  <div class="btn-group__divider"></div>
  <a class="btn-group__end btn ">button</a>
</div>`,
      markup2: `<div class="btn-group">
  <a class="btn-group__start btn btn_round">button</a>
  <a class="btn-group__inner btn btn_round">button</a>
  <a class="btn-group__end btn btn_super btn_round">button</a>
</div>`,
      markup3: `<div class="btn-group">
  <a class="btn-group__start btn">button</a>
  <div class="btn-group__divider"></div>
  <div class="dropdown" tabindex="0">
    <div class="btn btn-group__end"><svg class="ixo"><use xlink:href="#more-vertical"></use></svg></div>
    <div class="dropdown-options">
      ...
    </div>
  </div>
</div>`,
      params: [
        {
          name: '$btn-group-divider-size',
          type: 'number',
          default: '1',
        },
        {
          name: '$btn-group-divider-color',
          type: 'color',
          default: '$base-divider-color // rgba($text, 0.1)',
        },
        {
          name: '$btn-group-style',
          type: 'map',
        },
      ],
      requires: [{ name: 'rem()', type: 'function', link: '#scroll-to-rem' }],
    };
  },
};
</script>

<style scoped lang="scss">
</style>
