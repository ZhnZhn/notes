'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACTION = exports.ACTION = {
  EDIT_COLUMN_TITLE: 'EDIT_COLUMN_TITLE',
  ADD_COLUMN: 'ADD_COLUMN',
  REMOVE_COLUMN: 'REMOVE_COLUMN',
  TOGGLE_COLUMN: 'TOGGLE_COLUMN'
};

var editColumnTitle = exports.editColumnTitle = function editColumnTitle(columnId /*: string */
, title /*: string */
) {
  return {
    type: ACTION.EDIT_COLUMN_TITLE,
    columnId: columnId,
    title: title
  };
};

var addColumn = exports.addColumn = function addColumn(boardId /*: string */
, columnId /*: string */
) {
  return {
    type: ACTION.ADD_COLUMN,
    boardId: boardId,
    columnId: columnId
  };
};

var removeColumn = exports.removeColumn = function removeColumn(boardId /*: string */
, columnId /*: string */
) {
  return {
    type: ACTION.REMOVE_COLUMN,
    boardId: boardId,
    columnId: columnId
  };
};

var toggleColumn = exports.toggleColumn = function toggleColumn(columnId /*: string */
) {
  return {
    type: ACTION.TOGGLE_COLUMN,
    columnId: columnId
  };
};

/*::
export type TopicAction =
  | $Call<typeof editColumnTitle, string, string>
  | $Call<typeof addColumn, string, string>
  | $Call<typeof removeColumn, string, string>
  | $Call<typeof toggleColumn, string>
  //| ExtractReturn<typeof toggleColumn>
*/

var actions = {
  editColumnTitle: editColumnTitle,
  addColumn: addColumn,
  removeColumn: removeColumn,
  toggleColumn: toggleColumn
};

exports.default = actions;
//# sourceMappingURL=actions.js.map