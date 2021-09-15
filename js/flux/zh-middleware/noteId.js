"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("../note/actions");

var _reducer = require("../modal/reducer");

var _crId = _interopRequireDefault(require("./crId"));

var _selectors = require("../selectors");

var _appConf = _interopRequireDefault(require("../appConf"));

var _isMax = function _isMax(state, columnId) {
  return _selectors.sColumn.noteIds(state, columnId).length >= _appConf["default"].MAX_NOTES;
};

var taskIdMiddleware = function taskIdMiddleware(_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.ADD_NOTE) {
        if (_isMax(getState(), action.columnId)) {
          dispatch((0, _reducer.showNotif)(_appConf["default"].N_MAX_NOTES));
          return false;
        }

        action = (0, _extends2["default"])({}, action, {
          noteId: (0, _crId["default"])(_appConf["default"].NOTES_PREFIX)
        });
      }

      return next(action);
    };
  };
};

var _default = taskIdMiddleware;
exports["default"] = _default;
//# sourceMappingURL=noteId.js.map