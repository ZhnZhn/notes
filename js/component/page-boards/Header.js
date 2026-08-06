"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _selectors = require("../../flux/selectors");
var _actions = require("../../flux/board/actions");
var _Header = _interopRequireDefault(require("../zhn-ch/Header"));
var _Logo = _interopRequireDefault(require("../zhn/Logo"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _HeaderDrawer = _interopRequireDefault(require("../header/HeaderDrawer"));
var _CL = require("../style/CL");
var _titles = require("../titles");
var _jsxRuntime = require("react/jsx-runtime");
const Header = _ref => {
  let {
    style
  } = _ref;
  const numberOfBoards = (0, _uiApi.useSelector)(_selectors.selectNumberOfBoards),
    boardsTitle = `Notes: Boards (${numberOfBoards})`,
    dispatch = (0, _uiApi.useDispatch)(),
    _hAddBoard = (0, _uiApi.useCallback)(() => {
      dispatch((0, _actions.addBoard)());
    }, [dispatch]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Header.default, {
    className: _CL.CL_HEADER,
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Logo.default, {
      title: _titles.APP_TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CL.CL_TITLE_GAP
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CL.CL_HEADER_TITLE,
      children: boardsTitle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      caption: "Add Board",
      title: "Click to add new board",
      accessKey: "a",
      isEvent: false,
      timeout: 200,
      onClick: _hAddBoard
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderDrawer.default, {})]
  });
};
var _default = exports.default = Header;
//# sourceMappingURL=Header.js.map