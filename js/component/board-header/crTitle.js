'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var crTitle = function crTitle(board /*: ?Board */
) /*: string */{
  var prefix /*: string */ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Notes';

  if (board == null) {
    return prefix + ': Not Exist';
  }
  var title = board.title || '',
      count = Array.isArray(board.columnIds) ? board.columnIds.length : 0;
  return prefix + ': ' + title + ' (' + count + ')';
};

exports.default = crTitle;
//# sourceMappingURL=crTitle.js.map