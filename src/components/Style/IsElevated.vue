<template>
  <blocks-group :groups="sectionGroups" section-title="is-elevated"></blocks-group>
</template>

<script>
import BlocksGroup from './../BlocksGroup.vue';

export default {
  name: 'IsElevated',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          title: '',
          id: 'is-elevated',
          navTitle: 'is-elevated',
          groupItems: [
            {
              title: '',
              preview: `<div data-grid>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-0">
      is-elevated-0
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-1">
      is-elevated-1
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-2">
      is-elevated-2
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-3">
      is-elevated-3
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-4">
      is-elevated-4
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-5">
      is-elevated-5
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-6">
      is-elevated-6
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-7">
      is-elevated-7
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-8">
      is-elevated-8
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-9">
      is-elevated-9
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-10">
      is-elevated-10
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-11">
      is-elevated-11
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-12">
      is-elevated-12
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-13">
      is-elevated-13
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-14">
      is-elevated-14
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-15">
      is-elevated-15
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-16">
      is-elevated-16
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-17">
      is-elevated-17
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-18">
      is-elevated-18
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-19">
      is-elevated-19
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-20">
      is-elevated-20
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-21">
      is-elevated-21
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-22">
      is-elevated-22
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-23">
      is-elevated-23
    </div>
  </div>
  <div data-col="6">
    <div class="is-giga has-padding-3 has-margin-bottom-3 align-center is-elevated-24">
      is-elevated-24
    </div>
  </div>
</div>`,
              markup: `<div class="is-elevated-0"></div>
<div class="is-elevated-2"></div>
<div class="is-elevated-3"></div>
<div class="is-elevated-4"></div>
<div class="is-elevated-5"></div>
<div class="is-elevated-6"></div>
<div class="is-elevated-7"></div>
<div class="is-elevated-8"></div>
<div class="is-elevated-9"></div>
<div class="is-elevated-10"></div>
<div class="is-elevated-11"></div>
<div class="is-elevated-12"></div>
<div class="is-elevated-13"></div>
<div class="is-elevated-14"></div>
<div class="is-elevated-15"></div>
<div class="is-elevated-16"></div>
<div class="is-elevated-17"></div>
<div class="is-elevated-18"></div>
<div class="is-elevated-19"></div>
<div class="is-elevated-20"></div>
<div class="is-elevated-21"></div>
<div class="is-elevated-22"></div>
<div class="is-elevated-23"></div>
<div class="is-elevated-24"></div>`,
              config: `$elevation-color: #000;
$elevation-opacity: 1;
$elevation-prefix: 'is-elevated-';`,
            },
          ],
        },
        {
          title: '',
          id: 'hover-is-elevated',
          navTitle: 'hover:is-elevated',
          groupItems: [
            {
              title: '',
              preview: `<div data-grid>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-0">
      hover:is-elevated-0
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-1">
      hover:is-elevated-1
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-2">
      hover:is-elevated-2
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-3">
      hover:is-elevated-3
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-4">
      hover:is-elevated-4
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-5">
      hover:is-elevated-5
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-6">
      hover:is-elevated-6
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-7">
      hover:is-elevated-7
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-8">
      hover:is-elevated-8
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-9">
      hover:is-elevated-9
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-10">
      hover:is-elevated-10
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-11">
      hover:is-elevated-11
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-12">
      hover:is-elevated-12
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-13">
      hover:is-elevated-13
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-14">
      hover:is-elevated-14
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-15">
      hover:is-elevated-15
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-16">
      hover:is-elevated-16
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-17">
      hover:is-elevated-17
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-18">
      hover:is-elevated-18
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-19">
      hover:is-elevated-19
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-20">
      hover:is-elevated-20
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-21">
      hover:is-elevated-21
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-22">
      hover:is-elevated-22
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-23">
      hover:is-elevated-23
    </div>
  </div>
  <div data-col="6">
    <div class="is-mega has-padding-3 has-margin-bottom-3 align-center hover:is-elevated-24">
      hover:is-elevated-24
    </div>
  </div>
</div>`,
              markup: `<div class="hover:is-elevated-0"></div>
<div class="hover:is-elevated-2"></div>
<div class="hover:is-elevated-3"></div>
<div class="hover:is-elevated-4"></div>
<div class="hover:is-elevated-5"></div>
<div class="hover:is-elevated-6"></div>
<div class="hover:is-elevated-7"></div>
<div class="hover:is-elevated-8"></div>
<div class="hover:is-elevated-9"></div>
<div class="hover:is-elevated-10"></div>
<div class="hover:is-elevated-11"></div>
<div class="hover:is-elevated-12"></div>
<div class="hover:is-elevated-13"></div>
<div class="hover:is-elevated-14"></div>
<div class="hover:is-elevated-15"></div>
<div class="hover:is-elevated-16"></div>
<div class="hover:is-elevated-17"></div>
<div class="hover:is-elevated-18"></div>
<div class="hover:is-elevated-19"></div>
<div class="hover:is-elevated-20"></div>
<div class="hover:is-elevated-21"></div>
<div class="hover:is-elevated-22"></div>
<div class="hover:is-elevated-23"></div>
<div class="hover:is-elevated-24"></div>`,
              config: `$elevation-color: #000;
$elevation-opacity: 1;
$elevation-prefix: 'is-elevated-';`,
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