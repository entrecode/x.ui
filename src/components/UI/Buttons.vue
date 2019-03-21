<template>
  <section data-container>
    <div data-grid="is-end">
      <div data-col="8">
        <div
          class="has-margin-bottom-5"
          v-for="(group, index) in sectionGroups"
          :key="index"
          :id="'#scroll-to-' + group.id"
        >
          <h2 v-text="group.title"></h2>
          <p v-text="group.markup"></p>
          <div class="spacer"></div>
          <DocTab v-for="(item, index) in group.groupItems" :key="index">
            <div slot="title">
              <h3 class="is-h4" v-text="item.name"></h3>
            </div>
            <div
              slot="preview"
              :class="item.previewStyle || 'is-theme-lightest'"
              class="has-padding-2 align-center has-radius"
              v-html="item.preview"
            ></div>

            <div slot="markup">
              <pre v-highlightjs="item.markup"><code class="html"></code></pre>
            </div>
            <div slot="config" v-if="item.config">
              <pre v-highlightjs="item.config"><code class="scss"></code></pre>
            </div>
          </DocTab>
        </div>
      </div>
      <div data-col="2">
        <nav class="nav nav_stacked is-sticky" style="top: 120px;">
          <ul class="nav__items">
            <li class="nav__item" v-for="(item, index) in sectionGroups" :key="index">
              <a :href="'#scroll-to-' + item.id" class="is-kilo is-ink-light hover:is-ink-link">{{item.navTitle}}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="y-space-8"></div>
  </section>
</template>

<script>
import DocTab from './../DocTab.vue';

export default {
  name: 'Button',
  components: {
    DocTab,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: 'Buttons',
          id: 'btn',
          navTitle: 'Buttons',
          summary: '',
          groupItems: [
            {
              name: 'Default Button',
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
              markup: '<a href="" class="btn">Default</a>',
              config: `$btn-font-family: $body-font;
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
              name: 'Small Button',
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
              markup: '<a href="" class="btn btn_small">Small</a>',
              config: `$btn-small-font-size: $btn-font-size * 0.875;
$btn-small-line-height: $btn-small-font-size * $base-line-height;
$btn-small-icon-size: $btn-icon-size;
$btn-small-min-height: 32;
$btn-small-weight: $btn-weight;
$btn-small-style: ();`,
            },
            {
              name: 'Big Button',
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
              markup: '<a href="" class="btn btn_big">Big</a>',
              config: `$btn-big-font-size: $btn-font-size * 1.125;
$btn-big-line-height: $btn-big-font-size * $base-line-height;
$btn-big-icon-size: $btn-icon-size;
$btn-big-min-height: 48;
$btn-big-weight: $btn-weight;
$btn-big-style: ();`,
            },
            {
              name: 'Button',
              preview: '<a href="" class="btn">Default</a>',
              markup: '<a href="" class="btn">Default</a>',
              config: `$btn-background: $link;
$btn-color: setContrast($link);
$btn-style: ();

$btn-hover-background: setHover($btn-background);
$btn-hover-color: $btn-color;
$btn-hover-style: ();`,
            },
            {
              name: 'Super Button',
              preview: '<a href="" class="btn btn_super">Super</a>',
              markup: '<a href="" class="btn btn_super">Super</a>',
              config: `$btn-super-background: $super;
$btn-super-color: setContrast($super);
$btn-super-style: ();

$btn-super-hover-background: setHover($btn-super-background);
$btn-super-hover-color: $btn-super-color;
$btn-super-hover-style: ();`,
            },
            {
              name: 'Minor Button',
              preview: '<a href="" class="btn btn_minor">Minor</a>',
              markup: '<a href="" class="btn btn_minor">Minor</a>',
              config: `$btn-minor-background: $minor;
$btn-minor-color: setContrast($minor);
$btn-minor-style: ();

$btn-minor-hover-background: setHover($btn-minor-background);
$btn-minor-hover-color: $btn-minor-color;
$btn-minor-hover-style: ();`,
            },
            {
              name: 'Inverted Button',
              preview: '<a href="" class="btn btn_invert">Inverted</a>',
              markup: '<a href="" class="btn btn_invert">Inverted</a>',
              config: `$btn-invert-background: $background;
$btn-invert-color: $link;
$btn-invert-style: ();

$btn-invert-hover-background: setHover($btn-invert-background);
$btn-invert-hover-color: setHover($btn-invert-color);
$btn-invert-hover-style: ();`,
              previewStyle: 'is-theme-invert',
            },
            {
              name: 'Clear Button',
              preview: '<a href="" class="btn btn_clear">Clear</a>',
              markup: '<a href="" class="btn btn_clear">Clear</a>',
              config: `$btn-clear-background: transparent;
$btn-clear-color: $link;
$btn-clear-style: ();

$btn-clear-hover-background: $btn-clear-background;
$btn-clear-hover-color: setHover($btn-clear-color);
$btn-clear-hover-style: ();`,
            },
          ],
        },
        {
          title: 'Outlined Buttons',
          id: 'btn-outlined',
          navTitle: 'Outlined Buttons',
          summary: '',
          groupItems: [
            {
              name: 'Outlined Button',
              preview: '<a href="" class="btn btn_outlined">Outlined</a>',
              markup: '<a href="" class="btn btn_outlined">Outlined</a>',
              config: `$btn-outline-border-width: 1;
$btn-outline-border-style: solid;

$btn-outline-border-color: $link;
$btn-outline-color: $link;
$btn-outline-style: ();

$btn-outline-hover-border-color: setHover($btn-outline-border-color);
$btn-outline-hover-color: setHover($btn-outline-color);
$btn-outline-hover-style: ();`,
            },
            {
              name: 'Outlined Super Button',
              preview: '<a href="" class="btn btn_outlined btn_super">Outlined Super</a>',
              markup: '<a href="" class="btn btn_outlined btn_super">Outlined Super</a>',
              config: `$btn-outline-super-border-color: $super;
$btn-outline-super-color: $super;
$btn-outline-super-style: ();

$btn-outline-super-hover-border-color: setHover($btn-outline-super-border-color);
$btn-outline-super-hover-color: setHover($btn-outline-super-color);
$btn-outline-super-hover-style: ();`,
            },
            {
              name: 'Outlined Minor Button',
              preview: '<a href="" class="btn btn_outlined btn_minor">Outlined Minor</a>',
              markup: '<a href="" class="btn btn_outlined btn_minor">Outlined Minor</a>',
              config: `$btn-outline-minor-border-color: $minor;
$btn-outline-minor-color: $text-light;
$btn-outline-minor-style: ();

$btn-outline-minor-hover-border-color: setHover($btn-outline-minor-border-color);
$btn-outline-minor-hover-color: setHover($btn-outline-minor-color);
$btn-outline-minor-hover-style: ();`,
              previewStyle: 'is-theme',
            },
            {
              name: 'Outlined Invert Button',
              preview: '<a href="" class="btn btn_outlined btn_invert">Outlined Invert</a>',
              markup: '<a href="" class="btn btn_outlined btn_invert">Outlined Invert</a>',
              config: `$btn-outline-invert-border-color: $text-invert;
$btn-outline-invert-color: $text-invert;
$btn-outline-invert-style: ();

$btn-outline-invert-hover-border-color: setHover($btn-outline-invert-border-color);
$btn-outline-invert-hover-color: setHover($btn-outline-invert-color);
$btn-outline-invert-hover-style: ();`,
              previewStyle: 'is-theme-invert',
            },
          ],
        },
        {
          title: 'Additional Button Sizes',
          id: 'btn-sizes',
          navTitle: 'Button Sizes',
          summary: '',
          groupItems: [
            {
              name: 'Wide Button',
              preview: '<a href="" class="btn btn_wide">wide</a>',
              markup: '<a href="" class="btn btn_wide">wide</a>',
              config: `// @param {px} $btn-wide -  min width for .btn_wide button
// @param {px} $btn-small-wide - min width for .btn_wide.btn_small button
// @param {px} $btn-big-wide - min width for .btn_wide.btn_big button
$btn-wide: 240 !default;
$btn-small-wide: 160 !default;
$btn-big-wide: 240 !default;`,
            },
            {
              name: 'Block Button',
              preview: '<a href="" class="btn btn_block">block</a>',
              markup: '<a href="" class="btn btn_block">block</a>',
              config: null,
            },
          ],
        },
        {
          title: 'Additional Button Modifier',
          id: 'btn-modifier',
          navTitle: 'Button Modifier',
          summary: '',
          groupItems: [
            {
              name: 'Rounded Button',
              preview: '<a href="" class="btn btn_round">wide</a>',
              markup: '<a href="" class="btn btn_round">wide</a>',
              config: null,
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
