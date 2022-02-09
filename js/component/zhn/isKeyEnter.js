"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var K_ENTER = 'Enter',
    K_ENTER_CODE = 13;

var isKeyEnter = function isKeyEnter(evt) {
  return evt.key === K_ENTER || evt.keyCode === K_ENTER_CODE;
};

var _default = isKeyEnter;
exports["default"] = _default;
//# sourceMappingURL=isKeyEnter.js.map