<template>
  <group-section :groups="sectionGroups" section-title="Tags"></group-section>
</template>

<script>
import GroupSection from './../GroupSection.vue';

export default {
  name: 'Tag',
  components: {
    GroupSection,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'tag',
          navTitle: 'Tag',
          groupItems: [
            {
              name: 'Default Tag',
              preview: `<span class="tag">1</span>&emsp;&emsp;<a href class="btn">Button&emsp;<span class="tag">1</span></a>`,
              markup: `<span class="tag">1</span>
<a href class="btn">Button&emsp;<span class="tag">1</span></a>`,
              config: `// general tag config
$tag-font-family: $body-font;
$tag-weight: $is-bold;
$tag-padding-ratio: 1;
$tag-background: $minor;
$tag-round: false;

// default tag config
$tag-font-size: 14;
$tag-line-height: 14;
$tag-min-height: 20;
$tag-style: ();`,
            },
            {
              name: 'Small Tag',
              preview: `<span class="tag tag_small">1</span>&emsp;&emsp;<a href class="btn">Button&emsp;<span class="tag tag_small">1</span></a>`,
              markup: `<span class="tag tag_small">1</span>
<a href class="btn">Button&emsp;<span class="tag tag_small">1</span></a>`,
              config: `$tag-small-font-size: 12;
$tag-small-line-height: 12;
$tag-small-min-height: 16;
$tag-small-style: ()`,
            },
            {
              name: 'Big Tag',
              preview: `<span class="tag tag_big">1</span>&emsp;&emsp;<a href class="btn">Button&emsp;<span class="tag tag_big">1</span></a>`,
              markup: `<span class="tag tag_big">1</span>
<a href class="btn">Button&emsp;<span class="tag tag_big">1</span></a>`,
              config: `$tag-big-font-size: 14;
$tag-big-line-height: 14;
$tag-big-min-height: 28;
$tag-big-style: ();`,
            },
            {
              name: 'Rounded Tag',
              preview: `<span class="tag tag_round">1</span>&emsp;&emsp;<a href class="btn">Button&emsp;<span class="tag tag_round">1</span></a>`,
              markup: `<span class="tag tag_round">1</span>
<a href class="btn">Button&emsp;<span class="tag tag_round">1</span></a>`,
              config: `$tag-radius: 2;
$tag-small-radius: $tag-radius;
$tag-big-radius: $tag-radius;`,
            },
          ],
        },
        {
          title: '',
          id: 'tag_styles',
          navTitle: 'Tag Styles',
          groupItems: [
            {
              name: 'Tag Styles',
              preview: `<ul data-grid="is-small">
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_minor">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_link">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_super">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_highlight">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_invert">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_info">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_error">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_success">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_warning">tag</span></li>
</ul>`,
              markup: `<span class="tag">tag</span>
<span class="tag tag_minor">tag</span>
<span class="tag tag_link">tag</span>
<span class="tag tag_super">tag</span>
<span class="tag tag_highlight">tag</span>
<span class="tag tag_invert">tag</span>
<span class="tag tag_info">tag</span>
<span class="tag tag_error">tag</span>
<span class="tag tag_success">tag</span>
<span class="tag tag_warning">tag</span>`,
              config: `$theme-array:(
  minor: $minor,
  link: $link,
  super: $super,
  highlight: $highlight,
  invert: $text-invert,
  info: $state-info,
  error: $state-error,
  success: $state-success,
  warning: $state-warning,
);`,
            },
          ],
        },
        {
          title: '',
          id: 'tag_outlined',
          navTitle: 'Outlined Tag',
          groupItems: [
            {
              name: 'Outlined Tag',
              preview: `<ul data-grid="is-small">
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_minor">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_link">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_super">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_highlight">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_invert">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_info">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_error">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_success">tag</span></li>
  <li data-col="is-fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_warning">tag</span></li>
</ul>`,
              markup: `<span class="tag tag_outlined">tag</span>
<span class="tag tag_outlined tag_minor">tag</span>
<span class="tag tag_outlined tag_link">tag</span>
<span class="tag tag_outlined tag_super">tag</span>
<span class="tag tag_outlined tag_highlight">tag</span>
<span class="tag tag_outlined tag_invert">tag</span>
<span class="tag tag_outlined tag_info">tag</span>
<span class="tag tag_outlined tag_error">tag</span>
<span class="tag tag_outlined tag_success">tag</span>
<span class="tag tag_outlined tag_warning">tag</span>`,
              config: `$tag-outlined-color: setContrast($minor);
$tag-outlined-border-color: $minor;
$tag-outlined-border-width: 1;
$tag-outlined-border-style: solid;`,
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