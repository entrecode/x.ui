<p align="center"><img src="readme.png" alt="x.ui"></p>

# x.ui 9.0.5

**x.ui** is a framework based on the atomic design methodology. this workflow is inspired by nature and physics and has a pretty serious focus on modularity and structure. its structure begins with the smallest part and builds up to complex structure. as a result, there is very little redundancy with a remarkable flexibility.

## getting started

To install x.ui run

```sh
npm i x.ui --save
```

add a custom `_your-config.scss` to your project root style folder.
see all available config options [\_config.scss](https://github.com/entrecode/x.ui/blob/master/src/_xui-config.scss)

set up your style.scss in your project

using webpack:

```scss
@import 'your-config';
@import '~x.ui/src/x.ui';
...
```

using node-sass:

```scss
@import 'your-config';
@import '../node_modules/x.ui/src/x.ui';
...
```

## Crossbrowser compatibility

x.ui has uses no prefix mixins, please use an autoprefixer in your project

## creators

[Bernhard Ruoff](https://github.com/bernester)

---

[imprint & privacy](https://entrecode.de/datenschutz)
