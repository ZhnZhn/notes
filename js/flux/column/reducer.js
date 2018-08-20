'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends6 = require('babel-runtime/helpers/extends');

var _extends7 = _interopRequireDefault(_extends6);

var _actions = require('./actions');

var _actions2 = require('../note/actions');

var _initialState = require('../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _fns = require('./fns');

var _fns2 = _interopRequireDefault(_fns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crColumn = _fns2.default.crColumn,
    noteIdsTo = _fns2.default.noteIdsTo,
    filterNoteIds = _fns2.default.filterNoteIds,
    removeProp = _fns2.default.removeProp,
    moveExternal = _fns2.default.moveExternal,
    moveInternal = _fns2.default.moveInternal;


var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.columns;
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTION.EDIT_COLUMN_TITLE:
      {
        var columnId = action.columnId,
            title = action.title;

        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, columnId, (0, _extends7.default)({}, state[columnId], {
          title: title
        })));
      }
    case _actions.ACTION.ADD_COLUMN:
      {
        var _columnId = action.columnId;

        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, _columnId, crColumn(_columnId)));
      }
    case _actions.ACTION.REMOVE_COLUMN:
      {
        var _columnId2 = action.columnId;

        return removeProp(state, _columnId2);
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
        var _columnId3 = action.columnId,
            _noteId = action.noteId,
            column = state[_columnId3],
            newNodeIds = filterNoteIds(column, _noteId);

        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, _columnId3, noteIdsTo(column, newNodeIds)));
      }
    case _actions2.ACTION.ADD_NOTE:
      {
        var _columnId4 = action.columnId,
            _noteId2 = action.noteId,
            _column = state[_columnId4],
            newNoteIds = [_noteId2].concat((0, _toConsumableArray3.default)(_column.noteIds));

        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, _columnId4, noteIdsTo(_column, newNoteIds)));
      }

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map