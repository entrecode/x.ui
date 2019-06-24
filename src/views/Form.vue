<template>
  <section class="has-padding-8">
    <form-field-group/>
    <form-xui-select/>
  </section>
</template>

<script>
import FormFieldGroup from '@/components/Form/FieldGroup.vue';
import FormXuiSelect from '@/components/Form/XuiSelect.vue';
export default {
  components: {
    FormFieldGroup,
    FormXuiSelect,
  },
};
</script>
