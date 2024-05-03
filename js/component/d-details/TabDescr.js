"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBtFocus = _interopRequireDefault(require("./useBtFocus"));
var _reducer = require("../../flux/note/reducer");
var _InputTextArea = _interopRequireDefault(require("../zhn/InputTextArea"));
var _DialogButtons = _interopRequireDefault(require("./DialogButtons"));
var _getNoteDescr = _interopRequireDefault(require("../page-board/getNoteDescr"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_DESCR = 'md-details__descr',
  CL_ACTIONS = 'md__actions';
const TabDescr = props => {
  const {
      isSelected,
      note,
      dispatch,
      onClose
    } = props,
    {
      id
    } = note,
    _refBtClose = (0, _uiApi.useRef)(null),
    _refInputDescr = (0, _uiApi.useRef)(null),
    _editDescr = (0, _uiApi.useCallback)(() => {
      dispatch((0, _reducer.editNoteDescr)({
        noteId: id,
        descr: (0, _uiApi.getRefValue)(_refInputDescr).getValue()
      }));
    }, [id, dispatch]);
  (0, _useBtFocus.default)(_refBtClose, isSelected, props);
  const _initialDescr = (0, _getNoteDescr.default)(note);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputTextArea.default, {
      refEl: _refInputDescr,
      className: CL_DESCR,
      maxLength: 250,
      initialValue: _initialDescr
    }, id), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogButtons.default, {
      refBtClose: _refBtClose,
      className: CL_ACTIONS,
      onSave: _editDescr,
      onClose: onClose
    })]
  });
};
var _default = exports.default = TabDescr;
//# sourceMappingURL=TabDescr.js.map