<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>xui-accordion</h1>
      </div>
      <div class="nav">
        <div class="nav__item">
          <a
            @click="activeTab = 1"
            class="btn btn_clear demo-tab"
            :class="{ 'is-active': activeTab === 1 }"
          >single</a>
        </div>
        <div class="nav__item">
          <a
            @click="activeTab = 2"
            class="btn btn_clear demo-tab"
            :class="{ 'is-active': activeTab === 2 }"
          >multiple</a>
        </div>
        <div class="nav__item">
          <a
            @click="activeTab = 3"
            class="btn btn_clear demo-tab"
            :class="{ 'is-active': activeTab === 3 }"
          >with handle</a>
        </div>
        <div class="nav__item">
          <a
            @click="activeTab = 4"
            class="btn btn_clear demo-tab"
            :class="{ 'is-active': activeTab === 4 }"
          >combined</a>
        </div>
        <div class="nav__item">
          <a
            @click="activeTab = 5"
            class="btn btn_clear demo-tab"
            :class="{ 'is-active': activeTab === 5 }"
          >combined</a>
        </div>
      </div>
      <div v-show="activeTab === 1">
        <div class="demo-preview is-padding-8" data-flex="center">
          <div class="is-padding-center-5 is-radius" data-col="10" v-html="previewBasic"></div>
        </div>
        <div class="spacer"></div>
        <pre v-highlightjs="previewBasic"><code class="html"></code></pre>
      </div>
      <div v-show="activeTab === 2">
        <div class="demo-preview is-padding-8" data-flex="center">
          <div class="is-padding-center-5 is-radius" data-col="10" v-html="multiplePreview"></div>
        </div>
        <div class="spacer"></div>
        <pre v-highlightjs="multiplePreview"><code class="html"></code></pre>
      </div>
      <div v-show="activeTab === 3">
        <div class="demo-preview is-padding-8" data-flex="center">
          <div class="is-padding-center-5 is-radius" data-col="10" v-html="handlePreview"></div>
        </div>
        <div class="spacer"></div>
        <pre v-highlightjs="handlePreview"><code class="html"></code></pre>
      </div>
      <div v-show="activeTab === 4">
        <div class="demo-preview is-padding-8" data-flex="center">
          <div class="is-padding-center-5 is-radius" data-col="10" v-html="combinedPreview"></div>
        </div>
        <div class="spacer"></div>
        <pre v-highlightjs="combinedPreview"><code class="html"></code></pre>
      </div>
      <div v-show="activeTab === 5">
        <div class="demo-preview is-padding-8" data-flex="center">
          <div class="is-padding-center-5 is-radius" data-col="10" v-html="combinedPreviewAlt"></div>
        </div>
        <div class="spacer"></div>
        <pre v-highlightjs="combinedPreviewAlt"><code class="html"></code></pre>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      activeTab: 1,
      previewBasic: `<div class="xui-accordion">
  <input
    type="radio"
    name="xuiToggleGroup"
    id="toggleList1"
    checked="checked"
  />
  <label for="toggleList1" class="xui-accordion__handle">
    <div class="is-mega is-ink-link is-padding-2 align-center">click to toggle</div>
  </label>
  <div class="xui-accordion__target">
    <div class="well align-center">here i am</div>
  </div>
</div>
<div class="xui-accordion">
  <input type="radio" name="xuiToggleGroup" id="toggleList2" />
  <label for="toggleList2" class="xui-accordion__handle">
    <div class="is-mega is-ink-link is-padding-2 align-center">click to toggle</div>
  </label>
  <div class="xui-accordion__target">
    <div class="well align-center">here i am</div>
  </div>
</div>
<div class="xui-accordion">
  <input type="radio" name="xuiToggleGroup" id="toggleList3" />
  <label for="toggleList3" class="xui-accordion__handle">
    <div class="is-mega is-ink-link is-padding-2 align-center">click to toggle</div>
  </label>
  <div class="xui-accordion__target">
    <div class="well align-center">here i am</div>
  </div>
</div>`,
      multiplePreview: `<div class="xui-accordion">
  <input
    type="checkbox"
    id="toggleListMulti1"
    checked="checked"
  />
  <label for="toggleListMulti1" class="xui-accordion__handle">
    <div class="is-mega is-ink-link is-padding-2 align-center">click to toggle</div>
  </label>
  <div class="xui-accordion__target">
    <div class="well align-center">here i am</div>
  </div>
</div>
<div class="xui-accordion">
  <input type="checkbox" id="toggleListMulti2" />
  <label for="toggleListMulti2" class="xui-accordion__handle">
    <div class="is-mega is-ink-link is-padding-2 align-center">click to toggle</div>
  </label>
  <div class="xui-accordion__target">
    <div class="well align-center">here i am</div>
  </div>
</div>
<div class="xui-accordion">
  <input type="checkbox" id="toggleListMulti3" />
  <label for="toggleListMulti3" class="xui-accordion__handle">
    <div class="is-mega is-ink-link is-padding-2 align-center">click to toggle</div>
  </label>
  <div class="xui-accordion__target">
    <div class="well align-center">here i am</div>
  </div>
</div>`,
      handlePreview: `<div class="xui-accordion is-padding-3">
  <input
    type="checkbox"
    id="toggleListAdvanced1"
    checked="checked"
  />
  <label for="toggleListAdvanced1" data-flex="center-items" class="xui-accordion__handle">
    <a class="is-mega">Effective altruism</a>
    <div class="flex-space"></div>
    <div class="btn btn_clear">
      <svg class="ixo is-visible-collapsed"><use xlink:href="#expand-horizontal"></use></svg>
      <svg class="ixo is-hidden-collapsed"><use xlink:href="#shrink-horizontal"></use></svg>
    </div>
  </label>
  <div class="xui-accordion__target">
    Effective altruism collaborate social return on investment social enterprise inclusion sustainable. 
  </div>
</div>
`,
      combinedPreview: `
<div class="xui-accordion is-padding-3">
  <input
    type="checkbox"
    id="toggleListAdvanced3"
  />
  <label for="toggleListAdvanced3" class="xui-accordion__handle xui-list-item">
    <div class="xui-list-item__start">
      <div class="avatar avatar_square avatar_big">
        <img src="avatar.png">
      </div>
    </div>
    <div class="xui-list-item__label">
      <a class="is-mega">Effective altruism</a>
    </div>
    <div class="xui-list-item__end">
      <div class="btn btn_clear">
        <svg class="ixo is-visible-collapsed"><use xlink:href="#expand-horizontal"></use></svg>
        <svg class="ixo is-hidden-collapsed"><use xlink:href="#shrink-horizontal"></use></svg>
      </div>
    </div>
  </label>
  <div class="xui-accordion__target">
    Effective altruism collaborate social return on investment social enterprise inclusion sustainable. 
  </div>
</div>`,
      combinedPreviewAlt: `
<div class="xui-accordion card is-padding-2">
  <input
    type="checkbox"
    id="toggleListAdvanced4"
  />
  <label for="toggleListAdvanced4" class="xui-accordion__handle xui-list-item">
    <div class="xui-list-item__start" data-flex-item="start">
      <div class="avatar avatar_square avatar_big">
        <img src="avatar.png">
      </div>
    </div>
    <div class="xui-list-item__label">
      <a class="is-mega">Effective altruism</a>
      <small class="is-hidden-collapsed">Effective altruism collaborate social return on investment social enterprise inclusion sustainable.</small>
    </div>
  </label>
</div>`,
    };
  },
};
</script>

<style scoped lang="scss"></style>
