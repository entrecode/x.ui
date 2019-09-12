<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>input</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="column center-items">
        <div class="is-theme is-padding-5 is-radius">
          <textarea
            class="input"
            :class="[inputSize, inputRound ? ' input_round' : '']"
            placeholder="textarea..."
            rows="4"
            v-if="inputType === 'textarea'"
          ></textarea>
          <select
            v-else-if="inputType === 'select'"
            class="input"
            :class="[inputSize, inputRound ? ' input_round' : '']"
          >
            <option value>select</option>
            <option value="option 1">option 1</option>
            <option value="option 2">option 2</option>
            <option value="option 3">option 3</option>
          </select>
          <input
            :type="inputType"
            class="input"
            :class="[inputSize, inputRound ? ' input_round' : '']"
            :placeholder="`${inputType} input...`"
            v-else
          />
        </div>

        <div class="is-theme is-margin-top-5 is-padding-center-2 is-elevated-16 is-radius">
          <div class="nav">
            <div class="nav__item">
              <div class="input-group">
                <label for="inputSize" class="input-group__addon">
                  <svg class="ixo is-ink-link">
                    <use xlink:href="#move-vertical" />
                  </svg>
                </label>
                <div class="input-group__addon">
                  <select id="inputSize" v-model="inputSize" class="input">
                    <option value>default</option>
                    <option value="input_small">small</option>
                    <option value="input_big">big</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="nav__item">
              <div class="input-group">
                <label for="inputSize" class="input-group__addon">
                  <small>type</small>
                </label>
                <div class="input-group__addon">
                  <select id="inputType" v-model="inputType" class="input">
                    <option value="text">text</option>
                    <option value="date">date</option>
                    <option value="datetime-local">datetime-local</option>
                    <option value="time">time</option>
                    <option value="week">week</option>
                    <option value="month">month</option>
                    <option value="password">password</option>
                    <option value="search">search</option>
                    <option value="tel">tel</option>
                    <option value="url">url</option>
                    <option value="number">number</option>
                    <option value="textarea">textarea</option>
                    <option value="select">select</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="nav__item">
              <div class="xui-checkbox">
                <input type="checkbox" id="inputRound" v-model="inputRound" />
                <label for="inputRound" class="xui-checkbox__label">round</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="inputMarkup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="inputParams"></params-table>
      <params-table :params="stateParams" title="state params"></params-table>
      <params-table :params="placeholderParams" title="placeholder params"></params-table>
      <params-table :params="defaultSizeParams" title="size params"></params-table>
      <params-table :params="smallSizeParams" title="small size params"></params-table>
      <params-table :params="bigSizeParams" title="big size params"></params-table>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';

export default {
  name: 'Form',
  components: {
    ParamsTable,
  },
  data: () => {
    return {
      inputSize: '',
      inputType: 'text',
      inputRound: false,
      inputMarkup: `<input type="text" class="input" placeholder="...">`,
      inputParams: [
        {
          name: '$input-padding-ratio',
          type: 'number',
          default: '1',
        },
        {
          name: '$input-spacing',
          type: 'number',
          default: '0',
        },
        {
          name: '$input-border-color',
          type: 'color',
          default: 'transparent',
        },
        {
          name: '$input-border-width',
          type: 'number',
          default: '0',
        },
        {
          name: '$input-border-style',
          type: 'string',
          default: 'solid',
        },
        {
          name: '$input-background',
          type: 'color',
          default: '$background-lighter',
        },
        {
          name: '$input-color',
          type: 'color',
          default: '$text',
        },
        {
          name: '$input-round',
          description: 'sets a full smooth radius',
          type: 'boolean',
          default: 'false',
        },
        {
          name: '$input-radius',
          type: 'number',
          default: '4',
        },
      ],
      stateParams: [
        {
          name: '$input-hover-style',
          type: 'map',
        },
        {
          name: '$input-focus-style',
          type: 'map',
        },
        {
          name: '$input-disabled-style',
          type: 'map',
        },
      ],
      placeholderParams: [
        {
          name: '$input-placeholder-color',
          type: 'color',
          default: '$text-lighter',
        },
        {
          name: '$input-placeholder-style',
          type: 'map',
        },
        {
          name: '$input-placeholder-hover-style',
          type: 'map',
        },
        {
          name: '$input-placeholder-focus-style',
          type: 'map',
        },
      ],
      defaultSizeParams: [
        {
          name: '$input-font-size',
          type: 'number',
          default: '$base-font-size',
        },
        {
          name: '$input-line-height',
          type: 'number',
          default: '$input-font-size * 1.125',
        },
        {
          name: '$input-min-height',
          type: 'number',
          default: '40',
        },
        {
          name: '$input-style',
          type: 'map',
        },
      ],
      smallSizeParams: [
        {
          name: '$input-small-font-size',
          type: 'number',
          default: '$input-font-size * 0.875',
        },
        {
          name: '$input-small-line-height',
          type: 'number',
          default: '$input-small-font-size * $base-line-height',
        },
        {
          name: '$input-small-min-height',
          type: 'number',
          default: '32',
        },
        {
          name: '$input-small-style',
          type: 'map',
        },
      ],
      bigSizeParams: [
        {
          name: '$input-big-font-size',
          type: 'number',
          default: '$input-font-size * 1.125',
        },
        {
          name: '$input-big-line-height',
          type: 'number',
          default: '$input-big-font-size * $base-line-height',
        },
        {
          name: '$input-big-min-height',
          type: 'number',
          default: '48',
        },
        {
          name: '$input-big-style',
          type: 'map',
        },
      ],
    };
  },
  computed: {
    hasChange() {
      return [this.inputSize, this.inputType, this.inputRound].join();
    },
  },
  watch: {
    hasChange: function() {
      if (this.inputType === 'textarea') {
        this.inputMarkup = `<textarea class="input${this.inputSize ? ' ' + this.inputSize : ''}${
          this.inputRound ? ' input_round' : ''
        }" placeholder="..."></textarea>`;
      } else if (this.inputType === 'select') {
        this.inputMarkup = `<select class="input${this.inputSize ? ' ' + this.inputSize : ''}${
          this.inputRound ? ' input_round' : ''
        }">
  <option value>...</option>
  ...
</select>`;
      } else {
        this.inputMarkup = `<input type="${this.inputType}" class="input${this.inputSize ? ' ' + this.inputSize : ''}${
          this.inputRound ? ' input_round' : ''
        }" placeholder="...">`;
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
