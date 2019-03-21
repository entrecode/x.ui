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
  name: 'ButtonGroup',
  components: {
    DocTab,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'btn-group',
          navTitle: 'Button-Group',
          summary: '',
          groupItems: [
            {
              name: 'btn-group',
              preview: `<div class="btn-group">
  <a class="btn">button</a>
  <div class="btn-group__divider"></div>
  <a class="btn btn_super">button</a>
</div>`,
              markup: `<div class="btn-group">
  <a class="btn">button</a>
  <div class="btn-group__divider"></div>
  <a class="btn btn_super">button</a>
</div>`,
              config: ``,
            },
            {
              name: 'btn-group with a dropdown',
              preview: `<div class="btn-group">
  <a class="btn">button</a>
  <div class="btn-group__divider"></div>
  <div class="dropdown" tabindex="0">
    <div class="btn"><svg class="ixo"><use xlink:href="#more-vertical"></use></svg></div>
    <div class="dropdown-options">
      ...
    </div>
  </div>
</div>`,
              markup: `<div class="btn-group">
  <a class="btn">button</a>
  <div class="btn-group__divider"></div>
  <div class="dropdown" tabindex="0">
    <div class="btn"><svg class="ixo"><use xlink:href="#more-vertical"></use></svg></div>
    <div class="dropdown-options">
      ...
    </div>
  </div>
</div>`,
              config: ``,
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
