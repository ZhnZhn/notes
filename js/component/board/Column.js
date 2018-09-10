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

var _actions = require('../../flux/column/actions');

var _isArrEmpty = require('../../utils/isArrEmpty');

var _isArrEmpty2 = _interopRequireDefault(_isArrEmpty);

var _Card = require('../zhn-card/Card');

var _Card2 = _interopRequireDefault(_Card);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

var _crDnDNotes = require('./crDnDNotes');

var _crDnDNotes2 = _interopRequireDefault(_crDnDNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Column = function (_Component) {
  (0, _inherits3.default)(Column, _Component);

  function Column(props) {
    (0, _classCallCheck3.default)(this, Column);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this));

    _this._hAddNewTask = function () {
      var _this$props = _this.props,
          column = _this$props.column,
          addNote = _this$props.addNote;

      addNote(column.id);
    };

    _this._hBlurTitle = function (evt) {
      var _this$props2 = _this.props,
          column = _this$props2.column,
          editColumnTitle = _this$props2.editColumnTitle;

      editColumnTitle(column.id, evt.target.value);
    };

    _this._hRemoveColumn = function () {
      var _this$props3 = _this.props,
          boardId = _this$props3.boardId,
          column = _this$props3.column,
          removeColumn = _this$props3.removeColumn;

      removeColumn(boardId, column.id);
    };

    _this._hBlurTitle = _this._hBlurTitle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Column, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          column = _props.column,
          notes = _props.notes,
          id = column.id,
          isHide = column.isHide,
          title = column.title,
          withAdd = column.withAdd,
          noteIds = column.noteIds;


      return _react2.default.createElement(
        _Card2.default.Item,
        { isHide: isHide },
        _react2.default.createElement(_Card2.default.Title, {
          value: title,
          onBlur: this._hBlurTitle
        }),
        _react2.default.createElement(_Card2.default.Counter, { value: noteIds.length }),
        withAdd && _react2.default.createElement(_FlatButton2.default, {
          clCaption: _CL2.default.CARD_BT,
          caption: 'AddNote',
          title: 'Click to add a new note',
          timeout: 1000,
          onClick: this._hAddNewTask
        }),
        _react2.default.createElement(
          _reactBeautifulDnd.Droppable,
          { droppableId: id },
          function (provided, snapshot) {
            return (0, _crDnDNotes2.default)(id, notes, noteIds, provided, snapshot);
          }
        ),
        _react2.default.createElement(
          'div',
          null,
          (0, _isArrEmpty2.default)(noteIds) && _react2.default.createElement(_FlatButton2.default, {
            clCaption: _CL2.default.CARD_BT,
            caption: 'Remove Column',
            onClick: this._hRemoveColumn
          })
        )
      );
    }
  }]);
  return Column;
}(_react.Component);

var mapDispatchToProps = {
  editColumnTitle: _actions.editColumnTitle,
  removeColumn: _actions.removeColumn
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Column);
//# sourceMappingURL=Column.js.map