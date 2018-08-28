'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MD = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _r2;

var _NotificationDialog = require('./NotificationDialog');

var _NotificationDialog2 = _interopRequireDefault(_NotificationDialog);

var _SettingsDialog = require('./SettingsDialog');

var _SettingsDialog2 = _interopRequireDefault(_SettingsDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MD = exports.MD = {
  NOTIF: 'NOTIF',
  SETTINGS: 'SETTINGS'
};

var _r = (_r2 = {
  DF: _NotificationDialog2.default
}, (0, _defineProperty3.default)(_r2, MD.NOTIF, _NotificationDialog2.default), (0, _defineProperty3.default)(_r2, MD.SETTINGS, _SettingsDialog2.default), _r2);

var modalRouter = {
  getDialog: function getDialog(type) {
    return _r[type] || _r.DF;
  }
};

exports.default = modalRouter;
//# sourceMappingURL=modalRouter.js.map