"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("../note/actions");

var _isEmpty = function _isEmpty(str) {
  return typeof str !== 'string' || !str.trim();
};

var noteTitleValidation = function noteTitleValidation(store) {
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.EDIT_NOTE_TITLE && _isEmpty(action.title)) {
        next((0, _extends2["default"])({}, action, {
          title: 'New Note'
        }));
        return false;
      }

      return next(action);
    };
  };
};

var _default = noteTitleValidation;
exports["default"] = _default;
//# sourceMappingURL=noteTitleValidation.js.map