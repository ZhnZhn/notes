"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var S_COUNTER = {
  display: 'inline-block',
  paddingLeft: 12,
  fontWeight: 600
};

var Counter = function Counter(_ref) {
  var style = _ref.style,
      value = _ref.value;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: (0, _extends2["default"])({}, S_COUNTER, style),
    children: value
  });
};

var _default = Counter;
exports["default"] = _default;
//# sourceMappingURL=Counter.js.map