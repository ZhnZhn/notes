"use strict";

exports.__esModule = true;
exports.default = void 0;
var _actions = require("../column/actions");
var _selectors = require("../selectors");
const _isArr = Array.isArray;
const canRemoveColumn = _ref => {
  let {
    getState
  } = _ref;
  return next => action => {
    if (action.type === _actions.removeColumn.type) {
      const _noteIds = (0, _selectors.selectNoteIds)(getState(), action.payload.columnId);
      if (!_isArr(_noteIds) || _noteIds.length !== 0) {
        return false;
      }
    }
    return next(action);
  };
};
var _default = exports.default = canRemoveColumn;
//# sourceMappingURL=canRemoveColumn.js.map