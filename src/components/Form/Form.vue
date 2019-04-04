<template>
  <group-section :groups="sectionGroups" section-title="Form"></group-section>
</template>

<script>
import GroupSection from './../GroupSection.vue';

export default {
  name: 'Form',
  components: {
    GroupSection,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: 'input',
          summary: `the <span class="code">.input</span> class can be applied to the folowing input types`,
          id: 'input',
          navTitle: 'input',
          groupItems: [
            {
              name: '',
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

$input-placeholder-color: var(--inputPlaceholderColor);
$input-placeholder-style: ();
$input-placeholder-hover-style: ();
$input-placeholder-focus-style: ();`,
            },
            {
              name: 'input sizes',
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
              name: 'input round',
              preview: `<input type="text" class="input input_round" placeholder="round input...">`,
              config: ``,
            },
          ],
        },{
          id: 'checkbox',
          navTitle: 'checkbox',
          groupItems: [
            {
              name: 'checkbox',
              preview: `<div data-grid>
<div data-col='6'>
<div class="xui-checkbox">
  <input type="checkbox" id="boollean-1">
  <label for="boollean-1">checkbox</label>
</div>
</div>
<div data-col='6'>
<div class="xui-checkbox">
  <input type="checkbox" checked id="boollean-2">
  <label for="boollean-2">checkbox</label>
</div>
</div>
</div>`,
              markup: `<div class="xui-checkbox">
  <input type="checkbox" id="">
  <label for="">checkbox</label>
</div>`,
              config: `$xui-checkbox-spacing: 0 12 0 0;
$xui-checkbox-height: 20;
$xui-checkbox-radius: 6;
$xui-checkbox-background: $background-lighter;
$xui-checkbox-style: ();

$xui-checkbox-hover-style: ();
$xui-checkbox-checked-style: ();

$xui-checkbox-check-size: 14;
$xui-checkbox-check-color: transparent;
$xui-checkbox-check-hover-color: $text-lightest;
$xui-checkbox-check-checked-color: $link;`,
            },
          ]
        },{
          id: 'radio',
          navTitle: 'radio',
          groupItems: [
            {
              name: 'radio',
              preview: `<div data-grid>
<div data-col='6'>
<div class="xui-radio">
  <input type="radio" id="radio-1">
  <label for="radio-1">radio boolean with longer label</label>
</div>
</div>
<div data-col='6'>
<div class="xui-radio">
  <input type="radio" checked id="radio-2">
  <label for="radio-2">radio</label>
</div>
</div>
</div>`,
              markup: `<div class="xui-radio">
  <input type="radio" id="">
  <label for="">radio</label>
</div>`,
              config: `$xui-radio-spacing: 0 12 0 0;
$xui-radio-height: 20;
$xui-radio-background: $background-lighter;
$xui-radio-style: ();

$xui-radio-hover-style: ();
$xui-radio-checked-style: ();

$xui-radio-dot-size: 8;
$xui-radio-dot-color: transparent;
$xui-radio-dot-hover-color: $text-lightest;
$xui-radio-dot-checked-color: $link;`,
            },
          ]
        },{
          id: 'toggle',
          navTitle: 'toggle',
          groupItems: [
            {
              name: 'toggle',
              preview: `<div data-grid>
<div data-col='6'>
<div class="xui-toggle">
  <input id="toggle-1" type="checkbox">
  <label for="toggle-1">
    <div class="xui-toggle__switch"></div>
    toggle with a longer label
  </label>
</div>
</div>
<div data-col='6'>
<div class="xui-toggle">
  <input id="toggle-2" type="checkbox" checked>
  <label for="toggle-2">
    <div class="xui-toggle__switch"></div>
    toggle
  </label>
</div>
</div>
</div>`,
              markup: `<div class="xui-toggle">
  <input id="" type="checkbox">
  <label for="">
    <div class="xui-toggle__switch"></div>
    toggle with a longer label
  </label>
</div>`,
              config: `$xui-toggle-background: $background-lighter;
$xui-toggle-hover-background: setHover($xui-toggle-background);
$xui-toggle-active-background: $link;
$xui-toggle-height: 20;
$xui-toggle-width: $xui-toggle-height * 1.75;
$xui-toggle-radius: $xui-toggle-height / 2;
$xui-toggle-spacing: 0 8 0 0;
$xui-toggle-style: ();

$xui-toggle-pin-background: $background;
$xui-toggle-pin-height: $xui-toggle-height - 8;
$xui-toggle-pin-width: $xui-toggle-pin-height;
$xui-toggle-pin-radius: $xui-toggle-pin-height / 2;
$xui-toggle-pin-style: ();

$xui-toggle-label-size: $base-font-size;
$xui-toggle-line-height: $xui-toggle-label-size * $base-line-height;`,
            },
          ]
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
</style>
