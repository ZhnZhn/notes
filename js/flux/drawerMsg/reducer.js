'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actions = require('./actions');

var _initialState = require('../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _fns = require('./fns');

var _fns2 = _interopRequireDefault(_fns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crMsg = _fns2.default.crMsg,
    filterByProp = _fns2.default.filterByProp;


var reducer = function reducer() /*: DrawerAction */
/*: DrawerMsgState */{
  var state /*: DrawerMsgState */ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.drawerMsg;
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTION.ADD_DRAWER_MSG:
      {
        var id = action.id,
            msg = action.msg;

        return [crMsg(id, msg)].concat((0, _toConsumableArray3.default)(state));
      }
    case _actions.ACTION.REMOVE_DRAWER_MSG:
      {
        var _id = action.id;

        return filterByProp(state, _id);
      }
    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map