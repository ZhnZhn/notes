"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

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

var PageBoard = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(PageBoard, _Component);

  function PageBoard() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._hDragEnd = function (result) {
      if ((0, _isNotDnD["default"])(result)) {
        return;
      }

      _this.props.moveNote(result);
    };

    _this._renderColumns = function (board, columns, notes, addNote) {
      return board.columnIds.map(function (cId) {
        var column = columns[cId];
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Topic["default"], {
          boardId: board.id,
          column: column,
          notes: notes,
          addNote: addNote
        }, column.id);
      });
    };

    _this._hAddColumn = function () {
      var _this$props = _this.props,
          addColumn = _this$props.addColumn,
          board = _this$props.board;
      addColumn({
        boardId: board.id
      });
    };

    return _this;
  }

  var _proto = PageBoard.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        board = _this$props2.board,
        notes = _this$props2.notes,
        columns = _this$props2.columns,
        addNote = _this$props2.addNote;
    return [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header["default"], {
      addColumn: this._hAddColumn
    }, "header"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBeautifulDnd.DragDropContext, {
      onDragEnd: this._hDragEnd,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Main["default"], {
        children: this._renderColumns(board, columns, notes, addNote)
      })
    }, "ddc")];
  };

  return PageBoard;
}(_react.Component);

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