"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends6 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _reducer = _interopRequireDefault(require("../reducer"));

var _actions = _interopRequireDefault(require("../actions"));

var _actions2 = _interopRequireDefault(require("../../column/actions"));

var _initialState = _interopRequireDefault(require("../../initialState"));

var state = _initialState["default"].boards;
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
    expect((0, _reducer["default"])(undefined, {})).toEqual(state);
  });
  test('should edit board title', function () {
    var _extends2;

    var bId = 'b-1',
        newTitle = 'Board';
    expect((0, _reducer["default"])(state, _actions["default"].editBoardTitle(bId, newTitle))).toEqual((0, _extends6["default"])({}, state, (_extends2 = {}, _extends2[bId] = (0, _extends6["default"])({}, state[bId], {
      title: newTitle
    }), _extends2)));
  });
  test('should add new board', function () {
    var _extends3;

    var bId = 'b-2';
    expect((0, _reducer["default"])(state, _actions["default"].addBoard(bId))).toEqual((0, _extends6["default"])({}, state, (_extends3 = {}, _extends3[bId] = {
      id: bId,
      title: 'New Board',
      columnIds: []
    }, _extends3)));
  });
  test('should remove board', function () {
    var bId = 'b-1';
    expect((0, _reducer["default"])(state, _actions["default"].removeBoard(bId))).toEqual({});
  });
  test('should add column', function () {
    var _extends4;

    var bId = 'b-1',
        cId = 'c-4';
    expect((0, _reducer["default"])(state, _actions2["default"].addColumn(bId, cId))).toEqual((0, _extends6["default"])({}, state, (_extends4 = {}, _extends4[bId] = (0, _extends6["default"])({}, state[bId], {
      columnIds: [].concat(state[bId].columnIds, [cId])
    }), _extends4)));
  });
  test('should remove column', function () {
    var _extends5;

    var bId = 'b-1',
        cId = 'c-1';
    expect((0, _reducer["default"])(state, _actions2["default"].removeColumn(bId, cId))).toEqual((0, _extends6["default"])({}, state, (_extends5 = {}, _extends5[bId] = (0, _extends6["default"])({}, state[bId], {
      columnIds: ['c-2']
    }), _extends5)));
  });
});
//# sourceMappingURL=reducer.test.js.map