<template>
  <blocks-group :groups="sectionGroups" section-title="xui-accordion"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'XuiAccordion',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: 'toggle single',
          id: 'xui-accordion-single-toggle',
          navTitle: 'single toggle',
          groupItems: [
            {
              preview: `<div class="xui-accordion">
  <input
    type="radio"
    name="xuiToggleGroup"
    id="toggleList1"
    checked="checked"
  />
  <label for="toggleList1" class="xui-accordion__handle">
    Entry 1
  </label>
  <div class="xui-accordion__target">
    Content 1
  </div>
</div>
<div class="xui-accordion">
  <input type="radio" name="xuiToggleGroup" id="toggleList2" />
  <label for="toggleList2" class="xui-accordion__handle">
    Entry 2
  </label>
  <div class="xui-accordion__target">
    Content 2
  </div>
</div>
<div class="xui-accordion">
  <input type="radio" name="xuiToggleGroup" id="toggleList3" />
  <label for="toggleList3" class="xui-accordion__handle">
    Entry 3
  </label>
  <div class="xui-accordion__target">
    Content 3
  </div>
</div>`,
              markup: `<div class="xui-accordion">
  <input type="radio" name="" id="" checked="checked" />
  <label for="" class="xui-accordion__handle">...</label>
  <div class="xui-accordion__target">...</div>
</div>
`,
            },
          ],
        },
        {
          title: 'toggle multiple',
          id: 'xui-accordion-multiple-toggle',
          navTitle: 'single multiple',
          groupItems: [
            {
              preview: `<div class="xui-accordion">
  <input
    type="checkbox"
    id="toggleListMulti1"
    checked="checked"
  />
  <label for="toggleListMulti1" class="xui-accordion__handle">
    Entry 1
  </label>
  <div class="xui-accordion__target">
    Content 1
  </div>
</div>
<div class="xui-accordion">
  <input type="checkbox" id="toggleListMulti2" />
  <label for="toggleListMulti2" class="xui-accordion__handle">
    Entry 2
  </label>
  <div class="xui-accordion__target">
    Content 2
  </div>
</div>
<div class="xui-accordion">
  <input type="checkbox" id="toggleListMulti3" />
  <label for="toggleListMulti3" class="xui-accordion__handle">
    Entry 3
  </label>
  <div class="xui-accordion__target">
    Content 3
  </div>
</div>`,
              markup: `<div class="xui-accordion">
  <input type="checkbox" name="" id="" checked="checked" />
  <label for="" class="xui-accordion__handle">...</label>
  <div class="xui-accordion__target">...</div>
</div>
`,
            },
          ],
        },
        {
          title: 'advanced',
          id: 'xui-accordion-advanced',
          navTitle: 'advanced',
          groupItems: [
            {
              preview: `<div class="xui-accordion has-border-bottom has-padding-3">
  <input
    type="checkbox"
    id="toggleListAdvanced1"
    checked="checked"
  />
  <label for="toggleListAdvanced1" data-flex="center-items" class="xui-accordion__handle">
    <a class="is-mega">Effective altruism</a>
    <div class="flex-space"></div>
    <div class="btn btn_clear">
      <svg class="ixo is-visible-collapsed"><use xlink:href="#expand-horizontal"></use></svg>
      <svg class="ixo is-hidden-collapsed"><use xlink:href="#shrink-horizontal"></use></svg>
    </div>
  </label>
  <div class="xui-accordion__target">
    Effective altruism collaborate social return on investment social enterprise inclusion sustainable. 
  </div>
</div>
<div class="xui-accordion has-border-bottom has-padding-3">
  <input
    type="checkbox"
    id="toggleListAdvanced2"
  />
  <label for="toggleListAdvanced2" data-flex="center-items" class="xui-accordion__handle">
    <a class="is-mega">Effective altruism</a>
    <div class="flex-space"></div>
    <div class="btn btn_clear">
      <svg class="ixo is-visible-collapsed"><use xlink:href="#expand-horizontal"></use></svg>
      <svg class="ixo is-hidden-collapsed"><use xlink:href="#shrink-horizontal"></use></svg>
    </div>
  </label>
  <div class="xui-accordion__target">
    Effective altruism collaborate social return on investment social enterprise inclusion sustainable. 
  </div>
</div>
<div class="xui-accordion has-padding-3">
  <input
    type="checkbox"
    id="toggleListAdvanced3"
  />
  <label for="toggleListAdvanced3" class="xui-accordion__handle xui-list-item">
    <div class="xui-list-item__start">
      <div class="avatar avatar_square avatar_big">
        <img src="avatar.png">
      </div>
    </div>
    <div class="xui-list-item__label">
      <a class="is-mega">Effective altruism</a>
    </div>
    <div class="xui-list-item__end">
      <div class="btn btn_clear">
        <svg class="ixo is-visible-collapsed"><use xlink:href="#expand-horizontal"></use></svg>
        <svg class="ixo is-hidden-collapsed"><use xlink:href="#shrink-horizontal"></use></svg>
      </div>
    </div>
  </label>
  <div class="xui-accordion__target">
    Effective altruism collaborate social return on investment social enterprise inclusion sustainable. 
  </div>
</div>
<div class="xui-accordion card has-padding-2">
  <input
    type="checkbox"
    id="toggleListAdvanced4"
  />
  <label for="toggleListAdvanced4" class="xui-accordion__handle xui-list-item">
    <div class="xui-list-item__start" data-flex-item="start">
      <div class="avatar avatar_square avatar_big">
        <img src="avatar.png">
      </div>
    </div>
    <div class="xui-list-item__label">
      <a class="is-mega">Effective altruism</a>
      <small class="is-hidden-collapsed">Effective altruism collaborate social return on investment social enterprise inclusion sustainable.</small>
    </div>
  </label>
</div>`,
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