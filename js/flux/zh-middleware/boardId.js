"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("../board/actions");

var _actions2 = require("../modal/actions");

var _crId = _interopRequireDefault(require("./crId"));

var _selectors = require("../selectors");

var _appConf = _interopRequireDefault(require("../appConf"));

var _isMax = function _isMax(state) {
  return _selectors.sApp.boardIds(state).length >= _appConf["default"].MAX_BOARDS;
};

var boardIdMiddleware = function boardIdMiddleware(_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.ADD_BOARD) {
        if (_isMax(getState())) {
          dispatch((0, _actions2.showNotif)(_appConf["default"].N_MAX_BOARDS));
          return false;
        }

        action = (0, _extends2["default"])({}, action, {
          boardId: (0, _crId["default"])(_appConf["default"].BOARDS_PREFIX)
        });
      }

      return next(action);
    };
  };
};

var _default = boardIdMiddleware;
exports["default"] = _default;
//# sourceMappingURL=boardId.js.map