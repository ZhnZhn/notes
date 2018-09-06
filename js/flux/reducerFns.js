'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var filterBy = function filterBy(arr /*: Array<string | number>*/
, id /*: string | number*/
) {
  return (/*: Array<string | number>*/Array.isArray(arr) ? arr.filter(function (str) {
      return str !== id;
    }) : arr
  );
};

var filterByProp = function filterByProp(arr /*: Array<{}>*/
, prValue /*: mixed*/
) {
  var prName /*: string*/ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  return (/*: Array<{}>*/Array.isArray(arr) ? arr.filter(function (obj) {
      return obj[prName] !== prValue;
    }) : arr
  );
};

var removeProp = function removeProp(obj /*: {}*/
, key /*: string*/
) /*: {}*/{
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