"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var hmToArr = function hmToArr(hm
/*: {}*/
) {
  return (
    /*: []*/
    Object.keys(hm).map(function (key) {
      return hm[key];
    })
  );
};

var _default = hmToArr;
exports["default"] = _default;
//# sourceMappingURL=hmToArr.js.map