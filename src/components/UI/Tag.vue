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
          <h2 v-text="group.title" v-if="group.title"></h2>
          <p v-text="group.markup" v-if="group.markup"></p>
          <div class="spacer" v-if="group.title || group.markup"></div>
          <DocTab v-for="(item, index) in group.groupItems" :key="index">
            <div slot="title">
              <h3 class="is-h4" v-text="item.name"></h3>
            </div>
            <div slot="preview" :class="item.previewStyle" class="has-radius" v-html="item.preview"></div>

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
            },
            {
              name: 'Small Tag',
              preview: `<span class="tag tag_small">1</span>&emsp;&emsp;<a href class="btn">Button&emsp;<span class="tag tag_small">1</span></a>`,
              markup: `<span class="tag tag_small">1</span>
<a href class="btn">Button&emsp;<span class="tag tag_small">1</span></a>`,
              config: `$tag-small-font-size: 12;
$tag-small-line-height: 12;
$tag-small-min-height: 16;
$tag-small-style: ()`,
            },
            {
              name: 'Big Tag',
              preview: `<span class="tag tag_big">1</span>&emsp;&emsp;<a href class="btn">Button&emsp;<span class="tag tag_big">1</span></a>`,
              markup: `<span class="tag tag_big">1</span>
<a href class="btn">Button&emsp;<span class="tag tag_big">1</span></a>`,
              config: `$tag-big-font-size: 14;
$tag-big-line-height: 14;
$tag-big-min-height: 28;
$tag-big-style: ();`,
            },
            {
              name: 'Rounded Tag',
              preview: `<span class="tag tag_round">1</span>&emsp;&emsp;<a href class="btn">Button&emsp;<span class="tag tag_round">1</span></a>`,
              markup: `<span class="tag tag_round">1</span>
<a href class="btn">Button&emsp;<span class="tag tag_round">1</span></a>`,
              config: `$tag-radius: 2;
$tag-small-radius: $tag-radius;
$tag-big-radius: $tag-radius;`,
            },
          ],
        },
        {
          title: '',
          id: 'tag_styles',
          navTitle: 'Tag Styles',
          groupItems: [
            {
              name: 'Tag Styles',
              preview: `<ul data-grid="is-small">
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_minor">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_link">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_super">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_highlight">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_invert">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_info">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_error">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_success">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_warning">tag</span></li>
</ul>`,
              markup: `<span class="tag">tag</span>
<span class="tag tag_minor">tag</span>
<span class="tag tag_link">tag</span>
<span class="tag tag_super">tag</span>
<span class="tag tag_highlight">tag</span>
<span class="tag tag_invert">tag</span>
<span class="tag tag_info">tag</span>
<span class="tag tag_error">tag</span>
<span class="tag tag_success">tag</span>
<span class="tag tag_warning">tag</span>`,
              config: `$theme-array:(
  minor: $minor,
  link: $link,
  super: $super,
  highlight: $highlight,
  invert: $text-invert,
  info: $state-info,
  error: $state-error,
  success: $state-success,
  warning: $state-warning,
);`,
            },
          ],
        },
        {
          title: '',
          id: 'tag_outlined',
          navTitle: 'Outlined Tag',
          groupItems: [
            {
              name: 'Outlined Tag',
              preview: `<ul data-grid="is-small">
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_outlined">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_outlined tag_minor">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_outlined tag_link">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_outlined tag_super">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_outlined tag_highlight">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_outlined tag_invert">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_outlined tag_info">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_outlined tag_error">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_outlined tag_success">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_outlined tag_warning">tag</span></li>
</ul>`,
              markup: `<span class="tag tag_outlined">tag</span>
<span class="tag tag_outlined tag_minor">tag</span>
<span class="tag tag_outlined tag_link">tag</span>
<span class="tag tag_outlined tag_super">tag</span>
<span class="tag tag_outlined tag_highlight">tag</span>
<span class="tag tag_outlined tag_invert">tag</span>
<span class="tag tag_outlined tag_info">tag</span>
<span class="tag tag_outlined tag_error">tag</span>
<span class="tag tag_outlined tag_success">tag</span>
<span class="tag tag_outlined tag_warning">tag</span>`,
              config: `$tag-outlined-color: setContrast($minor);
$tag-outlined-border-color: $minor;
$tag-outlined-border-width: 1;
$tag-outlined-border-style: solid;`,
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