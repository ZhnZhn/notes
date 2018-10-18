'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNotDnD = function isNotDnD(result) {
  if (!result || (typeof result === 'undefined' ? 'undefined' : (0, _typeof3.default)(result)) !== 'object') {
    return false;
  }
  var destination = result.destination,
      source = result.source;

  return !destination || !source || destination.droppableId === source.droppableId && destination.index === source.index;
};

exports.default = isNotDnD;
//# sourceMappingURL=isNotDnD.js.map