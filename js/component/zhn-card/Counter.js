'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  COUNTER: {
    display: 'inline-block',
    fontWeight: 600,
    paddingLeft: 12
  }
};

var Counter = function Counter(_ref) {
  var style = _ref.style,
      value = _ref.value;
  return _react2.default.createElement(
    'span',
    { style: (0, _extends3.default)({}, S.COUNTER, style) },
    value
  );
};

exports.default = Counter;
//# sourceMappingURL=Counter.js.map