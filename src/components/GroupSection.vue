<template>
  <section data-container>
    <div data-grid="is-center">
      <div data-col="8">
        <div
          class="has-margin-bottom-8"
          v-for="(group, index) in groups"
          :key="index"
          :id="'#scroll-to-' + group.id"
        >
          <h2 v-text="group.title" v-if="group.title"></h2>
          <div v-html="group.summary" v-if="group.summary"></div>
          <DocTab v-for="(item, index) in group.groupItems" :key="index" :markup-col="item.markupCol" :preview-col="item.previewCol">
            <div slot="title">
              <h3 class="is-h4" v-if="item.title" v-text="item.title"></h3>
              <div v-html="item.summary" v-if="item.summary"></div>
            </div>
            <div slot="preview" :class="item.previewStyle" v-html="item.preview"></div>

            <div slot="markup">
              <pre v-highlightjs="item.markup || item.preview"><code class="html"></code></pre>
            </div>
            <div slot="config" v-if="item.config">
              <pre v-highlightjs="item.config"><code class="scss"></code></pre>
            </div>
          </DocTab>
        </div>
      </div>
      <div data-col="2">
        <ul class="nav nav_stacked is-sticky" style="top: 120px;">
          <li class="nav__item" v-if="sectionTitle">
            <h2 v-text="sectionTitle"></h2>
          </li>
          <li class="nav__item" v-for="(item, index) in groups" :key="index">
            <a
              :href="'#scroll-to-' + item.id"
              v-smooth-scroll
              class="is-kilo is-ink-light hover:is-ink-link"
            >{{item.navTitle}}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import DocTab from './DocTab.vue';

export default {
  name: 'Section',
  components: {
    DocTab,
  },
  props: ['groups', 'sectionTitle'],
};
</script>

<style scoped lang="scss">
</style>
