"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _ModalPane = _interopRequireDefault(require("../zhn-ch/ModalPane"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalPane.default, {
    isShow: isShow,
    className: (0, _styleFn.crCn)(_styleFn.CL_MODAL_PANE, className),
    style: style,
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