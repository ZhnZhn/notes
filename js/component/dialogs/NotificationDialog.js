"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));
var _ModalDialog = _interopRequireDefault(require("../zhn-ch/ModalDialog"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_ROW = 'd-notif__row',
  CL_CAPTION = 'd-notif__caption',
  CL_DESCR = 'd-notif__descr';
const NotificationDialog = (0, _memoIsShow.default)(_ref => {
  let {
    isShow,
    data,
    onClose
  } = _ref;
  const {
    caption = '',
    descr = ''
  } = data || {};
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog.default, {
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
var _default = exports.default = NotificationDialog;
//# sourceMappingURL=NotificationDialog.js.map