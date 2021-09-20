"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _CL = _interopRequireDefault(require("./CL"));

var _jsxRuntime = require("react/jsx-runtime");

var HIDE = 'hide',
    SHOW = 'show';

var Badge = function Badge(_ref) {
  var isHide = _ref.isHide;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: _CL["default"].BADGE,
    children: isHide ? 'H' : 'S'
  });
};

var _crTitle = function _crTitle(is) {
  return "Click to " + (is ? SHOW : HIDE) + " topic";
};

var TopicItem = function TopicItem(_ref2) {
  var topic = _ref2.topic,
      onClick = _ref2.onClick;

  if (!topic) {
    return null;
  }

  var isHide = topic.isHide,
      title = topic.title,
      _title = _crTitle(isHide);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
      className: _CL["default"].BT,
      caption: title,
      title: _title,
      timeout: 0,
      onClick: onClick
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Badge, {
      isHide: isHide
    })]
  });
};

var _default = TopicItem;
exports["default"] = _default;
//# sourceMappingURL=TopicItem.js.map