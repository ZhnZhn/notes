'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var filterBy = function filterBy(arr, id) {
  return Array.isArray(arr) ? arr.filter(function (str) {
    return str !== id;
  }) : arr;
};

var filterByProp = function filterByProp(arr, prValue) {
  var prName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  return Array.isArray(arr) ? arr.filter(function (obj) {
    return obj[prName] !== prValue;
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
  filterByProp: filterByProp,
  removeProp: removeProp
};
//# sourceMappingURL=reducerFns.js.map