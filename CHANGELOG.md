# CHANGELOG

## 10.0.0

### breaking changes

- changed `$xui-checkbox-` config variables
- changed `$xui-radio-` config variables

- renamed `$hamburger-btn-` to `$hamburger-btn-`
- renamed `.hamburger-btn` to `.hamburger`
- renamed `.flex-spacer` to `.flex-space`
- renamed `.bumper-small` to `.bumper.bumper_small`
- renamed `.bumper-big` to `.bumper.bumper_big`
- renamed `.spacer-small` to `.spacer.spacer_small`
- renamed `.spacer-big` to `.spacer.spacer_big`
- renamed `.alert-small` to `.alert.alert_small`
- renamed `.alert-big` to `.alert.alert_big`
- renamed `.img_responsive` and `.img_full` use `.img-responsive` or `.img-fullwidth` instead
- renamed `.has-margin` to `.is-margin`
- renamed `.has-padding` to `.is-padding`
- renamed `.has-radius` to `.is-radius`
- renamed `.has-height` to `.is-height`
- renamed `.has-min-height` to `.is-min-height`
- renamed `.has-width` to `.is-width`
- renamed `.has-min-width` to `.is-min-width`
- renamed `.is-bordered` to `.is-border`
- renamed `.slider` to `.range-slider`
- renamed `.title` and `.toolbar` to `.titlebar` instead
- renamed `$divider-color` to `$base-divider-color`
- renamed `$divider-background` and `$divider-background-invert` to `$divider-color` and `$divider-color-invert`
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

- removed `.well-small` and `.well-big`
- removed `.is-visible#` use `is-block#` or `is-flex#`
- removed `.is-raised#` use `is-elevated#` instead
- removed `.is-lifted#` use `is-elevated#` instead
- removed `.is-rounded#` use `is-radius#` instead
- removed `.is-hidden-from#`
- removed `.btn_glow`
- removed `data-flex-item` size values, use `data-col` instead
- removed `.xui-overlay`
- removed float grid styles `data-row`
- removed `.no-margin` use `.is-margin-0` instead
- removed `.no-padding` use `.is-padding-0` instead
- removed `.has-margin#`, `.has-margin#-smallest`, `.has-margin#-small`, `.has-margin#-big`
- removed `.has-padding#`, `.has-padding#-smallets`, `.has-padding#-small`, `.has-padding#-big`
- removed breakpoints for `align-`
- removed breakpoints for `is-clipped#`
- removed breakpoints for `.is-bordered`
- removed breakpoints for `.is-scrollable`
- removed `.not-positioned`
- removed breakpoints from `.is-placed` and `.is-position`
- removed `.form-group` use `.field-group` instead
- removed input validation styles
- removed `.bubble` use `.tag` instead
- removed all `is-` prefixes from `data-flex` values
- removed `data-animate` use third-party libraries like animate.css instead
- removed `.pull`
- removed placeholder `%toggle` and `%toggle-is-active`
- removed placeholder `%ec-icon`
- removed `xui-tabs`

- refactored and combined `is-positioned` and `is-fab`

- optimized `.nav` - dropped `.nav__items`
- improved `.xui-accordion`

- changed breakpoint postfix from `-` to `@` e.g. `@sm`
- changed `data-grid="is-small"` to `data-grid="small-gutter"`
- changed `data-grid="default"` to `data-grid="default-gutter"`
- changed `data-grid="is-center"` to `data-grid="center"`
- changed `data-grid="is-end"` to `data-grid="end"`
- changed `data-grid="is-start"` to `data-grid="start"`
- changed `macro-metrics()` to `metrics()`
- changed `@extend %btn;` to `@include _btn-reset;`

### changes

- changed `$base-weight` to `$base-font-weight`
- changed `$body-font` to `$body-font-family`
- changed `$headings-font` to `$headings-font-family`
- changed `$hover-shading` to `$_set-hover-shading`
- added `$alert-styles` for alert styles
- added `$tag-styles` for tag styles
- renamed `$nav-link-selected#` variabels to `$nav-link-active#`
- updated headings styles
- refactored `.avatar`
- refactored `.file-upload`
- refactored `.is-layer-#`
- refactored `.[is-position]`
- refactored `.is-theme-#`
- refactored `.btn-group`
- refactored color variables
- removed background variables from `.btn_outline`
- improved `.input_round`
- improved `.btn_round`
- removed `.form-boolean`
- removed `.alert_outlined`

### added

- added `.is-font` for `font-family` styles
- added `.meatball`
- added addional config for `.nav_stacked`
- added color-modifier `.hover:is-ink-#`
- added theme-modifier `.hover:is-theme-#`
- added theme-modifier `.hover:is-elevated-#`
- added `data-col="fit"`
- added `data-grid="smaller-gutter"`
- added grid config `$grid-small-gutter`
- added grid config `$grid-smaller-gutter`
- added `is-round` modifier
- added `.nav__link` styles
- added `.btn_square` styles

### deprecated

- `.dialog` use `.modal` instead
- `.deck` use `.modal_deck` instead
- `.overlay` use `.modal_overlay` instead
- `.toast` use `.modal_toast` instead
- `.snackbar` use `.modal_toast` instead

### removed

- removed `has-scroll-shadow`
- removed `$state-disabled` and `getColor(state, disabled)`
- removed `$theme-array`

## 9.1.4

### deprecated

- `is-hidden#` and `is-visible#` might be removed in 10.0.0

## 9.1.3

### changes

- changed `<fieldset>` to `.fieldset`

## 9.1.2

### changes

- changed config for `$dropdown-options-max-height`
- added `!important` tag to `.is-visible`
- optimized `data-animate` - removed uneccesary values

## 9.1.1

### deprecated

- `bumper-small` and `bumper-big` use `bumper bumper_big` or `bumper bumper_small` instead

### added

- added `data-col` support for `.toast`

## 9.1.0

### deprecated

- `no-margin-#` and `no-padding-#` use `has-padding-#-0` or `has-padding-#-0` instead
- `spacer-small` and `spacer-big` use `spacer spacer_big` or `spacer spacer_small` instead
- `well-small` and `well-big` use `well well_small` or `well well_big` instead
- `flex-spacer` use `flex-space` instead
- `data-row` use `data-grid` instead
- `xui-overlay` use `.dialog` instead

### added

- config for `.kilo`, `.mega` and `.giga`
- new atom `.file-upload` with config
- new atom `.slider` with config
- new atom `.divider` with config
- new atom `.loader` with config
- new atom `.y-space-#` and `x-space-#` with config
- new atom `mark` and `::highlight`
- new grid-col value `data-col="auto"`
- new molecule `.dialog` with config
- new molecule `.deck` with config
- new molecule `.toast` with config
- new molecule `.overlay` with config
- new molecule `.snackbar` with config
- new atom `.img-crop-3-4`
- new modifer `.is-elevated-[1-24]`
- new modifer `.is-outset`, `.is-outset_left`, `.is-outset_right` and `.is-outset_full`
- new font-weight variable and modifier class `.is-medium`

### updated

- `.img-crop-#` - uses now a map to generate classes. can be extended via custom config
- `arrayMagic` - can now be used with mixed arrays using different values like 2px 8 .1em 100%

## 9.0.8

### changes

- new ordering rules for declaration order
- DeclarationOrder set to `false` in `.scss-lint.yml`
- fixed `setHover()` behavior

## 9.0.7

### added

- config variables for `.xui-overlay`

### changes

- optimized `inject-style()` to support nested styles and media queries

## 9.0.6

### added

- new mixin `inject-style()` to replace style placeholder in config

### changes

- optimized `is-scrolling()` mixin for behavior `auto`
- added config for `.xui-tabs`
- added config for `.xui-select`
- added config for `.bubble`
- refactored `_xui-config.scss`
- renamed `_config.scss` to `_xui-config.scss`

### removed

- `.well_outlined` styles
- `.is-dropdown` helper styles

## 9.0.5

### added

- styles and config for `fieldset`

### changes

- renamed all variables with `-margin` to `-spacing`
- renamed all variables with `-bg` to `-background`
- bug fix in `is-scrollable()` mixin

## 9.0.4

### added

- color config for btn styles
- new mixin `btn-core`
- `.scss-lint.yml`
- config for `xui-toggle`

### changes

- changed `%btn%small` to `%btn-small`
- changed `%btn%big` to `%btn-big`
- removed `btn_mono` modifier
- removed `hamburger-btn_invert` modifier
- removed nested classes for `btn_clear` modifier - use `is-ink-#` instead
- removed QualifyingElement
- removed `border-color()` function

## 9.0.3

### added

- `$input-spacing` variable to config
- `$inline-styles` variable to `macro-metrics`
- added config variables for `.dropdown-option`

### changes

- changed `$input-border` to `$input-border-width`
- optimized `marco-metrics` functions for child elements
- optimized `setHover` for colors with opacity
- updated input-validation styles
- removed `flex-basis` from `data-col`

## 9.0.2

### fixed

- `.xui-checkbox` bug in ios safari - adde a variantion selector `\fe0e`
- `.ec-icon` bug within buttons if not :only but :empty - added :only condition

## 9.0.1

### fixed

- `$hamburger-btn` bug

## 9.0.0

### added

- scss-lint
- mixin `is-scrollable()` - use instead of `@extend .is-scrollable`
- flex-support to `.btn` styles
- config variables for `.nav`
- config variables for `.title`

### changes

- fixed `.has-padding-left-smallest`
- changed `%selectPlaceholder` to `%select-placeholder`
- changed `%tabsNav` to `%tabs-nav`
- `.is-hidden-input` uses `@mixin is-hidden-input`
- changed `%tabsNavItem` to `%tabs-nav-item`
- changed `%tabsNavSelected` to `%tabs-nav-selected`
- improved `.nav` styles
- improved `data-tooltip` styles
- improved `.is-bordered`config and styles
- improved `.is-raised`config and styles
- improved `.is-lifted`config and styles
- improved `.is-fab`config and styles
- improved `.bumper`config and styles
- improved `.spacer`config and styles
- improved `.has-margin` and `.has-padding` config and styles
- improved `arrayMagic` mixin
- changed `.is-rounded-min`to `.is-rounded-small`
- changed `.is-rounded-max`to `.is-rounded-big`

### removed

- `.table_small` and `.tabel_big`

## 8.0.0-beta.10

- added imprint and privacy information to documentation

## 8.0.0-beta.9

- added imprint and privacy information to `README.md`

## 8.0.0-beta.8

### breaking changes

- changes import order in `x.ui.scss`
- renamed `remArray()` function to `arrayMagic()`
- removed `$base-padding`
- refactored typeface config
- refactored `get-font-size()` mixin

### changes

- `unitArray()` function now support different units

### added

- `$spacings` maps
- config variables for links

## 8.0.0-beta.7

### breaking changes

- changed `.well_small` and `.well_big` to `.well-small` and `.well-big`
- changed `.alert_small` and `.alert_big` to `.alert-small` and `.alert-big`
- changed `.form-group_boolean` to `.form-boolean`

### changes

- updated `.well` inline element styles
- `.input-group` style improvements
- added config variables for `.form-group` - `$form-group-margin`, `$form-group-label-margin`, `$form-group-label-font-size`
- added config variables for `.form-boolean` - `$form-boolean-margin`, `$form-boolean-label-margin`, `$form-boolean-label-font-size`
- added config variables for `.input` - `$input-background`, `$input-color`, `$input-placeholder`
- added config variables for `.well` - `$well-background`, `$well-small-padding`, `$well-small-margin`, `$well-padding`, `$well-margin`, `$well-big-padding`, `$well-big-margin`
- added config variables for `.alert` - `$alert-background`, `$alert-small-padding`, `$alert-small-margin`, `$alert-padding`, `$alert-margin`, `$alert-big-padding`, `$alert-big-margin`, `$alert-small-font-size`, `$alert-font-size` , `$alert-big-font-size`
- added variable `$tag-bg` for default background-color of `.tag`
- added `remArray()` function
- added `.card` molecule
- added `data-grid` support for `.form-group`

## 8.0.0-beta.6

### changes

- fixed .ec-icon size bug in `macro-metrics` mixin

## 8.0.0-beta.5

### added

- function `stripUnit`
- `%input` placeholder

### changes

- fixed 'darkmode bug' in `setContrast` function
- `.ec-icon` within elements using the `macro-metrics` mixins now have the line-height of parent as font-size
- optimized `setHover` function - now lightens dark colors and darkens light colors
- changed markup for `.input-group`

## 8.0.0-beta.4

### changes

- fixed nesting bug in `.title`
- added modifier `.xui-select_top`

### added

- added new mixin `set-map-breakpoints`

## 8.0.0-beta.3

### changes

- new config variables `$giga-margin`, `$mega-margin` and `$kilo-margin` for headings margin-bottom
- changed default values for .btn config variables - new based on \$base-font-size
- changed default values for .tag config variables - new based on \$base-font-size
- changed default values for .input config variables - new based on \$base-font-size
- fixed em function for \$base-font-size usage
- moved `$hamburger-btn-color` to config
- removed `:invalid` styles of `.input`
- flex fix for `xui-checkbox` and `xui-radio`
- added `$headings-line-height` variable

### added

- `.is-bordered` modifier class

## 8.0.0-beta.2

### breaking changes

- changed data-container values to `is-left` and `is-right`
- changed data-grid values to `is-small`, `is-default`, `no-gutter`, `is-center`, 'is-start' and 'is-end'
- changed data-flex direction values to 'is-column', 'is-column-reverse', 'is-row', 'is-row-reverse'
- changed data-flex wrap values to 'is-wrap', 'is-nowrap', 'is-wrap-reverse'
- changed data-flex justify values to 'is-around', 'is-between', 'is-center', 'is-start', 'is-end'
- changed data-flex items values to 'is-end-items', 'is-start-items', 'is-center-items', 'is-baseline-items', 'is-stretch-items'
- changed data-flex content values to 'is-end-content', 'is-start-content', 'is-center-content', 'is-stretch-content', 'is-between-content', 'is-around-content'
- changed data-flex-item size values to 'grow', 'grow-even', 'fit-self'
- changed data-flex-item align values to 'is-auto', 'is-baseline', 'is-stretch', 'is-center', 'is-start', 'is-end'
- changed data-col value to `no-gutter`
- changed data-flex-order value to `is-first` and `is-last`
- removed data-flex="center-all"
- removed all units from default config, only using numbers

### changes

- fixed `.xui-select` click bug
- fixed `.xui-dropdown` click bug
- added shadow color config for `.is-raised` and `.is-lifted`
- additional overflow modifier classes `is-scrollable-y-contain` and `is-scrollable-x-contain`
- fixed `.input_round` styles
- added is-position classes `is-static` and `is-sticky`
- added `is-positioned` reset class `not-positioned`
- added an additional breakpoint-shortcode `nav` for mobile nav behavoir
- added breakpoints for `data-container` values
- optimized `.spacer` and `.bumper`
- added `.is-hidden-from` modifier
- added `.is-visible-from` modifier

## 8.0.0-beta.1

### breaking changes

- renamed `.overlay` to `.xui-overlay`

### added

- added `.xui-accordion` molecule
- added `.is-hidden-input` modifier
- added `.has-scroll-shadow` modifier
- added `.has-transition` modifier
- added an overwrite config for `background, light`, `background, lighter` and `background, lightest`
- added `data-flex-item="{align}"` attribute

### changes

- moved `.nav` to molecules
- changed `.is-h1`, `.is-h2`, `.is-h3`, `.is-h4`, `.is-h5`, `.is-h6`, `.is-giga`, `.is-mega`, `.is-kilo`
- fixed `set-breakpoints` mixin bug
- fixed `.is-visible`
- fixed `.is-hidden`

## 8.0.0-beta.0

### breaking changes

- renamed `.ink#` to `.is-ink#`
- renamed `.active` to `.is-active`
- renamed `.disabled` to `.is-disabled`
- renamed `.list` to `.xui-list`
- fixed `.dropdown` link bug with new markup

### added

- added `.xui-select` atom for custom selects
- added `.is-dropdown` modifier
- added `.overlay` molecule
- added default config to `x.ui.scss`
- added `overscroll-behavior-#` attribute to `overflow-#: scroll | auto`
- added `.select` documentation
- added `.xui-checkbox` for custom checkboxes inputs
- added `.xui-radio` for custom radio inputs
- added `data-animate="#"` interaction modifier
- added `.xui-tabs`
- added `.xui-toggle`

### changes

- removed TODO-folder
- refactored `.has-width-#` modifier

## 7.0.1

### breaking changes

- use `@import "~x.ui/src/x.ui.scss";` instead of `@import "~x.ui/src/x.ui-sandbox.scss";`
- renamed `.spacing#` to `.spacer#`
- renamed `.is-ink#` to `.ink#`

### added

- `.flex-spacer`
- `.list` organism

### changes

- added padding to `.nav_item`

## 7.0.0

### breaking changes

- new file-structure
- prefixed all `.tag` modifier classes with `.tag_`
- added a new variable for global prefixing `$pfx`
- added `.img_` prefix for `img` modifier classes
- removed `.nav.inline`
- removed `.big` modifier for `<p>`
- renamed `.raise-#` helper to `.is-raised`
- renamed `_typo.scss` to `_type.scss`
- changed typeface sizing to modular scaling with breakpoints
- added xlcss config options to x.ui config
- removed `.alert_round`
- removed `.form-group`
- removed `.pill` styles - use `.tag` instead
- prefixed all `.padding` modifier classes with `.padding_`
- renamed `.drawer-toggle` to `.hamburger-btn`
- removed `.select` - use `.dropdown` instead
- removed `.menubar` - use `.toolbar` instead
- removed `.navigation-drawer`
- removed `_menu.scss`, `_menu-dropdown.scss` and `_menubar.scss`
- renamed `.btn-glow` to `.btn_glow`
- removed `shadow` from color-map
- renamed `header` to `title`
- removed `.page`
- removed `.section`
- removed `.btn_raised` use `is-raised` intead
- removed `.input_raised` use `is-raised` intead
- renamed `.padding#` to `.has-padding#`
- new naming convention for `.has-padding`
- removed xlcss dependencies
- changed naming convention of `data-col` e.g.: `data-col="2xs +2xs"` to `data-col="2-xs +2-xs"`
- changed naming convention of `data-flex-order` e.g.: `data-flex-order="2xs"` to `data-flex-order="2-xs"`
- renamed `set-colors` mixin to `set-theme-colors`
- renamed `text-center`, `text-right`, `text-left` to `align-center`, `align-right`, `align-left`
- changed flex-grid attibute from `data-flex="grid"` to `data-grid`
- renamed text-color modifier to `is-ink#`

### removed

- removed `.input_search`
- removed `.btn_delete`
- removed `.btn_abort`
- removed `theme-modifier` mixin
- removed `validator.scss`
- removed `setText` mixin

### added

- added comments to `<body>` and list style files
- added `.nav_inline` and `.nav_stacked`
- added `%link-styles` placeholder in config
- added `%paragraph-styles` placeholder in config
- added `_type_setting.scss`
- added `_type_alignment.scss`
- added `_type_colors.scss`
- added .btn inline-element styles for `.tag`, `.ec-icon` and `.bubble`
- added headings inline-element styles for `.tag` and `.bubble`
- added `get-font-size` mixin
- added `.input-group` styles
- added `.padding-top`, `.padding-bottom`, `.padding-left` and `.padding-right`
- added image helper `.img-crop-1-1`, `.img-crop-4-3`, `.img-crop-16-9`
- added `.table_small`, `.table_big` and `.table_bordered`
- added `.btn-group`
- added `.img-avatar`
- added ng-validation classes for `.input`
- added a behavior modifier `on-hover` for `dropdown`
- added `.has-margin#`
- added `.input_clear`
- added `.no-margin#` and `.no-padding#`
- added overflow-modifier `.is-clipped#` and `.is-scrollable#`
- added size-modifier
- added `is-fab#` modifier
- added position modifier
- added `set-breakpoint` mixin
- added `is-positioned#` modifier
- added `is-visible#` and `is-hidden#`
- added breakpoints to all flex-grid and grid elements
- added font-weight modifier
- new function `setHover` for hover shade colors
- added `is-theme#`

### changed

- optimized `.bubble` styles and comments
- optimized `.kiosk` styles and comments
- optimized `select.input` styles and comments
- refactored `.tag` styles and comments
- refactored `.tooltip` styles and comments
- refactored `.padding` styles and comments
- refactored `.well` styles and comments
- refactored `.alert` styles and comments
- refactored float-grid an flex-grid

## 6.0.1 - 26.10.2017

### fixes

- fixed ie transform bug

### added

- new style `.from-group_search`

## 6.0.0 - 23.10.2017

### breaking changes

- added variable `$responsive-headings-ratio` in `_config`

## 5.0.0 - 20.10.2017

### breaking changes

- added variable `$ec-icon-support` in `_config`

### addded

- support for nested `.tag`, `.bubble` and `.pill` elements in `.btn`
- support for ec-icons in `.input_search`
- placeholder `%ec-icon`

### changes

- minor changes in `.header`
- minor improvements in `.pill`
- minor improvements in `.pill_reset`
- minor improvements in `.select`

## 4.0.0

### breaking changes

- added new config variable for divider color opacity `$divider-opacity`

### changes

- removed trailing semicolon

## 3.0.3

- optimized `.toolbar`
- minor changes in `.navigation-drawer`, `.form-group`, `typo.scss`

## 3.0.2

version bump

## 3.0.1

### changes

- optimized theme-modifier mixin
- updated documentation

## 3.0.0

### added

- theme-modifier mixin

### breaking changes

- changed `.input-group` to `.form-group`

## 2.4.2

### added

- added `.page` styles

### changes

- minor style improvements for `.btn`, `.select`, `.input`, `.input-group`

## 2.4.1

### changes

- added `.tag.outlined` styles
- improved theme modifier

## 2.4.0

### added

- new modifier for `.kiosk` - `.kiosk_bordered`
- new modifier e.g. `.theme-super_light`
- new style `.navigation-drawer` and `.navigation-drawer_right`

## 2.3.0

### added

- added color `base, shadow` to \$colors map
- added modifier for `.btn` `.btn_delete` and `.btn_abort`

### changes

- changed `.kiosk` from `display: grid` to `display: flex`

### removed

- defualt styling for `<fieldset>`

## 2.2.1

- version leap

## 2.2.0

### added

- new helper classes `.padding-between`, `.padding-center`
- new nav style`.nav`, `.nav.inline`

### changes

- new version of xlcss 4.1.3

## 2.1.1

### changes

- new version of xlcss 4.1.2

## 2.1.0

### added

- new ui.component `kiosk`
- new ui.component `toolbar`
- modifier `.mono` for `.btn`
- class `.padding`

## 2.0.0

### breaking changes

- new markup for form-elements `.input-group`
- removed styles for `<label>`

### added

- x.ui partial `menubar`, `menu`

### changes

- changed `"` to ```

## 1.0.0

### breaking changes

- changed naming convention for inline classes like `_minor`
- renamed `/core` to `/_core`
- renamed `/global` to `/_global`
- renamed `/macros` to `/_macros`
- renamed `/presets/presets.scss` to `/_helper/helper.scss`
- removed `/presets/_shadow-helper.scss`
- removed `/global/_fieldset-grid.scss`
- form elements now need a class `.input`

### changes

- restructured `_btn.scss`, btn metrics are now available with placeholder e.g. `%btn`, `%btn%small`
- removed redundance from `_config.scss`
- changed `getColor` usage to new logic, base-colors are now available with just using last key e.g. `getColor(text)`
- new xlcss version `4.1.0`

### added

- variable `$flex-support` for `display:flex` usage
- `_validator.scss` for config value validation

## 0.0.7

### changes

- update to xlcss 3.0.9

## 0.0.6

### changes

- changed `display:inherit;` to `display:initial;`
- update to xlcss 3.0.7

## 0.0.5

### changes

- optimized button styles
- `$bodyFont` to `$body-font`, `$headerFont` to `$headings-font`
- updated doc
- moved doc styles to `/docs`

### added

- additional variables for button configuration

### 0.0.2

### changes

- changed `.btn.embossed` to `.btn.raised`
- `$weight-light` to `$light`, `$weight-normal` to `$normal`, `$weight-bold` to `$bold`

### added

- new variables for `.btn` in `config.scss`
- new mixin for headings - e.g.: `@include h(1);`
- global style for `<body>`

## 0.0.1

- initial public release
