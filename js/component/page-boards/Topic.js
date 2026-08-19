"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _CardCounter = _interopRequireDefault(require("../zhn-card/CardCounter"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_TOPIC = 'topic',
  S_COUNTER = {
    float: 'right',
    paddingRight: 12
  };
const Topic = props => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  className: CL_TOPIC,
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    children: props.title
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardCounter.default, {
    style: S_COUNTER,
    value: props.count
  })]
});
var _default = exports.default = Topic;
//# sourceMappingURL=Topic.js.map