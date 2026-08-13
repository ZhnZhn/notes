"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
const ItemStack = (0, _uiApi.memo)(_ref => {
  let {
    items,
    crItem,
    ...restProps
  } = _ref;
  return (0, _isTypeFn.isArr)(items) ? items.map((item, index) => crItem(item, index, restProps)) : null;
});
var _default = exports.default = ItemStack;
//# sourceMappingURL=ItemStack.js.map