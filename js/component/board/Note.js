'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../flux/note/actions');

var _InputText = require('../zhn/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _SvgMore = require('../zhn/SvgMore');

var _SvgMore2 = _interopRequireDefault(_SvgMore);

var _MenuMore = require('./MenuMore');

var _MenuMore2 = _interopRequireDefault(_MenuMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = {
  DRAGGING: '#1e90ff', //dodgerblue
  NOT_DRAGGING: '#9e9e9e'
};
//import PropsType from 'prop-types'

var S = {
  ROOT: {
    //display: 'flex',
    position: 'relative',
    border: '1px solid #009688',
    boderRadius: 2,
    padding: 8,
    marginBottom: 8,
    transition: 'background-color 0.2s easy'
  },
  HANDLE: {
    display: 'inline-block',
    width: 24,
    height: 24,
    marginRight: 8,
    backgroundColor: 'darkcyan',
    borderRadius: '50%'
  },
  CONTENT: {
    display: 'inline-block',
    verticalAlign: 'super'
  },
  BT_DELETE: {
    position: 'absolute',
    top: 8,
    right: 8
  },
  MENU_MORE: {
    position: 'absolute',
    //bottom: -8,
    right: 4,
    width: 150
  }
};

var Handle = function Handle(props) {
  return _react2.default.createElement('span', (0, _extends3.default)({
    style: S.HANDLE
  }, props));
};

var _getState = function _getState(props) {
  return {
    noteTitle: props.note.title,
    isMenuMore: false
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
    provided: PropsType.obj,
    snap: PropsType.obj,
    task: PropsType.obj
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

    _this._hDelete = function () {
      var _this$props = _this.props,
          deleteNote = _this$props.deleteNote,
          columnId = _this$props.columnId,
          note = _this$props.note;

      deleteNote(columnId, note.id);
    };

    _this._hBlurTitle = function (evt) {
      var newTitle = evt.target.value,
          _this$props2 = _this.props,
          note = _this$props2.note,
          editNoteTitle = _this$props2.editNoteTitle;

      if (newTitle !== note.title) {
        editNoteTitle(note.id, newTitle);
      }
    };

    _this._hBlurTitle = _this._hBlurTitle.bind(_this);
    _this._closeMenuMore = _this._closeMenuMore.bind(_this);
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
          isMenuMore = _state.isMenuMore;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          style: (0, _extends3.default)({}, S.ROOT, _style, style)
        }, draggablePropsRest, {
          ref: innerRef,
          id: note.id
        }),
        _react2.default.createElement(Handle, dragHandleProps),
        _react2.default.createElement(_InputText2.default, {
          style: S.CONTENT,
          value: noteTitle,
          onBlur: this._hBlurTitle
        }),
        _react2.default.createElement(_SvgMore2.default, {
          style: S.BT_DELETE,
          title: 'Click to open note menu',
          onClick: this._openMenuMore
        }),
        isMenuMore && _react2.default.createElement(_MenuMore2.default, {
          isShow: isMenuMore,
          style: S.MENU_MORE,
          onClose: this._closeMenuMore,
          onRemove: this._hDelete
        })
      );
    }
  }]);
  return Note;
}(_react.Component);

var mapDispatchToProps = {
  deleteNote: _actions.deleteNote,
  editNoteTitle: _actions.editNoteTitle
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Note);
//# sourceMappingURL=Note.js.map