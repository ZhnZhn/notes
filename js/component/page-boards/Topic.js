'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('../zhn-card/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  TOPIC: {
    paddingLeft: 12,
    lineHeight: 2
  },
  COUNTER: {
    float: 'right',
    paddingRight: 12
  }
};

var Topic = function Topic(_ref) {
  var title = _ref.title,
      count = _ref.count;
  return _react2.default.createElement(
    'div',
    { style: S.TOPIC },
    _react2.default.createElement(
      'span',
      null,
      title
    ),
    _react2.default.createElement(_Card2.default.Counter, {
      style: S.COUNTER,
      value: count
    })
  );
};

exports.default = Topic;
//# sourceMappingURL=Topic.js.map