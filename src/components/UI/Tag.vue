<template>
  <section data-container>
    <div data-grid="is-end">
      <div data-col="8">
        <div
          class="has-margin-bottom-5"
          v-for="(group, index) in sectionGroups"
          :key="index"
          :id="'#scroll-to-' + group.id"
        >
          <h2 v-text="group.title"></h2>
          <p v-text="group.summary"></p>
          <div class="spacer"></div>
          <DocTab v-for="(item, index) in group.groupItems" :key="index">
            <div slot="title">
              <h3 class="is-h4" v-text="item.name"></h3>
            </div>
            <div
              slot="preview"
              :class="item.previewStyle || 'is-theme-lightest'"
              class="has-padding-2 has-radius"
              v-html="item.preview"
            ></div>

            <div slot="markup">
              <pre v-highlightjs="item.markup"><code class="html"></code></pre>
            </div>
            <div slot="config" v-if="item.config">
              <pre v-highlightjs="item.config"><code class="scss"></code></pre>
            </div>
          </DocTab>
        </div>
      </div>
      <div data-col="2">
        <nav class="nav nav_stacked is-sticky" style="top: 120px;">
          <ul class="nav__items">
            <li class="nav__item" v-for="(item, index) in sectionGroups" :key="index">
              <a
                :href="'#scroll-to-' + item.id"
                class="is-kilo is-ink-light hover:is-ink-link"
              >{{item.navTitle}}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="y-space-8"></div>
  </section>
</template>

<script>
import DocTab from './../DocTab.vue';

export default {
  name: 'Tag',
  components: {
    DocTab,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: 'Tag',
          id: 'tag',
          navTitle: 'Tag',
          groupItems: [
            {
              name: 'Default Tag',
              preview: `<span class="tag">1</span>&emsp;&emsp;<a href class="btn">Button&emsp;<span class="tag">1</span></a>`,
              markup: `<span class="tag">1</span>
<a href class="btn">Button&emsp;<span class="tag">1</span></a>`,
              config: `// general tag config
$tag-font-family: $body-font;
$tag-weight: $is-bold;
$tag-padding-ratio: 1;
$tag-background: $minor;
$tag-round: false;

// default tag config
$tag-font-size: 14;
$tag-line-height: 14;
$tag-min-height: 20;
$tag-style: ();`,
              previewStyle: 'is-theme',
            },
            {
              name: 'Outlined Tag',
              preview: `<ul data-grid="is-small">
  <li data-col="is-fit" class="has-padding-bottom-3"><span class="tag">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-3"><span class="tag tag_minor">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-3"><span class="tag tag_link">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-3"><span class="tag tag_super">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-3"><span class="tag tag_highlight">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-3"><span class="tag tag_invert">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-3"><span class="tag tag_info">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-3"><span class="tag tag_error">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-3"><span class="tag tag_success">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-3"><span class="tag tag_warning">tag</span></li>
</ul>`,
              markup: ``,
              config: ``,
              previewStyle: 'is-theme',
            },
          ],
        },
        {
          title: 'Outlined Tag',
          id: 'tag_outlined',
          navTitle: 'Outlined Tag',
          groupItems: [
            {
              name: 'Outlined Tag',
              preview: `<span class="tag tag_outlined">tag</span>&emsp;<span class="tag tag_minor tag_outlined">tag</span>&emsp;<span class="tag tag_link tag_outlined">tag</span>&emsp;<span class="tag tag_super tag_outlined">tag</span>&emsp;<span class="tag tag_highlight tag_outlined">tag</span>&emsp;<span class="tag tag_invert tag_outlined">tag</span>&emsp;<span class="tag tag_info tag_outlined">tag</span>&emsp;<span class="tag tag_error tag_outlined">tag</span>&emsp;<span class="tag tag_success tag_outlined">tag</span>&emsp;<span class="tag tag_warning tag_outlined">tag</span>`,
              markup: ``,
              config: ``,
              previewStyle: 'is-theme-invert',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
</style>