"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _Header = _interopRequireDefault(require("../zhn-ch/Header"));
var _TopicDrawer = _interopRequireDefault(require("./TopicDrawer"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _HeaderDrawer = _interopRequireDefault(require("../header/HeaderDrawer"));
var _jsxRuntime = require("react/jsx-runtime");
const _CL_NAV_LINK = `${_styleFn.CL_NAV_LINK} ${_styleFn.CL_ML_8}`;
const Header = _ref => {
  let {
    addColumn /*: TopicAction.addColumn */
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Header.default, {
    className: _styleFn.CL_HEADER,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicDrawer.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      caption: "Add Topic",
      title: "Click to add topic to board",
      accessKey: "a",
      timeout: 500,
      onClick: addColumn
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_uiApi.NavLink, {
        to: "/boards",
        className: _CL_NAV_LINK,
        children: "ToBoards"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderDrawer.default, {})]
  });
};
var _default = exports.default = Header;
//# sourceMappingURL=Header.js.map