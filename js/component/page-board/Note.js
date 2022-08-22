"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _reactRedux = require("react-redux");

var _actions = require("../../flux/note/actions");

var _reducer = require("../../flux/note/reducer");

var _reducer2 = require("../../flux/modal/reducer");

var _NoteCaption = _interopRequireDefault(require("./NoteCaption"));

var _NoteDetails = _interopRequireDefault(require("./NoteDetails"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropsType from 'prop-types'
var CL = 'note';

var DnDNote = function DnDNote(props) {
  var columnId = props.columnId,
      note = props.note,
      dragHandleProps = props.dragHandleProps,
      noteId = note.id,
      noteTitle = note.title,
      _refTitle = (0, _uiApi.useRef)(),
      _useBool = (0, _useBool2["default"])(),
      isMenuMore = _useBool[0],
      openMenuMore = _useBool[1],
      closeMenuMore = _useBool[2],
      _useToggle = (0, _useToggle2["default"])(),
      isDetails = _useToggle[0],
      toggleDetails = _useToggle[1],
      dispatch = (0, _reactRedux.useDispatch)(),
      _deleteNote = (0, _uiApi.useCallback)(function () {
    dispatch((0, _actions.deleteNote)({
      columnId: columnId,
      noteId: noteId
    }));
  }, [columnId]),
      _blurTitle = (0, _uiApi.useCallback)(function (evt) {
    var title = evt.target.value;

    if (!title) {
      var _titleInst = (0, _uiApi.getRefValue)(_refTitle);

      if (_titleInst) {
        _titleInst.setValue(noteTitle);
      }
    } else if (title !== noteTitle) {
      dispatch((0, _reducer.editNoteTitle)({
        noteId: noteId,
        title: title
      }));
    }
  }, [noteTitle]),
      _editDetails = (0, _uiApi.useCallback)(function () {
    dispatch((0, _reducer2.showDetails)(note));
    closeMenuMore();
  }, [note]); // dispatch, closeMenuMore

  /*eslint-enable react-hooks/exhaustive-deps */


  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL,
    id: noteId,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NoteCaption["default"], {
      dragHandleProps: dragHandleProps,
      isDetails: isDetails,
      onClickHandle: toggleDetails,
      refTitle: _refTitle,
      noteTitle: noteTitle,
      onBlurTitle: _blurTitle,
      isMenuMore: isMenuMore,
      onClickMenuMore: openMenuMore,
      onCloseMenuMore: closeMenuMore,
      onEditDetails: _editDetails,
      onRemoveNote: _deleteNote
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NoteDetails["default"], {
      isShow: isDetails,
      note: note,
      editDetails: _editDetails
    })]
  });
};
/*
DnDNote.propTypes = {
  dragHandleProps: PropsType.object,
  note: PropsType.object
  columnId: PropsType.string
}
*/


var _default = DnDNote;
exports["default"] = _default;
//# sourceMappingURL=Note.js.map