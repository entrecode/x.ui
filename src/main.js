import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import vueSmoothScroll from 'vue2-smooth-scroll';
import App from './App.vue';

Vue.use(vueSmoothScroll);
Vue.use(VueHighlightJS);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
