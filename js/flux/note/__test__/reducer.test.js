'use strict';

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _initialState = require('../../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  'n-1': {
    id: 'n-1',
    title: 'Note 1'
  },
  'n-2': {
    id: 'n-2',
    title: 'Note 2'
  }
};

describe('reducer note', function () {
  test('should init to initialState', function () {
    expect((0, _reducer2.default)(undefined, {})).toEqual(_initialState2.default.notes);
  });
  test('should edit note title', function () {
    var nId = 'n-1',
        newTitle = 'Note',
        state = (0, _defineProperty3.default)({}, nId, { id: nId, title: 'Title' });
    expect((0, _reducer2.default)(state, _actions2.default.editNoteTitle(nId, newTitle))).toEqual((0, _defineProperty3.default)({}, nId, {
      id: nId,
      title: newTitle
    }));
  });

  test('should edit note descr', function () {
    var nId = 'n-1',
        newDescr = 'Note',
        state = (0, _defineProperty3.default)({}, nId, { id: nId, title: 'Title' });
    expect((0, _reducer2.default)(state, _actions2.default.editNoteDescr(nId, newDescr))).toEqual((0, _defineProperty3.default)({}, nId, {
      id: nId,
      title: 'Title',
      descr: newDescr
    }));
  });

  test('should set new labels', function () {
    var nId = 'n-1',
        labelsTo = [{ id: 'nl-1', title: 'Story', color: 'green' }],
        state = (0, _defineProperty3.default)({}, nId, { id: nId, title: 'Title' });
    expect((0, _reducer2.default)(state, _actions2.default.editNoteLabels(nId, [], labelsTo, []))).toEqual((0, _defineProperty3.default)({}, nId, {
      id: nId,
      title: 'Title',
      labels: labelsTo
    }));
  });

  test('should add note', function () {
    var cId = 'c-1',
        nId = 'n-3';
    expect((0, _reducer2.default)(state, _actions2.default.addNote(cId, nId))).toEqual((0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, nId, {
      id: nId,
      title: 'New Note'
    })));
  });
  test('should remove note', function () {
    var cId = 'c-1',
        nId = 'n-1';
    expect((0, _reducer2.default)(state, _actions2.default.deleteNote(cId, nId))).toEqual({
      'n-2': {
        id: 'n-2',
        title: 'Note 2'
      }
    });
  });
});
//# sourceMappingURL=reducer.test.js.map