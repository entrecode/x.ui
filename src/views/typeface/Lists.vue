<template>
  <section>
    <div class="has-padding-center-3">
      <h2>lists</h2>
    </div>
    <div class="nav">
      <div class="nav__item">
        <a
          @click="activeTab = 1"
          class="btn btn_clear demo-tab"
          :class="{'is-active' : activeTab === 1}"
        >default</a>
      </div>
      <div class="nav__item">
        <a
          @click="activeTab = 2"
          class="btn btn_clear demo-tab"
          :class="{'is-active' : activeTab === 2}"
        >data-grid</a>
      </div>
    </div>
    <div v-if="activeTab === 1" class="animated fadeIn">
      <div class="demo-preview has-padding-8 has-margin-bottom-5" data-flex="column center-items">
        <div class="demo-transition">
          <ul :class="elementClass">
            <li>
              <div class="well">list item</div>
            </li>
            <li>
              <div class="well">list item</div>
            </li>
            <li>
              <div class="well">list item</div>
            </li>
          </ul>
        </div>
        <div class="is-theme has-margin-top-5 has-padding-center-2 is-round is-elevated-16">
          <div class="nav">
            <div class="nav__item">
              <a
                @click="elementClass = 'is-unstyled'"
                class="btn btn_clear is-uppercase"
                :class="{'is-ink': elementClass !== 'is-unstyled'}"
              >is-unstyled</a>
            </div>
            <div class="nav__item">
              <a
                @click="elementClass = 'is-inline'"
                class="btn btn_clear is-uppercase"
                :class="{'is-ink': elementClass !== 'is-inline'}"
              >is-inline</a>
            </div>
          </div>
        </div>
      </div>
      <div data-grid="center">
        <div data-col="10@md 8@lg">
          <pre v-highlightjs="preview"><code class="html"></code></pre>
        </div>
      </div>
    </div>
    <div v-if="activeTab === 2" class="animated fadeIn">
      <div class="demo-preview has-padding-8 has-margin-bottom-5" data-flex="column center-items">
        <div class="demo-transition">
          <ul data-grid>
            <li data-col="4">
              <div class="well">list item</div>
            </li>
            <li data-col="auto">
              <div class="well">list item</div>
            </li>
            <li data-col="fit">
              <div class="well">list item</div>
            </li>
          </ul>
        </div>
      </div>
      <div data-grid="center">
        <div data-col="10@md 8@lg">
          <pre v-highlightjs="previewGrid"><code class="html"></code></pre>
        </div>
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
      elementClass: 'is-unstyled',
      preview: `<ul class="is-unstyled">
  <li>...</li>
  ...
</ul>`,
      previewGrid: `<ul data-grid>
  <li data-col>...</li>
  ...
</ul>`,
    };
  },
  watch: {
    elementClass: function(val) {
      this.preview = `<ul${val ? ' class="' + val + '"' : ''}>
  <li>...</li>
  ...
</ul>`;
    },
  },
};
</script>
