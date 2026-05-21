"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _selectors = require("../../flux/selectors");
var _reducer = require("../../flux/column/reducer");
var _CL = require("./CL");
var _TopicDrawerCaption = _interopRequireDefault(require("./TopicDrawerCaption"));
var _TopicList = _interopRequireDefault(require("./TopicList"));
var _DrawerMsgList = _interopRequireDefault(require("../header/DrawerMsgList"));
var _jsxRuntime = require("react/jsx-runtime");
const TopicDrawerMenu = () => {
  const board = (0, _uiApi.useSelector)(_selectors.selectBoard),
    columns = (0, _uiApi.useSelector)(_selectors.selectColumns),
    dispatch = (0, _uiApi.useDispatch)(),
    _hToggleColumn = (0, _uiApi.useCallback)(cId => {
      dispatch((0, _reducer.toggleColumn)({
        columnId: cId
      }));
    }, [dispatch]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CL.CL_DRAWER_LIST,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicDrawerCaption.default, {
      board: board
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicList.default, {
      board: board,
      columns: columns,
      toggleColumn: _hToggleColumn
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DrawerMsgList.default, {})]
  });
};
var _default = exports.default = TopicDrawerMenu;
//# sourceMappingURL=TopicDrawerMenu.js.map