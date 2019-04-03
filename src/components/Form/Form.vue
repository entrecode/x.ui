<template>
  <group-section :groups="sectionGroups" section-title="Form"></group-section>
</template>

<script>
import GroupSection from './../GroupSection.vue';

export default {
  name: 'Form',
  components: {
    GroupSection,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: 'input',
          summary: `the <span class="code">.input</span> class can be applied to the folowing input types`,
          id: 'input',
          navTitle: 'input',
          groupItems: [
            {
              name: '',
              preview: `<input type="text" class="input" placeholder="text input..."><br>
<textarea rows="3" class="input" placeholder="textarea..."></textarea><br>
<select class="input">
  <option value="" selected>select option</option>
  <option value="">option</option>
  <option value="">option</option>
</select><br>
<input type="date" class="input" placeholder="date input..."><br>
<input type="datetime-local" class="input" placeholder="date input..."><br>
<input type="time" class="input" placeholder="time input..."><br>
<input type="week" class="input" placeholder="week input..."><br>
<input type="month" class="input" placeholder="month input..."><br>
<input type="email" class="input" placeholder="email input..."><br>
<input type="password" class="input" placeholder="password input..."><br>
<input type="search" class="input" placeholder="search input..."><br>
<input type="tel" class="input" placeholder="tel input..."><br>
<input type="url" class="input" placeholder="url input..."><br>
<input type="number" class="input" placeholder="number input...">`,
              config: `$input-font-size: $base-font-size;
$input-line-height: $input-font-size * 1.125;
$input-min-height: 32;
$input-padding-ratio: 1;
$input-spacing: 0;
$input-border-color: transparent;
$input-border-width: 0;
$input-border-style: solid;
$input-background: var(--inputBackground);
$input-color: var(--inputColor);
$input-style: ();
$input-hover-style: ();
$input-focus-style: ();
$input-disabled-style: ();

$input-placeholder-color: var(--inputPlaceholderColor);
$input-placeholder-style: ();
$input-placeholder-hover-style: ();
$input-placeholder-focus-style: ();`,
            },
            {
              name: 'input sizes',
              summary: 'besides the default size there are two additional sizes',
              preview: `<input type="text" class="input input_small" placeholder="small input..."><br>
<input type="text" class="input" placeholder="default input..."><br>
<input type="text" class="input input_big" placeholder="big input...">`,
              config: `$input-small-font-size: $input-font-size * 0.875;
$input-small-line-height: $input-small-font-size * $base-line-height;
$input-small-min-height: 28;
$input-small-style: ();

$input-big-font-size: $input-font-size * 1.125;
$input-big-line-height: $input-big-font-size * $base-line-height;
$input-big-min-height: 40;
$input-big-style: ();`,
            },
            {
              name: 'input round',
              preview: `<input type="text" class="input input_round" placeholder="round input...">`,
              config: ``,
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
