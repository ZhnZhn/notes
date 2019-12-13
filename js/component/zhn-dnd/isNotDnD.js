"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var isNotDnD = function isNotDnD(result) {
  if (!result || typeof result !== 'object') {
    return false;
  }

  var destination = result.destination,
      source = result.source;
  return !destination || !source || destination.droppableId === source.droppableId && destination.index === source.index;
};

var _default = isNotDnD;
exports["default"] = _default;
//# sourceMappingURL=isNotDnD.js.map