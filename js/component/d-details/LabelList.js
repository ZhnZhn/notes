"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _bindTo = require("../../utils/bindTo");
var _uiApi = require("../uiApi");
var _LabelNote = _interopRequireDefault(require("./LabelNote"));
var _CL = require("../style/CL");
var _jsxRuntime = require("react/jsx-runtime");
const S_DIV = {
  paddingBottom: 4
};
const LabelList = _ref => {
  let {
    labels,
    onRemove
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: S_DIV,
    children: (0, _uiApi.safeMap)(labels, item => /*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelNote.default, {
      className: _CL.CL_NOTE_LABEL,
      clClose: _CL.CL_NOTE_LABEL_CLOSE,
      item: item,
      onRemove: onRemove ? (0, _bindTo.bindToArg)(onRemove, item) : void 0
    }, item.id || item.title))
  });
};
var _default = exports.default = LabelList;
//# sourceMappingURL=LabelList.js.map