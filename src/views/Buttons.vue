<template>
  <section>
    <div class="demo-preview has-padding-8 has-margin-bottom-5 is-relative">
      <div data-grid="center">
        <div data-col="3" class="align-center">
          <a
            href
            class="btn demo-transition"
            :class="[btnStyle, btnSize, {'btn_round' : btnRound}, {'btn_outlined' : btnOutlined}, btnWide]"
          >button</a>
        </div>
        <div data-col="3" class="align-center">
          <a
            href
            class="btn demo-transition"
            :class="[btnStyle, btnSize, {'btn_round' : btnRound}, {'btn_outlined' : btnOutlined}, btnWide]"
          >
            <svg class="ixo">
              <use xlink:href="#fire"></use>
            </svg>
            Button
          </a>
        </div>
        <div data-col="3" class="align-center">
          <a
            href
            class="btn demo-transition"
            :class="[btnStyle, btnSize, {'btn_round' : btnRound}, {'btn_outlined' : btnOutlined}, btnWide]"
          >
            <svg class="ixo">
              <use xlink:href="#fire"></use>
            </svg>
          </a>
        </div>
      </div>
      <div class="demo-preview-settings is-theme has-padding-3 has-margin-top-8">
        <div data-grid="center">
          <div data-col="fit">
            <div class="input-group">
              <label for="btnStyle" class="input-group__addon">
                <svg class="ixo">
                  <use xlink:href="#color-palette"></use>
                </svg>
              </label>
              <div class="input-group__addon">
                <select id="btnStyle" v-model="btnStyle" class="input">
                  <option value>default</option>
                  <option value="btn_minor">minor</option>
                  <option value="btn_super">super</option>
                  <option value="btn_invert">inverted</option>
                  <option value="btn_clear">clear</option>
                </select>
              </div>
            </div>
          </div>
          <div data-col="fit">
            <div class="input-group">
              <label for="btnSize" class="input-group__addon">
                <svg class="ixo">
                  <use xlink:href="#move-vertical"></use>
                </svg>
              </label>
              <div class="input-group__addon">
                <select id="btnSize" v-model="btnSize" class="input">
                  <option value>default</option>
                  <option value="btn_small">small</option>
                  <option value="btn_big">big</option>
                </select>
              </div>
            </div>
          </div>
          <div data-col="fit">
            <div class="input-group">
              <label for="btnWide" class="input-group__addon">
                <svg class="ixo">
                  <use xlink:href="#move-horizontal"></use>
                </svg>
              </label>
              <div class="input-group__addon">
                <select id="btnWide" v-model="btnWide" class="input">
                  <option value>default</option>
                  <option value="btn_wide">wide</option>
                  <option value="btn_block">block</option>
                </select>
              </div>
            </div>
          </div>
          <div data-col="fit">
            <div class="xui-checkbox">
              <input type="checkbox" id="btnRound" v-model="btnRound">
              <label for="btnRound" class="xui-checkbox__label">round</label>
            </div>
          </div>
          <div data-col="fit">
            <div class="xui-checkbox">
              <input type="checkbox" id="btnOutlined" v-model="btnOutlined">
              <label for="btnOutlined" class="xui-checkbox__label">outlined</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- alt -->
    <blocks-group :groups="sectionGroups" section-title="buttons"></blocks-group>
  </section>
</template>

<script>
import BlocksGroup from '@/components/BlocksGroup.vue';

export default {
  name: 'Button',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      btnStyle: '',
      btnSize: '',
      btnWide: '',
      btnRound: false,
      btnOutlined: false,
      sectionGroups: [
        {
          title: '',
          id: 'btn',
          navTitle: 'buttons',
          summary: '',
          groupItems: [
            {
              title: 'Default Button',
              preview: `<a href class="btn">Default</a>&ensp;
        <a href class="btn">
          <svg class="ixo"><use xlink:href="#fire"></use></svg>
          Default
        </a>&ensp;
        <a href class="btn">
          Default
          <svg class="ixo"><use xlink:href="#fire"></use></svg>
        </a>&ensp;
        <a href class="btn">
          <svg class="ixo"><use xlink:href="#fire"></use></svg>
        </a>`,
              markup: '<a class="btn">Default</a>',
              config: `$btn-font-family: $body-font-family;
$btn-transition: background-color 0.2s, box-shadow 0.1s;

// automatically calculates padding-x and padding-y
$btn-padding-ratio: 1.5;
$btn-spacing: 0;

// if true generates round buttons
$btn-round: false;

// radius of buttons - if $btn-round === false
$btn-radius: 4;
$btn-small-radius: $btn-radius;
$btn-big-radius: $btn-radius;

$btn-font-size: $base-font-size;
$btn-line-height: $btn-font-size * $base-line-height;
$btn-icon-size: $base-icon-size;
$btn-min-height: 40;
$btn-weight: $is-bold;

// disabled styles
$btn-disabled-style: ();
$btn-disabled-style: map-merge(
  (
    box-shadow: none,
    opacity: 0.6,
  ),
  $btn-disabled-style
);

// active styles
$btn-active-style: ();
$btn-active-style: map-merge(
  (
    transform: translateY(2px),
  ),
  $btn-active-style
);`,
            },
            {
              title: 'Small Button',
              preview: `<a href class="btn btn_small">Small</a>&ensp;
        <a href class="btn btn_small">
          <svg class="ixo"><use xlink:href="#fire"></use></svg>
          Small
        </a>&ensp;
        <a href class="btn btn_small">
          Small
          <svg class="ixo"><use xlink:href="#fire"></use></svg>
        </a>&ensp;
        <a href class="btn btn_small">
          <svg class="ixo"><use xlink:href="#fire"></use></svg>
        </a>`,
              markup: '<a class="btn btn_small">Small</a>',
              config: `$btn-small-font-size: $btn-font-size * 0.875;
$btn-small-line-height: $btn-small-font-size * $base-line-height;
$btn-small-icon-size: $btn-icon-size;
$btn-small-min-height: 32;
$btn-small-weight: $btn-weight;
$btn-small-style: ();`,
              previewStyle: 'well',
            },
            {
              title: 'Big Button',
              preview: `<a href class="btn btn_big">Big</a>&ensp;
        <a href class="btn btn_big">
          <svg class="ixo"><use xlink:href="#fire"></use></svg>
          Big
        </a>&ensp;
        <a href class="btn btn_big">
          Big
          <svg class="ixo"><use xlink:href="#fire"></use></svg>
        </a>&ensp;
        <a href class="btn btn_big">
          <svg class="ixo"><use xlink:href="#fire"></use></svg>
        </a>`,
              markup: '<a class="btn btn_big">Big</a>',
              config: `$btn-big-font-size: $btn-font-size * 1.125;
$btn-big-line-height: $btn-big-font-size * $base-line-height;
$btn-big-icon-size: $btn-icon-size;
$btn-big-min-height: 48;
$btn-big-weight: $btn-weight;
$btn-big-style: ();`,
              previewStyle: 'well',
            },
            {
              title: 'Button',
              preview: '<a class="btn">Default</a>',
              markup: '<a class="btn">Default</a>',
              config: `$btn-background: $link;
$btn-color: set-contrast($link);
$btn-style: ();

$btn-hover-background: set-hover($btn-background);
$btn-hover-color: $btn-color;
$btn-hover-style: ();`,
              previewStyle: 'well',
            },
            {
              title: 'Super Button',
              preview: '<a class="btn btn_super">Super</a>',
              markup: '<a class="btn btn_super">Super</a>',
              config: `$btn-super-background: $super;
$btn-super-color: set-contrast($super);
$btn-super-style: ();

$btn-super-hover-background: set-hover($btn-super-background);
$btn-super-hover-color: $btn-super-color;
$btn-super-hover-style: ();`,
              previewStyle: 'well',
            },
            {
              title: 'Minor Button',
              preview: '<a class="btn btn_minor">Minor</a>',
              markup: '<a class="btn btn_minor">Minor</a>',
              config: `$btn-minor-background: $minor;
$btn-minor-color: set-contrast($minor);
$btn-minor-style: ();

$btn-minor-hover-background: set-hover($btn-minor-background);
$btn-minor-hover-color: $btn-minor-color;
$btn-minor-hover-style: ();`,
              previewStyle: 'well',
            },
            {
              title: 'Inverted Button',
              preview: '<a class="btn btn_invert">Inverted</a>',
              markup: '<a class="btn btn_invert">Inverted</a>',
              config: `$btn-invert-background: $background;
$btn-invert-color: $link;
$btn-invert-style: ();

$btn-invert-hover-background: set-hover($btn-invert-background);
$btn-invert-hover-color: set-hover($btn-invert-color);
$btn-invert-hover-style: ();`,
              previewStyle: 'well is-theme-invert',
            },
            {
              title: 'Clear Button',
              preview: '<a class="btn btn_clear">Clear</a>',
              markup: '<a class="btn btn_clear">Clear</a>',
              config: `$btn-clear-background: transparent;
$btn-clear-color: $link;
$btn-clear-style: ();

$btn-clear-hover-background: $btn-clear-background;
$btn-clear-hover-color: set-hover($btn-clear-color);
$btn-clear-hover-style: ();`,
              previewStyle: 'well',
            },
          ],
        },
        {
          title: 'Outlined Buttons',
          id: 'btn-outlined',
          navTitle: 'outlined buttons',
          summary: '',
          groupItems: [
            {
              title: 'Outlined Button',
              preview: '<a class="btn btn_outlined">Outlined</a>',
              markup: '<a class="btn btn_outlined">Outlined</a>',
              config: `$btn-outline-border-width: 1;
$btn-outline-border-style: solid;

$btn-outline-border-color: $link;
$btn-outline-color: $link;
$btn-outline-style: ();

$btn-outline-hover-border-color: set-hover($btn-outline-border-color);
$btn-outline-hover-color: set-hover($btn-outline-color);
$btn-outline-hover-style: ();`,
              previewStyle: 'well',
            },
            {
              title: 'Outlined Super Button',
              preview: '<a class="btn btn_outlined btn_super">Outlined Super</a>',
              markup: '<a class="btn btn_outlined btn_super">Outlined Super</a>',
              config: `$btn-outline-super-border-color: $super;
$btn-outline-super-color: $super;
$btn-outline-super-style: ();

$btn-outline-super-hover-border-color: set-hover($btn-outline-super-border-color);
$btn-outline-super-hover-color: set-hover($btn-outline-super-color);
$btn-outline-super-hover-style: ();`,
              previewStyle: 'well',
            },
            {
              title: 'Outlined Minor Button',
              preview: '<a class="btn btn_outlined btn_minor">Outlined Minor</a>',
              markup: '<a class="btn btn_outlined btn_minor">Outlined Minor</a>',
              config: `$btn-outline-minor-border-color: $minor;
$btn-outline-minor-color: $text-light;
$btn-outline-minor-style: ();

$btn-outline-minor-hover-border-color: set-hover($btn-outline-minor-border-color);
$btn-outline-minor-hover-color: set-hover($btn-outline-minor-color);
$btn-outline-minor-hover-style: ();`,
              previewStyle: 'is-theme',
              previewStyle: 'well',
            },
            {
              title: 'Outlined Invert Button',
              preview: '<a class="btn btn_outlined btn_invert">Outlined Invert</a>',
              markup: '<a class="btn btn_outlined btn_invert">Outlined Invert</a>',
              config: `$btn-outline-invert-border-color: $text-invert;
$btn-outline-invert-color: $text-invert;
$btn-outline-invert-style: ();

$btn-outline-invert-hover-border-color: set-hover($btn-outline-invert-border-color);
$btn-outline-invert-hover-color: set-hover($btn-outline-invert-color);
$btn-outline-invert-hover-style: ();`,
              previewStyle: 'well is-theme-invert',
            },
          ],
        },
        {
          title: 'Additional Button Sizes',
          id: 'btn-sizes',
          navTitle: 'button sizes',
          summary: '',
          groupItems: [
            {
              title: 'Wide Button',
              preview: '<a class="btn btn_wide">wide</a>',
              markup: '<a class="btn btn_wide">wide</a>',
              config: `// @param {px} $btn-wide -  min width for .btn_wide button
// @param {px} $btn-small-wide - min width for .btn_wide.btn_small button
// @param {px} $btn-big-wide - min width for .btn_wide.btn_big button
$btn-wide: 240 !default;
$btn-small-wide: 160 !default;
$btn-big-wide: 240 !default;`,
              previewStyle: 'well',
            },
            {
              title: 'Block Button',
              preview: '<a class="btn btn_block">block</a>',
              markup: '<a class="btn btn_block">block</a>',
              config: null,
              previewStyle: 'well',
            },
          ],
        },
        {
          title: 'Additional Button Modifier',
          id: 'btn-modifier',
          navTitle: 'button modifier',
          summary: '',
          groupItems: [
            {
              title: 'Rounded Button',
              preview: '<a class="btn btn_round">wide</a>',
              markup: '<a class="btn btn_round">wide</a>',
              config: null,
              previewStyle: 'well',
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
