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

var _actions2 = require('../column/actions');

var _initialState = require('../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _reducerFns = require('../reducerFns');

var _reducerFns2 = _interopRequireDefault(_reducerFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeProp = _reducerFns2.default.removeProp,
    filterBy = _reducerFns2.default.filterBy;

/*
boards: {
  'b-1': {
    id: 'b-1',
    title: 'Board 1',
    columnIds: ['c-1','c-2']
  }
}
*/

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.boards;
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTION.EDIT_BOARD_TITLE:
      {
        var boardId = action.boardId,
            title = action.title,
            newBoard = (0, _extends7.default)({}, state[boardId], { title: title });

        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, boardId, newBoard));
      }
    case _actions.ACTION.ADD_BOARD:
      {
        var _boardId = action.boardId;

        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, _boardId, {
          id: _boardId,
          title: 'New Board',
          columnIds: []
        }));
      }
    case _actions.ACTION.REMOVE_BOARD:
      {
        var _boardId2 = action.boardId;

        return removeProp(state, _boardId2);
      }
    case _actions2.ACTION.ADD_COLUMN:
      {
        var _boardId3 = action.boardId,
            columnId = action.columnId,
            oldBoard = state[_boardId3],
            _newBoard = (0, _extends7.default)({}, oldBoard, {
          columnIds: [].concat((0, _toConsumableArray3.default)(oldBoard.columnIds), [columnId])
        });

        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, _boardId3, _newBoard));
      }
    case _actions2.ACTION.REMOVE_COLUMN:
      {
        var _boardId4 = action.boardId,
            _columnId = action.columnId,
            _oldBoard = state[_boardId4];

        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, _boardId4, (0, _extends7.default)({}, _oldBoard, {
          columnIds: filterBy(_oldBoard.columnIds, _columnId)
        })));
      }
    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map