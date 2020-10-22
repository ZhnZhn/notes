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

var TopicMenuMore = function TopicMenuMore(_ref) {
  var style = _ref.style,
      theme = _ref.theme,
      isShow = _ref.isShow,
      onHideTopic = _ref.onHideTopic,
      onAddNote = _ref.onAddNote,
      onClose = _ref.onClose;
  var TS = theme.createStyle(_Comp["default"]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalPane["default"], {
    className: _CL["default"].MODAL_PANE,
    style: (0, _extends2["default"])({}, style, TS.COMP),
    isShow: isShow,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
        caption: "Hide Topic",
        title: "Click to hide Topic",
        onClick: onHideTopic
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
        caption: "Add Note",
        title: "Click to add new Note",
        timeout: 100,
        onClick: onAddNote
      })
    })]
  });
};

var _default = (0, _withTheme["default"])(TopicMenuMore);

exports["default"] = _default;
//# sourceMappingURL=TopicMenuMore.js.map