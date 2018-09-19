'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getNodeDescr = function getNodeDescr(note) {
  if ((typeof note === 'undefined' ? 'undefined' : (0, _typeof3.default)(note)) !== 'object' || note == null) {
    return '';
  }
  return note.descr || note.title || '';
};

exports.default = getNodeDescr;
//# sourceMappingURL=getNoteDescr.js.map