<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>table</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="column center-items">
        <div v-html="markup"></div>

        <div class="is-theme is-margin-top-5 is-padding-center-2 is-round is-elevated-16">
          <div class="nav" data-flex="center">
            <div class="nav__item" data-col="6">
              <div class="input-group">
                <label for="alertSize" class="input-group__addon">
                  <svg class="ixo is-ink-link">
                    <use xlink:href="#grid-half" />
                  </svg>
                </label>
                <div class="x-space-1"></div>
                <input
                  type="text"
                  class="input"
                  v-model="col1"
                  placeholder="auto"
                  style="width: 80px;"
                />
                <div class="x-space-1"></div>
                <input
                  type="text"
                  class="input"
                  v-model="col2"
                  placeholder="auto"
                  style="width: 80px;"
                />
                <div class="x-space-1"></div>
                <input
                  type="text"
                  class="input"
                  v-model="col3"
                  placeholder="auto"
                  style="width: 80px;"
                />
              </div>
            </div>
            <div class="nav__item" data-col="fit">
              <div class="input-group">
                <label for="alerStyle" class="input-group__addon">
                  <svg class="ixo is-ink-link">
                    <use xlink:href="#color-palette" />
                  </svg>
                </label>
                <div class="input-group__addon">
                  <select class="input input_round" id="alerStyle" v-model="style">
                    <option
                      :value="style"
                      v-for="(style, index) in styles"
                      :key="index"
                      v-text="style === '' ? 'default' : style.slice(6)"
                    ></option>
                  </select>
                </div>
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
    ParamsTable,
    RequiresList,
  },
  data: () => {
    return {
      params: [
        {
          name: '$table-spacing',
          type: 'array',
          default: '0 0 16 0',
        },
        {
          name: '$table-border',
          type: 'array',
          default: '1 solid $base-divider-color',
        },
        {
          name: '$table-cell-padding',
          type: 'array',
          default: '8',
        },
      ],
      requires: [{ name: 'array-magic()', type: 'function', link: '#scroll-to-array-magic' }],
      styles: ['', 'table_bordered', 'table_clear'],
      style: '',
      col1: null,
      col2: null,
      col3: null,
      markup: `<table class="table">
  <thead>
    <tr>
      <th>title</th>
      <th>description</th>
      <th>date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>
        Outcomes gender rights global social entrepreneurship mobilize data.
      </td>
      <td>17-11-20</td>
    </tr>
  </tbody>
</table>`,
    };
  },
  computed: {
    cols() {
      return [this.col1 + this.col1 + this.col3 + this.style].join('');
    },
  },
  watch: {
    cols: function() {
      this.markup = `<table class="table${this.style ? ' ' + this.style : ''}">
  <thead>
    <tr${this.col1 || this.col2 || this.col3 ? ' data-flex' : ''}>
      <th${this.col1 ? ' data-col="' + this.col1 + '"' : ''}>title</th{}>
      <th${this.col2 ? ' data-col="' + this.col2 + '"' : ''}>description</th>
      <th${this.col3 ? ' data-col="' + this.col3 + '"' : ''}>date</th>
    </tr>
  </thead>
  <tbody>
    <tr${this.col1 || this.col2 || this.col3 ? ' data-flex' : ''}>
      <td${this.col1 ? ' data-col="' + this.col1 + '"' : ''}>title</td>
      <td${this.col2 ? ' data-col="' + this.col2 + '"' : ''}>
        Outcomes gender rights global social entrepreneurship mobilize data.
      </td>
      <td${this.col3 ? ' data-col="' + this.col3 + '"' : ''}>17-11-20</td>
    </tr>
  </tbody>
</table>`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
