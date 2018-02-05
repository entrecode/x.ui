# x.ui 8.0.0-beta.0
**x.ui** is a framework based on the atomic design methodology. this workflow is inspired by nature and physics and has a pretty serious focus on modularity and structure. its structure begins with the smallest part and builds up to complex structure. as a result, there is very little redundancy with a remarkable flexibility.

## getting started
To install x.ui, run
```
npm i x.ui --save
```
add a custom `_config.scss` to your project root style folder.
see all available config options [_config.scss](https://github.com/entrecode/x.ui/blob/master/src/_config.scss)

set up your style.scss in your project

using webpack:
```
@import '_config';
@import '~x.ui/src/x.ui-sandbox.scss';
...
```  
using node-sass:
```
@import '_config';
@import '../node_modlues/src/x.ui-sandbox.scss';
...
```
