<template>
  <section>
    <div data-grid>
      <div data-col="10 8@xl">
        <div class="is-padding-center-3">
          <h2>input-group</h2>
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
            >advanced</a>
          </div>
          <div class="nav__item">
            <a
              @click="activeTab = 3"
              class="btn btn_clear demo-tab"
              :class="{ 'is-active': activeTab === 3 }"
            >with grid</a>
          </div>
          <div class="nav__item">
            <a
              @click="activeTab = 4"
              class="btn btn_clear demo-tab"
              :class="{ 'is-active': activeTab === 4 }"
            >mixed inputs</a>
          </div>
          <div class="nav__item">
            <a
              @click="activeTab = 5"
              class="btn btn_clear demo-tab"
              :class="{ 'is-active': activeTab === 5 }"
            >with button</a>
          </div>
          <div class="nav__item">
            <a
              @click="activeTab = 6"
              class="btn btn_clear demo-tab"
              :class="{ 'is-active': activeTab === 6 }"
            >with ixo</a>
          </div>
        </div>

        <div
          class="demo-preview is-padding-8"
          data-flex="column center-items"
          v-if="activeTab === 1"
        >
          <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl">
            <div class="input-group">
              <div class="input-group__addon">
                <small>addon</small>
              </div>
              <input type="text" placeholder="input..." class="input" />
            </div>
            <div class="y-space-3"></div>
            <div class="input-group">
              <input type="text" placeholder="input..." class="input" />
              <div class="input-group__addon">
                <small>addon</small>
              </div>
            </div>
            <div class="y-space-3"></div>
            <div class="input-group">
              <div class="input-group__addon is-round-left">
                <small>addon</small>
              </div>
              <input type="text" placeholder="input..." class="input input_round" />
            </div>
          </div>
        </div>

        <div
          class="demo-preview is-padding-8"
          data-flex="column center-items"
          v-if="activeTab === 2"
        >
          <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl">
            <div class="input-group">
              <div class="input-group__addon">
                <small>addon</small>
              </div>
              <input type="text" placeholder="input..." class="input" />
              <div class="x-space-1"></div>
              <input type="text" placeholder="input..." class="input" />
            </div>
          </div>
        </div>

        <div
          class="demo-preview is-padding-8"
          data-flex="column center-items"
          v-if="activeTab === 3"
        >
          <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl">
            <div class="input-group">
              <div class="input-group__addon" data-col="4">
                <small>addon</small>
              </div>
              <input type="text" placeholder="input..." class="input" />
            </div>
          </div>
        </div>

        <div
          class="demo-preview is-padding-8"
          data-flex="column center-items"
          v-if="activeTab === 4"
        >
          <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl">
            <div class="input-group">
              <input type="text" placeholder="input..." class="input" />
              <div class="input-group__addon" data-col="6">
                <select class="input input_clear">
                  <option value selected>select option</option>
                  <option value>option</option>
                  <option value>option</option>
                </select>
              </div>
            </div>
            <div class="y-space-3"></div>
            <div class="input-group">
              <input type="text" placeholder="input..." class="input" />
              <div class="x-space-1" style="width:2px;"></div>
              <div class="input-group__addon">
                <div class="xui-checkbox">
                  <input type="checkbox" id="checkbox-3" />
                  <label for="checkbox-3" class="xui-checkbox__label">checkbox</label>
                </div>
              </div>
            </div>
            <div class="y-space-3"></div>
            <div class="input-group">
              <input type="text" placeholder="input..." class="input" />
              <div tabindex="0" class="xui-select">
                <span class="xui-select__placeholder">select</span>
                <span class="xui-select__caret"></span>
                <ul class="xui-select-options">
                  <li>
                    <a href tabindex="0" class="xui-select-option">option 1</a>
                  </li>
                  <li>
                    <a href tabindex="0" class="xui-select-option">option 2</a>
                  </li>
                  <li>
                    <a href tabindex="0" class="xui-select-option">option 3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          class="demo-preview is-padding-8"
          data-flex="column center-items"
          v-if="activeTab === 5"
        >
          <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl">
            <div class="input-group">
              <div class="input-group__addon">
                <small>addon</small>
              </div>
              <input type="text" placeholder="input..." class="input" />
              <a class="btn">submit</a>
            </div>
            <div class="y-space-3"></div>
            <div class="input-group">
              <input type="text" placeholder="input..." class="input" />
              <div class="input-group__addon">
                <a class="btn btn_clear">submit</a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="demo-preview is-padding-8"
          data-flex="column center-items"
          v-if="activeTab === 6"
        >
          <div class="is-theme is-padding-5 is-radius is-elevated-24" data-col="8@lg 6@xl">
            <div class="input-group">
              <input type="text" placeholder="input..." class="input" />
              <div class="input-group__addon">
                <svg class="ixo">
                  <use xlink:href="#fire" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="spacer"></div>
        <pre v-highlightjs="defaultMarkup" v-show="activeTab === 1"><code class="html"></code></pre>
        <pre v-highlightjs="advancedMarkup" v-show="activeTab === 2"><code class="html"></code></pre>
        <pre v-highlightjs="withGridMarkup" v-show="activeTab === 3"><code class="html"></code></pre>
        <pre v-highlightjs="mixedMarkup" v-show="activeTab === 4"><code class="html"></code></pre>
        <pre v-highlightjs="buttonMarkup" v-show="activeTab === 5"><code class="html"></code></pre>
        <pre v-highlightjs="ixoMarkup" v-show="activeTab === 6"><code class="html"></code></pre>
        <div class="spacer"></div>
        <params-table :params="inputParams"></params-table>
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
      defaultMarkup: `<div class="input-group">
  <div class="input-group__addon">
    <small>addon</small>
  </div>
  <input type="text" placeholder="input..." class="input" />
</div>

<div class="input-group">
  <input type="text" placeholder="input..." class="input" />
  <div class="input-group__addon">
    <small>addon</small>
  </div>
</div>

<div class="input-group">
  <div class="input-group__addon is-round-left">
    <small>addon</small>
  </div>
  <input type="text" placeholder="input..." class="input input_round" />
</div>`,
      advancedMarkup: `<div class="input-group">
  <div class="input-group__addon">
    <small>addon</small>
  </div>
  <input type="text" placeholder="input..." class="input" />
  <div class="x-space-1"></div>
  <input type="text" placeholder="input..." class="input" />
</div>`,
      withGridMarkup: `<div class="input-group">
  <div class="input-group__addon" data-col="4">
    <small>addon</small>
  </div>
  <input type="text" placeholder="input..." class="input" />
</div>`,
      mixedMarkup: `<div class="input-group">
  <input type="text" placeholder="input..." class="input" />
  <div class="input-group__addon" data-col="4">
    <select class="input input_clear">
      <option value="" selected>select option</option>
      <option value="">option</option>
      <option value="">option</option>
    </select>
  </div>
</div>

<div class="input-group">
  <input type="text" placeholder="input..." class="input" />
  <div class="x-space-1" style="width:2px;"></div>
  <div class="input-group__addon">
    <div class="xui-checkbox">
      <input type="checkbox" id="checkbox-3">
      <label for="checkbox-3" class="xui-checkbox__label">checkbox</label>
    </div>
  </div>
</div>

<div class="input-group">
  <input type="text" placeholder="input..." class="input" />
  <div tabindex="0" class="xui-select">
    <span class="xui-select__placeholder">select</span>
    <span class="xui-select__caret"></span>
    <ul class="xui-select-options">
      <li>
        <a href="" tabindex="0" class="xui-select-option">option 1</a>
      </li>
      <li>
        <a href="" tabindex="0" class="xui-select-option">option 2</a>
      </li>
      <li>
        <a href="" tabindex="0" class="xui-select-option">option 3</a>
      </li>
    </ul>
  </div>
</div>`,
      buttonMarkup: `<div class="input-group">
  <div class="input-group__addon">
    <small>addon</small>
  </div>
  <input type="text" placeholder="input..." class="input" />
  <a class="btn">submit</a>
</div>

<div class="input-group">
  <input type="text" placeholder="input..." class="input" />
  <div class="input-group__addon">
    <a class="btn btn_clear">submit</a>
  </div>
</div>`,
      ixoMarkup: `<div class="input-group">
  <input type="text" placeholder="input..." class="input" />
  <div class="input-group__addon">
    <svg class="ixo"><use xlink:href="#fire"></use></svg>
  </div>
</div>`,
      inputParams: [
        {
          name: '$input-group-spacing',
          type: 'array',
          default: '$input-spacing // 0',
        },
        {
          name: '$input-group-addon-color',
          type: 'color',
          default: '$text-light',
        },
        {
          name: '$input-group-addon-background',
          type: 'color',
          default: '$input-background',
        },
        {
          name: '$input-group-addon-border-color',
          type: 'color',
          default: '$input-border-color',
        },
        {
          name: '$input-group-addon-border-width',
          type: 'number',
          default: '$input-border-width // 0',
        },
        {
          name: '$input-group-addon-border-style',
          type: 'array',
          default: '$input-border-style',
        },
        {
          name: '$input-group-addon-padding',
          type: 'array',
          default: '0 8',
        },
        {
          name: '$input-group-addon-style',
          type: 'array',
          default: '',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
