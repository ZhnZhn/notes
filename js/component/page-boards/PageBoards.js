"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _reactRedux = require("react-redux");

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _actions = require("../../flux/column/actions");

var _isNotDnD = _interopRequireDefault(require("../zhn-dnd/isNotDnD"));

var _Header = _interopRequireDefault(require("./Header"));

var _Main = _interopRequireDefault(require("../zhn-ch/Main"));

var _BoardList = _interopRequireDefault(require("./BoardList"));

var PageBoards = function PageBoards(_ref) {
  var moveColumn = _ref.moveColumn;

  var _hDragEnd = (0, _react.useCallback)(function (result) {
    if ((0, _isNotDnD["default"])(result)) {
      return;
    }

    moveColumn(result);
  }, [moveColumn]);

  return [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header["default"], {}, "header"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBeautifulDnd.DragDropContext, {
    onDragEnd: _hDragEnd,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Main["default"], {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BoardList["default"], {})
    })
  }, "ddc")];
};

var mapDispatchToProps = {
  moveColumn: _actions.moveColumn
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(PageBoards);

exports["default"] = _default;
//# sourceMappingURL=PageBoards.js.map