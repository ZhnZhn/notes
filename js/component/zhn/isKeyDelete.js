"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var K_DELETE = 'Delete',
    K_DELETE_CODE = 46;

var isKeyDelete = function isKeyDelete(evt) {
  return evt.key === K_DELETE || evt.keyCode === K_DELETE_CODE;
};

var _default = isKeyDelete;
exports["default"] = _default;
//# sourceMappingURL=isKeyDelete.js.map