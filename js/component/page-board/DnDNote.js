"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _hocDnD = _interopRequireDefault(require("../zhn-dnd/hocDnD"));

var _Note = _interopRequireDefault(require("./Note"));

var DnDNote = (0, _hocDnD["default"])({
  notDragBg: '#9e9e9e',
  isDragHanlerProps: true
})(_Note["default"]);
DnDNote.displayName = 'DnDNote';
var _default = DnDNote;
exports["default"] = _default;
//# sourceMappingURL=DnDNote.js.map