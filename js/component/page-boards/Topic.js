"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("../zhn-card/Card"));

var S = {
  TOPIC: {
    paddingLeft: 12,
    lineHeight: 2
  },
  COUNTER: {
    "float": 'right',
    paddingRight: 12
  }
};

var Topic = function Topic(_ref) {
  var title = _ref.title,
      count = _ref.count;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: S.TOPIC
  }, /*#__PURE__*/_react["default"].createElement("span", null, title), /*#__PURE__*/_react["default"].createElement(_Card["default"].Counter, {
    style: S.COUNTER,
    value: count
  }));
};

var _default = Topic;
exports["default"] = _default;
//# sourceMappingURL=Topic.js.map