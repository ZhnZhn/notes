"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var DialogButtons = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DialogButtons, _Component);

  function DialogButtons() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._refBtClose = function (node) {
      return _this._btClose = node;
    };

    return _this;
  }

  var _proto = DialogButtons.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        onSave = _this$props.onSave,
        onClose = _this$props.onClose;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: className,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
        caption: "Save",
        timeout: 100,
        onClick: onSave
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
        ref: this._refBtClose,
        caption: "Close",
        timeout: 0,
        onClick: onClose
      })]
    });
  };

  _proto.focusBtClose = function focusBtClose() {
    if (this._btClose && this._btClose.focus) {
      this._btClose.focus();
    }
  };

  return DialogButtons;
}(_react.Component);

var _default = DialogButtons;
exports["default"] = _default;
//# sourceMappingURL=DialogButtons.js.map