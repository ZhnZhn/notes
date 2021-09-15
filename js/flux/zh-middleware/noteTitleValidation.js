"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _reducer = require("../note/reducer");

var _isEmpty = function _isEmpty(str) {
  return typeof str !== 'string' || !str.trim();
};

var noteTitleValidation = function noteTitleValidation(store) {
  return function (next) {
    return function (action) {
      if (action.type === _reducer.editNoteTitle.type && _isEmpty(action.payload.title)) {
        console.log('New Note Title');
        action.payload.title = 'New Note';
        next(action);
        return false;
      }

      return next(action);
    };
  };
};

var _default = noteTitleValidation;
exports["default"] = _default;
//# sourceMappingURL=noteTitleValidation.js.map