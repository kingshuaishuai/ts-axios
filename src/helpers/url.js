"use strict";
exports.__esModule = true;
var util_1 = require("./util");
function url(url, params) {
    if (!params) {
        return url;
    }
    return '';
}
exports.url = url;
console.log(util_1.isDate(new Date()));
console.log(util_1.isObject({ hello: 'world' }));
