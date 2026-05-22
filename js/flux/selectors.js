"use strict";

exports.__esModule = true;
exports.selectNotes = exports.selectNoteLabels = exports.selectDrawerItems = exports.selectColumns = exports.selectBoardIds = exports.selectBoard = exports.selectAppUiTheme = exports.selectAppModal = exports.selectAppBoardIds = exports.sColumn = exports.sBoard = exports.default = void 0;
const selectApp = (state /*: StoreState */) => state.app || {};
const selectAppModal = (state /*: StoreState */) => state.modal || {};
exports.selectAppModal = selectAppModal;
const selectAppCurrentBoard = (state /*: StoreState */) => selectApp(state).boardId;
const selectAppBoardIds = (state /*: StoreState */) => selectApp(state).boardIds || [];
exports.selectAppBoardIds = selectAppBoardIds;
const selectAppUiTheme = (state /*: StoreState */) => selectApp(state).uiTheme;
exports.selectAppUiTheme = selectAppUiTheme;
const selectDrawerItems = (state /*: StoreState */) => state.drawerMsg || [];
exports.selectDrawerItems = selectDrawerItems;
const sBoard = exports.sBoard = {
  boards: (state /*: StoreState */) => state.boards || {},
  //state.boards[state.app.boardId]
  currentBoard: (state /*: StoreState */) => sBoard.boards(state)[selectAppCurrentBoard(state)] || {},
  //state.boards[id]
  board: (state /*: StoreState */, boardId /*: string */) => sBoard.boards(state)[boardId] || {},
  //state.boards[boardId].columnIds
  columnIds: (state /*: StoreState */, boardId /*: string */) => sBoard.board(state, boardId).columnIds || [],
  //state.app.boardIds
  boardIds: (state /*: StoreState */) => selectAppBoardIds(state)
};
const selectBoardIds = (state /*: StoreState */) => sBoard.boardIds(state);
exports.selectBoardIds = selectBoardIds;
const selectBoard = (state /*: StoreState */) => sBoard.currentBoard(state);
exports.selectBoard = selectBoard;
const selectNotes = (state /*: StoreState */) => state.notes || {};
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
  board: sBoard,
  column: sColumn
};
var _default = exports.default = selectors;
//# sourceMappingURL=selectors.js.map