"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("../drawerMsg/actions");

var _crId = _interopRequireDefault(require("./crId"));

var _appConf = _interopRequireDefault(require("../appConf"));

var drawerMsgMiddleware = function drawerMsgMiddleware(store) {
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.ADD_DRAWER_MSG) {
        action = (0, _extends2["default"])({}, action, {
          id: (0, _crId["default"])(_appConf["default"].DMSG_PREFIX)
        });
      }

      return next(action);
    };
  };
};

var _default = drawerMsgMiddleware;
exports["default"] = _default;
//# sourceMappingURL=drawerMsgId.js.map