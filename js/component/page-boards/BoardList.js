"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _selectors = require("../../flux/selectors");
var _BoardCard = _interopRequireDefault(require("./BoardCard"));
var _jsxRuntime = require("react/jsx-runtime");
const BoardList = () => {
  const boardIds = (0, _uiApi.useSelector)(_selectors.selectBoardIds);
  return boardIds.map(id => /*#__PURE__*/(0, _jsxRuntime.jsx)(_BoardCard.default, {
    id: id
  }, id));
};
var _default = exports.default = BoardList;
//# sourceMappingURL=BoardList.js.map