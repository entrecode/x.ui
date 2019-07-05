<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>is-ink</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="column center-items">
        <div v-html="markup"></div>

        <div class="is-theme is-margin-top-5 is-padding-center-2 is-round is-elevated-16">
          <div class="nav" data-flex="center">
            <div class="nav__item" data-col="fit">
              <div class="input-group is-margin-top-2">
                <label for="alerStyle" class="input-group__addon">
                  <svg class="ixo is-ink-link">
                    <use xlink:href="#saturation" />
                  </svg>
                </label>
                <div class="input-group__addon">
                  <select class="input input_round" id="alerStyle" v-model="style">
                    <option
                      :value="style"
                      v-for="(style, index) in styles"
                      :key="index"
                      v-text="style === 'is-ink' ? 'default' : style.slice(7)"
                    ></option>
                  </select>
                </div>
              </div>
              <div class="field-group__info align-center">change color</div>
            </div>
            <div class="nav__item" data-col="fit">
              <div class="input-group is-margin-top-2">
                <label for="alerStyle" class="input-group__addon">
                  <svg class="ixo is-ink-link">
                    <use xlink:href="#saturation" />
                  </svg>
                </label>
                <div class="input-group__addon">
                  <select class="input input_round" id="alerStyle" v-model="hoverStyle">
                    <option
                      :value="style"
                      v-for="(style, index) in hoverStyles"
                      :key="index"
                      v-text="style === '' ? 'select' : style === 'hover:is-ink' ? 'default' : style.slice(13)"
                    ></option>
                  </select>
                </div>
              </div>
              <div class="field-group__info align-center">change hover:color</div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="params"></params-table>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';

export default {
  name: 'IsInk',
  components: {
    ParamsTable,
  },
  data: () => {
    return {
      markup: `<h1 class="is-ink">change my color</h1>`,
      styles: [
        'is-ink',
        'is-ink-light',
        'is-ink-lighter',
        'is-ink-lightest',
        'is-ink-link',
        'is-ink-super',
        'is-ink-highlight',
        'is-ink-invert',
      ],
      style: 'is-ink',
      hoverStyles: [
        '',
        'hover:is-ink',
        'hover:is-ink-light',
        'hover:is-ink-lighter',
        'hover:is-ink-lightest',
        'hover:is-ink-link',
        'hover:is-ink-super',
        'hover:is-ink-highlight',
        'hover:is-ink-invert',
      ],
      hoverStyle: '',
      params: [
        {
          name: `$is-ink`,
          type: 'map',
          default: `(
  '': $text,
  'light': $text-light,
  'lighter': $text-lighter,
  'lightest': $text-lightest,
  'link': $link,
  'super': $super,
  'highlight': $highlight,
  'invert': $text-invert,
);`,
        },
      ],
    };
  },
  computed: {
    classes() {
      return [this.style ? this.style : null, this.hoverStyle ? this.hoverStyle : null].join(' ').trim();
    },
  },
  watch: {
    classes: function(val) {
      this.markup = `<h1 class="${val}">change my color</h1>`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
