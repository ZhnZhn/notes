"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("./actions");

var _actions2 = require("../board/actions");

var _initialState = _interopRequireDefault(require("../initialState"));

var _reducerFns = _interopRequireDefault(require("../reducerFns"));

var setInObj = _reducerFns["default"].setInObj,
    filterBy = _reducerFns["default"].filterBy;
/*
const initState = {
  boardId: 'b-1',
  boardIds: ['b-1']
  uiTheme: 'GREY'
};
*/

var reducer = function reducer(state
/*: AppState */
, action
/*: AppAction */
)
/*: AppState */
{
  if (state
  /*: AppState */
  === void 0) {
    state
    /*: AppState */
    = _initialState["default"].app;
  }

  switch (action.type) {
    case _actions.ACTION.SET_UI_THEME:
      {
        var uiTheme = action.uiTheme;
        return (0, _extends2["default"])({}, state, {
          uiTheme: uiTheme
        });
      }

    case _actions2.ACTION.SET_BOARD_CURRENT:
      {
        var boardId = action.boardId;
        return (0, _extends2["default"])({}, state, {
          boardId: boardId
        });
      }

    case _actions2.ACTION.ADD_BOARD:
      {
        var _boardId = action.boardId,
            newBoardIds = [].concat(state.boardIds, [_boardId]);
        return setInObj(state, 'boardIds', newBoardIds);
      }

    case _actions2.ACTION.REMOVE_BOARD:
      {
        var _boardId2 = action.boardId;

        if (state.boardId === _boardId2) {
          state.boardId = null;
        }

        return setInObj(state, 'boardIds', filterBy(state.boardIds, _boardId2));
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map