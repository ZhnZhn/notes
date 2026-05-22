"use strict";

exports.__esModule = true;
exports.selectNotes = exports.selectNoteLabels = exports.selectDrawerItems = exports.selectColumns = exports.selectBoardIds = exports.selectBoard = exports.sNote = exports.sColumn = exports.sBoard = exports.sApp = exports.default = void 0;
const sApp = exports.sApp = {
  app: (state /*: StoreState */) => state.app || {},
  modal: (state /*: StoreState */) => state.modal || {},
  //state.app.boardId
  currentBoard: (state /*: StoreState */) => sApp.app(state).boardId,
  //state.app.boardIds
  boardIds: (state /*: StoreState */) => sApp.app(state).boardIds || [],
  //state.app.uiTheme
  uiTheme: (state /*: StoreState */) => sApp.app(state).uiTheme
};
const sDrawer = {
  msg: (state /*: StoreState */) => state.drawerMsg || []
};
const selectDrawerItems = (state /*: StoreState */) => sDrawer.msg(state);
exports.selectDrawerItems = selectDrawerItems;
const sBoard = exports.sBoard = {
  boards: (state /*: StoreState */) => state.boards || {},
  //state.boards[state.app.boardId]
  currentBoard: (state /*: StoreState */) => sBoard.boards(state)[sApp.currentBoard(state)] || {},
  //state.boards[id]
  board: (state /*: StoreState */, boardId /*: string */) => sBoard.boards(state)[boardId] || {},
  //state.boards[boardId].columnIds
  columnIds: (state /*: StoreState */, boardId /*: string */) => sBoard.board(state, boardId).columnIds || [],
  //state.app.boardIds
  boardIds: (state /*: StoreState */) => sApp.boardIds(state)
};
const selectBoardIds = (state /*: StoreState */) => sBoard.boardIds(state);
exports.selectBoardIds = selectBoardIds;
const selectBoard = (state /*: StoreState */) => sBoard.currentBoard(state);
exports.selectBoard = selectBoard;
const sNote = exports.sNote = {
  notes: (state /*: StoreState */) => state.notes || {}
};
const selectNotes = (state /*: StoreState */) => sNote.notes(state);
exports.selectNotes = selectNotes;
const selectNoteLabels = (state /*: StoreState */) => state.noteLabels || {};
exports.selectNoteLabels = selectNoteLabels;
const sColumn = exports.sColumn = {
  columns: (state /*: StoreState */) => state.columns || {},
  //state.columns[columnId]
  column: (state /*: StoreState */, columnId /*: string */) => sColumn.columns(state)[columnId] || {},
  //state.columns[columnId].noteIds
  noteIds: (state /*: StoreState */, columnId /*: string */) => sColumn.column(state, columnId).noteIds || []
};
const selectColumns = (state /*: StoreState */) => sColumn.columns(state);
exports.selectColumns = selectColumns;
const selectors = {
  app: sApp,
  drawer: sDrawer,
  board: sBoard,
  note: sNote,
  column: sColumn
};
var _default = exports.default = selectors;
//# sourceMappingURL=selectors.js.map