"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reducer = require("../drawerMsg/reducer");

var _crId = _interopRequireDefault(require("./crId"));

var _appConf = _interopRequireDefault(require("../appConf"));

var _formatTime = function _formatTime(n) {
  return n < 10 ? "0" + n : "" + n;
};

var _crMsg = function _crMsg(msg) {
  var d = new Date();
  return _formatTime(d.getHours()) + ":" + _formatTime(d.getMinutes()) + " " + msg;
};

var drawerMsgMiddleware = function drawerMsgMiddleware() {
  return function (next) {
    return function (action) {
      if (action.type === _reducer.addDrawerMsg.type) {
        var payload = action.payload,
            id = (0, _crId["default"])(_appConf["default"].DMSG_PREFIX);
        payload.id = id;
        payload.msg = _crMsg(payload.msg);
        next(action);
        return id;
      }

      return next(action);
    };
  };
};

var _default = drawerMsgMiddleware;
exports["default"] = _default;
//# sourceMappingURL=drawerMsgId.js.map