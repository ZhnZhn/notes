"use strict";

exports.__esModule = true;
exports.isEventKeyEscape = exports.isEventKeyEnter = exports.isEventKeyDelete = void 0;
const _fIsEventKey = (key, keyCode) => evt => evt.key === key || evt.keyCode === keyCode;
const isEventKeyDelete = exports.isEventKeyDelete = _fIsEventKey('Delete', 46);
const isEventKeyEnter = exports.isEventKeyEnter = _fIsEventKey('Enter', 13);
const isEventKeyEscape = exports.isEventKeyEscape = _fIsEventKey('Escape', 27);
//# sourceMappingURL=isEventKey.js.map