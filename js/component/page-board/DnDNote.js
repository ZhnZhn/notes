'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hocDnD = require('../zhn-dnd/hocDnD');

var _hocDnD2 = _interopRequireDefault(_hocDnD);

var _Note = require('./Note');

var _Note2 = _interopRequireDefault(_Note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DnDNote = (0, _hocDnD2.default)({
  notDragBg: '#9e9e9e',
  isDragHanlerProps: true
})(_Note2.default);

DnDNote.displayName = 'DnDNote';

exports.default = DnDNote;
//# sourceMappingURL=DnDNote.js.map