"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

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
  return _react["default"].createElement("span", {
    style: (0, _extends2["default"])({}, S.COUNTER, {}, style)
  }, value);
};

var _default = Counter;
exports["default"] = _default;
//# sourceMappingURL=Counter.js.map