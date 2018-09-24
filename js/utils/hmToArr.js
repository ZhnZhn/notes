"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hmToArr = function hmToArr(hm /*: {}*/
) {
  return (/*: []*/Object.keys(hm).map(function (key) {
      return hm[key];
    })
  );
};

exports.default = hmToArr;
//# sourceMappingURL=hmToArr.js.map