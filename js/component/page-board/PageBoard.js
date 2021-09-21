"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _reactRedux = require("react-redux");

var _selectors = _interopRequireDefault(require("../../flux/selectors"));

var _actions = require("../../flux/note/actions");

var _actions2 = require("../../flux/column/actions");

var _isNotDnD = _interopRequireDefault(require("../zhn-dnd/isNotDnD"));

var _Header = _interopRequireDefault(require("../board-header/Header"));

var _Main = _interopRequireDefault(require("../zhn-ch/Main"));

var _Topic = _interopRequireDefault(require("./Topic"));

var _jsxRuntime = require("react/jsx-runtime");

var ColumnStack = function ColumnStack(_ref) {
  var boardId = _ref.boardId,
      columnIds = _ref.columnIds,
      columns = _ref.columns,
      notes = _ref.notes,
      addNote = _ref.addNote;
  return (columnIds || []).map(function (cId) {
    var column = columns[cId];
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Topic["default"], {
      boardId: boardId,
      column: column,
      notes: notes,
      addNote: addNote
    }, column.id);
  });
};

var PageBoard = function PageBoard(_ref2) {
  var board = _ref2.board,
      notes = _ref2.notes,
      columns = _ref2.columns,
      addNote = _ref2.addNote,
      moveNote = _ref2.moveNote,
      addColumn = _ref2.addColumn;
  var id = board.id,
      columnIds = board.columnIds;
  /*eslint-disable react-hooks/exhaustive-deps */

  var _hDragEnd = (0, _react.useCallback)(function (result) {
    if (!(0, _isNotDnD["default"])(result)) {
      moveNote(result);
    }
  }, []) //moveNote
  ,
      _hAddColumn = (0, _react.useCallback)(function () {
    addColumn({
      boardId: id
    });
  }, []); //addColumn, id

  /*eslint-enable react-hooks/exhaustive-deps */


  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header["default"], {
      addColumn: _hAddColumn
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBeautifulDnd.DragDropContext, {
      onDragEnd: _hDragEnd,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Main["default"], {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ColumnStack, {
          boardId: id,
          columnIds: columnIds,
          columns: columns,
          notes: notes,
          addNote: addNote
        })
      })
    })]
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    board: _selectors["default"].board.currentBoard(state),
    notes: _selectors["default"].note.notes(state),
    columns: _selectors["default"].column.columns(state)
  };
};

var mapDispatchToProps = {
  moveNote: _actions.moveNote,
  addNote: _actions.addNote,
  addColumn: _actions2.addColumn
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PageBoard);

exports["default"] = _default;
//# sourceMappingURL=PageBoard.js.map