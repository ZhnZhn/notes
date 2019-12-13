"use strict";

exports.__esModule = true;
exports["default"] = exports.addNote = exports.editNoteTitle = exports.deleteNote = exports.moveNote = exports.ACTION = void 0;
var ACTION = {
  MOVE_NOTE: 'MOVE_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
  ADD_NOTE: 'ADD_NOTE',
  EDIT_NOTE_TITLE: 'EDIT_NOTE_TITLE',
  EDIT_NOTE_DESCR: 'EDIT_NOTE_DESCR',
  EDIT_NOTE_LABELS: 'EDIT_NOTE_LABELS'
};
exports.ACTION = ACTION;

var moveNote = function moveNote(_ref) {
  var draggableId = _ref.draggableId,
      source = _ref.source,
      destination = _ref.destination;
  return {
    type: ACTION.MOVE_NOTE,
    noteId: draggableId,
    source: source,
    destination: destination
  };
};

exports.moveNote = moveNote;

var deleteNote = function deleteNote(columnId
/*: string */
, noteId
/*: string */
) {
  return {
    type: ACTION.DELETE_NOTE,
    columnId: columnId,
    noteId: noteId
  };
};

exports.deleteNote = deleteNote;

var editNoteTitle = function editNoteTitle(noteId
/*: string */
, title
/*: string */
) {
  return {
    type: ACTION.EDIT_NOTE_TITLE,
    noteId: noteId,
    title: title
  };
};

exports.editNoteTitle = editNoteTitle;

var editNoteDescr = function editNoteDescr(noteId
/*: string */
, descr
/*: string */
) {
  return {
    type: ACTION.EDIT_NOTE_DESCR,
    noteId: noteId,
    descr: descr
  };
};

var editNoteLabels = function editNoteLabels(noteId
/*: string */
, labels
/*: [] */
, labelsTo
/*?: [] */
, newLabels
/*?: [] */
) {
  return {
    type: ACTION.EDIT_NOTE_LABELS,
    noteId: noteId,
    labels: labels,
    labelsTo: labelsTo,
    newLabels: newLabels
  };
};

var addNote = function addNote(columnId
/*: string */
, noteId
/*: string */
) {
  return {
    type: ACTION.ADD_NOTE,
    columnId: columnId,
    noteId: noteId
  };
};
/*::
export type NoteAction =
  | $Call<typeof moveNote, string, {}, {}>
  | $Call<typeof deleteNote, string, string>
  | $Call<typeof editNoteTitle, string, string>
  | $Call<typeof editNoteDescr, string, string>
  | $Call<typeof editNoteLabels, string, []>
  | $Call<typeof addNote, string, string>
*/


exports.addNote = addNote;
var actions = {
  moveNote: moveNote,
  deleteNote: deleteNote,
  editNoteTitle: editNoteTitle,
  editNoteDescr: editNoteDescr,
  editNoteLabels: editNoteLabels,
  addNote: addNote
};
var _default = actions;
exports["default"] = _default;
//# sourceMappingURL=actions.js.map