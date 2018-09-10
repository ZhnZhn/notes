'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('./actions');

var _actions2 = require('../board/actions');

var _initialState = require('../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _reducerFns = require('../reducerFns');

var _reducerFns2 = _interopRequireDefault(_reducerFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterBy = _reducerFns2.default.filterBy;

/*
const initState = {
  boardId: 'b-1',
  boardIds: ['b-1']
  uiTheme: 'GREY'
};
*/

var reducer = function reducer() /*: AppAction */
/*: AppState */{
  var state /*: AppState */ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.app;
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTION.SET_UI_THEME:
      {
        var uiTheme = action.uiTheme;

        return (0, _extends3.default)({}, state, {
          uiTheme: uiTheme
        });
      }
    case _actions2.ACTION.SET_BOARD_CURRENT:
      {
        var boardId = action.boardId;

        return (0, _extends3.default)({}, state, {
          boardId: boardId
        });
      }
    case _actions2.ACTION.ADD_BOARD:
      {
        var _boardId = action.boardId,
            newBoardIds = [].concat((0, _toConsumableArray3.default)(state.boardIds), [_boardId]);

        return (0, _extends3.default)({}, state, {
          boardIds: newBoardIds
        });
      }
    case _actions2.ACTION.REMOVE_BOARD:
      {
        var _boardId2 = action.boardId;

        if (state.boardId === _boardId2) {
          state.boardId = null;
        }
        return (0, _extends3.default)({}, state, {
          boardIds: filterBy(state.boardIds, _boardId2)
        });
      }
    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map