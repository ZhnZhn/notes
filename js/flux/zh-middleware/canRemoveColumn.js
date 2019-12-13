"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _actions = require("../column/actions");

var _selectors = require("../selectors");

var canRemoveColumn = function canRemoveColumn(store) {
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.REMOVE_COLUMN) {
        var _noteIds = _selectors.sColumn.noteIds(store.getState(), action.columnId);

        if (!Array.isArray(_noteIds) || _noteIds.length !== 0) {
          return false;
        }
      }

      return next(action);
    };
  };
};

var _default = canRemoveColumn;
exports["default"] = _default;
//# sourceMappingURL=canRemoveColumn.js.map