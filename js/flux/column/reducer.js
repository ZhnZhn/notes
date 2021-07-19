"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("./actions");

var _actions2 = require("../note/actions");

var _initialState = _interopRequireDefault(require("../initialState"));

var _fns = _interopRequireDefault(require("./fns"));

var setInObj = _fns["default"].setInObj,
    crColumn = _fns["default"].crColumn,
    noteIdsTo = _fns["default"].noteIdsTo,
    filterNoteIds = _fns["default"].filterNoteIds,
    removeProp = _fns["default"].removeProp,
    moveExternal = _fns["default"].moveExternal,
    moveInternal = _fns["default"].moveInternal;

var reducer = function reducer(state
/*: TopicState */
, action
/*: TopicAction */
)
/*: TopicState */
{
  if (state
  /*: TopicState */
  === void 0) {
    state
    /*: TopicState */
    = _initialState["default"].columns;
  }

  switch (action.type) {
    case _actions.ACTION.EDIT_COLUMN_TITLE:
      {
        var columnId = action.columnId,
            title = action.title;
        return setInObj(state, columnId, (0, _extends2["default"])({}, state[columnId], {
          title: title
        }));
      }

    case _actions.ACTION.ADD_COLUMN:
      {
        var _columnId = action.columnId;
        return setInObj(state, _columnId, crColumn(_columnId));
      }

    case _actions.ACTION.REMOVE_COLUMN:
      {
        var _columnId2 = action.columnId;
        return removeProp(state, _columnId2);
      }

    case _actions.ACTION.TOGGLE_COLUMN:
      {
        var _columnId3 = action.columnId,
            column = state[_columnId3];
        return setInObj(state, _columnId3, (0, _extends2["default"])({}, column, {
          isHide: !column.isHide
        }));
      }

    case _actions2.ACTION.MOVE_NOTE:
      {
        var noteId = action.noteId,
            source = action.source,
            destination = action.destination,
            from = state[source.droppableId],
            to = state[destination.droppableId];
        return from === to ? moveInternal(state, noteId, source, destination, from) : moveExternal(state, noteId, source, destination, from, to);
      }

    case _actions2.ACTION.DELETE_NOTE:
      {
        var _columnId4 = action.columnId,
            _noteId = action.noteId,
            _column = state[_columnId4],
            newNodeIds = filterNoteIds(_column, _noteId);
        return setInObj(state, _columnId4, noteIdsTo(_column, newNodeIds));
      }

    case _actions2.ACTION.ADD_NOTE:
      {
        var _columnId5 = action.columnId,
            _noteId2 = action.noteId,
            _column2 = state[_columnId5],
            newNoteIds = [_noteId2].concat(_column2.noteIds);
        return setInObj(state, _columnId5, noteIdsTo(_column2, newNoteIds));
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map