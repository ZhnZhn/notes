"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _isArr = Array.isArray;

var _crTitle = function _crTitle(board
/*: ?Board */
) {
  var title = board.title || '',
      columnIds = board.columnIds,
      count = _isArr(columnIds) ? columnIds.length : 0;
  return title + " (" + count + ")";
};

var crTitle = function
  /*: string */
crTitle(board
/*: ?Board */
, prefix
/*: string */
) {
  var _title = board == null ? 'Not Exist' : _crTitle(board);

  return (prefix || 'Notes') + ": " + _title;
};

var _default = crTitle;
exports["default"] = _default;
//# sourceMappingURL=crTitle.js.map