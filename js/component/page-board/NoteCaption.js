"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var _InputText = _interopRequireDefault(require("../zhn/InputText"));

var _SvgMore = _interopRequireDefault(require("../zhn/SvgMore"));

var _NoteHandle = _interopRequireDefault(require("./NoteHandle"));

var _NoteMenuMore = _interopRequireDefault(require("./NoteMenuMore"));

var CL = {
  CAPTION: 'note__caption',
  BT_MORE: 'note__bt-more',
  MENU_MORE: 'note__menu-more'
};

var NoteCaption = function NoteCaption(_ref) {
  var dragHandleProps = _ref.dragHandleProps,
      isDetails = _ref.isDetails,
      onClickHandle = _ref.onClickHandle,
      noteTitle = _ref.noteTitle,
      onBlurTitle = _ref.onBlurTitle,
      isMenuMore = _ref.isMenuMore,
      onClickMenuMore = _ref.onClickMenuMore,
      onCloseMenuMore = _ref.onCloseMenuMore,
      onEditDetails = _ref.onEditDetails,
      onRemoveNote = _ref.onRemoveNote;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NoteHandle["default"], (0, _extends2["default"])({}, dragHandleProps, {
      isDetails: isDetails,
      onClick: onClickHandle
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputText["default"], {
      className: CL.CAPTION,
      value: noteTitle,
      onBlur: onBlurTitle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore["default"], {
      className: CL.BT_MORE,
      title: "Click to open note menu",
      onClick: onClickMenuMore
    }), isMenuMore && /*#__PURE__*/(0, _jsxRuntime.jsx)(_NoteMenuMore["default"], {
      isShow: isMenuMore,
      className: CL.MENU_MORE,
      onClose: onCloseMenuMore,
      onEdit: onEditDetails,
      onRemove: onRemoveNote
    })]
  });
};

var _default = NoteCaption;
exports["default"] = _default;
//# sourceMappingURL=NoteCaption.js.map