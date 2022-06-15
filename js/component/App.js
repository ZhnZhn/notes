"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("./uiApi");

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _ThemeContext = _interopRequireDefault(require("./hoc/ThemeContext"));

var _theme = _interopRequireDefault(require("./style/theme"));

var _selectors = require("../flux/selectors");

var _PageBoard = _interopRequireDefault(require("./page-board/PageBoard"));

var _PageBoards = _interopRequireDefault(require("./page-boards/PageBoards"));

var _WrapperContainer = _interopRequireDefault(require("./zhn-cont/WrapperContainer"));

var _jsxRuntime = require("react/jsx-runtime");

var App = function App(_ref) {
  var basename = _ref.basename,
      store = _ref.store;

  var _useState = (0, _uiApi.useState)(_theme["default"]),
      theme = _useState[0],
      setTheme = _useState[1],
      uiTheme = (0, _reactRedux.useSelector)(_selectors.sApp.uiTheme);
  /*eslint-disable react-hooks/exhaustive-deps */


  (0, _uiApi.useEffect)(function () {
    if (theme.getThemeName !== uiTheme) {
      theme.setThemeName(uiTheme);
      setTheme((0, _extends2["default"])({}, theme));
    }
  }, [uiTheme]); //theme

  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_uiApi.StrictMode, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.BrowserRouter, {
      basename: basename,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ThemeContext["default"].Provider, {
        value: theme,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WrapperContainer["default"], {
          store: store
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Routes, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
            path: "/boards/:id",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageBoard["default"], {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
            path: "/boards",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageBoards["default"], {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
            path: "/",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Navigate, {
              to: "/boards",
              replace: true
            })
          })]
        })]
      })
    })
  });
};

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=App.js.map