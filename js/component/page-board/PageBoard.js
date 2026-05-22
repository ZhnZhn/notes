"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _reactBeautifulDnd = require("react-beautiful-dnd");
var _selectors = require("../../flux/selectors");
var _actions = require("../../flux/note/actions");
var _actions2 = require("../../flux/column/actions");
var _isNotDnD = _interopRequireDefault(require("../zhn-dnd/isNotDnD"));
var _Header = _interopRequireDefault(require("../board-header/Header"));
var _Main = _interopRequireDefault(require("../zhn-ch/Main"));
var _Topic = _interopRequireDefault(require("./Topic"));
var _jsxRuntime = require("react/jsx-runtime");
const ColumnStack = _ref => {
  let {
    boardId,
    columnIds,
    columns,
    notes
  } = _ref;
  return (0, _uiApi.safeMap)(columnIds, cId => {
    const column = columns[cId];
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Topic.default, {
      boardId: boardId,
      column: column,
      notes: notes
    }, column.id);
  });
};
const PageBoard = () => {
  const board = (0, _uiApi.useSelector)(_selectors.selectCurrentBoard),
    notes = (0, _uiApi.useSelector)(_selectors.selectNotes),
    columns = (0, _uiApi.useSelector)(_selectors.selectColumns),
    dispatch = (0, _uiApi.useDispatch)();
  const {
    id,
    columnIds
  } = board;
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hDragEnd = (0, _uiApi.useCallback)(result => {
      if (!(0, _isNotDnD.default)(result)) {
        dispatch((0, _actions.moveNote)(result));
      }
    }, [])
    //moveNote
    ,
    _hAddColumn = (0, _uiApi.useCallback)(() => {
      dispatch((0, _actions2.addColumn)({
        boardId: id
      }));
    }, []);
  //addColumn, id, dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
      addColumn: _hAddColumn
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBeautifulDnd.DragDropContext, {
      onDragEnd: _hDragEnd,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Main.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ColumnStack, {
          boardId: id,
          columnIds: columnIds,
          columns: columns,
          notes: notes
        })
      })
    })]
  });
};
var _default = exports.default = PageBoard;
//# sourceMappingURL=PageBoard.js.map