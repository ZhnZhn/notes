"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _reactRouterDom = require("react-router-dom");

var _Header = _interopRequireDefault(require("../zhn-ch/Header"));

var _TopicDrawer = _interopRequireDefault(require("./TopicDrawer"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _HeaderDrawer = _interopRequireDefault(require("../header/HeaderDrawer"));

var _CL = _interopRequireDefault(require("../style/CL"));

var Header = function Header(_ref) {
  var addColumn = _ref.addColumn;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Header["default"], {
    className: _CL["default"].HEADER,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicDrawer["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
      caption: "Add Topic",
      title: "Click to add topic to board",
      accessKey: "a",
      timeout: 500,
      onClick: addColumn
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.NavLink, {
        to: "/boards",
        className: _CL["default"].NAV_LINK + " " + _CL["default"].ML_8,
        children: "ToBoards"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderDrawer["default"], {})]
  });
};

var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=Header.js.map