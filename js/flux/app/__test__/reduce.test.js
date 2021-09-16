"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reducer = _interopRequireWildcard(require("../reducer"));

var _actions = require("../../board/actions");

var _initialState = _interopRequireDefault(require("../../initialState"));

var _store = _interopRequireDefault(require("../../store"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getState = _store["default"].getState,
    dispatch = _store["default"].dispatch;

var _selectApp = function _selectApp() {
  return getState().app;
};
/*
const initState = {
  boardId: 'b-1',
  boardIds: ['b-1']
  uiTheme: 'DARK'
};
*/


describe('reducer app', function () {
  test('should init to initialState', function () {
    expect((0, _reducer["default"])(undefined, {})).toEqual(_initialState["default"].app);
  });
  test('should handle app actions correctly', function () {
    var uiTheme = "SAND";
    dispatch((0, _reducer.setUiTheme)({
      uiTheme: uiTheme
    }));
    expect(_selectApp().uiTheme).toBe(uiTheme);
  });
  test('should handle board actions correctly', function () {
    var initialBoardIds = _selectApp().boardIds;

    var boardId = dispatch((0, _actions.addBoard)());
    expect(_selectApp().boardIds[1]).toBe(boardId);
    dispatch((0, _actions.setCurrentBoard)({
      boardId: boardId
    }));
    expect(_selectApp().boardId).toBe(boardId);
    dispatch((0, _actions.removeBoard)({
      boardId: boardId
    }));
    expect(_selectApp().boardIds).toEqual(initialBoardIds);
  });
});
//# sourceMappingURL=reduce.test.js.map