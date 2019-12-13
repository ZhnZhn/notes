"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var crId = function crId(prefix) {
  if (prefix === void 0) {
    prefix = 'a';
  }

  var id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 9)).toUpperCase().substr(12);
  return prefix + "-" + id;
};

var _default = crId;
exports["default"] = _default;
//# sourceMappingURL=crId.js.map