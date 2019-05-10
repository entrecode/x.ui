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
      path: '/introduction',
      name: 'introduction',
      components: { main: () => import('./views/Introduction.vue'), menu: DemoMenubar },
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
      path: '/images',
      name: 'images',
      components: { main: () => import('./views/Images.vue'), menu: DemoMenubar },
    },
    {
      path: '/buttons',
      name: 'buttons',
      components: { main: () => import('./views/Buttons.vue'), menu: DemoMenubar },
    },
    {
      path: '/button-group',
      name: 'button-group',
      components: { main: () => import('./views/ButtonGroup.vue'), menu: DemoMenubar },
    },
    {
      path: '/form',
      name: 'form',
      components: { main: () => import('./views/Form.vue'), menu: DemoMenubar },
    },
    {
      path: '/loader',
      name: 'loader',
      components: { main: () => import('./views/Loader.vue'), menu: DemoMenubar },
    },
    {
      path: '/alert',
      name: 'alert',
      components: { main: () => import('./views/Alert.vue'), menu: DemoMenubar },
    },
    {
      path: '/well',
      name: 'well',
      components: { main: () => import('./views/Well.vue'), menu: DemoMenubar },
    },
    {
      path: '/titlebar',
      name: 'titlebar',
      components: { main: () => import('./views/ui/Titlebar.vue'), menu: DemoMenubar },
    },
    {
      path: '/avatar',
      name: 'avatar',
      components: { main: () => import('./views/Avatar.vue'), menu: DemoMenubar },
    },
    {
      path: '/tags',
      name: 'tags',
      components: { main: () => import('./views/Tags.vue'), menu: DemoMenubar },
    },
    {
      path: '/modal',
      name: 'modal',
      components: { main: () => import('./views/ui/Modal.vue'), menu: DemoMenubar },
    },
    {
      path: '/xui-list',
      name: 'xui-list',
      components: { main: () => import('./views/ui/XuiList.vue'), menu: DemoMenubar },
    },
    {
      path: '/xui-accordion',
      name: 'xui-accordion',
      components: { main: () => import('./views/ui/XuiAccordion.vue'), menu: DemoMenubar },
    },
    {
      path: '/table',
      name: 'table',
      components: { main: () => import('./views/ui/Table.vue'), menu: DemoMenubar },
    },
    {
      path: '/card',
      name: 'card',
      components: { main: () => import('./views/ui/Card.vue'), menu: DemoMenubar },
    },
    {
      path: '/nav',
      name: 'nav',
      components: { main: () => import('./views/ui/Nav.vue'), menu: DemoMenubar },
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
    {
      path: '/is-ink',
      name: 'is-ink',
      components: { main: () => import('./views/style/IsInk.vue'), menu: DemoMenubar },
    },
    {
      path: '/is-theme',
      name: 'is-theme',
      components: { main: () => import('./views/style/IsTheme.vue'), menu: DemoMenubar },
    },
    {
      path: '/is-elevated',
      name: 'is-elevated',
      components: { main: () => import('./views/style/IsElevated.vue'), menu: DemoMenubar },
    },
    {
      path: '/has-radius',
      name: 'has-radius',
      components: { main: () => import('./views/style/HasRadius.vue'), menu: DemoMenubar },
    },
    {
      path: '/has-border',
      name: 'has-border',
      components: { main: () => import('./views/style/HasBorder.vue'), menu: DemoMenubar },
    },
    {
      path: '/has-height',
      name: 'has-height',
      components: { main: () => import('./views/style/HasHeight.vue'), menu: DemoMenubar },
    },
    {
      path: '/has-width',
      name: 'has-width',
      components: { main: () => import('./views/style/HasWidth.vue'), menu: DemoMenubar },
    },
    {
      path: '/grid',
      name: 'grid',
      components: { main: () => import('./views/layout/Grid.vue'), menu: DemoMenubar },
    },
    {
      path: '/spacer',
      name: 'spacer',
      components: { main: () => import('./views/layout/Spacer.vue'), menu: DemoMenubar },
    },
    {
      path: '/has-margin',
      name: 'has-margin',
      components: { main: () => import('./views/layout/HasMargin.vue'), menu: DemoMenubar },
    },
    {
      path: '/has-padding',
      name: 'has-padding',
      components: { main: () => import('./views/layout/HasPadding.vue'), menu: DemoMenubar },
    },
  ],
});
