import Vue from 'vue';
import App from './App.vue';
import {router} from './router';
import VueHighlightJS from 'vue-highlightjs';
import vueSmoothScroll from 'vue2-smooth-scroll';

Vue.use(vueSmoothScroll);
Vue.use(VueHighlightJS);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
