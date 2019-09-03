<template>
  <section>
    <div data-grid>
      <div data-col="10 8@xl">
        <div class="titlebar">
          <h1>headings</h1>
        </div>
        <div class="demo-preview is-padding-8" data-flex="column center-items">
          <div class="typo-demo" v-html="preview"></div>
          <div class="is-theme is-margin-top-5 is-padding-center-2 is-round is-elevated-16">
            <div class="nav">
              <div class="nav__item">
                <a
                  @click="[headingStyle = 'is-h1', headingsElement = 'h1']"
                  class="btn btn_clear is-uppercase"
                  :class="{'is-ink': headingStyle !== 'is-h1'}"
                >h1</a>
              </div>
              <div class="nav__item">
                <a
                  @click="[headingStyle = 'is-h2', headingsElement = 'h2']"
                  class="btn btn_clear is-uppercase"
                  :class="{'is-ink': headingStyle !== 'is-h2'}"
                >h2</a>
              </div>
              <div class="nav__item">
                <a
                  @click="[headingStyle = 'is-h3', headingsElement = 'h3']"
                  class="btn btn_clear is-uppercase"
                  :class="{'is-ink': headingStyle !== 'is-h3'}"
                >h3</a>
              </div>
              <div class="nav__item">
                <a
                  @click="[headingStyle = 'is-h4', headingsElement = 'h4']"
                  class="btn btn_clear is-uppercase"
                  :class="{'is-ink': headingStyle !== 'is-h4'}"
                >h4</a>
              </div>
              <div class="nav__item">
                <a
                  @click="[headingStyle = 'is-h5', headingsElement = 'h5']"
                  class="btn btn_clear is-uppercase"
                  :class="{'is-ink': headingStyle !== 'is-h5'}"
                >h5</a>
              </div>
              <div class="nav__item">
                <a
                  @click="[headingStyle = 'is-h6', headingsElement = 'h6']"
                  class="btn btn_clear is-uppercase"
                  :class="{'is-ink': headingStyle !== 'is-h6'}"
                >h6</a>
              </div>
              <div class="nav__divider"></div>
              <div class="nav__item">
                <a
                  @click="[headingStyle = 'is-giga', headingsElement = 'h2']"
                  class="btn btn_clear is-uppercase"
                  :class="{'is-ink': headingStyle !== 'is-giga'}"
                >giga</a>
              </div>
              <div class="nav__item">
                <a
                  @click="[headingStyle = 'is-mega', headingsElement = 'h2']"
                  class="btn btn_clear is-uppercase"
                  :class="{'is-ink': headingStyle !== 'is-mega'}"
                >mega</a>
              </div>
              <div class="nav__item">
                <a
                  @click="[headingStyle = 'is-kilo', headingsElement = 'h2']"
                  class="btn btn_clear is-uppercase"
                  :class="{'is-ink': headingStyle !== 'is-kilo'}"
                >kilo</a>
              </div>
            </div>
          </div>
        </div>
        <div class="spacer"></div>
        <pre v-highlightjs="markup"><code class="html"></code></pre>
        <div class="spacer"></div>
        <params-table :params="coreParams" title="core params"></params-table>
        <div class="spacer"></div>
        <params-table :params="params"></params-table>
        <div class="spacer"></div>
        <requires-list :requires="requires"></requires-list>
      </div>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';

export default {
  name: 'Headings',
  components: {
    RequiresList,
    ParamsTable,
  },
  data: () => {
    return {
      preview: '<h1 class="is-h1">we must stand up</h1>',
      markup: `<h1>...</h1>
<div class="is-h1">...</div>`,
      headingStyle: 'is-h1',
      headingsElement: 'h1',
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'get-font-size()', type: 'mixin', link: '#scroll-to-get-font-size' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
      ],
      coreParams: [
        {
          name: '$base-font-size',
          type: 'number',
          default: '16',
        },
        {
          name: '$base-line-height',
          type: 'number',
          default: '1.4',
        },
      ],
      params: [
        {
          name: '$headings-font-family',
          type: 'string',
          default: 'sans-serif',
        },
        {
          name: '$headings-line-height',
          type: 'number',
          default: '$base-line-height // 1.4',
        },
        {
          name: '$headings-weight',
          type: 'string',
          default: '$is-bold // bolder',
        },
        {
          name: '$headings-style',
          type: 'map',
        },
        {
          name: '$headings-inline-small-style',
          description: 'for inline &lt;small&gt; elements ',
          type: 'map',
        },
        {
          name: '$h1-style',
          type: 'map',
        },
        {
          name: '$h2-style',
          type: 'map',
        },
        {
          name: '$h3-style',
          type: 'map',
        },
        {
          name: '$h4-style',
          type: 'map',
        },
        {
          name: '$h5-style',
          type: 'map',
        },
        {
          name: '$h6-style',
          type: 'map',
        },
        {
          name: '$giga-style',
          type: 'map',
        },
        {
          name: '$mega-style',
          type: 'map',
        },
        {
          name: '$kilo-style',
          type: 'map',
        },
        {
          name: '$_headings-vertical-rhythm',
          type: 'number',
          default: 'round($headings-line-height * $base-font-size) // 22',
        },
        {
          name: '$headings-spacing-unit',
          type: 'enum',
          default: '$base-spacing-unit // xrem',
        },
        {
          name: '$h1-spacing',
          type: 'array',
          default: '0 0 ($_headings-vertical-rhythm * 2) 0',
        },
        {
          name: '$h2-spacing',
          type: 'array',
          default: '0 0 $_headings-vertical-rhythm 0',
        },
        {
          name: '$h3-spacing',
          type: 'array',
          default: '$h2-spacing',
        },
        {
          name: '$h4-spacing',
          type: 'array',
          default: '$h3-spacing',
        },
        {
          name: '$h5-spacing',
          type: 'array',
          default: '0 0 ($_headings-vertical-rhythm / 2) 0',
        },
        {
          name: '$h6-spacing',
          type: 'array',
          default: '$h5-spacing',
        },
        {
          name: '$giga-spacing',
          type: 'array',
          default: '($_headings-vertical-rhythm / 2) 0',
        },
        {
          name: '$mega-spacing',
          type: 'array',
          default: '$giga-spacing',
        },
        {
          name: '$kilo-spacing',
          type: 'array',
          default: '$mega-spacing',
        },
      ],
    };
  },
  watch: {
    headingStyle: function(val) {
      const compare = ['is-giga', 'is-mega', 'is-kilo'];
      if (compare.indexOf(val) === -1) {
        this.markup = `<${this.headingsElement}>...</${this.headingsElement}>
<div class="${val}">...</div>`;
      } else {
        this.markup = `<${this.headingsElement} class="${val}">...</${this.headingsElement}>
<div class="${val}">...</div>`;
      }
      this.preview = `<${this.headingsElement} class="${val}">we must stand up</${this.headingsElement}>`;
    },
  },
};
</script>

<style type="scss">
</style>
</style>