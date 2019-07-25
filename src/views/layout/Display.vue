<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>display helper</h1>
      </div>
      <div
        class="demo-preview is-relative"
        data-flex="column center center-items"
        style="min-height: 320px;"
      >
        <h2 class="is-h1 is-ink-super align-center" :class="previewClass">
          <div>watch how&nbsp;</div>
          <div>i behave</div>
        </h2>
        <div class="is-theme is-padding-center-2 is-round is-elevated-16">
          <div class="nav">
            <div class="nav__item">
              <select id="displaySelected" class="input" v-model="displaySelected">
                <option
                  :value="value"
                  v-for="(value, index) in displayOptions"
                  :key="index"
                  v-text="value.slice(3)"
                ></option>
              </select>
            </div>
            <div class="nav__item">
              <select id="displaySelected" class="input" v-model="breakpoint">
                <option
                  :value="value"
                  v-for="(value, index) in breakpoints"
                  :key="index"
                  v-text="value === '' ? 'always' : value"
                ></option>
              </select>
            </div>
            <div class="nav__item" v-if="breakpoint">
              <div class="xui-checkbox">
                <input type="checkbox" v-model="startsFrom" id="startsFrom" />
                <label for="startsFrom" class="xui-checkbox__label">starts with bp</label>
              </div>
            </div>
          </div>
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
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      requires: [
        { name: 'bp()', type: 'function', link: '#scroll-to-bp' },
        { name: '$breakpoints', type: 'variable', link: '#scroll-to-breakpoints' },
      ],
      params: [
        {
          name: '$is-display-map',
          type: 'map',
          default: `(
    'is-hidden': 'none',
    'is-block': 'block',
    'is-flex': 'flex',
  )`,
        },
      ],
      displayOptions: ['is-hidden', 'is-block', 'is-flex'],
      displaySelected: 'is-block',
      breakpoints: ['', '@xs', '@sm', '@md', '@lg', '@xl', '@xxl'],
      breakpoint: '',
      startsFrom: false,
      previewClass: 'is-block',
      markup: `<div class="is-block"></div>`,
    };
  },
  computed: {
    dirty() {
      return [this.displaySelected, this.breakpoint, this.startsFrom ? '+' : null].join('');
    },
  },
  watch: {
    dirty: function(val) {
      this.previewClass = val;
      this.markup = `<div class="${this.previewClass}"></div>`;
    },
  },
};
</script>

<style scoped lang="scss">
.demo-highlight {
  img {
    position: relative;
    z-index: -1;
  }
}

.demo-highlight-y {
  box-shadow: inset -16px 0 0 rgba(var(--spacingColor), 0.2);
}

.demo-highlight-x {
  box-shadow: inset 0 -16px 0 rgba(var(--spacingColor), 0.2);
}

.demo-highlight-both {
  box-shadow: inset -16px -16px 0 rgba(var(--spacingColor), 0.2);
}
</style>
