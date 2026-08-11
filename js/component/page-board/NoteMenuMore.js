"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _Comp = _interopRequireDefault(require("../style/Comp.Style"));
var _ModalPane = _interopRequireDefault(require("../zhn-ch/ModalPane"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _CL = require("../style/CL");
var _jsxRuntime = require("react/jsx-runtime");
const S_BT = {
  paddingLeft: 8,
  width: '100%',
  textAlign: 'left'
};
const NoteMenuMore = _ref => {
  let {
    isShow,
    className,
    style,
    onClose,
    onEdit,
    onRemove
  } = _ref;
  const TS = (0, _useTheme.default)(_Comp.default),
    _className = (0, _styleFn.crCn)(_CL.CL_MODAL_PANE, className);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalPane.default, {
    className: _className,
    style: {
      ...style,
      ...TS.COMP
    },
    isShow: isShow,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      style: S_BT,
      caption: "Edit Details",
      onClick: onEdit
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      style: S_BT,
      caption: "Remove Note",
      onClick: onRemove
    })]
  });
};
var _default = exports.default = NoteMenuMore;
//# sourceMappingURL=NoteMenuMore.js.map