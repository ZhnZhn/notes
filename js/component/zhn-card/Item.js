"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("react/jsx-runtime");
const Item = _ref => {
  let {
    isHide,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    className: _styleFn.CL_ITEM_CARD,
    style: (0, _styleFn.crStyle)([isHide, _styleFn.S_NONE]),
    children: children
  });
};
var _default = exports.default = Item;
//# sourceMappingURL=Item.js.map