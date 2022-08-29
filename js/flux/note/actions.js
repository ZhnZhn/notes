"use strict";

exports.__esModule = true;
exports.moveNote = exports.editNoteLabels = exports.deleteNote = exports.addNote = void 0;

var _toolkit = require("@reduxjs/toolkit");

var addNote = (0, _toolkit.createAction)("notes/addNote");
exports.addNote = addNote;
var deleteNote = (0, _toolkit.createAction)("notes/deleteNote");
exports.deleteNote = deleteNote;
var moveNote = (0, _toolkit.createAction)("notes/moveNote");
exports.moveNote = moveNote;
var editNoteLabels = (0, _toolkit.createAction)("notes/editNoteLabels");
exports.editNoteLabels = editNoteLabels;
//# sourceMappingURL=actions.js.map