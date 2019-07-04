<template>
  <section>
    <div data-grid>
      <div data-col="10 8@xl">
        <div class="is-padding-center-3">
          <h2>field-group</h2>
        </div>
        <div class="nav">
          <div class="nav__item">
            <a
              @click="activeTab = 1"
              class="btn btn_clear demo-tab"
              :class="{ 'is-active': activeTab === 1 }"
            >default</a>
          </div>
          <div class="nav__item">
            <a
              @click="activeTab = 2"
              class="btn btn_clear demo-tab"
              :class="{ 'is-active': activeTab === 2 }"
            >with grid</a>
          </div>
        </div>

        <div class="demo-preview is-padding-8" data-flex="center" v-if="activeTab === 1">
          <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl">
            <div class="field-group">
              <label for class="field-group__label">field-group label</label>
              <input type="text" placeholder="input..." class="input" />
              <p class="field-group__info">field-group info</p>
            </div>
            <div class="field-group">
              <input type="checkbox" id="3gjh3" />
              <label for="3gjh3">field-group label</label>
            </div>
          </div>
        </div>

        <div
          class="demo-preview is-padding-8"
          data-flex="column center-items"
          v-if="activeTab === 2"
        >
          <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl">
            <div data-grid>
              <div data-col="6">
                <div class="field-group">
                  <label for class="field-group__label">label</label>
                  <input type="text" placeholder="input..." class="input" />
                  <p class="field-group__info">field-group info</p>
                </div>
              </div>
              <div data-col="6">
                <div class="field-group">
                  <label for class="field-group__label">label</label>
                  <input type="text" placeholder="input..." class="input" />
                  <p class="field-group__info">field-group info</p>
                </div>
              </div>
              <div class="spacer"></div>
              <div data-col="12">
                <div class="field-group" data-flex>
                  <label for class="field-group__label" data-col="3">label</label>
                  <div data-col="9">
                    <input type="text" placeholder="input..." class="input" />
                    <p class="field-group__info">field-group info</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-grid="center">
          <div data-col="10@md 8@lg">
            <div class="spacer"></div>
            <pre v-highlightjs="defaultMarkup" v-show="activeTab === 1"><code class="html"></code></pre>
            <pre v-highlightjs="withGridMarkup" v-show="activeTab === 2"><code class="html"></code></pre>
            <div class="spacer"></div>
            <params-table :params="inputParams"></params-table>
          </div>
        </div>
      </div>
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
      activeTab: 1,
      defaultMarkup: `<div class="field-group">
  <label for="" class="field-group__label">field-group label</label>
  <input type="text" placeholder="input..." class="input">
  <p class="field-group__info">field-group info</p>
</div>
<div class="field-group">
  <input type="checkbox" id="3gjh3">
  <label for="3gjh3">field-group label</label>
</div>`,
      withGridMarkup: `<div data-grid>
  <div data-col="6">
    <div class="field-group">
      <label for="" class="field-group__label">label</label>
      <input type="text" placeholder="input..." class="input" />
      <p class="field-group__info">field-group info</p>
    </div>
  </div>
  
  <div data-col="6">
    <div class="field-group">
      <label for="" class="field-group__label">label</label>
      <input type="text" placeholder="input..." class="input" />
      <p class="field-group__info">field-group info</p>
    </div>
  </div>
  
  <div data-col="12">
    <div class="field-group" data-flex>
      <label for="" class="field-group__label" data-col="3">label</label>
      <div data-col="9">
        <input type="text" placeholder="input..." class="input" />
        <p class="field-group__info">field-group info</p>
      </div>
    </div>
  </div>
</div>`,
      inputParams: [
        {
          name: '$field-group-spacing',
          type: 'array',
          default: '0 0 16',
        },
        {
          name: '$field-group-padding',
          type: 'array',
          default: '0',
        },
        {
          name: '$field-group-background',
          type: 'color',
          default: 'none',
        },
        {
          name: '$field-group-style',
          type: 'array',
          default: '',
        },
        {
          name: '$field-group-label-spacing',
          type: 'array',
          default: '4',
        },
        {
          name: '$field-group-label-font-size',
          type: 'number',
          default: '$base-font-size // 16',
        },
        {
          name: '$field-group-label-style',
          type: 'array',
          default: '',
        },
        {
          name: '$field-group-info-spacing',
          type: 'array',
          default: '8',
        },
        {
          name: '$field-group-info-font-size',
          type: 'number',
          default: '$base-font-size * 0.75 // 12',
        },
        {
          name: '$field-group-info-style',
          type: 'array',
          default: '',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
