<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>xui-list</h1>
      </div>
      <div class="nav">
        <div class="nav__item">
          <a
            @click="activeTab = 1"
            class="btn btn_clear demo-tab"
            :class="{ 'is-active': activeTab === 1 }"
          >basic</a>
        </div>
        <div class="nav__item">
          <a
            @click="activeTab = 2"
            class="btn btn_clear demo-tab"
            :class="{ 'is-active': activeTab === 2 }"
          >group</a>
        </div>
        <div class="nav__item">
          <a
            @click="activeTab = 3"
            class="btn btn_clear demo-tab"
            :class="{ 'is-active': activeTab === 3 }"
          >example</a>
        </div>
      </div>
      <div v-show="activeTab === 1">
        <div class="demo-preview is-padding-8">
          <div class="is-theme is-padding-center-5 is-radius" v-html="previewBasic"></div>
        </div>
        <div class="spacer"></div>
        <pre v-highlightjs="previewBasic"><code class="html"></code></pre>
      </div>
      <div v-show="activeTab === 2">
        <div class="demo-preview is-padding-8">
          <div class="is-theme is-padding-center-5 is-radius" v-html="previewGroup"></div>
        </div>
        <div class="spacer"></div>
        <pre v-highlightjs="previewGroup"><code class="html"></code></pre>
      </div>
      <div v-show="activeTab === 3">
        <div class="demo-preview is-padding-8">
          <div class="is-theme is-padding-center-5 is-radius" v-html="previewExample"></div>
        </div>
        <div class="spacer"></div>
        <pre v-highlightjs="previewExample"><code class="html"></code></pre>
      </div>
      <div class="spacer"></div>
      <params-table :params="paramsGroup" title="group params"></params-table>
      <div class="spacer"></div>
      <params-table :params="paramsGroupHeader" title="group-header params"></params-table>
      <div class="spacer"></div>
      <params-table :params="paramsList" title="list params"></params-table>
      <div class="spacer"></div>
      <params-table :params="paramsListItem" title="list-item params"></params-table>
      <div class="spacer"></div>
      <requires-list :requires="requires"></requires-list>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
export default {
  components: {
    ParamsTable,
  },
  data: () => {
    return {
      activeTab: 1,
      requires: [
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
      ],
      paramsGroup: [
        {
          name: '$xui-list-group-background',
          type: 'color',
          default: 'none',
        },
        {
          name: '$xui-list-group-padding',
          type: 'array',
          default: '0',
        },
        {
          name: '$xui-list-group-spacing',
          type: 'array',
          default: '0 0 16',
        },
        {
          name: '$xui-list-group-radius',
          type: 'number',
          default: '0',
        },
        {
          name: '$xui-list-group-style',
          type: 'map',
          default: '',
        },
      ],
      paramsGroupHeader: [
        {
          name: '$xui-list-group-header-background',
          type: 'color',
          default: 'none',
        },
        {
          name: '$xui-list-group-header-color',
          type: 'color',
          default: 'inherit',
        },
        {
          name: '$xui-list-group-header-padding',
          type: 'array',
          default: '0',
        },
        {
          name: '$xui-list-group-header-spacing',
          type: 'array',
          default: '0 0 16',
        },
        {
          name: '$xui-list-group-header-radius',
          type: 'number',
          default: '0',
        },
        {
          name: '$xui-list-group-header-style',
          type: 'map',
          default: '',
        },
      ],
      paramsList: [
        {
          name: '$xui-list-background',
          type: 'color',
          default: 'none',
        },
        {
          name: '$xui-list-color',
          type: 'color',
          default: 'inherit',
        },
        {
          name: '$xui-list-padding',
          type: 'array',
          default: '0',
        },
        {
          name: '$xui-list-spacing',
          type: 'array',
          default: '0 0 16',
        },
        {
          name: '$xui-list-radius',
          type: 'number',
          default: '0',
        },
        {
          name: '$xui-list-style',
          type: 'map',
          default: '',
        },
      ],
      paramsListItem: [
        {
          name: '$xui-list-item-background',
          type: 'color',
          default: 'transparent',
        },
        {
          name: '$xui-list-item-color',
          type: 'color',
          default: 'inherit',
        },
        {
          name: '$xui-list-item-padding',
          type: 'array',
          default: '8',
        },
        {
          name: '$xui-list-item-spacing',
          type: 'array',
          default: '0 0 16',
        },
        {
          name: '$xui-list-item-gutter',
          type: 'number',
          default: '$base-spacing',
        },
        {
          name: '$xui-list-item-radius',
          type: 'number',
          default: '4',
        },
        {
          name: '$xui-list-item-style',
          type: 'map',
          default: '',
        },
        {
          name: '$xui-list-item-hover-background',
          type: 'color',
          default: '$xui-list-item-background',
        },
        {
          name: '$xui-list-item-hover-color',
          type: 'color',
          default: '$xui-list-item-color',
        },
        {
          name: '$xui-list-item-hover-style',
          type: 'map',
          default: '',
        },
        {
          name: '$xui-list-item-active-background',
          type: 'color',
          default: '$xui-list-item-hover-background',
        },
        {
          name: '$xui-list-item-active-color',
          type: 'color',
          default: '$xui-list-item-hover-color',
        },
        {
          name: '$xui-list-item-active-style',
          type: 'map',
          default: '',
        },
      ],
      previewBasic: `<div class="xui-list">
  <div class="xui-list-item">
    <div class="xui-list-item__start">
      <div class="avatar avatar_square avatar_big">
        <img src="avatar.png">
      </div>
    </div>
    <div class="xui-list-item__label">
      <h2>Itemtitle</h2>
    </div>
    <div class="xui-list-item__end">
      <a class="btn">
        <svg class="ixo"><use xlink:href="#fire"></use></svg>
      </a>
    </div>
  </div>
</div>`,
      previewGroup: `<div class="xui-list-group">
  <div class="xui-list-header">
    <h2 class="is-kilo">list header</h2>
  </div>
  <div class="xui-list">
    <div class="xui-list-item">
      <div class="xui-list-item__start">
        <div class="avatar">
          <img src="avatar.png" />
        </div>
      </div>
      <div class="xui-list-item__label">
        <h3 class="is-kilo">Itemtitle</h3>
      </div>
      <div class="xui-list-item__end">
        <a class="btn btn_clear btn_square">
          <svg class="ixo"><use xlink:href="#chevron-right"></use></svg>
        </a>
      </div>
    </div>
    <div class="xui-list-item">
      <div class="xui-list-item__start">
        <div class="avatar">
          <img src="avatar.png" />
        </div>
      </div>
      <div class="xui-list-item__label">
        <h3 class="is-kilo">Itemtitle</h3>
      </div>
      <div class="xui-list-item__end">
        <a class="btn btn_clear btn_square">
          <svg class="ixo"><use xlink:href="#chevron-right"></use></svg>
        </a>
      </div>
    </div>
    <div class="xui-list-item">
      <div class="xui-list-item__start">
        <div class="avatar">
          <img src="avatar.png" />
        </div>
      </div>
      <div class="xui-list-item__label">
        <h3 class="is-kilo">Itemtitle</h3>
      </div>
      <div class="xui-list-item__end">
        <a class="btn btn_clear btn_square">
          <svg class="ixo"><use xlink:href="#chevron-right"></use></svg>
        </a>
      </div>
    </div>
  </div>
</div>`,
      previewExample: `<div class="xui-list-item">
    <div class="xui-list-item__start" data-col="3">
      <div class="tag">tag</div>
    </div>
    <div class="xui-list-item__label">
      <h2>Itemtitle</h2>
    </div>
  </div>
</div>`,
    };
  },
};
</script>

<style scoped lang="scss"></style>
