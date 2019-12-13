"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reducer = _interopRequireDefault(require("../reducer"));

var _actions = _interopRequireDefault(require("../../note/actions"));

var _initialState = _interopRequireDefault(require("../../initialState"));

describe('reducer noteLabels', function () {
  test('should init to initial state', function () {
    expect((0, _reducer["default"])(undefined, {})).toEqual(_initialState["default"].noteLabels);
  });
  test('should add new labels for notes', function () {
    var _expect$toEqual;

    var id = 'nl-1',
        newLabels = [{
      id: id,
      title: 'Story',
      color: 'green'
    }];
    expect((0, _reducer["default"])({}, _actions["default"].editNoteLabels('n-1', [], [], newLabels))).toEqual((_expect$toEqual = {}, _expect$toEqual[id] = {
      id: id,
      title: 'Story',
      color: 'green'
    }, _expect$toEqual));
  });
});
//# sourceMappingURL=reducer.test.js.map