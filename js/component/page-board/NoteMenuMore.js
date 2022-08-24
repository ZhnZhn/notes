"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Comp = _interopRequireDefault(require("../style/Comp.Style"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _ModalPane = _interopRequireDefault(require("../zhn-ch/ModalPane"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _CL = _interopRequireDefault(require("../style/CL"));

var _jsxRuntime = require("react/jsx-runtime");

var S_BT = {
  paddingLeft: 8,
  width: '100%',
  textAlign: 'left'
};

var NoteMenuMore = function NoteMenuMore(_ref) {
  var isShow = _ref.isShow,
      className = _ref.className,
      style = _ref.style,
      onClose = _ref.onClose,
      onEdit = _ref.onEdit,
      onRemove = _ref.onRemove;

  var TS = (0, _useTheme["default"])(_Comp["default"]),
      _className = (0, _crCn["default"])(_CL["default"].MODAL_PANE, className);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalPane["default"], {
    className: _className,
    style: (0, _extends2["default"])({}, style, TS.COMP),
    isShow: isShow,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
      style: S_BT,
      caption: "Edit Details",
      onClick: onEdit
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
      style: S_BT,
      caption: "Remove Note",
      onClick: onRemove
    })]
  });
};

var _default = NoteMenuMore;
exports["default"] = _default;
//# sourceMappingURL=NoteMenuMore.js.map