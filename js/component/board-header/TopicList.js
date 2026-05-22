"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _TopicItem = _interopRequireDefault(require("./TopicItem"));
var _jsxRuntime = require("react/jsx-runtime");
const S_UL = {
    listStyleType: 'none'
  },
  S_LI = {
    position: 'relative'
  },
  FN_NOOP = () => {};
const TopicList = _ref => {
  let {
    board,
    columns,
    toggleColumn = FN_NOOP
  } = _ref;
  const {
    columnIds
  } = board;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
    style: S_UL,
    children: (0, _uiApi.safeMap)(columnIds, cId => /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      style: S_LI,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicItem.default, {
        topic: columns[cId],
        onClick: () => toggleColumn(cId)
      })
    }, cId))
  });
};
var _default = exports.default = TopicList;
//# sourceMappingURL=TopicList.js.map