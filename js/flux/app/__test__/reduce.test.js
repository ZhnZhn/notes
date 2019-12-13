"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _reducer = _interopRequireDefault(require("../reducer"));

var _actions = _interopRequireDefault(require("../actions"));

var _actions2 = _interopRequireDefault(require("../../board/actions"));

var _initialState = _interopRequireDefault(require("../../initialState"));

var state = _initialState["default"].app;
/*
const initState = {
  boardId: 'b-1',
  boardIds: ['b-1']
  uiTheme: 'DARK'
};
*/

describe('reducer app', function () {
  test('should init to initialState', function () {
    expect((0, _reducer["default"])(undefined, {})).toEqual(state);
  });
  test('should set uiTheme', function () {
    var uiThemeId = 'LIGHT';
    expect((0, _reducer["default"])(state, _actions["default"].setUiTheme(uiThemeId))).toEqual((0, _extends2["default"])({}, state, {
      uiTheme: uiThemeId
    }));
  });
  test('should set board current', function () {
    var bId = 'b-2';
    expect((0, _reducer["default"])(state, _actions2["default"].setBoardCurrent(bId))).toEqual((0, _extends2["default"])({}, state, {
      boardId: bId
    }));
  });
  test('should add board', function () {
    var bId = 'b-2';
    expect((0, _reducer["default"])(state, _actions2["default"].addBoard(bId))).toEqual((0, _extends2["default"])({}, state, {
      boardIds: [].concat(state.boardIds, [bId])
    }));
  });
  test('should remove board', function () {
    var bId = 'b-1';
    expect((0, _reducer["default"])(state, _actions2["default"].removeBoard(bId))).toEqual((0, _extends2["default"])({}, state, {
      boardId: null,
      boardIds: []
    }));
  });
});
//# sourceMappingURL=reduce.test.js.map