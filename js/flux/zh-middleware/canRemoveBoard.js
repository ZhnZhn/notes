'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../board/actions');

var _selectors = require('../selectors');

var canRemoveBoard = function canRemoveBoard(store) {
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.REMOVE_BOARD) {
        var columnIds = _selectors.sBoard.columnIds(store.getState(), action.boardId);
        if (!Array.isArray(columnIds) || columnIds.length !== 0) {
          return false;
        }
      }
      return next(action);
    };
  };
};

exports.default = canRemoveBoard;
//# sourceMappingURL=canRemoveBoard.js.map