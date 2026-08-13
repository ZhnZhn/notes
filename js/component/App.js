"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("./uiApi");
var _BrowserRouter = require("./zhn-router/BrowserRouter");
var _Router = require("./zhn-router/Router");
var _PageBoard = _interopRequireDefault(require("./page-board/PageBoard"));
var _PageBoards = _interopRequireDefault(require("./page-boards/PageBoards"));
var _WrapperContainer = _interopRequireDefault(require("./zhn-cont/WrapperContainer"));
var _jsxRuntime = require("react/jsx-runtime");
const App = _ref => {
  let {
    basename,
    store
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_uiApi.StrictMode, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_BrowserRouter.BrowserRouter, {
      basename: basename,
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
  });
};
var _default = exports.default = App;
//# sourceMappingURL=App.js.map