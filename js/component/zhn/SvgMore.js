"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = "bt-svg-more";

var SvgMore = function SvgMore(_ref) {
  var style = _ref.style,
      svgStyle = _ref.svgStyle,
      title = _ref.title,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    "button",
    {
      className: CL,
      style: style,
      title: title,
      onClick: onClick
    },
    _react2.default.createElement(
      "svg",
      {
        style: svgStyle,
        width: "6px", height: "22px",
        viewBox: "0 0 6 22",
        preserveAspectRatio: "none", xmlns: "http://www.w3.org/2000/svg"
      },
      _react2.default.createElement("circle", { cx: "3", cy: "4", r: "2" }),
      _react2.default.createElement("circle", { cx: "3", cy: "11", r: "2" }),
      _react2.default.createElement("circle", { cx: "3", cy: "18", r: "2" })
    )
  );
};

exports.default = SvgMore;
//# sourceMappingURL=SvgMore.js.map