
export const sApp = {
  app: state => state.app || {},
  //state.app.boardId
  currentBoard: state => sApp
    .app(state).boardId,
  //state.app.boardIds
  boardIds: state => sApp
    .app(state).boardIds || [],
};

export const sDrawer = {
  msg: state => state.drawerMsg
};

export const sBoard = {
  boards: state => state.boards || {},
  //state.boards[state.app.boardId]
  currentBoard: state => sBoard
    .boards(state)[sApp.currentBoard(state)] || {},
  //state.boards[id]
  board: (state, boardId) => sBoard
    .boards(state)[boardId] || {},
  //state.boards[boardId].columnIds
  columnIds: (state, boardId) => sBoard
    .board(state, boardId).columnIds || [],
  //state.app.boardIds
  boardIds: state => sApp.boardIds(state)
};

export const sNote = {
  notes: state => state.notes || {}
};

export const sColumn = {
  columns: state => state.columns || {},
  //state.columns[columnId]
  column: (state, columnId) => sColumn
    .columns(state)[columnId] || {},
  //state.columns[columnId].noteIds
  noteIds: (state, columnId) => sColumn
    .column(state, columnId).noteIds || []
};
