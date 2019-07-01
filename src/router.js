import Vue from 'vue';
import DemoMenubar from './components/Menubar.vue';
import Router from 'vue-router';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
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
      path: '/headings',
      name: 'headings',
      components: { main: () => import('./views/typeface/Headings.vue'), menu: DemoMenubar },
    },
    {
      path: '/paragraphs',
      name: 'paragraphs',
      components: { main: () => import('./views/typeface/Paragraphs.vue'), menu: DemoMenubar },
    },
    {
      path: '/lists',
      name: 'lists',
      components: { main: () => import('./views/typeface/Lists.vue'), menu: DemoMenubar },
    },
    {
      path: '/utils',
      name: 'utils',
      components: { main: () => import('./views/typeface/Utils.vue'), menu: DemoMenubar },
    },
    {
      path: '/img-crop',
      name: 'img-crop',
      components: { main: () => import('./views/ImgCrop.vue'), menu: DemoMenubar },
    },
    {
      path: '/responsiveness',
      name: 'responsiveness',
      components: { main: () => import('./views/ImgResponsive.vue'), menu: DemoMenubar },
    },
    {
      path: '/is-outset',
      name: 'is-outset',
      components: { main: () => import('./views/IsOutset.vue'), menu: DemoMenubar },
    },
    {
      path: '/button',
      name: 'button',
      components: { main: () => import('./views/Button.vue'), menu: DemoMenubar },
    },
    {
      path: '/button-group',
      name: 'button-group',
      components: { main: () => import('./views/ButtonGroup.vue'), menu: DemoMenubar },
    },
    {
      path: '/input',
      name: 'input',
      components: { main: () => import('./views/form/Input.vue'), menu: DemoMenubar },
    },
    {
      path: '/xui-checkbox',
      name: 'xui-checkbox',
      components: { main: () => import('./views/form/XuiCheckbox.vue'), menu: DemoMenubar },
    },
    {
      path: '/xui-radio',
      name: 'xui-radio',
      components: { main: () => import('./views/form/XuiRadio.vue'), menu: DemoMenubar },
    },
    {
      path: '/xui-toggle',
      name: 'xui-toggle',
      components: { main: () => import('./views/form/XuiToggle.vue'), menu: DemoMenubar },
    },
    {
      path: '/xui-select',
      name: 'xui-select',
      components: { main: () => import('./views/form/XuiSelect.vue'), menu: DemoMenubar },
    },
    {
      path: '/range-slider',
      name: 'range-slider',
      components: { main: () => import('./views/form/RangeSlider.vue'), menu: DemoMenubar },
    },
    {
      path: '/file-upload',
      name: 'file-upload',
      components: { main: () => import('./views/form/FileUpload.vue'), menu: DemoMenubar },
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
      path: '/dropdown',
      name: 'dropdown',
      components: { main: () => import('./views/ui/Dropdown.vue'), menu: DemoMenubar },
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
      path: '/is-radius',
      name: 'is-radius',
      components: { main: () => import('./views/style/IsRadius.vue'), menu: DemoMenubar },
    },
    {
      path: '/is-border',
      name: 'is-border',
      components: { main: () => import('./views/style/IsBorder.vue'), menu: DemoMenubar },
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
      path: '/is-margin',
      name: 'is-margin',
      components: { main: () => import('./views/layout/IsMargin.vue'), menu: DemoMenubar },
    },
    {
      path: '/is-padding',
      name: 'is-padding',
      components: { main: () => import('./views/layout/IsPadding.vue'), menu: DemoMenubar },
    },
    {
      path: '/is-height',
      name: 'is-height',
      components: { main: () => import('./views/layout/IsHeight.vue'), menu: DemoMenubar },
    },
    {
      path: '/is-width',
      name: 'is-width',
      components: { main: () => import('./views/layout/IsWidth.vue'), menu: DemoMenubar },
    },
    {
      path: '/position',
      name: 'position',
      components: { main: () => import('./views/layout/Position.vue'), menu: DemoMenubar },
    },
    {
      path: '/display',
      name: 'display',
      components: { main: () => import('./views/layout/Display.vue'), menu: DemoMenubar },
    },
    {
      path: '/is-scrollable',
      name: 'is-scrollable',
      components: { main: () => import('./views/layout/IsScrollable.vue'), menu: DemoMenubar },
    },
    {
      path: '/data-tooltip',
      name: 'data-tooltip',
      components: { main: () => import('./views/utilities/DataTooltip.vue'), menu: DemoMenubar },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
