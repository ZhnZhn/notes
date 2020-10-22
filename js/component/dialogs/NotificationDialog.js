"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _ModalDialog = _interopRequireDefault(require("../zhn-ch/ModalDialog"));

var CL = {
  ROW: 'd-notif__row',
  CAPTION: 'd-notif__caption',
  DESCR: 'd-notif__descr'
};

var NotificationDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(NotificationDialog, _Component);

  function NotificationDialog() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NotificationDialog.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isShow = _this$props.isShow,
        _this$props$data = _this$props.data,
        data = _this$props$data === void 0 ? {} : _this$props$data,
        TS = _this$props.TS,
        onClose = _this$props.onClose,
        _data$caption = data.caption,
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

  return NotificationDialog;
}(_react.Component);

var _default = NotificationDialog;
exports["default"] = _default;
//# sourceMappingURL=NotificationDialog.js.map