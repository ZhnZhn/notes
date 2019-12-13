"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var isArrEmpty = function isArrEmpty(arr
/*: mixed*/
)
/*: boolean*/
{
  return !Array.isArray(arr) || arr.length === 0 ? true : false;
};

var _default = isArrEmpty;
exports["default"] = _default;
//# sourceMappingURL=isArrEmpty.js.map