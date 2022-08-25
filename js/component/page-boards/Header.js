"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _actions = require("../../flux/board/actions");

var _Header = _interopRequireDefault(require("../zhn-ch/Header"));

var _Logo = _interopRequireDefault(require("../zhn/Logo"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _HeaderDrawer = _interopRequireDefault(require("../header/HeaderDrawer"));

var _CL = require("../style/CL");

var _titles = require("../titles");

var _jsxRuntime = require("react/jsx-runtime");

var Header = function Header(_ref) {
  var style = _ref.style,
      addBoard = _ref.addBoard;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Header["default"], {
    className: _CL.CL_HEADER,
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Logo["default"], {
      title: _titles.APP_TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CL.CL_TITLE_GAP
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CL.CL_HEADER_TITLE,
      children: "Notes: Boards"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
      caption: "Add Board",
      title: "Click to add new board",
      accessKey: "a",
      isEvent: false,
      timeout: 200,
      onClick: addBoard
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderDrawer["default"], {})]
  });
};

var mapDispatchToProps = {
  addBoard: _actions.addBoard
};

var _default = (0, _uiApi.connect)(null, mapDispatchToProps)(Header);

exports["default"] = _default;
//# sourceMappingURL=Header.js.map