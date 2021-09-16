"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _actions = require("../board/actions");

var _selectors = require("../selectors");

var _isArr = Array.isArray;

var canRemoveBoard = function canRemoveBoard(_ref) {
  var getState = _ref.getState;
  return function (next) {
    return function (action) {
      if (action.type === _actions.removeBoard.type) {
        var columnIds = _selectors.sBoard.columnIds(getState(), action.payload.boardId);

        if (!_isArr(columnIds) || columnIds.length !== 0) {
          return false;
        }
      }

      return next(action);
    };
  };
};

var _default = canRemoveBoard;
exports["default"] = _default;
//# sourceMappingURL=canRemoveBoard.js.map