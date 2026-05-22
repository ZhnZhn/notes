"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _actions = require("../column/actions");
var _reducer = require("../modal/reducer");
var _selectors = require("../selectors");
var _crId = _interopRequireDefault(require("./crId"));
var _appConf = _interopRequireDefault(require("../appConf"));
const _isMax = (state, boardId) => (0, _selectors.selectBoardColumnIds)(state, boardId).length >= _appConf.default.MAX_COLUMNS;
const columnIdMiddleware = _ref => {
  let {
    getState,
    dispatch
  } = _ref;
  return next => action => {
    if (action.type === _actions.addColumn.type) {
      if (_isMax(getState(), action.payload.boardId)) {
        dispatch((0, _reducer.showNotif)(_appConf.default.N_MAX_COLUMNS));
        return false;
      }
      const columnId = (0, _crId.default)(_appConf.default.COLUMNS_PREFIX);
      action.payload.columnId = columnId;
      next(action);
      return columnId;
    }
    return next(action);
  };
};
var _default = exports.default = columnIdMiddleware;
//# sourceMappingURL=columnId.js.map