"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sApp = exports.sApp = {
  app: function app(state /*: StoreState */) {
    return state.app || {};
  },
  //state.app.boardId
  currentBoard: function currentBoard(state /*: StoreState */) {
    return sApp.app(state).boardId;
  },
  //state.app.boardIds
  boardIds: function boardIds(state /*: StoreState */) {
    return sApp.app(state).boardIds || [];
  },
  //state.app.uiTheme
  uiTheme: function uiTheme(state /*: StoreState */) {
    return sApp.app(state).uiTheme;
  }
};

var sDrawer = exports.sDrawer = {
  msg: function msg(state /*: StoreState */) {
    return state.drawerMsg || [];
  }
};

var sBoard = exports.sBoard = {
  boards: function boards(state /*: StoreState */) {
    return state.boards || {};
  },

  //state.boards[state.app.boardId]
  currentBoard: function currentBoard(state /*: StoreState */) {
    return sBoard.boards(state)[sApp.currentBoard(state)] || {};
  },

  //state.boards[id]
  board: function board(state /*: StoreState */
  , boardId /*: string */
  ) {
    return sBoard.boards(state)[boardId] || {};
  },

  //state.boards[boardId].columnIds
  columnIds: function columnIds(state /*: StoreState */
  , boardId /*: string */
  ) {
    return sBoard.board(state, boardId).columnIds || [];
  },

  //state.app.boardIds
  boardIds: function boardIds(state /*: StoreState */) {
    return sApp.boardIds(state);
  }
};

var sNote = exports.sNote = {
  notes: function notes(state /*: StoreState */) {
    return state.notes || {};
  }
};

var sNoteLabel = exports.sNoteLabel = {
  labels: function labels(state /*: StoreState */) {
    return state.noteLabels || {};
  }
};

var sColumn = exports.sColumn = {
  columns: function columns(state /*: StoreState */) {
    return state.columns || {};
  },

  //state.columns[columnId]
  column: function column(state /*: StoreState */
  , columnId /*: string */
  ) {
    return sColumn.columns(state)[columnId] || {};
  },

  //state.columns[columnId].noteIds
  noteIds: function noteIds(state /*: StoreState */
  , columnId /*: string */
  ) {
    return sColumn.column(state, columnId).noteIds || [];
  }
};

var selectors = {
  app: sApp,
  drawer: sDrawer,
  board: sBoard,
  note: sNote,
  column: sColumn
};

exports.default = selectors;
//# sourceMappingURL=selectors.js.map