<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>is-theme</h1>
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
                      v-text="style === 'is-theme' ? 'default' : style.slice(9)"
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
                      v-text="style === '' ? 'select' : style === 'hover:is-theme' ? 'default' : style.slice(15)"
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
      markup: `<div class="is-theme">
  <h1>change my color <a>i'm a link</a></h1>
</div>`,
      styles: [
        'is-theme',
        'is-theme-lightest',
        'is-theme-invert',
      ],
      style: 'is-theme',
      hoverStyles: [
        '',
        'hover:is-theme',
        'hover:is-theme-lightest',
        'hover:is-theme-invert',
      ],
      hoverStyle: '',
      params: [
        {
          name: `$is-theme`,
          type: 'array',
          default: `(
  '': (
    $background,
    $text,
    $link,
  ),
  'lightest': (
    $background-lightest,
    $text,
    $link,
  ),
  'invert': (
    $background-invert,
    $text-invert,
    $link,
  ),
)`,
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
      this.markup = `<div class="${val}">
  <h1>change my color <a>i'm a link</a></h1>
</div>`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
