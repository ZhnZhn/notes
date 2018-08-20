'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACTION = exports.ACTION = {
  EDIT_COLUMN_TITLE: 'EDIT_COLUMN_TITLE',
  ADD_COLUMN: 'ADD_COLUMN',
  REMOVE_COLUMN: 'REMOVE_COLUMN'
};

var editColumnTitle = exports.editColumnTitle = function editColumnTitle(columnId, title) {
  return {
    type: ACTION.EDIT_COLUMN_TITLE,
    columnId: columnId,
    title: title
  };
};

var addColumn = exports.addColumn = function addColumn(boardId, columnId) {
  return {
    type: ACTION.ADD_COLUMN,
    boardId: boardId,
    columnId: columnId
  };
};

var removeColumn = exports.removeColumn = function removeColumn(boardId, columnId) {
  return {
    type: ACTION.REMOVE_COLUMN,
    boardId: boardId,
    columnId: columnId
  };
};

var actions = {
  editColumnTitle: editColumnTitle,
  addColumn: addColumn,
  removeColumn: removeColumn
};

exports.default = actions;
//# sourceMappingURL=actions.js.map