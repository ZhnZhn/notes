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
const TopicMenuMore = _ref => {
  let {
    style,
    isShow,
    onHideTopic,
    onAddNote,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalPane.default, {
    isShow: isShow,
    className: _styleFn.CL_MODAL_PANE,
    style: style,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      style: S_BT,
      caption: "Hide Topic",
      title: "Click to hide Topic",
      onClick: onHideTopic
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      style: S_BT,
      caption: "Add Note",
      title: "Click to add new Note",
      timeout: 100,
      onClick: onAddNote
    })]
  });
};
var _default = exports.default = TopicMenuMore;
//# sourceMappingURL=TopicMenuMore.js.map