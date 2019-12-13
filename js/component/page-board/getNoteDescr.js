"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var getNodeDescr = function getNodeDescr(note) {
  if (typeof note !== 'object' || note == null) {
    return 'This note is not exist.';
  }

  return note.descr || 'Edit description...';
};

var _default = getNodeDescr;
exports["default"] = _default;
//# sourceMappingURL=getNoteDescr.js.map