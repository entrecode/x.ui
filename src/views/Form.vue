<template>
  <section class="has-padding-8">
    <form-field-group/>
    <form-xui-select/>
    <form-xui-toggle/>
    <form-range-slider/>
    <form-file-upload/>
  </section>
</template>

<script>
import FormFieldGroup from '@/components/Form/FieldGroup.vue';
import FormXuiSelect from '@/components/Form/XuiSelect.vue';
import FormXuiToggle from '@/components/Form/XuiToggle.vue';
import FormRangeSlider from '@/components/Form/RangeSlider.vue';
import FormFileUpload from '@/components/Form/FileUpload.vue';
export default {
  components: {
    FormFieldGroup,
    FormXuiSelect,
    FormXuiToggle,
    FormRangeSlider,
    FormFileUpload,
  },
};
</script>
