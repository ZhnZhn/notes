"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
const isNotDnD = result => {
  if (!(0, _isTypeFn.isObj)(result)) {
    return false;
  }
  const {
    destination,
    source
  } = result;
  return !destination || !source || destination.droppableId === source.droppableId && destination.index === source.index;
};
var _default = exports.default = isNotDnD;
//# sourceMappingURL=isNotDnD.js.map