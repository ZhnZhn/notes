"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var fIdsTo = function fIdsTo(propName
/*: string */
) {
  return function (state
  /*: {} */
  , ids
  /*: Array<string> */
  ) {
    var _extends2;

    return (0, _extends3["default"])({}, state, (_extends2 = {}, _extends2[propName] = ids, _extends2));
  };
};

var _default = fIdsTo;
exports["default"] = _default;
//# sourceMappingURL=fIdsTo.js.map