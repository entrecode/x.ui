<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>paragraphs</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="column center center-items">
        <div class="typo-demo demo-transition" data-col="8@md">
          <p :class="paragraphClass">
            Overcome injustice justice, her body her rights gender rights silo correlation vibrant. Empower communities
            engaging, low-hanging fruit, catalyze citizen-centered disrupt. Social intrapreneurship collective impact;
            greenwashing benefit corporation innovation white paper, innovate, blended.
          </p>
        </div>
        <div class="is-theme is-margin-top-5 is-padding-center-2 is-radius is-elevated-16">
          <div class="nav">
            <div class="nav__item">
              <a
                @click="paragraphClass = ''"
                class="btn btn_clear"
                :class="{ 'is-ink': paragraphClass !== '' }"
              >default</a>
            </div>
            <div class="nav__item">
              <a
                @click="paragraphClass = 'is-lead'"
                class="btn btn_clear"
                :class="{ 'is-ink': paragraphClass !== 'is-lead' }"
              >is-lead</a>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="preview"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="coreParams" title="core params"></params-table>
      <params-table :params="paragraphParams" title="paragraph params"></params-table>
      <params-table :params="leadParams" title="lead params"></params-table>
      <requires-list :requires="requires"></requires-list>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';

export default {
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      paragraphClass: '',
      preview: `<p>Overcome injustice justice, her body her rights gender rights silo correlation 
vibrant. Empower communities engaging, low-hanging fruit, catalyze citizen-centered disrupt. Social 
intrapreneurship collective impact; greenwashing benefit corporation innovation white paper, innovate, blended.</p>`,
      coreParams: [
        {
          name: '$body-color',
          type: 'color',
          default: '$text',
        },
        {
          name: '$body-font-family',
          type: 'string',
          default: 'sans-serif',
        },
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
        {
          name: '$_base-vertical-rhythm',
          type: 'number',
          description: 'size used for typeface spacing',
          default: 'round($base-line-height * $base-font-size) // 22',
        },
      ],
      paragraphParams: [
        {
          name: '$paragraph-weight',
          type: 'string',
          default: '$is-normal  // normal',
        },
        {
          name: '$paragraph-line-height',
          type: 'number',
          default: '$base-line-height // 1.4',
        },
        {
          name: '$paragraph-style',
          type: 'map',
        },
        {
          name: '$paragraph-spacing',
          type: 'number',
          default: '0 0 $_base-vertical-rhythm 0 // 0 0 22 0',
        },
        {
          name: '$paragraph-spacing-unit',
          type: 'enum',
          default: '$base-spacing-unit // xrem`',
        },
      ],
      leadParams: [
        {
          name: '$is-lead-weight',
          type: 'string',
          default: '$is-light // lighter',
        },
        {
          name: '$is-lead-line-height',
          type: 'number',
          default: '$paragraph-line-height // 1.4',
        },
        {
          name: '$is-lead-style',
          type: 'map',
        },
        {
          name: '$is-lead-spacing',
          type: 'number',
          default: '$paragraph-spacing // 0 0 22 0',
        },
        {
          name: '$is-lead-spacing-unit',
          type: 'enum',
          default: '$base-spacing-unit // xrem`',
        },
      ],
      requires: [
        { name: 'array-magic', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'inject-style', type: 'mixin', link: '#scroll-to-inject-style' },
        {
          name: 'get-font-size',
          type: 'mixin',
          link: '#scroll-to-get-font-size',
        },
      ],
    };
  },
  watch: {
    paragraphClass: function(val) {
      this.preview = `<p${
        val ? ' class="' + val + '"' : ''
      }>Overcome injustice justice, her body her rights gender rights silo correlation 
vibrant. Empower communities engaging, low-hanging fruit, catalyze citizen-centered disrupt. Social 
intrapreneurship collective impact; greenwashing benefit corporation innovation white paper, innovate, blended.</p>`;
    },
  },
};
</script>
