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

var _reactRedux = require('react-redux');

var _actions = require('../../flux/column/actions');

var _isArrEmpty = require('../../utils/isArrEmpty');

var _isArrEmpty2 = _interopRequireDefault(_isArrEmpty);

var _SvgMore = require('../zhn/SvgMore');

var _SvgMore2 = _interopRequireDefault(_SvgMore);

var _TopicMenuMore = require('./TopicMenuMore');

var _TopicMenuMore2 = _interopRequireDefault(_TopicMenuMore);

var _Card = require('../zhn-card/Card');

var _Card2 = _interopRequireDefault(_Card);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _DnDNoteList = require('./DnDNoteList');

var _DnDNoteList2 = _interopRequireDefault(_DnDNoteList);

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  SVG_MORE: {
    marginRight: 8
  },
  MENU_MORE: {
    position: 'absolute',
    width: 150
  }
};

var Topic = function (_Component) {
  (0, _inherits3.default)(Topic, _Component);

  function Topic() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Topic);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Topic.__proto__ || Object.getPrototypeOf(Topic)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isMenuMore: false
    }, _this._openMenuMore = function () {
      if (!_this.state.isMenuMore) {
        _this.setState({
          isMenuMore: true
        });
      }
    }, _this._closeMenuMore = function () {
      _this.setState({
        isMenuMore: false
      });
    }, _this._hHideTopic = function () {
      var _this$props = _this.props,
          toggleColumn = _this$props.toggleColumn,
          column = _this$props.column;

      toggleColumn(column.id);
    }, _this._hAddNewTask = function () {
      var _this$props2 = _this.props,
          column = _this$props2.column,
          addNote = _this$props2.addNote;

      addNote(column.id);
    }, _this._hBlurTitle = function (evt) {
      var _this$props3 = _this.props,
          column = _this$props3.column,
          editColumnTitle = _this$props3.editColumnTitle;

      editColumnTitle(column.id, evt.target.value);
    }, _this._hRemoveColumn = function () {
      var _this$props4 = _this.props,
          boardId = _this$props4.boardId,
          column = _this$props4.column,
          removeColumn = _this$props4.removeColumn;

      removeColumn(boardId, column.id);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Topic, [{
    key: 'render',
    value: function render() {
      var isMenuMore = this.state.isMenuMore,
          _props = this.props,
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
        _react2.default.createElement(_SvgMore2.default, {
          style: S.SVG_MORE,
          title: 'Click to open topic menu',
          onClick: this._openMenuMore
        }),
        isMenuMore && _react2.default.createElement(_TopicMenuMore2.default, {
          style: S.MENU_MORE,
          isShow: isMenuMore,
          onAddNote: this._hAddNewTask,
          onHideTopic: this._hHideTopic,
          onClose: this._closeMenuMore
        }),
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
        _react2.default.createElement(_DnDNoteList2.default, {
          cId: id,
          noteIds: noteIds,
          notes: notes
        }),
        _react2.default.createElement(
          'div',
          null,
          (0, _isArrEmpty2.default)(noteIds) && _react2.default.createElement(_FlatButton2.default, {
            clCaption: _CL2.default.CARD_BT,
            caption: 'Remove Topic',
            onClick: this._hRemoveColumn
          })
        )
      );
    }
  }]);
  return Topic;
}(_react.Component);

var mapDispatchToProps = {
  editColumnTitle: _actions.editColumnTitle,
  removeColumn: _actions.removeColumn,
  toggleColumn: _actions.toggleColumn
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Topic);
//# sourceMappingURL=Topic.js.map