"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require("babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fIdsTo = function fIdsTo(propName /*: string */) {
  return function (state /*: {} */
  , ids /*: Array<string> */) {
    return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, propName, ids));
  };
};

exports.default = fIdsTo;
//# sourceMappingURL=fIdsTo.js.map