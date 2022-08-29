"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));

var _ModalDialog = _interopRequireDefault(require("../zhn-ch/ModalDialog"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_ROW = 'd-notif__row',
    CL_CAPTION = 'd-notif__caption',
    CL_DESCR = 'd-notif__descr';
var NotificationDialog = (0, _memoIsShow["default"])(function (_ref) {
  var isShow = _ref.isShow,
      data = _ref.data,
      TS = _ref.TS,
      onClose = _ref.onClose;

  var _ref2 = data || {},
      _ref2$caption = _ref2.caption,
      caption = _ref2$caption === void 0 ? '' : _ref2$caption,
      _ref2$descr = _ref2.descr,
      descr = _ref2$descr === void 0 ? '' : _ref2$descr;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog["default"], {
    style: TS.DIALOG,
    caption: "Notification",
    isShow: isShow,
    onClose: onClose,
    children: [caption && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: CL_ROW,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: CL_CAPTION,
        children: caption
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: CL_ROW,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: CL_DESCR,
        children: descr
      })
    })]
  });
});
var _default = NotificationDialog;
exports["default"] = _default;
//# sourceMappingURL=NotificationDialog.js.map