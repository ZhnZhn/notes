'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _actions = require('./actions');

var _initialState = require('../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _reducerFns = require('../reducerFns');

var _reducerFns2 = _interopRequireDefault(_reducerFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeProp = _reducerFns2.default.removeProp;


var _crNewNote = function _crNewNote(noteId) {
  return {
    id: noteId,
    title: 'New Note'
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.notes;
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTION.EDIT_NOTE_TITLE:
      {
        var noteId = action.noteId,
            title = action.title,
            note = state[noteId],
            newNote = (0, _extends5.default)({}, note, { title: title });

        return (0, _extends5.default)({}, state, (0, _defineProperty3.default)({}, noteId, newNote));
      }
    case _actions.ACTION.ADD_NOTE:
      {
        var _noteId = action.noteId;

        return (0, _extends5.default)({}, state, (0, _defineProperty3.default)({}, _noteId, _crNewNote(_noteId)));
      }
    case _actions.ACTION.DELETE_NOTE:
      {
        var _noteId2 = action.noteId;

        return removeProp(state, _noteId2);
      }
    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map