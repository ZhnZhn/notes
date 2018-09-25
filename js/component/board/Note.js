'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _actions = require('../../flux/note/actions');

var _actions2 = require('../../flux/modal/actions');

var _actions3 = _interopRequireDefault(_actions2);

var _NoteCaption = require('./NoteCaption');

var _NoteCaption2 = _interopRequireDefault(_NoteCaption);

var _NoteDetails = require('./NoteDetails');

var _NoteDetails2 = _interopRequireDefault(_NoteDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = 'note';
//import PropsType from 'prop-types'

var C = {
  DRAGGING: '#1e90ff', //dodgerblue
  NOT_DRAGGING: '#9e9e9e'
};

var _getState = function _getState(props) {
  return {
    noteTitle: props.note.title,
    isMenuMore: false,
    isDetails: false
  };
};

var _crRootStyle = function _crRootStyle(isDragging) {
  return {
    backgroundColor: isDragging ? C.DRAGGING : C.NOT_DRAGGING
  };
};

var Note = function (_Component) {
  (0, _inherits3.default)(Note, _Component);

  /*
  static propTypes = {
    provided: PropsType.object,
    snap: PropsType.object,
    note: PropsType.object
  }
  */

  function Note(props) {
    (0, _classCallCheck3.default)(this, Note);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Note.__proto__ || Object.getPrototypeOf(Note)).call(this, props));

    _this._openMenuMore = function () {
      if (!_this.state.isMenuMore) {
        _this.setState({
          isMenuMore: true
        });
      }
    };

    _this._closeMenuMore = function () {
      _this.setState({
        isMenuMore: false
      });
    };

    _this._deleteNote = function () {
      var _this$props = _this.props,
          deleteNote = _this$props.deleteNote,
          columnId = _this$props.columnId,
          note = _this$props.note;

      deleteNote(columnId, note.id);
    };

    _this._blurTitle = function (evt) {
      var newTitle = evt.target.value,
          _this$props2 = _this.props,
          note = _this$props2.note,
          editNoteTitle = _this$props2.editNoteTitle;

      if (newTitle !== note.title) {
        editNoteTitle(note.id, newTitle);
      }
    };

    _this._toggleDetails = function () {
      _this.setState(function (prevState) {
        return {
          isDetails: !prevState.isDetails
        };
      });
    };

    _this._editDetails = function () {
      var _this$props3 = _this.props,
          note = _this$props3.note,
          editDetails = _this$props3.editDetails;

      editDetails(note);
    };

    _this.state = _getState(props);
    return _this;
  }

  (0, _createClass3.default)(Note, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          draggableProps = _props.draggableProps,
          isDragging = _props.isDragging,
          innerRef = _props.innerRef,
          dragHandleProps = _props.dragHandleProps,
          note = _props.note,
          style = draggableProps.style,
          draggablePropsRest = (0, _objectWithoutProperties3.default)(draggableProps, ['style']),
          _style = _crRootStyle(isDragging),
          _state = this.state,
          noteTitle = _state.noteTitle,
          isMenuMore = _state.isMenuMore,
          isDetails = _state.isDetails;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: CL,
          style: (0, _extends3.default)({}, _style, style)
        }, draggablePropsRest, {
          ref: innerRef,
          id: note.id
        }),
        _react2.default.createElement(_NoteCaption2.default, {
          dragHandleProps: dragHandleProps,
          isDetails: isDetails,
          onClickHandle: this._toggleDetails,

          noteTitle: noteTitle,
          onBlurTitle: this._blurTitle,

          isMenuMore: isMenuMore,
          onClickMenuMore: this._openMenuMore,
          onCloseMenuMore: this._closeMenuMore,
          onEditDetails: this._editDetails,
          onRemoveNote: this._deleteNote
        }),
        _react2.default.createElement(_NoteDetails2.default, {
          isShow: isDetails,
          note: note,
          editDetails: this._editDetails
        })
      );
    }
  }]);
  return Note;
}(_react.Component);

var mapDispatchToProps = {
  deleteNote: _actions.deleteNote,
  editNoteTitle: _actions.editNoteTitle,
  editDetails: _actions3.default.showDetails
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Note);
//# sourceMappingURL=Note.js.map