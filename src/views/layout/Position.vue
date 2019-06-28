<template>
  <section>
    <div class="demo-bg is-relative is-height-vh-golden">
      <div
        class="is-theme has-padding-5 has-radius is-elevated-24"
        style="max-width: 320px;"
        :class="isPosition + ' ' + isPlaced + '-' + orientation + ' is-layer-' + isLayer"
      >
        <code
          class="demo-code has-margin-bottom-5"
          v-text="isPosition + ' ' + isPlaced + '-' + orientation + ' is-layer-' + isLayer"
        ></code>
        <div class="field-group">
          <label for="isPosition" class="field-group__label">is-position</label>
          <select id="isPosition" class="input" v-model="isPosition">
            <option :value="value" v-for="(value, index) in isPositions" :key="index" v-text="value"></option>
          </select>
        </div>
        <div class="field-group">
          <label for="isPlaced" class="field-group__label">is-placed</label>
          <select id="isPlaced" class="input" v-model="isPlaced">
            <option :value="value" v-for="(value, index) in isPlaceds" :key="index" v-text="value"></option>
          </select>
        </div>
        <div class="demo-compass has-margin-bottom-3">
          <div class="xui-radio">
            <input type="radio" id="nw" name="compass" value="nw" v-model="orientation" />
            <label for="nw" class="xui-radio__label"></label>
          </div>
          <div class="xui-radio">
            <input type="radio" id="n" name="compass" value="n" v-model="orientation" />
            <label for="n" class="xui-radio__label"></label>
          </div>
          <div class="xui-radio">
            <input type="radio" id="ne" name="compass" value="ne" v-model="orientation" />
            <label for="ne" class="xui-radio__label"></label>
          </div>
          <div class="xui-radio">
            <input type="radio" id="w" name="compass" value="w" v-model="orientation" />
            <label for="w" class="xui-radio__label"></label>
          </div>
          <div class="xui-radio">
            <input type="radio" id="0" name="compass" value="0" v-model="orientation" />
            <label for="0" class="xui-radio__label"></label>
          </div>
          <div class="xui-radio">
            <input type="radio" id="e" name="compass" value="e" v-model="orientation" />
            <label for="e" class="xui-radio__label"></label>
          </div>
          <div class="xui-radio">
            <input type="radio" id="sw" name="compass" value="sw" v-model="orientation" />
            <label for="sw" class="xui-radio__label"></label>
          </div>
          <div class="xui-radio">
            <input type="radio" id="s" name="compass" value="s" v-model="orientation" />
            <label for="s" class="xui-radio__label"></label>
          </div>
          <div class="xui-radio">
            <input type="radio" id="se" name="compass" value="se" v-model="orientation" />
            <label for="se" class="xui-radio__label"></label>
          </div>
        </div>
        <div class="field-group">
          <label for="isLayer" class="field-group__label">is-layer</label>
          <select id="isLayer" class="input" v-model="isLayer">
            <option :value="value" v-for="(value, index) in isLayers" :key="index" v-text="value"></option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      isPositions: ['is-relative', 'is-absolute', 'is-fixed', 'is-sticky'],
      isPosition: 'is-absolute',
      isPlaceds: ['is-placed', 'is-fab'],
      isPlaced: 'is-placed',
      orientation: '0',
      isLayers: ['1', '10', '100', '9999'],
      isLayer: '10',
    };
  },
};
</script>

<style scoped lang="scss">
.demo-compass {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 16px;
  align-items: center;
  justify-items: center;
}
</style>
