"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var crTitle = function crTitle(board
/*: ?Board */
, prefix
/*: string */
)
/*: string */
{
  if (prefix === void 0) {
    prefix = 'Notes';
  }

  if (board == null) {
    return prefix + ": Not Exist";
  }

  var title = board.title || '',
      count = Array.isArray(board.columnIds) ? board.columnIds.length : 0;
  return prefix + ": " + title + " (" + count + ")";
};

var _default = crTitle;
exports["default"] = _default;
//# sourceMappingURL=crTitle.js.map