"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _actions = require("../board/actions");
var _reducer = require("../modal/reducer");
var _crId = _interopRequireDefault(require("./crId"));
var _selectors = require("../selectors");
var _appConf = _interopRequireDefault(require("../appConf"));
const _isMax = state => (0, _selectors.selectAppBoardIds)(state).length >= _appConf.default.MAX_BOARDS;
const boardIdMiddleware = _ref => {
  let {
    getState,
    dispatch
  } = _ref;
  return next => action => {
    if (action.type === _actions.addBoard.type) {
      if (_isMax(getState())) {
        dispatch((0, _reducer.showNotif)(_appConf.default.N_MAX_BOARDS));
        return false;
      }
      const boardId = (0, _crId.default)(_appConf.default.BOARDS_PREFIX);
      action.payload = {
        boardId
      };
      next(action);
      return boardId;
    }
    return next(action);
  };
};
var _default = exports.default = boardIdMiddleware;
//# sourceMappingURL=boardId.js.map