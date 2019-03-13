<template>
  <section id="scroll-to-button">
    <DocTab>
      <div slot="title">
        <h3>Button</h3>
      </div>
      <div slot="preview">
        <a href class="btn">Small</a>&ensp;
        <a href class="btn">
          <svg class="ixo">
            <use xlink:href="#fire"></use>
          </svg>
          Small
        </a>&ensp;
        <a href class="btn">
          Small
          <svg class="ixo">
            <use xlink:href="#fire"></use>
          </svg>
        </a>&ensp;
        <a href class="btn">
          <svg class="ixo">
            <use xlink:href="#fire"></use>
          </svg>
        </a>
      </div>

      <div slot="markup">
        <pre v-highlightjs="inputMarkup"><code class="html"></code></pre>
      </div>
      <div slot="config">
        <pre v-highlightjs><code class="scss">$btn-font-family: $body-font;
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
);</code></pre>
      </div>
    </DocTab>
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
      inputMarkup:
        '<a href="" class="btn">Default</a>\n<a href="" class="btn btn_super">Super</a>\n<a href="" class="btn btn_minor">Minor</a>\n<a href="" class="btn btn_clear">Clear</a>',
    };
  },
};
</script>

<style scoped lang="scss">
</style>
