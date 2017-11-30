## 7.0.0
### breaking changes
- new file-structure
- prefixed all `.tag` modifier classes with `.tag_`
- prefixed all `.btn` modifier classes with `.#{$pfx}btn_`
- added a new variable for global prefixing `$pfx`
- added `.img_` prefix for `img` modifier classes
- added `.#{$pfx}input_` prefix for modifier classes
- removed `.nav.inline`
- changed `.nav` to `.#{$pfx}nav`
- removed `.big` modifier for `<p>`
- renamed `.raise-#` helper to `.is-raised`
- renamed `_typo.scss` to `_type.scss`
- changed typeface sizing to modular scaling with breakpoints
- added xlcss config options to x.ui config 
- removed `.alert_round` 
- prefixed all `.bumper` modifier classes with `.#{$pfx}bumper_`
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

### removed
- removed `.input_search`
- removed `.btn_delete`
- removed `.btn_abort`
- removed `theme-modifier` mixin
- removed `validator.scss`

### added
- added comments to `<body>` and list style files
- added `#{$pfx}nav_inline` and `#{$pfx}nav_stacked`
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

### changed
- optimized `.bubble` styles and comments
- optimized `.kiosk` styles and comments
- optimized `select.input` styles and comments
- refactored `.tag` styles and comments
- refactored `.tooltip` styles and comments
- refactored `.padding` styles and comments
- refactored `.well` styles and comments
- refactored `.alert` styles and comments

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
- added color `base, shadow` to $colors map 
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
- changed `"` to `'`

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