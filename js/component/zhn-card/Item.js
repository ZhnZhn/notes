"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _crStyle = _interopRequireDefault(require("../zhn-utils/crStyle"));

var _Item = _interopRequireDefault(require("../style/Item.Style"));

var _CL = _interopRequireDefault(require("../style/CL"));

var _jsxRuntime = require("react/jsx-runtime");

var S_HIDE = {
  display: 'none'
};

var Item = function Item(_ref) {
  var isHide = _ref.isHide,
      children = _ref.children;

  var TS = (0, _useTheme["default"])(_Item["default"]),
      _style = (0, _crStyle["default"])(TS.ITEM, [isHide, S_HIDE]);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    className: _CL["default"].ITEM_CARD,
    style: _style,
    children: children
  });
};

var _default = Item;
exports["default"] = _default;
//# sourceMappingURL=Item.js.map