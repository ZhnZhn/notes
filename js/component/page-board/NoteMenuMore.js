"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Comp = _interopRequireDefault(require("../style/Comp.Style"));

var _ModalPane = _interopRequireDefault(require("../zhn-ch/ModalPane"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _CL = _interopRequireDefault(require("../style/CL"));

var NoteMenuMore = function NoteMenuMore(_ref) {
  var theme = _ref.theme,
      className = _ref.className,
      style = _ref.style,
      isShow = _ref.isShow,
      onClose = _ref.onClose,
      onEdit = _ref.onEdit,
      onRemove = _ref.onRemove;
  var TS = theme.createStyle(_Comp["default"]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalPane["default"], {
    className: _CL["default"].MODAL_PANE + " " + (className || ''),
    style: (0, _extends2["default"])({}, style, TS.COMP),
    isShow: isShow,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
        caption: "Edit Details",
        onClick: onEdit
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
        caption: "Remove Note",
        onClick: onRemove
      })
    })]
  });
};

var _default = (0, _withTheme["default"])(NoteMenuMore);

exports["default"] = _default;
//# sourceMappingURL=NoteMenuMore.js.map