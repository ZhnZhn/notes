'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = require('../../note/actions');

var _actions2 = _interopRequireDefault(_actions);

var _initialState = require('../../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('reducer noteLabels', function () {
  test('should init to initial state', function () {
    expect((0, _reducer2.default)(undefined, {})).toEqual(_initialState2.default.noteLabel);
  });
  test('should add new labels for notes', function () {
    var id = 'nl-1',
        newLabels = [{
      id: id, title: 'Story', color: 'green'
    }];
    expect((0, _reducer2.default)({}, _actions2.default.editNoteLabels('n-1', [], [], newLabels))).toEqual((0, _defineProperty3.default)({}, id, {
      id: id,
      title: 'Story',
      color: 'green'
    }));
  });
});
//# sourceMappingURL=reducer.test.js.map