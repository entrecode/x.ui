<template>
  <section class="has-padding-8">
    <form-field-group/>
    <form-xui-select/>
    <form-checkbox/>
    <form-radio/>
    <form-xui-toggle/>
    <form-range-slider/>
    <form-file-upload/>
  </section>
</template>

<script>
import FormFieldGroup from '@/components/Form/FieldGroup.vue';
import FormXuiSelect from '@/components/Form/XuiSelect.vue';
import FormCheckbox from '@/components/Form/Checkbox.vue';
import FormRadio from '@/components/Form/Radio.vue';
import FormXuiToggle from '@/components/Form/XuiToggle.vue';
import FormRangeSlider from '@/components/Form/RangeSlider.vue';
import FormFileUpload from '@/components/Form/FileUpload.vue';
export default {
  components: {
    FormFieldGroup,
    FormXuiSelect,
    FormCheckbox,
    FormRadio,
    FormXuiToggle,
    FormRangeSlider,
    FormFileUpload,
  },
};
</script>
