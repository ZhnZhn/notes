"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _Item = _interopRequireDefault(require("../style/Item.Style"));
var _CL = require("../style/CL");
var _jsxRuntime = require("react/jsx-runtime");
const Item = _ref => {
  let {
    isHide,
    children
  } = _ref;
  const TS = (0, _useTheme.default)(_Item.default),
    _style = (0, _styleFn.crStyle)(TS.ITEM, [isHide, _styleFn.S_NONE]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    className: _CL.CL_ITEM_CARD,
    style: _style,
    children: children
  });
};
var _default = exports.default = Item;
//# sourceMappingURL=Item.js.map