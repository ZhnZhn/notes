'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crTitle = function crTitle(board) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Notes';

  if ((typeof board === 'undefined' ? 'undefined' : (0, _typeof3.default)(board)) !== 'object') {
    return prefix + ': Not Exist';
  }
  var title = board.title || '',
      count = Array.isArray(board.columnIds) ? board.columnIds.length : 0;
  return prefix + ': ' + title + ' (' + count + ')';
};

exports.default = crTitle;
//# sourceMappingURL=crTitle.js.map