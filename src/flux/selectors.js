// @flow

export const sApp = {
  app: (state /*: StoreState */) => state.app || {},
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

export const sDrawer = {
  msg: (state /*: StoreState */) => state.drawerMsg || []
};

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

export const sNote = {
  notes: (state /*: StoreState */) => state.notes || {}
};

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

const selectors = {
  app: sApp,
  drawer: sDrawer,
  board: sBoard,
  note: sNote,
  column: sColumn
};

export default selectors
