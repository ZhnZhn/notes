"use strict";

exports.__esModule = true;
exports.default = void 0;
var _actions = require("../board/actions");
var _selectors = require("../selectors");
const _isArr = Array.isArray;
const canRemoveBoard = _ref => {
  let {
    getState
  } = _ref;
  return next => action => {
    if (action.type === _actions.removeBoard.type) {
      const columnIds = (0, _selectors.selectBoardColumnIds)(getState(), action.payload.boardId);
      if (!_isArr(columnIds) || columnIds.length !== 0) {
        return false;
      }
    }
    return next(action);
  };
};
var _default = exports.default = canRemoveBoard;
//# sourceMappingURL=canRemoveBoard.js.map