"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _reactRedux = require("react-redux");

var _actions = require("../../flux/note/actions");

var _actions2 = _interopRequireDefault(require("../../flux/modal/actions"));

var _NoteCaption = _interopRequireDefault(require("./NoteCaption"));

var _NoteDetails = _interopRequireDefault(require("./NoteDetails"));

//import PropsType from 'prop-types'
var CL = 'note';

var _getState = function _getState(props) {
  return {
    noteTitle: props.note.title,
    isMenuMore: false,
    isDetails: false
  };
};

var DnDNote = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DnDNote, _Component);

  /*
  static propTypes = {
    dragHandleProps: PropsType.object,
    note: PropsType.object
    columnId: PropsType.string
  }
  */
  function DnDNote(props) {
    var _this;

    _this = _Component.call(this, props) || this;

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

      _this._closeMenuMore();
    };

    _this.state = _getState(props);
    return _this;
  }

  var _proto = DnDNote.prototype;

  _proto.render = function render() {
    var _this$props4 = this.props,
        dragHandleProps = _this$props4.dragHandleProps,
        note = _this$props4.note,
        _this$state = this.state,
        noteTitle = _this$state.noteTitle,
        isMenuMore = _this$state.isMenuMore,
        isDetails = _this$state.isDetails;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL,
      id: note.id,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NoteCaption["default"], {
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NoteDetails["default"], {
        isShow: isDetails,
        note: note,
        editDetails: this._editDetails
      })]
    });
  };

  return DnDNote;
}(_react.Component);

var mapDispatchToProps = {
  deleteNote: _actions.deleteNote,
  editNoteTitle: _actions.editNoteTitle,
  editDetails: _actions2["default"].showDetails
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(DnDNote);

exports["default"] = _default;
//# sourceMappingURL=Note.js.map