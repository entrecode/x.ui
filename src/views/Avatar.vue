<template>
  <section>
    <h2>avatar</h2>
    <div data-col="10@md 8@lg">
      <div class="demo-preview is-padding-5">
        <div data-grid="center">
          <div data-col="12" data-flex="center">
            <div class="avatar demo-transition is-margin-middle-5" :class="computedClasses">
              <img src="avatar.png" />
            </div>
          </div>
          <div class="is-theme is-padding-middle-2 is-padding-center-3" data-col="fit" data-grid="small">
            <div data-col="fit">
              <select class="input input_round" v-model="avatarSize">
                <option value>default</option>
                <option value="avatar_small">small</option>
                <option value="avatar_big">big</option>
              </select>
            </div>
            <div data-col="fit">
              <div class="xui-checkbox">
                <input type="checkbox" v-model="avatarStyle" id="avatarStyle" />
                <label for="avatarStyle" class="xui-checkbox__label">square</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="params"></params-table>
      <div class="spacer"></div>
      <requires-list :requires="requires"></requires-list>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';
import RequiresList from '@/components/RequiresList.vue';

export default {
  components: {
    RequiresList,
    ParamsTable,
  },
  data: () => {
    return {
      avatarStyle: '',
      avatarSize: '',
      markup: `<div class="avatar">
  <img ...>
</div>

<img class="avatar" ... />`,
      requires: [
        { name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' },
        { name: 'inject-style()', type: 'mixin', link: '#scroll-to-inject-style' },
        { name: 'rem()', type: 'function', link: '#scroll-to-rem' },
      ],
      params: [
        {
          name: '$avatar-size',
          type: 'number',
          default: '40',
        },
        {
          name: '$avatar-small-size',
          type: 'number',
          default: '24',
        },
        {
          name: '$avatar-big-size',
          type: 'number',
          default: '64',
        },
        {
          name: '$avatar-border',
          type: 'number',
          default: '0',
        },
        {
          name: '$avatar-background',
          type: 'color',
          default: 'background-lightest',
        },
        {
          name: '$avatar-square-radius',
          type: 'number',
          default: '4',
        },
        {
          name: '$avatar-style',
          type: 'map',
        },
      ],
    };
  },
  computed: {
    computedClasses() {
      return [this.avatarStyle ? 'avatar_square' : null, this.avatarSize ? ' ' + this.avatarSize : null].join('');
    },
  },
  watch: {
    computedClasses: function(val) {
      this.markup = `<div class="avatar${this.computedClasses}">
  <img ...>
</div>`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
