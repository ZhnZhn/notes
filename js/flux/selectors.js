"use strict";

exports.__esModule = true;
exports.selectNotes = exports.selectNoteLabels = exports.selectNoteIds = exports.selectDrawerItems = exports.selectColumns = exports.selectBoardIds = exports.selectBoard = exports.selectAppUiTheme = exports.selectAppModal = exports.selectAppBoardIds = exports.sBoard = exports.default = void 0;
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
const selectColumns = (state /*: StoreState */) => state.columns || {};
exports.selectColumns = selectColumns;
const selectColumn = (state /*: StoreState */, columnId /*: string */) => selectColumns(state)[columnId] || {};
const selectNoteIds = (state /*: StoreState */, columnId /*: string */) => selectColumn(state, columnId).noteIds || [];
exports.selectNoteIds = selectNoteIds;
const selectors = {
  board: sBoard
};
var _default = exports.default = selectors;
//# sourceMappingURL=selectors.js.map