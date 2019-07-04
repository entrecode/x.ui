<template>
  <section>
    <div data-col="10 8@xl">
      <div class="titlebar">
        <h1>fieldset</h1>
      </div>
      <div class="demo-preview is-padding-8" data-flex="center">
        <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="10 8@xl">
          <fieldset class="fieldset">
            <div data-grid="small-gutter">
              <div data-col="8">
                <div class="field-group">
                  <input type="text" placeholder="input..." class="input" />
                </div>
              </div>
              <div data-col="4" data-flex="center-items">
                <div class="field-group">
                  <div class="xui-checkbox">
                    <input type="checkbox" id="checkbox-4" />
                    <label for="checkbox-4" class="xui-checkbox__label">checkbox</label>
                  </div>
                </div>
              </div>
              <div data-col="4">
                <div class="field-group">
                  <input type="text" placeholder="input..." class="input" />
                </div>
              </div>
              <div data-col="8">
                <div class="field-group">
                  <input type="text" placeholder="input..." class="input" />
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="spacer"></div>
      <pre v-highlightjs="defaultMarkup"><code class="html"></code></pre>
      <div class="spacer"></div>
      <params-table :params="inputParams"></params-table>
    </div>
  </section>
</template>

<script>
import ParamsTable from '@/components/ParamsTable.vue';

export default {
  name: 'Form',
  components: {
    ParamsTable,
  },
  data: () => {
    return {
      defaultMarkup: `<fieldset class="fieldset">
  <div data-grid="small-gutter">
    <div data-col="8">
      <div class="field-group">
        <input type="text" placeholder="input..." class="input" />
      </div>
    </div>
    <div data-col="4" data-flex="center-items">
      <div class="field-group">
        <div class="xui-checkbox">
          <input type="checkbox" id="checkbox-4">
          <label for="checkbox-4" class="xui-checkbox__label">checkbox</label>
        </div>
      </div>
    </div>
    <div data-col="4">
      <div class="field-group">
        <input type="text" placeholder="input..." class="input" />
      </div>
    </div>
    <div data-col="8">
      <div class="field-group">
        <input type="text" placeholder="input..." class="input" />
      </div>
    </div>
  </div>
</fieldset>`,
      inputParams: [
        {
          name: '$fieldset-spacing',
          type: 'array',
          default: '0 0 16',
        },
        {
          name: '$fieldset-padding',
          type: 'array',
          default: '0',
        },
        {
          name: '$ieldset-background',
          type: 'color',
          default: 'transparent',
        },
        {
          name: '$fieldset-border',
          type: 'array',
          default: '0',
        },
        {
          name: '$fieldset-style',
          type: 'array',
          default: '',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
