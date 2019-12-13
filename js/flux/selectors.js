"use strict";

exports.__esModule = true;
exports["default"] = exports.sColumn = exports.sNoteLabel = exports.sNote = exports.sBoard = exports.sDrawer = exports.sApp = void 0;
var sApp = {
  app: function app(state
  /*: StoreState */
  ) {
    return state.app || {};
  },
  //state.app.boardId
  currentBoard: function currentBoard(state
  /*: StoreState */
  ) {
    return sApp.app(state).boardId;
  },
  //state.app.boardIds
  boardIds: function boardIds(state
  /*: StoreState */
  ) {
    return sApp.app(state).boardIds || [];
  },
  //state.app.uiTheme
  uiTheme: function uiTheme(state
  /*: StoreState */
  ) {
    return sApp.app(state).uiTheme;
  }
};
exports.sApp = sApp;
var sDrawer = {
  msg: function msg(state
  /*: StoreState */
  ) {
    return state.drawerMsg || [];
  }
};
exports.sDrawer = sDrawer;
var sBoard = {
  boards: function boards(state
  /*: StoreState */
  ) {
    return state.boards || {};
  },
  //state.boards[state.app.boardId]
  currentBoard: function currentBoard(state
  /*: StoreState */
  ) {
    return sBoard.boards(state)[sApp.currentBoard(state)] || {};
  },
  //state.boards[id]
  board: function board(state
  /*: StoreState */
  , boardId
  /*: string */
  ) {
    return sBoard.boards(state)[boardId] || {};
  },
  //state.boards[boardId].columnIds
  columnIds: function columnIds(state
  /*: StoreState */
  , boardId
  /*: string */
  ) {
    return sBoard.board(state, boardId).columnIds || [];
  },
  //state.app.boardIds
  boardIds: function boardIds(state
  /*: StoreState */
  ) {
    return sApp.boardIds(state);
  }
};
exports.sBoard = sBoard;
var sNote = {
  notes: function notes(state
  /*: StoreState */
  ) {
    return state.notes || {};
  }
};
exports.sNote = sNote;
var sNoteLabel = {
  labels: function labels(state
  /*: StoreState */
  ) {
    return state.noteLabels || {};
  }
};
exports.sNoteLabel = sNoteLabel;
var sColumn = {
  columns: function columns(state
  /*: StoreState */
  ) {
    return state.columns || {};
  },
  //state.columns[columnId]
  column: function column(state
  /*: StoreState */
  , columnId
  /*: string */
  ) {
    return sColumn.columns(state)[columnId] || {};
  },
  //state.columns[columnId].noteIds
  noteIds: function noteIds(state
  /*: StoreState */
  , columnId
  /*: string */
  ) {
    return sColumn.column(state, columnId).noteIds || [];
  }
};
exports.sColumn = sColumn;
var selectors = {
  app: sApp,
  drawer: sDrawer,
  board: sBoard,
  note: sNote,
  column: sColumn
};
var _default = selectors;
exports["default"] = _default;
//# sourceMappingURL=selectors.js.map