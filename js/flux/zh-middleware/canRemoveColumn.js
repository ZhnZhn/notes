'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../column/actions');

var _selectors = require('../selectors');

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

exports.default = canRemoveColumn;
//# sourceMappingURL=canRemoveColumn.js.map