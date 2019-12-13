"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reducerFns = _interopRequireDefault(require("../reducerFns"));

var filterByProp = _reducerFns["default"].filterByProp;

var crMsg = function crMsg(id
/*: string */
, msg
/*: string */
) {
  return (
    /*: DrawerMsg */
    {
      id: id,
      msg: msg
    }
  );
};

var _default = {
  crMsg: crMsg,
  filterByProp: filterByProp
};
exports["default"] = _default;
//# sourceMappingURL=fns.js.map