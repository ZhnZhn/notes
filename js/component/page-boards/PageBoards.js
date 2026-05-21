"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _reactBeautifulDnd = require("react-beautiful-dnd");
var _actions = require("../../flux/column/actions");
var _isNotDnD = _interopRequireDefault(require("../zhn-dnd/isNotDnD"));
var _Header = _interopRequireDefault(require("./Header"));
var _Main = _interopRequireDefault(require("../zhn-ch/Main"));
var _BoardList = _interopRequireDefault(require("./BoardList"));
var _jsxRuntime = require("react/jsx-runtime");
const PageBoards = () => {
  const dispatch = (0, _uiApi.useDispatch)(),
    _hDragEnd = (0, _uiApi.useCallback)(result => {
      if ((0, _isNotDnD.default)(result)) {
        return;
      }
      dispatch((0, _actions.moveColumn)(result));
    }, [dispatch]);
  return [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {}, "header"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBeautifulDnd.DragDropContext, {
    onDragEnd: _hDragEnd,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Main.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BoardList.default, {})
    })
  }, "ddc")];
};
var _default = exports.default = PageBoards;
//# sourceMappingURL=PageBoards.js.map