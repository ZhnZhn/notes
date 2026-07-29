"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("./uiApi");
var _BrowserRouter = require("./zhn-router/BrowserRouter");
var _Router = require("./zhn-router/Router");
var _ThemeContext = _interopRequireDefault(require("./hoc/ThemeContext"));
var _theme = _interopRequireDefault(require("./style/theme"));
var _selectors = require("../flux/selectors");
var _PageBoard = _interopRequireDefault(require("./page-board/PageBoard"));
var _PageBoards = _interopRequireDefault(require("./page-boards/PageBoards"));
var _WrapperContainer = _interopRequireDefault(require("./zhn-cont/WrapperContainer"));
var _jsxRuntime = require("react/jsx-runtime");
const App = _ref => {
  let {
    basename,
    store
  } = _ref;
  const [theme, setTheme] = (0, _uiApi.useState)(_theme.default),
    uiTheme = (0, _uiApi.useSelector)(_selectors.selectAppUiTheme);

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    if (theme.getThemeName !== uiTheme) {
      theme.setThemeName(uiTheme);
      setTheme({
        ...theme
      });
    }
  }, [uiTheme]);
  //theme
  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_uiApi.StrictMode, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BrowserRouter.BrowserRouter, {
      basename: basename,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ThemeContext.default.Provider, {
        value: theme,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WrapperContainer.default, {
          store: store
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Router.Routes, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Router.Route, {
            path: "/boards/:id",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageBoard.default, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Router.Route, {
            path: "/boards",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageBoards.default, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Router.Route, {
            path: "/",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Router.Navigate, {
              to: "/boards",
              replace: true
            })
          })]
        })]
      })
    })
  });
};
var _default = exports.default = App;
//# sourceMappingURL=App.js.map