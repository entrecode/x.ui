### added
- new ui.component `kiosk`
- new ui.component `toolbar`

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