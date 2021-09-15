"use strict";

exports.__esModule = true;
exports["default"] = exports.editNoteDescr = exports.editNoteTitle = exports.initialState = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _crNewNote = function _crNewNote(noteId) {
  return {
    id: noteId,
    title: 'New Note'
  };
};

var initialState = {//'n-1': { id: 'n-1', title: 'Note 1' },
};
exports.initialState = initialState;
var notesSlice = (0, _toolkit.createSlice)({
  name: 'notes',
  initialState: initialState,
  reducers: {
    addNote: function addNote(state, action) {
      var noteId = action.payload.noteId;
      state[noteId] = _crNewNote(noteId);
    },
    deleteNote: function deleteNote(state, action) {
      var noteId = action.payload.noteId;
      delete state[noteId];
    },
    editNoteTitle: function editNoteTitle(state, action) {
      var _action$payload = action.payload,
          noteId = _action$payload.noteId,
          title = _action$payload.title;
      state[noteId].title = title;
    },
    editNoteDescr: function editNoteDescr(state, action) {
      var _action$payload2 = action.payload,
          noteId = _action$payload2.noteId,
          descr = _action$payload2.descr;
      state[noteId].descr = descr;
    },
    editNoteLabels: function editNoteLabels(state, action) {
      var _action$payload3 = action.payload,
          noteId = _action$payload3.noteId,
          labelsTo = _action$payload3.labelsTo;
      state[noteId].labels = labelsTo;
    }
  }
});
var reducer = notesSlice.reducer,
    actions = notesSlice.actions;
var editNoteTitle = actions.editNoteTitle,
    editNoteDescr = actions.editNoteDescr;
exports.editNoteDescr = editNoteDescr;
exports.editNoteTitle = editNoteTitle;
var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map