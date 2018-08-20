'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACTION = exports.ACTION = {
  MOVE_NOTE: 'MOVE_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
  ADD_NOTE: 'ADD_NOTE',
  EDIT_NOTE_TITLE: 'EDIT_NOTE_TITLE'
};

var moveNote = exports.moveNote = function moveNote(noteId, source, destination) {
  return {
    type: ACTION.MOVE_NOTE,
    noteId: noteId,
    source: source,
    destination: destination
  };
};

var deleteNote = exports.deleteNote = function deleteNote(columnId, noteId) {
  return {
    type: ACTION.DELETE_NOTE,
    columnId: columnId,
    noteId: noteId
  };
};

var editNoteTitle = exports.editNoteTitle = function editNoteTitle(noteId, title) {
  return {
    type: ACTION.EDIT_NOTE_TITLE,
    noteId: noteId,
    title: title
  };
};

var addNote = exports.addNote = function addNote(columnId, noteId) {
  return {
    type: ACTION.ADD_NOTE,
    columnId: columnId,
    noteId: noteId
  };
};

var actions = {
  moveNote: moveNote,
  deleteNote: deleteNote,
  editNoteTitle: editNoteTitle,
  addNote: addNote
};

exports.default = actions;
//# sourceMappingURL=actions.js.map