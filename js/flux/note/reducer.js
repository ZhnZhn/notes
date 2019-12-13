"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("./actions");

var _initialState = _interopRequireDefault(require("../initialState"));

var _reducerFns = _interopRequireDefault(require("../reducerFns"));

var setInObj = _reducerFns["default"].setInObj,
    removeProp = _reducerFns["default"].removeProp;

var _crNewNote = function _crNewNote(noteId) {
  return {
    id: noteId,
    title: 'New Note'
  };
};

var reducer = function reducer(state
/*: NoteState */
, action
/*: NoteAction */
)
/*: NoteState */
{
  if (state === void 0) {
    state = _initialState["default"].notes;
  }

  switch (action.type) {
    case _actions.ACTION.EDIT_NOTE_TITLE:
      {
        var noteId = action.noteId,
            title = action.title,
            note = state[noteId],
            newNote = (0, _extends3["default"])({}, note, {
          title: title
        });
        return setInObj(state, noteId, newNote);
      }

    case _actions.ACTION.EDIT_NOTE_DESCR:
      {
        var _noteId = action.noteId,
            descr = action.descr,
            _note = state[_noteId],
            _newNote = (0, _extends3["default"])({}, _note, {
          descr: descr
        });

        return setInObj(state, _noteId, _newNote);
      }

    case _actions.ACTION.EDIT_NOTE_LABELS:
      {
        var _noteId2 = action.noteId,
            labelsTo = action.labelsTo,
            _note2 = state[_noteId2],
            _newNote2 = (0, _extends3["default"])({}, _note2, {
          labels: labelsTo
        });

        return setInObj(state, _noteId2, _newNote2);
      }

    case _actions.ACTION.ADD_NOTE:
      {
        var _extends2;

        var _noteId3 = action.noteId;
        return (0, _extends3["default"])({}, state, (_extends2 = {}, _extends2[_noteId3] = _crNewNote(_noteId3), _extends2));
      }

    case _actions.ACTION.DELETE_NOTE:
      {
        var _noteId4 = action.noteId;
        return removeProp(state, _noteId4);
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map