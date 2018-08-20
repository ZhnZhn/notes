"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var filterBy = function filterBy(arr, id) {
  return Array.isArray(arr) ? arr.filter(function (str) {
    return str !== id;
  }) : arr;
};

var removeProp = function removeProp(obj, key) {
  var _r = {};
  Object.keys(obj).forEach(function (k) {
    if (k !== key) {
      _r[k] = obj[k];
    }
  });
  return _r;
};

exports.default = {
  filterBy: filterBy,
  removeProp: removeProp
};
//# sourceMappingURL=reducerFns.js.map