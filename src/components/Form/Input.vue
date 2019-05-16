<template>
  <blocks-group :groups="sectionGroups" section-title="input"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'Form',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: 'input',
          type: 'atoms',
          summary: `the <span class="code">.input</span> class can be applied to the folowing input types`,
          id: 'input',
          navTitle: 'input',
          groupItems: [
            {
              title: '',
              preview: `<input type="text" class="input" placeholder="text input..."><br>
<textarea rows="3" class="input" placeholder="textarea..."></textarea><br>
<select class="input">
  <option value="" selected>select option</option>
  <option value="">option</option>
  <option value="">option</option>
</select><br>
<input type="date" class="input" placeholder="date input..."><br>
<input type="datetime-local" class="input" placeholder="date input..."><br>
<input type="time" class="input" placeholder="time input..."><br>
<input type="week" class="input" placeholder="week input..."><br>
<input type="month" class="input" placeholder="month input..."><br>
<input type="email" class="input" placeholder="email input..."><br>
<input type="password" class="input" placeholder="password input..."><br>
<input type="search" class="input" placeholder="search input..."><br>
<input type="tel" class="input" placeholder="tel input..."><br>
<input type="url" class="input" placeholder="url input..."><br>
<input type="number" class="input" placeholder="number input...">`,
              config: `$input-font-size: $base-font-size;
$input-line-height: $input-font-size * 1.125;
$input-min-height: 32;
$input-padding-ratio: 1;
$input-spacing: 0;
$input-border-color: transparent;
$input-border-width: 0;
$input-border-style: solid;
$input-background: $background-lighter;
$input-color: $text;
$input-style: ();
$input-hover-style: ();
$input-focus-style: ();
$input-disabled-style: ();

$input-placeholder-color: $text-lighter;
$input-placeholder-style: ();
$input-placeholder-hover-style: ();
$input-placeholder-focus-style: ();`,
            },
            {
              title: 'input sizes',
              summary: 'besides the default size there are two additional sizes',
              preview: `<input type="text" class="input input_small" placeholder="small input..."><br>
<input type="text" class="input" placeholder="default input..."><br>
<input type="text" class="input input_big" placeholder="big input...">`,
              config: `$input-small-font-size: $input-font-size * 0.875;
$input-small-line-height: $input-small-font-size * $base-line-height;
$input-small-min-height: 28;
$input-small-style: ();

$input-big-font-size: $input-font-size * 1.125;
$input-big-line-height: $input-big-font-size * $base-line-height;
$input-big-min-height: 40;
$input-big-style: ();`,
            },
            {
              title: 'input round',
              preview: `<input type="text" class="input input_round" placeholder="round input...">`,
              config: ``,
            },
          ],
        },
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
};
</script>

<style scoped lang="scss">
</style>
