<template>
  <section>
    <div :class="displaySelected + breakpoint" class="demo-bg has-margin-bottom-5 has-padding-8"></div>
    <div data-grid>
      <div data-col="6">
        <div class="field-group">
          <select id="displaySelected" class="input" v-model="displaySelected">
            <option :value="value" v-for="(value, index) in displayOptions" :key="index" v-text="value"></option>
          </select>
        </div>
      </div>
      <div data-col="6">
        <div class="field-group">
          <select id="displaySelected" class="input" v-model="breakpoint">
            <option
              :value="value"
              v-for="(value, index) in breakpoints"
              :key="index"
              v-text="value === '' ? 'select a breakpoint' : value"
            ></option>
          </select>
        </div>
      </div>
    </div>
    <div class="demo-code" v-text="displaySelected + breakpoint"></div>
    <p>special class <span class="code">is-hidden-input</span></p>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      displayOptions: ['is-hidden', 'is-block', 'is-flex'],
      displaySelected: 'is-block',
      breakpoints: ['', '@xs', '@sm', '@md', '@lg', '@xl', '@xxl'],
      breakpoint: '',
    };
  },
};
</script>

<style scoped lang="scss">
.demo-highlight {
  img {
    position: relative;
    z-index: -1;
  }
}

.demo-highlight-y {
  box-shadow: inset -16px 0 0 rgba(var(--spacingColor), 0.2);
}

.demo-highlight-x {
  box-shadow: inset 0 -16px 0 rgba(var(--spacingColor), 0.2);
}

.demo-highlight-both {
  box-shadow: inset -16px -16px 0 rgba(var(--spacingColor), 0.2);
}
</style>
