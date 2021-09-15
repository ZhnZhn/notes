"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reducer = _interopRequireWildcard(require("../reducer"));

var _actions = require("../actions");

var _store = _interopRequireDefault(require("../../store"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var dispatch = _store["default"].dispatch,
    getState = _store["default"].getState;
/*
const state = {
  'n-1': {
    id: 'n-1',
    title: 'Note 1'
  },
  'n-2': {
    id: 'n-2',
    title: 'Note 2'
  }
};
*/

var _getIdFromSlice = function _getIdFromSlice(pathSlice) {
  return Object.keys(getState()[pathSlice])[0];
};

var _selectNotes = function _selectNotes() {
  return getState().notes;
};

describe('reducer notes', function () {
  test('should init to initialState', function () {
    expect((0, _reducer["default"])(undefined, {})).toEqual(_reducer.initialState);
  });
  test('should handle actions', function () {
    var _expect$toEqual, _expect$toEqual2, _expect$toEqual3;

    var columnId = _getIdFromSlice('columns');

    dispatch((0, _actions.addNote)({
      columnId: columnId
    }));

    var noteId = _getIdFromSlice('notes');

    expect(_selectNotes()).toEqual((_expect$toEqual = {}, _expect$toEqual[noteId] = {
      id: noteId,
      title: "New Note"
    }, _expect$toEqual));
    var title = 'Title';
    dispatch((0, _reducer.editNoteTitle)({
      noteId: noteId,
      title: title
    }));
    expect(_selectNotes()).toEqual((_expect$toEqual2 = {}, _expect$toEqual2[noteId] = {
      id: noteId,
      title: title
    }, _expect$toEqual2));
    var descr = "Description";
    dispatch((0, _reducer.editNoteDescr)({
      noteId: noteId,
      descr: descr
    }));
    expect(_selectNotes()).toEqual((_expect$toEqual3 = {}, _expect$toEqual3[noteId] = {
      id: noteId,
      title: title,
      descr: descr
    }, _expect$toEqual3));
    dispatch((0, _actions.deleteNote)({
      noteId: noteId,
      columnId: columnId
    }));
    expect(_selectNotes()).toEqual({});
  });
});
//# sourceMappingURL=reducer.test.js.map