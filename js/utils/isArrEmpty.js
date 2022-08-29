"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _isArr = Array.isArray;

var isArrEmpty = function
  /*: boolean*/
isArrEmpty(arr
/*: mixed*/
) {
  return !_isArr(arr) || arr.length === 0;
};

var _default = isArrEmpty;
exports["default"] = _default;
//# sourceMappingURL=isArrEmpty.js.map