"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _InputText = _interopRequireDefault(require("../zhn/InputText"));
var _SvgMore = _interopRequireDefault(require("../zhn/SvgMore"));
var _NoteHandle = _interopRequireDefault(require("./NoteHandle"));
var _NoteMenuMore = _interopRequireDefault(require("./NoteMenuMore"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_CAPTION = 'note__caption',
  CL_BT_MORE = 'note__bt-more',
  CL_MENU_MORE = 'note__menu-more';
const NoteCaption = _ref => {
  let {
    dragHandleProps,
    isDetails,
    onClickHandle,
    refTitle,
    noteTitle,
    onBlurTitle,
    isMenuMore,
    onClickMenuMore,
    onCloseMenuMore,
    onEditDetails,
    onRemoveNote
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NoteHandle.default, {
      ...dragHandleProps,
      isDetails: isDetails,
      onClick: onClickHandle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputText.default, {
      refEl: refTitle,
      className: CL_CAPTION,
      initialValue: noteTitle,
      onBlur: onBlurTitle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore.default, {
      className: CL_BT_MORE,
      title: "Click to open note menu",
      onClick: onClickMenuMore
    }), isMenuMore && /*#__PURE__*/(0, _jsxRuntime.jsx)(_NoteMenuMore.default, {
      isShow: isMenuMore,
      className: CL_MENU_MORE,
      onClose: onCloseMenuMore,
      onEdit: onEditDetails,
      onRemove: onRemoveNote
    })]
  });
};
var _default = exports.default = NoteCaption;
//# sourceMappingURL=NoteCaption.js.map