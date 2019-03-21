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
              class="has-padding-2 align-center has-radius"
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
              <a :href="'#scroll-to-' + item.id" class="is-kilo is-ink-light hover:is-ink-link">{{item.navTitle}}</a>
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
  name: 'Bubble',
  components: {
    DocTab,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: 'Bubble',
          id: 'bubble',
          navTitle: 'Bubble',
          summary: 'used for numbers and as an alternative to tags.',
          groupItems: [
            {
              name: 'Default Bubble',
              preview: `<span class="bubble">1</span>&emsp;&emsp;<a href class="btn">Button&emsp;<span class="bubble">1</span></a>`,
              markup: `<span class="bubble">1</span>
<a href class="btn">Button&emsp;<span class="bubble">1</span></a>`,
              config: `$bubble-background: $minor;

$bubble-padding-ratio: 1;

$bubble-font-size: 14;
$bubble-line-height: 16;
$bubble-min-height: 28;
$bubble-weight: $is-bold;
$bubble-style: ();

$bubble-round: true;

$bubble-radius: 4;
$bubble-small-radius: $bubble-radius;
$bubble-big-radius: $bubble-radius;`,
              previewStyle : 'is-theme',
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