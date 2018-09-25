'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends9 = require('babel-runtime/helpers/extends');

var _extends10 = _interopRequireDefault(_extends9);

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _actions3 = require('../../note/actions');

var _actions4 = _interopRequireDefault(_actions3);

var _fns = require('../fns');

var _fns2 = _interopRequireDefault(_fns);

var _initialState = require('../../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crColumn = _fns2.default.crColumn;
var state = _initialState2.default.columns;
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
    expect((0, _reducer2.default)(undefined, {})).toEqual(state);
  });
  test('should edit columm title', function () {
    var cId = 'c-1',
        newTitle = 'Column';
    expect((0, _reducer2.default)(state, _actions2.default.editColumnTitle(cId, newTitle))).toEqual((0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, cId, (0, _extends10.default)({}, state[cId], {
      title: newTitle
    }))));
  });
  test('should toggle columm, property isHide', function () {
    var cId = 'c-1',
        stateHide = (0, _reducer2.default)(state, _actions2.default.toggleColumn(cId));
    expect(stateHide).toEqual((0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, cId, (0, _extends10.default)({}, state[cId], {
      isHide: true
    }))));
    expect((0, _reducer2.default)(stateHide, _actions2.default.toggleColumn(cId))).toEqual((0, _extends10.default)({}, stateHide, (0, _defineProperty3.default)({}, cId, (0, _extends10.default)({}, state[cId], {
      isHide: false
    }))));
  });
  test('should add column', function () {
    var bId = 'b-1',
        cId = 'c-3';
    expect((0, _reducer2.default)(state, _actions2.default.addColumn(bId, cId))).toEqual((0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, cId, crColumn(cId))));
  });
  test('should remove column', function () {
    var bId = 'b-1',
        cId = 'c-1';
    expect((0, _reducer2.default)(state, _actions2.default.removeColumn(bId, cId))).toEqual({
      'c-2': {
        id: 'c-2',
        title: 'Topic 2',
        noteIds: []
      }
    });
  });
  test('should add note', function () {
    var cId = 'c-1',
        nId = 'n-1';
    expect((0, _reducer2.default)(state, _actions4.default.addNote(cId, nId))).toEqual((0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, cId, (0, _extends10.default)({}, state[cId], {
      noteIds: [nId].concat((0, _toConsumableArray3.default)(state[cId].noteIds))
    }))));
  });
  test('should delete note', function () {
    var cId = 'c-1',
        nId = 'n-1',
        stateWithTask = (0, _reducer2.default)(state, _actions4.default.addNote(cId, nId));
    expect((0, _reducer2.default)(stateWithTask, _actions4.default.deleteNote(cId, nId))).toEqual((0, _extends10.default)({}, state));
  });
  test('should move note between column', function () {
    var cFromId = 'c-1',
        cToId = 'c-2',
        nId = 'n-1',
        source = _crDnD(cFromId, 0),
        destination = _crDnD(cToId, 0),
        stateWithTask = (0, _reducer2.default)(state, _actions4.default.addNote(cFromId, nId));
    expect((0, _reducer2.default)(stateWithTask, _actions4.default.moveNote(nId, source, destination))).toEqual((0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, cToId, (0, _extends10.default)({}, state[cToId], {
      noteIds: [nId]
    }))));
  });
  test('should move note between index in column', function () {
    var cId = 'c-1',
        n1Id = 'n-1',
        n2Id = 'n-2',
        state1 = (0, _reducer2.default)(state, _actions4.default.addNote(cId, n1Id)),
        state2 = (0, _reducer2.default)(state1, _actions4.default.addNote(cId, n2Id)),
        source = _crDnD(cId, 1),
        destination = _crDnD(cId, 0);
    expect((0, _reducer2.default)(state2, _actions4.default.moveNote(n1Id, source, destination))).toEqual((0, _extends10.default)({}, state, (0, _defineProperty3.default)({}, cId, {
      id: cId,
      title: 'Topic 1',
      noteIds: [n1Id, n2Id],
      withAdd: true
    })));
  });
});
//# sourceMappingURL=reducer.test.js.map