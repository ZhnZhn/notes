"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _CL = _interopRequireDefault(require("./CL"));

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
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: _CL["default"].BADGE
  }, isHide ? 'H' : 'S');
};

var _crTitle = function _crTitle(is) {
  return "Click to " + (is ? C.SHOW : C.HIDE) + " topic";
};

var TopicItem = function TopicItem(_ref2) {
  var topic = _ref2.topic,
      onClick = _ref2.onClick;

  var isHide = topic.isHide,
      title = topic.title,
      _title = _crTitle(isHide);

  return /*#__PURE__*/_react["default"].createElement("li", {
    style: S.LI
  }, /*#__PURE__*/_react["default"].createElement(_FlatButton["default"], {
    className: _CL["default"].BT,
    caption: title,
    title: _title,
    timeout: 0,
    onClick: onClick
  }), /*#__PURE__*/_react["default"].createElement(Badge, {
    isHide: isHide
  }));
};

TopicItem.defaultProps = {
  topic: {}
};
var _default = TopicItem;
exports["default"] = _default;
//# sourceMappingURL=TopicItem.js.map