"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _TopicItem = _interopRequireDefault(require("./TopicItem"));

var _jsxRuntime = require("react/jsx-runtime");

var S_UL = {
  listStyleType: 'none'
},
    S_LI = {
  position: 'relative'
},
    FN_NOOP = function FN_NOOP() {};

var TopicList = function TopicList(_ref) {
  var board = _ref.board,
      columns = _ref.columns,
      _ref$toggleColumn = _ref.toggleColumn,
      toggleColumn = _ref$toggleColumn === void 0 ? FN_NOOP : _ref$toggleColumn;
  var columnIds = board.columnIds;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
    style: S_UL,
    children: (columnIds || []).map(function (cId) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        style: S_LI,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicItem["default"], {
          topic: columns[cId],
          onClick: function onClick() {
            return toggleColumn({
              columnId: cId
            });
          }
        })
      }, cId);
    })
  });
};

var _default = TopicList;
exports["default"] = _default;
//# sourceMappingURL=TopicList.js.map