"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("./actions");

var _actions2 = require("../column/actions");

var _initialState = _interopRequireDefault(require("../initialState"));

var _reducerFns = _interopRequireDefault(require("../reducerFns"));

var _fDnDMoveFns2 = _interopRequireDefault(require("../fDnDMoveFns"));

var setInObj = _reducerFns["default"].setInObj,
    removeProp = _reducerFns["default"].removeProp,
    filterBy = _reducerFns["default"].filterBy;

var _fDnDMoveFns = (0, _fDnDMoveFns2["default"])('columnIds'),
    moveInternal = _fDnDMoveFns.moveInternal,
    moveExternal = _fDnDMoveFns.moveExternal;
/*
boards: {
  'b-1': {
    id: 'b-1',
    title: 'Board 1',
    columnIds: ['c-1','c-2']
  }
}
*/


var reducer = function reducer(state
/*: BoardState */
, action
/*: BoardAction */
)
/*: BoardState */
{
  if (state === void 0) {
    state = _initialState["default"].boards;
  }

  switch (action.type) {
    case _actions.ACTION.EDIT_BOARD_TITLE:
      {
        var boardId = action.boardId,
            title = action.title,
            newBoard = (0, _extends2["default"])({}, state[boardId], {
          title: title
        });
        return setInObj(state, boardId, newBoard);
      }

    case _actions.ACTION.ADD_BOARD:
      {
        var _boardId = action.boardId;
        return setInObj(state, _boardId, {
          id: _boardId,
          title: 'New Board',
          columnIds: []
        });
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
            _newBoard = (0, _extends2["default"])({}, oldBoard, {
          columnIds: [].concat(oldBoard.columnIds, [columnId])
        });

        return setInObj(state, _boardId3, _newBoard);
      }

    case _actions2.ACTION.REMOVE_COLUMN:
      {
        var _boardId4 = action.boardId,
            _columnId = action.columnId,
            _oldBoard = state[_boardId4];
        return setInObj(state, _boardId4, (0, _extends2["default"])({}, _oldBoard, {
          columnIds: filterBy(_oldBoard.columnIds, _columnId)
        }));
      }

    case _actions2.ACTION.MOVE_COLUMN:
      {
        var _columnId2 = action.columnId,
            source = action.source,
            destination = action.destination,
            from = state[source.droppableId],
            to = state[destination.droppableId];
        return from === to ? moveInternal(state, _columnId2, source, destination, from) : moveExternal(state, _columnId2, source, destination, from, to);
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map