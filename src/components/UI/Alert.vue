<template>
  <blocks-group :groups="sectionGroups" section-title="alert"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'Alert',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          navTitle: 'default',
          title: '',
          id: 'alert',
          groupItems: [
            {
              preview: `<div class="alert">
  <h2>Thought leader,</h2>
  <p>ecosystem families energize correlation, social enterprise citizen-centered. </p>
</div>`,
              config: `$alert-background: $background-lightest;
$alert-weight: $is-normal;
$alert-radius: 4;`,
            },
          ],
        },
        {
          navTitle: 'sizes',
          title: '',
          id: 'alert-sizes',
          groupItems: [
            {
              preview: `<div class="alert alert_small">
  ecosystem families energize correlation, social enterprise citizen-centered.
</div>
<div class="alert">
  ecosystem families energize correlation, social enterprise citizen-centered.
</div>
<div class="alert alert_big">
  ecosystem families energize correlation, social enterprise citizen-centered.
</div>`,
              markup: `<div class="alert alert_small">...</div>
<div class="alert">...</div>
<div class="alert alert_big">...</div>`,
              config: `$alert-font-size: $base-font-size; // 16
$alert-padding: 16 24;
$alert-spacing: 0 0 16 0;
$alert-style: ();

$alert-small-font-size: $alert-font-size * 0.875; // 14.875
$alert-small-padding: 8 12;
$alert-small-spacing: $alert-spacing;
$alert-small-style: ();

$alert-big-font-size: $alert-font-size * 1.125; // 18
$alert-big-padding: 24 28;
$alert-big-spacing: $alert-spacing;
$alert-big-style: ();`,
            },
          ],
        },
        {
          navTitle: 'styles',
          title: '',
          id: 'alert-styles',
          groupItems: [
            {
              preview: `<div class="alert alert_info">
  ecosystem families energize correlation, social enterprise citizen-centered.
</div>
<div class="alert alert_error">
  ecosystem families energize correlation, social enterprise citizen-centered.
</div>
<div class="alert alert_success">
  ecosystem families energize correlation, social enterprise citizen-centered.
</div>
<div class="alert alert_warning">
  ecosystem families energize correlation, social enterprise citizen-centered.
</div>`,
              config: `$alert-styles: (
  'info': (
    $state-info,
    $state-info-contrast,
  ),
  'error': (
    $state-error,
    $state-error-contrast,
  ),
  'success': (
    $state-success,
    $state-success-contrast,
  ),
  'warning': (
    $state-warning,
    $state-warning-contrast,
  ),
);`,
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