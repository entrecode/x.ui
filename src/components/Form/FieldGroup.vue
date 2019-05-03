<template>
  <blocks-group :groups="sectionGroups" section-title="field-group"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          id: 'field-group',
          type: 'molecules',
          navTitle: 'field-group',
          groupItems: [
            {
              title: 'default usage',
              preview: `<div class="field-group">
  <label for="" class="field-group__label">field-group label</label>
  <input type="text" placeholder="input..." class="input">
  <p class="field-group__info">field-group info</p>
</div>
<div class="field-group">
  <input type="checkbox" id="3gjh3">
  <label for="3gjh3">field-group label</label>
</div>`,
              markup: ``,
              config: `$field-group-spacing: 0 0 16;
$field-group-padding: 0;
$field-group-background: none;
$field-group-style: ();

$field-group-label-spacing: 4;
$field-group-label-font-size: $base-font-size;
$field-group-label-style: ();

$field-group-info-spacing: 8;
$field-group-info-font-size: $base-font-size * 0.75;
$field-group-info-style: ();`,
            },
            {
              title: 'with grid',
              preview: `<div data-grid>
  <div data-col="6">
    <div class="field-group">
      <label for="" class="field-group__label">label</label>
      <input type="text" placeholder="input..." class="input" />
      <p class="field-group__info">field-group info</p>
    </div>
  </div>
  <div data-col="6">
    <div class="field-group">
      <label for="" class="field-group__label">label</label>
      <input type="text" placeholder="input..." class="input" />
      <p class="field-group__info">field-group info</p>
    </div>
  </div>
  <div class="spacer"></div>
  <div data-col="12">
    <div class="field-group" data-flex>
      <label for="" class="field-group__label" data-col="3">label</label>
      <div data-col="9">
        <input type="text" placeholder="input..." class="input" />
        <p class="field-group__info">field-group info</p>
      </div>
    </div>
  </div>
</div>`,
              markup: ``,
            },
            {
              title: 'with fieldset',
              preview: `<fieldset class="fieldset">
  <div data-grid="is-small">
    <div data-col="8">
      <div class="field-group">
        <input type="text" placeholder="input..." class="input" />
      </div>
    </div>
    <div data-col="4" data-flex="center-items">
      <div class="field-group">
        <div class="xui-checkbox">
          <input type="checkbox" id="checkbox-4">
          <label for="checkbox-4" class="xui-checkbox__label">checkbox</label>
        </div>
      </div>
    </div>
    <div data-col="4">
      <div class="field-group">
        <input type="text" placeholder="input..." class="input" />
      </div>
    </div>
    <div data-col="8">
      <div class="field-group">
        <input type="text" placeholder="input..." class="input" />
      </div>
    </div>
  </div>
</fieldset>`,
              markup: ``,
              config: `$fieldset-background: transparent;
$fieldset-padding: 0;
$fieldset-spacing: 0 0 16;
$fieldset-border: 0;
$fieldset-style: ();`,
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
