"use strict";
exports.__esModule = true;
var toString = Object.prototype.toString;
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
exports.isDate = isDate;
function isObject(val) {
    return val !== null && toString.call(val) === 'object';
}
exports.isObject = isObject;
