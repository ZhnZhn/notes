"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _actions = require("../column/actions");

var _selectors = require("../selectors");

var _isArr = Array.isArray;

var canRemoveColumn = function canRemoveColumn(_ref) {
  var getState = _ref.getState;
  return function (next) {
    return function (action) {
      if (action.type === _actions.removeColumn.type) {
        var _noteIds = _selectors.sColumn.noteIds(getState(), action.payload.columnId);

        if (!_isArr(_noteIds) || _noteIds.length !== 0) {
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