"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getModalDialog = exports.MD_SETTINGS = exports.MD_NOTIF = exports.MD_DETAILS = void 0;
var _objFn = require("../../utils/objFn");
var _NotificationDialog = _interopRequireDefault(require("./NotificationDialog"));
var _SettingsDialog = _interopRequireDefault(require("./SettingsDialog"));
var _DetailsDialog = _interopRequireDefault(require("../d-details/DetailsDialog"));
const MD_NOTIF = exports.MD_NOTIF = 'NOTIF';
const MD_SETTINGS = exports.MD_SETTINGS = 'SETTINGS';
const MD_DETAILS = exports.MD_DETAILS = 'DETAILS';
const _r = (0, _objFn.crObjHm)({
  DF: _NotificationDialog.default,
  [MD_NOTIF]: _NotificationDialog.default,
  [MD_SETTINGS]: _SettingsDialog.default,
  [MD_DETAILS]: _DetailsDialog.default
});
const getModalDialog = type => _r[type] || _r.DF;
exports.getModalDialog = getModalDialog;
//# sourceMappingURL=modalRouter.js.map