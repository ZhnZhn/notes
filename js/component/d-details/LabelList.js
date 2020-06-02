"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _LabelNote = _interopRequireDefault(require("./LabelNote"));

var _CL = _interopRequireDefault(require("../style/CL"));

var S = {
  ROOT: {
    paddingBottom: 4
  }
};

var LabelList = function LabelList(_ref) {
  var labels = _ref.labels,
      onRemove = _ref.onRemove;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: S.ROOT
  }, labels.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_LabelNote["default"], {
      key: item.id || item.title,
      className: _CL["default"].NOTE_LABEL,
      clClose: _CL["default"].NOTE_LABEL_CLOSE,
      item: item,
      onRemove: onRemove ? onRemove.bind(null, item) : undefined
    });
  }));
};

LabelList.defaultProps = {
  labels: []
};
var _default = LabelList;
exports["default"] = _default;
//# sourceMappingURL=LabelList.js.map