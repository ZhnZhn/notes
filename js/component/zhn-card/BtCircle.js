'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtCircle = function BtCircle(_ref) {
  var style = _ref.style,
      caption = _ref.caption,
      title = _ref.title,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === undefined ? "-1" : _ref$tabIndex,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    {
      className: _CL2.default.BT_CIRCLE,
      style: style,
      tabIndex: tabIndex,
      title: title,
      onClick: onClick
    },
    caption
  );
};

exports.default = BtCircle;
//# sourceMappingURL=BtCircle.js.map