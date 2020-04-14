const fusv = require('find-unused-sass-variables');
const variables = fusv.find('scss');
console.log(variables.unused);
console.log(variables.total);
