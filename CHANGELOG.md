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