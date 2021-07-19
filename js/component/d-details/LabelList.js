"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _LabelNote = _interopRequireDefault(require("./LabelNote"));

var _CL = _interopRequireDefault(require("../style/CL"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  ROOT: {
    paddingBottom: 4
  }
};

var LabelList = function LabelList(_ref) {
  var labels = _ref.labels,
      onRemove = _ref.onRemove;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: S.ROOT,
    children: labels.map(function (item) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelNote["default"], {
        className: _CL["default"].NOTE_LABEL,
        clClose: _CL["default"].NOTE_LABEL_CLOSE,
        item: item,
        onRemove: onRemove ? onRemove.bind(null, item) : undefined
      }, item.id || item.title);
    })
  });
};

LabelList.defaultProps = {
  labels: []
};
var _default = LabelList;
exports["default"] = _default;
//# sourceMappingURL=LabelList.js.map