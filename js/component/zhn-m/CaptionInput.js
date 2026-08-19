"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const S_KEY = {
  textDecoration: 'underline'
};
const _crAccessKeyIndex = (accessKey, caption) => accessKey ? caption.toLowerCase().indexOf(accessKey) : -1;
const _crCaption = (accessKey, caption) => {
  const index = _crAccessKeyIndex(accessKey, caption);
  if (index === -1) {
    return caption;
  }
  const _before = caption.slice(0, index),
    _key = caption.slice(index, index + 1),
    _after = caption.slice(index + 1);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: _before
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_KEY,
      children: _key
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: _after
    })]
  });
};
const CaptionInput = props => props.caption ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
  className: props.className,
  children: [_crCaption(props.accessKey, props.caption), props.children]
}) : null;
var _default = exports.default = CaptionInput;
//# sourceMappingURL=CaptionInput.js.map