"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _actions = require("../../flux/note/actions");
var _reducer = require("../../flux/note/reducer");
var _reducer2 = require("../../flux/modal/reducer");
var _NoteCaption = _interopRequireDefault(require("./NoteCaption"));
var _NoteDetails = _interopRequireDefault(require("./NoteDetails"));
var _jsxRuntime = require("react/jsx-runtime");
//import PropsType from 'prop-types'

const CL_NOTE = 'note';
const DnDNote = props => {
  const {
      columnId,
      note,
      dragHandleProps
    } = props,
    {
      id: noteId,
      title: noteTitle
    } = note,
    _refTitle = (0, _uiApi.useRef)(),
    [isMenuMore, openMenuMore, closeMenuMore] = (0, _useBool.default)(),
    [isDetails, toggleDetails] = (0, _useToggle.default)(),
    dispatch = (0, _uiApi.useDispatch)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    _deleteNote = (0, _uiApi.useCallback)(() => {
      dispatch((0, _actions.deleteNote)({
        columnId,
        noteId
      }));
    }, [columnId])
    //dispatch, noteId
    /*eslint-enable react-hooks/exhaustive-deps */
    /*eslint-disable react-hooks/exhaustive-deps */,
    _blurTitle = (0, _uiApi.useCallback)(evt => {
      const title = evt.target.value;
      if (!title) {
        const _titleInst = (0, _uiApi.getRefValue)(_refTitle);
        if (_titleInst) {
          _titleInst.setValue(noteTitle);
        }
      } else if (title !== noteTitle) {
        dispatch((0, _reducer.editNoteTitle)({
          noteId,
          title
        }));
      }
    }, [noteTitle])
    // dispatch, noteId
    /*eslint-enable react-hooks/exhaustive-deps */
    /*eslint-disable react-hooks/exhaustive-deps */,
    _editDetails = (0, _uiApi.useCallback)(() => {
      dispatch((0, _reducer2.showDetails)(note));
      closeMenuMore();
    }, [note]);
  // dispatch, closeMenuMore
  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_NOTE,
    id: noteId,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NoteCaption.default, {
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NoteDetails.default, {
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
var _default = exports.default = DnDNote;
//# sourceMappingURL=Note.js.map