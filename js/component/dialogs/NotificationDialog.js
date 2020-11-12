"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _ModalDialog = _interopRequireDefault(require("../zhn-ch/ModalDialog"));

var CL = {
  ROW: 'd-notif__row',
  CAPTION: 'd-notif__caption',
  DESCR: 'd-notif__descr'
};

var NotificationDialog = function NotificationDialog(_ref) {
  var isShow = _ref.isShow,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      TS = _ref.TS,
      onClose = _ref.onClose;
  var _data$caption = data.caption,
      caption = _data$caption === void 0 ? '' : _data$caption,
      _data$descr = data.descr,
      descr = _data$descr === void 0 ? '' : _data$descr;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog["default"], {
    style: TS.DIALOG,
    caption: "Notification",
    isShow: isShow,
    onClose: onClose,
    children: [caption && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: CL.ROW,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: CL.CAPTION,
        children: caption
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: CL.ROW,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: CL.DESCR,
        children: descr
      })
    })]
  });
};

var _areEqualProps = function _areEqualProps(prevProps, nextProps) {
  return prevProps.isShow === nextProps.isShow;
};

var _default = /*#__PURE__*/(0, _react.memo)(NotificationDialog, _areEqualProps);

exports["default"] = _default;
//# sourceMappingURL=NotificationDialog.js.map