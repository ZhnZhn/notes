'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = require('../../board/actions');

var _actions2 = _interopRequireDefault(_actions);

var _initialState = require('../../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = _initialState2.default.app;
/*
const initState = {
  boardId: 'b-1',
  boardIds: ['b-1']
};
*/

describe('reducer app', function () {
  test('should init to initialState', function () {
    expect((0, _reducer2.default)(undefined, {})).toEqual(state);
  });

  test('should set board current', function () {
    var bId = 'b-2';
    expect((0, _reducer2.default)(state, _actions2.default.setBoardCurrent(bId))).toEqual((0, _extends3.default)({}, state, {
      boardId: bId
    }));
  });

  test('should add board', function () {
    var bId = 'b-2';
    expect((0, _reducer2.default)(state, _actions2.default.addBoard(bId))).toEqual((0, _extends3.default)({}, state, {
      boardIds: [].concat((0, _toConsumableArray3.default)(state.boardIds), [bId])
    }));
  });

  test('should remove board', function () {
    var bId = 'b-1';
    expect((0, _reducer2.default)(state, _actions2.default.removeBoard(bId))).toEqual({
      boardId: null,
      boardIds: []
    });
  });
});
//# sourceMappingURL=reduce.test.js.map