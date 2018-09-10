'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _CL = require('./CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = {
  HIDE: 'hide',
  SHOW: 'show'
};

var S = {
  LI: {
    position: 'relative'
  }
};

var Badge = function Badge(_ref) {
  var isHide = _ref.isHide;
  return _react2.default.createElement(
    'span',
    { className: _CL2.default.BADGE },
    isHide ? 'H' : 'S'
  );
};

var _crTitle = function _crTitle(is) {
  return 'Click to ' + (is ? C.SHOW : C.HIDE) + ' topic';
};

var TopicItem = function TopicItem(_ref2) {
  var topic = _ref2.topic,
      onClick = _ref2.onClick;

  var isHide = topic.isHide,
      title = topic.title,
      _title = _crTitle(isHide);

  return _react2.default.createElement(
    'li',
    { style: S.LI },
    _react2.default.createElement(_FlatButton2.default, {
      className: _CL2.default.BT,
      caption: title,
      title: _title,
      timeout: 0,
      onClick: onClick
    }),
    _react2.default.createElement(Badge, { isHide: isHide })
  );
};

TopicItem.defaultProps = {
  topic: {}
};

exports.default = TopicItem;
//# sourceMappingURL=TopicItem.js.map