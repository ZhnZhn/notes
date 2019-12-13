"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.MD = void 0;

var _NotificationDialog = _interopRequireDefault(require("./NotificationDialog"));

var _SettingsDialog = _interopRequireDefault(require("./SettingsDialog"));

var _DetailsDialog = _interopRequireDefault(require("../d-details/DetailsDialog"));

var _r2;

var MD = {
  NOTIF: 'NOTIF',
  SETTINGS: 'SETTINGS',
  DETAILS: 'DETAILS'
};
exports.MD = MD;

var _r = (_r2 = {
  DF: _NotificationDialog["default"]
}, _r2[MD.NOTIF] = _NotificationDialog["default"], _r2[MD.SETTINGS] = _SettingsDialog["default"], _r2[MD.DETAILS] = _DetailsDialog["default"], _r2);

var modalRouter = {
  getDialog: function getDialog(type) {
    return _r[type] || _r.DF;
  }
};
var _default = modalRouter;
exports["default"] = _default;
//# sourceMappingURL=modalRouter.js.map