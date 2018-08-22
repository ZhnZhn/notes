'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('../board/actions');

var _actions2 = require('../modal/actions');

var _actions3 = _interopRequireDefault(_actions2);

var _modalRouter = require('../../component/dialogs/modalRouter');

var _crId = require('./crId');

var _crId2 = _interopRequireDefault(_crId);

var _selectors = require('../selectors');

var _appConf = require('../appConf');

var _appConf2 = _interopRequireDefault(_appConf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _isMax = function _isMax(state) {
  return _selectors.sApp.boardIds(state).length >= _appConf2.default.MAX_BOARDS;
};

var boardIdMiddleware = function boardIdMiddleware(_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.ADD_BOARD) {
        if (_isMax(getState())) {
          dispatch(_actions3.default.showModal(_modalRouter.MD.NOTIF, _appConf2.default.N_MAX_BOARDS));
          return false;
        }
        action = (0, _extends3.default)({}, action, {
          boardId: (0, _crId2.default)(_appConf2.default.BOARDS_PREFIX)
        });
      }
      return next(action);
    };
  };
};

exports.default = boardIdMiddleware;
//# sourceMappingURL=boardId.js.map