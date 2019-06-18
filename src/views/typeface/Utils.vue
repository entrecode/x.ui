
<template>
  <section class="demo-blocks-group">
    <div data-grid>
      <div data-col="8">
        <section class="has-margin-bottom-8" id="scroll-to-align">
          <h2>align</h2>
          <div class="demo-preview has-padding-8" data-flex="column center center-items">
            <div data-col="8">
              <p
                class="is-lead"
                :class="alignClass"
              >Move the needle synergy indicators collaborative consumption problem-solvers black lives matter co-create. Rubric scalable commitment, shine our work shared unit of analysis.</p>
            </div>
            <div class="is-theme has-margin-top-5 has-padding-center-2 is-round is-elevated-16">
              <div class="nav">
                <div class="nav__item">
                  <a
                    @click="alignClass = 'align-left'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': alignClass !== 'align-left'}"
                  >
                    <svg class="ixo">
                      <use xlink:href="#align-left"></use>
                    </svg>
                  </a>
                </div>
                <div class="nav__item">
                  <a
                    @click="alignClass = 'align-center'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': alignClass !== 'align-center'}"
                  >
                    <svg class="ixo">
                      <use xlink:href="#align-center"></use>
                    </svg>
                  </a>
                </div>
                <div class="nav__item">
                  <a
                    @click="alignClass = 'align-right'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': alignClass !== 'align-right'}"
                  >
                    <svg class="ixo">
                      <use xlink:href="#align-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <pre v-highlightjs="alignPreview"><code class="html"></code></pre>
        </section>

        <div class="divider"></div>
        <!-- scroll-to-font-weight -->
        <section class="has-margin-middle-8" id="scroll-to-font-weight">
          <h2>font-weight</h2>
          <div class="demo-preview has-padding-8" data-flex="column center center-items">
            <div data-col="8">
              <p
                class="is-lead"
                :class="fontWeightClass"
              >Move the needle synergy indicators collaborative consumption problem-solvers black lives matter co-create. Rubric scalable commitment, shine our work shared unit of analysis.</p>
            </div>
            <div class="is-theme has-margin-top-5 has-padding-center-2 is-round is-elevated-16">
              <div class="nav">
                <div class="nav__item">
                  <a
                    @click="fontWeightClass = 'is-light'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': fontWeightClass !== 'is-light'}"
                  >
                    <svg class="ixo">
                      <use xlink:href="#is-light"></use>
                    </svg>
                  </a>
                </div>
                <div class="nav__item">
                  <a
                    @click="fontWeightClass = 'is-normal'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': fontWeightClass !== 'is-normal'}"
                  >
                    <svg class="ixo">
                      <use xlink:href="#is-normal"></use>
                    </svg>
                  </a>
                </div>
                <div class="nav__item">
                  <a
                    @click="fontWeightClass = 'is-medium'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': fontWeightClass !== 'is-medium'}"
                  >
                    <svg class="ixo">
                      <use xlink:href="#is-medium"></use>
                    </svg>
                  </a>
                </div>
                <div class="nav__item">
                  <a
                    @click="fontWeightClass = 'is-bold'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': fontWeightClass !== 'is-bold'}"
                  >
                    <svg class="ixo">
                      <use xlink:href="#is-bold"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <pre v-highlightjs="fontWeightPreview"><code class="html"></code></pre>
          <params-table :params="fontWeightParams" title="core params"></params-table>
        </section>

        <div class="divider"></div>

        <!-- scroll-to-font-family -->
        <section class="has-margin-middle-8" id="scroll-to-font-family">
          <h2>font-family</h2>
          <div class="demo-preview has-padding-8" data-flex="column center center-items">
            <div data-col="8">
              <div class="is-h1" :class="fontFamilyClass">our work shared unit of analysis.</div>
            </div>
            <div class="is-theme has-margin-top-5 has-padding-center-2 is-round is-elevated-16">
              <div class="nav">
                <div class="nav__item">
                  <a
                    @click="fontFamilyClass = 'is-body-font'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': fontFamilyClass !== 'is-body-font'}"
                  >body-font</a>
                </div>
                <div class="nav__item">
                  <a
                    @click="fontFamilyClass = 'is-headings-font'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': fontFamilyClass !== 'is-headings-font'}"
                  >headings-font</a>
                </div>
                <div class="nav__item">
                  <a
                    @click="fontFamilyClass = 'is-monospace-font'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': fontFamilyClass !== 'is-monospace-font'}"
                  >monospace-font</a>
                </div>
              </div>
            </div>
          </div>
          <pre v-highlightjs="fontFamilyPreview"><code class="html"></code></pre>
          <params-table :params="fontFamilyParams" title="core params"></params-table>
        </section>

        <div class="divider"></div>

        <section class="has-margin-middle-8" id="scroll-to-text-transform">
          <h2>text-transform</h2>
          <div class="demo-preview has-padding-8" data-flex="column center center-items">
            <div data-col="8">
              <p
                class="is-lead"
                :class="textTransformClass"
              >Move the needle synergy indicators collaborative consumption problem-solvers black lives matter co-create. Rubric scalable commitment, shine our work shared unit of analysis.</p>
            </div>
            <div class="is-theme has-margin-top-5 has-padding-center-2 is-round is-elevated-16">
              <div class="nav">
                <div class="nav__item">
                  <a
                    @click="textTransformClass = 'is-lowercase'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': textTransformClass !== 'is-lowercase'}"
                  >
                    <svg class="ixo">
                      <use xlink:href="#lowercase"></use>
                    </svg>
                  </a>
                </div>
                <div class="nav__item">
                  <a
                    @click="textTransformClass = 'is-uppercase'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': textTransformClass !== 'is-uppercase'}"
                  >
                    <svg class="ixo">
                      <use xlink:href="#uppercase"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <pre v-highlightjs="textTransformPreview"><code class="html"></code></pre>
        </section>

        <div class="divider"></div>

        <section class="has-margin-middle-8" id="scroll-to-word-wrap">
          <h2>word-wrap</h2>
          <div class="demo-preview has-padding-8" data-flex="column center center-items">
            <div data-col="8">
              <div class="is-clipped">
                <div
                  class="is-lead"
                  :class="wordWrapClass"
                >Move the needle synergy indicators collaborative consumption problem-solvers black lives matter co-create. Rubric scalable commitment, shine our work shared unit of analysis.</div>
              </div>
            </div>
            <div class="is-theme has-margin-top-5 has-padding-center-2 is-round is-elevated-16">
              <div class="nav">
                <div class="nav__item">
                  <a
                    @click="wordWrapClass = 'is-nowrap'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': wordWrapClass !== 'is-nowrap'}"
                  >is-nowrap</a>
                </div>
                <div class="nav__item">
                  <a
                    @click="wordWrapClass = 'is-ellipsis'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': wordWrapClass !== 'is-ellipsis'}"
                  >is-ellipsis</a>
                </div>
                <div class="nav__item">
                  <a
                    @click="wordWrapClass = 'is-hyphen'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': wordWrapClass !== 'is-hyphen'}"
                  >is-hyphen</a>
                </div>
                <div class="nav__item">
                  <a
                    @click="wordWrapClass = 'is-hyphen-block'"
                    class="btn btn_clear is-uppercase"
                    :class="{'is-ink': wordWrapClass !== 'is-hyphen-block'}"
                  >is-hyphen-block</a>
                </div>
              </div>
            </div>
          </div>
          <pre v-highlightjs="wordWrapPreview"><code class="html"></code></pre>
        </section>
      </div>
      <div data-col="4">
        <ul class="nav nav_stacked is-sticky" style="top: 120px;">
          <li class="nav__item">
            <a href="#scroll-to-align" class="is-kilo is-ink hover:is-ink-link">align</a>
          </li>
          <li class="nav__item">
            <a href="#scroll-to-font-weight" class="is-kilo is-ink hover:is-ink-link">font-weight</a>
          </li>
          <li class="nav__item">
            <a href="#scroll-to-font-family" class="is-kilo is-ink hover:is-ink-link">font-family</a>
          </li>
          <li class="nav__item">
            <a
              href="#scroll-to-text-transform"
              class="is-kilo is-ink hover:is-ink-link"
            >text-transform</a>
          </li>
          <li class="nav__item">
            <a href="#scroll-to-word-wrap" class="is-kilo is-ink hover:is-ink-link">word-wrap</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';

export default {
  name: 'TypoModifier',
  components: {
    ParamsTable,
  },
  data: () => {
    return {
      alignClass: 'align-left',
      alignPreview: `<p class="align-left">...</p>`,
      wordWrapClass: 'is-nowrap',
      wordWrapPreview: `<div class="is-nowrap">...</div>`,
      textTransformClass: 'is-uppercase',
      textTransformPreview: `<div class="is-uppercase">...</div>`,
      fontWeightClass: 'is-light',
      fontWeightPreview: `<p class="is-light">...</p>`,
      fontWeightParams: [
        {
          name: '$is-light',
          type: 'string',
          default: 'lighter',
        },
        {
          name: '$is-normal',
          type: 'string',
          default: 'normal',
        },
        {
          name: '$is-medium',
          type: 'string',
          default: 'bold',
        },
        {
          name: '$is-bold',
          type: 'string',
          default: 'bolder',
        },
      ],
      fontFamilyClass: 'is-body-font',
      fontFamilyPreview: `<div class="is-body-font">...</div>`,
      fontFamilyParams: [
        {
          name: '$body-font-family',
          type: 'string',
          default: 'sans-serif',
        },
        {
          name: '$headings-font-family',
          type: 'string',
          default: 'sans-serif',
        },
        {
          name: '$monospace-font',
          type: 'string',
          default: 'monospace',
        },
      ],
    };
  },
  watch: {
    textTransformClass: function(val) {
      this.textTransformPreview = `<div${val ? ' class="' + val + '"' : ''}>...</div>`;
    },
    alignClass: function(val) {
      this.alignPreview = `<p${val ? ' class="' + val + '"' : ''}>...</p>`;
    },
    fontWeightClass: function(val) {
      this.fontWeightPreview = `<p${val ? ' class="' + val + '"' : ''}>...</p>`;
    },
    fontFamilyClass: function(val) {
      this.fontFamilyPreview = `<div${val ? ' class="' + val + '"' : ''}>...</div>`;
    },
    wordWrapClass: function(val) {
      this.wordWrapPreview = `<div${val ? ' class="' + val + '"' : ''}>...</div>`;
    },
  },
};
</script>

/* 
sectionGroups: [
        {
          config: `
// link styles
$link-color: $link;
$link-decoration: none;
$link-weight: $is-normal; // normal
$link-style: ();

$link-hover-color: set-hover($link-hover);
$link-hover-decoration: $link-decoration;
$link-hover-style: ();

// for <small> elements
$inline-small-style: ();

// <mark> style
$mark-color: $highlight-contrast;
$mark-background: $highlight;
$mark-style: ();`,
        },
      ], */