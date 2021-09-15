"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _reducer = _interopRequireDefault(require("../reducer"));

var _actions = require("../../note/actions");

var _initialState = _interopRequireDefault(require("../../initialState"));

var _store = _interopRequireDefault(require("../../store"));

var _getState = function _getState() {
  return _store["default"].getState();
};

var _getIdFromSlice = function _getIdFromSlice(pathSlice) {
  return Object.keys(_getState()[pathSlice])[0];
};

describe('reducer noteLabels', function () {
  test('should init to initialState', function () {
    expect((0, _reducer["default"])(void 0, {})).toEqual(_initialState["default"].noteLabels);
  });
  test('should add labels to note label slice and note', function () {
    var _expect$toEqual;

    var columnId = _getIdFromSlice('columns');

    _store["default"].dispatch((0, _actions.addNote)({
      columnId: columnId
    }));

    var noteId = _getIdFromSlice('notes');

    var labels = [{
      title: "L1",
      color: "#2f7ed8"
    }];

    _store["default"].dispatch((0, _actions.editNoteLabels)({
      noteId: noteId,
      labels: labels
    }));

    var nextState = _getState();

    var labelId = _getIdFromSlice('noteLabels');

    var labelConfig = (0, _extends2["default"])({
      id: labelId
    }, labels[0]); //Add Labels To noteLabel Slice

    expect(nextState.noteLabels).toEqual((_expect$toEqual = {}, _expect$toEqual[labelId] = labelConfig, _expect$toEqual)); //Add Labels to Note

    expect(nextState.notes[noteId].labels).toEqual([labelConfig]);
  });
});
//# sourceMappingURL=reducer.test.js.map