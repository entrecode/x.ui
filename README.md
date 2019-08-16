# x.ui.10

## getting started

### install with npm

```sh
npm i x.ui --save
```

### import x.ui in your [project].scss 

```sh
@import '~x.ui/scss/x.ui'
```

### create your [project-config].scss

this file only contains the needed parameters for your interface. import your config file in this order:

```sh
@import '~x.ui/scss/x.ui'
```

your parameters overwrite the excisting definitions in `_xui-config.scss`. Go directly to `scss/_xui-config.scss` or explore all config-options in the [documentation](https://entrecode.github.io/x.ui/#/).

## update x.ui 9

in x.ui there are several breaking changes. please follow this instruction to update to x.ui 10

```scss
 `~x.ui/src/x.ui` // old
 `~x.ui/scss/x.ui` // new
```


### 1. update mixins and funcion references

all functions and mixins are kebab-case now. Also some names are simplified for better convinience

- renamed `arrayMagic()` to `array-magic()`
- renamed `getBreakpoint()` to `bp()`
- renamed `flattenColor()` to `flatten-color()`
- renamed `getColor()` to `get-color()`
- renamed `getSpace()` to `get-space()`
- renamed `setContrast()` to `set-contrast()`
- renamed `setHover()` to `set-hover()`
- renamed `shadeByContrast()` to `shade-by-contrast()`
- renamed `stripUnit()` to `strip-unit()`
- renamed `systemColor()` to `system-color()`
- renamed `varColor()` to `var-color()`
- renamed `nextBp()` to `next-bp()`
- renamed `getBrightness()` to `get-brightness()`
- renamed `colorDifference()` to `color-difference()`
- renamed `colorPass()` to `color-pass()`
- renamed `colorMargin()` to `color-margin()`
- renamed `contrastRatio()` to `contrast-ratio()`
- renamed `checkCompliance()` to `check-compliance()`
- renamed `findContrastLoop()` to `find-contrast-loop()`
- renamed `brightnessDifference()` to `brightness-difference()`
- renamed `set-map-breakpoints()` to `set-data-map-breakpoints()`
- renamed `macro-metrics()` to `metrics()`

### 2. update config params

- changed `$base-weight` to `$base-font-weight`
- changed `$body-font` to `$body-font-family`
- changed `$headings-font` to `$headings-font-family`
- changed `$hover-shading` to `$_set-hover-shading`
- changed `$xui-checkbox-` config variables
- changed `$xui-radio-` config variables
- rename `$divider-color` to `$base-divider-color`
- rename `$divider-background` to `$divider-color`
- rename `$divider-background-invert` to `$divider-color-invert`
- rename `$nav-link-selected#` to `$nav-link-active#`

### 3. update modifier classes

all modifier classes now have the same prefix `is-`

- rename `.has-margin#` to `.is-margin#` 
- rename `.has-padding#` to `.is-padding#`
- rename `.has-radius#` to `.is-radius#`
- rename `.has-height#` to `.is-height#`
- rename `.has-min-height#` to `.is-min-height#`
- rename `.has-width#` to `.is-width#`
- rename `.has-min-width#` to `.is-min-width#`
- rename `.is-bordered` to `.is-border`
- change `.no-padding` to `.is-padding-0`
- change `.has-padding[-side]` to `.has-padding[-side]-3`
- change `.has-padding[-side]-smallest` to `.has-padding[-side]-1`
- change `.has-padding[-side]-small` to `.has-padding[-side]-2`
- change `.has-padding[-side]-big` to `.has-padding[-side]-5`
- change `.no-margin` to `.is-margin-0`
- change `.has-margin[-side]` to `.has-margin[-side]-3`
- change `.has-margin[-side]-smallest` to `.has-margin[-side]-1`
- change `.has-margin[-side]-small` to `.has-margin[-side]-2`
- change `.has-margin[-side]-big` to `.has-margin[-side]-5`


### 4. update changed class names

- rename `.flex-spacer` to `.flex-space`
- rename `.bumper-small` to `.bumper.bumper_small`
- rename `.bumper-big` to `.bumper.bumper_big`
- rename `.spacer-small` to `.spacer.spacer_small`
- rename `.spacer-big` to `.spacer.spacer_big`
- rename `.alert-small` to `.alert.alert_small`
- rename `.alert-big` to `.alert.alert_big`
- change `.is-visible#` to `is-block#` or `is-flex#`
- change `.is-raised#` to `is-elevated#`
- change `.is-lifted#` to `is-elevated#`
- change `.is-rounded#` to `is-radius#`
- change `.toolbar` to `.titlebar`
- change `.title` to `.titlebar`
- change `.is-positioned#` to `.is-placed#`
- change `.img_responsive` to `.img-responsive`
- change `.img_full` to `.img-fullwidth`
- change `.bubble` to `.tag`
- rename `.slider` to `.range-slider`
- 

### 5. remove classes

- remove `.well-small` and `.well-big`
- remove `.is-hidden-from#`
- remove `.btn_glow`
- remove `data-animate` use another animation library instead
- remove `.pull`

### 6. update markup

- change `.form-group` markup to
  ```
  <div class="field-group">
    <label class="field-group__label">...</label>
    <input class="input" />
    <p class="field-group__info">...</p>
  </div>

  <div class="field-group field-group_boolean">
    <label class="field-group__label">field-group label</label>
    <input type="checkbox" />
  </div>
  ```
- change `.xui-checkbox` markup to
  ```
  <div class="xui-checkbox">
    <input type="checkbox">
    <label class="xui-checkbox__label">...</label>
  </div>
  ```
- change `.xui-radio` markup to
  ```
  <div class="xui-radio">
    <input type="radio">
    <label class="xui-radio__label">...</label>
  </div>
  ```
- change `.xui-toggle` markup to
  ```
  <div class="xui-toggle">
    <input id="" type="checkbox">
    <label for="" class="xui-toggle__label">
      <div class="xui-toggle__switch"></div> 
      ...
    </label>
  </div>
  ```
- change `.nav` markup to
  ```
  <ul class="nav">
    <li class="nav__item">...</li>
    <li class="nav__divider"></li>
    <li class="nav__item">...</li>
  </ul>
  ```
- change `.dialog`, `.deck`, `.overlay`, `.toast`, `.snackbar` markup to 
  ```
  <div class="modal-wrapper">
    <div class="modal">
      <!-- whatever you want -->
    </div>
  </div>
  ```
- change `.xui-accordion` markup to 
  ```
  <div class="xui-accordion">
    <input id="" name="" type="radio"/>
    <label for="" class="xui-accordion__handle">...</label>
    <div class="xui-accordion__target">...</div>
  </div>
  ```


### 7. update grid markup

- change `data-flex-item="grow"` to `data-col="auto"`
- change `data-flex-item="grow-even"` to `data-col="auto"`
- change `data-flex-item="fit-self"` to `data-col="fit"`
- change `data-row` to `data-grid`
- remove all `is-` prefixes from `data-flex` values
- change breakpoint postfix from `-` to `@` e.g. `@sm`
- change `data-grid="is-small"` to `data-grid="small-gutter"`
- change `data-grid="default"` to `data-grid="default-gutter"`
- change `data-grid="is-center"` to `data-grid="center"`
- change `data-grid="is-end"` to `data-grid="end"`
- change `data-grid="is-start"` to `data-grid="start"`


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


### x.ui 9.x doc

[x.ui 9.x documentation](https://xuidoc.entrecode.de/)
