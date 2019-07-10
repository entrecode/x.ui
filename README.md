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
- renamed `macro-metrics()` to `macro()`

### 2. update config params

- changed `$base-weight` to `$base-font-weight`
- changed `$body-font` to `$body-font-family`
- changed `$headings-font` to `$headings-font-family`
- changed `$hover-shading` to `$_set-hover-shading`
- changed `$xui-checkbox-` config variables
- changed `$xui-radio-` config variables
- change `get-color(state, info)` reference to `$state-info` 
- change `get-color(state, success)` reference to `$state-success` 
- change `get-color(state, error)` reference to `$state-error` 
- change `get-color(state, warning)` reference to `$state-warning` 

### 3. update modifier classes

all modifier classes now have the same prefix `is-`

- renamed `.has-margin#` to `.is-margin#` 
- renamed `.has-padding#` to `.is-padding#`
- renamed `.has-radius#` to `.is-radius#`
- renamed `.has-height#` to `.is-height#`
- renamed `.has-min-height#` to `.is-min-height#`
- renamed `.has-width#` to `.is-width#`
- renamed `.has-min-width#` to `.is-min-width#`
- renamed `.is-bordered` to `.is-border`
- removed `.no-margin` use `.is-margin-0` instead
- removed `.no-padding` use `.is-padding-0` instead
- removed `.has-margin[-side]`, `.has-margin[-side]-smallest`, `.has-margin[-side]-small`, `.has-margin[-side]-big` use `.has-margin-3[-side]`, `.has-margin[-side]-1`, `.has-margin[-side]-2`, `.has-margin[-side]-5` instead
- removed `.has-padding[-side]`, `.has-padding[-side]-smallets`, `.has-padding[-side]-small`, `.has-padding[-side]-big` use `.has-padding-3[-side]`, `.has-padding[-side]-1`, `.has-padding[-side]-2`, `.has-padding[-side]-5` instead



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

[https://xuidoc.entrecode.de/]()
