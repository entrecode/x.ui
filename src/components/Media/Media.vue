<template>
  <section data-container class="has-margin-bottom-8">
    <div data-grid>
      <div data-col="10">
        <div id="#scroll-to-img-crop">
          <doc-tab>
            <div slot="preview">
              <div :class="cropClass" class="is-relative" style="transition: all .2s;">
                <div class="dropdown dropdown_right is-fab-ne is-absolute is-layer-1" tabindex="0">
                  <div class="tag tag_link">
                    <span v-if="cropClass === 'img-crop-1-1'">1:1</span>
                    <span v-if="cropClass === 'img-crop-3-4'">3:4</span>
                    <span v-if="cropClass === 'img-crop-4-3'">4:3</span>
                    <span v-if="cropClass === 'img-crop-16-9'">16:9</span>
                    <span v-if="cropClass === 'img-crop-golden'">golden</span>
                    <span v-if="cropClass === 'img-crop-silver'">silver</span>
                    <span v-if="cropClass === 'img-crop-ultrawide'">ultrawide</span>
                  </div>
                  <div class="dropdown-options">
                    <ul class="nav nav_stacked">
                      <li class="nav__item">
                        <a @click="cropClass = 'img-crop-1-1'" tabindex="0">1:1</a>
                      </li>
                      <li class="nav__item">
                        <a @click="cropClass = 'img-crop-3-4'" tabindex="0">3:4</a>
                      </li>
                      <li class="nav__item">
                        <a @click="cropClass = 'img-crop-4-3'" tabindex="0">4:3</a>
                      </li>
                      <li class="nav__item">
                        <a @click="cropClass = 'img-crop-16-9'" tabindex="0">16:9</a>
                      </li>
                      <li class="nav__item">
                        <a @click="cropClass = 'img-crop-golden'" tabindex="0">golden</a>
                      </li>
                      <li class="nav__item">
                        <a @click="cropClass = 'img-crop-silver'" tabindex="0">silver</a>
                      </li>
                      <li class="nav__item">
                        <a @click="cropClass = 'img-crop-ultrawide'" tabindex="0">ultrawide</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src="sample-image.jpg">
              </div>
            </div>

            <div slot="markup">
              <pre v-highlightjs="cropMarkup"><code class="html"></code></pre>
            </div>
            <div slot="config">
              <pre v-highlightjs="cropConfig"><code class="scss"></code></pre>
            </div>
          </doc-tab>
        </div>
        <div id="img-responsive" data-grid>
          <div data-col="6">
            <h3>img-responsive</h3>
            <pre v-highlightjs="responsiveMarkup"><code class="html"></code></pre>
            <div class="y-space-2"></div>
            <img src="sample-image-small.jpg" class="img-responsive">
          </div>
          <div data-col="6">
            <h3>img-full</h3>
            <pre v-highlightjs="fullMarkup"><code class="html"></code></pre>
            <div class="y-space-2"></div>
            <img src="sample-image.jpg" class="img-full">
          </div>
        </div>
      </div>
      <div data-col="2">
        <ul class="nav nav_stacked is-sticky" style="top: 120px;">
          <li class="nav__item">
            <h2>media</h2>
          </li>
          <li class="is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3">
            <small>atoms</small>
          </li>
          <li class="nav__item">
            <a href="#scroll-to-img-crop" class="is-kilo is-ink hover:is-ink-link">img-crop</a>
          </li>
          <li class="is-uppercase has-padding-2 is-headings-font is-ink-light has-margin-top-3">
            <small>Modifier</small>
          </li>
          <li class="nav__item">
            <a
              href="#scroll-to-img-responsive"
              class="is-kilo is-ink hover:is-ink-link"
            >img-responsive</a>
          </li>
          <li class="nav__item">
            <a href="#scroll-to-img-full" class="is-kilo is-ink hover:is-ink-link">img-full</a>
          </li>
          <li class="nav__item">
            <a href="#scroll-to-is-outset" class="is-kilo is-ink hover:is-ink-link">is-outset</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <blocks-group :groups="sectionGroups" section-title="media"></blocks-group> -->
  </section>
</template>

<script>
import DocTab from './../DocTab.vue';

export default {
  name: 'Media',
  components: {
    DocTab,
  },
  data: () => {
    return {
      cropClass: 'img-crop-1-1',
      cropMarkup: `<div class="img-crop-1-1">
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-3-4">
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-4-3">
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-16-9">
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-golden">
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-silver">
  <img src="sample-image.jpg" />
</div>
<div class="img-crop-ultrawide">
  <img src="sample-image.jpg" />
</div>`,
      cropConfig: `$img-crop-ratio: (
  '1-1': (1,1,),
  '3-4': (3,4,),
  '4-3': (4,3,),
  '16-9': (16,9,),
  'golden': (1.618,1,),
  'silver': (2.414,1,),
  'ultrawide': (3.6,1,
);`,
      responsiveMarkup:'<img src="..." class="img-responsive" />',
      fullMarkup:'<img src="..." class="img-full" />',
      sectionGroups: [
        {
          title: 'is-outset',
          type: 'modifier',
          id: 'is-outset',
          navTitle: 'is-outset',
          groupItems: [
            {
              preview: `<div class="is-outset is-outset_full"><div class="img-crop-silver"><div class="tag img-crop-tag">is-outset_full</div><img src="sample-image.jpg"></div></div> 
<p class="is-lead is-hyphen-block">Move the needle, progress thought partnership innovate white paper but thought provoking do-gooder. Technology humanitarian catalyze; invest green space. Impact investing segmentation but paradigm mobilize.</p>
<div class="is-outset is-outset_left" data-col="8"><div class="img-crop-4-3"><div class="tag img-crop-tag">is-outset_left</div><img src="sample-image.jpg"></div></div> 
<p class="is-hyphen-block">Move the needle, progress thought partnership innovate white paper but thought provoking do-gooder. Technology humanitarian catalyze; invest green space. Impact investing segmentation but paradigm mobilize.</p>
<p class="is-hyphen-block">Systems thinking, unprecedented challenge innovate; parse inspirational initiative paradigm. Revolutionary, rubric, citizen-centered optimism collaborative cities compelling effective altruism social enterprise. Youth or because change-makers, society. Leverage collaborative consumption capacity building, issue outcomes resist compelling.</p>
<div class="is-outset is-outset_right" data-col="5"><div class="img-crop-16-9"><div class="tag img-crop-tag">is-outset_right</div><img src="sample-image.jpg"></div></div> 
<h2>Move the needle, </h2>
<p class="is-hyphen-block">progress thought partnership innovate white paper but thought provoking do-gooder. Technology humanitarian catalyze; invest green space. Impact investing segmentation but paradigm mobilize.</p>
<p class="is-hyphen-block">Systems thinking, unprecedented challenge innovate; parse inspirational initiative paradigm. Revolutionary, rubric, citizen-centered optimism collaborative cities compelling effective altruism social enterprise. Youth or because change-makers, society. Leverage collaborative consumption capacity building, issue outcomes resist compelling.</p>
<p class="is-hyphen-block">Systems thinking, unprecedented challenge innovate; parse inspirational initiative paradigm. Revolutionary, rubric, citizen-centered optimism collaborative cities compelling effective altruism social enterprise. Youth or because change-makers, society. Leverage collaborative consumption capacity building, issue outcomes resist compelling.</p>`,
              markup: `<div class="is-outset is-outset_left" data-col="8">
  <div class="img-crop-4-3">
    <div class="tag img-crop-tag">is-outset_left</div>
    <img src="sample-image.jpg" />
  </div>
</div>
<p>...</p>

<div class="is-outset is-outset_right" data-col="5">
  <div class="img-crop-16-9">
    <div class="tag img-crop-tag">is-outset_right</div>
    <img src="sample-image.jpg" />
  </div>
</div>
<p>...</p>

<div class="is-outset is-outset_full">
  <div class="img-crop-silver">
    <div class="tag img-crop-tag">is-outset_full</div>
    <img src="sample-image.jpg" />
  </div>
</div>
<p>...</p>`,
              previewCol: 12,
              markupCol: 12,
              config: `$is-outset: 48;
$is-outset-spacing: 16 0;
$is-outset-gutter: 32;
$is-outset-bp: 1200;`,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.img-crop-tag {
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: rgba(#000, 0.4);
  color: #fff;
  z-index: 10;
}
</style>