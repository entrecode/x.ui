<template>
  <section data-container>
    <div data-grid="is-center">
      <div data-col="8">
        <div class="has-margin-bottom-8" id="#scroll-to-avatar">
          <h2>avatar</h2>
          <DocTab>
            <div slot="title"></div>
            <div slot="preview">
              <div data-grid>
                <div data-col="4" data-flex="center center-items" class="has-padding-3">
                  <div class="avatar avatar_small">
                    <img src="./../../assets/avatar.png">
                  </div>
                </div>
                <div data-col="4" data-flex="center center-items" class="has-padding-3">
                  <div class="avatar">
                    <img src="./../../assets/avatar.png">
                  </div>
                </div>
                <div data-col="4" data-flex="center center-items" class="has-padding-3">
                  <div class="avatar avatar_big">
                    <img src="./../../assets/avatar.png">
                  </div>
                </div>
                <div data-col="4" data-flex="center center-items" class="has-padding-3">
                  <div class="avatar avatar_square avatar_small">
                    <img src="./../../assets/avatar.png">
                  </div>
                </div>
                <div data-col="4" data-flex="center center-items" class="has-padding-3">
                  <div class="avatar avatar_square">
                    <img src="./../../assets/avatar.png">
                  </div>
                </div>
                <div data-col="4" data-flex="center center-items" class="has-padding-3">
                  <div class="avatar avatar_square avatar_big">
                    <img src="./../../assets/avatar.png">
                  </div>
                </div>
              </div>
            </div>

            <div slot="markup">
              <pre v-highlightjs="markup"><code class="html"></code></pre>
            </div>
            <div slot="config">
              <pre v-highlightjs="config"><code class="scss"></code></pre>
            </div>
          </DocTab>
        </div>
      </div>
      <div data-col="2">
        <!-- <ul class="nav nav_stacked is-sticky" style="top: 120px;">
          <li class="nav__item" v-if="sectionTitle">
            <h2 v-text="sectionTitle"></h2>
          </li>
          <li class="nav__item" v-for="(item, index) in groups" :key="index">
            <a
              :href="'#scroll-to-' + item.id"
              v-smooth-scroll
              class="is-kilo is-ink-light hover:is-ink-link"
            >{{item.navTitle}}</a>
          </li>
        </ul>-->
      </div>
    </div>
  </section>
</template>

<script>
import DocTab from './../DocTab.vue';

export default {
  name: 'Avatar',
  components: {
    DocTab,
  },
  data: () => {
    return {
      markup: `<div class="avatar avatar_small">
  <img src="" />
</div>
<div class="avatar">
  <img src="" />
</div>
<div class="avatar avatar_big">
  <img src="" />
</div>
<div class="avatar avatar_square avatar_small">
  <img src="" />
</div>
<div class="avatar avatar_square">
  <img src="" />
</div>
<div class="avatar avatar_square avatar_big">
  <img src="" />
</div>`,
      config: `$avatar-size: 40;
$avatar-small-size: 24;
$avatar-big-size: 64;
$avatar-border: 0;
$avatar-background: $background-lightest;
$avatar-square-radius: 4;
$avatar-style: ();`,
    };
  },
};
</script>

<style scoped lang="scss">
</style>