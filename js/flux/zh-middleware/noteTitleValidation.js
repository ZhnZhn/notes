"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _reducer = require("../note/reducer");
const _isEmpty = str => !(0, _isTypeFn.isStr)(str) || !str.trim();
const noteTitleValidation = () => next => action => {
  if (action.type === _reducer.editNoteTitle.type && _isEmpty(action.payload.title)) {
    action.payload.title = 'New Note';
    next(action);
    return false;
  }
  return next(action);
};
var _default = exports.default = noteTitleValidation;
//# sourceMappingURL=noteTitleValidation.js.map