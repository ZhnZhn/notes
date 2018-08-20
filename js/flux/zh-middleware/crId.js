"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var crId = function crId(prefix) {
  var id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 9)).toUpperCase().substr(12);
  return prefix + "-" + id;
};

exports.default = crId;
//# sourceMappingURL=crId.js.map