"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _reducer = _interopRequireDefault(require("../reducer"));

var _actions = _interopRequireDefault(require("../actions"));

var _initialState = _interopRequireDefault(require("../../initialState"));

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
    expect((0, _reducer["default"])(undefined, {})).toEqual(_initialState["default"].notes);
  });
  test('should edit note title', function () {
    var _state, _expect$toEqual;

    var nId = 'n-1',
        newTitle = 'Note',
        state = (_state = {}, _state[nId] = {
      id: nId,
      title: 'Title'
    }, _state);
    expect((0, _reducer["default"])(state, _actions["default"].editNoteTitle(nId, newTitle))).toEqual((_expect$toEqual = {}, _expect$toEqual[nId] = {
      id: nId,
      title: newTitle
    }, _expect$toEqual));
  });
  test('should edit note descr', function () {
    var _state2, _expect$toEqual2;

    var nId = 'n-1',
        newDescr = 'Note',
        state = (_state2 = {}, _state2[nId] = {
      id: nId,
      title: 'Title'
    }, _state2);
    expect((0, _reducer["default"])(state, _actions["default"].editNoteDescr(nId, newDescr))).toEqual((_expect$toEqual2 = {}, _expect$toEqual2[nId] = {
      id: nId,
      title: 'Title',
      descr: newDescr
    }, _expect$toEqual2));
  });
  test('should set new labels', function () {
    var _state3, _expect$toEqual3;

    var nId = 'n-1',
        labelsTo = [{
      id: 'nl-1',
      title: 'Story',
      color: 'green'
    }],
        state = (_state3 = {}, _state3[nId] = {
      id: nId,
      title: 'Title'
    }, _state3);
    expect((0, _reducer["default"])(state, _actions["default"].editNoteLabels(nId, [], labelsTo, []))).toEqual((_expect$toEqual3 = {}, _expect$toEqual3[nId] = {
      id: nId,
      title: 'Title',
      labels: labelsTo
    }, _expect$toEqual3));
  });
  test('should add note', function () {
    var _extends2;

    var cId = 'c-1',
        nId = 'n-3';
    expect((0, _reducer["default"])(state, _actions["default"].addNote(cId, nId))).toEqual((0, _extends3["default"])({}, state, (_extends2 = {}, _extends2[nId] = {
      id: nId,
      title: 'New Note'
    }, _extends2)));
  });
  test('should remove note', function () {
    var cId = 'c-1',
        nId = 'n-1';
    expect((0, _reducer["default"])(state, _actions["default"].deleteNote(cId, nId))).toEqual({
      'n-2': {
        id: 'n-2',
        title: 'Note 2'
      }
    });
  });
});
//# sourceMappingURL=reducer.test.js.map