<template>
  <section>
    <div class="has-padding-center-3">
      <h2>input</h2>
    </div>
    <div class="demo-preview has-padding-8" data-flex="column center-items">
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
      >

      <div class="is-theme has-margin-top-5 has-padding-center-2 is-round is-elevated-16">
        <div class="nav">
          <div class="nav__item">
            <div class="input-group">
              <label for="inputSize" class="input-group__addon">
                <svg class="ixo is-ink-link">
                  <use xlink:href="#move-vertical"></use>
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
              <input type="checkbox" id="inputRound" v-model="inputRound">
              <label for="inputRound" class="xui-checkbox__label">round</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-grid="center">
      <div data-col="10@md 8@lg">
        <div class="spacer"></div>
        <pre v-highlightjs="inputMarkup"><code class="html"></code></pre>
        <div class="spacer"></div>
        <params-table :params="inputParams"></params-table>
        <div class="spacer"></div>
        <params-table :params="inputSizeParama" title="size params"></params-table>
      </div>
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
      inputMarkup: `<input
  type="text"
  class="input"
  placeholder="..."
>`,
      inputParams: [
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
          default: '32',
        },
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
          name: '$input-style',
          type: 'array',
        },
        {
          name: '$input-hover-style',
          type: 'array',
        },
        {
          name: '$input-focus-style',
          type: 'array',
        },
        {
          name: '$input-disabled-style',
          type: 'array',
        },
        {
          name: '$input-placeholder-color',
          type: 'color',
          default: '$text-lighter',
        },
        {
          name: '$input-placeholder-style',
          type: 'array',
        },
        {
          name: '$input-placeholder-hover-style',
          type: 'array',
        },
        {
          name: '$input-placeholder-focus-style',
          type: 'array',
        },
      ],
      inputSizeParama: [
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
          default: '28',
        },
        {
          name: '$input-small-style',
          type: 'array',
        },
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
          default: '40',
        },
        {
          name: '$input-big-style',
          type: 'array',
        },
      ],
      sectionGroups: [
        {
          title: 'input-group',
          type: 'atoms',
          id: 'input-group',
          navTitle: 'input-group',
          groupItems: [
            {
              title: 'default usage',
              preview: `<div class="input-group">
  <div class="input-group__addon">
    <small>addon</small>
  </div>
  <input type="text" placeholder="input..." class="input" />
</div>
<div class="y-space-2"></div>
<div class="input-group">
  <input type="text" placeholder="input..." class="input" />
  <div class="input-group__addon">
    <small>addon</small>
  </div>
</div>
<div class="y-space-2"></div>
<div class="input-group">
  <div class="input-group__addon">
    <small>addon</small>
  </div>
  <input type="text" placeholder="input..." class="input" />
  <div class="x-space-1"></div>
  <input type="text" placeholder="input..." class="input" />
</div>
<div class="y-space-3"></div>
<div class="input-group">
  <div class="input-group__addon is-round-left">
    <small>addon</small>
  </div>
  <input type="text" placeholder="input..." class="input input_round" />
</div>`,
              config: `$input-group-spacing: $input-spacing;

$input-group-addon-color: $text-light;
$input-group-addon-background: $input-background;
$input-group-addon-border-color: $input-border-color;
$input-group-addon-border-width: $input-border-width;
$input-group-addon-border-style: $input-border-style;
$input-group-addon-padding: 0 8;
$input-group-addon-style: ();`,
            },
            {
              title: 'with grid',
              preview: `<div class="input-group">
  <div class="input-group__addon" data-col="4">
    <small>addon</small>
  </div>
  <input type="text" placeholder="input..." class="input" />
</div>`,
              markup: `<div class="input-group">
  <div class="input-group__addon" data-col="4">
    <small>addon</small>
  </div>
  <input type="text" placeholder="input..." class="input" />
</div>`,
            },
            {
              title: 'mixed inputs grid',
              preview: `<div class="input-group">
  <input type="text" placeholder="input..." class="input" />
  <div class="input-group__addon" data-col="4">
    <select class="input input_clear">
      <option value="" selected>select option</option>
      <option value="">option</option>
      <option value="">option</option>
    </select>
  </div>
</div>
<div class="y-space-2"></div>
<div class="input-group">
  <input type="text" placeholder="input..." class="input" />
  <div class="x-space-1" style="width:2px;"></div>
  <div class="input-group__addon">
    <div class="xui-checkbox">
      <input type="checkbox" id="checkbox-3">
      <label for="checkbox-3" class="xui-checkbox__label">checkbox</label>
    </div>
  </div>
</div>
<div class="y-space-2"></div>
<div class="input-group">
  <input type="text" placeholder="input..." class="input" />
  <div tabindex="0" class="xui-select">
    <span class="xui-select__placeholder">select</span>
    <span class="xui-select__caret"></span>
    <ul class="xui-select-options">
      <li>
        <a href="" tabindex="0" class="xui-select-option">option 1</a>
      </li>
      <li>
        <a href="" tabindex="0" class="xui-select-option">option 2</a>
      </li>
      <li>
        <a href="" tabindex="0" class="xui-select-option">option 3</a>
      </li>
    </ul>
  </div>
</div>`,
              markup: ``,
            },
            {
              title: 'combinded with button',
              preview: `<div class="input-group">
  <div class="input-group__addon">
    <small>addon</small>
  </div>
  <input type="text" placeholder="input..." class="input" />
  <a class="btn">submit</a>
</div>
<div class="y-space-2"></div>
<div class="input-group">
  <input type="text" placeholder="input..." class="input" />
  <div class="input-group__addon">
    <a class="btn btn_clear">submit</a>
  </div>
</div>`,
            },
            {
              title: 'used with icon ',
              preview: `<div class="input-group">
  <input type="text" placeholder="input..." class="input" />
  <div class="input-group__addon">
    <svg class="ixo"><use xlink:href="#fire"></use></svg>
  </div>
</div>`,
            },
          ],
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
        }" placeholder="..."
      >`;
      }
    },
  },
};
</script>

<style scoped lang="scss">
</style>
