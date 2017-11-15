# x.ui
**x.ui** is based on the scss framework [xlcss](https://github.com/entrecode/xlcss). It is inspired by the [unicorn workflow](https://medium.com/re-write/the-unicorn-workflow-design-to-code-with-atomic-design-principles-and-sketch-8b0fe7d05a37). the concept is based on a modular approach.

## getting started
To install all required dependencies for development, run
```
npm i
```
download [_config.scss](https://github.com/entrecode/x.ui/blob/master/src/_config.scss) 

add a `_config.scss` to your project root style folder.

set up your style.scss in your project

using typescript:
```
@import '_config';
@import '~xlcss/sass/xlcss';
@import '~x.ui/src/x.ui-sandbox.scss';
...
```  
without typescript:
```
@import '_config';
@import '../node_modlues/xlcss/sass/xlcss';
@import '../node_modlues/src/x.ui-sandbox.scss';
...
```

