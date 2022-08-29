"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var filterBy =
/*:: <T: string | number> */
function
  /*: Array<T> */
filterBy(arr
/*: Array<T> */
, id
/*: T */
) {
  return Array.isArray(arr) ? arr.filter(function (str) {
    return str !== id;
  }) : arr;
};

var filterByProp = function
  /*: Array<{}>*/
filterByProp(arr
/*: Array<{}> */
, prValue
/*: mixed */
, prName
/*: string */
) {
  if (prName
  /*: string */
  === void 0) {
    prName
    /*: string */
    = 'id';
  }

  return Array.isArray(arr) ? arr.filter(function (obj) {
    return obj[prName] !== prValue;
  }) : arr;
};

var removeProp = function
  /*: {} */
removeProp(obj
/*: {} */
, key
/*: string */
) {
  var _r = {};
  Object.keys(obj).forEach(function (k) {
    if (k !== key) {
      _r[k] = obj[k];
    }
  });
  return _r;
};

var setInObj = function
  /*: {} */
setInObj(state
/*: {} */
, key
/*: string */
, obj
/*: {} */
) {
  var _extends2;

  return (0, _extends3["default"])({}, state, (_extends2 = {}, _extends2[key] = obj, _extends2));
};

var _default = {
  filterBy: filterBy,
  filterByProp: filterByProp,
  removeProp: removeProp,
  setInObj: setInObj
};
exports["default"] = _default;
//# sourceMappingURL=reducerFns.js.map