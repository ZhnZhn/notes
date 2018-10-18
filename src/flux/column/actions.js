// @flow

export const ACTION = {
  EDIT_COLUMN_TITLE: 'EDIT_COLUMN_TITLE',
  ADD_COLUMN: 'ADD_COLUMN',
  REMOVE_COLUMN: 'REMOVE_COLUMN',
  TOGGLE_COLUMN: 'TOGGLE_COLUMN',
  MOVE_COLUMN: 'MOVE_COLUMN'
};

export const editColumnTitle = (
  columnId /*: string */,
  title /*: string */
) => ({
  type: ACTION.EDIT_COLUMN_TITLE,
  columnId,
  title
});

export const addColumn = (
  boardId /*: string */,
  columnId /*: string */
) => ({
  type: ACTION.ADD_COLUMN,
  boardId,
  columnId
})

export const removeColumn = (
  boardId /*: string */,
  columnId /*: string */
) => ({
  type: ACTION.REMOVE_COLUMN,
  boardId,
  columnId
})

export const toggleColumn = (
  columnId /*: string */
) => ({
  type: ACTION.TOGGLE_COLUMN,
  columnId
})

export const moveColumn = ({
  draggableId /*: string */,
  source /*: {} */,
  destination /*: {} */
}) => ({
  type: ACTION.MOVE_COLUMN,
  columnId: draggableId,
  source,
  destination
})

/*::
export type TopicAction =
  | $Call<typeof editColumnTitle, string, string>
  | $Call<typeof addColumn, string, string>
  | $Call<typeof removeColumn, string, string>
  | $Call<typeof toggleColumn, string>
  | $Call<typeof moveColumn, string, {}, {}>
  //| ExtractReturn<typeof toggleColumn>
*/


const actions = {
  editColumnTitle,
  addColumn,
  removeColumn,
  toggleColumn,
  moveColumn
};

export default actions
