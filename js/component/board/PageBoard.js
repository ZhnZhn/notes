'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _reactRedux = require('react-redux');

var _Header = require('../board-header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Main = require('../zhn-ch/Main');

var _Main2 = _interopRequireDefault(_Main);

var _selectors = require('../../flux/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _actions = require('../../flux/note/actions');

var _actions2 = require('../../flux/column/actions');

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageBoard = function (_Component) {
  (0, _inherits3.default)(PageBoard, _Component);

  function PageBoard() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PageBoard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PageBoard.__proto__ || Object.getPrototypeOf(PageBoard)).call.apply(_ref, [this].concat(args))), _this), _this._hDragEnd = function (result) {
      var destination = result.destination,
          source = result.source,
          draggableId = result.draggableId;

      if (!destination) {
        return;
      }
      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }

      _this.props.moveNote(draggableId, source, destination);
    }, _this._renderColumns = function (board, columns, notes, addNote) {
      return board.columnIds.map(function (cId) {
        var column = columns[cId];
        return _react2.default.createElement(_Column2.default, {
          key: column.id,
          boardId: board.id,
          column: column,
          notes: notes,
          addNote: addNote
        });
      });
    }, _this._hAddColumn = function () {
      var _this$props = _this.props,
          addColumn = _this$props.addColumn,
          board = _this$props.board;

      addColumn(board.id);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PageBoard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          board = _props.board,
          notes = _props.notes,
          columns = _props.columns,
          addNote = _props.addNote;

      return [_react2.default.createElement(_Header2.default, {
        addColumn: this._hAddColumn
      }), _react2.default.createElement(
        _reactBeautifulDnd.DragDropContext,
        {
          onDragEnd: this._hDragEnd
        },
        _react2.default.createElement(
          _Main2.default,
          null,
          this._renderColumns(board, columns, notes, addNote)
        )
      )];
    }
  }]);
  return PageBoard;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    board: _selectors2.default.board.currentBoard(state),
    notes: _selectors2.default.note.notes(state),
    columns: _selectors2.default.column.columns(state)
  };
};
var mapDispatchToProps = {
  moveNote: _actions.moveNote,
  addNote: _actions.addNote,
  addColumn: _actions2.addColumn
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PageBoard);
//# sourceMappingURL=PageBoard.js.map