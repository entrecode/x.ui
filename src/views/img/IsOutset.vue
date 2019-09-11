<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>is-outset</h1>
      </div>
      <p class="is-lead">
        <code class="code">.is-outset</code> is still in an experimental state. it can be used as a wrapper with all
        kinds of elements.
      </p>
      <div class="demo-preview is-padding-5 is-margin-bottom-5 is-relative">
        <div data-grid="center">
          <div data-col="8">
            <div
              :class="isOutsetClass"
              class="is-outset demo-transition"
              :data-col="useCol && isOutsetClass !== 'is-outset_full' ? col : null"
            >
              <div :class="isOutsetClass !== 'is-outset_full' ? 'img-crop-1-1' : 'img-crop-16-9'">
                <img src="sample-image.jpg" />
              </div>
            </div>
            <p class="is-lead is-hyphen-block">
              Shine vibrant dynamic social entrepreneurship impact investing. Capacity building indicators, replicable
              black lives matter, thought provoking emerging natural resources program areas social entrepreneurship.
              Shared unit of analysis when; mobilize benefit corporation human-centered external partners. Accessibility
              thought leadership external partners incubator incubator academic.
            </p>
            <p>
              Social enterprise gender rights, natural resources optimism but gender rights academic transparent save the
              world. Youth boots on the ground; relief social return on investment social entrepreneur thought partnership
              resist policymaker. Vibrant her body her rights empower communities scalable empower rubric contextualize
              families. Expose the truth, social innovation B-corp a natural resources. Technology synergy, initiative
              initiative, thought leadership parse.
            </p>
            <p>
              Data compassion low-hanging fruit green space state of play. The resistance our work; because global global,
              empower communities shine granular leverage. Game-changer preliminary thinking, external partners, big data
              best practices state of play policymaker improve the world when. Inspirational challenges and opportunities,
              engaging or co-create, efficient, think tank technology;
            </p>
          </div>
        </div>
        <div
          class="demo-preview-settings is-absolute is-fab-s is-theme is-elevated-16 is-padding-middle-2 is-padding-center-3 is-radius"
        >
          <ul class="nav">
            <li class="nav__item">
              <a
                class="btn btn_clear is-padding-0"
                @click.prevent="isOutsetClass = 'is-outset_left'"
                :class="{ 'is-active': isOutsetClass === 'is-outset_left' }"
              >
                <svg class="ixo">
                  <use xlink:href="#outset-left" />
                </svg>
              </a>
            </li>
            <li class="nav__item">
              <a
                class="btn btn_clear is-padding-0"
                @click.prevent="isOutsetClass = 'is-outset_full'"
                :class="{ 'is-active': isOutsetClass === 'is-outset_full' }"
              >
                <svg class="ixo">
                  <use xlink:href="#outset-full" />
                </svg>
              </a>
            </li>
            <li class="nav__item">
              <a
                class="btn btn_clear is-padding-0"
                @click.prevent="isOutsetClass = 'is-outset_right'"
                :class="{ 'is-active': isOutsetClass === 'is-outset_right' }"
              >
                <svg class="ixo">
                  <use xlink:href="#outset-right" />
                </svg>
              </a>
            </li>
            <li class="nav__divider" v-if="isOutsetClass !== 'is-outset_full'"></li>
            <li class="nav__item" v-if="isOutsetClass !== 'is-outset_full'">
              <div class="xui-checkbox">
                <input type="checkbox" id="useCol" v-model="useCol" />
                <label for="useCol" class="xui-checkbox__label">data-col</label>
              </div>
            </li>
            <li class="nav__item" v-if="isOutsetClass !== 'is-outset_full'">
              <input type="number" min="1" max="12" :disabled="!useCol" v-model="col" class="input" />
            </li>
          </ul>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="params"></params-table>
      <div class="spacer"></div>
      <requires-list :requires="requires"></requires-list>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';

export default {
  name: 'Media',
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      isOutsetClass: 'is-outset_left',
      markup: `<div class="is-outset is-outset_left">
  <img src="..." />
</div>`,
      col: 6,
      useCol: false,
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
      ],
      params: [
        {
          name: '$is-outset',
          type: 'number',
          description: 'size by which the element overlaps',
          default: `48`,
        },
        {
          name: '$is-outset-spacing',
          type: 'number',
          description: 'spacing of element',
          default: `16 0`,
        },
        {
          name: '$is-outset-gutter',
          type: 'number',
          description: 'gutter of element to surrounding elements',
          default: `32`,
        },
        {
          name: '$is-outset-bp',
          type: 'number',
          description: `starting breakpoint when <code class="code">.is-outset</code> takes effect`,
          default: `1200`,
        },
      ],
    };
  },
  watch: {
    isOutsetClass: function(val) {
      this.markup = `<div class="is-outset ${val}">
  <img src="..." />
</div>`;
    },
  },
};
</script>

<style lang="scss"></style>
