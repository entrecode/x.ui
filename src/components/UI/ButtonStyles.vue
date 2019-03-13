<template>
  <section id="scroll-to-button">
    <div class="has-margin-bottom-5" v-for="(group, index) in styleGroups" :key="index">
      <h2 v-text="group.title"></h2>
      <p v-text="group.markup"></p>
      <div class="spacer"></div>
      <DocTab v-for="(style, index) in group.styles" :key="index">
        <div slot="title">
          <h3 class="is-h4" v-text="style.name"></h3>
        </div>
        <div
          slot="preview"
          :class="style.darkPreview ? 'is-theme-invert' :  'is-theme-lightest'"
          class="has-padding-2 align-center has-radius"
          v-html="style.markup"
        ></div>

        <div slot="markup">
          <pre v-highlightjs="style.markup"><code class="html"></code></pre>
        </div>
        <div slot="config" v-if="style.config">
          <pre v-highlightjs="style.config"><code class="scss"></code></pre>
        </div>
      </DocTab>
    </div>
  </section>
</template>

<script>
import DocTab from './../DocTab.vue';

export default {
  name: 'ButtonStyles',
  components: {
    DocTab,
  },
  data: () => {
    return {
      styleGroups: [
        {
          title: 'Buttons',
          summary: '',
          styles: [
            {
              name: 'Button',
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
              markup: '<a href="" class="btn btn_invert">Inverted</a>',
              config: `$btn-invert-background: $background;
$btn-invert-color: $link;
$btn-invert-style: ();

$btn-invert-hover-background: setHover($btn-invert-background);
$btn-invert-hover-color: setHover($btn-invert-color);
$btn-invert-hover-style: ();`,
              darkPreview: true,
            },
            {
              name: 'Clear Button',
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
          summary: '',
          styles: [
            {
              name: 'Outlined Button',
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
              markup: '<a href="" class="btn btn_outlined btn_minor">Outlined Minor</a>',
              config: `$btn-outline-minor-border-color: $minor;
$btn-outline-minor-color: $text-light;
$btn-outline-minor-style: ();

$btn-outline-minor-hover-border-color: setHover($btn-outline-minor-border-color);
$btn-outline-minor-hover-color: setHover($btn-outline-minor-color);
$btn-outline-minor-hover-style: ();`,
            },
            {
              name: 'Outlined Invert Button',
              markup: '<a href="" class="btn btn_outlined btn_invert">Outlined Invert</a>',
              config: `$btn-outline-invert-border-color: $text-invert;
$btn-outline-invert-color: $text-invert;
$btn-outline-invert-style: ();

$btn-outline-invert-hover-border-color: setHover($btn-outline-invert-border-color);
$btn-outline-invert-hover-color: setHover($btn-outline-invert-color);
$btn-outline-invert-hover-style: ();`,
              darkPreview: true,
            },
          ],
        },
        {
          title: 'Additional Button Sizes',
          summary: '',
          styles: [
            {
              name: 'Wide Button',
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
              markup: '<a href="" class="btn btn_block">block</a>',
              config: null,
            },
          ],
        },
        {
          title: 'Additional Button Modifier',
          summary: '',
          styles: [
            {
              name: 'Rounded Button',
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
