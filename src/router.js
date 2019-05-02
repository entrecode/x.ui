import Vue from 'vue';
import DemoMenubar from './components/Menubar.vue';
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
      components: { hero: Home },
    },
    {
      path: '/getting-started',
      name: 'getting-started',
      components: { main: () => import('./views/GettingStarted.vue'), menu: DemoMenubar },
    },
    {
      path: '/about',
      name: 'about',
      components: { main: () => import('./views/About.vue'), menu: DemoMenubar },
    },
    {
      path: '/colors',
      name: 'colors',
      components: { main: () => import('./views/Colors.vue'), menu: DemoMenubar },
    },
    {
      path: '/typo',
      name: 'typo',
      components: { main: () => import('./views/Typo.vue'), menu: DemoMenubar },
    },
    {
      path: '/buttons',
      name: 'buttons',
      components: { main: () => import('./views/Buttons.vue'), menu: DemoMenubar },
    },
    {
      path: '/form',
      name: 'form',
      components: { main: () => import('./views/Form.vue'), menu: DemoMenubar },
    },
    {
      path: '/alert',
      name: 'alert',
      components: { main: () => import('./views/Alert.vue'), menu: DemoMenubar },
    },
    {
      path: '/functions',
      name: 'functions',
      components: { main: () => import('./views/Functions.vue'), menu: DemoMenubar },
    },
    {
      path: '/mixins',
      name: 'mixins',
      components: { main: () => import('./views/Mixins.vue'), menu: DemoMenubar },
    },
    {
      path: '/variables',
      name: 'variables',
      components: { main: () => import('./views/Variables.vue'), menu: DemoMenubar },
    },
  ],
});
