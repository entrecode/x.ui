<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>is-border</h1>
      </div>

      <div class="demo-preview is-padding-8" data-flex="center">
        <div :class="borderClass">
          <div class="nav" data-flex="center">
            <div class="nav__item">
              <div
                class="btn btn_clear"
                @click="setBorder('outside')"
                :class="border.has('outside') ? 'is-ink-link' : 'is-ink-lighter'"
              >
                <svg class="ixo">
                  <use xlink:href="#border-outside" />
                </svg>
              </div>
            </div>
            <div class="nav__item">
              <div
                class="btn btn_clear"
                @click="setBorder('top')"
                :class="border.has('top') ? 'is-ink-link' : 'is-ink-lighter'"
              >
                <svg class="ixo">
                  <use xlink:href="#border-top" />
                </svg>
              </div>
            </div>
            <div class="nav__item">
              <div
                class="btn btn_clear"
                @click="setBorder('right')"
                :class="border.has('right') ? 'is-ink-link' : 'is-ink-lighter'"
              >
                <svg class="ixo">
                  <use xlink:href="#border-right" />
                </svg>
              </div>
            </div>
            <div class="nav__item">
              <div
                class="btn btn_clear"
                @click="setBorder('bottom')"
                :class="border.has('bottom') ? 'is-ink-link' : 'is-ink-lighter'"
              >
                <svg class="ixo">
                  <use xlink:href="#border-bottom" />
                </svg>
              </div>
            </div>
            <div class="nav__item">
              <div
                class="btn btn_clear"
                @click="setBorder('left')"
                :class="border.has('left') ? 'is-ink-link' : 'is-ink-lighter'"
              >
                <svg class="ixo">
                  <use xlink:href="#border-left" />
                </svg>
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
  name: 'IsBorder',
  components: {
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      requires: [{ name: 'array-magic()', type: 'mixin', link: '#scroll-to-array-magic' }],
      border: new Set(),
      borderClass: '',
      markup: `<div class="is-border"></div>`,
      params: [
        {
          name: '$is-border',
          type: 'string',
          value: '1 solid rgba($text, 0.1)',
        },
      ],
    };
  },
  methods: {
    setBorder: function(el) {
      if (el === 'outside') {
        if (this.border.has(el)) {
          this.border.clear();
        } else {
          this.border.clear();
          this.border.add(el);
        }
      } else {
        if (this.border.has('outside')) {
          this.border.clear();
        }
        if (this.border.has(el)) {
          this.border.delete(el);
        } else {
          this.border.add(el);
        }
      }

      this.$forceUpdate();

      let hb = '';
      let vb = '';

      if (this.border.has('top')) {
        hb = 'is-border-top';

        if (this.border.has('bottom')) {
          hb = 'is-border-middle';
        }
      }

      if (this.border.has('bottom')) {
        hb = 'is-border-bottom';

        if (this.border.has('top')) {
          hb = 'is-border-middle';
        }
      }

      if (this.border.has('left')) {
        vb = 'is-border-left';

        if (this.border.has('right')) {
          vb = 'is-border-center';
        }
      }

      if (this.border.has('right')) {
        vb = 'is-border-right';

        if (this.border.has('left')) {
          vb = 'is-border-center';
        }
      }

      if (this.border.has('outside')) {
        hb = 'is-border';
        vb = null;
      }

      this.borderClass = [hb, vb].filter(x => !!x).join(' ');
    },
  },
  mounted() {
    this.setBorder('outside');
  },
  watch: {
    borderClass: function() {
      this.markup = `<div class="${this.borderClass}"></div>`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
