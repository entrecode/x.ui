import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/getting-started',
      name: 'getting-started',
      component: () => import('./views/GettingStarted.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/typo',
      name: 'typo',
      component: () => import('./views/Typo.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/Form.vue'),
    },
  ],
});
