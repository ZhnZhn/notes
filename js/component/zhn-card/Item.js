"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Item = _interopRequireDefault(require("../style/Item.Style"));

var _CL = _interopRequireDefault(require("../style/CL"));

var S = {
  HIDE: {
    display: 'none'
  }
};

var Item = function Item(props) {
  var isHide = props.isHide,
      theme = props.theme,
      children = props.children,
      TS = theme.createStyle(_Item["default"]),
      _style = isHide ? (0, _extends2["default"])({}, TS.ITEM, S.HIDE) : TS.ITEM;

  return /*#__PURE__*/_react["default"].createElement("section", {
    className: _CL["default"].ITEM_CARD,
    style: _style
  }, children);
};

var _default = (0, _withTheme["default"])(Item);

exports["default"] = _default;
//# sourceMappingURL=Item.js.map