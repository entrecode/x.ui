<template>
  <section id="scroll-to-input">
    <DocTab>
      <div slot="title">
        <h3>field-group</h3>
      </div>
      <div slot="preview">
        <div class="field-group">
          <label class="field-group__label">label</label>
          <input type="text" class="input" placeholder="text">
        </div>
        <div class="field-group">
          <label class="field-group__label">textarea</label>
          <textarea rows="4" class="input" placeholder="textarea"></textarea>
        </div>
        <div class="field-group">
          <label class="field-group__label">number</label>
          <input type="text" class="input" placeholder="number">
          <div class="field-group__info">field information</div>
        </div>
      </div>

      <div slot="markup">
        <pre v-highlightjs="inputMarkup"><code class="html"></code></pre>
      </div>
      <div slot="config">
        <pre v-highlightjs><code class="scss">$field-group-spacing: 0 0 16;
$field-group-padding: 0;
$field-group-background: none;
$field-group-style: ();

$field-group-label-spacing: 0 0 4 0;
$field-group-label-font-size: $base-font-size;
$field-group-label-style: ();

$field-group-info-spacing: 8 0 8 0;
$field-group-info-font-size: $base-font-size;
$field-group-info-style: ();</code></pre>
      </div>
    </DocTab>
  </section>
</template>

<script>
import DocTab from './../DocTab.vue';

export default {
  name: 'Form',
  components: {
    DocTab,
  },
  data: () => {
    return {
      inputMarkup: '<div class="field-group">\n  <label for="text" class="field-group__label">text</label>\n  <input type="text" class="input" placeholder="text">\n</div>\n\n<div class="field-group">\n  <label for="text" class="field-group__label">text</label>\n  <textarea rows="4" class="input" placeholder="textarea"></textarea>\n</div>\n\n<div class="field-group">\n  <label for="text" class="field-group__label">text</label>\n  <input type="text" class="input" placeholder="text">\n  <div class="field-group__info">field information</div>\n</div>',
    };
  },
};
</script>

<style scoped lang="scss">
</style>
