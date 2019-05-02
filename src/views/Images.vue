<template>
  <section class="demo-blocks-group">
    <div data-grid>
      <div data-col="8">
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
                  <ul class="dropdown-options">
                    <li class="xui-select-option">
                      <a @click="cropClass = 'img-crop-1-1'" tabindex="0">1:1</a>
                    </li>
                    <li class="xui-select-option">
                      <a @click="cropClass = 'img-crop-3-4'" tabindex="0">3:4</a>
                    </li>
                    <li class="xui-select-option">
                      <a @click="cropClass = 'img-crop-4-3'" tabindex="0">4:3</a>
                    </li>
                    <li class="xui-select-option">
                      <a @click="cropClass = 'img-crop-16-9'" tabindex="0">16:9</a>
                    </li>
                    <li class="xui-select-option">
                      <a @click="cropClass = 'img-crop-golden'" tabindex="0">golden</a>
                    </li>
                    <li class="xui-select-option">
                      <a @click="cropClass = 'img-crop-silver'" tabindex="0">silver</a>
                    </li>
                    <li class="xui-select-option">
                      <a @click="cropClass = 'img-crop-ultrawide'" tabindex="0">ultrawide</a>
                    </li>
                  </ul>
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
            <div class="spacing-demo">
              <img src="sample-image-small.jpg" class="img-responsive">
            </div>
          </div>
          <div data-col="6">
            <h3>img-full</h3>
            <pre v-highlightjs="fullMarkup"><code class="html"></code></pre>
            <div class="y-space-2"></div>
            <div class="is-relative">
              <img src="sample-image.jpg" class="img-full" style="opacity: .6;">
              <img
                src="sample-image-small.jpg"
                class="is-absolute is-positioned-nw"
                style="z-index:-1;"
              >
            </div>
          </div>
        </div>
        <div class="spacer"></div>
        <div id="scroll-to-is-outset" class="has-padding-8">
          <div class="is-outset" :class="isOutsetClass">
            <div
              @click="openOptions =! openOptions"
              :class="isOutsetClass === 'is-outset_full' ? 'img-crop-16-9' : 'img-crop-1-1'"
              style="cursor: pointer;"
            >
              <div class="tag img-crop-tag" v-text="isOutsetClass"></div>
              <img src="sample-image.jpg">
              <ul
                class="nav is-theme-invert is-absolute is-positioned-n is-elevated-16 is-round"
                v-if="openOptions"
                style="z-index: 10; margin-top: -32px;"
              >
                <li class="nav__item">
                  <a
                    class="btn btn_clear has-padding-0"
                    @click.prevent="isOutsetClass = 'is-outset_left'"
                    :class="{'is-active': isOutsetClass === 'is-outset_left'}"
                  >
                    <svg class="ixo">
                      <use xlink:href="#outset-left"></use>
                    </svg>
                  </a>
                </li>
                <li class="nav__item">
                  <a
                    class="btn btn_clear has-padding-0"
                    @click.prevent="isOutsetClass = 'is-outset_full'"
                    :class="{'is-active': isOutsetClass === 'is-outset_full'}"
                  >
                    <svg class="ixo">
                      <use xlink:href="#outset-full"></use>
                    </svg>
                  </a>
                </li>
                <li class="nav__item">
                  <a
                    class="btn btn_clear has-padding-0"
                    @click.prevent="isOutsetClass = 'is-outset_right'"
                    :class="{'is-active': isOutsetClass === 'is-outset_right'}"
                  >
                    <svg class="ixo">
                      <use xlink:href="#outset-right"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h1>is-outset</h1>
          <p
            class="is-lead is-hyphen-block"
          >Shine vibrant dynamic social entrepreneurship impact investing. Capacity building indicators, replicable black lives matter, thought provoking emerging natural resources program areas social entrepreneurship. Shared unit of analysis when; mobilize benefit corporation human-centered external partners. Accessibility thought leadership external partners incubator incubator academic.</p>
          <p>Social enterprise gender rights, natural resources optimism but gender rights academic transparent save the world. Youth boots on the ground; relief social return on investment social entrepreneur thought partnership resist policymaker. Vibrant her body her rights empower communities scalable empower rubric contextualize families. Expose the truth, social innovation B-corp a natural resources. Technology synergy, initiative initiative, thought leadership parse.</p>
          <p>Data compassion low-hanging fruit green space state of play. The resistance our work; because global global, empower communities shine granular leverage. Game-changer preliminary thinking, external partners, big data best practices state of play policymaker improve the world when. Inspirational challenges and opportunities, engaging or co-create, efficient, think tank technology;</p>
          <doc-tab :markupCol="12">
            <div slot="markup">
              <pre v-highlightjs="isOutsetMarkup"><code class="html"></code></pre>
            </div>
            <div slot="config">
              <pre v-highlightjs="isOutsetConfig"><code class="scss"></code></pre>
            </div>
          </doc-tab>
        </div>
      </div>
      <div data-col="4">
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
  </section>
</template>

<script>
import DocTab from '@/components/DocTab.vue';

export default {
  name: 'Media',
  components: {
    DocTab,
  },
  data: () => {
    return {
      openOptions: false,
      isOutsetClass: 'is-outset_left',
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
      responsiveMarkup: '<img src="..." class="img-responsive" />',
      isOutsetMarkup: `<div class="is-outset is-outset_left" data-col="8">
  <img />
</div>

<div class="is-outset is-outset_right" data-col="5">
  <div class="img-crop-16-9">...</div>
</div>

<div class="is-outset is-outset_full">...</div>`,
      isOutsetConfig: `$is-outset: 48;
$is-outset-spacing: 16 0;
$is-outset-gutter: 32;
$is-outset-bp: 1200;`,
      fullMarkup: '<img src="..." class="img-full" />',
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