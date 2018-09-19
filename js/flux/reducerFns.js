'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterBy = /*:: <T: string | number> */function filterBy(arr /*: Array<T> */
, id /*: T */
) {
  return (/*: Array<T> */Array.isArray(arr) ? arr.filter(function (str) {
      return str !== id;
    }) : arr
  );
};

var filterByProp = function filterByProp(arr /*: Array<{}> */
, prValue /*: mixed */
) {
  var prName /*: string */ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  return (/*: Array<{}>*/Array.isArray(arr) ? arr.filter(function (obj) {
      return obj[prName] !== prValue;
    }) : arr
  );
};

var removeProp = function removeProp(obj /*: {} */
, key /*: string */
) /*: {} */{
  var _r = {};
  Object.keys(obj).forEach(function (k) {
    if (k !== key) {
      _r[k] = obj[k];
    }
  });
  return _r;
};

var setInObj = function setInObj(state /*: {} */
, key /*: string */
, obj /*: {} */
) {
  return (/*: {} */(0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, key, obj))
  );
};

exports.default = {
  filterBy: filterBy,
  filterByProp: filterByProp,
  removeProp: removeProp,
  setInObj: setInObj
};
//# sourceMappingURL=reducerFns.js.map