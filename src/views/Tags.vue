<template>
  <blocks-group :groups="sectionGroups" section-title="tags"></blocks-group>
</template>

<script>
import BlocksGroup from '@/components/BlocksGroup.vue';

export default {
  name: 'Tag',
  components: {
    BlocksGroup,
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
              title: 'Default Tag',
              preview: `<span class="tag">1</span>&emsp;&emsp;<a href class="btn">Button&emsp;<span class="tag">1</span></a>`,
              markup: `<span class="tag">1</span>
<a href class="btn">Button&emsp;<span class="tag">1</span></a>`,
              config: `// general tag config
$tag-font-family: $body-font-family;
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
              title: 'Small Tag',
              preview: `<span class="tag tag_small">1</span>&emsp;&emsp;<a href class="btn">Button&emsp;<span class="tag tag_small">1</span></a>`,
              markup: `<span class="tag tag_small">1</span>
<a href class="btn">Button&emsp;<span class="tag tag_small">1</span></a>`,
              config: `$tag-small-font-size: 12;
$tag-small-line-height: 12;
$tag-small-min-height: 16;
$tag-small-style: ()`,
            },
            {
              title: 'Big Tag',
              preview: `<span class="tag tag_big">1</span>&emsp;&emsp;<a href class="btn">Button&emsp;<span class="tag tag_big">1</span></a>`,
              markup: `<span class="tag tag_big">1</span>
<a href class="btn">Button&emsp;<span class="tag tag_big">1</span></a>`,
              config: `$tag-big-font-size: 14;
$tag-big-line-height: 14;
$tag-big-min-height: 28;
$tag-big-style: ();`,
            },
            {
              title: 'Rounded Tag',
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
              title: 'Tag Styles',
              preview: `<ul data-grid="small-gutter">
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_minor">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_link">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_super">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_highlight">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_info">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_error">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_success">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_warning">tag</span></li>
</ul>`,
              markup: `<span class="tag">tag</span>
<span class="tag tag_minor">tag</span>
<span class="tag tag_link">tag</span>
<span class="tag tag_super">tag</span>
<span class="tag tag_highlight">tag</span>
<span class="tag tag_info">tag</span>
<span class="tag tag_error">tag</span>
<span class="tag tag_success">tag</span>
<span class="tag tag_warning">tag</span>`,
              config: `$tag-array:(
  'minor': (
      $minor,
      $minor-contrast,
      $minor-hover,
    ),
    'link': (
      $link,
      $link-contrast,
      $link-hover,
    ),
    'super': (
      $super,
      $super-contrast,
      $super-hover,
    ),
    'highlight': (
      $highlight,
      $highlight-contrast,
      $highlight-hover,
    ),
    'info': (
      $state-info,
      $state-info-contrast,
      $state-info-hover,
    ),
    'error': (
      $state-error,
      $state-error-contrast,
      $state-error-hover,
    ),
    'success': (
      $state-success,
      $state-success-contrast,
      $state-success-hover,
    ),
    'warning': (
      $state-warning,
      $state-warning-contrast,
      $state-warning-hover,
    ),
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
              title: 'Outlined Tag',
              preview: `<ul data-grid="small-gutter">
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_minor">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_link">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_super">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_highlight">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_info">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_error">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_success">tag</span></li>
  <li data-col="fit" class="has-padding-bottom-2"><span class="tag tag_big tag_outlined tag_warning">tag</span></li>
</ul>`,
              markup: `<span class="tag tag_outlined">tag</span>
<span class="tag tag_outlined tag_minor">tag</span>
<span class="tag tag_outlined tag_link">tag</span>
<span class="tag tag_outlined tag_super">tag</span>
<span class="tag tag_outlined tag_highlight">tag</span>
<span class="tag tag_outlined tag_info">tag</span>
<span class="tag tag_outlined tag_error">tag</span>
<span class="tag tag_outlined tag_success">tag</span>
<span class="tag tag_outlined tag_warning">tag</span>`,
              config: `$tag-outlined-color: set-contrast($minor);
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