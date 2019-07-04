<template>
  <section>
    <div class="is-padding-center-3">
      <h2>button-group</h2>
    </div>
    <div class="nav">
      <div class="nav__item">
        <a
          @click="activeTab = 1"
          class="btn btn_clear demo-tab"
          :class="{ 'is-active': activeTab === 1 }"
        >standard</a>
      </div>
      <div class="nav__item">
        <a
          @click="activeTab = 2"
          class="btn btn_clear demo-tab"
          :class="{ 'is-active': activeTab === 2 }"
        >example</a>
      </div>
    </div>

    <div data-col="10@md 8@lg">
      <div class="demo-preview is-padding-8">
        <div class="titlebar" v-if="activeTab === 1">
          <h2 class="is-giga">Titel</h2>
          <ul class="nav">
            <li class="nav__item">
              <a class="btn">button</a>
            </li>
          </ul>
        </div>
        <div
          class="titlebar is-theme is-elevated-16 is-round is-padding-left-5"
          v-if="activeTab === 2"
        >
          <h2 class="is-giga">Titel</h2>
          <ul class="nav">
            <li class="nav__item">
              <a class="btn btn_clear">button</a>
            </li>
            <li class="nav__divider"></li>
            <li class="nav__item">
              <a class="btn btn_round">button</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup" v-if="activeTab === 1"><code class="html"></code></pre>
      <pre v-highlightjs="markup2" v-if="activeTab === 2"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="params"></params-table>
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
      activeTab: 1,
      markup: `<div class="titlebar">
  <h2 class="is-giga">Titel</h2>
  <ul class="nav">
    <li class="nav__item">
      <a class="btn">open</a>
    </li>
  </ul>
</div>`,
      markup2: `<div class="titlebar is-theme is-elevated-16 is-round is-padding-left-5">
  <h2 class="is-giga">Titel</h2>
  <ul class="nav">
    <li class="nav__item">
      <a class="btn btn_clear">button</a>
    </li>
    <li class="nav__divider"></li>
    <li class="nav__item">
      <a class="btn btn_round">button</a>
    </li>
  </ul>
</div>`,
      params: [
        { name: '$titlebar-spacing', type: 'array', default: '0' },
        { name: '$titlebar-padding', type: 'array', default: '0' },
        { name: '$titlebar-style', type: 'map' },
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
