// @flow

export const sApp = {
  app: (state /*: StoreState */) => state.app || {},
  modal: (state /*: StoreState */) => state.modal || {},
  //state.app.boardId
  currentBoard: (state /*: StoreState */) => sApp
    .app(state).boardId,
  //state.app.boardIds
  boardIds: (state /*: StoreState */) => sApp
    .app(state).boardIds || [],
  //state.app.uiTheme
  uiTheme: (state /*: StoreState */) => sApp
    .app(state).uiTheme
};

const sDrawer = {
  msg: (state /*: StoreState */) => state.drawerMsg || []
};
export const selectDrawerItems = (
  state /*: StoreState */
) => sDrawer.msg(state)

export const sBoard = {
  boards: (state /*: StoreState */) => state.boards || {},

  //state.boards[state.app.boardId]
  currentBoard: (state /*: StoreState */) => sBoard
    .boards(state)[sApp.currentBoard(state)] || {},

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
  boardIds: (state /*: StoreState */) => sApp.boardIds(state)
};
export const selectBoardIds = (
  state /*: StoreState */
) => sBoard.boardIds(state)
export const selectBoard = (
  state /*: StoreState */
) => sBoard.currentBoard(state)

export const sNote = {
  notes: (state /*: StoreState */) => state.notes || {}
};
export const selectNotes = (
  state /*: StoreState */
) => sNote.notes(state)

export const sNoteLabel = {
  labels: (state /*: StoreState */ ) => state.noteLabels || {}
}

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
  app: sApp,
  drawer: sDrawer,
  board: sBoard,
  note: sNote,
  column: sColumn
};

export default selectors
