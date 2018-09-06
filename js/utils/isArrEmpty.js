"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isArrEmpty = function isArrEmpty(arr /*: mixed*/) /*: boolean*/{
  return !Array.isArray(arr) || arr.length === 0 ? true : false;
};

exports.default = isArrEmpty;
//# sourceMappingURL=isArrEmpty.js.map