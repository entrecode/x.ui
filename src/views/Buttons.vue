<template>
  <div class="has-padding-8">
    <ui-buttons/>
    <ui-button-group/>
  </div>
</template>

<script>
import UiButtons from '@/components/UI/Buttons.vue';
import UiButtonGroup from '@/components/UI/ButtonGroup.vue';
export default {
  components: {
    UiButtons,
    UiButtonGroup,
  },
};
</script>
