"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CL_ROOT = "bt-svg-close";

var SvgClose = function SvgClose(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      style = _ref.style,
      tabIndex = _ref.tabIndex,
      onClose = _ref.onClose;
  return _react["default"].createElement("button", {
    tabIndex: tabIndex,
    className: CL_ROOT + " " + className,
    style: style,
    onClick: onClose
  }, _react["default"].createElement("svg", {
    viewBox: "0 0 12 12",
    width: "100%",
    height: "100%",
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("path", {
    d: "M 0,0 L 12,12"
  }), _react["default"].createElement("path", {
    d: "M 12,0 L 0,12"
  })));
};

var _default = SvgClose;
exports["default"] = _default;
//# sourceMappingURL=SvgClose.js.map