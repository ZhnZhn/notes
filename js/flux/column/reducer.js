"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.toggleColumn = exports.editColumnTitle = exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _actions = require("../note/actions");

var _fns = _interopRequireDefault(require("./fns"));

var _initialState = _interopRequireDefault(require("../initialState"));

var crColumn = _fns["default"].crColumn,
    moveExternal = _fns["default"].moveExternal,
    moveInternal = _fns["default"].moveInternal;
/*
const initialState = {
  'c-1': {
    id: 'c-1',
    title: 'Topic 1',
    noteIds: [],
    withAdd: true
  },
  'c-2': {
    id: 'c-2',
    title: 'Topic 2',
    noteIds: []
  }
};
*/

var columnsSlice = (0, _toolkit.createSlice)({
  name: 'columns',
  initialState: _initialState["default"].columns,
  reducers: {
    editColumnTitle: function editColumnTitle(state, action) {
      var _action$payload = action.payload,
          columnId = _action$payload.columnId,
          title = _action$payload.title;
      state[columnId].title = title;
    },
    toggleColumn: function toggleColumn(state, action) {
      var columnId = action.payload.columnId,
          column = state[columnId];
      state[columnId].isHide = !column.isHide;
    },
    addColumn: function addColumn(state, action) {
      var columnId = action.payload.columnId;
      state[columnId] = crColumn(columnId);
    },
    removeColumn: function removeColumn(state, action) {
      var columnId = action.payload.columnId;
      delete state[columnId];
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(_actions.addNote, function (state, action) {
      var _action$payload2 = action.payload,
          columnId = _action$payload2.columnId,
          noteId = _action$payload2.noteId;
      state[columnId].noteIds.unshift(noteId);
    }).addCase(_actions.deleteNote, function (state, action) {
      var _action$payload3 = action.payload,
          columnId = _action$payload3.columnId,
          noteId = _action$payload3.noteId,
          column = state[columnId];
      column.noteIds = column.noteIds.filter(function (id) {
        return id !== noteId;
      });
    }).addCase(_actions.moveNote, function (state, action) {
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
var actions = columnsSlice.actions,
    reducer = columnsSlice.reducer;
var editColumnTitle = actions.editColumnTitle,
    toggleColumn = actions.toggleColumn;
exports.toggleColumn = toggleColumn;
exports.editColumnTitle = editColumnTitle;
var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map