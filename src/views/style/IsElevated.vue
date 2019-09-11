<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>is-elevated</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="column center-items">
        <div v-html="markup"></div>

        <div class="is-theme is-margin-top-5 is-padding-center-2 is-radius is-elevated-16">
          <div class="nav" data-flex="center">
            <div class="nav__item" data-col="6">
              <div class="field-">
                <label class="field-group__label align-center">
                  <div
                    class="tag tag_big"
                    :class="{tag_link : elevation > -1}"
                  >{{elevation > -1 ? elevation : '-'}}</div>
                </label>
                <input type="range" min="-1" max="24" v-model="elevation" class="range-slider" />
                <div class="field-group__info align-center">elevation</div>
              </div>
            </div>
            <div class="nav__item" data-col="fit" data-flex="center">
              <div class="field-">
                <label class="field-group__label align-center">
                  <div
                    class="tag tag_big"
                    :class="{tag_link : hoverElevation > -1}"
                  >{{hoverElevation > -1 ? hoverElevation : '-'}}</div>
                </label>
                <input type="range" min="-1" max="24" v-model="hoverElevation" class="range-slider" />
                <div class="field-group__info align-center">hover:elevation</div>
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
  name: 'IsElevated',
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      markup: `<div class="is-padding-5 is-elevated-4">
  <h1>watch me elevate</h1>
</div>`,
      elevation: 4,
      hoverElevation: -1,
      params: [
        {
          name: '$elevation-color',
          type: 'color',
          default: '#000',
        },
        {
          name: '$elevation-opacity',
          type: 'number',
          default: '1',
          description: `multiplier for umbra (&times; 0.1), penumbra (&times; 0.08) and ambient (&times; 0.06)`,
        },
        {
          name: '$elevation-transition-duration',
          type: 'ms | s',
          default: '280ms',
        },
        {
          name: '$elevation-transition-timing-function',
          type: 'string',
          default: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
      ],
      requires: [{ name: 'elevation()', type: 'mixin' }, { name: 'elevation-transition()', type: 'mixin' }],
    };
  },
  computed: {
    classes() {
      return [
        this.elevation > 1 ? 'is-elevated-' + this.elevation : null,
        this.hoverElevation > 1 ? 'hover:is-elevated-' + this.hoverElevation : null,
      ]
        .join(' ')
        .trim();
    },
  },
  watch: {
    classes: function(val) {
      this.markup = `<div class="is-padding-5 ${val}">
  <h1>watch me elevate</h1>
</div>`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
