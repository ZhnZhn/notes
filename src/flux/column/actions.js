
export const ACTION = {
  EDIT_COLUMN_TITLE: 'EDIT_COLUMN_TITLE',
  ADD_COLUMN: 'ADD_COLUMN',
  REMOVE_COLUMN: 'REMOVE_COLUMN'
};

export const editColumnTitle = (columnId, title) => ({
  type: ACTION.EDIT_COLUMN_TITLE,
  columnId,
  title
});

export const addColumn = (boardId, columnId) => ({
  type: ACTION.ADD_COLUMN,
  boardId,
  columnId
})

export const removeColumn = (boardId, columnId) => ({
  type: ACTION.REMOVE_COLUMN,
  boardId,
  columnId
})

const actions = {
  editColumnTitle,
  addColumn,
  removeColumn
};

export default actions
