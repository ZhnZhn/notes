'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MD = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _NotificationDialog = require('./NotificationDialog');

var _NotificationDialog2 = _interopRequireDefault(_NotificationDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MD = exports.MD = {
  NOTIF: 'NOTIF'
};

var _r = (0, _defineProperty3.default)({
  DF: _NotificationDialog2.default
}, MD.NOTIF, _NotificationDialog2.default);

var modalRouter = {
  getDialog: function getDialog(type) {
    return _r[type] || _r.DF;
  }
};

exports.default = modalRouter;
//# sourceMappingURL=modalRouter.js.map