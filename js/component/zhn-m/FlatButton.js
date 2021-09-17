"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _crStyle = _interopRequireDefault(require("../zhn-utils/crStyle"));

var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = {
  BT: 'bt-flat',
  BT_DIV: 'bt-flat__div',
  BT_SPAN: 'bt-flat__span'
};
var S = {
  PRIMARY: {
    color: '#607d8b'
  }
};

var _crTitle = function _crTitle(title, accessKey) {
  return accessKey ? title + " [" + accessKey + "]" : title;
};

var FlatButton = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 3000 : _ref$timeout,
      className = _ref.className,
      style = _ref.style,
      _ref$clDiv = _ref.clDiv,
      clDiv = _ref$clDiv === void 0 ? CL.BT_DIV : _ref$clDiv,
      clCaption = _ref.clCaption,
      isPrimary = _ref.isPrimary,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      children = _ref.children,
      _ref$isEvent = _ref.isEvent,
      isEvent = _ref$isEvent === void 0 ? true : _ref$isEvent,
      onClick = _ref.onClick;

  var _refTimeStamp = (0, _react.useRef)(null),
      _hClick = (0, _react.useCallback)(function (event) {
    var _args = isEvent ? event : void 0;

    if (timeout === 0) {
      onClick(_args);
      return;
    }

    var _timeStampPrev = _refTimeStamp.current,
        timeStamp = event.timeStamp;

    if (_timeStampPrev == null || timeStamp - _timeStampPrev > timeout) {
      onClick(_args);
      _refTimeStamp.current = timeStamp;
    }
  }, [isEvent, timeout, onClick]),
      _className = (0, _crCn["default"])(CL.BT, className),
      _clCaption = (0, _crCn["default"])(CL.BT_SPAN, clCaption),
      _style = (0, _crStyle["default"])(style, [isPrimary, S.PRIMARY]),
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