<template>
  <div>
    <div class="well" data-flex="center">
      <div
        class="dropdown"
        tabindex="0"
        :class="[posX !== '' ? 'dropdown_' + posX : '', posY !== '' ? 'dropdown_' + posY : '' , {'on-hover' : onHover }]"
      >
        <a class="btn">click here</a>
        <div class="dropdown-options">
          <a href class="dropdown-option">dropdown option</a>
          <a href class="dropdown-option">dropdown option</a>
          <a href class="dropdown-option">dropdown option</a>
          <div class="dropdown_divider"></div>
          <div class="dropdown-option">
            <a href class="btn btn_block">a button</a>
          </div>
        </div>
      </div>
    </div>
    <div data-grid>
      <div data-col="4">
        <select class="input" v-model="posY">
          <option
            :value="pos"
            v-for="(pos, index) in posYs"
            :key="index"
            v-text="pos === '' ? 'select an option': pos"
          ></option>
        </select>
      </div>
      <div data-col="4">
        <select class="input" v-model="posX">
          <option
            :value="pos"
            v-for="(pos, index) in posXs"
            :key="index"
            v-text="pos === '' ? 'select an option': pos"
          ></option>
        </select>
      </div>
      <div data-col="4">
        <div class="xui-checkbox">
          <input type="checkbox" id="onHover" v-model="onHover">
          <label for="onHover" class="xui-checkbox__label">on-hover</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      posYs: ['', 'above'],
      posY: '',
      posXs: ['', 'left', 'center', 'right', 'full'],
      posX: '',
      onHover: false,
    };
  },
};
</script>

<style scoped lang="scss">
</style>