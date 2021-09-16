"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.editBoardTitle = exports.crBoard = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _actions = require("../column/actions");

var _initialState = _interopRequireDefault(require("../initialState"));

var _fDnDMoveFns2 = _interopRequireDefault(require("../fDnDMoveFns"));

var _fDnDMoveFns = (0, _fDnDMoveFns2["default"])('columnIds'),
    moveInternal = _fDnDMoveFns.moveInternal,
    moveExternal = _fDnDMoveFns.moveExternal;

var crBoard = function crBoard(id) {
  return {
    id: id,
    title: 'New Board',
    columnIds: []
  };
};

exports.crBoard = crBoard;
var boardsSlice = (0, _toolkit.createSlice)({
  name: "boards",
  initialState: _initialState["default"].boards,
  reducers: {
    editBoardTitle: function editBoardTitle(state, action) {
      var _action$payload = action.payload,
          boardId = _action$payload.boardId,
          title = _action$payload.title;
      state[boardId].title = title;
    },
    addBoard: function addBoard(state, action) {
      var boardId = action.payload.boardId;
      state[boardId] = crBoard(boardId);
    },
    removeBoard: function removeBoard(state, action) {
      var boardId = action.payload.boardId;
      delete state[boardId];
    }
  },
  extraReducers: function extraReducers(builder) {
    return builder.addCase(_actions.addColumn, function (state, action) {
      var _action$payload2 = action.payload,
          boardId = _action$payload2.boardId,
          columnId = _action$payload2.columnId;
      state[boardId].columnIds.push(columnId);
    }).addCase(_actions.removeColumn, function (state, action) {
      var _action$payload3 = action.payload,
          boardId = _action$payload3.boardId,
          columnId = _action$payload3.columnId,
          board = state[boardId];
      board.columnIds = board.columnIds.filter(function (id) {
        return id !== columnId;
      });
    }).addCase(_actions.moveColumn, function (state, action) {
      var _action$payload4 = action.payload,
          draggableId = _action$payload4.draggableId,
          source = _action$payload4.source,
          destination = _action$payload4.destination,
          from = state[source.droppableId],
          to = state[destination.droppableId];

      if (from === to) {
        moveInternal(state, draggableId, source, destination, from);
      } else {
        moveExternal(state, draggableId, source, destination, from, to);
      }
    });
  }
});
var actions = boardsSlice.actions,
    reducer = boardsSlice.reducer;
var editBoardTitle = actions.editBoardTitle;
exports.editBoardTitle = editBoardTitle;
var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map