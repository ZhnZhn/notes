"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S.TOPIC,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"].Counter, {
      style: S.COUNTER,
      value: count
    })]
  });
};

var _default = Topic;
exports["default"] = _default;
//# sourceMappingURL=Topic.js.map