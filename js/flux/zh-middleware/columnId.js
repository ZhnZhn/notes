"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _actions = require("../column/actions");

var _reducer = require("../modal/reducer");

var _selectors = require("../selectors");

var _crId = _interopRequireDefault(require("./crId"));

var _appConf = _interopRequireDefault(require("../appConf"));

var _isMax = function _isMax(state, boardId) {
  return _selectors.sBoard.columnIds(state, boardId).length >= _appConf["default"].MAX_COLUMNS;
};

var columnIdMiddleware = function columnIdMiddleware(_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type === _actions.addColumn.type) {
        if (_isMax(getState(), action.payload.boardId)) {
          dispatch((0, _reducer.showNotif)(_appConf["default"].N_MAX_COLUMNS));
          return false;
        }

        var columnId = (0, _crId["default"])(_appConf["default"].COLUMNS_PREFIX);
        action.payload.columnId = columnId;
        next(action);
        return columnId;
      }

      return next(action);
    };
  };
};

var _default = columnIdMiddleware;
exports["default"] = _default;
//# sourceMappingURL=columnId.js.map