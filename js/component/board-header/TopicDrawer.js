"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _DrawerLeft = _interopRequireDefault(require("../zhn-ch/DrawerLeft"));

var _HeaderCaption = _interopRequireDefault(require("./HeaderCaption"));

var _TopicDrawerMenu = _interopRequireDefault(require("./TopicDrawerMenu"));

var TopicDrawer = function TopicDrawer() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DrawerLeft["default"], {
    captionComp: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderCaption["default"], {}),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicDrawerMenu["default"], {})
  });
};

var _default = TopicDrawer;
exports["default"] = _default;
//# sourceMappingURL=TopicDrawer.js.map