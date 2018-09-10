'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducerFns = require('../reducerFns');

var _reducerFns2 = _interopRequireDefault(_reducerFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterByProp = _reducerFns2.default.filterByProp;


var crMsg = function crMsg(id /*: string */
, msg /*: string */
) {
  return (/*: DrawerMsg */{
      id: id,
      msg: msg
    }
  );
};

exports.default = {
  crMsg: crMsg,
  filterByProp: filterByProp
};
//# sourceMappingURL=fns.js.map