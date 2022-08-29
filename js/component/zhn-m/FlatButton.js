"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useThrottleClick = _interopRequireDefault(require("../hooks/useThrottleClick"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _crStyle = _interopRequireDefault(require("../zhn-utils/crStyle"));

var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_BT_FLAT = 'bt-flat',
    CL_BT_FLAT_DIV = 'bt-flat__div',
    CL_BT_FLAT_SPAN = 'bt-flat__span',
    S_PRIMARY = {
  color: '#607d8b'
};

var _crTitle = function _crTitle(title, accessKey) {
  return accessKey ? title + " [" + accessKey + "]" : title;
};

var FlatButton = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var timeout = _ref.timeout,
      className = _ref.className,
      style = _ref.style,
      _ref$clDiv = _ref.clDiv,
      clDiv = _ref$clDiv === void 0 ? CL_BT_FLAT_DIV : _ref$clDiv,
      clCaption = _ref.clCaption,
      isPrimary = _ref.isPrimary,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      children = _ref.children,
      isEvent = _ref.isEvent,
      onClick = _ref.onClick;

  var _hClick = (0, _useThrottleClick["default"])(onClick, timeout, isEvent),
      _className = (0, _crCn["default"])(CL_BT_FLAT, className),
      _clCaption = (0, _crCn["default"])(CL_BT_FLAT_SPAN, clCaption),
      _style = (0, _crStyle["default"])(style, [isPrimary, S_PRIMARY]),
      _title = _crTitle(title, accessKey);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ref: ref,
    className: _className,
    style: _style,
    accessKey: accessKey,
    title: _title,
    onClick: _hClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: clDiv,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionInput["default"], {
        className: _clCaption,
        caption: caption,
        accessKey: accessKey
      }), children]
    })
  });
});
var _default = FlatButton;
exports["default"] = _default;
//# sourceMappingURL=FlatButton.js.map