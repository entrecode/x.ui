<template>
  <section id="scroll-to-spacer">
    <div class="titlebar">
      <h2>spacer</h2>
    </div>
    <div class="demo-preview is-padding-8">
      <div class="is-margin-bottom-5 spacing-demo" style="overflow: hidden;" v-html="markup"></div>
      <div data-flex="center">
        <div class="is-theme is-padding-center-2 is-radius is-elevated-16">
          <div class="nav">
            <div class="nav__item">
              <select class="input" v-model="option">
                <option
                  :value="option"
                  v-for="(option, index) in options"
                  :key="index"
                  v-text="option === '' ? 'default' : option.slice(7)"
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
          </div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <pre v-highlightjs="markup"><code class="html"></code></pre>
    <div class="spacer"></div>
    <params-table :params="params"></params-table>
    <requires-list :requires="requires"></requires-list>
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
        { name: 'set-breakpoints()', type: 'mixin', link: '#scroll-to-set-breakpoints' },
        { name: 'get-space()', type: 'function', link: '#scroll-to-get-space' },
      ],
      breakpoints: ['', '@xs', '@sm', '@md', '@lg', '@xl', '@xxl'],
      breakpoint: '',
      markup: `<div class="spacer"></div>`,
      option: '',
      options: ['', 'spacer_small', 'spacer_big'],
      params: [
        {
          name: '$spacer-size',
          type: 'number',
          default: 'get-space(5); // 32',
        },
        {
          name: '$spacer-small-size',
          type: 'number',
          default: 'get-space(3); // 16',
        },
        {
          name: '$spacer-big-size',
          type: 'number',
          default: 'get-space(6); // 48',
        },
      ],
    };
  },
  computed: {
    classes() {
      return [this.option ? 'spacer ' + this.option + this.breakpoint : 'spacer' + this.breakpoint].join(' ').trim();
    },
  },
  watch: {
    classes: function(val) {
      this.markup = `<div class="${val}"></div>`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
