"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _reducer = _interopRequireWildcard(require("../reducer"));

var _actions = require("../actions");

var _actions2 = require("../../note/actions");

var _fns = _interopRequireDefault(require("../fns"));

var _initialState = _interopRequireDefault(require("../../initialState"));

var _store = _interopRequireDefault(require("../../store"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var crColumn = _fns["default"].crColumn;
var getState = _store["default"].getState,
    dispatch = _store["default"].dispatch;

var _selectColums = function _selectColums() {
  return getState().columns;
};
/*
const initState = {
  'c-1': {
    id: 'c-1',
    title: 'Topic 1',
    noteIds: [],
    withAdd: true
  },
  'c-2': {
    id: 'c-2',
    title: 'Topic 2',
    noteIds: []
  }
};
*/


var boardId = Object.keys(getState().boards)[0];
describe('reducer column', function () {
  test('should init initialState', function () {
    expect((0, _reducer["default"])(undefined, {})).toEqual(_initialState["default"].columns);
  });
  test('should handle actions correctly', function () {
    var _extends2;

    var beforeColums = _selectColums();

    var columnId = dispatch((0, _actions.addColumn)({
      boardId: boardId
    }));
    expect(_selectColums()).toEqual((0, _extends3["default"])({}, beforeColums, (_extends2 = {}, _extends2[columnId] = crColumn(columnId), _extends2)));
    var title = "Test Title";
    dispatch((0, _reducer.editColumnTitle)({
      columnId: columnId,
      title: title
    }));
    expect(_selectColums()[columnId].title).toBe(title);
    var noteId_1 = dispatch((0, _actions2.addNote)({
      boardId: boardId,
      columnId: columnId
    }));
    expect(_selectColums()[columnId].noteIds).toEqual([noteId_1]);
    var noteId_2 = dispatch((0, _actions2.addNote)({
      boardId: boardId,
      columnId: columnId
    }));
    expect(_selectColums()[columnId].noteIds).toEqual([noteId_2, noteId_1]);
    dispatch((0, _actions2.moveNote)({
      draggableId: noteId_1,
      source: {
        droppableId: columnId,
        index: 1
      },
      destination: {
        droppableId: columnId,
        index: 0
      }
    }));
    expect(_selectColums()[columnId].noteIds).toEqual([noteId_1, noteId_2]);
    dispatch((0, _actions2.deleteNote)({
      columnId: columnId,
      noteId: noteId_1
    }));
    expect(_selectColums()[columnId].noteIds).toEqual([noteId_2]);
    dispatch((0, _actions2.deleteNote)({
      columnId: columnId,
      noteId: noteId_2
    }));
    expect(_selectColums()[columnId].noteIds).toEqual([]);
    dispatch((0, _reducer.toggleColumn)({
      columnId: columnId
    }));
    expect(_selectColums()[columnId].isHide).toBe(true);
    dispatch((0, _reducer.toggleColumn)({
      columnId: columnId
    }));
    expect(_selectColums()[columnId].isHide).toBe(false);
    dispatch((0, _actions.removeColumn)({
      boardId: boardId,
      columnId: columnId
    }));
    expect(_selectColums()).toEqual(beforeColums);
  });
});
//# sourceMappingURL=reducer.test.js.map