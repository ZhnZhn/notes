"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _arrFn = require("../../utils/arrFn");
const _crTitle = (board /*: Board */) => {
  const columnIds = board.columnIds;
  return (0, _arrFn.joinByBlank)(board.title || '', (0, _isTypeFn.isArr)(columnIds) ? `(${columnIds.length})` : '(0)');
};
const crTitle = (board /*: ?Board */, prefix /*: string */) /*: string */ => (0, _arrFn.joinByColon)(prefix || 'Notes', (0, _isTypeFn.isObj)(board) ? _crTitle(board) : 'Not Exist');
var _default = exports.default = crTitle;
//# sourceMappingURL=crTitle.js.map