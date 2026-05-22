// @flow
const selectApp = (
  state /*: StoreState */
) => state.app || {};
export const selectAppModal = (
  state /*: StoreState */
) => state.modal || {}

const selectAppCurrentBoard = (
  state /*: StoreState */
) => selectApp(state).boardId
export const selectAppBoardIds = (
  state /*: StoreState */
) => selectApp(state).boardIds || []
export const selectAppUiTheme = (
  state /*: StoreState */
) => selectApp(state).uiTheme

export const selectDrawerItems = (
  state /*: StoreState */
) => state.drawerMsg || []

export const sBoard = {
  boards: (state /*: StoreState */) => state.boards || {},

  //state.boards[state.app.boardId]
  currentBoard: (state /*: StoreState */) => sBoard
    .boards(state)[selectAppCurrentBoard(state)] || {},

  //state.boards[id]
  board: (
    state /*: StoreState */,
    boardId /*: string */
  ) => sBoard
    .boards(state)[boardId] || {},

  //state.boards[boardId].columnIds
  columnIds: (
    state /*: StoreState */,
    boardId /*: string */
  ) => sBoard
    .board(state, boardId).columnIds || [],

  //state.app.boardIds
  boardIds: (state /*: StoreState */) => selectAppBoardIds(state)
};
export const selectBoardIds = (
  state /*: StoreState */
) => sBoard.boardIds(state)
export const selectBoard = (
  state /*: StoreState */
) => sBoard.currentBoard(state)

export const sNote = {
  notes: (state/*: StoreState */) => state.notes || {}
};

export const selectNotes = (
  state /*: StoreState */
) => sNote.notes(state)

export const selectNoteLabels = (
  state /*: StoreState */
) => state.noteLabels || {}

export const sColumn = {
  columns: (state /*: StoreState */) => state.columns || {},

  //state.columns[columnId]
  column: (
    state /*: StoreState */,
    columnId /*: string */
  ) => sColumn
    .columns(state)[columnId] || {},

  //state.columns[columnId].noteIds
  noteIds: (
    state /*: StoreState */,
    columnId /*: string */
  ) => sColumn
    .column(state, columnId).noteIds || []
};
export const selectColumns = (
  state /*: StoreState */
) => sColumn.columns(state)


const selectors = {
  board: sBoard,
  note: sNote,
  column: sColumn
};

export default selectors
