'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends6 = require('babel-runtime/helpers/extends');

var _extends7 = _interopRequireDefault(_extends6);

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _actions3 = require('../../column/actions');

var _actions4 = _interopRequireDefault(_actions3);

var _initialState = require('../../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = _initialState2.default.boards;
/*
const initState = {
  'b-1': {
    id: 'b-1',
    title: 'Board 1',
    columnIds: ['c-1','c-2']
  }
};
*/

describe('reducer board', function () {
  test('should init to initialState', function () {
    expect((0, _reducer2.default)(undefined, {})).toEqual(state);
  });

  test('should edit board title', function () {
    var bId = 'b-1',
        newTitle = 'Board';
    expect((0, _reducer2.default)(state, _actions2.default.editBoardTitle(bId, newTitle))).toEqual((0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, bId, (0, _extends7.default)({}, state[bId], {
      title: newTitle
    }))));
  });

  test('should add new board', function () {
    var bId = 'b-2';
    expect((0, _reducer2.default)(state, _actions2.default.addBoard(bId))).toEqual((0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, bId, {
      id: bId,
      title: 'New Board',
      columnIds: []
    })));
  });

  test('should remove board', function () {
    var bId = 'b-1';
    expect((0, _reducer2.default)(state, _actions2.default.removeBoard(bId))).toEqual({});
  });

  test('should add column', function () {
    var bId = 'b-1',
        cId = 'c-4';
    expect((0, _reducer2.default)(state, _actions4.default.addColumn(bId, cId))).toEqual((0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, bId, (0, _extends7.default)({}, state[bId], {
      columnIds: [].concat((0, _toConsumableArray3.default)(state[bId].columnIds), [cId])
    }))));
  });

  test('should remove column', function () {
    var bId = 'b-1',
        cId = 'c-1';
    expect((0, _reducer2.default)(state, _actions4.default.removeColumn(bId, cId))).toEqual((0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, bId, (0, _extends7.default)({}, state[bId], {
      columnIds: ['c-2']
    }))));
  });
});
//# sourceMappingURL=reducer.test.js.map