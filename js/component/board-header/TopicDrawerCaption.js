'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CL = require('./CL');

var _CL2 = _interopRequireDefault(_CL);

var _crTitle = require('./crTitle');

var _crTitle2 = _interopRequireDefault(_crTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOPICS = 'Topics';

var TopicDrawerCaption = function TopicDrawerCaption(_ref) {
  var board = _ref.board;
  return _react2.default.createElement(
    'div',
    { className: _CL2.default.DRAWER_TITLE },
    (0, _crTitle2.default)(board, TOPICS)
  );
};

exports.default = TopicDrawerCaption;
//# sourceMappingURL=TopicDrawerCaption.js.map