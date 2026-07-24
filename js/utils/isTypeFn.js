"use strict";

exports.__esModule = true;
exports.isStr = exports.isObj = exports.isFn = exports.isBool = exports.isArr = void 0;
const _fIsTypeof = strType => v => typeof v === strType;
const isBool = exports.isBool = _fIsTypeof("boolean");
const isFn = exports.isFn = _fIsTypeof("function");
const isStr = exports.isStr = _fIsTypeof("string");
const isObj = v => typeof v === "object" && v !== null;
exports.isObj = isObj;
const isArr = exports.isArr = Array.isArray;
//# sourceMappingURL=isTypeFn.js.map