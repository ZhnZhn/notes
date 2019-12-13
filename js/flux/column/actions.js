"use strict";

exports.__esModule = true;
exports["default"] = exports.moveColumn = exports.toggleColumn = exports.removeColumn = exports.addColumn = exports.editColumnTitle = exports.ACTION = void 0;
var ACTION = {
  EDIT_COLUMN_TITLE: 'EDIT_COLUMN_TITLE',
  ADD_COLUMN: 'ADD_COLUMN',
  REMOVE_COLUMN: 'REMOVE_COLUMN',
  TOGGLE_COLUMN: 'TOGGLE_COLUMN',
  MOVE_COLUMN: 'MOVE_COLUMN'
};
exports.ACTION = ACTION;

var editColumnTitle = function editColumnTitle(columnId
/*: string */
, title
/*: string */
) {
  return {
    type: ACTION.EDIT_COLUMN_TITLE,
    columnId: columnId,
    title: title
  };
};

exports.editColumnTitle = editColumnTitle;

var addColumn = function addColumn(boardId
/*: string */
, columnId
/*: string */
) {
  return {
    type: ACTION.ADD_COLUMN,
    boardId: boardId,
    columnId: columnId
  };
};

exports.addColumn = addColumn;

var removeColumn = function removeColumn(boardId
/*: string */
, columnId
/*: string */
) {
  return {
    type: ACTION.REMOVE_COLUMN,
    boardId: boardId,
    columnId: columnId
  };
};

exports.removeColumn = removeColumn;

var toggleColumn = function toggleColumn(columnId
/*: string */
) {
  return {
    type: ACTION.TOGGLE_COLUMN,
    columnId: columnId
  };
};

exports.toggleColumn = toggleColumn;

var moveColumn = function moveColumn(_ref) {
  var draggableId = _ref.draggableId,
      source = _ref.source,
      destination = _ref.destination;
  return {
    type: ACTION.MOVE_COLUMN,
    columnId: draggableId,
    source: source,
    destination: destination
  };
};
/*::
export type TopicAction =
  | $Call<typeof editColumnTitle, string, string>
  | $Call<typeof addColumn, string, string>
  | $Call<typeof removeColumn, string, string>
  | $Call<typeof toggleColumn, string>
  | $Call<typeof moveColumn, string, {}, {}>
  //| ExtractReturn<typeof toggleColumn>
*/


exports.moveColumn = moveColumn;
var actions = {
  editColumnTitle: editColumnTitle,
  addColumn: addColumn,
  removeColumn: removeColumn,
  toggleColumn: toggleColumn,
  moveColumn: moveColumn
};
var _default = actions;
exports["default"] = _default;
//# sourceMappingURL=actions.js.map