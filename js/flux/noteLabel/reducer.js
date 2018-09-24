'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('../note/actions');

var _initialState = require('../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.noteLabel;
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTION.EDIT_NOTE_LABELS:
      {
        var newLabels = action.newLabels;

        newLabels.forEach(function (item) {
          state[item.id] = item;
        });
        return (0, _extends3.default)({}, state);
      }
    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map