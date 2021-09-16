"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _reducer = _interopRequireWildcard(require("../reducer"));

var _actions = require("../actions");

var _actions2 = require("../../column/actions");

var _initialState = _interopRequireDefault(require("../../initialState"));

var _store = _interopRequireDefault(require("../../store"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getState = _store["default"].getState,
    dispatch = _store["default"].dispatch;

var _selectBoards = function _selectBoards() {
  return getState().boards;
};
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
    expect((0, _reducer["default"])(undefined, {})).toEqual(_initialState["default"].boards);
  });
  test('should handle board actions correctly', function () {
    var _extends2;

    var beforeBoards = _selectBoards();

    var boardId = dispatch((0, _actions.addBoard)());
    expect(_selectBoards()).toEqual((0, _extends3["default"])({}, beforeBoards, (_extends2 = {}, _extends2[boardId] = (0, _reducer.crBoard)(boardId), _extends2)));
    var title = "Test Title";
    dispatch((0, _reducer.editBoardTitle)({
      boardId: boardId,
      title: title
    }));
    expect(_selectBoards()[boardId].title).toBe(title);
    var columnId_1 = dispatch((0, _actions2.addColumn)({
      boardId: boardId
    }));
    expect(_selectBoards()[boardId].columnIds).toEqual([columnId_1]);
    var columnId_2 = dispatch((0, _actions2.addColumn)({
      boardId: boardId
    }));
    expect(_selectBoards()[boardId].columnIds).toEqual([columnId_1, columnId_2]);
    dispatch((0, _actions2.moveColumn)({
      draggableId: columnId_2,
      source: {
        droppableId: boardId,
        index: 1
      },
      destination: {
        droppableId: boardId,
        index: 0
      }
    }));
    expect(_selectBoards()[boardId].columnIds).toEqual([columnId_2, columnId_1]);
    dispatch((0, _actions2.removeColumn)({
      boardId: boardId,
      columnId: columnId_1
    }));
    expect(_selectBoards()[boardId].columnIds).toEqual([columnId_2]);
    expect(dispatch((0, _actions.removeBoard)({
      boardId: boardId
    }))).toBe(false);
    dispatch((0, _actions2.removeColumn)({
      boardId: boardId,
      columnId: columnId_2
    }));
    expect(_selectBoards()[boardId].columnIds).toEqual([]);
    dispatch((0, _actions.removeBoard)({
      boardId: boardId
    }));
    expect(_selectBoards()).toEqual(beforeBoards);
  });
});
//# sourceMappingURL=reducer.test.js.map