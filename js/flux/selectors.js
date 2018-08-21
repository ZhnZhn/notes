"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sApp = exports.sApp = {
  app: function app(state) {
    return state.app || {};
  },
  //state.app.boardId
  currentBoard: function currentBoard(state) {
    return sApp.app(state).boardId;
  },
  //state.app.boardIds
  boardIds: function boardIds(state) {
    return sApp.app(state).boardIds || [];
  }
};

var sDrawer = exports.sDrawer = {
  msg: function msg(state) {
    return state.drawerMsg;
  }
};

var sBoard = exports.sBoard = {
  boards: function boards(state) {
    return state.boards || {};
  },
  //state.boards[state.app.boardId]
  currentBoard: function currentBoard(state) {
    return sBoard.boards(state)[sApp.currentBoard(state)] || {};
  },
  //state.boards[id]
  board: function board(state, boardId) {
    return sBoard.boards(state)[boardId] || {};
  },
  //state.boards[boardId].columnIds
  columnIds: function columnIds(state, boardId) {
    return sBoard.board(state, boardId).columnIds || [];
  },
  //state.app.boardIds
  boardIds: function boardIds(state) {
    return sApp.boardIds(state);
  }
};

var sNote = exports.sNote = {
  notes: function notes(state) {
    return state.notes || {};
  }
};

var sColumn = exports.sColumn = {
  columns: function columns(state) {
    return state.columns || {};
  },
  //state.columns[columnId]
  column: function column(state, columnId) {
    return sColumn.columns(state)[columnId] || {};
  },
  //state.columns[columnId].noteIds
  noteIds: function noteIds(state, columnId) {
    return sColumn.column(state, columnId).noteIds || [];
  }
};
//# sourceMappingURL=selectors.js.map