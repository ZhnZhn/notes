"use strict";

exports.__esModule = true;
exports.isStr = exports.isObj = exports.isFn = exports.isBool = exports.isArrEmpty = exports.isArr = exports.hasOwnPropertySafe = void 0;
const _fIsTypeof = (strType /*: string*/) => (value /*: mixed*/) /*: boolean*/ => typeof value === strType;
const isBool = exports.isBool = _fIsTypeof("boolean");
const isFn = exports.isFn = _fIsTypeof("function");
const isStr = exports.isStr = _fIsTypeof("string");
const isObj = (value /*: mixed*/) /*: boolean*/ => typeof value === "object" && value !== null;
exports.isObj = isObj;
const isArr = exports.isArr = Array.isArray;
const isArrEmpty = (arr /*: mixed*/) /*: boolean*/ => !isArr(arr) || arr.length === 0;
exports.isArrEmpty = isArrEmpty;
const _hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwnPropertySafe = (item, propName) => isObj(item) && isStr(propName) && _hasOwnProperty.call(item, propName);
exports.hasOwnPropertySafe = hasOwnPropertySafe;
//# sourceMappingURL=isTypeFn.js.map