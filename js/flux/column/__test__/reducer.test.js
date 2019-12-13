"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends9 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _reducer = _interopRequireDefault(require("../reducer"));

var _actions = _interopRequireDefault(require("../actions"));

var _actions2 = _interopRequireDefault(require("../../note/actions"));

var _fns = _interopRequireDefault(require("../fns"));

var _initialState = _interopRequireDefault(require("../../initialState"));

var crColumn = _fns["default"].crColumn;
var state = _initialState["default"].columns;
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

var _crDnD = function _crDnD(droppableId, index) {
  return {
    droppableId: droppableId,
    index: index
  };
};

describe('reducer column', function () {
  test('should init initialState', function () {
    expect((0, _reducer["default"])(undefined, {})).toEqual(state);
  });
  test('should edit columm title', function () {
    var _extends2;

    var cId = 'c-1',
        newTitle = 'Column';
    expect((0, _reducer["default"])(state, _actions["default"].editColumnTitle(cId, newTitle))).toEqual((0, _extends9["default"])({}, state, (_extends2 = {}, _extends2[cId] = (0, _extends9["default"])({}, state[cId], {
      title: newTitle
    }), _extends2)));
  });
  test('should toggle columm, property isHide', function () {
    var _extends3, _extends4;

    var cId = 'c-1',
        stateHide = (0, _reducer["default"])(state, _actions["default"].toggleColumn(cId));
    expect(stateHide).toEqual((0, _extends9["default"])({}, state, (_extends3 = {}, _extends3[cId] = (0, _extends9["default"])({}, state[cId], {
      isHide: true
    }), _extends3)));
    expect((0, _reducer["default"])(stateHide, _actions["default"].toggleColumn(cId))).toEqual((0, _extends9["default"])({}, stateHide, (_extends4 = {}, _extends4[cId] = (0, _extends9["default"])({}, state[cId], {
      isHide: false
    }), _extends4)));
  });
  test('should add column', function () {
    var _extends5;

    var bId = 'b-1',
        cId = 'c-3';
    expect((0, _reducer["default"])(state, _actions["default"].addColumn(bId, cId))).toEqual((0, _extends9["default"])({}, state, (_extends5 = {}, _extends5[cId] = crColumn(cId), _extends5)));
  });
  test('should remove column', function () {
    var bId = 'b-1',
        cId = 'c-1';
    expect((0, _reducer["default"])(state, _actions["default"].removeColumn(bId, cId))).toEqual({
      'c-2': {
        id: 'c-2',
        title: 'Topic 2',
        noteIds: []
      }
    });
  });
  test('should add note', function () {
    var _extends6;

    var cId = 'c-1',
        nId = 'n-1';
    expect((0, _reducer["default"])(state, _actions2["default"].addNote(cId, nId))).toEqual((0, _extends9["default"])({}, state, (_extends6 = {}, _extends6[cId] = (0, _extends9["default"])({}, state[cId], {
      noteIds: [nId].concat(state[cId].noteIds)
    }), _extends6)));
  });
  test('should delete note', function () {
    var cId = 'c-1',
        nId = 'n-1',
        stateWithTask = (0, _reducer["default"])(state, _actions2["default"].addNote(cId, nId));
    expect((0, _reducer["default"])(stateWithTask, _actions2["default"].deleteNote(cId, nId))).toEqual((0, _extends9["default"])({}, state));
  });
  test('should move note between column', function () {
    var _extends7;

    var cFromId = 'c-1',
        cToId = 'c-2',
        nId = 'n-1',
        source = _crDnD(cFromId, 0),
        destination = _crDnD(cToId, 0),
        stateWithTask = (0, _reducer["default"])(state, _actions2["default"].addNote(cFromId, nId));

    expect((0, _reducer["default"])(stateWithTask, _actions2["default"].moveNote({
      draggableId: nId,
      source: source,
      destination: destination
    }))).toEqual((0, _extends9["default"])({}, state, (_extends7 = {}, _extends7[cToId] = (0, _extends9["default"])({}, state[cToId], {
      noteIds: [nId]
    }), _extends7)));
  });
  test('should move note between index in column', function () {
    var _extends8;

    var cId = 'c-1',
        n1Id = 'n-1',
        n2Id = 'n-2',
        state1 = (0, _reducer["default"])(state, _actions2["default"].addNote(cId, n1Id)),
        state2 = (0, _reducer["default"])(state1, _actions2["default"].addNote(cId, n2Id)),
        source = _crDnD(cId, 1),
        destination = _crDnD(cId, 0);

    expect((0, _reducer["default"])(state2, _actions2["default"].moveNote({
      draggableId: n1Id,
      source: source,
      destination: destination
    }))).toEqual((0, _extends9["default"])({}, state, (_extends8 = {}, _extends8[cId] = {
      id: cId,
      title: 'Topic 1',
      noteIds: [n1Id, n2Id],
      withAdd: true
    }, _extends8)));
  });
});
//# sourceMappingURL=reducer.test.js.map