import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { router } from './router';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS);
Vue.config.productionTip = false;

Vue.use(Vuex);

const fixIdScrolling = {
  watch: {
    $route(to, from) {
      const currentRoute = this.$router.currentRoute;
      const idToScrollTo = currentRoute.hash;
      this.$nextTick(() => {
        if (idToScrollTo && document.querySelector(idToScrollTo)) {
          document.querySelector(idToScrollTo).scrollIntoView();
        }
      });
    },
  },
};

const store = new Vuex.Store({
  state: {
    colors: {
      background: '#ffffff',
      backgroundLight: '#e0e0e0',
      backgroundLighter: '#ebebeb',
      backgroundLightest: '#f7f7f7',
      backgroundInvert: '#0d2e48',
      baseDividerColor: 'rgba(13, 46, 72, 0.1)',
      baseDividerInvertedColor: 'rgba(255, 255, 255, 0.1)',
      inputBackground: '#edf2f7',
      inputColor: '#0d2e48',
      text: '#0d2e48',
      textLight: 'rgba(13, 46, 72, 0.6)',
      textLighter: 'rgba(13, 46, 72, 0.4)',
      textLightest: 'rgba(13, 46, 72, 0.2)',
      textInvert: '#ffffff',
      link: '#00cd97',
      linkContrast: '#ffffff',
      linkSafe: '#00cd97',
      linkHover: '#00b986',
      super: '#fb5557',
      superContrast: '#000000',
      superSafe: '#e50508',
      superHover: '#f96b6e',
      minor: '#edf2f7',
      minorContrast: '#00674c',
      minorSafe: '#274058',
      minorHover: '#dee8f1',
      highlight: '#2196f3',
      highlightContrast: '#0d2e48',
      highlightSafe: '#064475',
      highlightHover: '#0a8bf5',
      stateHover: 'rgba(0, 205, 151, 0.1)',
      stateHoverContrast: '#00cd97',
      stateError: '#f9d7da',
      stateErrorContrast: '#0d2e48',
      stateErrorSafe: '#b61b29',
      stateErrorHover: '#f7c4c8',
      stateSuccess: '#d3ecdb',
      stateSuccessContrast: '#0d2e48',
      stateSuccessSafe: '#2b623c',
      stateSuccessHover: '#c4e7cf',
      stateWarning: '#fff2cf',
      stateWarningContrast: '#0d2e48',
      stateWarningSafe: '#694d00',
      stateWarningHover: '#ffecbb',
      stateInfo: '#cae6fe',
      stateInfoContrast: '#0d2e48',
      stateInfoSafe: '#035193',
      stateInfoHover: '#b5dcff',
    },
  },
  mutations: {
    updateColor(state, payload) {
      state.colors[payload.key] = payload.color;
    },
  },
  actions: {},
});

new Vue({
  mixins: [fixIdScrolling],
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
