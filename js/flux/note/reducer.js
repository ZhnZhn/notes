'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _actions = require('./actions');

var _initialState = require('../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _reducerFns = require('../reducerFns');

var _reducerFns2 = _interopRequireDefault(_reducerFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setInObj = _reducerFns2.default.setInObj,
    removeProp = _reducerFns2.default.removeProp;


var _crNewNote = function _crNewNote(noteId) {
  return {
    id: noteId,
    title: 'New Note'
  };
};

var reducer = function reducer() /*: NoteAction */
/*: NoteState */{
  var state /*: NoteState */ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.notes;
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTION.EDIT_NOTE_TITLE:
      {
        var noteId = action.noteId,
            title = action.title,
            note = state[noteId],
            newNote = (0, _extends4.default)({}, note, { title: title });

        return setInObj(state, noteId, newNote);
      }
    case _actions.ACTION.EDIT_NOTE_DESCR:
      {
        var _noteId = action.noteId,
            descr = action.descr,
            _note = state[_noteId],
            _newNote = (0, _extends4.default)({}, _note, { descr: descr });

        return setInObj(state, _noteId, _newNote);
      }
    case _actions.ACTION.ADD_NOTE:
      {
        var _noteId2 = action.noteId;

        return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, _noteId2, _crNewNote(_noteId2)));
      }
    case _actions.ACTION.DELETE_NOTE:
      {
        var _noteId3 = action.noteId;

        return removeProp(state, _noteId3);
      }
    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map